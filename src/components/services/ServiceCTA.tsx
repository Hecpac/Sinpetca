'use client';

/**
 * Service CTA Component
 * Call-to-action section for service pages
 */

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, ArrowRight, FileText } from 'lucide-react';

interface ServiceCTAProps {
  title?: string;
  description?: string;
  showQuoteButton?: boolean;
}

export default function ServiceCTA({
  title = '¿Necesita este servicio?',
  description = 'Nuestro equipo de expertos está listo para analizar sus requerimientos y ofrecerle una solución personalizada.',
  showQuoteButton = true,
}: ServiceCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-sinpetca-navy via-sinpetca-navy-dark to-industrial-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sinpetca-orange/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sinpetca-blue/20 rounded-full blur-[100px]" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sinpetca-orange to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {showQuoteButton && (
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-sinpetca-orange hover:bg-sinpetca-orange-dark text-industrial-dark font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-sinpetca-orange/30 hover:shadow-sinpetca-orange/50"
              >
                <FileText className="w-5 h-5" />
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

            <a
              href="tel:+58XXXXXXXXX"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-text-primary font-semibold rounded-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-text-muted">
            <a
              href="mailto:info@sinpetca.com"
              className="flex items-center gap-2 hover:text-sinpetca-orange transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@sinpetca.com
            </a>
            <span className="hidden sm:inline">|</span>
            <span>Respuesta en menos de 24 horas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
