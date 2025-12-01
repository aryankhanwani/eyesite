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
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
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
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                CUES
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-lg">
              CUES: Community Urgent Eyecare Service
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              An NHS service providing urgent assessment, treatment, or referral for recent and sudden onset eye problems.
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
              The Community Urgent Eyecare Service (CUES) is designed to address emergency concerns quickly, 
              often saving a trip to the GP or A&E. This service is for sudden, urgent issues and is not a routine eye test.
            </p>
          </div>

          {/* What CUES Can Examine */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              CUES Can Examine Symptoms Such As
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Red or Painful Eye/Eyelids</h3>
                  <p className="text-sm text-black/70">Immediate assessment for eye irritation, redness, or discomfort.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Recent Onset of Flashes or Floaters</h3>
                  <p className="text-sm text-black/70">Urgent evaluation for sudden visual disturbances.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Sudden Loss of Vision</h3>
                  <p className="text-sm text-black/70">Immediate care for rapid vision changes or loss.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Foreign Body in the Eye</h3>
                  <p className="text-sm text-black/70">Safe removal and treatment of objects in the eye.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2 text-lg">Important Notice</h3>
                <p className="text-yellow-800 leading-relaxed">
                  This service is for sudden, urgent issues and is not a routine eye test. If you need a regular eye examination, 
                  please book a standard appointment. For life-threatening emergencies, please call 999 or visit A&E immediately.
                </p>
              </div>
            </div>
          </div>

          {/* How CUES Works */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#e7e8ea]/50 mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-8 text-center">
              How CUES Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-black mb-3">Contact Us</h3>
                <p className="text-sm text-black/70">Call or visit for urgent eye care assessment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-black mb-3">Assessment</h3>
                <p className="text-sm text-black/70">Our optometrists evaluate your urgent eye concern.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-black mb-3">Treatment or Referral</h3>
                <p className="text-sm text-black/70">We provide immediate treatment or refer to appropriate specialists.</p>
              </div>
            </div>
          </div>

          {/* When to Use CUES */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/cues.png"
                  alt="CUES Urgent Eye Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-6">
                When to Use CUES
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                CUES is designed for sudden-onset eye problems that require urgent attention but are not life-threatening emergencies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-black/70">Symptoms that started suddenly within the last few days</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-black/70">Eye problems affecting your daily activities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-black/70">Concerns that cannot wait for a routine appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens During Assessment */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              What Happens During Your Assessment
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#19395f]">1</span>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-3 text-center">Symptom Review</h3>
                <p className="text-sm text-black/70 text-center">Detailed discussion of your symptoms and when they started</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#19395f]">2</span>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-3 text-center">Eye Examination</h3>
                <p className="text-sm text-black/70 text-center">Comprehensive assessment using specialized equipment</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#19395f]">3</span>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-3 text-center">Treatment Plan</h3>
                <p className="text-sm text-black/70 text-center">Immediate treatment or referral to appropriate specialist</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
              <h3 className="font-semibold text-[#19395f] mb-3">Quick Access</h3>
              <p className="text-sm text-black/70">Get urgent eye care without waiting for GP appointments or A&E visits.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
              <h3 className="font-semibold text-[#19395f] mb-3">Expert Care</h3>
              <p className="text-sm text-black/70">Specialized optometrists trained in urgent eye care assessment.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
              <h3 className="font-semibold text-[#19395f] mb-3">NHS Service</h3>
              <p className="text-sm text-black/70">Available to all NHS patients at no cost for urgent eye problems.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
              <h3 className="font-semibold text-[#19395f] mb-3">Comprehensive</h3>
              <p className="text-sm text-black/70">Full assessment with appropriate treatment or specialist referral.</p>
            </div>
          </div>

          {/* Emergency vs Urgent */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-6">
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
                  src="/cues.png"
                  alt="CUES Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#19395f]/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* How to Access */}
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center">
                How to Access CUES
              </h2>
              <p className="text-lg text-white/90 mb-8 text-center leading-relaxed">
                Getting urgent eye care is simple and straightforward.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-white/90 text-sm">Contact our practice directly for urgent eye care</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Visit In Person</h3>
                  <p className="text-white/90 text-sm">Walk-in appointments available for urgent cases</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">NHS Referral</h3>
                  <p className="text-white/90 text-sm">Your GP can refer you directly to CUES</p>
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

