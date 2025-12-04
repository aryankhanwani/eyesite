"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time?: number;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Google Reviews
    // Note: You'll need to replace this with your actual Google Places API implementation
    // For now, using a mock API endpoint or you can use Google Places API directly
    
    const fetchGoogleReviews = async () => {
      try {
        // Try to fetch from API route first (recommended for production)
        const response = await fetch('/api/google-reviews');
        
        if (response.ok) {
          const data = await response.json();
          if (data.reviews && data.reviews.length > 0) {
            const transformedTestimonials: Testimonial[] = data.reviews.map((review: GoogleReview) => ({
              text: review.text,
              image: review.profile_photo_url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
              name: review.author_name,
              role: `Google Review • ${'⭐'.repeat(review.rating)} • ${review.relative_time_description}`,
            }));
            setTestimonials(transformedTestimonials);
            setLoading(false);
            return;
          }
        }
        
        // Fallback to mock data if API is not configured
        const mockReviews: GoogleReview[] = [
          {
            author_name: "Sarah Johnson",
            profile_photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
            rating: 5,
            relative_time_description: "2 weeks ago",
            text: "Excellent eye care service! The staff was professional and the eye exam was thorough. Found the perfect frames for my prescription.",
          },
          {
            author_name: "Michael Chen",
            profile_photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
            rating: 5,
            relative_time_description: "1 month ago",
            text: "Great experience at Eyesite Opticians. The optometrist was knowledgeable and helped me understand my eye health better.",
          },
          {
            author_name: "Emily Rodriguez",
            profile_photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
            rating: 5,
            relative_time_description: "3 weeks ago",
            text: "Love my new glasses! The frame selection is amazing and the fitting was perfect. Highly recommend!",
          },
          {
            author_name: "David Thompson",
            profile_photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
            rating: 5,
            relative_time_description: "2 months ago",
            text: "Professional service and friendly staff. The contact lens fitting was comfortable and the follow-up care was excellent.",
          },
          {
            author_name: "Lisa Anderson",
            profile_photo_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
            rating: 5,
            relative_time_description: "1 week ago",
            text: "Best opticians in town! The dry eye treatment really helped, and the staff is always so helpful and caring.",
          },
          {
            author_name: "James Wilson",
            profile_photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
            rating: 5,
            relative_time_description: "3 weeks ago",
            text: "Comprehensive eye exam with advanced technology. The optometrist explained everything clearly. Great service!",
          },
          {
            author_name: "Maria Garcia",
            profile_photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
            rating: 5,
            relative_time_description: "1 month ago",
            text: "Fantastic experience! Found stylish frames that fit perfectly. The team is knowledgeable and patient.",
          },
          {
            author_name: "Robert Brown",
            profile_photo_url: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&q=80",
            rating: 5,
            relative_time_description: "2 weeks ago",
            text: "Excellent CUES service for my contact lenses. The consultation was thorough and the follow-up care is outstanding.",
          },
          {
            author_name: "Jennifer Lee",
            profile_photo_url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
            rating: 5,
            relative_time_description: "4 weeks ago",
            text: "Professional eye care with a personal touch. The staff made me feel comfortable throughout the entire visit.",
          },
        ];

        // Transform Google Reviews to Testimonial format
        const transformedTestimonials: Testimonial[] = mockReviews.map((review) => ({
          text: review.text,
          image: review.profile_photo_url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
          name: review.author_name,
          role: `Google Review • ${review.rating} stars`,
        }));

        setTestimonials(transformedTestimonials);
      } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        // Fallback to empty array or default testimonials
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-16 md:py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-[#19395f]/60">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="w-full py-16 md:py-24 bg-[#f4f6f8] relative">
      <div className="max-w-7xl mx-auto px-8 z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
            TESTIMONIALS
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 leading-tight">
            {/* What Our Customers Say */}
          </h2>
        </motion.div>

        <div className="flex justify-center items-start gap-6 md:gap-8 lg:gap-10 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden w-full">
          <div className="flex-shrink-0">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
          </div>
          <div className="flex-shrink-0 hidden md:block">
            <TestimonialsColumn testimonials={secondColumn} duration={19} />
          </div>
          <div className="flex-shrink-0 hidden lg:block">
            <TestimonialsColumn testimonials={thirdColumn} duration={17} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

