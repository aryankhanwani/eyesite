import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { sendNewsletterWelcome, sendAdminNewsletterNotification } from '@/lib/email-client'

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Internal server error'
}

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

    // If email already exists (unique constraint), return duplicate indicator
    if (error) {
      if (error.code === '23505') {
        // Unique constraint violation - email already exists
        return NextResponse.json({ 
          success: false, 
          duplicate: true,
          message: 'You have already subscribed to our newsletter' 
        }, { status: 200 })
      }
      
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to subscribe' },
        { status: 400 }
      )
    }

    const emailResults = await Promise.allSettled([
      sendNewsletterWelcome(email),
      sendAdminNewsletterNotification(email),
    ])

    emailResults.forEach((result, index) => {
      if (result.status === 'rejected' || !result.value.success) {
        console.error(index === 0
          ? 'Failed to send newsletter welcome email:'
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
