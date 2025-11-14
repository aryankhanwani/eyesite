'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface Brand {
  id: number;
  name: string;
  logo: string;
  productImage: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: 'Ray-Ban',
    logo: '/eyewear-1.png',
    productImage: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80',
  },
  {
    id: 2,
    name: 'Oakley',
    logo: '/eyewear-2.png',
    productImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
  },
  {
    id: 3,
    name: 'Gucci',
    logo: '/eyewear-3.png',
    productImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
  },
  {
    id: 4,
    name: 'Prada',
    logo: '/eyewear-4.png',
    productImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
  },
  {
    id: 5,
    name: 'Tom Ford',
    logo: '/eyewear-5.png',
    productImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
  },
  {
    id: 6,
    name: 'Versace',
    logo: '/eyewear-6.png',
    productImage: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80',
  },
  {
    id: 7,
    name: 'Dior',
    logo: '/eyewear-7.png',
    productImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
  },
];

export default function DesignerEyewear() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f4f6f8]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Tag */}
        <div className="mb-4">
          <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
            DESIGNER EYEWEAR
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 leading-tight">
          Premium Designer Brands
        </h2>

        {/* Brands Grid - 7 items: 3 on top, 4 below */}
        <div className="space-y-6 md:space-y-8">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {brands.slice(0, 3).map((brand) => (
              <BrandCard key={brand.id} brand={brand} isLarge={true} />
            ))}
          </div>
          
          {/* Bottom Row - 4 Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {brands.slice(3, 7).map((brand) => (
              <BrandCard key={brand.id} brand={brand} isLarge={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandCard({ brand, isLarge }: { brand: Brand; isLarge: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const cardInner = cardInnerRef.current;
    const front = frontRef.current;
    const back = backRef.current;
    const logo = logoRef.current;

    if (!card || !cardInner || !front || !back || !logo) return;

    // Set initial perspective
    gsap.set(card, { perspective: 1000 });
    gsap.set(cardInner, { transformStyle: 'preserve-3d' });
    gsap.set(front, { backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' });
    gsap.set(back, { backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' });

    const handleMouseEnter = () => {
      const tl = gsap.timeline();

      // Card scale up slightly
      tl.to(card, {
        scale: 1.05,
        duration: 0.6,
        ease: 'power3.out',
      }, 0);

      // Flip the card inner
      tl.to(cardInner, {
        rotationY: 180,
        duration: 0.6,
        ease: 'power3.inOut',
      }, 0);

      // Logo fade out and scale down
      tl.to(logo, {
        opacity: 0,
        scale: 0.8,
        filter: 'grayscale(0%)',
        duration: 0.4,
        ease: 'power2.in',
      }, 0);

      // Product image zoom in
      tl.fromTo(back, 
        {
          scale: 1.1,
        },
        {
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
        }, 0.2
      );
    };

    const handleMouseLeave = () => {
      const tl = gsap.timeline();

      // Card scale reset
      tl.to(card, {
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
      }, 0);

      // Flip the card back
      tl.to(cardInner, {
        rotationY: 0,
         duration: 0.6,
        ease: 'power3.inOut',
      }, 0);

      // Logo fade in and scale up
      tl.to(logo, {
        opacity: 1,
        scale: 1,
        filter: 'grayscale(100%)',
        duration: 0.5,
        ease: 'power3.out',
      }, 0.3);
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-[#e7e8ea]/50 shadow-lg"
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardInnerRef}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side - Logo */}
        <div
          ref={frontRef}
          className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center p-4 md:p-6 border border-[#e7e8ea]/50"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div
            ref={logoRef}
            className={`relative w-full ${
              isLarge 
                ? 'h-40 md:h-52 lg:h-64' 
                : 'h-32 md:h-40 lg:h-48'
            }`}
            style={{ filter: 'grayscale(100%)' }}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </div>

        {/* Back Side - Product Image */}
        <div
          ref={backRef}
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <Image
            src={brand.productImage}
            alt={`${brand.name} eyewear`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
    </div>
  );
}

