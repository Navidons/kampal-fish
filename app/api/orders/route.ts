import { type NextRequest, NextResponse } from "next/server"
import { sendOrderEmail, verifyEmailConnection } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { productName, fishType, phoneNumber, customerName, selectedSize, specialRequests } = body

    // Validate required fields
    if (!phoneNumber || !selectedSize || !productName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Prepare order data
    const orderData = {
      productName,
      fishType,
      phoneNumber,
      customerName: customerName || "Not provided",
      selectedSize,
      specialRequests: specialRequests || "None",
      orderTime: new Date().toLocaleString("en-UG", {
        timeZone: "Africa/Kampala",
        dateStyle: "full",
        timeStyle: "short",
      }),
      orderDate: new Date().toISOString(),
    }

    console.log("[v0] New order received:", orderData)

    // Verify email connection first
    const isEmailConnected = await verifyEmailConnection()
    if (!isEmailConnected) {
      console.error("[v0] Email service not available")
      return NextResponse.json({ 
        error: "Email service temporarily unavailable" 
      }, { status: 503 })
    }

    // Send email to admin
    const emailResult = await sendOrderEmail(orderData)
    
    if (!emailResult.success) {
      console.error("[v0] Failed to send order email:", emailResult.error)
      return NextResponse.json({ 
        error: "Failed to send notification email" 
      }, { status: 500 })
    }

    console.log("[v0] Order email sent successfully:", emailResult.messageId)

    return NextResponse.json({
      success: true,
      message: "Order submitted successfully",
      orderId: `KF-${Date.now()}`,
      emailSent: true,
    })
  } catch (error) {
    console.error("[v0] Order submission error:", error)
    return NextResponse.json({ error: "Failed to submit order" }, { status: 500 })
  }
}
