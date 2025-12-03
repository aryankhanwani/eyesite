import nodemailer from 'nodemailer'
import path from 'path'
import fs from 'fs'

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // App Password, not regular password
  },
})

// Verify connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error)
  } else {
    console.log('✅ Email server is ready to send messages')
  }
})

// Helper function to get logo attachments
function getLogoAttachments() {
  const publicPath = path.join(process.cwd(), 'public')
  const attachments = []

  // Logo icon
  const logoIconPath = path.join(publicPath, 'logo-icon.png')
  if (fs.existsSync(logoIconPath)) {
    attachments.push({
      filename: 'logo-icon.png',
      path: logoIconPath,
      cid: 'logo-icon',
    })
  }

  // Main logo
  const logoPath = path.join(publicPath, 'eyesite-logo.png')
  if (fs.existsSync(logoPath)) {
    attachments.push({
      filename: 'eyesite-logo.png',
      path: logoPath,
      cid: 'eyesite-logo',
    })
  }

  return attachments
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
  includeLogos = true,
}: {
  to: string | string[]
  subject: string
  html: string
  text?: string
  includeLogos?: boolean
}) {
  try {
    const attachments = includeLogos ? getLogoAttachments() : []

    const info = await transporter.sendMail({
      from: `"Eyesite Opticians" <${process.env.GMAIL_USER}>`,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      text: text || html.replace(/<[^>]*>/g, ''), // Plain text fallback
      html,
      attachments,
    })

    console.log('✅ Email sent successfully:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error: any) {
    console.error('❌ Error sending email:', error)
    return { success: false, error: error.message }
  }
}

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
  if (!adminEmail) {
    console.error('ADMIN_EMAIL not configured')
    return { success: false, error: 'Admin email not configured' }
  }

  return sendEmail({
    to: adminEmail,
    subject: `[Admin Notification] ${subject}`,
    html,
    text,
  })
}

// Helper function to get base URL for images
function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}

// Email templates
export const emailTemplates = {
  newsletterWelcome: (email: string) => ({
    subject: 'Welcome to Eyesite Opticians Newsletter!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Eyesite Opticians Newsletter</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #faf9f6;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #19395f 0%, #0d2440 100%); padding: 40px 30px; text-align: center;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td align="center" style="padding-bottom: 15px;">
                          <img src="cid:logo-icon" alt="Eyesite Icon" style="width: 48px; height: 48px; object-fit: contain; filter: brightness(0) invert(1);">
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <img src="cid:eyesite-logo" alt="Eyesite Opticians" style="max-width: 200px; height: auto; filter: brightness(0) invert(1);">
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <h1 style="color: #19395f; margin: 0 0 20px 0; font-size: 28px;">Thank You for Subscribing!</h1>
                    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                      Dear Subscriber,
                    </p>
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
  }),

  appointmentConfirmation: (name: string, email: string, phone: string, service: string | null, message: string | null) => ({
    subject: 'Appointment Request Received - Eyesite Opticians',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Appointment Request Confirmed</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #faf9f6;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #19395f 0%, #0d2440 100%); padding: 40px 30px; text-align: center;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td align="center" style="padding-bottom: 15px;">
                          <img src="cid:logo-icon" alt="Eyesite Icon" style="width: 48px; height: 48px; object-fit: contain; filter: brightness(0) invert(1);">
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <img src="cid:eyesite-logo" alt="Eyesite Opticians" style="max-width: 200px; height: auto; filter: brightness(0) invert(1);">
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <h1 style="color: #19395f; margin: 0 0 20px 0; font-size: 28px;">Appointment Request Confirmed</h1>
                    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                      Dear ${name},
                    </p>
                    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                      Thank you for requesting an appointment with Eyesite Opticians. We've received your request and will contact you shortly to confirm your appointment time.
                    </p>
                    
                    <div style="background-color: #f4f6f8; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #19395f;">
                      <h2 style="color: #19395f; margin: 0 0 15px 0; font-size: 20px;">Your Appointment Details:</h2>
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 8px 0; color: #333; font-size: 15px;"><strong>Service:</strong></td>
                          <td style="padding: 8px 0; color: #333; font-size: 15px;">${service || 'General Consultation'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; color: #333; font-size: 15px;"><strong>Contact Number:</strong></td>
                          <td style="padding: 8px 0; color: #333; font-size: 15px;">${phone}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; color: #333; font-size: 15px;"><strong>Email:</strong></td>
                          <td style="padding: 8px 0; color: #333; font-size: 15px;">${email}</td>
                        </tr>
                        ${message ? `
                        <tr>
                          <td style="padding: 8px 0; color: #333; font-size: 15px; vertical-align: top;"><strong>Your Message:</strong></td>
                          <td style="padding: 8px 0; color: #333; font-size: 15px;">${message}</td>
                        </tr>
                        ` : ''}
                      </table>
                    </div>

                    <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 25px 0;">
                      <h3 style="color: #19395f; margin: 0 0 10px 0; font-size: 18px;">What happens next?</h3>
                      <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0;">
                        Our team will contact you at <strong>${phone}</strong> within 24 hours to confirm your appointment time. Please ensure your phone is available.
                      </p>
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
                      If you have any questions, please contact us at 0113 260 0063
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
  }),

  voucherCode: (email: string, code: string) => ({
    subject: 'Your 20% Off Voucher Code - Eyesite Opticians',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Exclusive Voucher Code</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #faf9f6;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #19395f 0%, #0d2440 100%); padding: 40px 30px; text-align: center;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td align="center" style="padding-bottom: 15px;">
                          <img src="cid:logo-icon" alt="Eyesite Icon" style="width: 48px; height: 48px; object-fit: contain; filter: brightness(0) invert(1);">
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <img src="cid:eyesite-logo" alt="Eyesite Opticians" style="max-width: 200px; height: auto; filter: brightness(0) invert(1);">
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Voucher Code Section -->
                <tr>
                  <td style="padding: 40px 30px; text-align: center;">
                    <h1 style="color: #19395f; margin: 0 0 15px 0; font-size: 28px;">Your Exclusive Discount Code</h1>
                    <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                      Thank you for signing up for our special offer!
                    </p>
                    
                    <div style="background: linear-gradient(135deg, #19395f 0%, #0d2440 100%); padding: 30px 25px; border-radius: 12px; margin: 30px 0; text-align: center;">
                      <p style="color: rgba(255,255,255,0.9); font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px 0;">Your Voucher Code</p>
                      <div style="background: rgba(255,255,255,0.15); padding: 12px 18px; border-radius: 8px; margin: 15px auto; display: inline-block; max-width: 100%;">
                        <p style="color: #ffffff; font-size: 20px; font-weight: bold; letter-spacing: 3px; font-family: 'Courier New', monospace; margin: 0; word-break: break-all; user-select: all; -webkit-user-select: all; cursor: text;">${code}</p>
                      </div>
                      <div style="margin-top: 15px;">
                        <a href="${getBaseUrl()}/voucher/${encodeURIComponent(code)}" style="display: inline-block; background: rgba(255,255,255,0.25); color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600; margin-bottom: 8px;">📋 Copy Code</a>
                        <p style="color: rgba(255,255,255,0.85); font-size: 12px; margin: 8px 0 0 0;">Click "Copy Code" or select the code above to copy</p>
                      </div>
                      <div style="background: rgba(255,255,255,0.2); padding: 10px 25px; border-radius: 6px; display: inline-block; margin-top: 15px;">
                        <p style="color: #ffffff; font-size: 20px; font-weight: bold; margin: 0;">20% OFF</p>
                      </div>
                    </div>

                    <div style="background-color: #f4f6f8; padding: 25px; border-radius: 8px; margin: 30px 0; text-align: left;">
                      <h2 style="color: #19395f; margin: 0 0 15px 0; font-size: 20px; text-align: center;">How to use your voucher:</h2>
                      <ul style="color: #333; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                        <li>Valid on <strong>all frames and lenses</strong></li>
                        <li><strong>Premium designer brands included</strong> (Ray-Ban, Gucci, Tom Ford, and more)</li>
                        <li><strong>No minimum purchase</strong> required</li>
                        <li>Simply mention your code when booking your appointment</li>
                        <li>Code is valid until used</li>
                      </ul>
                    </div>

                    <div style="text-align: center; margin: 35px 0;">
                      <a href="${getBaseUrl()}/book-appointment" style="display: inline-block; background-color: #19395f; color: #ffffff; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">Book Your Appointment</a>
                    </div>

                    <div style="background-color: #fff9e6; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #ffc107;">
                      <p style="color: #333; font-size: 14px; line-height: 1.6; margin: 0;">
                        <strong>💡 Tip:</strong> Book your appointment soon to claim your discount! Our expert team will help you find the perfect frames.
                      </p>
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
                      This voucher code is unique to you. Please keep it safe.
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
  }),

  adminNotification: {
    newsletter: (email: string) => ({
      subject: 'New Newsletter Subscription',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
            <p><a href="${getBaseUrl()}/dashboard/appointments" style="color: #19395f;">View in Admin Panel</a></p>
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
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

