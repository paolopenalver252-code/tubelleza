import { site } from './site';

// Datos estructurados solo con información publicada por el negocio.
// No se incluye puntuación agregada: el «5/5 (+100 reseñas)» de la web actual no se ha podido verificar.
export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DaySpa',
  name: site.name,
  description: site.tagline,
  url: 'https://tubellezaholistica.com/',
  telephone: '+34610250621',
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: 'Palma',
    postalCode: site.address.postalCode,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '21:00',
    },
  ],
  sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok],
};
