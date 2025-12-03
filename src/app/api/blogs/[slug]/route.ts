import { NextResponse } from 'next/server'

// Cache individual blog posts for 10 minutes
export const revalidate = 600 // 10 minutes

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: 'Supabase configuration missing' },
        { status: 500 }
      )
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/blogs?slug=eq.${encodeURIComponent(slug)}&select=*`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200',
        },
        next: { revalidate: 600 }, // Cache for 10 minutes
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch blog')
    }

    const blogs = await response.json()
    
    if (blogs.length === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json(blogs[0], {
      headers: {
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200',
      },
    })
  } catch (error: any) {
    console.error('Error fetching blog:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

