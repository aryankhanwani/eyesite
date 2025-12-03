import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { businessInfo } from '@/lib/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${businessInfo.name}. Located at ${businessInfo.contact.address.full}. Call us at ${businessInfo.contact.phoneDisplay} or email ${businessInfo.contact.email}. Expert eye care services in Leeds.`,
  openGraph: {
    title: 'Contact Us | Eyesite Opticians Leeds',
    description: `Contact ${businessInfo.name} for expert eye care services in Leeds. Visit us, call, or email for appointments and inquiries.`,
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/cues.png"
            alt="Contact Us"
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
                CONTACT US
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-lg">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              We're here to help with all your eye care needs. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 md:py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-8">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50 text-center">
              <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#19395f] mb-3">Phone</h3>
              <a href={`tel:${businessInfo.contact.phone}`} className="text-lg text-black/70 hover:text-[#19395f] transition-colors mb-2 block">
                {businessInfo.contact.phoneDisplay}
              </a>
              <p className="text-sm text-black/60">Mon - Fri: {businessInfo.hours.weekdays}</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50 text-center">
              <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#19395f] mb-3">Email</h3>
              <a href={`mailto:${businessInfo.contact.email}`} className="text-lg text-black/70 hover:text-[#19395f] transition-colors mb-2 block">
                {businessInfo.contact.email}
              </a>
              <p className="text-sm text-black/60">We'll respond within 24 hours</p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50 text-center">
              <div className="w-16 h-16 rounded-full bg-[#19395f]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#19395f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#19395f] mb-3">Visit Us</h3>
              <p className="text-lg text-black/70 mb-2">{businessInfo.contact.address.street}</p>
              <p className="text-sm text-black/60">{businessInfo.contact.address.city}, {businessInfo.contact.address.postcode}</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#e7e8ea]/50 max-w-8xl">
              <h3 className="text-xl md:text-2xl font-semibold text-[#19395f] mb-4">Find Us</h3>
              
              {/* Open in Google Maps Link - Above Map */}
              <div className="mb-4">
                <a 
                  href={businessInfo.google.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#19395f] hover:text-[#80acc9] font-medium transition-colors text-sm md:text-base"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Google Maps
                </a>
            </div>

              {/* Map */}
              <div className="relative rounded-xl overflow-hidden bg-[#f4f6f8] h-96 md:h-[500px] mb-6">
                  <iframe
                    src={businessInfo.google.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${businessInfo.name} Location Map`}
                  />
                </div>
              
              {/* Address and Opening Hours - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Address and Additional Info */}
                <div className="bg-[#f4f6f8] rounded-xl p-6 md:p-7 space-y-3">
                  <div>
                    <p className="text-base md:text-lg text-black/70"><strong className="text-[#19395f] font-semibold">Address:</strong> {businessInfo.contact.address.full}</p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg text-black/70"><strong className="text-[#19395f] font-semibold">Parking:</strong> Available nearby</p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg text-black/70"><strong className="text-[#19395f] font-semibold">Public Transport:</strong> Bus stop 100m away</p>
                </div>
              </div>

                {/* Opening Hours inside Map Card */}
                <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Monday - Friday</span>
                    <span className="font-semibold">{businessInfo.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Saturday</span>
                    <span className="font-semibold">{businessInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Sunday</span>
                    <span className="font-semibold">{businessInfo.hours.sunday}</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50">
              <h3 className="text-xl font-semibold text-[#19395f] mb-4">Emergency Contact</h3>
              <p className="text-black/70 mb-4">
                For urgent eye care needs, please call our CUES service or visit A&E for life-threatening emergencies.
              </p>
              <a
                href="/services/cues"
                className="inline-block text-[#19395f] hover:text-[#80acc9] font-medium transition-colors"
              >
                Learn more about CUES →
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7e8ea]/50">
              <h3 className="text-xl font-semibold text-[#19395f] mb-4">Book an Appointment</h3>
              <p className="text-black/70 mb-4">
                Ready to schedule your visit? Book online or give us a call to find a convenient time.
              </p>
              <a
                href="/book-appointment"
                className="inline-block text-[#19395f] hover:text-[#80acc9] font-medium transition-colors"
              >
                Book Now →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

