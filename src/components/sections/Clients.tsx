'use client';

/**
 * Clients Section Component - SINPETCA
 * 
 * Features:
 * - Infinite scrolling logo carousel
 * - Smooth CSS animation (no JS for performance)
 * - Industrial trust-building design
 */

import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';

const clients = [
  { name: 'PDVSA', logo: '/images/clients/pdvsa.svg' },
  { name: 'Chevron', logo: '/images/clients/chevron.svg' },
  { name: 'Shell', logo: '/images/clients/shell.svg' },
  { name: 'Total', logo: '/images/clients/total.svg' },
  { name: 'BP', logo: '/images/clients/bp.svg' },
  { name: 'Petrobras', logo: '/images/clients/petrobras.svg' },
  { name: 'Repsol', logo: '/images/clients/repsol.svg' },
  { name: 'CNPC', logo: '/images/clients/cnpc.svg' },
];

// Duplicate for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();
  const backgroundY = useParallax(ref, { distance: 24, mobileDistance: 10 });

  return (
    <section ref={ref} className="py-20 bg-industrial-dark relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-industrial-gray-medium to-transparent" />

      <motion.div
        style={{ y: prefersReducedMotion ? 0 : backgroundY }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-sinpetca-navy/30 border border-sinpetca-navy/50 rounded-full text-sinpetca-blue text-sm font-medium mb-4">
            Clientes & Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
            Empresas que Confían en Nosotros
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Colaboramos con las principales empresas de los sectores petrolero, naval y
            aeronáutico a nivel nacional e internacional.
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient masks for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-industrial-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-industrial-dark to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div
              className="flex items-center gap-16 animate-scroll"
              style={{
                width: 'max-content',
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="w-36 h-16 flex items-center justify-center px-3 py-2 bg-industrial-gray/50 border border-industrial-gray-medium rounded-lg opacity-70 hover:opacity-100 hover:border-sinpetca-navy hover:bg-industrial-gray transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={`Logo de ${client.name}`}
                      width={140}
                      height={56}
                      className="h-auto max-h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-center"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-text-muted text-sm">100% Satisfacción</span>
          </div>
          <div className="w-px h-4 bg-industrial-gray-medium hidden sm:block" />
          <div className="text-text-muted text-sm">
            <span className="text-text-primary font-semibold">50+</span> Clientes Activos
          </div>
          <div className="w-px h-4 bg-industrial-gray-medium hidden sm:block" />
          <div className="text-text-muted text-sm">
            <span className="text-text-primary font-semibold">5</span> Países
          </div>
        </motion.div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-industrial-gray-medium to-transparent" />

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
