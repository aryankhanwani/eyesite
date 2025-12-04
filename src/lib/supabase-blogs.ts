export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  read_time: string
  tags: string[]
  created_at?: string
  updated_at?: string
}

// Client-side cache for blogs
let blogsCache: { data: BlogPost[]; timestamp: number } | null = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

// Function to clear the cache (useful for instant updates)
export function clearBlogsCache() {
  blogsCache = null
}

export async function getAllBlogPosts(forceRefresh: boolean = false): Promise<BlogPost[]> {
  try {
    // Check cache first (unless force refresh)
    if (!forceRefresh && blogsCache && Date.now() - blogsCache.timestamp < CACHE_DURATION) {
      return blogsCache.data
    }

    // Add timestamp to prevent browser cache
    const cacheBuster = forceRefresh ? `?t=${Date.now()}` : ''
    const response = await fetch(`/api/blogs${cacheBuster}`, {
      cache: forceRefresh ? 'no-store' : 'default',
      headers: {
        'Cache-Control': forceRefresh ? 'no-cache' : 'public, max-age=300',
      },
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch blogs')
    }
    
    const blogs = await response.json()
    
    // Sort by date (already sorted by API, but ensure consistency)
    const sortedBlogs = blogs.sort((a: BlogPost, b: BlogPost) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    
    // Update cache
    blogsCache = {
      data: sortedBlogs,
      timestamp: Date.now(),
    }
    
    return sortedBlogs
  } catch (error) {
    console.error('Error fetching blogs:', error)
    // Return cached data if available, even if stale
    if (blogsCache) {
      return blogsCache.data
    }
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`/api/blogs/${slug}`)
    if (!response.ok) {
      return null
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching blog:', error)
    return null
  }
}

export function getBlogPostsByCategory(blogs: BlogPost[], category: string): BlogPost[] {
  return blogs.filter(post => post.category === category)
}

export function getRelatedPosts(blogs: BlogPost[], currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = blogs.find(post => post.slug === currentSlug)
  if (!currentPost) return []
  
  return blogs
    .filter(post => 
      post.slug !== currentSlug && 
      post.category === currentPost.category
    )
    .slice(0, limit)
}

export const categories = [
  'All',
  'Eye Health',
  'Eyewear',
  'Contact Lenses',
  'Eye Conditions'
]

