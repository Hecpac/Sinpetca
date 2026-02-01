/**
 * Aeronautical Industry Services Page - SINPETCA
 * Complete service page with detailed information
 */

import type { Metadata } from 'next';
// Icons imported in client components via iconName mapping

// Components
import { ServiceMarkup, BreadcrumbMarkup } from '@/components/seo/SchemaMarkup';
import { aeronauticalInspectionService } from '@/lib/schema-data';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceList from '@/components/services/ServiceList';
import ProcessSteps from '@/components/services/ProcessSteps';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Servicios de Inspección Aeronáutica | OMAC-N 667',
  description:
    'Servicios de ensayos no destructivos certificados OMAC-N 667 para la industria aeronáutica. Inspección de componentes estructurales, motores, trenes de aterrizaje y materiales compuestos.',
  keywords: [
    'inspección aeronáutica',
    'OMAC',
    'NDT aviación',
    'certificación aeronáutica',
    'inspección aeronaves',
    'ensayos no destructivos aviación',
    'componentes aeronáuticos',
    'Venezuela',
  ],
  alternates: {
    canonical: 'https://sinpetca.com/servicios/aeronautica',
  },
};

// Service items data
const services = [
  {
    title: 'Inspección de Estructuras',
    description: 'Evaluación de integridad estructural de fuselajes, alas, empenajes y componentes críticos de aeronaves.',
    iconName: 'Plane',
    features: [
      'Inspección de uniones remachadas',
      'Detección de grietas por fatiga',
      'Evaluación de corrosión',
      'Inspección de áreas de difícil acceso',
    ],
  },
  {
    title: 'Componentes de Motor',
    description: 'Ensayos no destructivos en componentes de motores aeronáuticos: discos, álabes, ejes y carcasas.',
    iconName: 'Cog',
    features: [
      'Inspección de discos de turbina',
      'Evaluación de álabes de compresor',
      'Detección de microfisuras',
      'Inspección de rodamientos y sellos',
    ],
  },
  {
    title: 'Tren de Aterrizaje',
    description: 'Inspección completa de componentes del tren de aterrizaje incluyendo estructura, actuadores y ruedas.',
    iconName: 'Shield',
    features: [
      'Inspección de patas principales',
      'Evaluación de cilindros hidráulicos',
      'Inspección de ruedas y frenos',
      'Detección de desgaste y corrosión',
    ],
  },
  {
    title: 'Materiales Compuestos',
    description: 'Técnicas especializadas para inspección de estructuras en fibra de carbono, fibra de vidrio y honeycomb.',
    iconName: 'ScanLine',
    features: [
      'Detección de delaminaciones',
      'Evaluación de impactos',
      'Inspección de uniones adhesivas',
      'Mapeo de daños por ultrasonido',
    ],
  },
];

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Revisión Documental',
    description: 'Análisis de manuales de mantenimiento, boletines de servicio y requisitos de inspección aplicables.',
    iconName: 'FileText',
  },
  {
    number: '02',
    title: 'NDT Especializado',
    description: 'Aplicación de técnicas de ensayos no destructivos específicas para aviación según estándares OMAC.',
    iconName: 'Search',
  },
  {
    number: '03',
    title: 'Evaluación',
    description: 'Análisis de indicaciones encontradas según criterios de aceptación aeronáuticos.',
    iconName: 'ClipboardCheck',
  },
  {
    number: '04',
    title: 'Certificación',
    description: 'Emisión de certificados y documentación requerida por autoridades aeronáuticas.',
    iconName: 'CheckCircle',
  },
];

// FAQs
const faqs = [
  {
    question: '¿Qué es la certificación OMAC-N 667?',
    answer: 'OMAC-N 667 es la certificación otorgada por la Oficina de Mantenimiento Aeronáutico Civil de Venezuela que autoriza a organizaciones a realizar ensayos no destructivos en componentes aeronáuticos. Esta certificación garantiza que cumplimos con los estándares de calidad y seguridad requeridos por la aviación civil.',
  },
  {
    question: '¿Qué métodos NDT utilizan para aviación?',
    answer: 'Utilizamos métodos NDT aprobados para aviación incluyendo: Inspección Visual Mejorada, Líquidos Penetrantes Fluorescentes, Partículas Magnéticas (húmedo fluorescente), Ultrasonido Convencional y Phased Array, Corrientes Inducidas (Eddy Current), y Radiografía Digital. Cada método se selecciona según el componente y tipo de defecto a detectar.',
  },
  {
    question: '¿Pueden inspeccionar cualquier tipo de aeronave?',
    answer: 'Estamos certificados para inspeccionar componentes de aeronaves de ala fija y rotativa, tanto de aviación comercial como general. Esto incluye aviones de transporte, aeronaves ejecutivas, helicópteros y aviones de entrenamiento. Los métodos específicos aplicados dependen del fabricante y los manuales de mantenimiento aprobados.',
  },
  {
    question: '¿Qué documentación entregan después de la inspección?',
    answer: 'Entregamos documentación completa que incluye: Certificado de inspección OMAC, reporte técnico detallado con metodología utilizada, registro de indicaciones encontradas, fotografías y/o imágenes de ultrasonido cuando aplica, y recomendaciones de acción si se detectan defectos. Toda la documentación cumple con los requisitos de trazabilidad aeronáutica.',
  },
  {
    question: '¿Realizan inspecciones in-situ o solo en su laboratorio?',
    answer: 'Ofrecemos ambas modalidades. Contamos con equipos portátiles certificados para realizar inspecciones in-situ en hangares, talleres o aeropuertos. Para componentes que requieren técnicas más sofisticadas o ambientes controlados, realizamos las inspecciones en nuestras instalaciones debidamente acondicionadas.',
  },
];

// Breadcrumbs
const breadcrumbs = [
  { name: 'Inicio', url: 'https://sinpetca.com' },
  { name: 'Servicios', url: 'https://sinpetca.com/servicios' },
  { name: 'Industria Aeronáutica', url: 'https://sinpetca.com/servicios/aeronautica' },
];

export default function AeronauticaPage() {
  return (
    <>
      {/* Schema Markup */}
      <ServiceMarkup service={aeronauticalInspectionService} />
      <BreadcrumbMarkup items={breadcrumbs} />

      {/* Hero Section */}
      <ServiceHero
        title="Industria"
        highlight="Aeronáutica"
        description="Ensayos no destructivos certificados OMAC-N 667 para garantizar la seguridad y aeronavegabilidad de componentes y estructuras aeronáuticas. Precisión crítica para la aviación."
        iconName="Plane"
        certifications={['OMAC-N 667', 'ASNT', 'NAS 410']}
        backgroundGradient="blue"
      />

      {/* Services List */}
      <ServiceList
        title="Servicios de Inspección Aeronáutica"
        subtitle="NDT para Aviación"
        services={services}
      />

      {/* Process Steps */}
      <ProcessSteps
        title="Proceso de Inspección"
        subtitle="Metodología Aeronáutica"
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
        title="¿Necesita inspección aeronáutica certificada?"
        description="Contáctenos para programar ensayos no destructivos de sus componentes aeronáuticos con certificación OMAC."
      />
    </>
  );
}
