import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Eyesite Opticians Leeds. Expert optometrists with 15+ years of experience, serving 50,000+ patients. NHS & COO registered. State-of-the-art equipment and personalized eye care services in Halton, Leeds.',
  openGraph: {
    title: 'About Eyesite Opticians | Expert Eye Care Team in Leeds',
    description: 'Meet our experienced team of optometrists dedicated to providing exceptional eye care services in Leeds.',
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      
      {/* Hero Section - Split Layout */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <div className="relative bg-gradient-to-br from-[#19395f] to-[#0d2440] flex items-center justify-center p-8 md:p-16">
            <div className="max-w-lg">
              <div className="mb-6">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  ABOUT EYESITE OPTICIANS
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
                Your Vision, Our Mission
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                For years, we've been dedicated to providing exceptional eye care with expertise, compassion, and cutting-edge technology.
              </p>
            </div>
          </div>
          <div className="relative hidden md:block">
            <Image
              src="/eye-exams.png"
              alt="About Eyesite Opticians"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#19395f]/80 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 bg-white border-y border-[#e7e8ea]/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#19395f] mb-2">15+</div>
              <div className="text-sm md:text-base text-black/70">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#19395f] mb-2">50K+</div>
              <div className="text-sm md:text-base text-black/70">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#19395f] mb-2">6</div>
              <div className="text-sm md:text-base text-black/70">Expert Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#19395f] mb-2">100%</div>
              <div className="text-sm md:text-base text-black/70">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Card Grid Layout */}
      <section className="w-full py-16 md:py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6 text-center">
              Our Journey
            </h2>
            <p className="text-lg text-black/70 text-center leading-relaxed">
              From humble beginnings to becoming a trusted name in eye care, our journey has been shaped by our commitment to excellence and patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e7e8ea]/50 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#19395f] to-[#0d2440] flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#19395f] mb-3">The Beginning</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Founded with a vision to make quality eye care accessible to everyone in our community.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e7e8ea]/50 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#19395f] to-[#0d2440] flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#19395f] mb-3">Expanding Services</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Introduced specialized services including CUES, Dry Eye Clinic, and Domicillary Services.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e7e8ea]/50 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#19395f] to-[#0d2440] flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#19395f] mb-3">Technology Integration</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Invested in state-of-the-art diagnostic equipment and advanced lens technology.
              </p>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e7e8ea]/50 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#19395f] to-[#0d2440] flex items-center justify-center text-white font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-[#19395f] mb-3">Today & Beyond</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Continuing to grow and evolve while remaining committed to our founding principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Side by Side */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-3xl p-8 md:p-12 text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                To provide exceptional eye care services that combine clinical excellence with personalized attention, ensuring every patient receives the highest standard of care.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Clinical excellence in every examination</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Accessible care for all</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Continuous innovation and improvement</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-[#f4f6f8] rounded-3xl p-8 md:p-12">
              <div className="w-16 h-16 rounded-2xl bg-[#19395f]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-6">Our Vision</h2>
              <p className="text-lg text-black/70 leading-relaxed mb-6">
                To be the leading optometry practice in our community, recognized for our commitment to patient care, clinical expertise, and innovative approach to eye health.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#19395f] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black/70">Setting the standard for eye care excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#19395f] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black/70">Building lasting relationships with our patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#19395f] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black/70">Empowering better vision for life</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Circular Layout */}
      <section className="w-full py-16 md:py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-black/70 leading-relaxed">
              These principles guide everything we do and shape how we care for our patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#19395f] mb-3">Excellence</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Striving for the highest standards in clinical care and customer service.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#19395f] mb-3">Compassion</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Treating every patient with empathy, understanding, and respect.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#19395f] mb-3">Innovation</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Embracing latest technology and techniques for better outcomes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#19395f] mb-3">Community</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Committed to serving and supporting our local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - Card Grid */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-black/70 leading-relaxed">
              Our qualified professionals are dedicated to providing you with the best eye care experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e7e8ea]/50 hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/eye-exams.png"
                  alt="Dr. Sarah Johnson"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#19395f] mb-1">Dr. Sarah Johnson</h3>
                <p className="text-[#80acc9] text-sm font-medium mb-3">Lead Optometrist</p>
                <p className="text-black/70 text-sm leading-relaxed">
                  With over 12 years of experience, Dr. Johnson specializes in comprehensive eye examinations and diabetic eye care.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e7e8ea]/50 hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/eyewear.png"
                  alt="Michael Chen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#19395f] mb-1">Michael Chen</h3>
                <p className="text-[#80acc9] text-sm font-medium mb-3">Senior Dispensing Optician</p>
                <p className="text-black/70 text-sm leading-relaxed">
                  Expert in frame fitting and styling, Michael helps patients find eyewear that perfectly matches their style and needs.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e7e8ea]/50 hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/lens.png"
                  alt="Dr. Emily Williams"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#19395f] mb-1">Dr. Emily Williams</h3>
                <p className="text-[#80acc9] text-sm font-medium mb-3">Contact Lens Specialist</p>
                <p className="text-black/70 text-sm leading-relaxed">
                  Specializing in contact lens fitting and dry eye treatment, Dr. Williams provides personalized solutions for every patient.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e7e8ea]/50 hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/cues.png"
                  alt="James Anderson"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#19395f] mb-1">James Anderson</h3>
                <p className="text-[#80acc9] text-sm font-medium mb-3">Optometrist</p>
                <p className="text-black/70 text-sm leading-relaxed">
                  With expertise in urgent eye care and pediatric optometry, James ensures patients of all ages receive exceptional care.
                </p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e7e8ea]/50 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/dry eye.png"
                  alt="Lisa Martinez"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#19395f] mb-1">Lisa Martinez</h3>
                <p className="text-[#80acc9] text-sm font-medium mb-3">Practice Manager</p>
                <p className="text-black/70 text-sm leading-relaxed">
                  Ensuring smooth operations and exceptional patient experience, Lisa coordinates all aspects of our practice with dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Feature Cards */}
      <section className="w-full py-16 md:py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6">
              Why Choose Eyesite Opticians
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '✓',
                title: 'NHS & Private Services',
                description: 'We accept NHS patients and offer comprehensive private eye care services.',
              },
              {
                icon: '✓',
                title: 'Advanced Technology',
                description: 'State-of-the-art diagnostic equipment for accurate assessments.',
              },
              {
                icon: '✓',
                title: 'Designer Eyewear',
                description: 'Premium collection of designer frames from leading international brands.',
              },
              {
                icon: '✓',
                title: 'Personalized Care',
                description: 'Tailored treatment plans and ongoing support for every patient.',
              },
              {
                icon: '✓',
                title: 'Expert Team',
                description: 'Qualified professionals with years of experience and continuous training.',
              },
              {
                icon: '✓',
                title: 'Comprehensive Services',
                description: 'From routine exams to specialized treatments, we cover all your eye care needs.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-[#e7e8ea]/50 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#19395f]/10 flex items-center justify-center">
                    <span className="text-[#19395f] font-bold text-lg">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#19395f] mb-2">{feature.title}</h3>
                    <p className="text-sm text-black/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations - Logo Showcase */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#19395f] to-[#0d2440]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Accreditations & Memberships
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              We are proud to be registered with leading professional bodies and accept various healthcare schemes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">NHS Registered</h3>
              <p className="text-white/90 text-sm">Providing NHS eye care services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">College of Optometrists</h3>
              <p className="text-white/90 text-sm">Registered members and practitioners</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Voucher Schemes</h3>
              <p className="text-white/90 text-sm">Accepting Smart Employee & EyeMed vouchers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/eyewear.png"
                  alt="Community Involvement"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#19395f]/80 via-[#19395f]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-2">Giving Back</h3>
                  <p className="text-white/90">Supporting our local community</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#19395f] mb-6">
                Community Involvement
              </h2>
              <p className="text-lg text-black/70 mb-8 leading-relaxed">
                We believe in giving back to the community that has supported us throughout our journey. Our commitment extends beyond providing excellent eye care.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Local Partnerships</h3>
                    <p className="text-black/70 text-sm leading-relaxed">
                      Collaborating with local organizations and schools to promote eye health awareness and provide educational programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Charity Work</h3>
                    <p className="text-black/70 text-sm leading-relaxed">
                      Supporting eye care charities and participating in fundraising events to help those in need access quality vision care.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Health Education</h3>
                    <p className="text-black/70 text-sm leading-relaxed">
                      Conducting workshops and seminars on eye health, preventive care, and the importance of regular eye examinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 md:py-24 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6">
            Ready to Experience Exceptional Eye Care?
          </h2>
          <p className="text-lg text-black/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            Book your appointment today and discover why thousands of patients trust Eyesite Opticians for their vision care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-appointment"
              className="inline-block px-8 py-3 bg-[#19395f] text-white rounded-full font-semibold hover:bg-[#0d2440] transition-colors shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="/contact-us"
              className="inline-block px-8 py-3 border-2 border-[#19395f] text-[#19395f] rounded-full font-semibold hover:bg-[#19395f] hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
