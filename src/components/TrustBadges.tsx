import Image from 'next/image';

export default function TrustBadges() {
  return (
    <section className="w-full py-10 md:py-14 bg-[#faf9f6] border-t border-[#e7e8ea]/30">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col items-center gap-8">
          <p className="text-sm md:text-base text-[#19395f]/80 font-medium uppercase tracking-wide">
            Trusted by leading healthcare organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {/* NHS Logo */}
            <div className="flex items-center justify-center h-14 md:h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/nhs logo.png"
                alt="NHS Logo"
                width={140}
                height={70}
                className="h-14 md:h-20 w-auto object-contain"
              />
            </div>
            
            {/* COO Logo */}
            <div className="flex items-center justify-center h-14 md:h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/coo_logo_text_white.png"
                alt="College of Optometrists Logo"
                width={200}
                height={70}
                className="h-14 md:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

