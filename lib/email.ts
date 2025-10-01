import nodemailer from 'nodemailer'

// Gmail SMTP configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
  },
})

// Verify connection configuration
export const verifyEmailConnection = async () => {
  try {
    await transporter.verify()
    return true
  } catch (error) {
    return false
  }
}

// Send email function
export const sendEmail = async (options: {
  to: string
  subject: string
  text: string
  html?: string
}) => {
  try {
    const mailOptions = {
      from: {
        name: 'Kampala Fried Fish',
        address: process.env.GMAIL_USER || '',
      },
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html || options.text,
    }

    const result = await transporter.sendMail(mailOptions)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    return { success: false, error: error }
  }
}

// Send contact form email to admin
export const sendContactFormEmail = async (contactData: {
  phoneNumber: string
  inquiry: string
  contactTime: string
}) => {
  const subject = `New Contact Inquiry - ${contactData.phoneNumber}`
  
  const text = `
NEW CONTACT INQUIRY - KAMPALA FRIED FISH

Contact Details:
- Phone Number: ${contactData.phoneNumber}
- Inquiry: ${contactData.inquiry}
- Contact Time: ${contactData.contactTime}

ACTION REQUIRED:
Please contact the customer within 30 minutes via call or WhatsApp to:
1. Address their inquiry
2. Provide information about Olusaniya availability
3. Discuss pricing and delivery options
4. Take their order if applicable

Customer Contact: ${contactData.phoneNumber}

---
Kampala Fried Fish - Kabusu, Uganda
  `

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #ea580c; margin: 0; font-size: 24px;">🐟 Kampala Fried Fish</h1>
          <p style="color: #666; margin: 5px 0 0 0;">New Contact Inquiry</p>
        </div>
        
        <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">📞 Contact Details</h2>
          <p style="margin: 5px 0; color: #374151;"><strong>Phone Number:</strong> ${contactData.phoneNumber}</p>
          <p style="margin: 5px 0; color: #374151;"><strong>Contact Time:</strong> ${contactData.contactTime}</p>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 16px;">💬 Customer Inquiry</h3>
          <p style="margin: 0; color: #374151; line-height: 1.6;">${contactData.inquiry}</p>
        </div>
        
        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #dc2626; margin: 0 0 15px 0; font-size: 16px;">⚡ ACTION REQUIRED</h3>
          <p style="margin: 5px 0; color: #374151;">Please contact the customer within 30 minutes via call or WhatsApp to:</p>
          <ul style="margin: 10px 0; padding-left: 20px; color: #374151;">
            <li>Address their inquiry</li>
            <li>Provide information about Olusaniya availability</li>
            <li>Discuss pricing and delivery options</li>
            <li>Take their order if applicable</li>
          </ul>
          <p style="margin: 10px 0 0 0; color: #dc2626; font-weight: bold;">Customer Contact: ${contactData.phoneNumber}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; margin: 0; font-size: 14px;">Kampala Fried Fish - Kabusu, Uganda</p>
          <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">Premium Olusaniya (Fried Fish on Large Plates)</p>
        </div>
      </div>
    </div>
  `

  return await sendEmail({
    to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER || '',
    subject,
    text,
    html,
  })
}

// Send order email to admin
export const sendOrderEmail = async (orderData: {
  productName: string
  fishType: string
  phoneNumber: string
  customerName: string
  selectedSize: string
  specialRequests: string
  orderTime: string
}) => {
  const subject = `New Fish Order - ${orderData.customerName || orderData.phoneNumber}`
  
  const text = `
NEW FISH ORDER - KAMPALA FRIED FISH

Order Details:
- Product: ${orderData.productName}
- Fish Type: ${orderData.fishType}
- Size & Price: ${orderData.selectedSize}
- Customer Phone: ${orderData.phoneNumber}
- Customer Name: ${orderData.customerName || "Not provided"}
- Special Requests: ${orderData.specialRequests || "None"}
- Order Time: ${orderData.orderTime}

ACTION REQUIRED:
Please contact the customer within 30 minutes via call or WhatsApp to:
1. Confirm order details
2. Get delivery address in Kabusu
3. Confirm payment method
4. Arrange fresh fish preparation and delivery

Customer Contact: ${orderData.phoneNumber}

---
Kampala Fried Fish - Kabusu, Uganda
  `

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #ea580c; margin: 0; font-size: 24px;">🐟 Kampala Fried Fish</h1>
          <p style="color: #666; margin: 5px 0 0 0;">New Fish Order</p>
        </div>
        
        <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">📦 Order Details</h2>
          <p style="margin: 5px 0; color: #374151;"><strong>Product:</strong> ${orderData.productName}</p>
          <p style="margin: 5px 0; color: #374151;"><strong>Fish Type:</strong> ${orderData.fishType}</p>
          <p style="margin: 5px 0; color: #374151;"><strong>Size & Price:</strong> ${orderData.selectedSize}</p>
          <p style="margin: 5px 0; color: #374151;"><strong>Order Time:</strong> ${orderData.orderTime}</p>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 16px;">👤 Customer Information</h3>
          <p style="margin: 5px 0; color: #374151;"><strong>Phone:</strong> ${orderData.phoneNumber}</p>
          <p style="margin: 5px 0; color: #374151;"><strong>Name:</strong> ${orderData.customerName || "Not provided"}</p>
          ${orderData.specialRequests ? `<p style="margin: 5px 0; color: #374151;"><strong>Special Requests:</strong> ${orderData.specialRequests}</p>` : ''}
        </div>
        
        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #dc2626; margin: 0 0 15px 0; font-size: 16px;">⚡ ACTION REQUIRED</h3>
          <p style="margin: 5px 0; color: #374151;">Please contact the customer within 30 minutes via call or WhatsApp to:</p>
          <ul style="margin: 10px 0; padding-left: 20px; color: #374151;">
            <li>Confirm order details</li>
            <li>Get delivery address in Kabusu</li>
            <li>Confirm payment method</li>
            <li>Arrange fresh fish preparation and delivery</li>
          </ul>
          <p style="margin: 10px 0 0 0; color: #dc2626; font-weight: bold;">Customer Contact: ${orderData.phoneNumber}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; margin: 0; font-size: 14px;">Kampala Fried Fish - Kabusu, Uganda</p>
          <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">Premium Olusaniya (Fried Fish on Large Plates)</p>
        </div>
      </div>
    </div>
  `

  return await sendEmail({
    to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER || '',
    subject,
    text,
    html,
  })
}
