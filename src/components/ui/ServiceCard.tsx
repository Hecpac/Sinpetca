'use client';

/**
 * ServiceCard Component
 * 
 * High-performance service card with:
 * - Micro-interactions (hover effects) for engagement
 * - Lazy loading for optimized INP (Interaction to Next Paint)
 * - Framer Motion for smooth animations
 * - Accessible design patterns
 */

import { memo, useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, type LucideIcon } from 'lucide-react';

// Types
export interface ServiceCardProps {
  /** Service title */
  title: string;
  /** Short description of the service */
  description: string;
  /** URL to navigate to when clicking the card */
  href: string;
  /** Lucide icon component to display */
  icon: LucideIcon;
  /** Optional image URL for the card background */
  image?: string;
  /** Optional image alt text */
  imageAlt?: string;
  /** Optional accent color variant */
  variant?: 'default' | 'featured' | 'compact';
  /** Optional custom class names */
  className?: string;
  /** Optional delay for staggered animations (in seconds) */
  animationDelay?: number;
}

/**
 * Animation variants for the card
 */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
};

/**
 * Animation variants for the icon
 */
const iconVariants = {
  rest: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
};

/**
 * Animation variants for the arrow
 */
const arrowVariants = {
  rest: {
    x: 0,
    opacity: 0.7,
  },
  hover: {
    x: 5,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
};

/**
 * Animation variants for the glow effect
 */
const glowVariants = {
  rest: {
    opacity: 0,
    scale: 0.8,
  },
  hover: {
    opacity: 0.15,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

/**
 * ServiceCard Component
 */
export const ServiceCard = memo(function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  image,
  imageAlt,
  variant = 'default',
  className = '',
  animationDelay = 0,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Intersection observer for lazy loading
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px',
  });

  // Handlers
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // Variant-specific styles
  const variantStyles = {
    default: 'min-h-[280px]',
    featured: 'min-h-[350px] md:col-span-2',
    compact: 'min-h-[200px]',
  };

  return (
    <motion.article
      ref={ref}
      variants={prefersReducedMotion ? undefined : cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={prefersReducedMotion ? undefined : 'hover'}
      custom={animationDelay}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative group overflow-hidden rounded-xl
        bg-surface-primary border border-industrial-gray-medium
        transition-shadow duration-300
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        focus-within:ring-2 focus-within:ring-sinpetca-orange focus-within:ring-offset-2 focus-within:ring-offset-industrial-dark
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {/* Background Glow Effect */}
      <motion.div
        variants={prefersReducedMotion ? undefined : glowVariants}
        initial="rest"
        animate={isHovered ? 'hover' : 'rest'}
        className="absolute inset-0 bg-gradient-to-br from-sinpetca-orange via-transparent to-sinpetca-blue pointer-events-none"
        aria-hidden="true"
      />

      {/* Optional Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-industrial-dark/80 to-transparent" />
        </div>
      )}

      {/* Content */}
      <Link
        href={href}
        className="relative z-10 flex flex-col h-full p-6 md:p-8 focus:outline-none"
      >
        {/* Icon Container */}
        <motion.div
          variants={prefersReducedMotion ? undefined : iconVariants}
          initial="rest"
          animate={isHovered ? 'hover' : 'rest'}
          className="
            w-14 h-14 mb-5 rounded-lg
            bg-sinpetca-navy/50 border border-sinpetca-navy
            flex items-center justify-center
            group-hover:bg-sinpetca-orange/20 group-hover:border-sinpetca-orange
            transition-colors duration-300
          "
        >
          <Icon
            className="w-7 h-7 text-sinpetca-orange"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3 group-hover:text-sinpetca-orange transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm md:text-base leading-relaxed flex-grow">
          {description}
        </p>

        {/* CTA Link */}
        <div className="flex items-center mt-5 text-sinpetca-orange font-medium">
          <span className="text-sm">Conocer más</span>
          <motion.span
            variants={prefersReducedMotion ? undefined : arrowVariants}
            initial="rest"
            animate={isHovered ? 'hover' : 'rest'}
            className="ml-2 inline-flex"
          >
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </motion.span>
        </div>

        {/* Accent Border on Hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sinpetca-orange to-sinpetca-blue"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          aria-hidden="true"
        />
      </Link>
    </motion.article>
  );
});

/**
 * ServiceCardSkeleton - Loading placeholder
 */
export const ServiceCardSkeleton = memo(function ServiceCardSkeleton({
  variant = 'default',
}: {
  variant?: 'default' | 'featured' | 'compact';
}) {
  const variantStyles = {
    default: 'min-h-[280px]',
    featured: 'min-h-[350px] md:col-span-2',
    compact: 'min-h-[200px]',
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl
        bg-surface-primary border border-industrial-gray-medium
        animate-pulse
        ${variantStyles[variant]}
      `}
      aria-label="Loading service card"
    >
      <div className="p-6 md:p-8">
        {/* Icon skeleton */}
        <div className="w-14 h-14 mb-5 rounded-lg bg-industrial-gray-medium" />
        
        {/* Title skeleton */}
        <div className="h-7 w-3/4 bg-industrial-gray-medium rounded mb-3" />
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-industrial-gray-medium rounded" />
          <div className="h-4 w-5/6 bg-industrial-gray-medium rounded" />
          <div className="h-4 w-4/6 bg-industrial-gray-medium rounded" />
        </div>

        {/* CTA skeleton */}
        <div className="h-5 w-24 bg-industrial-gray-medium rounded mt-5" />
      </div>
    </div>
  );
});

/**
 * ServiceCardGrid - Grid container for service cards
 */
interface ServiceCardGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const ServiceCardGrid = memo(function ServiceCardGrid({
  children,
  columns = 3,
  className = '',
}: ServiceCardGridProps) {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div
      className={`
        grid grid-cols-1 ${columnClasses[columns]}
        gap-6 md:gap-8
        ${className}
      `}
    >
      {children}
    </div>
  );
});

export default ServiceCard;
