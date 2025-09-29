import { type NextRequest, NextResponse } from "next/server"

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

    // Email content for customer care assistant
    const emailContent = `
      NEW FISH ORDER - KAMPALA FRIED FISH
      
      Order Details:
      - Product: ${productName}
      - Fish Type: ${fishType}
      - Size & Price: ${selectedSize}
      - Customer Phone: ${phoneNumber}
      - Customer Name: ${customerName || "Not provided"}
      - Special Requests: ${specialRequests || "None"}
      - Order Time: ${orderData.orderTime}
      
      ACTION REQUIRED:
      Please contact the customer within 30 minutes via call or WhatsApp to:
      1. Confirm order details
      2. Get delivery address in Kabusu
      3. Confirm payment method
      4. Arrange fresh fish preparation and delivery
      
      Customer Contact: ${phoneNumber}
      
      ---
      Kampala Fried Fish - Kabusu, Uganda
    `

    // In a real application, you would send this email to your customer care team
    // For now, we'll log it and return success
    console.log("[v0] New order received:", orderData)
    console.log("[v0] Email content for customer care:", emailContent)

    // Here you would typically:
    // 1. Save order to database
    // 2. Send email to customer care assistant
    // 3. Send SMS/WhatsApp notification to customer care team

    // Simulate email sending (replace with actual email service)
    // await sendEmailToCustomerCare(emailContent, orderData)

    return NextResponse.json({
      success: true,
      message: "Order submitted successfully",
      orderId: `KF-${Date.now()}`,
    })
  } catch (error) {
    console.error("[v0] Order submission error:", error)
    return NextResponse.json({ error: "Failed to submit order" }, { status: 500 })
  }
}

// Function to send email to customer care (implement with your email service)
async function sendEmailToCustomerCare(content: string, orderData: any) {
  // Example implementation with a service like Resend, SendGrid, etc.
  // const emailService = new EmailService()
  // await emailService.send({
  //   to: "customercare@kampalafriedfish.com",
  //   subject: `New Fish Order - ${orderData.customerName || orderData.phoneNumber}`,
  //   text: content
  // })
}
