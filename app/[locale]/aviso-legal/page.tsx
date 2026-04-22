import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata = { title: 'Aviso legal' };

export default async function Page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEs = locale === 'es';

  return (
    <article className="mx-auto max-w-3xl px-6 py-32 lg:px-10">
      <Link
        href={locale === 'en' ? '/en' : '/'}
        className="smallcaps text-ink/60 transition-colors hover:text-ink"
      >
        ← {isEs ? 'Volver' : 'Back'}
      </Link>

      <h1 className="mt-12 font-display text-5xl font-light leading-tight tracking-[-0.01em] text-ink lg:text-6xl">
        {isEs ? 'Aviso legal' : 'Legal notice'}
      </h1>

      <div className="prose-invert mt-12 space-y-6 text-base leading-relaxed text-ink/80">
        <p>
          {isEs
            ? 'D’Ursi Estética es un consultorio de medicina estética y nutrición integral con sede en la Ciudad Autónoma de Buenos Aires. Los tratamientos son realizados por profesionales matriculados.'
            : 'D’Ursi Estética is an aesthetic medicine and integral nutrition practice in the Autonomous City of Buenos Aires. All treatments are performed by licensed professionals.'}
        </p>
        <section>
          <h2 className="smallcaps text-ink/60">
            {isEs ? 'Profesionales' : 'Professionals'}
          </h2>
          <ul className="mt-4 space-y-3">
            {site.professionals.map((p) => (
              <li key={p.name} className="flex flex-col">
                <span className="font-display text-xl italic">{p.name}</span>
                <span className="text-sm text-ink/70">
                  {p.title} · {p.specialty} · {p.license}
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="smallcaps text-ink/60">
            {isEs ? 'Responsabilidad' : 'Liability'}
          </h2>
          <p className="mt-4">
            {isEs
              ? 'La información publicada en este sitio tiene carácter orientativo y no reemplaza una consulta médica presencial. Los resultados de los tratamientos pueden variar según cada paciente.'
              : 'Information on this site is orientative and does not replace an in-person medical consultation. Treatment results may vary from patient to patient.'}
          </p>
        </section>
        <section>
          <h2 className="smallcaps text-ink/60">
            {isEs ? 'Contacto' : 'Contact'}
          </h2>
          <p className="mt-4">
            {site.address.street}, {site.address.city}. {site.email} · {site.phone}
          </p>
        </section>
      </div>
    </article>
  );
}
