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

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/api/blogs')
    if (!response.ok) {
      throw new Error('Failed to fetch blogs')
    }
    const blogs = await response.json()
    console.log('getAllBlogPosts received blogs', {
      length: Array.isArray(blogs) ? blogs.length : null,
      sample: Array.isArray(blogs) && blogs.length > 0 ? blogs[0] : null,
    })
    return blogs.sort((a: BlogPost, b: BlogPost) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error('Error fetching blogs:', error)
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

