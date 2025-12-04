import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentForm from '@/components/AppointmentForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CUES - Urgent Eye Care Service',
  description: 'NHS-funded urgent eye care service in Leeds. Same-day appointments for eye emergencies, infections, injuries, and sudden vision changes. Fast professional treatment at Eyesite Opticians.',
  keywords: ['CUES Leeds', 'urgent eye care Leeds', 'eye emergency Leeds', 'NHS eye emergency', 'eye infection treatment', 'red eye treatment Leeds'],
};

export default function CUESPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/cues.png"
            alt="CUES"
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
                CUES
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              CUES: Community Urgent Eyecare Service
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/95 mb-8 md:mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              An NHS service providing urgent assessment, treatment, or referral for recent and sudden onset eye problems.
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
              The Community Urgent Eyecare Service (CUES) is designed to address emergency concerns quickly, 
              often saving a trip to the GP or A&E. This service is for sudden, urgent issues and is not a routine eye test.
            </p>
          </div>

          {/* What CUES Can Examine */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black mb-6 md:mb-8 lg:mb-12 text-center">
              CUES Can Examine Symptoms Such As
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-black mb-2 text-sm md:text-base">Red or Painful Eye/Eyelids</h3>
                <p className="text-xs md:text-sm text-black/70">Immediate assessment for eye irritation, redness, or discomfort.</p>
              </div>

              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-black mb-2 text-sm md:text-base">Recent Onset of Flashes or Floaters</h3>
                <p className="text-xs md:text-sm text-black/70">Urgent evaluation for sudden visual disturbances.</p>
              </div>

              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-black mb-2 text-sm md:text-base">Sudden Loss of Vision</h3>
                <p className="text-xs md:text-sm text-black/70">Immediate care for rapid vision changes or loss.</p>
              </div>

              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-black mb-2 text-sm md:text-base">Foreign Body in the Eye</h3>
                <p className="text-xs md:text-sm text-black/70">Safe removal and treatment of objects in the eye.</p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl md:rounded-2xl p-6 md:p-8 mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-200 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-900 mb-1 md:mb-2 text-base md:text-lg">Important Notice</h3>
                <p className="text-sm md:text-base text-yellow-800 leading-relaxed">
                  This service is for sudden, urgent issues and is not a routine eye test. If you need a regular eye examination, 
                  please book a standard appointment. For life-threatening emergencies, please call 999 or visit A&E immediately.
                </p>
              </div>
            </div>
          </div>

          {/* How CUES Works */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg border border-[#e7e8ea]/50 mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#19395f] mb-6 md:mb-8 text-center">
              How CUES Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#19395f] text-white flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-black mb-2 md:mb-3 text-sm md:text-base">Contact Us</h3>
                <p className="text-xs md:text-sm text-black/70">Call or visit for urgent eye care assessment.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#19395f] text-white flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-black mb-2 md:mb-3 text-sm md:text-base">Assessment</h3>
                <p className="text-xs md:text-sm text-black/70">Our optometrists evaluate your urgent eye concern.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#19395f] text-white flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-black mb-2 md:mb-3 text-sm md:text-base">Treatment or Referral</h3>
                <p className="text-xs md:text-sm text-black/70">We provide immediate treatment or refer to appropriate specialists.</p>
              </div>
            </div>
          </div>

          {/* When to Use CUES */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16 lg:mb-20">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/when-cues.png"
                  alt="CUES Urgent Eye Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#19395f] mb-4 md:mb-6">
                When to Use CUES
              </h2>
              <p className="text-base md:text-lg text-black/70 mb-4 md:mb-6 leading-relaxed">
                CUES is designed for sudden-onset eye problems that require urgent attention but are not life-threatening emergencies.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-black/70">Symptoms that started suddenly within the last few days</p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-black/70">Eye problems affecting your daily activities</p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-black/70">Concerns that cannot wait for a routine appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens During Assessment */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black mb-6 md:mb-8 lg:mb-12 text-center">
              What Happens During Your Assessment
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-[#e7e8ea]/50">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold text-[#19395f]">1</span>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2 md:mb-3 text-center text-sm md:text-base">Symptom Review</h3>
                <p className="text-xs md:text-sm text-black/70 text-center">Detailed discussion of your symptoms and when they started</p>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-[#e7e8ea]/50">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold text-[#19395f]">2</span>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2 md:mb-3 text-center text-sm md:text-base">Eye Examination</h3>
                <p className="text-xs md:text-sm text-black/70 text-center">Comprehensive assessment using specialised equipment</p>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-[#e7e8ea]/50">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold text-[#19395f]">3</span>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2 md:mb-3 text-center text-sm md:text-base">Treatment Plan</h3>
                <p className="text-xs md:text-sm text-black/70 text-center">Immediate treatment or referral to appropriate specialist</p>
              </div>
            </div>
          </div>

          {/* Emergency vs Urgent */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16 lg:mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#19395f] mb-6">
                Emergency vs Urgent Care
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <h3 className="font-semibold text-red-900 mb-2">Life-Threatening Emergency</h3>
                  <p className="text-sm text-red-800">Call 999 or go to A&E immediately for severe trauma, chemical burns, or sudden complete vision loss.</p>
                </div>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">Urgent Care (CUES)</h3>
                  <p className="text-sm text-yellow-800">Use CUES for sudden-onset eye problems that need prompt attention but are not life-threatening.</p>
                </div>
                <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Routine Care</h3>
                  <p className="text-sm text-blue-800">Book a standard appointment for regular eye examinations and non-urgent concerns.</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/emergency.png"
                  alt="CUES Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#19395f]/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Booking Your CUES Appointment */}
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-6 text-center">
                Get Started with CUES
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 text-center leading-relaxed">
                Need urgent eye care? Contact us today for same-day assessment and treatment.
              </p>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center">
                  <h3 className="font-semibold text-base md:text-lg mb-2">Call Now</h3>
                  <p className="text-white/90 text-xs md:text-sm">Phone us for immediate booking</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center">
                  <h3 className="font-semibold text-base md:text-lg mb-2">Visit Us</h3>
                  <p className="text-white/90 text-xs md:text-sm">Walk in for urgent assessment</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center">
                  <h3 className="font-semibold text-base md:text-lg mb-2">GP Referral</h3>
                  <p className="text-white/90 text-xs md:text-sm">Ask your GP to refer you</p>
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

