import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentForm from '@/components/AppointmentForm';
import Image from 'next/image';

export default function ContactLensesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
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
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                CONTACT LENSES
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-lg">
              Contact Lenses: Visual Freedom, Expert Care
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              Experience the freedom of clear vision without relying on glasses. Our contact lens service focuses on expert fitting, thorough aftercare, and providing a wide range of options.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 md:py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-black/80 leading-relaxed text-center">
              Ready for visual freedom or frustrated with your current lenses? Book a contact lens consultation today 
              and discover the perfect solution for your lifestyle.
            </p>
          </div>

          {/* Our Contact Lens Service Includes */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              Our Contact Lens Service Includes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50">
                <div className="w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#19395f] mb-4">Initial Examination & Fitting</h3>
                <p className="text-black/70 leading-relaxed">
                  A detailed assessment of your eye health and vision to determine the best lens type for you, 
                  ensuring maximum comfort and safety. We take the time to find the perfect fit.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50">
                <div className="w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#19395f] mb-4">Comprehensive Aftercare</h3>
                <p className="text-black/70 leading-relaxed">
                  Regular check-ups are essential to maintain eye health and ensure your lenses remain comfortable 
                  and effective. We provide ongoing support and monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* Wide Range of Lenses */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              Wide Range of Lenses
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <h3 className="font-semibold text-[#19395f] mb-3">Spherical Lenses</h3>
                <p className="text-sm text-black/70">For correcting standard prescriptions and nearsightedness or farsightedness.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <h3 className="font-semibold text-[#19395f] mb-3">Toric Lenses</h3>
                <p className="text-sm text-black/70">Designed to correct astigmatism, providing clear and stable vision.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <h3 className="font-semibold text-[#19395f] mb-3">Multifocal Lenses</h3>
                <p className="text-sm text-black/70">Allowing clear vision at all distances—near, intermediate, and far.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <h3 className="font-semibold text-[#19395f] mb-3">Specialist & Myopia Control</h3>
                <p className="text-sm text-black/70">Including MiSight® 1 Day Contact Lenses, designed to slow the progression of short-sightedness in children.</p>
              </div>
            </div>
          </div>

          {/* Direct Debit Scheme */}
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Contact Lens Direct Debit Scheme</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                No need to worry about running out of contact lenses. Our convenient direct debit scheme includes 
                free contact lens aftercare appointments, ensuring you always have lenses when you need them.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Never Run Out</h3>
                    <p className="text-white/80 text-sm">Automatic delivery ensures you always have lenses available.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Free Aftercare</h3>
                    <p className="text-white/80 text-sm">Regular check-ups included at no extra cost.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fitting Process */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
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
              <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-6">
                Professional Fitting Process
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Our comprehensive fitting process ensures your contact lenses are perfectly suited to your eyes, providing comfort and optimal vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Detailed eye measurements and curvature assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Trial lens fitting to ensure perfect comfort and vision</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Insertion and removal training for safe handling</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lens Types Explained */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              Understanding Lens Types
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <div className="w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-3 text-lg">Daily Disposable</h3>
                <p className="text-sm text-black/70">Fresh lenses every day for maximum hygiene and convenience. No cleaning required.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <div className="w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-3 text-lg">Monthly & Extended Wear</h3>
                <p className="text-sm text-black/70">Cost-effective options for regular wearers with proper cleaning routines.</p>
              </div>
            </div>
          </div>

          {/* Aftercare & Maintenance */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-6">
                Ongoing Care & Support
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Regular aftercare appointments ensure your eyes remain healthy and your lenses continue to provide optimal vision and comfort.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Regular Check-ups</h3>
                    <p className="text-sm text-black/60">Scheduled appointments to monitor eye health</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Cleaning Guidance</h3>
                    <p className="text-sm text-black/60">Expert advice on proper lens care and hygiene</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Prescription Updates</h3>
                    <p className="text-sm text-black/60">Adjustments as your vision needs change</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
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

          {/* Why Choose Contact Lenses */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#e7e8ea]/50 mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-8 text-center">
              Why Choose Contact Lenses
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Natural Vision</h3>
                  <p className="text-black/70">Experience unobstructed peripheral vision and natural depth perception.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Active Lifestyle</h3>
                  <p className="text-black/70">Perfect for sports, exercise, and activities where glasses might be inconvenient.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">No Fogging</h3>
                  <p className="text-black/70">Never worry about glasses fogging up in changing temperatures or weather conditions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Fashion Freedom</h3>
                  <p className="text-black/70">Wear any sunglasses or fashion frames without prescription concerns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Safety & Hygiene */}
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center">
                Safety & Hygiene Best Practices
              </h2>
              <p className="text-lg text-white/90 mb-8 text-center leading-relaxed">
                Proper lens care is essential for maintaining healthy eyes and clear vision.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Wash Hands</h3>
                  <p className="text-white/90 text-sm">Always wash and dry hands before handling lenses</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Follow Schedule</h3>
                  <p className="text-white/90 text-sm">Replace lenses according to your prescribed schedule</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Proper Storage</h3>
                  <p className="text-white/90 text-sm">Use fresh solution and clean cases for storage</p>
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

