'use client';

import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Eye Exams',
    description: 'Comprehensive eye examinations using advanced diagnostic technology for accurate vision assessment. NHS and private examinations available.',
    image: '/eye-exams.png',
  },
  {
    id: 2,
    title: 'Eyewear',
    description: 'Premium collection of stylish frames and lenses from leading brands worldwide. Expert styling consultation and precision lenses.',
    image: '/eyewear.png',
  },
  {
    id: 3,
    title: 'Contact Lenses',
    description: 'Expert fitting and consultation for comfortable and safe contact lens solutions. Wide range including multifocal and specialist lenses.',
    image: '/lens.png',
  },
  {
    id: 4,
    title: 'CUES',
    description: 'Community Urgent Eyecare Service providing urgent assessment and treatment for sudden onset eye problems.',
    image: '/cues.png',
  },
  {
    id: 5,
    title: 'Dry Eye',
    description: 'Specialist Dry Eye Clinic with tailored treatment plans and comprehensive range of dry eye products.',
    image: '/dry eye.png',
  },
  {
    id: 6,
    title: 'Domicillary Services',
    description: 'Home eye tests for those unable to visit our practice. Full comprehensive exams and frame selection in the comfort of your home.',
    image: '/domicillary.png',
  },
];

export default function Services() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Tag */}
        <div className="mb-4">
          <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
            OUR SERVICES
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 leading-tight">
          Our Expert Services to Drive Growth
        </h2>

        {/* Services Grid */}
        <div className="space-y-8">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(3, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-[#19395f] cursor-pointer">
      {/* Card Header */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-start justify-between">
        <h3 className="text-white font-semibold text-xl">{service.title}</h3>
        <button className="w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>

      {/* Image Container */}
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Description */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <p className="text-white text-base leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}

