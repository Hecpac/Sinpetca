/**
 * Projects Page - SINPETCA
 * 
 * Gallery of successful case studies and completed projects
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Galería de proyectos exitosos de inspección industrial y ensayos no destructivos. Casos de éxito en petrolera, naval y aeronáutica.',
  alternates: {
    canonical: 'https://sinpetca.com/proyectos',
  },
};

export default function ProyectosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-sinpetca-navy to-industrial-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Nuestros <span className="text-sinpetca-orange">Proyectos</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Casos de éxito que demuestran nuestra experiencia y compromiso con la excelencia
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-industrial-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards - Placeholder */}
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl bg-surface-primary border border-industrial-gray-medium"
              >
                <div className="aspect-video bg-industrial-gray-medium" />
                <div className="p-6">
                  <span className="text-sm text-sinpetca-orange font-medium">Petrolera</span>
                  <h3 className="text-xl font-bold text-text-primary mt-2 mb-3">
                    Proyecto {i}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Descripción breve del proyecto y los servicios proporcionados.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
