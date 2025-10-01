import { type NextRequest, NextResponse } from "next/server"
import { sendContactFormEmail, verifyEmailConnection } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phoneNumber, inquiry } = body

    // Validate required fields
    if (!phoneNumber || !inquiry) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Prepare contact data
    const contactData = {
      phoneNumber,
      inquiry,
      contactTime: new Date().toLocaleString("en-UG", {
        timeZone: "Africa/Kampala",
        dateStyle: "full",
        timeStyle: "short",
      }),
      contactDate: new Date().toISOString(),
    }

    console.log("[v0] New contact inquiry received:", contactData)

    // Verify email connection first
    const isEmailConnected = await verifyEmailConnection()
    if (!isEmailConnected) {
      console.error("[v0] Email service not available")
      return NextResponse.json({ 
        error: "Email service temporarily unavailable" 
      }, { status: 503 })
    }

    // Send email to admin
    const emailResult = await sendContactFormEmail(contactData)
    
    if (!emailResult.success) {
      console.error("[v0] Failed to send contact email:", emailResult.error)
      return NextResponse.json({ 
        error: "Failed to send notification email" 
      }, { status: 500 })
    }

    console.log("[v0] Contact email sent successfully:", emailResult.messageId)

    return NextResponse.json({
      success: true,
      message: "Contact inquiry submitted successfully",
      contactId: `CF-${Date.now()}`,
      emailSent: true,
    })
  } catch (error) {
    console.error("[v0] Contact form submission error:", error)
    return NextResponse.json({ error: "Failed to submit contact inquiry" }, { status: 500 })
  }
}
