'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Logo } from '@/components/brand/Logo';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { GrainTexture } from '@/components/ui/GrainTexture';
import { site } from '@/lib/site';

export function Hero() {
  const t = useTranslations('hero');
  const tContact = useTranslations('contact');
  const tMarquee = useTranslations('marquee');
  const reduce = useReducedMotion();

  const marqueeItems = [0, 1, 2, 3, 4].map((i) => tMarquee(String(i)));

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }
  });

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-sage pt-16 lg:pt-28"
    >
      <GrainTexture opacity={0.09} />

      {/* decorative rules */}
      <div className="pointer-events-none absolute inset-x-0 top-16 z-0 flex items-center justify-between px-6 lg:top-20 lg:px-10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-full origin-left bg-ink/20"
        />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-10rem)] max-w-[1440px] grid-cols-12 gap-x-6 gap-y-0 px-6 lg:gap-10 lg:px-10">
        {/* column: eyebrow + isotype */}
        <div className="col-span-12 flex flex-col items-center justify-between lg:col-span-5 lg:items-start">
          <div className="flex w-full flex-col items-center pb-0 pt-6 lg:items-start lg:pb-0 lg:pt-0 lg:flex-1 lg:justify-center">
            <Logo animate variant="hero" />
          </div>

          <motion.div
            {...fade(2.6)}
            className="hidden items-center gap-3 lg:flex"
          >
            <span className="smallcaps text-ink/50">{t('scroll')}</span>
            <svg width="14" height="26" viewBox="0 0 14 26" className="animate-scroll-hint" aria-hidden>
              <rect x="0.5" y="0.5" width="13" height="25" rx="6.5" fill="none" stroke="currentColor" strokeOpacity="0.4" />
              <circle cx="7" cy="8" r="1.5" fill="currentColor" />
            </svg>
          </motion.div>
        </div>

        {/* column: display headline */}
        <div className="col-span-12 flex flex-col items-center justify-center mt-6 lg:mt-0 lg:col-span-6 lg:col-start-7 lg:items-start">
          <h1 className="text-center font-display text-[clamp(2.4rem,16vw,5.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-ink lg:text-left">
            <motion.span {...fade(0.4)} className="block">
              {t('titleA')}
            </motion.span>
            <motion.span
              {...fade(0.6)}
              className="block italic text-ink/85"
            >
              {t('titleB')}
            </motion.span>
            <motion.span {...fade(0.8)} className="mt-1 block lg:pl-[6vw]">
              {t('titleC')}
            </motion.span>
            <motion.span
              {...fade(1.0)}
              className="mt-1 block font-sans text-[0.72em] font-bold uppercase tracking-[0.02em] text-taupe lg:pl-[12vw]"
            >
              {t('titleD')}.
            </motion.span>
          </h1>

          <motion.div {...fade(1.4)} className="mt-10 flex flex-wrap justify-center items-center gap-3 lg:ml-auto lg:justify-start">
            <WhatsAppButton message={tContact('prefill')} variant="solid">
              {t('cta1')}
            </WhatsAppButton>
            <a
              href="#treatments"
              className="smallcaps border border-ink px-6 py-4 text-ink transition-all hover:bg-ink hover:text-bone"
            >
              {t('cta2')}
            </a>
          </motion.div>
        </div>
      </div>

      {/* marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
        className="relative z-10 mt-10 overflow-hidden border-y border-ink/20 py-4 lg:mt-16"
      >
        <div className="marquee-track flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((m, i) => (
            <span
              key={i}
              className="smallcaps mx-8 inline-flex items-center gap-8 text-ink/80"
            >
              {m}
              <span aria-hidden className="text-taupe">❋</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
