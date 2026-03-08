'use client';

/**
 * Projects Section Component - SINPETCA
 * 
 * Features:
 * - Animated grid of featured projects
 * - Hover effects for project details
 * - Responsive layout (1 col mobile, 2 tablet, 3 desktop)
 */

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Projects data
const projects = [
  {
    title: 'Inspección de Refinería',
    category: 'Industria Petrolera',
    description: 'Evaluación integral de integridad mecánica en planta procesadora.',
    image: '/Fotos_Proyectos/proyecto-1.jpg',
    link: '/proyectos/refineria',
  },
  {
    title: 'Certificación de Tuberías',
    category: 'Infraestructura',
    description: 'Inspección por ultrasonido avanzado en red de oleoductos.',
    image: '/Fotos_Proyectos/proyecto-2.jpg',
    link: '/proyectos/tuberias',
  },
  {
    title: 'Mantenimiento Aeronáutico',
    category: 'Industria Aeronáutica',
    description: 'Ensayos no destructivos certificados OMAC-N 667 en fuselaje.',
    image: '/Fotos_Proyectos/proyecto-3.jpg',
    link: '/proyectos/aeronautica',
  },
  {
    title: 'Evaluación de Tanques',
    category: 'Industria Petrolera',
    description: 'Inspección bajo norma API 653 en terminal de almacenamiento.',
    image: '/Fotos_Proyectos/proyecto-4.jpg',
    link: '/proyectos/tanques',
  },
  {
    title: 'Inspección de Motores',
    category: 'Industria Aeronáutica',
    description: 'Análisis boroscópico en turbinas de aviación comercial.',
    image: '/Fotos_Proyectos/proyecto-5.jpg',
    link: '/proyectos/motores',
  },
  {
    title: 'Estructuras Metálicas',
    category: 'Industria Naval',
    description: 'Medición de espesores en cascos y plataformas offshore.',
    image: '/Fotos_Proyectos/proyecto-6.jpg',
    link: '/proyectos/estructuras',
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-industrial-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sinpetca-navy/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sinpetca-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-sinpetca-orange/10 border border-sinpetca-orange/30 rounded-full text-sinpetca-orange text-sm font-medium mb-4">
              Nuestros Proyectos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Experiencia Comprobada
              <span className="block text-sinpetca-orange mt-1">en el Campo</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Conoce algunos de nuestros proyectos más representativos y descubre cómo 
              aseguramos la calidad y seguridad en las operaciones de nuestros clientes.
            </p>
          </div>

          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-2 text-white font-medium hover:text-sinpetca-orange transition-colors"
          >
            Ver todos los proyectos
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative bg-industrial-gray rounded-2xl overflow-hidden border border-white/5 hover:border-sinpetca-orange/30 transition-colors"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-black/20 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-gray via-industrial-gray/50 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-8 -mt-20 z-10">
                <span className="inline-block px-3 py-1 bg-sinpetca-navy/80 backdrop-blur-sm border border-sinpetca-blue/30 rounded text-xs font-semibold text-sinpetca-blue-light mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sinpetca-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-white group-hover:text-sinpetca-orange transition-colors"
                >
                  Ver detalles
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
