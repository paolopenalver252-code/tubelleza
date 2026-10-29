// Datos del negocio verificados en https://tubellezaholistica.com (28/10/2026).
// Cualquier cambio de contacto u horario se hace solo aquí.

export const site = {
  name: 'Tu Belleza Holística',
  tagline: 'Centro de bienestar y spa privado en Palma de Mallorca',
  // Mientras sea una demo, las páginas se marcan como noindex para no competir con la web actual.
  isDemo: true,
  phone: {
    display: '+34 610 25 06 21',
    href: 'tel:+34610250621',
  },
  whatsappNumber: '34610250621',
  email: 'tubellezaholisticaes@gmail.com',
  address: {
    street: 'Carrer de Tomàs Forteza, 11',
    district: 'Llevant',
    postalCode: '07006',
    city: 'Palma',
    region: 'Illes Balears',
    country: 'ES',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent("Tu Belleza Holística, Carrer de Tomàs Forteza 11, 07006 Palma"),
  hours: {
    label: 'Lunes a domingo',
    time: '08:00 – 21:00',
    note: 'Con cita previa',
  },
  social: {
    instagram: 'https://www.instagram.com/tubellezaholistica/',
    facebook: 'https://www.facebook.com/tubellezaholisticaes/',
    tiktok: 'https://www.tiktok.com/@tubellezaholistica',
  },
  // Ficha de Google enlazada desde «Ver reseñas» en la web actual.
  googleReviewsUrl:
    'https://www.google.com/search?q=TuBellezaHolistica&kgmid=/g/11y034kj4p#lrd=0x12979392d0f0af97:0x8c23b2dcd7dad6b,1,,,,',
  shopUrl: 'https://tubellezaholistica.com/tienda-de-tu-belleza-holistica',
  // Los textos legales siguen alojados en la web actual: no se reproducen en la demo.
  legal: [
    { label: 'Aviso legal', href: 'https://tubellezaholistica.com/legales#aviso-legal' },
    { label: 'Política de privacidad', href: 'https://tubellezaholistica.com/legales#politica-de-privacidad' },
    { label: 'Política de cookies', href: 'https://tubellezaholistica.com/legales#politica-de-cookies' },
    { label: 'Términos y condiciones', href: 'https://tubellezaholistica.com/legales#terminos-y-condiciones-de-uso' },
    { label: 'Condiciones de contratación', href: 'https://tubellezaholistica.com/legales#condiciones-generales-de-contratacion-compra' },
    { label: 'Cancelación de citas', href: 'https://tubellezaholistica.com/legales#politica-de-cancelacion-de-citas' },
  ],
} as const;

export const nav = [
  { label: 'Spa privado', href: '/spa-privado/' },
  { label: 'En pareja', href: '/parejas/' },
  { label: 'Masajes', href: '/masajes/' },
  { label: 'Aparatología', href: '/aparatologia/' },
  { label: 'Promociones', href: '/promociones/' },
  { label: 'El centro', href: '/el-centro/' },
] as const;

/** Enlace de WhatsApp con un mensaje ya escrito, codificado correctamente. */
export function whatsappLink(subject?: string): string {
  const text = subject
    ? `Hola, vengo de la web y me gustaría reservar: ${subject}. ¿Qué disponibilidad tienen?`
    : 'Hola, vengo de la web y me gustaría reservar una cita. ¿Qué disponibilidad tienen?';
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
