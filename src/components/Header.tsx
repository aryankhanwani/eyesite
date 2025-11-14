'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="w-full px-8 py-6 flex items-center justify-center bg-[#e7e8ea]">
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-full px-6 md:px-8 py-4 md:py-5 shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/eyesite-logo.png"
            alt="Eyesite Opticians Logo"
            width={160}
            height={50}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative">
            <button
              className="flex items-center gap-1 text-[#19395f] hover:text-[#80acc9] transition-colors font-medium"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <a
            href="#about"
            className="text-[#19395f] hover:text-[#80acc9] transition-colors font-medium"
          >
            About Us
          </a>
          <a
            href="#eyecare"
            className="text-[#19395f] hover:text-[#80acc9] transition-colors font-medium"
          >
            Eye Care
          </a>
        </div>

        {/* CTA Button */}
        <button className="group relative w-auto cursor-pointer overflow-hidden rounded-full border-[0.5px] border-[#19395f]/20 bg-[#19395f] py-2.5 px-6 text-center font-semibold text-white hover:bg-white hover:text-[#19395f] hover:border-[#19395f]/30">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 scale-100 rounded-lg bg-white transition-all duration-300 group-hover:scale-[100.8]"></div>
            <span className="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
              Book Appointment
            </span>
          </div>
          <div className="absolute top-0 z-10 flex w-full h-full translate-x-12 items-center justify-center gap-2 text-[#19395f] opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
            <span className="whitespace-nowrap">Book Appointment</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
      </nav>
    </header>
  );
}

