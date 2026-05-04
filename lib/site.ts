export const site = {
  name: 'D’Ursi Estética',
  shortName: 'Dursi',
  handle: '@dursi.estetica',
  instagram: 'https://www.instagram.com/dursi.estetica/',
  tiktok: 'https://www.tiktok.com/@dursi.estetica?_r=1&_t=ZS-965XRp7lArn',
  email: 've.centroestetica@gmail.com',
  phone: '+54 9 11 6602 1077',
  phoneRaw: '5491166021077',
  whatsapp: (msg = '') =>
    `https://wa.me/5491166021077${msg ? `?text=${encodeURIComponent(msg)}` : ''}`,
  address: {
    street: 'Manuel Ricardo Trelles 2311',
    city: 'Ciudad Autónoma de Buenos Aires',
    postal: 'C1416',
    country: 'Argentina',
    mapsEmbed:
      'https://www.google.com/maps?q=Manuel+Ricardo+Trelles+2311,+CABA&output=embed',
    mapsLink:
      'https://maps.app.goo.gl/D8dy9ZbK15dgwkpSA'
  },
  hours: {
    weekdays: '14:00 — 19:00',
    days: 'Lunes a Viernes'
  },
  professionals: [
    {
      name: 'Vanina D’Ursi Corigliano',
      title: 'Dra. Médica',
      license: 'MN 179124',
      specialty: 'Medicina Estética'
    },
    {
      name: 'Estefanía D’Ursi Corigliano',
      title: 'Lic. en Nutrición',
      license: 'MN 10505',
      specialty: 'Nutrición clínica'
    }
  ]
};

export type SiteConfig = typeof site;
