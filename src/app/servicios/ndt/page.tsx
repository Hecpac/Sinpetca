/**
 * NDT Services Page - SINPETCA
 * Complete service page with detailed information about NDT methods
 */

import type { Metadata } from 'next';
// Icons imported in client components via iconName mapping

// Components
import { ServiceMarkup, BreadcrumbMarkup } from '@/components/seo/SchemaMarkup';
import { ndtServices } from '@/lib/schema-data';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceList from '@/components/services/ServiceList';
import ProcessSteps from '@/components/services/ProcessSteps';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Ensayos No Destructivos (NDT) | Ultrasonido, Radiografía, PT, MT',
  description:
    'Servicios completos de ensayos no destructivos: Ultrasonido (UT), Radiografía (RT), Líquidos Penetrantes (PT), Partículas Magnéticas (MT), Corrientes Inducidas (ET) y Termografía. Personal certificado ASNT.',
  keywords: [
    'ensayos no destructivos',
    'NDT',
    'ultrasonido industrial',
    'radiografía industrial',
    'líquidos penetrantes',
    'partículas magnéticas',
    'corrientes inducidas',
    'termografía',
    'ASNT',
    'Venezuela',
  ],
  alternates: {
    canonical: 'https://sinpetca.com/servicios/ndt',
  },
};

// Service items data - NDT Methods
const services = [
  {
    title: 'Ultrasonido Industrial (UT)',
    description: 'Técnica basada en ondas sonoras de alta frecuencia para detectar discontinuidades internas y medir espesores en materiales.',
    iconName: 'Waves',
    features: [
      'Detección de defectos volumétricos',
      'Medición de espesores',
      'Ultrasonido Phased Array (PAUT)',
      'TOFD (Time of Flight Diffraction)',
    ],
  },
  {
    title: 'Radiografía Industrial (RT)',
    description: 'Uso de radiación ionizante (rayos X o gamma) para obtener imágenes del interior de materiales y detectar discontinuidades.',
    iconName: 'Radio',
    features: [
      'Radiografía convencional (película)',
      'Radiografía digital (DR/CR)',
      'Inspección de soldaduras',
      'Evaluación de fundiciones',
    ],
  },
  {
    title: 'Líquidos Penetrantes (PT)',
    description: 'Método para detectar discontinuidades superficiales abiertas a la superficie en materiales no porosos.',
    iconName: 'Droplets',
    features: [
      'Penetrantes visibles y fluorescentes',
      'Técnicas lavables con agua y solvente',
      'Alta sensibilidad para grietas finas',
      'Aplicable a múltiples materiales',
    ],
  },
  {
    title: 'Partículas Magnéticas (MT)',
    description: 'Detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos.',
    iconName: 'Magnet',
    features: [
      'Técnica húmeda y seca',
      'Partículas visibles y fluorescentes',
      'Magnetización por yugo y puntas',
      'Inspección de soldaduras y forjas',
    ],
  },
  {
    title: 'Corrientes Inducidas (ET)',
    description: 'Método electromagnético para detectar discontinuidades superficiales y medir propiedades de materiales conductores.',
    iconName: 'ScanLine',
    features: [
      'Detección de grietas superficiales',
      'Medición de conductividad',
      'Clasificación de materiales',
      'Inspección de tubos de intercambiadores',
    ],
  },
  {
    title: 'Inspección Visual (VT)',
    description: 'Examen visual directo o remoto de componentes utilizando equipos ópticos especializados.',
    iconName: 'Eye',
    features: [
      'Inspección visual directa y remota',
      'Videoscopía / Boroscopía',
      'Documentación fotográfica',
      'Medición dimensional',
    ],
  },
];

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Selección del Método',
    description: 'Análisis del componente, material y tipo de defecto esperado para seleccionar los métodos NDT más apropiados.',
    iconName: 'FileText',
  },
  {
    number: '02',
    title: 'Preparación',
    description: 'Limpieza de superficies, calibración de equipos y preparación del área de inspección.',
    iconName: 'Search',
  },
  {
    number: '03',
    title: 'Ejecución',
    description: 'Aplicación de técnicas NDT por personal certificado siguiendo procedimientos calificados.',
    iconName: 'ClipboardCheck',
  },
  {
    number: '04',
    title: 'Interpretación',
    description: 'Análisis de resultados, evaluación según criterios de aceptación y emisión de reportes.',
    iconName: 'CheckCircle',
  },
];

// FAQs
const faqs = [
  {
    question: '¿Qué es un ensayo no destructivo?',
    answer: 'Los ensayos no destructivos (NDT) son técnicas de inspección que permiten evaluar las propiedades de un material, componente o sistema sin causar daño. Esto permite verificar la integridad de equipos durante su fabricación, instalación y operación, sin necesidad de destruir o inutilizar la pieza inspeccionada.',
  },
  {
    question: '¿Cómo saber qué método NDT necesito?',
    answer: 'La selección del método depende de varios factores: tipo de material (ferroso, no ferroso, compuesto), ubicación del defecto (superficial, subsuperficial, volumétrico), geometría del componente, accesibilidad, sensibilidad requerida y código/norma aplicable. Nuestros expertos pueden asesorarle para seleccionar el método más efectivo para su aplicación.',
  },
  {
    question: '¿Qué certificaciones tienen sus técnicos NDT?',
    answer: 'Nuestros técnicos están certificados según ASNT SNT-TC-1A y/o ISO 9712 en niveles I, II y III para los diferentes métodos NDT. Adicionalmente, contamos con certificaciones específicas para sectores como API (petrolero), OMAC (aeronáutico) y códigos de soldadura (AWS, ASME).',
  },
  {
    question: '¿Cuál es la diferencia entre ultrasonido convencional y Phased Array?',
    answer: 'El ultrasonido convencional utiliza un solo transductor con ángulo fijo, mientras que Phased Array (PAUT) utiliza múltiples elementos que pueden controlarse electrónicamente para generar haces en diferentes ángulos simultáneamente. PAUT ofrece mayor cobertura, mejor resolución de imágenes y mayor velocidad de inspección, siendo ideal para soldaduras y componentes complejos.',
  },
  {
    question: '¿Pueden realizar NDT en equipos en operación?',
    answer: 'Sí, algunos métodos NDT pueden aplicarse con equipos en operación o a altas temperaturas usando técnicas y equipos especializados. Por ejemplo, medición de espesores por ultrasonido a alta temperatura, termografía para equipos energizados, y algunas técnicas de corrientes inducidas. Evaluamos cada caso para determinar la mejor estrategia de inspección.',
  },
  {
    question: '¿Qué normas y códigos siguen para las inspecciones?',
    answer: 'Trabajamos con los principales códigos y normas internacionales: ASME (Sección V para NDT), API (510, 570, 653), AWS D1.1, ASTM E-series para métodos NDT, ISO 17640 para ultrasonido de soldaduras, entre otros. Los procedimientos se califican según los requisitos específicos de cada código y aplicación.',
  },
];

// Breadcrumbs
const breadcrumbs = [
  { name: 'Inicio', url: 'https://sinpetca.com' },
  { name: 'Servicios', url: 'https://sinpetca.com/servicios' },
  { name: 'Ensayos No Destructivos', url: 'https://sinpetca.com/servicios/ndt' },
];

export default function NDTPage() {
  return (
    <>
      {/* Schema Markup */}
      <ServiceMarkup service={ndtServices} />
      <BreadcrumbMarkup items={breadcrumbs} />

      {/* Hero Section */}
      <ServiceHero
        title="Ensayos"
        highlight="No Destructivos"
        description="Métodos avanzados de inspección para detectar defectos sin dañar el material. Personal certificado ASNT aplicando las técnicas más modernas de NDT para garantizar la integridad de sus activos."
        iconName="ScanLine"
        certifications={['ASNT Level III', 'ISO 9712', 'ASME Section V']}
        backgroundGradient="navy"
      />

      {/* Services List */}
      <ServiceList
        title="Métodos de Ensayo Disponibles"
        subtitle="Técnicas NDT"
        services={services}
      />

      {/* Process Steps */}
      <ProcessSteps
        title="Proceso de Inspección NDT"
        subtitle="Metodología"
        steps={processSteps}
      />

      {/* FAQ Section */}
      <ServiceFAQ
        title="Preguntas Frecuentes sobre NDT"
        subtitle="FAQ"
        faqs={faqs}
      />

      {/* CTA Section */}
      <ServiceCTA
        title="¿Necesita ensayos no destructivos?"
        description="Contáctenos para una evaluación de sus necesidades de inspección. Nuestros especialistas le recomendarán los métodos más adecuados para su aplicación."
      />
    </>
  );
}
