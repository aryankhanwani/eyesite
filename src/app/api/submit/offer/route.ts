import { NextResponse } from 'next/server'

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

    let code = generateCode()
    let attempts = 0

    // Try to insert with a unique code; if conflict on code, regenerate
    while (attempts < 5) {
      const response = await fetch(`${url}/rest/v1/offer_emails`, {
        method: 'POST',
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify({
          email,
          code,
          is_used: false,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        return NextResponse.json({ success: true, data: data[0] })
      }

      // On conflict (duplicate code or email) read existing record
      if (response.status === 409) {
        // Fetch existing by email – reuse existing code
        const existingRes = await fetch(
          `${url}/rest/v1/offer_emails?email=eq.${encodeURIComponent(
            email
          )}&select=*`,
          {
            headers: {
              apikey: key,
              Authorization: `Bearer ${key}`,
            },
          }
        )

        if (existingRes.ok) {
          const existing = await existingRes.json()
          if (existing[0]) {
            return NextResponse.json({ success: true, data: existing[0] })
          }
        }

        // Otherwise, try a new code
        code = generateCode()
        attempts++
        continue
      }

      const text = await response.text()
      return NextResponse.json(
        { error: text || 'Failed to sign up for offer' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to generate unique code' },
      { status: 500 }
    )
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}


