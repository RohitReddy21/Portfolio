# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions via email for free.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello,

You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio website.
```

4. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy your Public Key** (you'll need this)

## Step 5: Update Contact.tsx

Open `project/src/sections/Contact.tsx` and update these three constants (around line 25-27):

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

Replace:
- `YOUR_SERVICE_ID` with your EmailJS Service ID
- `YOUR_TEMPLATE_ID` with your EmailJS Template ID
- `YOUR_PUBLIC_KEY` with your EmailJS Public Key

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Submit it
4. Check your email inbox for the message

## Troubleshooting

### Gmail API Authentication Error (412: Insufficient authentication scopes)

If you're getting `412 Gmail_API: Request had insufficient authentication scopes`, follow these steps:

1. **Go to EmailJS Dashboard** → **Email Services**
2. **Click on your Gmail service** (the one you created)
3. **Click "Reconnect" or "Re-authenticate"**
4. **Grant all required permissions** when prompted:
   - Make sure to check ALL permission boxes
   - Allow access to send emails
   - Allow access to read your email (if required)
5. **Save the service**
6. **Test again**

**Alternative Solution - Use SMTP Instead of Gmail API:**

If Gmail API continues to have issues, use SMTP:

1. **Delete your current Gmail service** in EmailJS
2. **Add New Service** → Choose **Gmail** → Select **SMTP** option (not OAuth)
3. **Enter your Gmail credentials:**
   - Email: your-email@gmail.com
   - Password: Use an **App Password** (not your regular password)
4. **To create App Password:**
   - Go to Google Account → Security
   - Enable 2-Step Verification (if not already enabled)
   - Go to App Passwords
   - Generate a new app password for "Mail"
   - Use this 16-character password in EmailJS
5. **Save and test**

**Other Common Issues:**

- **"Email service not configured"**: Make sure you've replaced all three constants with your actual EmailJS credentials
- **Email not received**: Check your spam folder and verify your EmailJS service is connected correctly
- **Error sending**: Check the browser console for detailed error messages

## Free Tier Limits

- 200 emails per month (free tier)
- Perfect for portfolio websites
- Upgrade available if you need more

## Security Note

The Public Key is safe to use in frontend code. It's designed to be public. However, for production, consider using environment variables:

1. Create a `.env` file in the `project` folder:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update Contact.tsx to use environment variables:
```typescript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
```

Don't forget to add `.env` to your `.gitignore` file!

