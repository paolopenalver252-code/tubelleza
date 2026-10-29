// Selección literal de los testimonios publicados en la portada de
// https://tubellezaholistica.com (28/10/2026). Se respeta el texto original.

export interface Review {
  author: string;
  text: string;
}

export const reviews: Review[] = [
  {
    author: 'Susana',
    text: 'Tuve una experiencia increíble con este masaje relajante. Desde el primer momento, el ambiente transmitía calma: música suave, aromas agradables y un espacio muy limpio y cuidado. La atención fue profesional y cercana, logrando que me sintiera cómoda en todo momento. […]',
  },
  {
    author: 'Juan José',
    text: 'Increíble trato recibido, maravillosa sesión en pareja de aparatologia y masaje, volveremos a repetir por la experiencia que ha sido fabulosa',
  },
  {
    author: 'Marina',
    text: 'Acudi con mi madre con un pack de pareja y nos encantó, lugar muy agradable y muy profesional, repetiremos sin duda',
  },
  {
    author: 'Alicia',
    text: 'Seleni muy profesional y amable. Me realicé un ritual drenante con masaje y aparatología y volvería a repetir. Todo genial.',
  },
  {
    author: 'Isa',
    text: 'Seleni es una persona muy profesional, simpatica y que hace muy bien su trabajo. Me he realizado el masaje relajante y el personalizado que es brutal. La recomiendo muchisimo. Un espacio para mimarte y regalarte esos momentos que nos merecemos. […]',
  },
  {
    author: 'Yolanda',
    text: 'Es uno de los mejores tratamiento que he recibido y el trato espectacular',
  },
];

// Fragmentos literales de reseñas de la misma web que mencionan a Seleni, titular del centro.
export const seleniQuotes: Review[] = [
  { author: 'Vanesa', text: 'Seleni es una gran profesional tiene unas manos increíbles' },
  { author: 'Claudia Wustrow', text: 'She is incredible and the sessions are unbelievably relaxing.' },
  { author: 'Alicia', text: 'Seleni muy profesional y amable.' },
];
