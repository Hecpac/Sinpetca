import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Factory, Calendar, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

// This data should ideally come from a CMS or a shared data file.
// For now, we define it here to make the dynamic routes work.
const projectsData = {
  'refineria': {
    title: 'Inspección de Refinería',
    category: 'Industria Petrolera',
    description: 'Evaluación integral de integridad mecánica en planta procesadora. Realizamos un estudio exhaustivo utilizando técnicas de Ensayos No Destructivos (END) para asegurar la operatividad y extender la vida útil de los equipos críticos.',
    image: '/Fotos_Proyectos/proyecto-1.jpg',
    client: 'Cliente Petrolero Confidencial',
    location: 'Complejo Refinador',
    duration: '3 meses',
    services: ['Inspección Visual', 'Medición de Espesores', 'Ultrasonido Arreglo de Fases'],
    results: [
      'Detección temprana de corrosión en líneas principales',
      'Certificación de operatividad segura por 5 años',
      'Reducción de paradas no programadas en un 40%'
    ]
  },
  'tuberias': {
    title: 'Certificación de Tuberías',
    category: 'Infraestructura',
    description: 'Inspección por ultrasonido avanzado en red de oleoductos. Despliegue de equipos de alta tecnología para la evaluación de cientos de kilómetros de tuberías de transporte de crudo.',
    image: '/Fotos_Proyectos/proyecto-2.jpg',
    client: 'Consorcio de Transporte',
    location: 'Red Nacional',
    duration: '6 meses',
    services: ['Ultrasonido Avanzado', 'Radiografía Digital', 'Mapeo de Corrosión'],
    results: [
      'Inspección de 150km de oleoducto',
      'Identificación y reparación de 12 puntos críticos',
      'Cumplimiento con normativas internacionales ASME B31.4'
    ]
  },
  'aeronautica': {
    title: 'Mantenimiento Aeronáutico',
    category: 'Industria Aeronáutica',
    description: 'Ensayos no destructivos certificados OMAC-N 667 en fuselaje. Aplicación de técnicas especializadas para garantizar la seguridad de vuelo en flotas comerciales.',
    image: '/Fotos_Proyectos/proyecto-3.jpg',
    client: 'Aerolínea Comercial',
    location: 'Hangar Principal',
    duration: 'Mantenimiento Continuo',
    services: ['Corrientes Inducidas', 'Líquidos Penetrantes', 'Ultrasonido en Compuestos'],
    results: [
      'Mantenimiento certificado de 15 aeronaves',
      'Aprobación de auditoría INAC sin no conformidades',
      'Extensión de ciclos de vuelo seguros'
    ]
  },
  'tanques': {
    title: 'Evaluación de Tanques',
    category: 'Industria Petrolera',
    description: 'Inspección bajo norma API 653 en terminal de almacenamiento. Evaluación completa de fondo, cuerpo y techo de tanques de almacenamiento de hidrocarburos de gran capacidad.',
    image: '/Fotos_Proyectos/proyecto-4.jpg',
    client: 'Terminal de Almacenamiento',
    location: 'Planta de Distribución',
    duration: '45 días',
    services: ['Inspección API 653', 'Mapeo de Fondo MFL', 'Prueba de Vacío'],
    results: [
      'Certificación de 4 tanques de 100,000 barriles',
      'Plan de mantenimiento preventivo a 10 años',
      'Garantía de contención ambiental'
    ]
  },
  'motores': {
    title: 'Inspección de Motores',
    category: 'Industria Aeronáutica',
    description: 'Análisis boroscópico en turbinas de aviación comercial. Inspección interna detallada sin necesidad de desmontaje, ahorrando tiempo y costos operativos significativos.',
    image: '/Fotos_Proyectos/proyecto-5.jpg',
    client: 'Taller Reparador',
    location: 'Base Aérea',
    duration: 'Servicio Express (48h)',
    services: ['Inspección Boroscópica', 'Análisis de Vibraciones'],
    results: [
      'Evaluación de alabes de compresor y turbina',
      'Prevención de fallas catastróficas en vuelo',
      'Reporte detallado con evidencia fotográfica 4K'
    ]
  },
  'estructuras': {
    title: 'Estructuras Metálicas',
    category: 'Industria Naval',
    description: 'Medición de espesores en cascos y plataformas offshore. Trabajos en altura y espacios confinados para asegurar la integridad de estructuras sometidas a ambientes marinos agresivos.',
    image: '/Fotos_Proyectos/proyecto-6.jpg',
    client: 'Naviera',
    location: 'Astillero / Mar Adentro',
    duration: '2 meses',
    services: ['Medición de Espesores', 'Partículas Magnéticas', 'Inspección Visual'],
    results: [
      'Renovación de clase de embarcación',
      'Mapeo completo de desgaste en casco',
      'Validación de soldaduras de reparación'
    ]
  },
  'izamiento': {
    title: 'Inspección de Equipos de Izamiento',
    category: 'Equipos Especiales',
    description: 'Inspección y certificación de conformidad de equipos de izamiento y carga, incluyendo pruebas a maquinaria especializada. Aseguramiento de la operatividad segura en maniobras críticas.',
    image: '/Fotos_Proyectos/·Inspección De Equipos de Izamiento Y Carga. ·Inspección de Conformidad de equipos Especiales. (Máquinas de Soldar, Compresores de Aire, Plantas Generadores Eléctricos, Plantas Iluminarias, Equipo.png',
    client: 'Constructora Industrial',
    location: 'Varios Sitios',
    duration: 'Anual',
    services: ['Pruebas de Carga', 'Inspección de Cables y Eslingas', 'Certificación Operativa'],
    results: [
      'Certificación de 25 grúas y polipastos',
      'Cero incidentes en maniobras de izamiento',
      'Capacitación a operadores en uso seguro'
    ]
  },
  'ndt-estructural': {
    title: 'Evaluación No Destructiva Estructural',
    category: 'Infraestructura',
    description: 'Aplicación de tintes penetrantes y ensayos en componentes estructurales clave para la detección de discontinuidades superficiales y asegurar la integridad de uniones soldadas.',
    image: '/Fotos_Proyectos/proyecto-8.jpg',
    client: 'Empresa Metalmecánica',
    location: 'Taller de Fabricación',
    duration: '2 semanas',
    services: ['Líquidos Penetrantes', 'Inspección Visual de Soldaduras'],
    results: [
      'Aprobación de 500+ uniones soldadas críticas',
      'Cumplimiento de código AWS D1.1',
      'Liberación de componentes para montaje'
    ]
  },
  'inspeccion-visual': {
    title: 'Inspección Visual de Tuberías',
    category: 'Industria Petrolera',
    description: 'Análisis en campo y evaluación de soldaduras y recubrimientos en estaciones de flujo. Supervisión experta durante la fase constructiva para garantizar calidad desde el inicio.',
    image: '/Fotos_Proyectos/WhatsApp Image 2026-03-05 at 11.18.01 AM.jpeg',
    client: 'Operadora de Campo',
    location: 'Bloque de Producción',
    duration: 'Continua (Fase Proyecto)',
    services: ['Inspección Visual (CWI)', 'Evaluación de Recubrimientos'],
    results: [
      'Trazabilidad total de soldadores y juntas',
      'Reducción de tasa de reparación al < 2%',
      'Entrega de dossier de calidad completo'
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for build time
export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug as keyof typeof projectsData];

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: `${project.title} | Proyectos SINPETCA`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-industrial-gray pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Back navigation */}
        <Link 
          href="/proyectos"
          className="inline-flex items-center gap-2 text-sinpetca-orange hover:text-sinpetca-orange-light font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver a todos los proyectos
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-sinpetca-navy border border-sinpetca-blue/30 rounded text-xs font-semibold text-sinpetca-blue-light mb-4">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column - Image & Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-industrial-dark border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="bg-surface-primary rounded-2xl p-6 sm:p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                Resultados del Proyecto
              </h2>
              <ul className="space-y-4">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-sinpetca-orange shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar - Project Info */}
          <div className="space-y-8">
            <div className="bg-industrial-dark rounded-2xl p-6 sm:p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">
                Detalles de Operación
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sinpetca-navy/50 flex items-center justify-center shrink-0">
                    <Factory className="w-5 h-5 text-sinpetca-blue-light" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Cliente / Sector</p>
                    <p className="font-medium text-white">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sinpetca-navy/50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sinpetca-blue-light" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p className="font-medium text-white">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sinpetca-navy/50 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-sinpetca-blue-light" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Duración</p>
                    <p className="font-medium text-white">{project.duration}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sinpetca-navy/80 to-industrial-dark rounded-2xl p-6 sm:p-8 border border-sinpetca-blue/20">
              <h3 className="text-xl font-bold text-white mb-4">
                Servicios Aplicados
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Contact CTA inside sidebar */}
            <div className="bg-sinpetca-orange/10 rounded-2xl p-6 border border-sinpetca-orange/20 text-center">
              <h4 className="font-bold text-white mb-2">¿Necesitas un servicio similar?</h4>
              <p className="text-sm text-gray-400 mb-4">Nuestro equipo de expertos está listo para asesorarte.</p>
              <Link 
                href="/contacto"
                className="block w-full py-3 bg-sinpetca-orange hover:bg-sinpetca-orange-light text-white font-bold rounded-xl transition-colors"
              >
                Solicitar Cotización
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
