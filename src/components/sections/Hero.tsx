'use client';

/**
 * Hero Section Component - SINPETCA
 * 
 * Features:
 * - Full-viewport hero with 3D industrial machinery background
 * - Gradient overlay for text readability
 * - Animated text reveal with Framer Motion
 * - Floating particles/elements for industrial aesthetic
 * - Dual CTA buttons for lead generation
 * - Scroll indicator animation
 */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Phone, Play, ChevronDown, Shield, Award, Clock } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

// Trust badges data
const trustBadges = [
  { icon: Shield, label: 'ISO 17020', sublabel: 'Certificado' },
  { icon: Award, label: '+35 Años', sublabel: 'Experiencia' },
  { icon: Clock, label: '24/7', sublabel: 'Disponibilidad' },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundY = useParallax(sectionRef, { distance: 50, mobileDistance: 18 });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* 3D Industrial Machinery Background Image */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Maquinaria industrial de inspección 3D"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark via-industrial-dark/90 to-industrial-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-transparent to-industrial-dark/50" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Radial glow effects */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-sinpetca-navy/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-sinpetca-orange/10 rounded-full blur-[120px]" />

        {/* Floating geometric elements */}
        {mounted && !prefersReducedMotion && (
          <>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-20 right-[15%] w-20 h-20 border border-sinpetca-orange/20 rounded-lg rotate-45"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '2s' }}
              className="absolute bottom-32 left-[10%] w-16 h-16 border border-sinpetca-blue/20 rounded-full"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '4s' }}
              className="absolute top-1/3 right-[25%] w-3 h-3 bg-sinpetca-orange/40 rounded-full"
            />
          </>
        )}

        {/* Animated gradient orb */}
        {mounted && !prefersReducedMotion && (
          <motion.div
            variants={pulseVariants}
            animate="animate"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-sinpetca-navy/20 via-transparent to-transparent rounded-full"
          />
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sinpetca-orange/10 border border-sinpetca-orange/30 rounded-full text-sinpetca-orange text-sm font-medium">
              <span className="w-2 h-2 bg-sinpetca-orange rounded-full animate-pulse" />
              Líderes en Inspección Industrial desde 1989
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] mb-6"
          >
            <span className="block">Precisión y</span>
            <span className="block text-gradient-orange">Confiabilidad</span>
            <span className="block text-sinpetca-blue">en Cada Inspección</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8 leading-relaxed"
          >
            Servicios especializados de{' '}
            <span className="text-text-primary font-medium">Ensayos No Destructivos</span> y{' '}
            <span className="text-text-primary font-medium">Certificación Industrial</span> para
            los sectores Petrolero, Naval y Aeronáutico. Certificados ISO 17020 y OMAC-N 667.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12"
          >
            {/* Primary CTA */}
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-sinpetca-orange hover:bg-sinpetca-orange-dark text-industrial-dark font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 shadow-lg shadow-sinpetca-orange/25 hover:shadow-sinpetca-orange/40 hover:scale-[1.02] min-h-[48px]"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Solicitar Cotización
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/servicios"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sinpetca-blue text-text-primary font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 min-h-[48px]"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-sinpetca-blue" />
              Ver Servicios
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8"
          >
            {trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 sm:gap-3 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sinpetca-navy/50 border border-sinpetca-navy flex items-center justify-center group-hover:border-sinpetca-orange group-hover:bg-sinpetca-orange/10 transition-colors duration-300">
                  <badge.icon className="w-5 h-5 sm:w-6 sm:h-6 text-sinpetca-orange" />
                </div>
                <div>
                  <span className="block text-text-primary font-semibold text-xs sm:text-sm">
                    {badge.label}
                  </span>
                  <span className="block text-text-muted text-[10px] sm:text-xs">{badge.sublabel}</span>
                </div>
                {index < trustBadges.length - 1 && (
                  <div className="hidden md:block w-px h-8 bg-industrial-gray-medium ml-4" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {mounted && !prefersReducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs uppercase tracking-widest">Explorar</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' as const }}
          >
            <ChevronDown className="w-6 h-6 text-sinpetca-orange" />
          </motion.div>
        </motion.div>
      )}

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sinpetca-orange/50 to-transparent" />
    </section>
  );
}
