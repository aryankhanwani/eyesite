import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentForm from '@/components/AppointmentForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dry Eye Treatment Clinic',
  description: 'Specialist dry eye treatment in Leeds. Advanced diagnostics and personalized treatment plans including IPL therapy. Relief from dry, irritated, watery eyes at Eyesite Opticians.',
  keywords: ['dry eye treatment Leeds', 'dry eye clinic Leeds', 'IPL therapy Leeds', 'eye irritation treatment', 'watery eyes treatment', 'blepharitis treatment Leeds'],
};

export default function DryEyePage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/dry eye.png"
            alt="Dry Eye"
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
                DRY EYE CLINIC
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-lg">
              Specialist Dry Eye Clinic
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              Dry eye syndrome is a common, often frustrating condition causing discomfort, grittiness, redness, and sometimes excessive watering.
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
              At Eyesite Optician, we operate a dedicated Dry Eye Clinic to accurately diagnose and provide tailored, 
              effective management plans for lasting relief.
            </p>
          </div>

          {/* Our Approach */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              Our Approach to Dry Eye Relief
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50">
                <div className="w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#19395f] mb-4">Tailored Treatment Plans</h3>
                <p className="text-black/70 leading-relaxed">
                  We develop a bespoke management plan based on the underlying cause with scheduled follow-up appointments 
                  to monitor progress and adjust treatment as needed.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50">
                <div className="w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#19395f] mb-4">Comprehensive Product Range</h3>
                <p className="text-black/70 leading-relaxed">
                  We stock a large range of dry eye products including artificial tears, gels, ointments, and specialized 
                  treatments to suit different types and severities of dry eye.
                </p>
              </div>
            </div>
          </div>

          {/* Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              Common Dry Eye Symptoms
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2">Discomfort & Grittiness</h3>
                <p className="text-sm text-black/70">Feeling of something in your eye or constant irritation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2">Redness</h3>
                <p className="text-sm text-black/70">Persistent red or bloodshot appearance of the eyes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2">Excessive Watering</h3>
                <p className="text-sm text-black/70">Paradoxically, dry eyes can cause excessive tearing as a response.</p>
              </div>
            </div>
          </div>

          {/* Treatment Options */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#e7e8ea]/50 mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-8 text-center">
              Treatment Options
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Artificial Tears</h3>
                  <p className="text-black/70">Lubricating eye drops to provide immediate relief and moisture.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Prescription Medications</h3>
                  <p className="text-black/70">Medicated drops to reduce inflammation and improve tear production.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Lifestyle Modifications</h3>
                  <p className="text-black/70">Advice on environmental factors, screen time, and dietary changes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19395f] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Specialized Procedures</h3>
                  <p className="text-black/70">Advanced treatments for severe cases, including punctal plugs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Understanding Dry Eye */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/prod-1.png"
                  alt="Understanding Dry Eye"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-6">
                Understanding Dry Eye Syndrome
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Dry eye occurs when your eyes don't produce enough tears or when tears evaporate too quickly. This can be caused by various factors including age, environment, medications, or underlying health conditions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Reduced tear production due to aging or medical conditions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Increased tear evaporation from environmental factors</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/70">Imbalance in tear composition affecting lubrication</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnostic Process */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              Comprehensive Diagnosis
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2">Symptom Assessment</h3>
                <p className="text-sm text-black/70">Detailed discussion of your symptoms and medical history</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2">Tear Film Analysis</h3>
                <p className="text-sm text-black/70">Evaluation of tear quality, quantity, and composition</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 text-center">
                <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#19395f] mb-2">Eye Surface Exam</h3>
                <p className="text-sm text-black/70">Microscopic examination of the eye surface and eyelids</p>
              </div>
            </div>
          </div>

          {/* Treatment Products */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-6">
                Our Product Range
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                We stock a comprehensive selection of dry eye products to suit different needs and severity levels.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Artificial Tears</h3>
                    <p className="text-sm text-black/60">Various formulations for different types of dry eye</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Gels & Ointments</h3>
                    <p className="text-sm text-black/60">Longer-lasting lubrication for overnight relief</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Prescription Medications</h3>
                    <p className="text-sm text-black/60">Medicated drops to reduce inflammation and improve tear production</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/prod-2.png"
                  alt="Dry Eye Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#19395f]/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Trusted Brands */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#e7e8ea]/50">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-[#19395f] mb-2">
                  Trusted by Eyecare Professionals
                </h3>
                <p className="text-black/70 text-sm md:text-base">
                  We stock leading dry eye care brands recommended by eyecare professionals worldwide
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                <div className="flex items-center justify-center p-4 md:p-6 bg-[#f4f6f8] rounded-xl hover:bg-white transition-colors border border-[#e7e8ea]/50">
                  <Image
                    src="/hycosan.png"
                    alt="Hycosan"
                    width={180}
                    height={80}
                    className="h-auto w-auto max-h-16 md:max-h-20 object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center p-4 md:p-6 bg-[#f4f6f8] rounded-xl hover:bg-white transition-colors border border-[#e7e8ea]/50">
                  <Image
                    src="/optase.png"
                    alt="Optase"
                    width={180}
                    height={80}
                    className="h-auto w-auto max-h-16 md:max-h-20 object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lifestyle Management */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 text-center">
              Lifestyle & Environmental Management
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <h3 className="font-semibold text-[#19395f] mb-3">Screen Time Management</h3>
                <p className="text-sm text-black/70">Take regular breaks, follow the 20-20-20 rule, and adjust screen brightness to reduce eye strain.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <h3 className="font-semibold text-[#19395f] mb-3">Environmental Factors</h3>
                <p className="text-sm text-black/70">Use humidifiers, avoid direct air flow, and protect eyes from wind and sun.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <h3 className="font-semibold text-[#19395f] mb-3">Dietary Considerations</h3>
                <p className="text-sm text-black/70">Omega-3 fatty acids and staying hydrated can support healthy tear production.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50">
                <h3 className="font-semibold text-[#19395f] mb-3">Eyelid Hygiene</h3>
                <p className="text-sm text-black/70">Regular cleaning routines to prevent blepharitis and improve tear quality.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Our Clinic */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Expert Diagnosis</h3>
              <p className="text-white/90">Thorough assessment to identify the root cause of your dry eye symptoms.</p>
            </div>
            <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Ongoing Support</h3>
              <p className="text-white/90">Regular follow-ups to ensure your treatment plan is working effectively.</p>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center">
                Comprehensive Dry Eye Management
              </h2>
              <p className="text-lg text-white/90 mb-8 text-center leading-relaxed">
                Our dedicated clinic provides personalized care plans tailored to your specific dry eye condition.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Personalized Plans</h3>
                  <p className="text-white/90 text-sm">Treatment tailored to your specific needs and lifestyle</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Regular Monitoring</h3>
                  <p className="text-white/90 text-sm">Follow-up appointments to track progress and adjust treatment</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Product Guidance</h3>
                  <p className="text-white/90 text-sm">Expert recommendations for the best products for your condition</p>
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

