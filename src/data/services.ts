// Catálogo de servicios tomado de https://tubellezaholistica.com (28/10/2026).
// Nombres, duraciones y precios son los publicados; las descripciones se han
// resumido sin añadir promesas de resultados. Si un dato no está publicado, se omite.

export interface Treatment {
  name: string;
  description: string;
  duration?: string;
  price?: string;
  /** Lista de elementos incluidos, cuando la web actual los detalla. */
  includes?: string[];
  note?: string;
}

export interface TreatmentGroup {
  id: string;
  title: string;
  intro?: string;
  items: Treatment[];
}

export const massages: Treatment[] = [
  {
    name: 'Masaje facial y corporal + exfoliación',
    description:
      'Masaje relajante con exfoliación facial y corporal. Una sesión completa para cuidar rostro y cuerpo en la misma visita.',
    duration: '60 min',
    price: '60 €',
  },
  {
    name: 'Masaje terapéutico + ondas vibracionales',
    description:
      'Masaje centrado en las zonas de tensión muscular, combinado con ondas vibracionales para profundizar en la relajación.',
    duration: '30 min · 60 min',
    price: '40 € · 60 €',
  },
  {
    name: 'Masaje postoperatorio + drenaje linfático',
    description:
      'Drenaje linfático manual, suave y rítmico, pensado para el periodo posterior a una intervención quirúrgica.',
    duration: '30 min',
    price: 'Desde 40 €',
    note: 'Consulte con su equipo médico antes de iniciar las sesiones.',
  },
  {
    name: 'Masaje Kobido',
    description:
      'Técnica japonesa de masaje facial con maniobras precisas sobre la musculatura del rostro. Una opción natural y manual para el cuidado facial.',
    duration: '20 min',
    price: '40 €',
  },
];

export const aesthetics: TreatmentGroup[] = [
  {
    id: 'rostro',
    title: 'Rostro',
    items: [
      {
        name: 'Limpieza facial + peeling ultrasónico',
        description:
          'Limpieza profunda con peeling ultrasónico para retirar impurezas y células muertas. La pala ultrasónica se aplica un máximo de 15 minutos.',
        duration: '40 min',
        price: '52 €',
      },
      {
        name: 'Altafrecuencia',
        description:
          'Corriente de alta frecuencia aplicada sobre la piel del rostro, con un máximo de 5 minutos por zona. Habitual en pieles con imperfecciones.',
        duration: '15 min · 30 min con limpieza',
        price: '52 €',
      },
      {
        name: 'Fototerapia con máscara facial',
        description: 'Máscara de luz con distintas longitudes de onda para el cuidado de la piel del rostro.',
        duration: '30 min',
        price: '38 €',
      },
    ],
  },
  {
    id: 'rostro-y-cuerpo',
    title: 'Rostro y cuerpo',
    items: [
      {
        name: 'Radiofrecuencia facial y corporal',
        description:
          'Calor controlado aplicado sobre la piel del rostro o del cuerpo. Tratamiento estético no invasivo orientado a la firmeza de la piel.',
        duration: '45 min',
        price: '43 €',
      },
      {
        name: 'Radiofrecuencia Indiba',
        description:
          'Tecnología capacitiva y resistiva, con placa de retorno y manípulo EMS, aplicada por zonas.',
        price: '43 € por zona',
      },
      {
        name: 'Biomicrocorriente',
        description: 'Microcorrientes de estimulación para tonificar la piel de forma no invasiva.',
        duration: '45 min',
        price: '52 €',
      },
    ],
  },
  {
    id: 'cuerpo',
    title: 'Cuerpo',
    items: [
      {
        name: 'Infrapreso corporal',
        description:
          'Traje neumático que ejerce una presión controlada siguiendo el sentido de la circulación, mientras usted descansa.',
        duration: '60 min',
        price: '38 €',
      },
      {
        name: 'Cavitación corporal',
        description: 'Ultrasonido aplicado sobre zonas concretas del cuerpo dentro de un plan de remodelación no invasivo.',
        duration: '60 min',
        price: '52 €',
      },
      {
        name: 'Electroestimulación',
        description: 'Impulsos eléctricos que estimulan la musculatura para trabajar la tonificación.',
        duration: '45 min',
        price: '43 €',
      },
      {
        name: 'Fototerapia corporal',
        description: 'Luz aplicada sobre el cuerpo para el cuidado y la revitalización de la piel.',
        duration: '45 min',
        price: '43 €',
      },
    ],
  },
  {
    id: 'combinados',
    title: 'Tratamientos combinados',
    intro: 'Sesiones que reúnen varias técnicas en una misma cita.',
    items: [
      {
        name: 'Infrapreso + radiofrecuencia',
        description: 'Presoterapia y radiofrecuencia en la misma sesión, para trabajar circulación y firmeza de la piel.',
        duration: '60 min',
        price: '53 €',
      },
      {
        name: 'Vacumterapia + radiofrecuencia + ondas vibracionales',
        description: 'Tres técnicas combinadas en una sesión corporal completa.',
        duration: '60 min',
        price: '53 €',
      },
      {
        name: 'Lipoláser + infrapreso',
        description: 'Lipoláser sobre zonas localizadas seguido de presoterapia.',
        duration: '60 min',
        price: '70 €',
      },
      {
        name: 'Aparatología + masaje localizado',
        description:
          'Aparatología combinada con masaje sobre las zonas que requieren más atención. Se contrata por bonos.',
        duration: '60 min por sesión',
        price: '8 sesiones 280 € · 16 sesiones 480 €',
      },
    ],
  },
];

export const spa: Treatment[] = [
  {
    name: 'Masaje aromaterapia + circuito de spa privado',
    description:
      'El ritual más completo del centro, individual o en pareja: masaje con esencias naturales a elegir y circuito privado.',
    includes: ['Masaje con esencias a elegir', 'Sauna de infracarbono', 'Bioluz e ionizante', 'Alfombra de turmalinas', 'Jacuzzi privado'],
    duration: '90 min',
    price: '1 persona 90 € · 2 personas 134 €',
  },
  {
    name: 'Pack completo de sauna',
    description: 'Sesión de sauna de infracarbono que reúne bioluz, turmalina e ionizante.',
    includes: ['Sauna de infracarbono', 'Bioluz', 'Turmalina', 'Ionizante'],
    duration: '40 min',
    price: '80 €',
  },
  {
    name: 'Hidro-refrescante + quiromasaje',
    description:
      'Veinte minutos de hidroterapia a temperatura ambiente con aromaterapia, cromoterapia y masaje cervical en el agua, seguidos de cuarenta minutos de quiromasaje en camilla.',
    duration: '60 min',
    price: 'Precio a consultar',
  },
];

export const couples: Treatment[] = [
  {
    name: 'Masaje aromaterapia en pareja',
    description:
      'Aromaterapia combinada con la alfombra de turmalinas y el jacuzzi privado, en absoluta intimidad.',
    duration: '90 min',
    price: '1 persona 90 € · 2 personas 134 €',
  },
  {
    name: 'Conexión profunda en pareja',
    description: 'Masaje aromático para dos, pensado para liberar tensiones compartidas en un entorno sereno.',
    price: '2 personas 90 €',
  },
  {
    name: 'Sesión de armonía en pareja',
    description: 'Masaje localizado, drenaje linfático y el calor de la sauna de infracarbono.',
    duration: '60 min',
    price: '59,99 €',
  },
  {
    name: 'Ritual de bienestar en pareja',
    description: 'Masaje localizado, aparatología personalizada, bioluz y sauna de infracarbono.',
    duration: '80 min',
    price: '69,99 €',
  },
  {
    name: 'Experiencia holística en pareja',
    description: 'Masaje localizado con la tecnología estética que elijan, bioluz y sauna de infracarbono.',
    duration: '95 min',
    price: '79,99 €',
  },
  {
    name: 'Ritual integral de renovación',
    description: 'Drenaje linfático, masaje aromático, exfoliación y sauna de infracarbono.',
    duration: '90 min',
    price: '60 €',
  },
];

export const coupleReferral =
  'Si recomienda a alguien para disfrutar del masaje en pareja, obtiene un 10 % de descuento en su próxima sesión.';

export const individualRituals: Treatment[] = [
  {
    name: 'Masaje relajante con aromaterapia y calor',
    description: 'Masaje relajante con aceites esenciales y antifaz de calor.',
    duration: '50 min',
    price: '34,99 €',
  },
  {
    name: 'Masaje relajante con aceites aromáticos',
    description: 'Masaje relajante con una selección de aceites aromáticos.',
    duration: '50 min',
    price: '34,99 €',
  },
  {
    name: 'Masaje relajante con sauna y esencias',
    description: 'Masaje con esencias aromáticas, antifaz de calor y sesión de sauna.',
    duration: '70 min',
    price: '44,99 €',
  },
  {
    name: 'Exfoliación corporal con café y masaje',
    description: 'Masaje relajante con exfoliación corporal profunda a base de café árabe.',
    duration: '80 min',
    price: '44,99 €',
  },
  {
    name: 'Ritual de café árabe y exfoliación',
    description: 'Masaje corporal, exfoliación profunda con café árabe y sesión de sauna.',
    duration: '90 min',
    price: '54,99 €',
  },
  {
    name: 'Ritual de aparatología drenante',
    description: 'Masaje relajante profesional combinado con aparatología drenante.',
    duration: '80 min',
    price: '39,99 €',
  },
  {
    name: 'Ritual de limpieza facial y aparatología drenante',
    description: 'Masaje profesional, aparatología drenante y limpieza facial profunda.',
    duration: '90 min',
    price: '44,99 €',
  },
  {
    name: 'Ritual drenante con tratamiento facial',
    description: 'Masaje corporal drenante y tratamiento facial.',
    duration: '90 min',
    price: '49,99 €',
  },
  {
    name: 'Ritual drenante con tratamiento facial y sauna',
    description: 'Masaje corporal terapéutico, tratamiento facial y sesión de sauna.',
    duration: '111 min',
    price: '59,99 €',
  },
];

/** Rituales presentados en la web actual sin precio en el texto. */
export const signatureRituals: Treatment[] = [
  {
    name: 'Masaje balsámico',
    description:
      'Aromaterapia, aceites esenciales aplicados en forma de lluvia y maniobras suaves para relajar cuerpo y mente.',
    price: 'Precio a consultar',
  },
  {
    name: 'Masaje Lomi Lomi hawaiano',
    description:
      'Movimientos largos, fluidos y envolventes inspirados en la tradición hawaiana, con aromaterapia, flores sobre el cuerpo y una bebida de cortesía.',
    price: 'Precio a consultar',
  },
];

export const giftVouchers = [
  { amount: '50 €' },
  { amount: '90 €' },
  { amount: '130 €' },
];
export const giftVoucherValidity = 'Válidos durante 3 meses desde su compra.';
