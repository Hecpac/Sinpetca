'use client';

/**
 * Company Timeline Component
 * Shows the history of SINPETCA
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Award, Users, Globe, Rocket, Target } from 'lucide-react';

const milestones = [
  {
    year: '1988',
    title: 'Fundación de SINPETCA',
    description:
      'Nace Servicios de Inspección Petrolera C.A. en Venezuela, con la visión de proveer servicios de inspección de alta calidad para la industria petrolera nacional.',
    icon: Building2,
    highlight: true,
  },
  {
    year: '1992',
    title: 'Expansión de Servicios',
    description:
      'Ampliamos nuestro portafolio incluyendo ensayos no destructivos (NDT) y servicios de inspección para la industria petroquímica.',
    icon: Rocket,
  },
  {
    year: '1998',
    title: 'Primera Década',
    description:
      'Celebramos 10 años consolidándonos como referente en inspección industrial, con presencia en las principales operaciones petroleras del país.',
    icon: Award,
  },
  {
    year: '2005',
    title: 'Diversificación Industrial',
    description:
      'Incorporamos servicios para los sectores naval y aeronáutico, ampliando significativamente nuestra cartera de clientes.',
    icon: Globe,
  },
  {
    year: '2012',
    title: 'Acreditación ISO 17020',
    description:
      'Obtenemos la acreditación como organismo de inspección Tipo A, reconocimiento internacional de nuestra competencia e imparcialidad.',
    icon: Award,
    highlight: true,
  },
  {
    year: '2018',
    title: '30 Años de Excelencia',
    description:
      'Tres décadas de servicio ininterrumpido, habiendo completado más de 5,000 proyectos de inspección en múltiples sectores industriales.',
    icon: Target,
  },
  {
    year: '2024',
    title: 'Liderazgo Continuo',
    description:
      'Seguimos a la vanguardia con tecnología de última generación, equipo altamente certificado y compromiso inquebrantable con la calidad.',
    icon: Users,
    highlight: true,
  },
];

export default function CompanyTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-industrial-dark relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sinpetca-navy/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sinpetca-orange/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sinpetca-navy/30 border border-sinpetca-navy/50 rounded-full text-sinpetca-blue text-sm font-medium mb-4">
            Nuestra Trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Más de <span className="text-sinpetca-orange">35 Años</span> de Historia
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Un recorrido de crecimiento constante, innovación y compromiso con la excelencia
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sinpetca-orange via-sinpetca-navy to-industrial-gray-medium transform md:-translate-x-1/2" />

          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            const IconComponent = milestone.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      milestone.highlight
                        ? 'bg-sinpetca-orange text-industrial-dark'
                        : 'bg-industrial-gray border-2 border-sinpetca-navy text-sinpetca-blue'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-4rem)] ${
                    isLeft ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div
                    className={`p-6 bg-surface-primary border rounded-xl transition-all duration-300 hover:border-sinpetca-orange/50 ${
                      milestone.highlight
                        ? 'border-sinpetca-orange/30 shadow-[0_0_30px_rgba(245,166,35,0.1)]'
                        : 'border-industrial-gray-medium'
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                        milestone.highlight
                          ? 'bg-sinpetca-orange/20 text-sinpetca-orange'
                          : 'bg-sinpetca-navy/30 text-sinpetca-blue'
                      }`}
                    >
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{milestone.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
