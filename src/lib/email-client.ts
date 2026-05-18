import { emailTemplates, sendAdminNotification, sendEmail } from './email'

export { emailTemplates, sendAdminNotification, sendEmail }

export async function sendNewsletterWelcome(email: string) {
  const template = emailTemplates.newsletterWelcome(email)

  return sendEmail({
    to: email,
    subject: template.subject,
    html: template.html,
  })
}

export async function sendAppointmentConfirmation(
  name: string,
  email: string,
  phone: string,
  service: string | null,
  message: string | null
) {
  const template = emailTemplates.appointmentConfirmation(
    name,
    email,
    phone,
    service,
    message
  )

  return sendEmail({
    to: email,
    subject: template.subject,
    html: template.html,
  })
}

export async function sendVoucherCode(email: string, code: string) {
  const template = emailTemplates.voucherCode(email, code)

  return sendEmail({
    to: email,
    subject: template.subject,
    html: template.html,
  })
}

export async function sendAdminNewsletterNotification(email: string) {
  const template = emailTemplates.adminNotification.newsletter(email)

  return sendAdminNotification({
    subject: template.subject,
    html: template.html,
  })
}

export async function sendAdminAppointmentNotification(
  name: string,
  email: string,
  phone: string,
  service: string | null,
  message: string | null
) {
  const template = emailTemplates.adminNotification.appointment(
    name,
    email,
    phone,
    service,
    message
  )

  return sendAdminNotification({
    subject: template.subject,
    html: template.html,
  })
}

export async function sendAdminOfferNotification(email: string, code: string) {
  const template = emailTemplates.adminNotification.offer(email, code)

  return sendAdminNotification({
    subject: template.subject,
    html: template.html,
  })
}
