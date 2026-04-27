'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export function About() {
  const t = useTranslations('about');
  const [vanina, estefania] = site.professionals;

  return (
    <section id="about" className="relative bg-bone py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col">
          <Reveal>
            <p className="smallcaps text-ink/50">{t('eyebrow')}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-[clamp(1.9rem,4vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em] text-ink">
              {t('heading')}{' '}
              <br />
              <span className="italic">{t('headingAccent')}</span>
            </h2>
            <p className="mt-8 text-[clamp(1rem,1.6vw,1.35rem)] leading-relaxed text-ink/75">
              {t('intro')}
            </p>
          </Reveal>
        </div>

        {/* two professionals, staggered layout */}
        <div className="mt-14 grid grid-cols-12 gap-6 lg:mt-16 lg:gap-10">
          {/* Vanina - left, lower */}
          <Reveal className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-1">
            <ProfessionalCard
              index="01"
              name={vanina.name}
              title={vanina.title}
              license={vanina.license}
              specialty={vanina.specialty}
              bio={t('vaninaBio')}
              off={t('vaninaOff')}
              imgSrc="/images/vani.jpeg"
            />
          </Reveal>

          {/* Estefanía - right, offset up */}
          <Reveal
            delay={0.15}
            className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8"
          >
            <ProfessionalCard
              index="02"
              name={estefania.name}
              title={estefania.title}
              license={estefania.license}
              specialty={estefania.specialty}
              bio={t('estefaniaBio')}
              off={t('estefaniaOff')}
              imgSrc="/images/pepi.png"
              flipped
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProfessionalCard({
  index,
  name,
  title,
  license,
  specialty,
  bio,
  off,
  imgSrc,
  flipped
}: {
  index: string;
  name: string;
  title: string;
  license: string;
  specialty: string;
  bio: string;
  off: string;
  imgSrc: string;
  flipped?: boolean;
}) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-sage">
        <Image
          src={imgSrc}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
        <div
          className={`absolute bottom-4 ${
            flipped ? 'right-4 text-right' : 'left-4'
          } flex flex-col gap-0.5 text-bone`}
        >
          <span className="smallcaps">{index}</span>
          <span className="font-display text-xs italic">{specialty}</span>
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <h3 className="font-display text-2xl font-light leading-tight text-ink md:text-3xl">
          {name}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <span className="text-sm text-ink/70">{title}</span>
          <span className="h-3 w-px bg-ink/30" />
          <span className="num-chip text-xs uppercase tracking-[0.2em] text-taupe">
            {license}
          </span>
        </div>
        <p className="mt-6 text-[0.92rem] leading-relaxed text-ink/75">{bio}</p>
        <p className="mt-4 border-t border-ink/15 pt-4 text-xs italic text-ink/55">
          {off}
        </p>
      </div>
    </article>
  );
}
