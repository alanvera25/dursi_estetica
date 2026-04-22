'use client';

import { useTranslations } from 'next-intl';
import { treatments, categories } from '@/lib/treatments';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { Reveal, StaggerGroup } from '@/components/ui/Reveal';

export function Treatments() {
  const t = useTranslations('treatments');

  return (
    <section id="treatments" className="relative overflow-hidden bg-sage py-28 lg:py-40">
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
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em] text-ink">
              {t('heading')}{' '}
              <span className="italic">{t('headingAccent')}</span>
            </h2>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-ink/75">
              {t('subheading')}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-24 lg:mt-32 lg:gap-32">
          {categories.map((cat, ci) => {
            const items = treatments.filter((x) => x.category === cat);
            return (
              <div key={cat} className="grid grid-cols-12 gap-6 lg:gap-10">
                <Reveal className="col-span-12 lg:col-span-3">
                  <div className="sticky top-28">
                    <span className="num-chip text-xs text-ink/50">
                      0{ci + 1} / 04
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-light leading-none tracking-[-0.01em] text-ink lg:text-4xl">
                      <span className="italic">{t(`groups.${cat}`)}</span>
                    </h3>
                    <div className="mt-4 h-px w-16 bg-ink/30" />
                  </div>
                </Reveal>

                <StaggerGroup
                  className="col-span-12 lg:col-span-9"
                  stagger={0.06}
                >
                  {items.map((item) => (
                    <TreatmentCard key={item.key} t={item} />
                  ))}
                  <div className="border-t border-ink/15" />
                </StaggerGroup>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
