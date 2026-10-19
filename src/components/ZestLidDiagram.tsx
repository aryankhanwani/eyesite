'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

/**
 * Animated cross-section of the eyelid margin, cycling through the three states
 * the copy describes: blocked glands, the cleanse, then clear glands and a
 * stable tear film. Illustrative — not clinical imagery.
 */

const PHASES = [
  {
    label: 'Blocked glands',
    caption:
      'Biofilm, oils and dead skin collect along the lash line and plug the gland openings.',
  },
  {
    label: 'Gentle cleanse',
    caption:
      'The okra-based gel and a Zocuswab® applicator lift that build-up away from the margin.',
  },
  {
    label: 'Clear and flowing',
    caption:
      'Freed glands release their oils again, rebuilding the layer that stops tears evaporating.',
  },
];

const SWEEP_FROM = -70;
const SWEEP_SPAN = 660;
const SWEEP_SECONDS = 1.9;

const GLAND_COUNT = 9;
const LASH_COUNT = 15;

// Margin curve: y = BASE - SAG * sin(pi * t), sampled the same way for every
// element that sits on it, so lashes, openings and ducts always line up.
const MARGIN_BASE = 196;
const MARGIN_SAG = 26;
const marginY = (t: number) => MARGIN_BASE - Math.sin(t * Math.PI) * MARGIN_SAG;

// Specks sit on the margin curve rather than floating above it.
const DEBRIS = Array.from({ length: 11 }).map((_, i) => {
  const t = (i + 0.5) / 11;
  const x = 30 + t * 440 + (i % 2 ? 9 : -7);
  return { x, y: marginY(t) - (5 + (i % 3) * 8), r: i % 2 ? 6 : 4.2 };
});

export default function ZestLidDiagram() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState(reduceMotion ? 2 : 0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => setPhase((p) => (p + 1) % PHASES.length), 2600);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  const cleansing = phase === 1;
  const clear = phase === 2;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <figure className="m-0">
      <div className="relative rounded-xl md:rounded-2xl border border-[#e7e8ea] bg-[#faf9f6] overflow-hidden">
        <svg
          viewBox="0 0 500 300"
          className="w-full h-auto block"
          role="img"
          aria-label={`Illustration of the eyelid margin: ${PHASES[phase].label}. ${PHASES[phase].caption}`}
        >
          {/* Tear film: only once the glands are clear */}
          <motion.path
            d="M40 187 Q250 151 460 187"
            fill="none"
            stroke="#b6dfe8"
            strokeWidth="9"
            strokeLinecap="round"
            animate={{ opacity: clear ? 0.8 : 0 }}
            transition={{ duration: 0.7, ease }}
          />

          {/* Lid tissue */}
          <path d="M30 196 Q250 160 470 196 L470 272 Q250 240 30 272 Z" fill="#f2cfc4" />
          <path
            d="M30 196 Q250 160 470 196"
            fill="none"
            stroke="#d79a87"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Meibomian glands inside the lid, each feeding an opening */}
          {Array.from({ length: GLAND_COUNT }).map((_, i) => {
            const t = (i + 0.5) / GLAND_COUNT;
            const x = 30 + t * 440;
            const y = marginY(t);
            return (
              <motion.rect
                key={`gland-${i}`}
                x={x - 7}
                y={y + 14}
                width="14"
                height="46"
                rx="7"
                animate={{ fill: clear ? '#cfe4ef' : '#e2b7ab' }}
                transition={{ duration: 0.6, ease, delay: clear ? i * 0.04 : 0 }}
              />
            );
          })}

          {/* Gland openings along the margin */}
          {Array.from({ length: GLAND_COUNT }).map((_, i) => {
            const t = (i + 0.5) / GLAND_COUNT;
            const x = 30 + t * 440;
            const y = marginY(t) + 10;
            return (
              <motion.circle
                key={`opening-${i}`}
                cx={x}
                cy={y}
                animate={{
                  fill: clear ? '#80acc9' : '#c98a3c',
                  r: clear ? 3.6 : 5.4,
                }}
                transition={{ duration: 0.6, ease, delay: clear ? i * 0.04 : 0 }}
              />
            );
          })}

          {/* Oil released once the glands are clear */}
          {Array.from({ length: GLAND_COUNT }).map((_, i) => {
            const t = (i + 0.5) / GLAND_COUNT;
            const x = 30 + t * 440;
            const y = marginY(t) + 10;
            return (
              <motion.circle
                key={`oil-${i}`}
                cx={x}
                r="2.6"
                fill="#80acc9"
                initial={false}
                animate={clear ? { cy: y - 22, opacity: [0, 0.75, 0] } : { cy: y, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  ease: 'easeOut',
                  delay: clear ? 0.3 + i * 0.05 : 0,
                  repeat: clear ? Infinity : 0,
                  repeatDelay: 0.5,
                }}
              />
            );
          })}

          {/* Lashes */}
          {Array.from({ length: LASH_COUNT }).map((_, i) => {
            const t = i / (LASH_COUNT - 1);
            const x = 34 + t * 432;
            const y = marginY(t) + 2;
            const lean = (t - 0.5) * 26;
            return (
              <motion.path
                key={`lash-${i}`}
                d={`M${x} ${y} q ${lean * 0.3} -26 ${lean} -46`}
                fill="none"
                stroke="#4a3f3a"
                strokeLinecap="round"
                animate={{ strokeWidth: clear ? 2.6 : 4 }}
                transition={{ duration: 0.6, ease }}
              />
            );
          })}

          {/* Debris, cleared as the applicator passes */}
          {DEBRIS.map((speck, i) => (
            <motion.circle
              key={`debris-${i}`}
              cx={speck.x}
              cy={speck.y}
              r={speck.r}
              fill="#a8824f"
              animate={{ opacity: phase === 0 ? 0.55 : 0 }}
              transition={{
                duration: cleansing ? 0.3 : 0.5,
                ease,
                // each speck clears at the moment the sweeping tip reaches it
                delay: cleansing ? ((speck.x - SWEEP_FROM) / SWEEP_SPAN) * SWEEP_SECONDS : 0,
              }}
            />
          ))}

          {/* Applicator sweeping across the margin */}
          <motion.g
            initial={false}
            animate={{
              x: cleansing ? SWEEP_FROM + SWEEP_SPAN : SWEEP_FROM,
              opacity: cleansing ? 1 : 0,
            }}
            transition={
              cleansing
                ? { x: { duration: SWEEP_SECONDS, ease: 'linear' }, opacity: { duration: 0.25 } }
                : { duration: 0.3 }
            }
          >
            {/* Tip sits at the origin, handle runs up and to the right from it */}
            <g transform="translate(0, 176) rotate(-38)">
              <rect x="7" y="-4.5" width="78" height="9" rx="4.5" fill="#19395f" />
              <ellipse cx="0" cy="0" rx="11.5" ry="7.5" fill="#f5efe6" stroke="#e0d6c7" strokeWidth="1" />
            </g>
          </motion.g>
        </svg>

        {/* Phase label */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4">
          <motion.span
            key={phase}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-[#19395f] text-white px-3 py-1 rounded-full text-xs font-medium"
          >
            {PHASES[phase].label}
          </motion.span>
        </div>

        {/* Progress pips */}
        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex gap-1.5">
          {PHASES.map((p, i) => (
            <motion.span
              key={p.label}
              className="h-1.5 rounded-full bg-[#19395f]"
              animate={{ width: i === phase ? 20 : 6, opacity: i === phase ? 1 : 0.25 }}
              transition={{ duration: 0.4, ease }}
            />
          ))}
        </div>
      </div>

      <figcaption className="mt-3 md:mt-4 flex items-start gap-2 min-h-[3rem]">
        <motion.p
          key={phase}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm md:text-base text-black/70 leading-relaxed"
        >
          {PHASES[phase].caption}
        </motion.p>
      </figcaption>
    </figure>
  );
}
