'use client';

/**
 * Certification Timeline Component
 * Shows the history of certifications obtained over time
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  certification?: string;
  highlight?: boolean;
}

interface CertificationTimelineProps {
  events: TimelineEvent[];
}

export default function CertificationTimeline({ events }: CertificationTimelineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sinpetca-navy/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sinpetca-orange/10 rounded-full blur-[150px]" />

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
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Historia de <span className="text-sinpetca-orange">Certificaciones</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Un compromiso constante con la excelencia y la mejora continua a lo largo de más de tres décadas
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sinpetca-orange via-sinpetca-navy to-industrial-gray-medium transform md:-translate-x-1/2" />

          {events.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      event.highlight
                        ? 'bg-sinpetca-orange text-industrial-dark'
                        : 'bg-industrial-gray border-2 border-sinpetca-navy text-sinpetca-blue'
                    }`}
                  >
                    {event.highlight ? (
                      <Award className="w-5 h-5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div
                    className={`p-6 bg-surface-primary border rounded-xl transition-all duration-300 hover:border-sinpetca-orange/50 ${
                      event.highlight
                        ? 'border-sinpetca-orange/30 shadow-[0_0_30px_rgba(245,166,35,0.1)]'
                        : 'border-industrial-gray-medium'
                    }`}
                  >
                    {/* Year badge */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                        event.highlight
                          ? 'bg-sinpetca-orange/20 text-sinpetca-orange'
                          : 'bg-sinpetca-navy/30 text-sinpetca-blue'
                      }`}
                    >
                      {event.year}
                    </span>

                    <h3 className="text-xl font-bold text-text-primary mb-2">{event.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-3">
                      {event.description}
                    </p>

                    {event.certification && (
                      <div className="flex items-center gap-2 pt-3 border-t border-industrial-gray-medium">
                        <Award className="w-4 h-4 text-sinpetca-orange" />
                        <span className="text-sinpetca-orange text-sm font-medium">
                          {event.certification}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
