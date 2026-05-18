import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { sendAppointmentConfirmation, sendAdminAppointmentNotification } from '@/lib/email-client'

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Internal server error'
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json()

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

    const emailResults = await Promise.allSettled([
      sendAppointmentConfirmation(name, email, phone, service, message),
      sendAdminAppointmentNotification(name, email, phone, service, message),
    ])

    emailResults.forEach((result, index) => {
      if (result.status === 'rejected' || !result.value.success) {
        console.error(index === 0
          ? 'Failed to send appointment confirmation email:'
          : 'Failed to send admin notification:',
          result.status === 'rejected' ? result.reason : result.value
        )
      }
    })

    return NextResponse.json({ success: true, data })
  } catch (error: unknown) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 })
  }
}
