'use client';

import { useState } from 'react';

// Add CSS for shiny spotlight effect
const spotlightStyle = `
  @keyframes spotlight {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }
  
  .spotlight-effect {
    position: relative;
    overflow: hidden;
  }
  
  .spotlight-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 45%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.1) 55%,
      transparent 70%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: spotlight 3s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
  }
`;

export default function PromoBanner() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit/offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up for offer');
      }

      const data = await response.json();
      setVoucherCode(data.data.code);
      setIsSuccess(true);
      setIsSubmitting(false);

      // Reset after 10 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
        setVoucherCode('');
      }, 10000);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error signing up for offer:', error);
      alert('Failed to sign up. Please try again.');
    }
  };

  return (
    <>
      <style>{spotlightStyle}</style>
      <section className="w-full py-12 md:py-16 lg:py-20 bg-[#faf9f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Asymmetric Layout with Side Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Side - Visual Panel (3 columns) */}
          <div className="lg:col-span-4 relative flex">
            <div className="relative bg-gradient-to-br from-[#19395f] via-[#0d2440] to-[#19395f] rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 w-full flex flex-col justify-between overflow-hidden shadow-xl spotlight-effect">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block mb-4 sm:mb-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold">
                    SPECIAL OFFER
                  </span>
                </div>
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">
                  20% Off
                </h3>
                <p className="text-white/90 text-base sm:text-lg">
                  All Frames
                </p>
              </div>

              {/* Features with Tickmarks */}
              <div className="relative z-10 mt-6 sm:mt-auto">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base md:text-lg">On All Frames</p>
                      <p className="text-xs sm:text-sm md:text-base text-white/70 hidden sm:block">Premium designer brands included</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base md:text-lg">No Minimum Purchase</p>
                      <p className="text-xs sm:text-sm md:text-base text-white/70 hidden sm:block">Valid on all frame styles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base md:text-lg">Book Your Appointment</p>
                      <p className="text-xs sm:text-sm md:text-base text-white/70 hidden sm:block">Claim your discount today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Content (8 columns) */}
          <div className="lg:col-span-8 flex">
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border border-[#e7e8ea]/50 w-full flex flex-col">
              {!isSuccess ? (
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                      Special Offer: 20% Off All Frames
                    </h2>
                    <p className="text-base sm:text-lg text-black/70">
                      Subscribe to our newsletter and receive a <span className="font-bold text-[#19395f]">20% discount</span> on all frames, including premium designer brands.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 flex-1 flex flex-col justify-end">
                    <div>
                      <label htmlFor="promo-email" className="block text-sm font-semibold text-[#19395f] mb-2 sm:mb-3">
                        Email Address
                      </label>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <input
                          type="email"
                          id="promo-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="your.email@example.com"
                          className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-[#e7e8ea] focus:border-[#19395f] focus:ring-2 focus:ring-[#19395f]/20 outline-none transition-all text-black placeholder:text-black/40 text-sm sm:text-base bg-white"
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full sm:w-auto cursor-pointer overflow-hidden rounded-xl border-[0.5px] border-[#19395f]/20 bg-[#19395f] py-3 sm:py-4 px-6 sm:px-8 text-center font-semibold text-white shadow-lg hover:bg-white hover:text-[#19395f] hover:border-[#19395f]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap"
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
                              Processing...
                            </span>
                          ) : (
                            <>
                              <div className="flex items-center justify-center gap-2">
                                <div className="w-2 h-2 scale-100 rounded-lg bg-white transition-all duration-300 group-hover:scale-[100.8]"></div>
                                <span className="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                                  Get My Voucher
                                </span>
                              </div>
                              <div className="absolute top-0 z-10 flex w-full h-full translate-x-12 items-center justify-center gap-2 text-[#19395f] opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
                                <span className="whitespace-nowrap">Get My Voucher</span>
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
                      </div>
                    </div>
                    <p className="text-xs text-black/60">
                      By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="text-center flex flex-col h-full justify-center">
                  <div className="mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
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
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#19395f] mb-2 sm:mb-3">Success!</h3>
                    <p className="text-base sm:text-lg text-black/70 mb-6 sm:mb-8">Your voucher code has been sent to your email.</p>
                  </div>

                  {/* Voucher Code Display */}
                  <div className="bg-gradient-to-r from-[#19395f] to-[#80acc9] rounded-2xl p-6 sm:p-8 mb-4 sm:mb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                      <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 font-medium uppercase tracking-wide">Your Voucher Code</p>
                      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                        <code className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wider font-mono">
                          {voucherCode}
                        </code>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(voucherCode);
                          }}
                          className="p-2 sm:p-3 hover:bg-white/20 rounded-xl transition-colors"
                          title="Copy code"
                        >
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full">
                        <p className="text-white text-lg sm:text-xl font-bold">20% OFF</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-black/60">
                    Check your email for details. Valid on all frames.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
