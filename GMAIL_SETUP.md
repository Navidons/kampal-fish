# Gmail SMTP Setup Guide

This guide will help you set up Gmail SMTP for sending emails from the Kampala Fried Fish website.

## Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **2-Step Verification**
3. Follow the setup process to enable 2FA

## Step 2: Generate App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **App passwords**
3. Select **Mail** as the app
4. Select **Other (custom name)** as the device
5. Enter "Kampala Fried Fish Website" as the name
6. Click **Generate**
7. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

## Step 3: Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
ADMIN_EMAIL=admin@kampalafriedfish.com
```

## Step 4: Test Configuration

The email service will automatically verify the connection when the first email is sent. Check the console logs for:

- ✅ `Gmail SMTP connection verified successfully` - Connection working
- ❌ `Gmail SMTP connection failed` - Check your credentials

## Troubleshooting

### Common Issues:

1. **"Invalid login"** - Make sure you're using the App Password, not your regular Gmail password
2. **"Less secure app access"** - This is normal, use App Passwords instead
3. **"Connection timeout"** - Check your internet connection and firewall settings

### Security Notes:

- Never commit your `.env.local` file to version control
- App passwords are more secure than regular passwords
- You can revoke app passwords anytime from Google Account settings

## Email Templates

The system sends two types of emails:

1. **Contact Form Emails** - When customers submit inquiries
2. **Order Emails** - When customers place fish orders

Both emails include:
- Customer contact information
- Order/inquiry details
- Action items for follow-up
- Professional HTML formatting

## Support

If you encounter issues:
1. Check the console logs for error messages
2. Verify your Gmail credentials
3. Ensure 2FA is enabled
4. Try generating a new app password
