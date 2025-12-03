'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getAllBlogPosts, categories, type BlogPost } from '@/lib/supabase-blogs';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const load = async () => {
      const all = await getAllBlogPosts();
      setPosts(all);
    };
    load();
  }, []);

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric',
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/eye-exams.png"
            alt="Blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#19395f]/95 to-[#19395f]/80"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium">
                BLOG & INSIGHTS
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-lg">
              Eye Care Insights
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              Expert advice, tips, and the latest news about eye health, eyewear, and vision care from the team at Eyesite Opticians.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-8 bg-white border-b border-[#e7e8ea]/50 sticky top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-medium text-[#19395f] mr-2">Filter by:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#19395f] text-white shadow-md'
                    : 'bg-[#f4f6f8] text-black/70 hover:bg-[#e7e8ea]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-16 md:py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-black/60 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e7e8ea]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <a href={`/blog/${post.slug}`} className="block">
                    {/* Featured Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-[#19395f] text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-3 text-xs text-black/60">
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.read_time}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-semibold text-[#19395f] mb-3 group-hover:text-[#80acc9] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-black/70 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Author and Tags */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#e7e8ea]/50">
                        <span className="text-xs text-black/60">By {post.author}</span>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-[#19395f] group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-[#19395f] to-[#0d2440]">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
            Have Questions About Your Eye Health?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert team is here to help. Book an appointment or contact us for personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-appointment"
              className="group relative cursor-pointer overflow-hidden rounded-full border-[0.5px] border-white/20 bg-white py-3.5 px-8 text-center font-semibold text-[#19395f] shadow-lg hover:bg-[#19395f] hover:text-white hover:border-white/30 transition-all duration-300"
            >
              <span className="inline-block whitespace-nowrap">Book Appointment</span>
            </a>
            <a
              href="/contact-us"
              className="group relative cursor-pointer overflow-hidden rounded-full border-[0.5px] border-white/40 bg-transparent py-3.5 px-8 text-center font-semibold text-white hover:bg-white hover:text-[#19395f] transition-all duration-300"
            >
              <span className="inline-block whitespace-nowrap">Contact Us</span>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

