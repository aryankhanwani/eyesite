'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';

export default function ProductCarousel() {
  const products = [
    { src: '/prod-1.png', alt: 'Product 1' },
    { src: '/prod-2.png', alt: 'Product 2' },
    { src: '/prod-3.png', alt: 'Product 3' },
    { src: '/prod-4.png', alt: 'Product 4' },
    { src: '/prod-5.png', alt: 'Product 5' },
    { src: '/prod-6.png', alt: 'Product 6' },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const currentPositionRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  // Duplicate products multiple times for seamless infinite scroll
  const duplicatedProducts = [...products, ...products, ...products];
  const itemWidth = 320; // w-80 = 320px
  const gap = 24; // gap-6 = 24px
  const itemWidthWithGap = itemWidth + gap;
  const singleSetWidth = products.length * itemWidthWithGap;

  // Auto-scroll function - truly seamless infinite scrolling
  const autoScroll = useCallback(() => {
    if (isPausedRef.current || !trackRef.current) return;

    currentPositionRef.current += 1.5; // Scroll speed - keeps increasing infinitely
    
    // When we reach one full set width, instantly reset to 0 (invisible because items are duplicated)
    if (currentPositionRef.current >= singleSetWidth) {
      // Disable transition for instant reset
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translateX(0px)`;
        // Force reflow to apply the reset
        trackRef.current.offsetHeight;
        // Re-enable transition
        trackRef.current.style.transition = '';
      }
      currentPositionRef.current = currentPositionRef.current - singleSetWidth;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentPositionRef.current}px)`;
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  }, [singleSetWidth]);

  // Start auto-scroll
  useEffect(() => {
    if (!isPausedRef.current) {
      animationRef.current = requestAnimationFrame(autoScroll);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoScroll]);

  // Pause on hover
  const handleMouseEnter = () => {
    isPausedRef.current = true;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  // Touch/Drag handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    isPausedRef.current = true;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(currentPositionRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    let newPosition = scrollLeft - walk;

    // Handle seamless wrapping
    while (newPosition < 0) {
      newPosition += singleSetWidth;
    }
    while (newPosition >= singleSetWidth) {
      newPosition -= singleSetWidth;
    }

    currentPositionRef.current = newPosition;
    trackRef.current.style.transform = `translateX(-${newPosition}px)`;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    isPausedRef.current = false;
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    isPausedRef.current = true;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(currentPositionRef.current);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    let newPosition = scrollLeft - walk;

    // Handle seamless wrapping
    while (newPosition < 0) {
      newPosition += singleSetWidth;
    }
    while (newPosition >= singleSetWidth) {
      newPosition -= singleSetWidth;
    }

    currentPositionRef.current = newPosition;
    trackRef.current.style.transform = `translateX(-${newPosition}px)`;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    isPausedRef.current = false;
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  // Global mouse up handler
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        isPausedRef.current = false;
        animationRef.current = requestAnimationFrame(autoScroll);
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isDragging, autoScroll]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        if (!isDragging) {
          handleMouseLeave();
        }
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        ref={trackRef}
        className="flex gap-6 cursor-grab active:cursor-grabbing mb-6"
        style={{
          transform: `translateX(-${currentPositionRef.current}px)`,
          transition: isDragging ? 'none' : 'transform 0.1s linear',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {duplicatedProducts.map((product, index) => (
          <div
            key={index}
            className="relative w-64 md:w-80 h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg shrink-0 select-none"
            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
          >
            <Image
              src={product.src}
              alt={product.alt}
              fill
              className="object-cover"
              draggable={false}
              priority={index < 6}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
