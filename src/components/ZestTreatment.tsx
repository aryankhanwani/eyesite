'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { businessInfo } from '@/lib/businessInfo';
import ZestLidDiagram from './ZestLidDiagram';

const stats = [
  { value: '10–20 min', label: 'In-practice appointment' },
  { value: 'Up to 6 months', label: 'Of relief for many patients' },
  { value: 'From £150*', label: 'Not available on the NHS' },
];

const conditions = [
  'Blepharitis',
  'Meibomian Gland Dysfunction (MGD)',
  'Dry, sore or gritty eyes',
  'Fluctuating vision',
  'Recurring styes or chalazia',
  'Contact lens discomfort',
  'Red, irritated or flaky eyelids',
  'Symptoms worsened by screen use',
];


const videos = [
  {
    id: '0pLthrP2ZYE',
    title: 'Introduction to ZEST®',
    description: 'What the treatment involves and how a clinician carries it out.',
    // Both source videos are square, letterboxed by YouTube into a 16:9 poster.
    // These transforms crop the poster back to the footage itself.
    posterCrop: 'scale-[2.06] -translate-y-[12.7%]',
  },
  {
    id: '8OLUlzsOvu8',
    title: 'Lifting the biofilm',
    description: 'Why clearing biofilm from the lid margin tackles the root cause of inflammation.',
    posterCrop: 'scale-[1.78] -translate-y-[14.2%]',
  },
];

/**
 * Click-to-play facade: shows the YouTube poster until the visitor chooses to
 * watch, so the homepage never loads two players up front.
 */
function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group">
      <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-black/40 shadow-lg ring-1 ring-white/10">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
            className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b6dfe8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#19395f]"
          >
            <span className={`absolute inset-0 ${video.posterCrop}`}>
              <Image
                src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                alt=""
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </span>
            <span className="absolute inset-0 bg-[#19395f]/35 group-hover:bg-[#19395f]/20 transition-colors duration-300" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/95 shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#19395f] translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>

      <h4 className="text-base md:text-lg font-semibold text-white mt-4">{video.title}</h4>
      <p className="text-sm md:text-base text-white/70 leading-relaxed mt-1">{video.description}</p>
    </div>
  );
}

export default function ZestTreatment() {
  return (
    <section id="zest" className="w-full bg-[#f4f6f8]">
      {/* ---------- 1. Introduction ---------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5 md:space-y-6"
          >
            <div>
              <span className="inline-block bg-[#19395f] text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium">
                ZEST® EYELID TREATMENT
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black leading-tight">
              Safe, Effective and Gentle Eyelid Cleansing
            </h2>

            <p className="text-base md:text-lg text-black/70 leading-relaxed">
              ZEST® (Zocular Eyelid System Technology) is a professional eyelid cleansing
              procedure developed from natural okra botanicals — a gentle, non-invasive option
              for dry eye and eyelid inflammation. Using a plant-based gel and specialised
              applicators, it lifts away debris, dead skin, excess oils, biofilm and unwanted
              mites from the eyelid margins. Many patients feel a noticeable difference in
              comfort within minutes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 border border-[#e7e8ea]/50 shadow-sm"
                >
                  <p className="text-base md:text-lg font-semibold text-[#19395f]">{stat.value}</p>
                  <p className="text-xs md:text-sm text-black/60 mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 md:pt-2">
              <a
                href="/book-appointment"
                className="rounded-full border-[0.5px] border-[#19395f]/20 bg-[#19395f] py-3 md:py-3.5 px-6 md:px-8 text-center font-semibold text-white shadow-lg hover:bg-white hover:text-[#19395f] hover:border-[#19395f]/30 transition-all duration-300 inline-block"
              >
                Book a ZEST® Appointment
              </a>
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="rounded-full border-[0.5px] border-[#19395f]/30 bg-white py-3 md:py-3.5 px-6 md:px-8 text-center font-semibold text-[#19395f] shadow-lg hover:bg-[#19395f] hover:text-white hover:border-[#19395f]/20 transition-all duration-300 inline-block"
              >
                Call {businessInfo.contact.phoneDisplay}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] lg:aspect-[4/5] relative">
                <Image
                  src="/dry eye.png"
                  alt="ZEST® professional eyelid cleansing treatment at Eyesite Opticians"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-2 md:gap-3 z-10 items-end">
                <div className="bg-[#19395f] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md">
                  PLANT-BASED
                </div>
                <div className="bg-[#80acc9] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md">
                  NON-INVASIVE
                </div>
                <div className="bg-[#b6dfe8] text-[#19395f] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md">
                  CLINICIAN-LED
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------- Videos ---------- */}
      <div className="w-full bg-gradient-to-br from-[#19395f] to-[#0d2440]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-8 md:mb-12"
          >
            <span className="inline-block bg-white/15 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium mb-4">
              SEE IT FOR YOURSELF
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight">
              ZEST® in action
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <VideoCard video={video} />
              </motion.div>
            ))}
          </div>

          <p className="text-xs md:text-sm text-white/50 mt-8 md:mt-10">
            Videos courtesy of The Body Doctor, the UK distributor for ZEST®.
          </p>
        </div>
      </div>

      {/* ---------- 2. How it works + who it is for ---------- */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-24">
          {/* Animated explanation of what the treatment actually does */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20"
          >
            <ZestLidDiagram />

            <div>
              <span className="inline-block bg-[#19395f] text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium mb-4">
                HOW IT WORKS
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-black mb-4 md:mb-6 leading-tight">
                A deep clean for the eyelid margin
              </h3>
              <p className="text-base md:text-lg text-black/70 leading-relaxed mb-4">
                Tiny Meibomian glands sit inside your eyelids and open along the lash line. They
                release the oil that stops your tears evaporating. When the openings clog, that
                oil can&apos;t get out — and the eyes dry, sting and tire.
              </p>
              <p className="text-base md:text-lg text-black/70 leading-relaxed">
                ZEST® is a gentle exfoliation of that margin. Clearing the openings lets the
                glands work again, which is why the relief tends to last rather than simply
                masking the symptoms.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-10 md:pt-14 border-t border-[#e7e8ea]"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-tight">
              Why ZEST® might be recommended
            </h3>
            <ul className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-16">
              {conditions.map((condition, index) => (
                <motion.li
                  key={condition}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-[1.25rem_1fr] items-start py-3 md:py-3.5 border-b border-[#e7e8ea]"
                >
                  <span className="mt-2 md:mt-2.5 w-1.5 h-1.5 rounded-full bg-[#80acc9]" aria-hidden="true" />
                  <span className="text-sm md:text-base text-black/70">{condition}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Two closing notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-14 pt-8 md:pt-10 border-t border-[#e7e8ea] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#19395f] mb-2">
                Menopause-friendly
              </p>
              <p className="text-sm md:text-base text-black/70 leading-relaxed">
                ZEST® is MTick certified as a menopause-friendly procedure, supporting eyelid
                health through the hormonal changes of perimenopause and menopause.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#19395f] mb-2">
                After your appointment
              </p>
              <p className="text-sm md:text-base text-black/70 leading-relaxed">
                Eyes often feel clearer and more comfortable, and contact lenses tend to sit more
                easily. We usually recommend repeating ZEST® at least twice a year, alongside a
                simple heat, cleanse and revive routine at home.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* ---------- 3. CTA ---------- */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-12 md:pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-6 leading-tight">
                Not sure what&apos;s causing your dry eye symptoms?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">
                If ZEST® has been recommended during your eye examination, your clinician has
                seen signs of eyelid inflammation, blockage or irritation that would benefit from
                a professional clean. Not been assessed yet? Our{' '}
                <a href="/services/dry-eye" className="underline underline-offset-4 hover:text-[#b6dfe8] transition-colors">
                  Dry Eye Clinic
                </a>{' '}
                can look at your symptoms and eye health and tell you whether ZEST® is suitable
                for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="/book-appointment"
                  className="rounded-full bg-white py-3 md:py-3.5 px-6 md:px-8 text-center font-semibold text-[#19395f] shadow-lg hover:bg-[#b6dfe8] transition-all duration-300 inline-block"
                >
                  Book an Appointment
                </a>
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="rounded-full border border-white/40 py-3 md:py-3.5 px-6 md:px-8 text-center font-semibold text-white hover:bg-white/10 transition-all duration-300 inline-block"
                >
                  Call {businessInfo.contact.phoneDisplay}
                </a>
              </div>

              <p className="text-xs text-white/60 mt-6 md:mt-8">
                *ZEST® is a private procedure and is not available on the NHS. Prices start from
                £150; your clinician will confirm the cost at your consultation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
