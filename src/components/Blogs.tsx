'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getAllBlogPosts, type BlogPost } from '@/lib/supabase-blogs';

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const posts = await getAllBlogPosts();
      setBlogs(posts.slice(0, 3));
    };
    load();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric',
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#f4f6f8] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#b6dfe8]/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#80acc9]/15 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Tag */}
        <div className="mb-4">
          <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
            OUR BLOG
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-4 leading-tight">
              Latest Insights & Tips
            </h2>
            <p className="text-lg text-black/70 max-w-2xl">
              Stay informed with expert advice on eye care, eyewear trends, and vision health.
            </p>
          </div>
          <a 
            href="/blog" 
            className="flex items-center gap-2 text-[#19395f] hover:text-[#80acc9] transition-colors font-medium self-start md:self-auto"
          >
            <span>View All Blogs</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <a
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e7e8ea]/50 hover:shadow-xl transition-all duration-500 cursor-pointer block"
              onMouseEnter={() => setHoveredSlug(blog.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              style={{
                transform: hoveredSlug === blog.slug ? 'translateY(-8px)' : 'translateY(0)',
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out ${
                    hoveredSlug === blog.slug ? 'scale-110' : 'scale-100'
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-[#19395f] px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>

                {/* Read Time Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {blog.read_time}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Date */}
                <p className="text-sm text-[#19395f]/60 mb-3 font-medium">
                  {formatDate(blog.date)}
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4 leading-tight group-hover:text-[#19395f] transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-base text-black/70 mb-6 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-[#19395f] font-semibold group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm">Read More</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredSlug === blog.slug ? 'translate-x-1' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-3xl border-2 border-[#19395f] pointer-events-none transition-opacity duration-500 ${
                  hoveredSlug === blog.slug ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

