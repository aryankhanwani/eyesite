// Email API client - sends requests to the eyesite-api service

const API_BASE_URL = process.env.EMAIL_API_URL || 'http://localhost:3002'

async function callEmailAPI(endpoint: string, body: any) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    return data
  } catch (error: any) {
    console.error(`Error calling email API ${endpoint}:`, error)
    return { success: false, error: error.message || 'Failed to connect to email service' }
  }
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
  return callEmailAPI('/api/email/send', {
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    text,
  })
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
  return callEmailAPI('/api/email/admin', {
    subject,
    html,
    text,
  })
}

// Email templates (kept here for convenience, but emails are sent via API)
export const emailTemplates = {
  newsletterWelcome: (email: string) => {
    return {
      subject: 'Welcome to Eyesite Opticians Newsletter!',
      html: '', // Not used, but kept for compatibility
    }
  },

  appointmentConfirmation: (
    name: string,
    email: string,
    phone: string,
    service: string | null,
    message: string | null
  ) => {
    return {
      subject: 'Appointment Request Received - Eyesite Opticians',
      html: '', // Not used, but kept for compatibility
    }
  },

  voucherCode: (email: string, code: string) => {
    return {
      subject: 'Your 20% Off Voucher Code - Eyesite Opticians',
      html: '', // Not used, but kept for compatibility
    }
  },

  adminNotification: {
    newsletter: (email: string) => ({
      subject: 'New Newsletter Subscription',
      html: '', // Not used, but kept for compatibility
    }),

    appointment: (
      name: string,
      email: string,
      phone: string,
      service: string | null,
      message: string | null
    ) => ({
      subject: `New Appointment Request from ${name}`,
      html: '', // Not used, but kept for compatibility
    }),

    offer: (email: string, code: string) => ({
      subject: `New Offer Signup: ${email}`,
      html: '', // Not used, but kept for compatibility
    }),
  },
}

// Convenience functions that call the API directly
export async function sendNewsletterWelcome(email: string) {
  return callEmailAPI('/api/email/newsletter-welcome', { email })
}

export async function sendAppointmentConfirmation(
  name: string,
  email: string,
  phone: string,
  service: string | null,
  message: string | null
) {
  return callEmailAPI('/api/email/appointment-confirmation', {
    name,
    email,
    phone,
    service,
    message,
  })
}

export async function sendVoucherCode(email: string, code: string) {
  return callEmailAPI('/api/email/voucher-code', { email, code })
}

export async function sendAdminNewsletterNotification(email: string) {
  return callEmailAPI('/api/email/admin/newsletter', { email })
}

export async function sendAdminAppointmentNotification(
  name: string,
  email: string,
  phone: string,
  service: string | null,
  message: string | null
) {
  return callEmailAPI('/api/email/admin/appointment', {
    name,
    email,
    phone,
    service,
    message,
  })
}

export async function sendAdminOfferNotification(email: string, code: string) {
  return callEmailAPI('/api/email/admin/offer', { email, code })
}

