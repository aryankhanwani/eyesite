'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Shiny button animation styles
const shinyButtonStyles = `
  @keyframes shiny {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(200%) translateY(200%) rotate(45deg);
    }
  }
  
  .shiny-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    animation: shiny 3s infinite;
    pointer-events: none;
    z-index: 1;
  }
`;

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  tag: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/hero-1.png',
    title: 'Clear Vision for a Brighter Future',
    description: 'Expert eye care services, comprehensive eye examinations, and premium eyewear solutions tailored to enhance your vision and protect your eye health.',
    tag: 'Eye Care & Vision',
  },
  {
    id: 2,
    image: '/hero-2.png',
    title: 'Comprehensive Eye Examinations',
    description: 'Advanced diagnostic technology for accurate vision assessment and early detection of eye conditions.',
    tag: 'Professional Care',
  },
  {
    id: 3,
    image: '/hero-3.png',
    title: 'Premium Eyewear Collection',
    description: 'Stylish frames and lenses from leading brands worldwide, combining fashion with function.',
    tag: 'Eyewear Excellence',
  },
  {
    id: 4,
    image: '/hero-4.png',
    title: 'Expert Optometrists',
    description: 'Experienced professionals dedicated to your vision health and personalized eye care solutions.',
    tag: 'Expert Care',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <style>{shinyButtonStyles}</style>
      <section className="relative w-full min-h-[700px] md:min-h-[850px] lg:min-h-[950px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Carousel Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="mb-6">
            <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
              {heroSlides[currentIndex].tag}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-lg">
            Eyesite Opticians
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            {heroSlides[currentIndex].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative w-auto cursor-pointer overflow-hidden rounded-full border-[0.5px] border-[#19395f]/20 bg-[#19395f] py-3.5 px-8 text-center font-semibold text-white shadow-lg hover:bg-white hover:text-[#19395f] hover:border-[#19395f]/30 transition-all duration-300 shiny-button">
              <span className="inline-block whitespace-nowrap">Book Appointment</span>
            </button>
            <button className="rounded-full border-[0.5px] border-[#19395f]/30 bg-white py-3.5 cursor-pointer px-8 text-center font-semibold text-[#19395f] shadow-lg transition-all duration-300 hover:bg-[#19395f] hover:text-white hover:border-[#19395f]/20">
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, index) => (
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
    </section>
    </>
  );
}

