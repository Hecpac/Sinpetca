import type { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceList from '@/components/services/ServiceList';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';
import { BreadcrumbMarkup } from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Inspección de Equipos de Izamiento y Carga',
  description:
    'Servicios especializados de inspección y certificación de conformidad para equipos de izamiento y carga pesada según normativas internacionales.',
  keywords: [
    'inspección de grúas',
    'equipos de izamiento',
    'carga pesada',
    'certificación de grúas',
    'ASME B30',
  ],
  alternates: {
    canonical: 'https://sinpetca.com/servicios/izamiento',
  },
};

const serviceFeatures = [
  {
    title: 'Inspección Estructural',
    description: 'Evaluación de chasis, plumas, pedestales y componentes estructurales principales.',
    features: ['Chasis', 'Plumas', 'Pedestales'],
    iconName: 'Shield',
  },
  {
    title: 'Pruebas de Carga',
    description: 'Ejecución de pruebas operacionales y de carga estática/dinámica certificadas.',
    features: ['Operacionales', 'Estáticas', 'Dinámicas'],
    iconName: 'Shield',
  },
  {
    title: 'Evaluación de Componentes',
    description: 'Revisión de guayas, poleas, ganchos, eslingas y accesorios de izamiento.',
    features: ['Guayas', 'Poleas', 'Ganchos', 'Eslingas'],
    iconName: 'Shield',
  },
  {
    title: 'Sistemas de Seguridad',
    description: 'Verificación de limitadores, alarmas, sistemas hidráulicos y frenos.',
    features: ['Limitadores', 'Alarmas', 'Sistemas hidráulicos', 'Frenos'],
    iconName: 'Shield',
  },
];

const faqData = [
  {
    question: '¿Qué normativas aplican para la inspección de equipos de izamiento?',
    answer: 'Nuestras inspecciones se realizan bajo los rigurosos estándares de la normativa internacional ASME Serie B30, así como las regulaciones locales aplicables, garantizando la máxima seguridad operativa.',
  },
  {
    question: '¿Qué tipo de equipos de izamiento inspeccionan?',
    answer: 'Inspeccionamos una amplia variedad que incluye grúas móviles, grúas puente, grúas torre, grúas de pedestal offshore, polipastos, montacargas, brazos articulados y todos sus accesorios de izaje asociados (eslingas, grilletes, ganchos).',
  },
  {
    question: '¿Entregan certificación de operatividad?',
    answer: 'Sí, tras una inspección exitosa y la superación de las pruebas de carga pertinentes, emitimos un certificado de conformidad que avala la operatividad segura del equipo por el período establecido en la norma.',
  },
];

const breadcrumbs = [
  { name: 'Inicio', url: 'https://sinpetca.com' },
  { name: 'Servicios', url: 'https://sinpetca.com/servicios' },
  { name: 'Equipos de Izamiento', url: 'https://sinpetca.com/servicios/izamiento' },
];

export default function IzamientoPage() {
  return (
    <>
      <BreadcrumbMarkup items={breadcrumbs} />

      <ServiceHero
        title="Equipos de"
        highlight="Izamiento y Carga"
        description="Servicios especializados de inspección y certificación para garantizar la máxima seguridad en sus operaciones de izaje pesado bajo la normativa ASME B30."
        iconName="Ship"
        certifications={['ASME B30', 'ISO 17020']}
        backgroundGradient="navy"
      />

      <ServiceList 
        title="Seguridad Total en sus Maniobras de Izaje"
        subtitle="Nuestros Servicios"
        services={serviceFeatures} 
      />

      <ServiceFAQ 
        title="Preguntas Frecuentes"
        subtitle="Todo lo que necesita saber sobre la inspección de equipos de izamiento"
        faqs={faqData} 
      />
      
      <ServiceCTA />
    </>
  );
}
