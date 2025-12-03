import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface BlogRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  read_time: string;
  tags: string[];
}

async function fetchBlog(slug: string): Promise<BlogRow | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  const res = await fetch(
    `${supabaseUrl}/rest/v1/blogs?slug=eq.${slug}&select=*`,
    {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      // This page is fine to be cached per-request
      cache: 'no-store',
    }
  );

  if (!res.ok) return null;
  const data: BlogRow[] = await res.json();
  return data[0] || null;
}

async function fetchRelatedPosts(post: BlogRow): Promise<BlogRow[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return [];
  }

  const res = await fetch(
    `${supabaseUrl}/rest/v1/blogs?category=eq.${encodeURIComponent(
      post.category
    )}&slug=neq.${encodeURIComponent(
      post.slug
    )}&select=*&order=date.desc&limit=3`,
    {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      cache: 'no-store',
    }
  );

  if (!res.ok) return [];
  const data: BlogRow[] = await res.json();
  return data;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlog(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await fetchBlog(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await fetchRelatedPosts(post);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric',
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Convert markdown-style content to HTML-like structure
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Headings
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-bold text-[#19395f] mb-6 mt-8">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-semibold text-[#19395f] mb-4 mt-8">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-semibold text-[#19395f] mb-3 mt-6">{line.substring(4)}</h3>;
      }
      
      // Bold text
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-bold text-black mb-4 mt-4">{line.replace(/\*\*/g, '')}</p>;
      }
      
      // Lists
      if (line.startsWith('- ')) {
        return <li key={index} className="text-black/80 leading-relaxed ml-6 mb-2">{line.substring(2)}</li>;
      }
      
      // Checkmarks
      if (line.startsWith('✅ ') || line.startsWith('❌ ')) {
        return <li key={index} className="text-black/80 leading-relaxed ml-6 mb-2">{line}</li>;
      }
      
      // Regular paragraphs
      if (line.trim() !== '') {
        return <p key={index} className="text-black/80 leading-relaxed mb-4">{line}</p>;
      }
      
      return <br key={index} />;
    });
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      
      {/* Hero Section with Featured Image */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-end overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-8 py-12 md:py-16">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-4 leading-tight drop-shadow-lg">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span>By {post.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{formatDate(post.date)}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{post.read_time}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          {/* Excerpt */}
          <div className="mb-8 pb-8 border-b-2 border-[#e7e8ea]">
            <p className="text-xl text-black/80 leading-relaxed italic">
              {post.excerpt}
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#e7e8ea]">
            <h3 className="text-sm font-semibold text-[#19395f] mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#f4f6f8] text-black/70 rounded-full text-sm hover:bg-[#e7e8ea] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 p-6 bg-[#f4f6f8] rounded-2xl">
            <h3 className="text-lg font-semibold text-[#19395f] mb-4">Share this article</h3>
            <div className="flex gap-3">
              <button className="p-3 bg-white rounded-full hover:bg-[#19395f] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="p-3 bg-white rounded-full hover:bg-[#19395f] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="p-3 bg-white rounded-full hover:bg-[#19395f] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-12 p-8 bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-4">Need Professional Eye Care?</h3>
            <p className="mb-6 text-white/90">
              Our expert team at Eyesite Opticians is here to help with all your eye care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/book-appointment"
                className="group relative cursor-pointer overflow-hidden rounded-full border-[0.5px] border-white/20 bg-white py-3 px-6 text-center font-semibold text-[#19395f] hover:bg-[#80acc9] hover:text-white transition-all duration-300"
              >
                <span className="inline-block whitespace-nowrap">Book Appointment</span>
              </a>
              <a
                href="tel:+441132600063"
                className="group relative cursor-pointer overflow-hidden rounded-full border-[0.5px] border-white/40 bg-transparent py-3 px-6 text-center font-semibold text-white hover:bg-white hover:text-[#19395f] transition-all duration-300"
              >
                <span className="inline-block whitespace-nowrap">Call 0113 260 0063</span>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="w-full py-16 md:py-20 bg-[#f4f6f8]">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e7e8ea]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <a href={`/blog/${relatedPost.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    <div className="p-6">
            <div className="flex items-center gap-2 mb-3 text-xs text-black/60">
                        <span>{formatDate(relatedPost.date)}</span>
                        <span>•</span>
                        <span>{relatedPost.read_time}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-[#19395f] mb-2 group-hover:text-[#80acc9] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>

                      <p className="text-black/70 text-sm leading-relaxed line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="/blog"
                className="inline-block text-[#19395f] hover:text-[#80acc9] font-medium transition-colors"
              >
                View All Articles →
              </a>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
}

