'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function ProductCarousel() {
  const products = [
    { src: '/prod-1.png', alt: 'Dry Eye Product 1' },
    { src: '/prod-2.png', alt: 'Dry Eye Product 2' },
    { src: '/prod-1.png', alt: 'Dry Eye Product 3' },
    { src: '/prod-2.png', alt: 'Dry Eye Product 4' },
    { src: '/prod-2.png', alt: 'Dry Eye Product 5' },
    { src: '/prod-2.png', alt: 'Dry Eye Product 6' },
  ];

  // Duplicate products array for seamless infinite scroll
  const duplicatedProducts = [...products, ...products];

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes productCarouselScroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-100% / 2));
        }
      }
      .product-carousel-track {
        animation: productCarouselScroll 20s linear infinite;
        will-change: transform;
      }
      .product-carousel-track:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="flex product-carousel-track mb-6">
        {duplicatedProducts.map((product, index) => (
          <div
            key={index}
            className="relative w-64 md:w-80 h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg flex-shrink-0 mr-4 md:mr-6"
          >
            <Image
              src={product.src}
              alt={product.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

