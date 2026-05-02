'use client';

import { useTranslations } from 'next-intl';
import { Reveal, StaggerGroup, staggerItem } from '@/components/ui/Reveal';
import { motion } from 'framer-motion';

export function Philosophy() {
  const t = useTranslations('philosophy');

  const pillars = [
    { title: t('pillars.p1Title'), body: t('pillars.p1Body') },
    { title: t('pillars.p2Title'), body: t('pillars.p2Body') },
    { title: t('pillars.p3Title'), body: t('pillars.p3Body') }
  ];

  return (
    <section id="philosophy" className="relative bg-bone py-28 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <p className="smallcaps text-ink/50">{t('eyebrow')}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-12 gap-6 lg:gap-10">
          <Reveal delay={0.1} className="col-span-12 lg:col-span-8">
            <h2 className="font-display text-[clamp(1.8rem,3.6vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink">
              {t('heading')}{' '}
              <span className="italic text-taupe">{t('italicAccent')}</span>{' '}
              {t('rest')}
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="col-span-12 lg:col-span-4 lg:pt-6">
            <p className="max-w-sm text-[0.98rem] leading-relaxed text-ink/75">
              {t('body')}
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-3 lg:mt-32 lg:gap-16">
          {pillars.map((p, i) => (
            <motion.div key={p.title} variants={staggerItem} className="flex flex-col">
              <div className="flex items-baseline gap-4 border-t border-ink/20 pt-6">
                <span className="num-chip text-xs text-ink/40">0{i + 1}</span>
                <h3 className="font-display text-2xl font-medium italic text-ink">
                  {p.title}
                </h3>
              </div>
              <p className="mt-5 pl-10 text-sm leading-relaxed text-ink/70">
                {p.body}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
