/**
 * Projects Page - SINPETCA
 * 
 * Gallery of successful case studies and completed projects
 */

import type { Metadata } from 'next';
import ExperienceMatrix from '@/components/projects/ExperienceMatrix';
import ProjectCard from '@/components/projects/ProjectCard';
import { featuredProjects } from '@/lib/projects-content';

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Galería de proyectos de inspección industrial y ensayos no destructivos. Casos reales en petrolera, aeronáutica, equipos especiales y generación eléctrica.',
  alternates: {
    canonical: 'https://sinpetca.com/proyectos',
  },
};

export default function ProyectosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sinpetca-navy to-industrial-dark pb-14 pt-16 sm:py-24">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sinpetca-navy/10 to-transparent pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sinpetca-orange/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="mb-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Nuestros <span className="text-sinpetca-orange">Proyectos</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-300 sm:text-xl">
            Casos de éxito que demuestran nuestra experiencia y compromiso con la excelencia y calidad en campo
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-industrial-gray py-14 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                ctaLabel="Ver detalles del proyecto"
                priority={idx < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Matrix */}
      <ExperienceMatrix />
    </div>
  );
}
