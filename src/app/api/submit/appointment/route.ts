import { NextResponse } from 'next/server'

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

    const response = await fetch(`${url}/rest/v1/appointment_emails`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        service: service || null,
        message: message || null,
        status: 'new',
      }),
    })

    if (!response.ok) {
      const text = await response.text()
      return NextResponse.json(
        { error: text || 'Failed to submit appointment' },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}


