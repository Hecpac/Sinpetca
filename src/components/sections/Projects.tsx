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
    title: 'Inspección de END (Eddy Current)',
    category: 'Industria Petrolera',
    description: 'Inspección de END mediante la técnica de Eddy Current. Inspección visual a cojinetes.',
    image: '/Fotos_Proyectos/WhatsApp Image 2026-03-05 at 11.18.01 AM.jpeg',
    link: '/proyectos/tuberias',
  },
  {
    title: 'Inspección y Certificación de Grúa de Pedestal',
    category: 'Industria Petrolera',
    description: 'Inspección y certificación de grúa de pedestal en la unidad flotante WHP. Empresa Petrosucre, Golfo de Paria. Servicio de tinte e inspección visual.',
    image: '/Fotos_Proyectos/proyecto-6.jpg',
    link: '/proyectos/aeronautica',
  },
  {
    title: 'Inspección y Calibración de Máquinas de Soldar',
    category: 'Equipos Especiales',
    description: 'Inspección y calibración de máquinas de soldar. Empresa Petrosystem.',
    image: '/Fotos_Proyectos/WhatsApp Image 2025-12-17 at 12.28.18 PM.jpeg',
    link: '/proyectos/alabes-turbina',
  },
  {
    title: 'Inspección y Certificación de Grúa de Pedestal',
    category: 'Industria Petrolera',
    description: 'Inspección y certificación de grúa de pedestal en la unidad flotante WHP. Empresa Petrosucre, Golfo de Paria. Servicio de tinte e inspección visual.',
    image: '/Fotos_Proyectos/proyecto-3.jpg',
    link: '/proyectos/grua-puente',
  },
  {
    title: 'Inspección de Grúa Puente',
    category: 'Aeronáutica',
    description: 'Inspección de grúa puente. Empresa Transporte Aéreo Única, San Tomé. Técnicas de inspección visual y tinte penetrante.',
    image: '/Fotos_Proyectos/proyecto-7.png',
    link: '/proyectos/motores',
  },
  {
    title: 'Evaluación No Destructiva Estructural a Toberas',
    category: 'Generación Eléctrica',
    description: 'Evaluación no destructiva estructural a toberas, unidad AJS-01 (Serial No. 298957). Complejo Termoeléctrico Antonio José de Sucre, bajo empresa contratante G&G 1726, C.A., estado Sucre.',
    image: '/Fotos_Proyectos/proyecto-8.jpg',
    link: '/proyectos/toberas',
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement | null>(null);
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
          // Added pb-20 to give room for the last sticky card to scroll a bit
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-10 md:pb-0"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              // Added sticky positioning and z-index for mobile parallax stacking
              className="group relative bg-industrial-gray rounded-2xl overflow-hidden border border-white/5 hover:border-sinpetca-orange/30 transition-colors shadow-2xl md:shadow-none sticky md:relative"
              style={{
                top: `calc(100px + ${index * 20}px)`,
                zIndex: index + 10,
              }}
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
                <p className="text-gray-400 text-sm mb-6">
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
