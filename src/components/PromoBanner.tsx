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

  const generateVoucherCode = () => {
    return `EYESITE${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate voucher code
    const code = generateVoucherCode();
    setVoucherCode(code);
    setIsSuccess(true);
    setIsSubmitting(false);

    // Reset after 10 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setEmail('');
      setVoucherCode('');
    }, 10000);
  };

  return (
    <>
      <style>{spotlightStyle}</style>
      <section className="w-full py-16 md:py-20 bg-[#faf9f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Asymmetric Layout with Side Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Visual Panel (3 columns) */}
          <div className="lg:col-span-4 relative">
            <div className="relative bg-gradient-to-br from-[#19395f] via-[#0d2440] to-[#19395f] rounded-3xl p-8 md:p-10 lg:p-12 aspect-square flex flex-col justify-between overflow-hidden shadow-xl spotlight-effect">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block mb-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                    🎄 CHRISTMAS OFFER
                  </span>
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-2 leading-tight">
                  £10 Off
                </h3>
                <p className="text-white/90 text-lg">
                  Your Next Visit
                </p>
              </div>

              {/* Features with Tickmarks */}
              <div className="relative z-10 mt-auto">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Valid on All Services</p>
                      <p className="text-xs text-white/70">Eye exams, frames & more</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">No Minimum Purchase</p>
                      <p className="text-xs text-white/70">Use on any amount</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Instant Email Delivery</p>
                      <p className="text-xs text-white/70">Get your code immediately</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Content (8 columns) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl border border-[#e7e8ea]/50">
              {!isSuccess ? (
                <>
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                      Claim Your Exclusive Voucher
                    </h2>
                    <p className="text-lg text-black/70">
                      Subscribe to our newsletter and receive a <span className="font-bold text-[#19395f]">£10 off</span> voucher for your next eye exam or eyewear purchase.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="promo-email" className="block text-sm font-semibold text-[#19395f] mb-3">
                        Email Address
                      </label>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <input
                          type="email"
                          id="promo-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="your.email@example.com"
                          className="flex-1 px-6 py-4 rounded-xl border-2 border-[#e7e8ea] focus:border-[#19395f] focus:ring-2 focus:ring-[#19395f]/20 outline-none transition-all text-black placeholder:text-black/40 text-base bg-white"
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full sm:w-auto cursor-pointer overflow-hidden rounded-xl border-[0.5px] border-[#19395f]/20 bg-[#19395f] py-4 px-8 text-center font-semibold text-white shadow-lg hover:bg-white hover:text-[#19395f] hover:border-[#19395f]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap"
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
                </>
              ) : (
                <div className="text-center">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10 text-green-600"
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
                    <h3 className="text-3xl font-bold text-[#19395f] mb-3">Success!</h3>
                    <p className="text-lg text-black/70 mb-8">Your voucher code has been sent to your email.</p>
                  </div>

                  {/* Voucher Code Display */}
                  <div className="bg-gradient-to-r from-[#19395f] to-[#80acc9] rounded-2xl p-8 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                      <p className="text-white/90 text-sm mb-4 font-medium uppercase tracking-wide">Your Voucher Code</p>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <code className="text-3xl md:text-4xl font-bold text-white tracking-wider font-mono">
                          {voucherCode}
                        </code>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(voucherCode);
                          }}
                          className="p-3 hover:bg-white/20 rounded-xl transition-colors"
                          title="Copy code"
                        >
                          <svg
                            className="w-6 h-6 text-white"
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
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                        <p className="text-white text-xl font-bold">£10 OFF</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-black/60">
                    Check your email for details. Valid until Dec 31, 2024.
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
