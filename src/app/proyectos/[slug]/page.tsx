import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Factory, Calendar, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { projectsData } from '@/lib/projects-content';

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
