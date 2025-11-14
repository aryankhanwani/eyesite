'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: 'Understanding Digital Eye Strain: Tips for Screen Time',
    excerpt: 'Learn how to protect your eyes from digital eye strain with practical tips and expert advice for maintaining healthy vision in the digital age.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    date: 'March 15, 2024',
    category: 'Eye Care',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Choosing the Perfect Frames: A Complete Guide',
    excerpt: 'Discover how to select eyewear frames that complement your face shape, lifestyle, and personal style while ensuring optimal comfort and vision.',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80',
    date: 'March 10, 2024',
    category: 'Eyewear',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'The Importance of Regular Eye Examinations',
    excerpt: 'Regular eye exams are crucial for maintaining eye health and detecting conditions early. Find out why annual check-ups matter and what to expect.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
    date: 'March 5, 2024',
    category: 'Health',
    readTime: '6 min read',
  },
];

export default function Blogs() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
          <button className="group relative w-auto cursor-pointer overflow-hidden rounded-full border-[0.5px] border-[#19395f]/20 bg-white py-2.5 px-6 text-center font-semibold text-[#19395f] shadow-sm hover:bg-[#19395f] hover:text-white hover:border-[#19395f]/30 transition-all duration-300 self-start md:self-auto">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 scale-100 rounded-lg bg-[#19395f] transition-all duration-300 group-hover:scale-[100.8]"></div>
              <span className="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                View All Blogs
              </span>
            </div>
            <div className="absolute top-0 z-10 flex w-full h-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
              <span className="whitespace-nowrap">View All Blogs</span>
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
            </div>
          </button>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e7e8ea]/50 hover:shadow-xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredId(blog.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                transform: hoveredId === blog.id ? 'translateY(-8px)' : 'translateY(0)',
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out ${
                    hoveredId === blog.id ? 'scale-110' : 'scale-100'
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
                    {blog.readTime}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Date */}
                <p className="text-sm text-[#19395f]/60 mb-3 font-medium">
                  {blog.date}
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
                      hoveredId === blog.id ? 'translate-x-1' : ''
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
                  hoveredId === blog.id ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

