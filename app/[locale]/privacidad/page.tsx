import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export const metadata = { title: 'Política de privacidad' };

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
        {isEs ? 'Política de privacidad' : 'Privacy policy'}
      </h1>

      <div className="mt-12 space-y-6 text-base leading-relaxed text-ink/80">
        <p>
          {isEs
            ? 'En D’Ursi Estética respetamos la privacidad de nuestros pacientes. Los datos personales que compartas (nombre, email, teléfono, historia clínica) se utilizan exclusivamente para gestionar turnos, tratamientos y comunicación relacionada a tu atención.'
            : 'At D’Ursi Estética we respect the privacy of our patients. Personal data you share (name, email, phone, medical history) is used solely to manage appointments, treatments and communication related to your care.'}
        </p>
        <section>
          <h2 className="smallcaps text-ink/60">
            {isEs ? 'Almacenamiento' : 'Storage'}
          </h2>
          <p className="mt-4">
            {isEs
              ? 'Tus datos se almacenan de forma segura y nunca se venden, ceden ni comparten con terceros con fines comerciales.'
              : 'Your data is securely stored and never sold, transferred or shared with third parties for commercial purposes.'}
          </p>
        </section>
        <section>
          <h2 className="smallcaps text-ink/60">
            {isEs ? 'Tus derechos' : 'Your rights'}
          </h2>
          <p className="mt-4">
            {isEs
              ? 'Podés solicitar acceso, rectificación o eliminación de tus datos personales en cualquier momento escribiéndonos a ve.centroestetica@gmail.com.'
              : 'You may request access, rectification or deletion of your personal data at any time by writing to ve.centroestetica@gmail.com.'}
          </p>
        </section>
        <section>
          <h2 className="smallcaps text-ink/60">
            {isEs ? 'Cookies' : 'Cookies'}
          </h2>
          <p className="mt-4">
            {isEs
              ? 'Este sitio no utiliza cookies de seguimiento ni de publicidad de terceros. Sólo cookies técnicas necesarias para su funcionamiento.'
              : 'This site does not use third-party tracking or advertising cookies. Only technical cookies necessary for its operation.'}
          </p>
        </section>
      </div>
    </article>
  );
}
