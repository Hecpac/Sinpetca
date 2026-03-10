export type BlogSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  seoDescription: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  author: string;
  featured?: boolean;
  keyTakeaways: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'certificacion-grua-pedestal-offshore',
    title: 'Qué revisar antes de certificar una grúa de pedestal offshore',
    excerpt:
      'Una certificación confiable no se limita al gancho. Requiere revisar condición visual, componentes críticos, evidencia superficial y contexto de operación.',
    seoDescription:
      'Puntos clave para inspeccionar y certificar una grúa de pedestal offshore con enfoque en seguridad operacional y trazabilidad.',
    category: 'Izamiento',
    publishedAt: '2026-03-10',
    readingTime: '6 min',
    coverImage: '/Fotos_Proyectos/grua-pedestal-whp-petrosucre.jpeg',
    author: 'Equipo técnico SINPETCA',
    featured: true,
    keyTakeaways: [
      'La certificación debe considerar condición del activo y contexto de maniobra.',
      'La inspección visual y el tinte penetrante ayudan a validar zonas críticas superficiales.',
      'La evidencia documental es tan importante como la revisión física del equipo.',
    ],
    sections: [
      {
        title: 'La operación offshore cambia el criterio',
        paragraphs: [
          'En una unidad flotante no basta con verificar que el equipo se vea funcional. La exposición marina, la criticidad de la maniobra y la dificultad de reemplazo elevan el nivel de exigencia.',
          'Por eso, la certificación debe responder a una pregunta concreta: si este equipo entra hoy en maniobra, ¿existen condiciones visibles o superficiales que comprometan seguridad, continuidad o control?',
        ],
      },
      {
        title: 'Zonas que requieren atención prioritaria',
        paragraphs: [
          'Los componentes sometidos a carga repetitiva y exposición ambiental deben evaluarse con foco en deformación, corrosión, desgaste, fisuras superficiales y condición de uniones.',
        ],
        bullets: [
          'Gancho, bloque y poleas',
          'Puntos de unión y sujeción',
          'Elementos de izamiento visibles durante la maniobra',
          'Estructura accesible en la zona inspeccionada',
        ],
      },
      {
        title: 'Qué debe salir en el informe',
        paragraphs: [
          'Un informe útil no solo dice que el equipo está apto o no apto. Debe dejar trazabilidad del activo, método aplicado, evidencia relevante, alcance inspeccionado y cualquier restricción para operación o seguimiento.',
          'Ese nivel de detalle ayuda a mantenimiento, operaciones y auditoría a tomar decisiones sin reinterpretar la inspección desde cero.',
        ],
      },
    ],
  },
  {
    slug: 'cuando-usar-inspeccion-visual-tinte-o-ultrasonido',
    title: 'Cuándo usar inspección visual, tinte penetrante o ultrasonido en campo',
    excerpt:
      'Elegir mal la técnica genera retrabajo y falsas expectativas. El método correcto depende del material, la falla esperada y el acceso real al componente.',
    seoDescription:
      'Guía práctica para elegir entre inspección visual, tinte penetrante y ultrasonido según el activo y el modo de falla esperado.',
    category: 'END',
    publishedAt: '2026-03-06',
    readingTime: '5 min',
    coverImage: '/Fotos_Proyectos/inspeccion-campo-petrolera.jpeg',
    author: 'Equipo técnico SINPETCA',
    keyTakeaways: [
      'La inspección visual es la base de cualquier evaluación seria.',
      'El tinte penetrante funciona mejor en discontinuidades superficiales abiertas.',
      'El ultrasonido aporta valor cuando se necesita revisar espesor, pérdida de material o integridad interna.',
    ],
    sections: [
      {
        title: 'La inspección visual sigue siendo el primer filtro',
        paragraphs: [
          'Antes de pensar en equipos más complejos, la condición visual del activo da señales claras sobre corrosión, deformación, fuga, reparación deficiente o daño mecánico.',
          'Además, ayuda a decidir si la superficie está realmente preparada para aplicar una técnica complementaria y si el hallazgo amerita ampliar alcance.',
        ],
      },
      {
        title: 'Dónde aporta valor el tinte penetrante',
        paragraphs: [
          'El tinte penetrante es útil cuando la preocupación principal está en fisuras o discontinuidades superficiales abiertas en materiales no porosos y con preparación adecuada.',
          'No reemplaza una evaluación de integridad volumétrica, pero sí ayuda a confirmar indicaciones en zonas críticas de uniones, accesorios y componentes con alta concentración de esfuerzos.',
        ],
      },
      {
        title: 'Cuándo conviene ultrasonido',
        paragraphs: [
          'Cuando el objetivo es medir espesores, verificar pérdida de material o analizar zonas donde el daño puede no ser visible externamente, el ultrasonido suele ser la ruta más eficiente.',
          'Su valor aumenta cuando se integra con inspección visual previa y con conocimiento del servicio del activo, en vez de usarse como una medición aislada sin contexto.',
        ],
      },
    ],
  },
  {
    slug: 'como-planificar-una-inspeccion-sin-frenar-la-operacion',
    title: 'Cómo planificar una inspección sin frenar la operación más de lo necesario',
    excerpt:
      'Una buena inspección empieza antes del trabajo en campo. Definir alcance, acceso y criterio de aceptación reduce tiempos muertos y evita repetir maniobras.',
    seoDescription:
      'Recomendaciones para preparar inspecciones industriales con menos retrabajo, mejor trazabilidad y mínima afectación operativa.',
    category: 'Operaciones',
    publishedAt: '2026-03-02',
    readingTime: '4 min',
    coverImage: '/Fotos_Proyectos/proyecto-1.jpg',
    author: 'Equipo técnico SINPETCA',
    keyTakeaways: [
      'La ventana operativa debe definirse junto con mantenimiento y operaciones.',
      'El alcance necesita criterios de aceptación y entregables antes de iniciar.',
      'La trazabilidad reduce discusiones posteriores sobre lo inspeccionado y lo pendiente.',
    ],
    sections: [
      {
        title: 'Alineación previa con el cliente',
        paragraphs: [
          'Cuando mantenimiento, operaciones e inspección no comparten el mismo alcance, la jornada en campo se consume resolviendo dudas en vez de producir evidencia técnica.',
          'Una conversación corta previa para definir prioridades, accesos y restricciones suele ahorrar horas de espera y maniobras repetidas.',
        ],
      },
      {
        title: 'Definir qué significa “apto” antes de salir a campo',
        paragraphs: [
          'El criterio de aceptación no debe improvisarse frente al activo. Debe estar claro desde el inicio para evitar conclusiones ambiguas o cambios de alcance a mitad del servicio.',
        ],
        bullets: [
          'Qué equipo o zona entra en alcance',
          'Qué método se aplicará',
          'Qué evidencia debe entregarse',
          'Qué condición obliga a detener, reparar o reinspeccionar',
        ],
      },
      {
        title: 'Cerrar con trazabilidad útil',
        paragraphs: [
          'La inspección agrega valor cuando el informe permite decidir el siguiente paso: operar, monitorear, intervenir o ampliar evaluación.',
          'Esa claridad evita depender de la memoria de quienes estuvieron presentes y facilita continuidad técnica entre turnos, contratistas y auditorías.',
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}
