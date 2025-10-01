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

    // Verify email connection first
    const isEmailConnected = await verifyEmailConnection()
    if (!isEmailConnected) {
      return NextResponse.json({ 
        error: "Email service temporarily unavailable" 
      }, { status: 503 })
    }

    // Send email to admin
    const emailResult = await sendOrderEmail(orderData)
    
    if (!emailResult.success) {
      return NextResponse.json({ 
        error: "Failed to send notification email" 
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Order submitted successfully",
      orderId: `KF-${Date.now()}`,
      emailSent: true,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit order" }, { status: 500 })
  }
}
