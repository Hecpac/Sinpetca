'use client';

/**
 * Certification Card Component
 * Detailed card for each certification with expanded information
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ChevronDown,
  CheckCircle,
  Globe,
  Target,
  FileText,
  type LucideIcon,
} from 'lucide-react';

export interface CertificationDetails {
  id: string;
  name: string;
  fullName: string;
  logo?: string;
  description: string;
  issuingBody: string;
  scope: string[];
  benefits: string[];
  standards: string[];
  internationalRecognition: boolean;
  status: 'vigente' | 'renovacion';
}

interface CertificationCardProps {
  certification: CertificationDetails;
  index: number;
  isInView: boolean;
}

export default function CertificationCard({
  certification,
  index,
  isInView,
}: CertificationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`bg-surface-primary border rounded-xl overflow-hidden transition-all duration-300 ${
          isExpanded
            ? 'border-sinpetca-orange/50 shadow-[0_0_40px_rgba(245,166,35,0.15)]'
            : 'border-industrial-gray-medium hover:border-sinpetca-navy/50'
        }`}
      >
        {/* Main Card Header */}
        <div
          className="p-6 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              {/* Icon/Logo */}
              <div className="w-16 h-16 bg-gradient-to-br from-sinpetca-navy to-sinpetca-navy-dark rounded-xl flex items-center justify-center flex-shrink-0 border border-sinpetca-navy-light/30">
                <Award className="w-8 h-8 text-sinpetca-orange" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-text-primary">{certification.name}</h3>
                  {certification.internationalRecognition && (
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-sinpetca-blue/20 rounded-full">
                      <Globe className="w-3 h-3 text-sinpetca-blue" />
                      <span className="text-sinpetca-blue text-xs font-medium">Internacional</span>
                    </div>
                  )}
                </div>
                <p className="text-text-muted text-sm mb-3">{certification.fullName}</p>
                <p className="text-text-secondary leading-relaxed">{certification.description}</p>
              </div>
            </div>

            {/* Expand button */}
            <button
              className={`w-10 h-10 flex items-center justify-center rounded-lg bg-industrial-gray-light border border-industrial-gray-medium transition-all duration-300 ${
                isExpanded ? 'bg-sinpetca-orange/20 border-sinpetca-orange/30' : ''
              }`}
            >
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180 text-sinpetca-orange' : 'text-text-muted'
                }`}
              />
            </button>
          </div>

          {/* Status and Issuing Body */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-industrial-gray-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">
                {certification.status === 'vigente' ? 'Certificación Vigente' : 'En Renovación'}
              </span>
            </div>
            <span className="text-text-muted">•</span>
            <span className="text-text-secondary text-sm">
              Emitido por: <span className="text-text-primary">{certification.issuingBody}</span>
            </span>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2 border-t border-industrial-gray-medium bg-industrial-dark/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Scope */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-sinpetca-orange" />
                      <h4 className="text-text-primary font-semibold">Alcance</h4>
                    </div>
                    <ul className="space-y-2">
                      {certification.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-sinpetca-blue mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-sinpetca-orange" />
                      <h4 className="text-text-primary font-semibold">Beneficios</h4>
                    </div>
                    <ul className="space-y-2">
                      {certification.benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Standards */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-sinpetca-orange" />
                      <h4 className="text-text-primary font-semibold">Normas Aplicables</h4>
                    </div>
                    <ul className="space-y-2">
                      {certification.standards.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                          <span className="w-1.5 h-1.5 bg-sinpetca-orange rounded-full mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
