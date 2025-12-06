'use client';

import { useEffect, useState } from 'react';

interface Banner {
  id: number;
  title: string;
  description: string;
  color: string;
}

const banners: Banner[] = [
  {
    id: 1,
    title: 'Comprehensive Eye Exams',
    description: 'Modern diagnostic equipment for accurate vision assessment',
    color: 'bg-[#19395f]',
  },
  {
    id: 2,
    title: 'Premium Eyewear Collection',
    description: 'Stylish frames and lenses from leading brands worldwide',
    color: 'bg-[#80acc9]',
  },
  {
    id: 3,
    title: 'Expert Eye Care',
    description: 'Experienced optometrists dedicated to your vision health',
    color: 'bg-[#19395f]',
  },
  {
    id: 4,
    title: 'Personalised Service',
    description: 'Tailored solutions to meet your unique vision needs',
    color: 'bg-[#80acc9]',
  },
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000); // Change banner every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full py-16 bg-[#e7e8ea] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Carousel Container */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-sm">
          {/* Banner Slides */}
          <div className="relative w-full h-full">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div
                  className={`w-full h-full ${banner.color} flex flex-col items-center justify-center px-8 ${
                    banner.color === 'bg-[#19395f]' ? 'text-white' : 'text-[#19395f]'
                  }`}
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">
                    {banner.title}
                  </h2>
                  <p className={`text-base md:text-lg lg:text-xl text-center max-w-2xl ${
                    banner.color === 'bg-[#19395f]' ? 'text-white/90' : 'text-[#19395f]/90'
                  }`}>
                    {banner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75 w-2.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

