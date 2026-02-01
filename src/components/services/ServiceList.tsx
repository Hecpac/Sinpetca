'use client';

/**
 * Service List Component
 * Displays a list of services with icons and descriptions
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  CheckCircle2,
  Shield,
  Gauge,
  Pipette,
  FlaskConical,
  Ship,
  Anchor,
  Container,
  Ruler,
  Plane,
  Cog,
  ScanLine,
  Waves,
  Radio,
  Droplets,
  Magnet,
  Thermometer,
  Eye,
  type LucideIcon,
} from 'lucide-react';

// Icon mapping for serialization
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Gauge,
  Pipette,
  FlaskConical,
  Ship,
  Anchor,
  Container,
  Ruler,
  Plane,
  Cog,
  ScanLine,
  Waves,
  Radio,
  Droplets,
  Magnet,
  Thermometer,
  Eye,
};

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  iconName: string; // Changed from icon: LucideIcon to iconName: string
}

interface ServiceListProps {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export default function ServiceList({ title, subtitle, services }: ServiceListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 bg-industrial-gray">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sinpetca-orange/10 border border-sinpetca-orange/30 rounded-full text-sinpetca-orange text-sm font-medium mb-4">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {title}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Shield;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-surface-primary border border-industrial-gray-medium rounded-2xl hover:border-sinpetca-navy transition-colors duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-sinpetca-navy/30 border border-sinpetca-navy/50 flex items-center justify-center flex-shrink-0 group-hover:bg-sinpetca-orange/20 group-hover:border-sinpetca-orange transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-sinpetca-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-sinpetca-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 pl-[4.5rem]">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sinpetca-orange flex-shrink-0 mt-0.5" />
                      <span className="text-text-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
