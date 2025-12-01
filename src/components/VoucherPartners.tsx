'use client';

import Image from 'next/image';

export default function VoucherPartners() {
  const partners = [
    {
      name: 'EyeMed',
      logo: '/eyemed-voucher.png',
      width: 180,
      height: 60,
    },
    {
      name: 'Uvex',
      logo: '/uvex-logo.png',
      width: 140,
      height: 60,
    },
    {
      name: 'Smart Employer Eyecare',
      logo: '/smart-employer-logo.svg',
      width: 180,
      height: 45,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-white border-y border-[#e7e8ea]/50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            EYECARE VOUCHER PROVIDER
          </span>
          <h2 className="text-2xl md:text-3xl font-medium text-black mb-3">
            Official Voucher Partner
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto">
            Eyesite Opticians is a trusted provider for leading eyecare voucher schemes. Redeem your benefits with us.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative flex items-center justify-center p-6 md:p-8 rounded-2xl bg-[#f4f6f8] hover:bg-white border border-[#e7e8ea]/50 hover:border-[#19395f]/20 transition-all duration-300 hover:shadow-lg w-full max-w-xs"
            >
              <div className="relative transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} voucher accepted`}
                  width={partner.width}
                  height={partner.height}
                  className="h-auto w-auto max-h-16 object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Info Text */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm md:text-base text-black/60 max-w-3xl mx-auto">
            As an official provider for these voucher schemes, we make it easy to use your eyecare benefits. Simply bring your voucher to your appointment or{' '}
            <a href="/contact-us" className="text-[#19395f] hover:text-[#80acc9] font-medium transition-colors">
              contact us
            </a>{' '}
            to learn more about how to redeem your benefits.
          </p>
        </div>
      </div>
    </section>
  );
}

