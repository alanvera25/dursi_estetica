'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export function Location() {
  const t = useTranslations('space');
  const tContact = useTranslations('contact');

  const rows = [
    {
      icon: <MapPin size={18} strokeWidth={1.5} />,
      label: `${site.address.street}, ${site.address.city}`,
      href: site.address.mapsLink
    },
    {
      icon: <Clock size={18} strokeWidth={1.5} />,
      label: `${site.hours.days} · ${site.hours.weekdays}`,
      href: null
    },
    {
      icon: <MessageCircle size={18} strokeWidth={1.5} />,
      label: site.phone,
      href: site.whatsapp(tContact('prefill'))
    },
    {
      icon: <Instagram size={18} strokeWidth={1.5} />,
      label: site.handle,
      href: site.instagram
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-16 text-bone lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dot" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* map */}
          <Reveal className="col-span-12 md:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <iframe
                title="Ubicación D'Ursi Estética"
                src={site.address.mapsEmbed}
                className="h-full w-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* icon rows */}
          <Reveal delay={0.12} className="col-span-12 flex flex-col justify-center gap-5 md:col-span-5">
            {rows.map(({ icon, label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-bone/80 transition-colors hover:text-bone"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bone/20 text-bone/60 transition-colors group-hover:border-bone/50 group-hover:text-bone">
                    {icon}
                  </span>
                  <span className="text-sm leading-snug">{label}</span>
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4 text-bone/70">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bone/15 text-bone/50">
                    {icon}
                  </span>
                  <span className="text-sm leading-snug">{label}</span>
                </div>
              )
            )}
          </Reveal>
        </div>

      </div>
    </section>
  );
}
