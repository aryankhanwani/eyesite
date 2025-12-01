'use client';

import { useState, useEffect } from 'react';
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

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = ({ showMobileMenu = false }: { showMobileMenu?: boolean }) => (
    <>
      {/* Logo */}
      <a href="/" className="flex items-center cursor-pointer">
        <Image
          src="/eyesite-logo.png"
          alt="Eyesite Opticians Logo"
          width={240}
          height={80}
          quality={100}
          className="h-8 md:h-10 w-auto object-contain"
          priority
          style={{ width: 'auto', height: 'auto', maxHeight: '2.5rem' }}
        />
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <div 
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button
            className="flex items-center gap-1 text-[#19395f] hover:text-[#80acc9] transition-colors font-medium"
          >
            Services
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
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
          
          {/* Invisible bridge to prevent gap */}
          <div className="absolute top-full left-0 right-0 h-4"></div>
          
          {/* Services Dropdown */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.1)] border border-[#e7e8ea]/50 overflow-hidden transition-all duration-300 ease-out z-50 ${
              isServicesOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="p-6">
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="/services/eye-exams"
                  className="group relative overflow-hidden rounded-xl hover:bg-[#f4f6f8] transition-all duration-300 border border-[#e7e8ea]/30 hover:border-[#19395f]/20 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                    <Image
                      src="/eye-exams.png"
                      alt="Eye Exams"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#19395f] group-hover:text-[#80acc9] transition-colors mb-1.5 text-base">
                      Eye Exams
                    </h3>
                    <p className="text-xs text-black/60 leading-relaxed line-clamp-2">
                      Comprehensive examinations with advanced technology
                    </p>
                  </div>
                </a>

                <a
                  href="/services/eyewear"
                  className="group relative overflow-hidden rounded-xl hover:bg-[#f4f6f8] transition-all duration-300 border border-[#e7e8ea]/30 hover:border-[#19395f]/20 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                    <Image
                      src="/eyewear.png"
                      alt="Eyewear"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#19395f] group-hover:text-[#80acc9] transition-colors mb-1.5 text-base">
                      Eyewear
                    </h3>
                    <p className="text-xs text-black/60 leading-relaxed line-clamp-2">
                      Premium designer frames and precision lenses
                    </p>
                  </div>
                </a>

                <a
                  href="/services/contact-lenses"
                  className="group relative overflow-hidden rounded-xl hover:bg-[#f4f6f8] transition-all duration-300 border border-[#e7e8ea]/30 hover:border-[#19395f]/20 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                    <Image
                      src="/lens.png"
                      alt="Contact Lenses"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#19395f] group-hover:text-[#80acc9] transition-colors mb-1.5 text-base">
                      Contact Lenses
                    </h3>
                    <p className="text-xs text-black/60 leading-relaxed line-clamp-2">
                      Expert fitting and wide range of options
                    </p>
                  </div>
                </a>

                <a
                  href="/services/cues"
                  className="group relative overflow-hidden rounded-xl hover:bg-[#f4f6f8] transition-all duration-300 border border-[#e7e8ea]/30 hover:border-[#19395f]/20 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                    <Image
                      src="/cues.png"
                      alt="CUES"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#19395f] group-hover:text-[#80acc9] transition-colors mb-1.5 text-base">
                      CUES
                    </h3>
                    <p className="text-xs text-black/60 leading-relaxed line-clamp-2">
                      Urgent eye care service for emergencies
                    </p>
                  </div>
                </a>

                <a
                  href="/services/dry-eye"
                  className="group relative overflow-hidden rounded-xl hover:bg-[#f4f6f8] transition-all duration-300 border border-[#e7e8ea]/30 hover:border-[#19395f]/20 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                    <Image
                      src="/dry eye.png"
                      alt="Dry Eye"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#19395f] group-hover:text-[#80acc9] transition-colors mb-1.5 text-base">
                      Dry Eye
                    </h3>
                    <p className="text-xs text-black/60 leading-relaxed line-clamp-2">
                      Specialist clinic with tailored treatment plans
                    </p>
                  </div>
                </a>

                <a
                  href="/services/domicillary"
                  className="group relative overflow-hidden rounded-xl hover:bg-[#f4f6f8] transition-all duration-300 border border-[#e7e8ea]/30 hover:border-[#19395f]/20 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                    <Image
                      src="/domicillary.png"
                      alt="Domicillary Services"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#19395f] group-hover:text-[#80acc9] transition-colors mb-1.5 text-base">
                      Domicillary Services
                    </h3>
                    <p className="text-xs text-black/60 leading-relaxed line-clamp-2">
                      Home eye tests for those unable to visit
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          href="/about-us"
          className="text-[#19395f] hover:text-[#80acc9] transition-colors font-medium"
        >
          About Us
        </a>
        <a
          href="/blog"
          className="text-[#19395f] hover:text-[#80acc9] transition-colors font-medium"
        >
          Blog
        </a>
        <a
          href="/contact-us"
          className="text-[#19395f] hover:text-[#80acc9] transition-colors font-medium"
        >
          Contact
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[#19395f] transition-all duration-300 ${
          isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
        }`}></span>
        <span className={`w-6 h-0.5 bg-[#19395f] transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-0' : ''
        }`}></span>
        <span className={`w-6 h-0.5 bg-[#19395f] transition-all duration-300 ${
          isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
        }`}></span>
      </button>

      {/* Desktop CTA Button */}
      <a href="/book-appointment" className="hidden md:block group relative w-auto cursor-pointer overflow-hidden rounded-full border-[0.5px] border-[#19395f]/20 bg-[#19395f] py-2 px-5 text-sm md:text-base text-center font-semibold text-white hover:bg-white hover:text-[#19395f] hover:border-[#19395f]/30 shiny-button">
        <span className="inline-block whitespace-nowrap">Book Appointment</span>
      </a>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-white border border-[#e7e8ea] rounded-2xl shadow-lg transition-all duration-300 z-50 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-6 py-4 space-y-4">
            <div>
              <button
                className="w-full flex items-center justify-between text-[#19395f] hover:text-[#80acc9] transition-colors font-medium py-2"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="mt-2 ml-4 space-y-2 border-l-2 border-[#e7e8ea] pl-4">
                  <a
                    href="/services/eye-exams"
                    className="block text-sm text-black/70 hover:text-[#80acc9] transition-colors py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Eye Exams
                  </a>
                  <a
                    href="/services/eyewear"
                    className="block text-sm text-black/70 hover:text-[#80acc9] transition-colors py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Eyewear
                  </a>
                  <a
                    href="/services/contact-lenses"
                    className="block text-sm text-black/70 hover:text-[#80acc9] transition-colors py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Lenses
                  </a>
                  <a
                    href="/services/cues"
                    className="block text-sm text-black/70 hover:text-[#80acc9] transition-colors py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CUES
                  </a>
                  <a
                    href="/services/dry-eye"
                    className="block text-sm text-black/70 hover:text-[#80acc9] transition-colors py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dry Eye
                  </a>
                  <a
                    href="/services/domicillary"
                    className="block text-sm text-black/70 hover:text-[#80acc9] transition-colors py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Domicillary Services
                  </a>
                </div>
              )}
            </div>
            <a
              href="/about-us"
              className="block text-[#19395f] hover:text-[#80acc9] transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/blog"
              className="block text-[#19395f] hover:text-[#80acc9] transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="/contact-us"
              className="block text-[#19395f] hover:text-[#80acc9] transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/book-appointment"
              className="w-full group relative cursor-pointer overflow-hidden rounded-full border-[0.5px] border-[#19395f]/20 bg-[#19395f] py-3 px-6 text-center font-semibold text-white hover:bg-white hover:text-[#19395f] hover:border-[#19395f]/30 shiny-button block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="inline-block whitespace-nowrap">Book Appointment</span>
            </a>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      <style>{shinyButtonStyles}</style>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Full-width navbar - shown when not scrolled */}
      <nav className={`relative w-full bg-white px-4 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 transition-all duration-500 ease-in-out ${
        isScrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}>
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <NavContent showMobileMenu={true} />
        </div>
      </nav>

      {/* Rounded navbar - slides down when scrolled */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 max-w-6xl w-[calc(100%-2rem)] md:w-full bg-white/80 backdrop-blur-sm rounded-full px-4 md:px-6 lg:px-8 py-2.5 md:py-3 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'opacity-100 translate-y-0 shadow-[0_10px_40px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] border border-white/50' 
          : 'opacity-0 -translate-y-full pointer-events-none shadow-sm'
      }`}>
        <div className="flex items-center justify-between">
          <NavContent showMobileMenu={true} />
        </div>
      </nav>
    </header>
    </>
  );
}

