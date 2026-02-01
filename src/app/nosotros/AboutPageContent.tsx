'use client';

/**
 * About Page Content (Client Component)
 * Contains all interactive elements and sections
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  Building2,
  Shield,
  Award,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Globe,
  Clock,
  Briefcase,
} from 'lucide-react';

import { CompanyTimeline, MissionVision, TeamSection } from '@/components/about';

// ============================================================================
// DATA
// ============================================================================

const highlights = [
  { value: '1988', label: 'Año de Fundación', icon: Building2 },
  { value: '35+', label: 'Años de Experiencia', icon: Clock },
  { value: '5,000+', label: 'Proyectos Completados', icon: Briefcase },
  { value: '4', label: 'Sectores Industriales', icon: Globe },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Certificaciones Internacionales',
    description:
      'Acreditados bajo ISO 17020, API, ASME y OMAC, garantizando estándares de clase mundial en cada servicio.',
  },
  {
    icon: Users,
    title: 'Equipo Altamente Calificado',
    description:
      'Más de 50 inspectores certificados individualmente con un promedio de 15 años de experiencia en el sector.',
  },
  {
    icon: Award,
    title: 'Trayectoria Comprobada',
    description:
      'Más de 5,000 proyectos completados exitosamente para las principales empresas de la industria.',
  },
  {
    icon: Target,
    title: 'Enfoque en Resultados',
    description:
      'Metodologías probadas que maximizan la eficiencia operacional y minimizan tiempos de parada.',
  },
  {
    icon: Globe,
    title: 'Cobertura Integral',
    description:
      'Servicios para los sectores petrolero, naval, aeronáutico y de ensayos no destructivos.',
  },
  {
    icon: CheckCircle,
    title: 'Compromiso con la Calidad',
    description:
      'Sistema de gestión certificado que asegura la consistencia y confiabilidad de nuestros dictámenes.',
  },
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function AboutPageContent() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyUsRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true, margin: '-50px' });
  const isWhyUsInView = useInView(whyUsRef, { once: true, margin: '-50px' });
  const isCtaInView = useInView(ctaRef, { once: true });

  return (
    <div className="min-h-screen">
      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section
        ref={heroRef}
        className="relative py-24 md:py-32 bg-gradient-to-b from-sinpetca-navy via-sinpetca-navy-dark to-industrial-dark overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sinpetca-orange/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sinpetca-blue/20 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sinpetca-orange/10 border border-sinpetca-orange/30 rounded-full text-sinpetca-orange text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Conózcanos
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Sobre <span className="text-sinpetca-orange">SINPETCA</span>
            </h1>

            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
              Servicios de Inspección Petrolera C.A. - Más de tres décadas dedicados a garantizar
              la seguridad e integridad de activos industriales con los más altos estándares de
              calidad.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-sinpetca-navy-light/30 rounded-xl flex items-center justify-center mx-auto mb-3 border border-sinpetca-navy-light/50">
                      <IconComponent className="w-5 h-5 text-sinpetca-orange" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                      {item.value}
                    </div>
                    <div className="text-text-muted text-sm">{item.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INTRODUCTION SECTION */}
      {/* ================================================================== */}
      <section ref={introRef} className="py-24 bg-industrial-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-sinpetca-navy/30 border border-sinpetca-navy/50 rounded-full text-sinpetca-blue text-sm font-medium mb-4">
                  Quiénes Somos
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                  Una Empresa con <span className="text-sinpetca-orange">Propósito</span>
                </h2>
              </div>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  <strong className="text-text-primary">SINPETCA</strong> (Servicios de Inspección
                  Petrolera C.A.) es una empresa venezolana fundada en 1988, especializada en
                  servicios de inspección industrial de alta calidad. A lo largo de más de tres
                  décadas, nos hemos consolidado como un referente en el sector, brindando
                  soluciones integrales para las industrias petrolera, petroquímica, naval y
                  aeronáutica.
                </p>

                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Nuestra fortaleza radica en la combinación de <span className="text-sinpetca-orange">experiencia comprobada</span>,{' '}
                  <span className="text-sinpetca-orange">tecnología de vanguardia</span> y un{' '}
                  <span className="text-sinpetca-orange">equipo humano altamente calificado</span>.
                  Contamos con inspectores certificados internacionalmente en diversas disciplinas,
                  respaldados por un sistema de gestión acreditado bajo la norma ISO/IEC 17020.
                </p>

                <p className="text-text-secondary text-lg leading-relaxed">
                  Nuestro compromiso va más allá de la simple inspección: trabajamos como socios
                  estratégicos de nuestros clientes, contribuyendo a la optimización de sus
                  operaciones, la extensión de la vida útil de sus activos y, sobre todo, a la
                  seguridad de su personal y el medio ambiente.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MISSION, VISION & VALUES */}
      {/* ================================================================== */}
      <MissionVision />

      {/* ================================================================== */}
      {/* COMPANY TIMELINE */}
      {/* ================================================================== */}
      <CompanyTimeline />

      {/* ================================================================== */}
      {/* TEAM SECTION */}
      {/* ================================================================== */}
      <TeamSection />

      {/* ================================================================== */}
      {/* WHY CHOOSE US */}
      {/* ================================================================== */}
      <section ref={whyUsRef} className="py-24 bg-industrial-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sinpetca-navy/20 rounded-full blur-[200px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-sinpetca-orange/10 border border-sinpetca-orange/30 rounded-full text-sinpetca-orange text-sm font-medium mb-4">
              Nuestras Fortalezas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              ¿Por qué elegir <span className="text-sinpetca-orange">SINPETCA</span>?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Razones que nos convierten en el socio ideal para sus necesidades de inspección
              industrial
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isWhyUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-full p-6 bg-surface-primary border border-industrial-gray-medium rounded-xl hover:border-sinpetca-navy/50 transition-colors">
                    <div className="w-12 h-12 bg-sinpetca-navy/30 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-sinpetca-orange" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA SECTION */}
      {/* ================================================================== */}
      <section
        ref={ctaRef}
        className="py-24 bg-gradient-to-b from-sinpetca-navy to-sinpetca-navy-dark relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sinpetca-orange/10 rounded-full blur-[200px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Users className="w-16 h-16 text-sinpetca-orange mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              ¿Listo para Trabajar con Nosotros?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Únase a las empresas líderes que confían en SINPETCA para la inspección y
              mantenimiento de la integridad de sus activos industriales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sinpetca-orange text-industrial-dark font-semibold rounded-xl hover:bg-sinpetca-orange-light transition-colors"
              >
                Contáctenos
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-text-secondary text-text-primary font-semibold rounded-xl hover:border-sinpetca-orange hover:text-sinpetca-orange transition-colors"
              >
                Explorar Servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
