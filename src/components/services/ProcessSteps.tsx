'use client';

/**
 * Process Steps Component
 * Shows the inspection methodology/workflow
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FileText,
  Search,
  ClipboardCheck,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  FileText,
  Search,
  ClipboardCheck,
  CheckCircle,
};

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

interface ProcessStepsProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export default function ProcessSteps({ title, subtitle, steps }: ProcessStepsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 bg-industrial-dark relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-sinpetca-navy/20 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-sinpetca-orange/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sinpetca-navy/30 border border-sinpetca-navy/50 rounded-full text-sinpetca-blue text-sm font-medium mb-4">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {title}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-industrial-gray-medium to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = iconMap[step.iconName] || FileText;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step number */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-industrial-gray border border-industrial-gray-medium flex items-center justify-center relative z-10">
                      <IconComponent className="w-8 h-8 text-sinpetca-orange" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-sinpetca-orange text-industrial-dark rounded-lg flex items-center justify-center text-sm font-bold z-20">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
