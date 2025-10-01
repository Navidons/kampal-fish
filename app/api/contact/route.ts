import { type NextRequest, NextResponse } from "next/server"

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

    // Email content for admin
    const emailContent = `
      NEW CONTACT INQUIRY - KAMPALA FRIED FISH
      
      Contact Details:
      - Phone Number: ${phoneNumber}
      - Inquiry: ${inquiry}
      - Contact Time: ${contactData.contactTime}
      
      ACTION REQUIRED:
      Please contact the customer within 30 minutes via call or WhatsApp to:
      1. Address their inquiry
      2. Provide information about Olusaniya availability
      3. Discuss pricing and delivery options
      4. Take their order if applicable
      
      Customer Contact: ${phoneNumber}
      
      ---
      Kampala Fried Fish - Kabusu, Uganda
    `

    // In a real application, you would send this email to your admin team
    // For now, we'll log it and return success
    console.log("[v0] New contact inquiry received:", contactData)
    console.log("[v0] Email content for admin:", emailContent)

    // Here you would typically:
    // 1. Save inquiry to database
    // 2. Send email to admin team
    // 3. Send SMS/WhatsApp notification to admin team

    // Simulate email sending (replace with actual email service)
    // await sendEmailToAdmin(emailContent, contactData)

    return NextResponse.json({
      success: true,
      message: "Contact inquiry submitted successfully",
      contactId: `CF-${Date.now()}`,
    })
  } catch (error) {
    console.error("[v0] Contact form submission error:", error)
    return NextResponse.json({ error: "Failed to submit contact inquiry" }, { status: 500 })
  }
}

// Function to send email to admin (implement with your email service)
async function sendEmailToAdmin(content: string, contactData: any) {
  // Example implementation with a service like Resend, SendGrid, etc.
  // const emailService = new EmailService()
  // await emailService.send({
  //   to: "admin@kampalafriedfish.com",
  //   subject: `New Contact Inquiry - ${contactData.phoneNumber}`,
  //   text: content
  // })
}
