'use client';

/**
 * Services Section Component - SINPETCA
 * 
 * Features:
 * - ServiceCards with micro-interactions
 * - Staggered reveal animations
 * - Industrial sector categorization
 */

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ServiceCard, ServiceCardGrid } from '@/components/ui/ServiceCard';
import { Fuel, Ship, Plane, ScanLine, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Services data
const services = [
  {
    title: 'Industria Petrolera',
    description:
      'Inspección de soldaduras, tanques API 650/653, tuberías y equipos a presión bajo normas API y ASME.',
    href: '/servicios/petrolera',
    icon: Fuel,
    image: '/images/proyectos/whp-petrosucre.jpg',
  },
  {
    title: 'Industria Naval',
    description:
      'Certificación de grúas portuarias, medición de espesores de cascos y estructuras marítimas.',
    href: '/servicios/naval',
    icon: Ship,
    image: '/images/proyectos/buque-panama.jpg',
  },
  {
    title: 'Industria Aeronáutica',
    description:
      'Ensayos no destructivos certificados OMAC-N 667 para componentes y estructuras de aviación.',
    href: '/servicios/aeronautica',
    icon: Plane,
    image: '/images/proyectos/sasca-boroscopia.jpg',
  },
  {
    title: 'Ensayos No Destructivos',
    description:
      'Ultrasonido (UT), Radiografía (RT), Líquidos Penetrantes (PT), Partículas Magnéticas (MT) y más.',
    href: '/servicios/ndt',
    icon: ScanLine,
    image: '/images/proyectos/tintes-penetrantes.jpg',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-industrial-gray relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sinpetca-navy/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sinpetca-orange/5 rounded-full blur-[120px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-sinpetca-orange/10 border border-sinpetca-orange/30 rounded-full text-sinpetca-orange text-sm font-medium mb-4">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Soluciones de Inspección
              <span className="block text-sinpetca-blue">Para Cada Industria</span>
            </h2>
            <p className="text-text-secondary max-w-xl">
              Ofrecemos servicios especializados de inspección y ensayos no destructivos
              adaptados a las necesidades específicas de cada sector industrial.
            </p>
          </div>

          {/* View All Link */}
          <Link
            href="/servicios"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-sinpetca-navy/30 border border-industrial-gray-medium hover:border-sinpetca-navy rounded-xl text-text-primary font-medium transition-all duration-300"
          >
            Ver todos los servicios
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Services Grid */}
        <ServiceCardGrid columns={2}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.href}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
              image={service.image}
              animationDelay={prefersReducedMotion ? 0 : index * 0.1}
            />
          ))}
        </ServiceCardGrid>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-text-muted mb-6">
            ¿No encuentra el servicio que necesita?
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-sinpetca-orange hover:text-sinpetca-orange-light font-medium transition-colors"
          >
            Contáctenos para soluciones personalizadas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
