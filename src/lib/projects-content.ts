export type ProjectDetail = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  client: string;
  location: string;
  duration: string;
  services: string[];
  results: string[];
};

export type FeaturedProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

export const projectsData: Record<string, ProjectDetail> = {
  refineria: {
    slug: 'refineria',
    title: 'Inspección a Cojinetes de Turbina',
    category: 'Generación Eléctrica',
    summary:
      'Evaluación de cojinetes de turbina en unidad termoeléctrica para verificar desgaste, integridad y continuidad operativa.',
    description:
      'Inspección técnica de cojinetes de turbina en la unidad AJS-01 del Complejo Termoeléctrico Antonio José de Sucre, ejecutada para validar condiciones de operación y detectar desgaste prematuro en componentes críticos.',
    image: '/Fotos_Proyectos/proyecto-1.jpg',
    client: 'G&G 1726, C.A.',
    location: 'Estado Sucre',
    duration: '3 meses',
    services: ['Inspección visual', 'Medición de espesores', 'Ultrasonido con arreglo de fases'],
    results: [
      'Detección temprana de corrosión en componentes críticos',
      'Validación de operatividad segura para continuidad del servicio',
      'Disminución de paradas no programadas en la unidad',
    ],
  },
  tuberias: {
    slug: 'tuberias',
    title: 'Inspección Eddy Current en Cojinetes',
    category: 'Industria Petrolera',
    summary:
      'Evaluación mediante Eddy Current e inspección visual de cojinetes en equipos críticos de operación.',
    description:
      'Aplicación de la técnica Eddy Current e inspección visual en cojinetes y superficies metálicas para identificar discontinuidades superficiales, desgaste y señales tempranas de falla en campo.',
    image: '/Fotos_Proyectos/inspeccion-campo-petrolera.jpeg',
    client: 'Petrosucre',
    location: 'Golfo de Paria',
    duration: '6 meses',
    services: ['Eddy Current', 'Inspección visual', 'Evaluación de condición'],
    results: [
      'Identificación temprana de zonas con desgaste y discontinuidades',
      'Priorización de acciones preventivas de mantenimiento',
      'Mayor confiabilidad operativa de equipos inspeccionados',
    ],
  },
  aeronautica: {
    slug: 'aeronautica',
    title: 'Certificación de Grúa Offshore',
    category: 'Industria Petrolera',
    summary:
      'Inspección y certificación operativa de grúa de pedestal en unidad flotante WHP para maniobras seguras.',
    description:
      'Servicio de inspección y certificación de grúa de pedestal en una unidad flotante WHP de Petrosucre, con evaluación visual y aplicación de líquidos penetrantes para validar condiciones seguras de izamiento.',
    image: '/Fotos_Proyectos/proyecto-6.jpg',
    client: 'Petrosucre',
    location: 'Golfo de Paria',
    duration: 'Mantenimiento continuo',
    services: ['Líquidos penetrantes', 'Inspección visual', 'Verificación operativa'],
    results: [
      'Certificación de operatividad de la grúa de pedestal',
      'Cumplimiento con requisitos de izamiento offshore',
      'Soporte documental para continuidad de maniobras críticas',
    ],
  },
  'alabes-turbina': {
    slug: 'alabes-turbina',
    title: 'Calibración de Máquinas de Soldar',
    category: 'Equipos Especiales',
    summary:
      'Verificación de conformidad y calibración de máquinas de soldar para asegurar desempeño y trazabilidad.',
    description:
      'Inspección de conformidad y calibración de máquinas de soldar para verificar su correcto funcionamiento, estabilidad operativa y cumplimiento de parámetros requeridos por el cliente.',
    image: '/Fotos_Proyectos/calibracion-maquinas-soldar.jpeg',
    client: 'Petrosystem',
    location: 'Estado Zulia',
    duration: 'Mantenimiento programado',
    services: ['Calibración de equipos', 'Inspección visual', 'Verificación funcional'],
    results: [
      'Equipos calibrados y validados para operación segura',
      'Mejora de trazabilidad en mantenimiento de taller',
      'Reducción de desviaciones en parámetros de soldadura',
    ],
  },
  motores: {
    slug: 'motores',
    title: 'Inspección de Grúa Puente',
    category: 'Aeronáutica',
    summary:
      'Inspección visual y líquidos penetrantes en grúa puente para garantizar seguridad operativa en hangar.',
    description:
      'Evaluación de grúa puente utilizada en entorno aeronáutico mediante inspección visual y líquidos penetrantes, orientada a verificar condición estructural y seguridad en labores de mantenimiento.',
    image: '/Fotos_Proyectos/proyecto-7.png',
    client: 'Transporte Aéreo Única',
    location: 'San Tomé',
    duration: 'Inspección programada',
    services: ['Inspección visual', 'Líquidos penetrantes'],
    results: [
      'Validación de operatividad de la grúa puente',
      'Detección oportuna de indicaciones superficiales',
      'Cumplimiento con estándares de seguridad en hangar',
    ],
  },
  'grua-puente': {
    slug: 'grua-puente',
    title: 'Recertificación de Grúa de Pedestal en Plataforma WHP',
    category: 'Industria Petrolera',
    summary:
      'Recertificación de grúa de pedestal con inspección visual y líquidos penetrantes en plataforma offshore.',
    description:
      'Recertificación operativa de grúa de pedestal instalada en plataforma WHP, con inspección visual detallada y ensayos por líquidos penetrantes para respaldar maniobras seguras de carga.',
    image: '/Fotos_Proyectos/grua-pedestal-whp-petrosucre.jpeg',
    client: 'Petrosucre',
    location: 'Golfo de Paria',
    duration: 'Mantenimiento continuo',
    services: ['Líquidos penetrantes', 'Inspección visual', 'Recertificación operativa'],
    results: [
      'Recertificación documentada del equipo de izamiento',
      'Confirmación de condiciones seguras de operación',
      'Mayor control sobre maniobras de carga en plataforma',
    ],
  },
  toberas: {
    slug: 'toberas',
    title: 'Evaluación Estructural de Toberas',
    category: 'Generación Eléctrica',
    summary:
      'Evaluación no destructiva estructural en toberas de unidad termoeléctrica para prevenir fallas críticas.',
    description:
      'Evaluación no destructiva estructural aplicada a toberas de la unidad AJS-01 del Complejo Termoeléctrico Antonio José de Sucre para verificar integridad mecánica y prevenir fugas o fallas críticas.',
    image: '/Fotos_Proyectos/proyecto-8.jpg',
    client: 'Complejo Termoeléctrico Antonio José de Sucre',
    location: 'Estado Sucre',
    duration: 'Inspección programada',
    services: ['Inspección visual', 'Ensayos no destructivos', 'Evaluación estructural'],
    results: [
      'Confirmación de integridad estructural en zonas críticas',
      'Prevención de fugas y fallas operativas',
      'Mejor desempeño de la unidad termoeléctrica inspeccionada',
    ],
  },
  estructuras: {
    slug: 'estructuras',
    title: 'Evaluación de Estructuras Metálicas',
    category: 'Industria Naval',
    summary:
      'Medición de espesores e inspección estructural en cascos y plataformas sometidas a ambientes marinos agresivos.',
    description:
      'Inspección de estructuras metálicas en cascos y plataformas offshore con énfasis en medición de espesores, detección de desgaste y validación de reparaciones en ambientes marinos de alta exigencia.',
    image: '/Fotos_Proyectos/proyecto-8.jpg',
    client: 'Naviera industrial',
    location: 'Astillero y mar adentro',
    duration: '2 meses',
    services: ['Medición de espesores', 'Partículas magnéticas', 'Inspección visual'],
    results: [
      'Mapeo completo de desgaste en casco y estructura',
      'Validación de soldaduras de reparación',
      'Soporte para renovación de clase de embarcación',
    ],
  },
  izamiento: {
    slug: 'izamiento',
    title: 'Inspección y Certificación de Grúa de Pedestal',
    category: 'Equipos Especiales',
    summary:
      'Inspección visual y certificación de grúa de pedestal en unidad flotante WHP de Petrosucre, en Golfo de Paria.',
    description:
      'Servicio de inspección y certificación de grúa de pedestal en la unidad flotante WHP de Petrosucre, ubicada en Golfo de Paria, mediante tinte penetrante e inspección visual para validar condiciones seguras de operación.',
    image: '/Fotos_Proyectos/proyecto-3.jpg',
    client: 'Petrosucre',
    location: 'Golfo de Paria',
    duration: 'Inspección programada',
    services: ['Tinte penetrante', 'Inspección visual', 'Certificación operativa'],
    results: [
      'Certificación de operatividad de la grúa de pedestal',
      'Validación de condiciones seguras para maniobras en la unidad flotante',
      'Soporte documental para continuidad operativa en campo',
    ],
  },
  'ndt-estructural': {
    slug: 'ndt-estructural',
    title: 'Evaluación No Destructiva Estructural',
    category: 'Infraestructura',
    summary:
      'Aplicación de líquidos penetrantes e inspección visual para validar uniones soldadas y componentes estructurales.',
    description:
      'Aplicación de ensayos no destructivos en componentes estructurales clave para detectar discontinuidades superficiales y verificar la integridad de uniones soldadas antes de su puesta en servicio.',
    image: '/Fotos_Proyectos/proyecto-8.jpg',
    client: 'Empresa metalmecánica',
    location: 'Taller de fabricación',
    duration: '2 semanas',
    services: ['Líquidos penetrantes', 'Inspección visual de soldaduras'],
    results: [
      'Aprobación de uniones soldadas críticas para montaje',
      'Cumplimiento de requisitos de fabricación estructural',
      'Liberación oportuna de componentes para instalación',
    ],
  },
  'inspeccion-visual': {
    slug: 'inspeccion-visual',
    title: 'Inspección Visual de Tuberías',
    category: 'Industria Petrolera',
    summary:
      'Supervisión en campo de soldaduras y recubrimientos para asegurar calidad desde la fase constructiva.',
    description:
      'Inspección visual en campo de tuberías, soldaduras y recubrimientos en estaciones de flujo, con seguimiento técnico durante la ejecución para asegurar calidad y trazabilidad.',
    image: '/Fotos_Proyectos/inspeccion-campo-petrolera.jpeg',
    client: 'Operadora de campo',
    location: 'Bloque de producción',
    duration: 'Continua durante el proyecto',
    services: ['Inspección visual (CWI)', 'Evaluación de recubrimientos'],
    results: [
      'Trazabilidad completa de juntas y soldadores',
      'Reducción de retrabajos durante la fase constructiva',
      'Entrega de dossier de calidad para cierre del proyecto',
    ],
  },
};

const featuredProjectSlugs = [
  'tuberias',
  'aeronautica',
  'alabes-turbina',
  'motores',
  'toberas',
  'izamiento',
] as const;

export const featuredProjects: FeaturedProject[] = featuredProjectSlugs.map((slug) => {
  const project = projectsData[slug];

  return {
    slug: project.slug,
    title: project.title,
    category: project.category,
    description: project.summary,
    image: project.image,
  };
});
