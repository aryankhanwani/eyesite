import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentForm from '@/components/AppointmentForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Eye Testing Service',
  description: 'Professional home eye tests in Leeds for those unable to visit our practice. Comprehensive examinations, eyewear selection, and aftercare in your home. NHS-funded service available.',
  keywords: ['home eye test Leeds', 'domiciliary eye test Leeds', 'mobile optician Leeds', 'home visit eye test', 'NHS home eye test', 'care home eye test Leeds'],
};

export default function DomicillaryPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/domicillary.png"
            alt="Domicillary Services"
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
                DOMICILLARY SERVICES
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              Domicillary Services: Home Eye Tests
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/95 mb-8 md:mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              For those who are housebound or unable to visit our high-street practice, our Domicillary Service brings expert eye care directly to you.
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
              We ensure that quality eye care is accessible to everyone, regardless of mobility or health circumstances. 
              Our mobile opticians bring the practice to your door.
            </p>
          </div>

          {/* Who is Eligible */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black mb-6 md:mb-8 text-center">
              Who is Eligible?
            </h2>
            
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg border border-[#e7e8ea]/50">
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4 md:mb-6">
                This service is primarily for individuals who cannot leave their home unaccompanied due to physical or mental disability. 
                This includes:
              </p>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1 md:mb-2 text-sm md:text-base">Residents in Care Homes</h3>
                    <p className="text-sm md:text-base text-black/70">Full eye care services available at care facilities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1 md:mb-2 text-sm md:text-base">Assisted Living Facilities</h3>
                    <p className="text-sm md:text-base text-black/70">Comprehensive eye examinations in your living environment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1 md:mb-2 text-sm md:text-base">Housebound Individuals</h3>
                    <p className="text-sm md:text-base text-black/70">For those unable to travel due to mobility or health issues.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1 md:mb-2 text-sm md:text-base">Elderly Patients</h3>
                    <p className="text-sm md:text-base text-black/70">Specialised care for older adults who find travel difficult.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What We Provide */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black mb-6 md:mb-8 lg:mb-12 text-center">
              Bringing the Practice to Your Door
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-[#e7e8ea]/50">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#19395f] mb-3 md:mb-4">Full Comprehensive Exam</h3>
                <p className="text-sm md:text-base text-black/70 leading-relaxed">
                  Our mobile opticians use portable equipment to conduct a complete eye health examination, checking for 
                  eye diseases just as we would in the practice.
                </p>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-[#e7e8ea]/50">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#19395f] mb-3 md:mb-4">Frames and Delivery</h3>
                <p className="text-sm md:text-base text-black/70 leading-relaxed">
                  We bring a wide selection of frames for you to choose from in the comfort of your own home. 
                  Once your spectacles are ready, we return to deliver and perfectly fit them.
                </p>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-[#e7e8ea]/50">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#19395f] mb-3 md:mb-4">Full Aftercare Support</h3>
                <p className="text-sm md:text-base text-black/70 leading-relaxed">
                  Providing complete aftercare support including adjustments, repairs, and follow-up appointments 
                  to ensure your glasses remain comfortable and effective.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 md:mb-8 text-center">
              Benefits of Domicillary Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Comfort & Convenience</h3>
                  <p className="text-white/80 text-xs md:text-sm">Receive expert eye care in the comfort and familiarity of your own home.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Same Quality Care</h3>
                  <p className="text-white/80 text-xs md:text-sm">Professional equipment and expertise, just in a mobile format.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">No Travel Required</h3>
                  <p className="text-white/80 text-xs md:text-sm">Eliminate the stress and difficulty of travelling to appointments.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Personalised Service</h3>
                  <p className="text-white/80 text-xs md:text-sm">One-on-one attention in a relaxed, familiar environment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16 lg:mb-20">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/domicillary.png"
                  alt="Domicillary Eye Care Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#19395f] mb-6">
                What to Expect During Your Visit
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Our mobile opticians bring professional equipment and expertise directly to your home, ensuring you receive the same high-quality care as in our practice.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Comfortable examination in familiar surroundings</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Portable equipment for comprehensive eye health checks</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Personalised frame selection brought to your home</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black mb-6 md:mb-8 lg:mb-12 text-center">
              Where We Provide Service
            </h2>
          </div>

          {/* Equipment & Expertise */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16 lg:mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#19395f] mb-6">
                Expert Care & Qualifications
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Our qualified optometrists bring expert care directly to you, ensuring accurate examinations and reliable results in the comfort of your home.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Portable Equipment</h3>
                    <p className="text-sm text-black/60">Professional-grade tools for comprehensive examinations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Qualified Optometrists</h3>
                    <p className="text-sm text-black/60">Experienced professionals trained in mobile eye care</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Same Quality Care</h3>
                    <p className="text-sm text-black/60">Identical standards to our high-street practice</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/domicillary.png"
                  alt="Professional Mobile Eye Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#19395f]/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Booking Process */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black mb-6 md:mb-8 lg:mb-12 text-center">
              How to Book a Domicillary Visit
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold text-[#19395f]">1</span>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2 md:mb-3 text-sm md:text-base">Contact Us</h3>
                <p className="text-xs md:text-sm text-black/70">Call or email to discuss eligibility and schedule a visit</p>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold text-[#19395f]">2</span>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2 md:mb-3 text-sm md:text-base">Confirm Eligibility</h3>
                <p className="text-xs md:text-sm text-black/70">We'll verify your eligibility for domicillary services</p>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold text-[#19395f]">3</span>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2 md:mb-3 text-sm md:text-base">Schedule Visit</h3>
                <p className="text-xs md:text-sm text-black/70">Arrange a convenient time for your home visit</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-3 md:mb-4">
                Contact Us Today
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">
                Contact us today to check eligibility and arrange a convenient home visit. 
                We're here to ensure quality eye care is accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a 
                  href="tel:+44XXXXXXXXXX" 
                  className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-white text-[#19395f] rounded-full font-semibold hover:bg-white/90 transition-colors text-sm md:text-base"
                >
                  Call Us Now
                </a>
                <a 
                  href="mailto:info@eyesiteopticians.com" 
                  className="inline-block px-6 md:px-8 py-2.5 md:py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#19395f] transition-colors text-sm md:text-base"
                >
                  Email Us
                </a>
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

