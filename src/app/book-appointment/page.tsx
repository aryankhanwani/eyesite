'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { businessInfo } from '@/lib/businessInfo';
import CustomSelect from '@/components/CustomSelect';

// Shiny button animation styles
const shinyButtonStyles = `
  @keyframes shiny {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(200%) translateY(200%) rotate(45deg);
    }
  }
  
  .shiny-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    animation: shiny 3s infinite;
    pointer-events: none;
    z-index: 1;
  }
`;

const serviceOptions = [
  'Eye Exam',
  'Eyewear Consultation',
  'Contact Lens Fitting',
  'CUES Service',
  'Dry Eye Treatment',
  'Domicillary Service',
  'General Consultation',
];

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (submitError) setSubmitError('');
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
    // Clear error when user selects a service
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/submit/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit appointment');
      }
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Failed to submit appointment. Please try again or call us directly.');
      console.error('Error submitting appointment:', error);
    }
  };

  return (
    <>
      <style>{shinyButtonStyles}</style>
      <div className="min-h-screen bg-[#faf9f6]">
        <Header />
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
          <div className="absolute inset-0">
            <Image
              src="/eye-exams.png"
              alt="Book Appointment"
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
                  BOOK APPOINTMENT
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-lg">
                Schedule Your Visit
              </h1>
              <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                Fill in your details below and we'll get back to you to confirm your appointment time.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-16 md:py-24 bg-[#faf9f6] relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#b6dfe8]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#80acc9]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Form Section */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#e7e8ea]/50">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
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
                    <h3 className="text-2xl font-semibold text-[#19395f] mb-4">
                      Appointment Request Submitted!
                    </h3>
                    <p className="text-black/70 mb-6">
                      Thank you for booking with us. We'll contact you shortly to confirm your appointment details.
                    </p>
                    <p className="text-sm text-black/60">
                      A confirmation email has been sent to {formData.email}
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl md:text-3xl font-medium text-[#19395f] mb-6">
                      Appointment Details
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#19395f] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#e7e8ea] focus:border-[#19395f] focus:ring-2 focus:ring-[#19395f]/20 outline-none transition-all text-black placeholder:text-black/40"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email and Phone Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-[#19395f] mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#e7e8ea] focus:border-[#19395f] focus:ring-2 focus:ring-[#19395f]/20 outline-none transition-all text-black placeholder:text-black/40"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-[#19395f] mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#e7e8ea] focus:border-[#19395f] focus:ring-2 focus:ring-[#19395f]/20 outline-none transition-all text-black placeholder:text-black/40"
                            placeholder="+44 123 456 7890"
                          />
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-[#19395f] mb-2">
                          Service Type *
                        </label>
                        <CustomSelect
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleServiceChange}
                          placeholder="Select a service"
                          required
                          options={[
                            { value: '', label: 'Select a service' },
                            ...serviceOptions.map((service) => ({
                              value: service,
                              label: service,
                            })),
                          ]}
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#19395f] mb-2">
                          Additional Notes (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-[#e7e8ea] focus:border-[#19395f] focus:ring-2 focus:ring-[#19395f]/20 outline-none transition-all text-black placeholder:text-black/40 resize-none"
                          placeholder="Any specific requirements or questions..."
                        />
                      </div>

                      {/* Error Message */}
                      {submitError && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                          <p className="text-red-800 text-sm">{submitError}</p>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting || submitSuccess}
                        className="group relative w-full cursor-pointer overflow-hidden rounded-full border-[0.5px] border-[#19395f]/20 bg-[#19395f] py-3.5 px-8 text-center font-semibold text-white shadow-lg hover:bg-white hover:text-[#19395f] hover:border-[#19395f]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shiny-button"
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
                            Submitting...
                          </span>
                        ) : (
                          <span className="inline-block whitespace-nowrap">Book Appointment</span>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Info Section */}
              <div className="space-y-6">
                {/* Contact Info Card */}
                <div className="bg-gradient-to-br from-[#19395f] to-[#80acc9] rounded-3xl p-8 md:p-10 text-white shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Call Us Directly</h3>
                      <a href={`tel:${businessInfo.contact.phone}`} className="text-white/90 text-lg hover:text-white transition-colors block">
                        {businessInfo.contact.phoneDisplay}
                      </a>
                      <p className="text-white/70 text-sm mt-1">Mon - Fri: {businessInfo.hours.weekdays}</p>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#e7e8ea]/50">
                  <h3 className="text-xl font-semibold text-black mb-6">Why Choose Us</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: '✓', text: 'Expert optometrists with years of experience' },
                      { icon: '✓', text: 'Wide selection of designer eyewear' },
                      { icon: '✓', text: 'Personalized care and attention' },
                      { icon: '✓', text: 'Flexible appointment scheduling' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center mt-0.5">
                          <span className="text-white text-sm font-bold">{item.icon}</span>
                        </div>
                        <span className="text-base text-black/70 leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust Badge */}
                <div className="bg-white rounded-xl md:rounded-3xl p-4 md:p-6 border border-[#e7e8ea]/50 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                    <div className="flex items-center gap-3 md:gap-4 flex-1">
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#b6dfe8]/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 md:w-8 md:h-8 text-[#19395f]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-black text-sm md:text-base">NHS & COO Registered</p>
                        <p className="text-xs md:text-sm text-black/60">Trusted healthcare provider</p>
                      </div>
                    </div>
                    {/* Logos */}
                    <div className="flex items-center justify-center md:justify-end gap-3 md:gap-4 flex-shrink-0">
                      <div className="h-7 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src="/nhs logo.png"
                          alt="NHS Logo"
                          width={80}
                          height={40}
                          className="h-7 md:h-10 w-auto object-contain"
                        />
                      </div>
                      <div className="h-7 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src="/coo_logo_text_white.png"
                          alt="College of Optometrists Logo"
                          width={100}
                          height={40}
                          className="h-7 md:h-10 w-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}

