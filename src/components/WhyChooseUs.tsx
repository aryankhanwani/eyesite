'use client';

import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'NHS & Private Services',
      description: 'We accept NHS patients and offer comprehensive private eye care services to suit your needs.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Expert Team',
      description: 'Qualified professionals with years of experience and continuous training in the latest eye care techniques.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Designer Eyewear',
      description: 'Premium collection of designer frames from leading international brands including Ray-Ban, Gucci, and more.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Personalized Care',
      description: 'Tailored treatment plans and ongoing support for every patient, ensuring the best possible outcomes.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Comprehensive Services',
      description: 'From routine exams to specialized treatments like dry eye and CUES, we cover all your eye care needs.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Flexible Scheduling',
      description: 'Convenient appointment times and flexible scheduling to fit your busy lifestyle.',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b6dfe8]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#80acc9]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
            WHY CHOOSE US
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-4 leading-tight">
            Why Choose Eyesite Opticians
          </h2>
          <p className="text-lg text-black/70 max-w-3xl leading-relaxed">
            Experience exceptional eye care with our expert team, comprehensive services, and commitment to your vision health.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#faf9f6] rounded-2xl p-6 md:p-8 border border-[#e7e8ea]/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#19395f]/10 flex items-center justify-center mb-4 group-hover:bg-[#19395f] transition-colors duration-300">
                <div className="text-[#19395f] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#19395f] mb-3">{feature.title}</h3>
              <p className="text-black/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

