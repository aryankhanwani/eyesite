import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase config missing in /api/blogs', {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseKey,
      })
      return NextResponse.json(
        { error: 'Supabase configuration missing' },
        { status: 500 }
      )
    }

    const url = `${supabaseUrl}/rest/v1/blogs?select=*&order=date.desc`
    console.log('Calling Supabase blogs endpoint', { url })

    const response = await fetch(url, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    })

    const text = await response.text()
    console.log('Supabase /blogs response', {
      status: response.status,
      ok: response.ok,
      bodySnippet: text.slice(0, 200),
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`)
    }

    const blogs = JSON.parse(text)
    return NextResponse.json(blogs)
  } catch (error: any) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

