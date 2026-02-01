'use client';

/**
 * Mission, Vision & Values Component
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Lightbulb,
  Award,
  Handshake,
} from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integridad',
    description: 'Actuamos con honestidad y transparencia en cada inspección y dictamen.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Buscamos la perfección en cada servicio, superando las expectativas.',
  },
  {
    icon: Users,
    title: 'Compromiso',
    description: 'Dedicación total hacia nuestros clientes y sus objetivos operacionales.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Adoptamos tecnologías y metodologías de vanguardia continuamente.',
  },
  {
    icon: Handshake,
    title: 'Confianza',
    description: 'Construimos relaciones duraderas basadas en resultados consistentes.',
  },
  {
    icon: Heart,
    title: 'Seguridad',
    description: 'Priorizamos la seguridad de las personas y el medio ambiente.',
  },
];

export default function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 bg-industrial-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sinpetca-navy/10 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full p-8 bg-gradient-to-br from-sinpetca-navy to-sinpetca-navy-dark rounded-2xl border border-sinpetca-navy-light/20 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sinpetca-orange/10 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-sinpetca-orange/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-sinpetca-orange" />
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-4">Nuestra Misión</h3>

                <p className="text-text-secondary leading-relaxed">
                  Proveer servicios de inspección industrial de la más alta calidad, contribuyendo
                  a la seguridad operacional y la integridad de los activos de nuestros clientes,
                  mediante la aplicación de tecnologías avanzadas y el compromiso de un equipo
                  altamente calificado y certificado.
                </p>

                <div className="mt-6 pt-6 border-t border-sinpetca-navy-light/20">
                  <p className="text-sinpetca-orange font-medium italic">
                    "Garantizando seguridad e integridad en cada inspección"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-full p-8 bg-surface-primary rounded-2xl border border-industrial-gray-medium relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-sinpetca-blue/10 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-sinpetca-blue/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-sinpetca-blue" />
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-4">Nuestra Visión</h3>

                <p className="text-text-secondary leading-relaxed">
                  Ser reconocidos como la empresa líder en servicios de inspección industrial en
                  Latinoamérica, destacando por nuestra excelencia técnica, innovación constante
                  y el desarrollo integral de nuestro talento humano, siendo el socio estratégico
                  preferido por las principales industrias de la región.
                </p>

                <div className="mt-6 pt-6 border-t border-industrial-gray-medium">
                  <p className="text-sinpetca-blue font-medium italic">
                    "Líderes en inspección industrial en Latinoamérica"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-sinpetca-orange/10 border border-sinpetca-orange/30 rounded-full text-sinpetca-orange text-sm font-medium mb-4">
            Lo que nos define
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Nuestros <span className="text-sinpetca-orange">Valores</span>
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="group"
              >
                <div className="h-full p-5 bg-surface-primary border border-industrial-gray-medium rounded-xl text-center hover:border-sinpetca-orange/50 hover:bg-surface-secondary transition-all duration-300">
                  <div className="w-12 h-12 bg-sinpetca-navy/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-sinpetca-orange/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-sinpetca-orange" />
                  </div>
                  <h4 className="font-semibold text-text-primary text-sm mb-1">{value.title}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
