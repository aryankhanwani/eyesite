'use client';

import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Eye Exams',
    description: 'Comprehensive eye examinations using advanced diagnostic technology for accurate vision assessment. NHS and private examinations available.',
    image: '/eye-exams.png',
    link: '/services/eye-exams',
  },
  {
    id: 2,
    title: 'Eyewear',
    description: 'Premium collection of stylish frames and lenses from leading brands worldwide. Expert styling consultation and precision lenses.',
    image: '/eyewear.png',
    link: '/services/eyewear',
  },
  {
    id: 3,
    title: 'Contact Lenses',
    description: 'Expert fitting and consultation for comfortable and safe contact lens solutions. Wide range including multifocal and specialist lenses.',
    image: '/lens.png',
    link: '/services/contact-lenses',
  },
  {
    id: 4,
    title: 'CUES',
    description: 'Community Urgent Eyecare Service providing urgent assessment and treatment for sudden onset eye problems.',
    image: '/cues.png',
    link: '/services/cues',
  },
  {
    id: 5,
    title: 'Dry Eye',
    description: 'Specialist Dry Eye Clinic with tailored treatment plans and comprehensive range of dry eye products.',
    image: '/dry eye.png',
    link: '/services/dry-eye',
  },
  {
    id: 6,
    title: 'Domicillary Services',
    description: 'Home eye tests for those unable to visit our practice. Full comprehensive exams and frame selection in the comfort of your home.',
    image: '/domicillary.png',
    link: '/services/domicillary',
  },
];

export default function Services() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Tag */}
        <div className="mb-4">
          <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
            OUR SERVICES
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-8 md:mb-12 leading-tight">
          Our Expert Services to Drive Growth
        </h2>

        {/* Services Grid - Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <a 
      href={service.link}
      className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-[#19395f] cursor-pointer block transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Card Header */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex items-start justify-between">
        <h3 className="text-white font-semibold text-lg sm:text-xl">{service.title}</h3>
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 group-hover:bg-black/50 flex items-center justify-center transition-colors flex-shrink-0">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Image Container */}
      <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          quality={75}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
      </div>

      {/* Description */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
        <p className="text-white text-sm sm:text-base leading-relaxed">{service.description}</p>
      </div>
    </a>
  );
}

