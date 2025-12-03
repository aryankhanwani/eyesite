'use client';

import { useState } from 'react';
import Image from 'next/image';
import { businessInfo } from '@/lib/businessInfo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.duplicate) {
        // Show duplicate modal
        setShowDuplicateModal(true);
        setIsSubmitting(false);
        setEmail('');
        return;
      }

      if (!response.ok) {
        let errorMessage = 'Failed to subscribe';
        if (data?.error) {
          errorMessage = data.error;
        }
        throw new Error(errorMessage);
      }

      setIsSuccess(true);
      setIsSubmitting(false);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error subscribing to newsletter:', error);
      alert('Failed to subscribe. Please try again.');
    }
  };

  return (
    <>
      {/* Duplicate Email Modal */}
      {showDuplicateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowDuplicateModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Already Subscribed</h3>
              <p className="text-gray-600 mb-6">
                You have already subscribed to our newsletter. Thank you for your interest!
              </p>
              <button
                onClick={() => setShowDuplicateModal(false)}
                className="w-full bg-[#19395f] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#0d2440] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="w-full bg-[#19395f] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated</h3>
                <p className="text-white/80 text-base md:text-lg">
                  Subscribe to our newsletter for eye care tips, exclusive offers, and the latest updates from Eyesite Opticians.
                </p>
              </div>

              {/* Right Side - Newsletter Form */}
              <div>
                {!isSuccess ? (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email address"
                      className="flex-1 px-5 py-3.5 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border-[0.5px] border-white/20 bg-white py-3.5 px-8 text-center font-semibold text-[#19395f] shadow-lg hover:bg-[#19395f] hover:text-white hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Subscribing...
                        </span>
                      ) : (
                        <>
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 scale-100 rounded-lg bg-[#19395f] transition-all duration-300 group-hover:scale-[100.8]"></div>
                            <span className="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                              Subscribe
                            </span>
                          </div>
                          <div className="absolute top-0 z-10 flex w-full h-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
                            <span className="whitespace-nowrap">Subscribe</span>
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
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-3 text-green-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg font-semibold">Thank you for subscribing!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 xl:gap-24">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="mb-6 flex items-center gap-2">
                {/* Logo Icon */}
                <Image
                  src="/logo-icon.png"
                  alt="Eyesite Icon"
                  width={48}
                  height={48}
                  quality={100}
                  className="h-7 w-7 md:h-9 md:w-9 object-contain brightness-0 invert"
                />
                {/* Main Logo */}
                <Image
                  src="/eyesite-logo.png"
                  alt="Eyesite Opticians Logo"
                  width={160}
                  height={50}
                  className="h-7 md:h-9 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Expert eye care services and premium eyewear solutions for clearer vision and better eye health.
              </p>
              {/* Trust Badges */}
              <div className="flex items-center gap-4 mt-6">
                <div className="h-8 w-auto grayscale brightness-0 invert opacity-70">
                  <Image
                    src="/nhs logo.png"
                    alt="NHS Logo"
                    width={80}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="h-8 w-auto grayscale brightness-0 invert opacity-70">
                  <Image
                    src="/coo_logo_text_white.png"
                    alt="COO Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="text-white/70 hover:text-white transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-white/70 hover:text-white transition-colors text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="text-white/70 hover:text-white transition-colors text-sm">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/book-appointment" className="text-white/70 hover:text-white transition-colors text-sm">
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/services/eye-exams" className="text-white/70 hover:text-white transition-colors text-sm">
                    Eye Examinations
                  </a>
                </li>
                <li>
                  <a href="/services/eyewear" className="text-white/70 hover:text-white transition-colors text-sm">
                    Eyewear Collection
                  </a>
                </li>
                <li>
                  <a href="/services/contact-lenses" className="text-white/70 hover:text-white transition-colors text-sm">
                    Contact Lenses
                  </a>
                </li>
                <li>
                  <a href="/services/cues" className="text-white/70 hover:text-white transition-colors text-sm">
                    CUES Service
                  </a>
                </li>
                <li>
                  <a href="/services/dry-eye" className="text-white/70 hover:text-white transition-colors text-sm">
                    Dry Eye Treatment
                  </a>
                </li>
                <li>
                  <a href="/services/domicillary" className="text-white/70 hover:text-white transition-colors text-sm">
                    Domiciliary Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-white/70 text-sm">
                    {businessInfo.contact.address.street}<br />
                    {businessInfo.contact.address.city}, {businessInfo.contact.address.postcode}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-white/70 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href={`tel:${businessInfo.contact.phone}`} className="text-white/70 hover:text-white transition-colors text-sm">
                    {businessInfo.contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-white/70 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href={`mailto:${businessInfo.contact.email}`} className="text-white/70 hover:text-white transition-colors text-sm">
                    {businessInfo.contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-white/70 flex-shrink-0"
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
                  <span className="text-white/70 text-sm">
                    Mon - Fri: {businessInfo.hours.weekdays}<br />
                    Sat: {businessInfo.hours.saturday}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm text-center md:text-left">
                © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="/contact-us" className="text-white/60 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
                <a href="/book-appointment" className="text-white/60 hover:text-white transition-colors text-sm">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

