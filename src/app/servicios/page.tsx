/**
 * Services Overview Page - SINPETCA
 * 
 * Lists all service categories:
 * - Petroleum Industry
 * - Naval Industry
 * - Aeronautical Industry
 * - NDT Methods
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios de inspección industrial y ensayos no destructivos para sectores petrolero, naval y aeronáutico. Ultrasonido, radiografía, líquidos penetrantes y más.',
  alternates: {
    canonical: 'https://sinpetca.com/servicios',
  },
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-sinpetca-navy to-industrial-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Nuestros <span className="text-sinpetca-orange">Servicios</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Soluciones integrales de inspección para los sectores más exigentes
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-industrial-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Petrolera */}
            <a
              href="/servicios/petrolera"
              className="group p-8 bg-surface-primary border border-industrial-gray-medium rounded-xl hover:border-sinpetca-orange transition-colors"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-sinpetca-orange transition-colors">
                Industria Petrolera
              </h2>
              <p className="text-text-secondary">
                Inspección de soldaduras, tanques API/ASME, tuberías y equipos de presión.
              </p>
            </a>

            {/* Naval */}
            <a
              href="/servicios/naval"
              className="group p-8 bg-surface-primary border border-industrial-gray-medium rounded-xl hover:border-sinpetca-orange transition-colors"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-sinpetca-orange transition-colors">
                Industria Naval
              </h2>
              <p className="text-text-secondary">
                Certificación de grúas, medición de espesores y estructuras marítimas.
              </p>
            </a>

            {/* Aeronáutica */}
            <a
              href="/servicios/aeronautica"
              className="group p-8 bg-surface-primary border border-industrial-gray-medium rounded-xl hover:border-sinpetca-orange transition-colors"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-sinpetca-orange transition-colors">
                Industria Aeronáutica
              </h2>
              <p className="text-text-secondary">
                Certificación OMAC-N 667 y NDT para componentes de aviación.
              </p>
            </a>

            {/* NDT */}
            <a
              href="/servicios/ndt"
              className="group p-8 bg-surface-primary border border-industrial-gray-medium rounded-xl hover:border-sinpetca-orange transition-colors"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-sinpetca-orange transition-colors">
                Ensayos No Destructivos
              </h2>
              <p className="text-text-secondary">
                Ultrasonido, Rayos X, Líquidos Penetrantes, Partículas Magnéticas.
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
