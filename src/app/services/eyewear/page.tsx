import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentForm from '@/components/AppointmentForm';
import Image from 'next/image';

export default function EyewearPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/eyewear.png"
            alt="Eyewear"
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
                EYEWEAR
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-lg">
              Eyewear: Style Meets Precision
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              Your eyewear is an extension of your personality, offering an opportunity to blend fashion and function perfectly.
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
              At Eyesite Optician, we stock an exclusive collection of frames to ensure you not only see clearly 
              but look fantastic doing it. Step into our practice to explore the options.
            </p>
          </div>

          {/* Discover Our Collection */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              Discover Our Collection
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50">
                <div className="w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#19395f] mb-4">Expert Styling Consultation</h3>
                <p className="text-black/70 leading-relaxed">
                  Our dedicated dispensing opticians are here to guide you through our collection, helping you find 
                  the perfect shape, colour, and fit that complements your face shape and personal style.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50">
                <div className="w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#19395f] mb-4">Precision Lenses</h3>
                <p className="text-black/70 leading-relaxed">
                  We combine your chosen frames with the latest lens technology—from thin, lightweight materials 
                  to advanced anti-reflection coatings—ensuring optimal visual clarity and comfort.
                </p>
              </div>
            </div>
          </div>

          {/* UVEX Safety Glasses */}
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">UVEX Safety Glasses</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                We supply and provide expert fitting for UVEX safety glasses, ensuring protection meets comfort 
                and style for your workplace requirements.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Professional Protection</h3>
                  <p className="text-white/80">Expert fitting and comprehensive range available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lens Technology */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              Advanced Lens Technology
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <h3 className="font-semibold text-[#19395f] mb-3">Thin & Lightweight</h3>
                <p className="text-sm text-black/70">High-index lenses for thinner, lighter glasses even with strong prescriptions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <h3 className="font-semibold text-[#19395f] mb-3">Anti-Reflection</h3>
                <p className="text-sm text-black/70">Advanced coatings reduce glare and improve clarity, especially for night driving.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <h3 className="font-semibold text-[#19395f] mb-3">Blue Light Protection</h3>
                <p className="text-sm text-black/70">Protect your eyes from digital screen blue light with specialized lens coatings.</p>
              </div>
            </div>
          </div>

          {/* Frame Selection Process */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/eyewear.png"
                  alt="Frame Selection Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-6">
                Finding Your Perfect Frame
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Our expert dispensing opticians guide you through our extensive collection, considering your face shape, lifestyle, and personal style preferences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Face shape analysis to find the most flattering frames</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Lifestyle considerations for work, sports, and daily activities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Color consultation to match your skin tone and wardrobe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Brands Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              Premium Brands We Stock
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2">Designer Collections</h3>
                <p className="text-sm text-black/70">Exclusive frames from world-renowned designers</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2">Quality Materials</h3>
                <p className="text-sm text-black/70">Premium acetate, titanium, and lightweight materials</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2">Latest Styles</h3>
                <p className="text-sm text-black/70">Regularly updated collections with the newest trends</p>
              </div>
            </div>
          </div>

          {/* Lens Customization */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-6">
                Customized Lens Solutions
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Every lens is customized to your exact prescription and lifestyle needs, ensuring optimal vision and comfort.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Progressive Lenses</h3>
                    <p className="text-sm text-black/60">Seamless vision correction for all distances</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Photochromic Lenses</h3>
                    <p className="text-sm text-black/60">Adaptive lenses that darken in sunlight</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Blue Light Protection</h3>
                    <p className="text-sm text-black/60">Specialized coatings for digital eye strain</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/eyewear.png"
                  alt="Customized Lens Solutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#19395f]/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#e7e8ea]/50 mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-8 text-center">
              Why Choose Our Eyewear Collection
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Exclusive Designer Brands</h3>
                  <p className="text-black/70">Premium frames from leading international designers and brands.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Perfect Fit Guarantee</h3>
                  <p className="text-black/70">Expert fitting ensures your glasses are comfortable and properly adjusted.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Comprehensive Aftercare</h3>
                  <p className="text-black/70">Free adjustments and ongoing support to keep your glasses in perfect condition.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Wide Range of Styles</h3>
                  <p className="text-black/70">From classic to contemporary, find frames that match your personality.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Care & Maintenance */}
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center">
                Caring for Your Eyewear
              </h2>
              <p className="text-lg text-white/90 mb-8 text-center leading-relaxed">
                Proper care extends the life of your glasses and maintains optimal vision clarity.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Regular Cleaning</h3>
                  <p className="text-white/90 text-sm">Use proper lens cleaning solutions and microfiber cloths</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Proper Storage</h3>
                  <p className="text-white/90 text-sm">Store in a protective case when not in use</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Free Adjustments</h3>
                  <p className="text-white/90 text-sm">Visit us anytime for free adjustments and repairs</p>
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

