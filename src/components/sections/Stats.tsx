'use client';

/**
 * Stats Section Component - SINPETCA
 * 
 * Features:
 * - Animated counter on scroll into view
 * - Industrial design with accent borders
 * - Responsive grid layout
 */

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { TrendingUp, Users, Briefcase, Award } from 'lucide-react';

// Stats data
const stats = [
  {
    value: 35,
    suffix: '+',
    label: 'Años de Experiencia',
    description: 'Desde 1989 al servicio de la industria',
    icon: TrendingUp,
  },
  {
    value: 500,
    suffix: '+',
    label: 'Proyectos Completados',
    description: 'En sectores petrolero, naval y aeronáutico',
    icon: Briefcase,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Profesionales Certificados',
    description: 'Expertos en NDT y inspección industrial',
    icon: Users,
  },
  {
    value: 4,
    suffix: '',
    label: 'Certificaciones Internacionales',
    description: 'ISO 17020, OMAC, API, ASME',
    icon: Award,
  },
];

// Animated counter hook
function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!start) return;

    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOut);

      if (currentValue !== countRef.current) {
        countRef.current = currentValue;
        setCount(currentValue);
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, start, prefersReducedMotion]);

  return count;
}

// Individual stat card component
function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: (typeof stats)[0];
  index: number;
  isInView: boolean;
}) {
  const count = useCounter(stat.value, 2000, isInView);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      }}
      className="relative group"
    >
      <div className="relative p-8 bg-industrial-gray border border-industrial-gray-medium rounded-2xl overflow-hidden hover:border-sinpetca-navy transition-colors duration-300">
        {/* Accent border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sinpetca-orange via-sinpetca-orange to-transparent" />

        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-sinpetca-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon */}
        <div className="relative w-14 h-14 mb-6 rounded-xl bg-sinpetca-navy/30 border border-sinpetca-navy/50 flex items-center justify-center group-hover:bg-sinpetca-orange/20 group-hover:border-sinpetca-orange transition-colors duration-300">
          <stat.icon className="w-7 h-7 text-sinpetca-orange" />
        </div>

        {/* Value */}
        <div className="relative mb-2">
          <span className="text-5xl md:text-6xl font-bold text-text-primary">
            {count}
          </span>
          <span className="text-4xl md:text-5xl font-bold text-sinpetca-orange">
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <h3 className="text-lg font-semibold text-text-primary mb-2">{stat.label}</h3>

        {/* Description */}
        <p className="text-sm text-text-muted">{stat.description}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-industrial-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-sinpetca-navy/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sinpetca-orange/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sinpetca-navy/30 border border-sinpetca-navy/50 rounded-full text-sinpetca-blue text-sm font-medium mb-4">
            Nuestra Trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Números que Respaldan
            <span className="text-sinpetca-orange"> Nuestra Experiencia</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Décadas de compromiso con la calidad y la seguridad industrial nos posicionan como
            líderes en inspección y ensayos no destructivos.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
