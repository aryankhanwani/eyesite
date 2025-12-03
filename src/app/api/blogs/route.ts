import { NextResponse } from 'next/server'

// Cache blogs for 5 minutes, revalidate in background
export const revalidate = 300 // 5 minutes

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

    // Only select fields needed for listing (exclude content for faster loading)
    const url = `${supabaseUrl}/rest/v1/blogs?select=id,slug,title,excerpt,author,date,category,image,read_time,tags,created_at,updated_at&order=date.desc`
    
    const response = await fetch(url, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`)
    }

    const blogs = await response.json()
    
    return NextResponse.json(blogs, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error: any) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

