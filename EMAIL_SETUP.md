# Email Setup Guide - Nodemailer with Gmail

This guide will help you set up email notifications using Nodemailer with Gmail SMTP.

## Prerequisites

- A Gmail account
- 2-Step Verification enabled on your Gmail account

## Setup Steps

### 1. Enable 2-Step Verification

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **2-Step Verification**
3. Follow the prompts to enable it

### 2. Generate App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select **Mail** from the dropdown
3. Select **Other (Custom name)** and enter "Eyesite Website"
4. Click **Generate**
5. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)
   - Remove spaces when adding to `.env.local`

### 3. Configure Environment Variables

Create or update `eyesite/.env.local` file with:

```env
# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your16characterapppassword

# Admin email for notifications
ADMIN_EMAIL=your-email@gmail.com

# Site URL for email images (update when deploying)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Important:**
- Use your **App Password**, not your regular Gmail password
- Never commit `.env.local` to git (it's already in `.gitignore`)
- For production, update `NEXT_PUBLIC_SITE_URL` to your actual domain

### 4. Test Email Sending

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test by submitting:
   - Newsletter subscription
   - Appointment request
   - 20% offer signup

3. Check:
   - Customer receives confirmation email
   - Admin receives notification email
   - Check server console for any errors

## Email Features

### Newsletter Subscription
- **Customer receives:** Welcome email with subscription confirmation
- **Admin receives:** Notification with subscriber email

### Appointment Request
- **Customer receives:** Confirmation email with appointment details
- **Admin receives:** Notification with full appointment information

### Offer Signup (20% Off)
- **Customer receives:** Voucher code email with discount details
- **Admin receives:** Notification with email and voucher code

## Gmail Limits

- **Daily limit:** 500 emails/day (regular Gmail)
- **Rate limit:** ~20-30 emails per minute
- **Best practice:** Don't send more than 100 emails per hour

## Troubleshooting

### "Invalid login" Error
- Make sure you're using **App Password**, not regular password
- Verify App Password has no spaces in `.env.local`
- Ensure 2-Step Verification is enabled

### Emails Not Sending
- Check server console for error messages
- Verify environment variables are set correctly
- Restart dev server after changing `.env.local`

### Emails Going to Spam
- This is normal for Gmail SMTP initially
- Ask recipients to mark as "Not Spam"
- Consider using a custom domain email for better deliverability

### Rate Limit Errors
- Gmail may temporarily block if sending too many emails
- Wait a few hours and try again
- Consider implementing delays between sends for bulk operations

## Production Deployment

When deploying to production:

1. Update `NEXT_PUBLIC_SITE_URL` to your production domain
2. Add environment variables to your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Other platforms: Check their documentation
3. Test email sending in production environment

## Security Notes

- Never commit `.env.local` to version control
- App Passwords are safer than regular passwords
- Rotate App Passwords periodically
- Monitor email sending activity

## Support

If you encounter issues:
1. Check server console logs
2. Verify Gmail account settings
3. Test with a simple email first
4. Check Gmail account for any security alerts

