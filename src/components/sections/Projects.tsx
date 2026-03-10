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
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProjectCard from '@/components/projects/ProjectCard';
import { featuredProjects } from '@/lib/projects-content';

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
    <section
      id="proyectos"
      ref={ref}
      className="relative overflow-hidden bg-industrial-dark py-16 scroll-mt-28 sm:py-24"
    >
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
          className="grid grid-cols-1 gap-6 pb-2 sm:gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
