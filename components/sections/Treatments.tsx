'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { treatments, categories, type TreatmentCategory } from '@/lib/treatments';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { Reveal } from '@/components/ui/Reveal';

export function Treatments() {
  const t = useTranslations('treatments');
  const [active, setActive] = useState<TreatmentCategory>('faciales');

  const visible = treatments.filter((x) => x.category === active);

  return (
    <section id="treatments" className="relative overflow-hidden bg-sage py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-ink/5 to-transparent blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-taupe/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="smallcaps text-ink/60">{t('eyebrow')} · 24</p>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 lg:col-span-8">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.01em] text-ink">
              {t('heading')}{' '}
              <span className="italic">{t('headingAccent')}</span>
            </h2>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-ink/75">
              {t('subheading')}
            </p>
          </Reveal>
        </div>

        {/* category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-0 border-b border-ink/20 lg:mt-12 lg:justify-start">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={clsx(
                'relative px-5 py-3.5 transition-colors duration-300',
                active === cat ? 'text-ink' : 'text-ink/50 hover:text-ink/80'
              )}
            >
              <span className={clsx('num-chip mr-2 text-[0.65rem] transition-colors duration-300', active === cat ? 'text-ink/50' : 'text-ink/25')}>
                0{i + 1}
              </span>
              <span className="font-sans text-[0.8rem] font-semibold uppercase tracking-[0.2em]">
                {t(`groups.${cat}`)}
              </span>
              {active === cat && (
                <motion.span
                  layoutId="tab-line"
                  className="absolute inset-x-0 -bottom-px h-[2px] bg-ink"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        {/* treatment grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10"
          >
            {visible.map((item) => (
              <TreatmentCard key={item.key} t={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
