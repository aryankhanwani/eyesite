import nodemailer from 'nodemailer'

// Debug: Confirm module is loaded
console.log('📧 [DEBUG] email.ts module loaded/imported')

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

// Verify connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email transporter error:', error)
    console.log('📧 [DEBUG] Transporter verification failed - Check GMAIL_USER and GMAIL_APP_PASSWORD')
  } else {
    console.log('✅ Email server is ready to send messages')
    console.log('📧 [DEBUG] Transporter verified successfully')
  }
})

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}

function getAdminBaseUrl() {
  return process.env.NEXT_PUBLIC_ADMIN_URL || process.env.ADMIN_BASE_URL || 'http://localhost:3001'
}

// Send email function
export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string | string[]
  subject: string
  html: string
  text?: string
}) {
  // Debug: Log when function is called
  console.log('📧 [DEBUG] sendEmail called - To:', Array.isArray(to) ? to.join(', ') : to, 'Subject:', subject)
  console.log('📧 [DEBUG] GMAIL_USER exists:', !!process.env.GMAIL_USER, 'GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD)
  
  try {
    const info = await transporter.sendMail({
      from: `"Eyesite Opticians" <${process.env.GMAIL_USER}>`,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      text: text || html.replace(/<[^>]*>/g, ''),
      html,
    })

    console.log('✅ Email sent successfully:', info.messageId)
    console.log('📧 [DEBUG] Email send completed successfully')
    return { success: true, messageId: info.messageId }
  } catch (error: any) {
    console.error('❌ Error sending email:', error)
    console.error('📧 [DEBUG] Email send failed - Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
    })
    return { success: false, error: error.message }
  }
}

// Send admin notification
export async function sendAdminNotification({
  subject,
  html,
  text,
}: {
  subject: string
  html: string
  text?: string
}) {
  const adminEmail = process.env.ADMIN_EMAIL
  console.log('📧 [DEBUG] sendAdminNotification called - ADMIN_EMAIL exists:', !!adminEmail)
  if (!adminEmail) {
    console.error('❌ ADMIN_EMAIL not configured')
    return { success: false, error: 'Admin email not configured' }
  }

  return sendEmail({
    to: adminEmail,
    subject: `[Admin Notification] ${subject}`,
    html,
    text,
  })
}

// Email templates
export const emailTemplates = {
  newsletterWelcome: (email: string) => {
    return {
      subject: 'Welcome to Eyesite Opticians Newsletter!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #faf9f6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf9f6;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #19395f 0%, #0d2440 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">Eyesite Opticians</h1>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h1 style="color: #19395f; margin: 0 0 20px 0; font-size: 28px;">Thank You for Subscribing!</h1>
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">Dear Subscriber,</p>
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                        You've successfully subscribed to our newsletter. We're excited to share valuable eye care information, exclusive offers, and updates with you!
                      </p>
                      <div style="background-color: #f4f6f8; padding: 25px; border-radius: 8px; margin: 25px 0;">
                        <h2 style="color: #19395f; margin: 0 0 15px 0; font-size: 20px;">What to Expect:</h2>
                        <ul style="color: #333; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                          <li>Expert eye care tips and advice</li>
                          <li>Exclusive offers and promotions</li>
                          <li>Latest updates from Eyesite Opticians</li>
                          <li>New eyewear collections and designer frames</li>
                          <li>Eye health information and insights</li>
                        </ul>
                      </div>
                      <div style="text-align: center; margin: 35px 0;">
                        <a href="${getBaseUrl()}/book-appointment" style="display: inline-block; background-color: #19395f; color: #ffffff; padding: 14px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">Book Your Appointment</a>
                      </div>
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 30px 0 0 0;">
                        Best regards,<br>
                        <strong style="color: #19395f;">Eyesite Opticians</strong><br>
                        <span style="color: #666; font-size: 14px;">0113 260 0063 | Halton, Leeds</span>
                      </p>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f4f6f8; padding: 25px 30px; text-align: center; border-top: 1px solid #e7e8ea;">
                      <p style="color: #666; font-size: 12px; margin: 0 0 10px 0;">
                        You received this email because you subscribed to our newsletter at Eyesite Opticians.
                      </p>
                      <p style="color: #999; font-size: 11px; margin: 0;">
                        © ${new Date().getFullYear()} Eyesite Opticians. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    }
  },

  appointmentConfirmation: (name: string, email: string, phone: string, service: string | null, message: string | null) => {
    return {
      subject: 'Appointment Request Received - Eyesite Opticians',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #faf9f6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf9f6;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #19395f 0%, #0d2440 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">Eyesite Opticians</h1>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h1 style="color: #19395f; margin: 0 0 20px 0; font-size: 28px;">Appointment Request Confirmed</h1>
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">Dear ${name},</p>
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                        Thank you for requesting an appointment with Eyesite Opticians. We've received your request and will contact you shortly to confirm your appointment time.
                      </p>
                      <div style="background-color: #f4f6f8; padding: 25px; border-radius: 8px; margin: 25px 0;">
                        <h2 style="color: #19395f; margin: 0 0 15px 0; font-size: 20px;">Your Details:</h2>
                        <p style="color: #333; font-size: 15px; margin: 8px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="color: #333; font-size: 15px; margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
                        ${service ? `<p style="color: #333; font-size: 15px; margin: 8px 0;"><strong>Service:</strong> ${service}</p>` : ''}
                        ${message ? `<p style="color: #333; font-size: 15px; margin: 8px 0;"><strong>Message:</strong> ${message}</p>` : ''}
                      </div>
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 30px 0 0 0;">
                        Best regards,<br>
                        <strong style="color: #19395f;">Eyesite Opticians</strong><br>
                        <span style="color: #666; font-size: 14px;">0113 260 0063 | Halton, Leeds</span>
                      </p>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f4f6f8; padding: 25px 30px; text-align: center; border-top: 1px solid #e7e8ea;">
                      <p style="color: #666; font-size: 12px; margin: 0;">
                        © ${new Date().getFullYear()} Eyesite Opticians. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    }
  },

  voucherCode: (email: string, code: string) => {
    return {
      subject: 'Your 20% Off Voucher Code - Eyesite Opticians',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #faf9f6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf9f6;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #19395f 0%, #0d2440 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">Eyesite Opticians</h1>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px; text-align: center;">
                      <h1 style="color: #19395f; margin: 0 0 15px 0; font-size: 28px;">Your Exclusive Discount Code</h1>
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                        Thank you for signing up for our special offer!
                      </p>
                      <div style="background: linear-gradient(135deg, #19395f 0%, #0d2440 100%); padding: 30px 25px; border-radius: 12px; margin: 30px 0; text-align: center;">
                        <p style="color: rgba(255,255,255,0.9); font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px 0;">Your Voucher Code</p>
                        <div style="background: rgba(255,255,255,0.15); padding: 12px 18px; border-radius: 8px; margin: 15px auto; display: inline-block;">
                          <p style="color: #ffffff; font-size: 20px; font-weight: bold; letter-spacing: 3px; font-family: 'Courier New', monospace; margin: 0; word-break: break-all;">${code}</p>
                        </div>
                        <div style="background: rgba(255,255,255,0.2); padding: 10px 25px; border-radius: 6px; display: inline-block; margin-top: 15px;">
                          <p style="color: #ffffff; font-size: 20px; font-weight: bold; margin: 0;">20% OFF</p>
                        </div>
                      </div>
                      <div style="background-color: #f4f6f8; padding: 25px; border-radius: 8px; margin: 30px 0; text-align: left;">
                        <h2 style="color: #19395f; margin: 0 0 15px 0; font-size: 20px; text-align: center;">How to use your voucher:</h2>
                        <ul style="color: #333; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                          <li>Valid on <strong>all frames and lenses</strong></li>
                          <li><strong>Premium designer brands included</strong></li>
                          <li><strong>No minimum purchase</strong> required</li>
                          <li>Simply mention your code when booking your appointment</li>
                        </ul>
                      </div>
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 30px 0 0 0;">
                        Best regards,<br>
                        <strong style="color: #19395f;">Eyesite Opticians</strong><br>
                        <span style="color: #666; font-size: 14px;">0113 260 0063 | Halton, Leeds</span>
                      </p>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f4f6f8; padding: 25px 30px; text-align: center; border-top: 1px solid #e7e8ea;">
                      <p style="color: #666; font-size: 12px; margin: 0;">
                        © ${new Date().getFullYear()} Eyesite Opticians. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    }
  },

  adminNotification: {
    newsletter: (email: string) => ({
      subject: 'New Newsletter Subscription',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #19395f;">New Newsletter Subscription</h2>
            <div style="background-color: #f4f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }),

    appointment: (name: string, email: string, phone: string, service: string | null, message: string | null) => ({
      subject: `New Appointment Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #19395f;">New Appointment Request</h2>
            <div style="background-color: #f4f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Service:</strong> ${service || 'Not specified'}</p>
              ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <p><a href="${getAdminBaseUrl()}/dashboard/appointments" style="color: #19395f;">View in Admin Panel</a></p>
          </div>
        </body>
        </html>
      `,
    }),

    offer: (email: string, code: string) => ({
      subject: `New Offer Signup: ${email}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #19395f;">New Offer Signup</h2>
            <div style="background-color: #f4f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Voucher Code:</strong> <code style="background: #e7e8ea; padding: 4px 8px; border-radius: 4px; font-size: 16px;">${code}</code></p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }),
  },
}

