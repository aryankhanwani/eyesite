import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { sendEmail, sendAdminNotification, emailTemplates } from '@/lib/email'

export async function POST(request: Request) {
  console.log('📬 [API DEBUG] Appointment API route called')
  try {
    const { name, email, phone, service, message } = await request.json()
    console.log('📬 [API DEBUG] Appointment request received for:', { name, email, phone })

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    // Use service role key on the server so RLS doesn't block public inserts
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!url || !key) {
      return NextResponse.json(
        { error: 'Supabase configuration missing' },
        { status: 500 }
      )
    }

    const supabase = createClient(url, key, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })

    const { data, error } = await supabase
      .from('appointment_emails')
      .insert([{
        name,
        email,
        phone,
        service: service || null,
        message: message || null,
        status: 'new',
      }])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to submit appointment' },
        { status: 400 }
      )
    }

    // Send confirmation email to customer (non-blocking)
    console.log('📬 [API DEBUG] About to call sendEmail for appointment confirmation')
    const confirmationEmail = emailTemplates.appointmentConfirmation(name, email, phone, service, message)
    console.log('📬 [API DEBUG] Email template created, calling sendEmail...')
    sendEmail({
      to: email,
      subject: confirmationEmail.subject,
      html: confirmationEmail.html,
    }).then(result => {
      console.log('📬 [API DEBUG] sendEmail promise resolved:', result)
    }).catch(err => {
      console.error('📬 [API DEBUG] Failed to send appointment confirmation email:', err)
    })

    // Send notification to admin (non-blocking)
    console.log('📬 [API DEBUG] About to call sendAdminNotification')
    const adminEmail = emailTemplates.adminNotification.appointment(name, email, phone, service, message)
    sendAdminNotification({
      subject: adminEmail.subject,
      html: adminEmail.html,
    }).then(result => {
      console.log('📬 [API DEBUG] sendAdminNotification promise resolved:', result)
    }).catch(err => {
      console.error('📬 [API DEBUG] Failed to send admin notification:', err)
    })

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}


