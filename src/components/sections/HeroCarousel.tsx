'use client';

/**
 * Hero Carousel Component - SINPETCA
 *
 * Features:
 * - 3 slides full-screen carousel
 * - Auto-play with pause on hover
 * - Keyboard navigation
 * - Touch/swipe support
 * - Staggered animations
 * - Project cards grid
 * - Social proof section
 * - Fully accessible (WCAG AA)
 * - Reduced motion support
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Plus,
  Shield,
  Award,
} from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

// ============================================================================
// TYPES
// ============================================================================

interface Slide {
  id: number;
  eyebrow: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  projects: {
    image: string;
    label: string;
  }[];
}

// ============================================================================
// DATA
// ============================================================================

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: 'INSPECCIÓN INDUSTRIAL',
    headline: 'Precisión y Confiabilidad en Cada Inspección',
    description:
      'Más de 35 años garantizando la integridad de activos industriales con tecnología de vanguardia y certificaciones internacionales.',
    ctaText: 'Solicitar Cotización',
    ctaLink: '/contacto',
    backgroundImage: '/images/hero/hero-ndt.jpg',
    projects: [
      { image: '/images/proyectos/tanques-stalco.jpg', label: 'Tanques de Almacenamiento' },
      { image: '/images/proyectos/tuberia-enterrada.jpg', label: 'Inspección de Tuberías' },
      { image: '/images/proyectos/medicion-espesores.jpg', label: 'Ensayos NDT' },
    ],
  },
  {
    id: 2,
    eyebrow: 'SECTOR PETROLERO',
    headline: 'Especialistas en la Industria del Petróleo y Gas',
    description:
      'Servicios certificados API para tanques, tuberías y equipos a presión. Maximizamos la vida útil de sus activos con inspecciones precisas.',
    ctaText: 'Ver Servicios',
    ctaLink: '/servicios/petrolera',
    backgroundImage: '/images/hero/hero-petrolera.jpg',
    projects: [
      { image: '/images/proyectos/excavacion-faja.jpg', label: 'Proyectos en Faja' },
      { image: '/images/proyectos/whp-petrosucre.jpg', label: 'Plataformas Offshore' },
      { image: '/images/proyectos/ndt-estructural.jpg', label: 'Integridad Estructural' },
    ],
  },
  {
    id: 3,
    eyebrow: 'CERTIFICACIÓN INDUSTRIAL',
    headline: 'Equipos de Izaje Certificados',
    description:
      'Certificación de grúas, equipos de izaje y maquinaria pesada bajo estándares internacionales. Garantizamos la seguridad operacional de sus activos.',
    ctaText: 'Ver Certificaciones',
    ctaLink: '/servicios/naval',
    backgroundImage: '/images/hero/hero-industrial.jpg',
    projects: [
      { image: '/images/proyectos/avior-emergencia.jpg', label: 'Inspección de Aeronaves' },
      { image: '/images/proyectos/sasca-boroscopia.jpg', label: 'Boroscopia de Motores' },
      { image: '/images/proyectos/turbinas-pertigalete.jpg', label: 'Turbinas Industriales' },
    ],
  },
];

const clientAvatars = [
  { id: 1, image: '/images/avatars/client-1.jpg', name: 'Cliente 1' },
  { id: 2, image: '/images/avatars/client-2.jpg', name: 'Cliente 2' },
  { id: 3, image: '/images/avatars/client-3.jpg', name: 'Cliente 3' },
];

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    opacity: 1,
    x: 0,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? 100 : -100,
    zIndex: 0,
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

// ============================================================================
// COMPONENT
// ============================================================================

export default function HeroCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const backgroundY = useParallax(sectionRef, { distance: 40, mobileDistance: 14 });

  // Auto-play
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, isAnimating, prefersReducedMotion]);

  const goToNextSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [isAnimating]);

  const goToPrevSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [isAnimating]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentSlide) return;
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [isAnimating, currentSlide]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'ArrowRight') {
        goToNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] sm:min-h-[700px] max-h-[1200px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Presentación de servicios de SINPETCA"
    >
      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={prefersReducedMotion ? {} : slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <motion.div
            style={{ y: prefersReducedMotion ? 0 : backgroundY }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlideData.backgroundImage}
              alt={currentSlideData.headline}
              fill
              priority={currentSlide === 0}
              fetchPriority={currentSlide === 0 ? 'high' : 'auto'}
              loading="eager"
              quality={70}
              className="object-cover"
              sizes="100vw"
            />
            {/* Overlay - rgba(0,0,0,0.5-0.6) as per spec */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 sm:px-5 md:px-10 lg:px-20">
        <div className="h-full flex items-center">
          <div className="w-full">
            {/* Content */}
            <div className="flex flex-col justify-center max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {/* Eyebrow */}
                  <motion.span
                    custom={0.2}
                    variants={contentVariants}
                    className="inline-block text-sinpetca-orange text-xs md:text-sm font-semibold uppercase tracking-[2px] mb-4"
                  >
                    {currentSlideData.eyebrow}
                  </motion.span>

                  {/* Headline */}
                  <motion.h1
                    custom={0.4}
                    variants={contentVariants}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-[1.1] mb-6 max-w-[600px]"
                  >
                    {currentSlideData.headline}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    custom={0.6}
                    variants={contentVariants}
                    className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-[520px]"
                  >
                    {currentSlideData.description}
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div custom={0.8} variants={contentVariants}>
                    <Link
                      href={currentSlideData.ctaLink}
                      className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-sinpetca-orange hover:bg-sinpetca-orange-dark text-industrial-dark font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 shadow-lg shadow-sinpetca-orange/25 hover:shadow-sinpetca-orange/40 hover:scale-105 min-h-[48px]"
                    >
                      {currentSlideData.ctaText}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  {/* Social Proof */}
                  <motion.div
                    custom={1.0}
                    variants={contentVariants}
                    className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12"
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-sinpetca-orange fill-sinpetca-orange" />
                      <span className="text-text-primary text-xs sm:text-sm font-medium">
                        Calificación 4.9/5
                      </span>
                      <span className="text-text-muted text-xs sm:text-sm">de +500 proyectos</span>
                    </div>

                    {/* Separator */}
                    <div className="hidden md:block w-px h-8 bg-industrial-gray-medium" />

                    {/* Client Avatars */}
                    <div className="flex items-center">
                      <div className="flex -space-x-2 sm:-space-x-3">
                        {clientAvatars.map((avatar, index) => (
                          <div
                            key={avatar.id}
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden"
                            style={{ zIndex: clientAvatars.length - index }}
                          >
                            <Image
                              src={avatar.image}
                              alt={avatar.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-sinpetca-orange flex items-center justify-center">
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-industrial-dark" />
                        </div>
                      </div>
                      <span className="ml-3 sm:ml-4 text-text-secondary text-xs sm:text-sm">+100 clientes</span>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

                      </div>
        </div>
      </div>

      {/* Slide Indicators - Touch-friendly 44px minimum */}
      <div
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1"
        role="tablist"
        aria-label="Indicadores de slides"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className="relative w-11 h-11 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sinpetca-orange focus-visible:ring-offset-2 focus-visible:ring-offset-industrial-dark"
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Ir al slide ${index + 1}`}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-sinpetca-orange w-8 h-3'
                : 'bg-white/30 hover:bg-white/50 w-3 h-3'
                }`}
            />
          </button>
        ))}
      </div>

      {/* Trust Badges - Bottom Left */}
      <div className="absolute bottom-20 sm:bottom-8 md:bottom-10 left-5 md:left-10 z-20 flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
          <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sinpetca-orange" />
          <span className="text-text-primary text-[10px] sm:text-xs font-medium">ISO 17020</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
          <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sinpetca-orange" />
          <span className="text-text-primary text-[10px] sm:text-xs font-medium">+35 Años</span>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sinpetca-orange/50 to-transparent z-20" />
    </section>
  );
}
