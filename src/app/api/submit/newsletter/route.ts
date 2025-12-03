import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { sendEmail, sendAdminNotification, emailTemplates } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    // Use service role key on the server so RLS doesn't block public inserts
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!url || !serviceRoleKey) {
      console.error('Missing Supabase config:', {
        hasUrl: !!url,
        hasServiceKey: !!serviceRoleKey,
      })
      return NextResponse.json(
        { error: 'Supabase configuration missing' },
        { status: 500 }
      )
    }

    // Create Supabase client with service role key (bypasses RLS)
    const supabase = createClient(url, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })

    const { data, error } = await supabase
      .from('newsletter_emails')
      .insert([{ email }])
      .select()
      .single()

    // If email already exists (unique constraint), treat as success
    if (error) {
      if (error.code === '23505') {
        // Unique constraint violation - email already exists
        return NextResponse.json({ success: true, message: 'Already subscribed' })
      }
      
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to subscribe' },
        { status: 400 }
      )
    }

    // Send welcome email to subscriber (non-blocking)
    const welcomeEmail = emailTemplates.newsletterWelcome(email)
    sendEmail({
      to: email,
      subject: welcomeEmail.subject,
      html: welcomeEmail.html,
    }).catch(err => console.error('Failed to send newsletter welcome email:', err))

    // Send notification to admin (non-blocking)
    const adminEmail = emailTemplates.adminNotification.newsletter(email)
    sendAdminNotification({
      subject: adminEmail.subject,
      html: adminEmail.html,
    }).catch(err => console.error('Failed to send admin notification:', err))

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}


