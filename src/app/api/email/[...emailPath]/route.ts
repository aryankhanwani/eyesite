import { NextResponse } from 'next/server'
import {
  type EmailSendResult,
  emailTemplates,
  sendAdminNotification,
  sendEmail,
} from '@/lib/email'

export const runtime = 'nodejs'

type EmailRouteContext = {
  params: Promise<{
    emailPath: string[]
  }>
}

function badRequest(error: string) {
  return NextResponse.json({ success: false, error }, { status: 400 })
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Failed to send email'
}

function sendResult(result: EmailSendResult) {
  return NextResponse.json(result, { status: result.success ? 200 : 500 })
}

export async function POST(request: Request, context: EmailRouteContext) {
  try {
    const { emailPath } = await context.params
    const endpoint = emailPath.join('/')
    const body = await request.json()

    switch (endpoint) {
      case 'send': {
        const { to, subject, html, text } = body

        if (!to || !subject || !html) {
          return badRequest('Missing required fields: to, subject, html')
        }

        return sendResult(await sendEmail({ to, subject, html, text }))
      }

      case 'admin': {
        const { subject, html, text } = body

        if (!subject || !html) {
          return badRequest('Missing required fields: subject, html')
        }

        return sendResult(await sendAdminNotification({ subject, html, text }))
      }

      case 'newsletter-welcome': {
        const { email } = body

        if (!email) {
          return badRequest('Missing required field: email')
        }

        const template = emailTemplates.newsletterWelcome(email)

        return sendResult(
          await sendEmail({
            to: email,
            subject: template.subject,
            html: template.html,
          })
        )
      }

      case 'appointment-confirmation': {
        const { name, email, phone, service, message } = body

        if (!name || !email || !phone) {
          return badRequest('Missing required fields: name, email, phone')
        }

        const template = emailTemplates.appointmentConfirmation(
          name,
          email,
          phone,
          service,
          message
        )

        return sendResult(
          await sendEmail({
            to: email,
            subject: template.subject,
            html: template.html,
          })
        )
      }

      case 'appointment': {
        const { name, email, phone, service, message } = body

        if (!name || !email || !phone) {
          return badRequest('Missing required fields: name, email, phone')
        }

        const customerTemplate = emailTemplates.appointmentConfirmation(
          name,
          email,
          phone,
          service,
          message
        )
        const adminTemplate = emailTemplates.adminNotification.appointment(
          name,
          email,
          phone,
          service,
          message
        )
        const [customerEmail, adminEmail] = await Promise.all([
          sendEmail({
            to: email,
            subject: customerTemplate.subject,
            html: customerTemplate.html,
          }),
          sendAdminNotification({
            subject: adminTemplate.subject,
            html: adminTemplate.html,
          }),
        ])
        const success = customerEmail.success && adminEmail.success

        return NextResponse.json(
          { success, customerEmail, adminEmail },
          { status: success ? 200 : 500 }
        )
      }

      case 'voucher-code': {
        const { email, code } = body

        if (!email || !code) {
          return badRequest('Missing required fields: email, code')
        }

        const template = emailTemplates.voucherCode(email, code)

        return sendResult(
          await sendEmail({
            to: email,
            subject: template.subject,
            html: template.html,
          })
        )
      }

      case 'admin/newsletter': {
        const { email } = body

        if (!email) {
          return badRequest('Missing required field: email')
        }

        const template = emailTemplates.adminNotification.newsletter(email)

        return sendResult(
          await sendAdminNotification({
            subject: template.subject,
            html: template.html,
          })
        )
      }

      case 'admin/appointment': {
        const { name, email, phone, service, message } = body

        if (!name || !email || !phone) {
          return badRequest('Missing required fields: name, email, phone')
        }

        const template = emailTemplates.adminNotification.appointment(
          name,
          email,
          phone,
          service,
          message
        )

        return sendResult(
          await sendAdminNotification({
            subject: template.subject,
            html: template.html,
          })
        )
      }

      case 'admin/offer': {
        const { email, code } = body

        if (!email || !code) {
          return badRequest('Missing required fields: email, code')
        }

        const template = emailTemplates.adminNotification.offer(email, code)

        return sendResult(
          await sendAdminNotification({
            subject: template.subject,
            html: template.html,
          })
        )
      }

      default:
        return NextResponse.json(
          { success: false, error: 'Email endpoint not found' },
          { status: 404 }
        )
    }
  } catch (error: unknown) {
    console.error('Email API route failed:', error)

    return NextResponse.json(
      { success: false, error: getErrorMessage(error) },
      { status: 500 }
    )
  }
}
