'use client';

/**
 * CTA Section Component - SINPETCA
 * 
 * Features:
 * - Strong call-to-action for lead generation
 * - Industrial aesthetic with gradient background
 * - Contact form teaser
 */

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Phone, Mail, ArrowRight, MessageSquare, Clock, Shield } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';
import { trackEvent } from '@/lib/analytics';

const benefits = [
  {
    icon: Clock,
    title: 'Respuesta en 24h',
    description: 'Cotizaciones rápidas y sin compromiso',
  },
  {
    icon: Shield,
    title: 'Garantía de Calidad',
    description: 'Servicios certificados ISO 17020',
  },
  {
    icon: MessageSquare,
    title: 'Asesoría Gratuita',
    description: 'Expertos disponibles para orientarte',
  },
];

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();
  const backgroundY = useParallax(ref, { distance: 30, mobileDistance: 12 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sinpetca-navy via-sinpetca-navy-dark to-industrial-dark" />

      <motion.div
        style={{ y: prefersReducedMotion ? 0 : backgroundY }}
        className="absolute top-0 left-0 w-full h-full"
        aria-hidden="true"
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-sinpetca-orange/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-sinpetca-blue/20 rounded-full blur-[100px]" />
      </motion.div>

      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sinpetca-orange to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-sinpetca-orange/20 border border-sinpetca-orange/40 rounded-full text-sinpetca-orange text-sm font-medium mb-6">
              ¿Listo para comenzar?
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Solicite una Cotización
              <span className="block text-sinpetca-orange">Sin Compromiso</span>
            </h2>

            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Nuestro equipo de expertos está listo para analizar sus necesidades y ofrecerle
              la mejor solución de inspección industrial para su proyecto.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contacto"
                onClick={() =>
                  trackEvent('cta_primary_click', {
                    source: 'cta_section',
                    target: '/contacto',
                  })
                }
                className="group inline-flex items-center gap-3 px-8 py-4 bg-sinpetca-orange hover:bg-sinpetca-orange-dark text-industrial-dark font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-sinpetca-orange/30 hover:shadow-sinpetca-orange/50 hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5" />
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="mailto:info@sinpetca.com"
                onClick={() =>
                  trackEvent('cta_secondary_click', {
                    source: 'cta_section',
                    target: 'mailto:info@sinpetca.com',
                  })
                }
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-text-primary font-semibold rounded-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                info@sinpetca.com
              </a>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-sinpetca-orange/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-sinpetca-orange/20 border border-sinpetca-orange/30 flex items-center justify-center group-hover:bg-sinpetca-orange/30 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-sinpetca-orange" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-text-muted">{benefit.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 text-sm"
          >
            <a
              href="tel:+582812671109"
              onClick={() =>
                trackEvent('cta_secondary_click', {
                  source: 'cta_section',
                  target: 'tel:+582812671109',
                })
              }
              className="flex items-center gap-2 text-text-secondary hover:text-sinpetca-orange transition-colors"
            >
              <Phone className="w-4 h-4" />
              +58 281 267 1109
            </a>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <a
              href="mailto:info@sinpetca.com"
              className="flex items-center gap-2 text-text-secondary hover:text-sinpetca-orange transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@sinpetca.com
            </a>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2 text-text-secondary">
              <Clock className="w-4 h-4" />
              Lun - Vie: 7:00 AM - 5:00 PM
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
