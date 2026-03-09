import type { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceList from '@/components/services/ServiceList';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';
import { BreadcrumbMarkup } from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Equipos de Emergencia Aeronáutica y Marítima',
  description:
    'Servicios especializados de mantenimiento, inspección y certificación para chalecos salvavidas, balsas y toboganes de evacuación.',
  keywords: [
    'chalecos salvavidas',
    'balsas salvavidas',
    'toboganes de evacuación',
    'mantenimiento equipos de emergencia',
    'certificación aeronáutica',
  ],
  alternates: {
    canonical: 'https://sinpetca.com/servicios/emergencia',
  },
};

const serviceFeatures = [
  {
    title: 'Chalecos Salvavidas',
    description: 'Inspección de hermeticidad, reemplazo de cilindros de CO2, y revisión de balizas.',
    features: ['Hermeticidad', 'Cilindros CO2', 'Balizas'],
    iconName: 'Shield',
  },
  {
    title: 'Balsas de Supervivencia',
    description: 'Despliegue controlado, prueba de presión de flotadores e inspección de kit de supervivencia.',
    features: ['Despliegue', 'Presión de flotadores', 'Kit de supervivencia'],
    iconName: 'Shield',
  },
  {
    title: 'Toboganes de Evacuación',
    description: 'Pruebas de inflado rápido, inspección de costuras estructurales y válvulas.',
    features: ['Inflado rápido', 'Costuras estructurales', 'Válvulas'],
    iconName: 'Shield',
  },
  {
    title: 'Pruebas Hidrostáticas',
    description: 'Verificación de integridad estructural en cilindros de alta presión para inflado.',
    features: ['Integridad estructural', 'Cilindros de alta presión'],
    iconName: 'Shield',
  },
];

const faqData = [
  {
    question: '¿Con qué frecuencia se debe dar mantenimiento a una balsa salvavidas?',
    answer: 'La frecuencia depende de la regulación específica (aeronáutica civil o marítima) y de las recomendaciones del fabricante, pero por lo general, se requiere una inspección y recertificación anual obligatoria.',
  },
  {
    question: '¿Realizan pruebas hidrostáticas a los cilindros de inflado?',
    answer: 'Sí. Contamos con la capacidad para realizar pruebas hidrostáticas a los cilindros de CO2 y aire comprimido utilizados en chalecos, balsas y toboganes, certificando que mantienen su integridad estructural bajo altas presiones.',
  },
  {
    question: '¿Sus servicios abarcan sector aeronáutico y naval?',
    answer: 'Correcto. Nuestro personal técnico está capacitado para atender equipos de emergencia pertenecientes tanto a flotas de aerolíneas comerciales/privadas como a embarcaciones y plataformas marítimas.',
  },
];

const breadcrumbs = [
  { name: 'Inicio', url: 'https://sinpetca.com' },
  { name: 'Servicios', url: 'https://sinpetca.com/servicios' },
  { name: 'Equipos de Emergencia', url: 'https://sinpetca.com/servicios/emergencia' },
];

export default function EmergenciaPage() {
  return (
    <>
      <BreadcrumbMarkup items={breadcrumbs} />

      <ServiceHero
        title="Equipos de"
        highlight="Emergencia"
        description="Servicios de mantenimiento e inspección vitales para la aeronavegabilidad y navegación: chalecos, balsas salvavidas y toboganes de evacuación."
        iconName="Plane"
        certifications={['ISO 17020', 'Normas Internacionales']}
        backgroundGradient="blue"
      />

      <ServiceList 
        title="Salvaguardando Vidas en Momentos Críticos"
        subtitle="Nuestros Servicios"
        services={serviceFeatures} 
      />

      <ServiceFAQ 
        title="Preguntas Frecuentes"
        subtitle="Información sobre mantenimiento de equipos de emergencia"
        faqs={faqData} 
      />
      
      <ServiceCTA />
    </>
  );
}
