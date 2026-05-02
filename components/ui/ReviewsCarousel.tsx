'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
import { type Review } from '@/lib/reviews';
import { site } from '@/lib/site';

const AVATAR_COLORS = [
  'bg-sage text-ink',
  'bg-taupe/30 text-ink',
  'bg-ink/10 text-ink',
  'bg-ink/20 text-ink',
  'bg-taupe/20 text-ink',
  'bg-sage/70 text-ink'
];

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="mt-4 flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-5 w-5 ${i < rating ? 'text-amber-400' : 'text-ink/15'}`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ review, colorClass }: { review: Review; colorClass: string }) {
  if (review.photoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={review.photoUrl}
        alt={review.author}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
        referrerPolicy="no-referrer"
      />
    );
  }
  return (
    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${colorClass}`}>
      {review.initials}
    </div>
  );
}

function ReviewCard({ review, colorClass }: { review: Review; colorClass: string }) {
  return (
    <article
      data-review-card
      className="flex min-w-full snap-start flex-col rounded-sm border border-ink/10 bg-white p-6 shadow-sm md:min-w-[calc((100%-1.5rem)/2)] lg:min-w-[calc((100%-3rem)/3)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar review={review} colorClass={colorClass} />
          <div className="flex flex-col">
            <span className="text-[0.9rem] font-semibold text-ink">{review.author}</span>
            <span className="text-xs text-ink/50">{review.date}</span>
          </div>
        </div>
        <GoogleIcon />
      </div>

      <Stars rating={review.rating} />

      <p className="mt-3 whitespace-pre-line text-[0.88rem] leading-relaxed text-ink/75">{review.text}</p>
    </article>
  );
}

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const t = useTranslations('reviews');
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-review-card]') as HTMLElement | null;
    const gap = 24;
    const w = card ? card.offsetWidth + gap : 320;
    el.scrollBy({ left: dir * w, behavior: 'smooth' });
  }

  return (
    <section id="reviews" className="relative border-t border-ink/15 bg-bone py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <p className="smallcaps text-ink/50">{t('eyebrow')}</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.01em] text-ink">
            {t('heading')}
          </h2>
        </Reveal>

        <div className="relative mt-10">
          <button
            onClick={() => scroll(-1)}
            className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/20 bg-white text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone lg:-left-5"
            aria-label={t('prev')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div
            ref={trackRef}
            className="mx-4 flex gap-6 overflow-x-auto scroll-smooth [scroll-snap-type:x_mandatory] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-6"
          >
            {reviews.map((r, i) => (
              <ReviewCard
                key={`${r.author}-${i}`}
                review={r}
                colorClass={AVATAR_COLORS[i % AVATAR_COLORS.length]}
              />
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/20 bg-white text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone lg:-right-5"
            aria-label={t('next')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 text-center">
            <a
              href={site.address.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="smallcaps inline-block border border-ink px-8 py-4 text-ink transition-all hover:bg-ink hover:text-bone"
            >
              {t('cta')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
