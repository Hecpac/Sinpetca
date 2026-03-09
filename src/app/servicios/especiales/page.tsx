import type { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceList from '@/components/services/ServiceList';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';
import { BreadcrumbMarkup } from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Inspección de Equipos Especiales',
  description:
    'Inspección y certificación de conformidad de equipos especiales como máquinas de soldar, compresores de aire, plantas eléctricas y luminarias.',
  keywords: [
    'inspección de máquinas de soldar',
    'compresores de aire',
    'plantas eléctricas',
    'equipos especiales',
    'certificación de equipos',
  ],
  alternates: {
    canonical: 'https://sinpetca.com/servicios/especiales',
  },
};

const serviceFeatures = [
  {
    title: 'Máquinas de Soldar',
    description: 'Inspección y calibración para asegurar la calidad del arco y parámetros eléctricos.',
    features: ['Calibración', 'Calidad del arco', 'Parámetros eléctricos'],
    iconName: 'Shield',
  },
  {
    title: 'Plantas Eléctricas',
    description: 'Evaluación de generadores, sistemas de combustión y tableros de control.',
    features: ['Generadores', 'Sistemas de combustión', 'Tableros de control'],
    iconName: 'Shield',
  },
  {
    title: 'Compresores de Aire',
    description: 'Inspección de recipientes a presión, válvulas de seguridad y eficiencia.',
    features: ['Recipientes a presión', 'Válvulas de seguridad', 'Eficiencia'],
    iconName: 'Shield',
  },
  {
    title: 'Plantas de Iluminación',
    description: 'Verificación de torres de iluminación, cableado y operatividad continua.',
    features: ['Torres de iluminación', 'Cableado', 'Operatividad'],
    iconName: 'Shield',
  },
];

const faqData = [
  {
    question: '¿Por qué es importante certificar equipos como máquinas de soldar?',
    answer: 'La calibración y certificación de máquinas de soldar es crítica porque garantiza que los parámetros eléctricos configurados coinciden con los reales, asegurando que las soldaduras cumplan con los códigos (ej. AWS, ASME) sin defectos por exceso o falta de calor.',
  },
  {
    question: '¿Inspeccionan los equipos en campo o en sus instalaciones?',
    answer: 'Ofrecemos flexibilidad. Podemos trasladar a nuestros inspectores directamente a sus facilidades, patios de equipos o locaciones de proyecto en campo, minimizando el impacto en su logística de traslado.',
  },
  {
    question: '¿Cuánto tiempo de validez tienen estos certificados?',
    answer: 'Generalmente, para este tipo de maquinaria de apoyo, las certificaciones de operatividad y calibración tienen una validez de seis (6) a doce (12) meses, dependiendo del plan de calidad del proyecto específico donde vayan a operar.',
  },
];

const breadcrumbs = [
  { name: 'Inicio', url: 'https://sinpetca.com' },
  { name: 'Servicios', url: 'https://sinpetca.com/servicios' },
  { name: 'Equipos Especiales', url: 'https://sinpetca.com/servicios/especiales' },
];

export default function EspecialesPage() {
  return (
    <>
      <BreadcrumbMarkup items={breadcrumbs} />

      <ServiceHero
        title="Inspección de"
        highlight="Equipos Especiales"
        description="Certificación y evaluación integral de maquinaria de apoyo industrial: máquinas de soldar, generadores eléctricos, compresores y luminarias."
        iconName="Fuel"
        certifications={['ISO 17020', 'AWS', 'ASME']}
        backgroundGradient="orange"
      />

      <ServiceList 
        title="Operatividad Garantizada para sus Equipos de Apoyo"
        subtitle="Nuestros Servicios"
        services={serviceFeatures} 
      />

      <ServiceFAQ 
        title="Preguntas Frecuentes"
        subtitle="Detalles sobre la certificación de equipos de apoyo"
        faqs={faqData} 
      />
      
      <ServiceCTA />
    </>
  );
}
