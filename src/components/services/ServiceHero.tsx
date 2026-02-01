'use client';

/**
 * Service Hero Component
 * Reusable hero section for individual service pages
 */

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Fuel,
  Ship,
  Plane,
  ScanLine,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Fuel,
  Ship,
  Plane,
  ScanLine,
};

interface ServiceHeroProps {
  title: string;
  highlight: string;
  description: string;
  iconName: string;
  certifications?: string[];
  backgroundGradient?: 'navy' | 'blue' | 'orange';
}

export default function ServiceHero({
  title,
  highlight,
  description,
  iconName,
  certifications = [],
  backgroundGradient = 'navy',
}: ServiceHeroProps) {
  const gradientClasses = {
    navy: 'from-sinpetca-navy via-sinpetca-navy-dark to-industrial-dark',
    blue: 'from-sinpetca-blue via-sinpetca-navy to-industrial-dark',
    orange: 'from-sinpetca-orange-dark via-sinpetca-navy to-industrial-dark',
  };

  const Icon = iconMap[iconName] || ScanLine;

  return (
    <section className={`relative py-24 lg:py-32 bg-gradient-to-br ${gradientClasses[backgroundGradient]} overflow-hidden`}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sinpetca-orange/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sinpetca-blue/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-text-muted mb-8"
          >
            <Link href="/" className="hover:text-text-secondary transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-text-secondary transition-colors">
              Servicios
            </Link>
            <span>/</span>
            <span className="text-sinpetca-orange">{highlight}</span>
          </motion.nav>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mb-8 rounded-2xl bg-sinpetca-orange/20 border border-sinpetca-orange/40 flex items-center justify-center"
          >
            <Icon className="w-10 h-10 text-sinpetca-orange" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
          >
            {title}{' '}
            <span className="text-sinpetca-orange">{highlight}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Certifications */}
          {certifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {certifications.map(cert => (
                <span
                  key={cert}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-text-primary font-medium"
                >
                  {cert}
                </span>
              ))}
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sinpetca-orange hover:bg-sinpetca-orange-dark text-industrial-dark font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-sinpetca-orange/25 hover:shadow-sinpetca-orange/40"
            >
              Solicitar Cotización
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-industrial-gray to-transparent" />
    </section>
  );
}
