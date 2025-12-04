import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentForm from '@/components/AppointmentForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Lenses Fitting & Supply',
  description: 'Expert contact lens fitting and supply in Leeds. Daily, monthly, toric, and multifocal lenses. Professional aftercare and ongoing support. Book your fitting consultation at Eyesite Opticians.',
  keywords: ['contact lenses Leeds', 'contact lens fitting Leeds', 'daily lenses', 'monthly lenses', 'toric lenses Leeds', 'multifocal contact lenses'],
};

export default function ContactLensesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/lens.png"
            alt="Contact Lenses"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 md:mb-6">
              <span className="inline-block bg-[#19395f] text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium">
                CONTACT LENSES
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              Contact Lenses: Visual Freedom, Expert Care
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/95 mb-8 md:mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              Experience the freedom of clear vision without relying on glasses. Our contact lens service focuses on expert fitting, thorough aftercare, and providing a wide range of options.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-16 lg:py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
            <p className="text-base md:text-lg lg:text-xl text-black/80 leading-relaxed text-center">
              Ready for visual freedom or frustrated with your current lenses? Book a contact lens consultation today 
              and discover the perfect solution for your lifestyle.
            </p>
          </div>

          {/* Our Contact Lens Service Includes */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black mb-6 md:mb-8 lg:mb-12 text-center">
              Our Contact Lens Service Includes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-[#e7e8ea]/50">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#19395f] mb-3 md:mb-4">Initial Examination & Fitting</h3>
                <p className="text-sm md:text-base text-black/70 leading-relaxed">
                  A detailed assessment of your eye health and vision to determine the best lens type for you, 
                  ensuring maximum comfort and safety. We take the time to find the perfect fit.
                </p>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-[#e7e8ea]/50">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#19395f] mb-3 md:mb-4">Comprehensive Aftercare</h3>
                <p className="text-sm md:text-base text-black/70 leading-relaxed">
                  Regular check-ups are essential to maintain eye health and ensure your lenses remain comfortable 
                  and effective. We provide ongoing support and monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* Wide Range of Lenses */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black mb-6 md:mb-8 lg:mb-12 text-center">
              Wide Range of Lenses
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-[#e7e8ea]/50 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2 text-sm md:text-base">Spherical Lenses</h3>
                <p className="text-xs md:text-sm text-black/70">For correcting standard prescriptions and nearsightedness or farsightedness.</p>
              </div>
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-[#e7e8ea]/50 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2 text-sm md:text-base">Toric Lenses</h3>
                <p className="text-xs md:text-sm text-black/70">Designed to correct astigmatism, providing clear and stable vision.</p>
              </div>
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-[#e7e8ea]/50 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2 text-sm md:text-base">Multifocal Lenses</h3>
                <p className="text-xs md:text-sm text-black/70">Allowing clear vision at all distances—near, intermediate, and far.</p>
              </div>
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-[#e7e8ea]/50 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2 text-sm md:text-base">Specialist & Myopia Control</h3>
                <p className="text-xs md:text-sm text-black/70">Including MiSight® 1 Day Contact Lenses, designed to slow the progression of short-sightedness in children.</p>
              </div>
            </div>
          </div>

          {/* Direct Debit Scheme */}
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white mb-12 md:mb-16 lg:mb-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-3 md:mb-4">Contact Lens Direct Debit Scheme</h2>
                <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                  No need to worry about running out of contact lenses. Our convenient direct debit scheme includes 
                  free contact lens aftercare appointments, ensuring you always have lenses when you need them.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/20 hover:bg-white/15 transition-colors h-full flex flex-col">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1.5 text-sm md:text-base">Never Run Out</h3>
                      <p className="text-white/90 text-xs md:text-sm leading-snug">Automatic delivery ensures you always have lenses available.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/20 hover:bg-white/15 transition-colors h-full flex flex-col">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1.5 text-sm md:text-base">Free Aftercare</h3>
                      <p className="text-white/90 text-xs md:text-sm leading-snug">Regular check-ups included at no extra cost.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fitting Process */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16 lg:mb-20">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/lens.png"
                  alt="Contact Lens Fitting Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#19395f] mb-4 md:mb-6">
                Professional Fitting Process
              </h2>
              <p className="text-base md:text-lg text-black/70 mb-4 md:mb-6 leading-relaxed">
                Our comprehensive fitting process ensures your contact lenses are perfectly suited to your eyes, providing comfort and optimal vision.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-black/70">Detailed eye measurements and curvature assessment</p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-black/70">Trial lens fitting to ensure perfect comfort and vision</p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-black/70">Insertion and removal training for safe handling</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Contact Lenses */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg border border-[#e7e8ea]/50 mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#19395f] mb-6 md:mb-8 text-center">
              Why Choose Contact Lenses
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1 md:mb-2 text-sm md:text-base">Natural Vision</h3>
                  <p className="text-sm md:text-base text-black/70">Experience unobstructed peripheral vision and natural depth perception.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1 md:mb-2 text-sm md:text-base">Active Lifestyle</h3>
                  <p className="text-sm md:text-base text-black/70">Perfect for sports, exercise, and activities where glasses might be inconvenient.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1 md:mb-2 text-sm md:text-base">No Fogging</h3>
                  <p className="text-sm md:text-base text-black/70">Never worry about glasses fogging up in changing temperatures or weather conditions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1 md:mb-2 text-sm md:text-base">Fashion Freedom</h3>
                  <p className="text-sm md:text-base text-black/70">Wear any sunglasses or fashion frames without prescription concerns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Aftercare & Maintenance */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16 lg:mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#19395f] mb-4 md:mb-6">
                Ongoing Care & Support
              </h2>
              <p className="text-base md:text-lg text-black/70 mb-4 md:mb-6 leading-relaxed">
                Regular aftercare appointments ensure your eyes remain healthy and your lenses continue to provide optimal vision and comfort.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm md:text-base">Regular Check-ups</h3>
                    <p className="text-xs md:text-sm text-black/60">Scheduled appointments to monitor eye health</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm md:text-base">Cleaning Guidance</h3>
                    <p className="text-xs md:text-sm text-black/60">Expert advice on proper lens care and hygiene</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm md:text-base">Prescription Updates</h3>
                    <p className="text-xs md:text-sm text-black/60">Adjustments as your vision needs change</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/lens.png"
                  alt="Contact Lens Aftercare"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#19395f]/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Safety & Hygiene */}
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-6 text-center">
                Safety & Hygiene Best Practices
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 text-center leading-relaxed">
                Proper lens care is essential for maintaining healthy eyes and clear vision.
              </p>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center">
                  <h3 className="font-semibold text-base md:text-lg mb-2">Wash Hands</h3>
                  <p className="text-white/90 text-xs md:text-sm">Always wash and dry hands before handling lenses</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center">
                  <h3 className="font-semibold text-base md:text-lg mb-2">Follow Schedule</h3>
                  <p className="text-white/90 text-xs md:text-sm">Replace lenses according to your prescribed schedule</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center">
                  <h3 className="font-semibold text-base md:text-lg mb-2">Proper Storage</h3>
                  <p className="text-white/90 text-xs md:text-sm">Use fresh solution and clean cases for storage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
      
      <Footer />
    </div>
  );
}

