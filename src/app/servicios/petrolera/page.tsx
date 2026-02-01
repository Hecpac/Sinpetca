/**
 * Petroleum Industry Services Page - SINPETCA
 * Complete service page with detailed information
 */

import type { Metadata } from 'next';
// Icons imported in client components via iconName mapping

// Components
import { ServiceMarkup, BreadcrumbMarkup } from '@/components/seo/SchemaMarkup';
import { petroleumInspectionService } from '@/lib/schema-data';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceList from '@/components/services/ServiceList';
import ProcessSteps from '@/components/services/ProcessSteps';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Servicios de Inspección Petrolera | API & ASME',
  description:
    'Servicios especializados de inspección para la industria petrolera: soldaduras API/ASME, tanques de almacenamiento API 650/653, tuberías, recipientes a presión y equipos de refinería. Certificaciones internacionales.',
  keywords: [
    'inspección petrolera',
    'API 650',
    'API 653',
    'ASME',
    'inspección tanques',
    'inspección soldaduras',
    'recipientes a presión',
    'inspección tuberías',
    'Venezuela',
  ],
  alternates: {
    canonical: 'https://sinpetca.com/servicios/petrolera',
  },
};

// Service items data
const services = [
  {
    title: 'Inspección de Soldaduras',
    description: 'Evaluación completa de soldaduras bajo estándares API y ASME para garantizar la integridad estructural de equipos y estructuras petroleras.',
    iconName: 'Shield',
    features: [
      'Inspección visual según AWS D1.1',
      'Calificación de procedimientos de soldadura (WPS/PQR)',
      'Certificación de soldadores',
      'Evaluación de discontinuidades',
    ],
  },
  {
    title: 'Tanques de Almacenamiento',
    description: 'Inspección y evaluación de tanques de almacenamiento atmosféricos según normas API 650 (construcción) y API 653 (mantenimiento).',
    iconName: 'Gauge',
    features: [
      'Inspección API 650 para tanques nuevos',
      'Evaluación API 653 para tanques en servicio',
      'Medición de espesores de fondo y cuerpo',
      'Evaluación de corrosión y vida remanente',
    ],
  },
  {
    title: 'Recipientes a Presión',
    description: 'Inspección de recipientes a presión según código ASME, incluyendo evaluación de integridad y aptitud para el servicio.',
    iconName: 'FlaskConical',
    features: [
      'Inspección según ASME Section VIII',
      'Evaluación de fitness-for-service (API 579)',
      'Pruebas hidrostáticas',
      'Análisis de mecanismos de daño',
    ],
  },
  {
    title: 'Sistemas de Tuberías',
    description: 'Evaluación integral de sistemas de tuberías industriales bajo normas ASME B31.3 y API 570.',
    iconName: 'Pipette',
    features: [
      'Inspección ASME B31.3 Process Piping',
      'Evaluación API 570 para tuberías en servicio',
      'Análisis de corrosión bajo aislamiento (CUI)',
      'Mapeo de espesores y puntos críticos',
    ],
  },
];

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Planificación',
    description: 'Análisis de requerimientos, revisión de documentación técnica y elaboración del plan de inspección.',
    iconName: 'FileText',
  },
  {
    number: '02',
    title: 'Inspección',
    description: 'Ejecución de ensayos no destructivos y evaluaciones según los códigos y normas aplicables.',
    iconName: 'Search',
  },
  {
    number: '03',
    title: 'Análisis',
    description: 'Evaluación de resultados, análisis de defectos y determinación de aptitud para el servicio.',
    iconName: 'ClipboardCheck',
  },
  {
    number: '04',
    title: 'Reporte',
    description: 'Elaboración de informes técnicos detallados con recomendaciones y certificaciones.',
    iconName: 'CheckCircle',
  },
];

// FAQs
const faqs = [
  {
    question: '¿Qué normas aplican para la inspección de tanques de almacenamiento?',
    answer: 'Para tanques de almacenamiento atmosféricos aplicamos principalmente API 650 para la construcción de tanques nuevos y API 653 para la inspección, reparación, alteración y reconstrucción de tanques en servicio. También utilizamos API 2610 para el diseño y operación de terminales petroleras.',
  },
  {
    question: '¿Con qué frecuencia se debe inspeccionar un recipiente a presión?',
    answer: 'La frecuencia de inspección depende de varios factores: condiciones de operación, mecanismos de daño presentes, historial de inspecciones previas y regulaciones locales. Generalmente, se realizan inspecciones internas cada 5-10 años y evaluaciones de espesor más frecuentes. Podemos ayudarle a establecer un programa de inspección basado en riesgo (RBI).',
  },
  {
    question: '¿Qué métodos NDT utilizan para inspección de soldaduras?',
    answer: 'Utilizamos una combinación de métodos según los requerimientos del código aplicable: Ultrasonido (UT) para detección de defectos volumétricos, Radiografía (RT) para evaluación de soldaduras críticas, Partículas Magnéticas (MT) para discontinuidades superficiales en materiales ferromagnéticos, y Líquidos Penetrantes (PT) para materiales no ferromagnéticos.',
  },
  {
    question: '¿Pueden realizar inspecciones en equipos en operación?',
    answer: 'Sí, ofrecemos servicios de inspección en línea para ciertos equipos utilizando técnicas especializadas como ultrasonido de alta temperatura, termografía infrarroja y medición de espesores sin necesidad de parada de planta. Esto permite optimizar los tiempos de mantenimiento y reducir costos operativos.',
  },
  {
    question: '¿Qué certificaciones tienen sus inspectores?',
    answer: 'Nuestros inspectores cuentan con certificaciones API 510 (Recipientes a Presión), API 570 (Tuberías), API 653 (Tanques), así como certificaciones ASNT Nivel II y III en diversos métodos NDT. Además, mantenemos acreditación ISO 17020 como organismo de inspección.',
  },
];

// Breadcrumbs
const breadcrumbs = [
  { name: 'Inicio', url: 'https://sinpetca.com' },
  { name: 'Servicios', url: 'https://sinpetca.com/servicios' },
  { name: 'Industria Petrolera', url: 'https://sinpetca.com/servicios/petrolera' },
];

export default function PetroleraPage() {
  return (
    <>
      {/* Schema Markup */}
      <ServiceMarkup service={petroleumInspectionService} />
      <BreadcrumbMarkup items={breadcrumbs} />

      {/* Hero Section */}
      <ServiceHero
        title="Industria"
        highlight="Petrolera"
        description="Servicios especializados de inspección bajo normas API y ASME para garantizar la integridad y seguridad de sus instalaciones petroleras. Más de 35 años de experiencia en el sector."
        iconName="Fuel"
        certifications={['API 510', 'API 570', 'API 653', 'ASME']}
        backgroundGradient="navy"
      />

      {/* Services List */}
      <ServiceList
        title="Nuestros Servicios de Inspección"
        subtitle="Soluciones Integrales"
        services={services}
      />

      {/* Process Steps */}
      <ProcessSteps
        title="Metodología de Trabajo"
        subtitle="Nuestro Proceso"
        steps={processSteps}
      />

      {/* FAQ Section */}
      <ServiceFAQ
        title="Preguntas Frecuentes"
        subtitle="FAQ"
        faqs={faqs}
      />

      {/* CTA Section */}
      <ServiceCTA
        title="¿Necesita inspección para su planta petrolera?"
        description="Contáctenos para una evaluación de sus necesidades de inspección. Ofrecemos soluciones personalizadas y cotizaciones sin compromiso."
      />
    </>
  );
}
