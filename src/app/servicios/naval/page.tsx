/**
 * Naval Industry Services Page - SINPETCA
 * Complete service page with detailed information
 */

import type { Metadata } from 'next';
// Icons imported in client components via iconName mapping

// Components
import { ServiceMarkup, BreadcrumbMarkup } from '@/components/seo/SchemaMarkup';
import { navalInspectionService } from '@/lib/schema-data';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceList from '@/components/services/ServiceList';
import ProcessSteps from '@/components/services/ProcessSteps';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Servicios de Inspección Naval | Certificación Marítima',
  description:
    'Servicios de inspección naval y marítima: certificación de grúas portuarias, medición de espesores de cascos, inspección de estructuras offshore y equipos de izaje. Cumplimiento con normas internacionales.',
  keywords: [
    'inspección naval',
    'certificación grúas',
    'medición espesores',
    'inspección marítima',
    'estructuras offshore',
    'equipos de izaje',
    'inspección cascos',
    'Venezuela',
  ],
  alternates: {
    canonical: 'https://sinpetca.com/servicios/naval',
  },
};

// Service items data
const services = [
  {
    title: 'Certificación de Grúas',
    description: 'Inspección y certificación de grúas portuarias, marítimas y offshore según normas internacionales de seguridad.',
    iconName: 'Container',
    features: [
      'Inspección estructural completa',
      'Pruebas de carga estática y dinámica',
      'Evaluación de sistemas de seguridad',
      'Certificación para operación',
    ],
  },
  {
    title: 'Medición de Espesores',
    description: 'Medición ultrasónica de espesores en cascos de embarcaciones, tanques y estructuras marítimas para evaluar corrosión.',
    iconName: 'Ruler',
    features: [
      'Mapeo completo de espesores',
      'Detección de áreas críticas',
      'Cálculo de tasas de corrosión',
      'Predicción de vida útil remanente',
    ],
  },
  {
    title: 'Estructuras Offshore',
    description: 'Inspección de plataformas, jackets, risers y estructuras submarinas para la industria offshore.',
    iconName: 'Anchor',
    features: [
      'Inspección sobre y bajo agua',
      'Evaluación de protección catódica',
      'Análisis de fatiga estructural',
      'Inspección de conexiones críticas',
    ],
  },
  {
    title: 'Equipos de Izaje',
    description: 'Certificación de equipos de izaje marítimos incluyendo winches, cabrestantes, pescantes y sistemas de amarre.',
    iconName: 'Shield',
    features: [
      'Inspección de cables y eslingas',
      'Pruebas de funcionamiento',
      'Verificación de capacidades',
      'Certificación de seguridad',
    ],
  },
];

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Evaluación Inicial',
    description: 'Revisión de documentación, historial de mantenimiento y definición del alcance de inspección.',
    iconName: 'FileText',
  },
  {
    number: '02',
    title: 'Inspección en Campo',
    description: 'Ejecución de inspecciones visuales y ensayos no destructivos en la embarcación o estructura.',
    iconName: 'Search',
  },
  {
    number: '03',
    title: 'Análisis Técnico',
    description: 'Evaluación de resultados, comparación con criterios de aceptación y análisis de condición.',
    iconName: 'ClipboardCheck',
  },
  {
    number: '04',
    title: 'Certificación',
    description: 'Emisión de certificados, reportes técnicos y recomendaciones de mantenimiento.',
    iconName: 'CheckCircle',
  },
];

// FAQs
const faqs = [
  {
    question: '¿Qué tipos de grúas pueden certificar?',
    answer: 'Certificamos todo tipo de grúas utilizadas en el sector naval y portuario: grúas de cubierta, grúas pórtico, grúas torre portuarias, grúas offshore, pescantes de botes salvavidas y cualquier equipo de izaje. Nuestras inspecciones incluyen evaluación estructural, sistemas mecánicos, eléctricos y de seguridad.',
  },
  {
    question: '¿Con qué frecuencia se debe medir el espesor del casco?',
    answer: 'La frecuencia depende de las regulaciones de la sociedad clasificadora y la edad de la embarcación. Generalmente, se realizan mediciones durante los reconocimientos especiales cada 5 años, pero embarcaciones mayores de 15 años requieren mediciones más frecuentes. También recomendamos mediciones adicionales en áreas críticas expuestas a mayor corrosión.',
  },
  {
    question: '¿Realizan inspecciones submarinas?',
    answer: 'Sí, contamos con capacidad para coordinar inspecciones submarinas de cascos, hélices, timones, tomas de mar y estructuras sumergidas. Trabajamos con buzos certificados y equipos de video submarino para documentar las condiciones encontradas.',
  },
  {
    question: '¿Qué normas aplican para la certificación de equipos de izaje?',
    answer: 'Aplicamos diversas normas según el tipo de equipo y su aplicación: ASME B30 para grúas, API 2C para grúas offshore, LOLER para equipos de izaje en general, y las regulaciones específicas de las sociedades clasificadoras (Lloyd\'s, DNV, ABS, Bureau Veritas) según aplique.',
  },
  {
    question: '¿Pueden realizar inspecciones en puerto o en alta mar?',
    answer: 'Realizamos inspecciones tanto en puerto como en alta mar. Para inspecciones offshore, coordinamos la logística de transporte de personal y equipos, y contamos con la experiencia necesaria para trabajar en ambientes marítimos exigentes cumpliendo con todos los requisitos de seguridad.',
  },
];

// Breadcrumbs
const breadcrumbs = [
  { name: 'Inicio', url: 'https://sinpetca.com' },
  { name: 'Servicios', url: 'https://sinpetca.com/servicios' },
  { name: 'Industria Naval', url: 'https://sinpetca.com/servicios/naval' },
];

export default function NavalPage() {
  return (
    <>
      {/* Schema Markup */}
      <ServiceMarkup service={navalInspectionService} />
      <BreadcrumbMarkup items={breadcrumbs} />

      {/* Hero Section */}
      <ServiceHero
        title="Industria"
        highlight="Naval"
        description="Servicios especializados de inspección y certificación para el sector naval y marítimo. Garantizamos la seguridad y operatividad de embarcaciones, estructuras offshore y equipos portuarios."
        iconName="Ship"
        certifications={['Lloyd\'s', 'DNV', 'ABS', 'Bureau Veritas']}
        backgroundGradient="blue"
      />

      {/* Services List */}
      <ServiceList
        title="Servicios de Inspección Naval"
        subtitle="Soluciones Marítimas"
        services={services}
      />

      {/* Process Steps */}
      <ProcessSteps
        title="Proceso de Certificación"
        subtitle="Metodología"
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
        title="¿Necesita certificación naval?"
        description="Contáctenos para programar una inspección de sus embarcaciones, grúas o equipos marítimos. Ofrecemos servicios en puerto y offshore."
      />
    </>
  );
}
