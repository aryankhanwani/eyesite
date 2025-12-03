import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { sendEmail, sendAdminNotification, emailTemplates } from '@/lib/email'

function generateCode() {
  return `EYESITE${Math.random().toString(36).substring(2, 8).toUpperCase()}`
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
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

    let code = generateCode()
    let attempts = 0

    // Try to insert with a unique code; if conflict on code, regenerate
    while (attempts < 5) {
      const { data, error } = await supabase
        .from('offer_emails')
        .insert([{
          email,
          code,
          is_used: false,
        }])
        .select()
        .single()

      if (!error) {
        // Send voucher email to customer (non-blocking)
        const voucherEmail = emailTemplates.voucherCode(email, code)
        sendEmail({
          to: email,
          subject: voucherEmail.subject,
          html: voucherEmail.html,
        }).catch(err => console.error('Failed to send voucher email:', err))

        // Send notification to admin (non-blocking)
        const adminEmail = emailTemplates.adminNotification.offer(email, code)
        sendAdminNotification({
          subject: adminEmail.subject,
          html: adminEmail.html,
        }).catch(err => console.error('Failed to send admin notification:', err))

        return NextResponse.json({ success: true, data })
      }

      // Handle duplicate email
      if (error.code === '23505') {
        const { data: existing } = await supabase
          .from('offer_emails')
          .select('*')
          .eq('email', email)
          .single()

        if (existing) {
          // Return duplicate indicator instead of resending
          return NextResponse.json({ 
            success: false,
            duplicate: true,
            message: 'You have already received a voucher code',
            data: existing 
          }, { status: 200 })
        }
      }

      // Try new code
      code = generateCode()
      attempts++
    }

    return NextResponse.json(
      { error: 'Failed to generate unique code' },
      { status: 500 }
    )
  } catch (error: any) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}


