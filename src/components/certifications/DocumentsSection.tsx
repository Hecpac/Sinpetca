'use client';

/**
 * Documents Section Component
 * Displays downloadable certification documents
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FileCheck,
  Download,
  Eye,
  Shield,
  Calendar,
  Building2,
  ExternalLink,
} from 'lucide-react';

export interface CertificationDocument {
  id: string;
  name: string;
  certificationBody: string;
  issueDate: string;
  expiryDate: string;
  status: 'vigente' | 'renovacion' | 'expirado';
  documentUrl?: string;
  verificationUrl?: string;
}

interface DocumentsSectionProps {
  documents: CertificationDocument[];
}

const statusConfig = {
  vigente: {
    label: 'Vigente',
    bgColor: 'bg-green-500/20',
    textColor: 'text-green-400',
    borderColor: 'border-green-500/30',
  },
  renovacion: {
    label: 'En Renovación',
    bgColor: 'bg-yellow-500/20',
    textColor: 'text-yellow-400',
    borderColor: 'border-yellow-500/30',
  },
  expirado: {
    label: 'Expirado',
    bgColor: 'bg-red-500/20',
    textColor: 'text-red-400',
    borderColor: 'border-red-500/30',
  },
};

export default function DocumentsSection({ documents }: DocumentsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 bg-industrial-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sinpetca-navy/10 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sinpetca-navy/30 border border-sinpetca-navy/50 rounded-full text-sinpetca-blue text-sm font-medium mb-4">
            Documentación Oficial
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Certificados y <span className="text-sinpetca-orange">Acreditaciones</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Acceda a la documentación oficial de nuestras certificaciones vigentes
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {documents.map((doc, index) => {
            const status = statusConfig[doc.status];

            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 bg-surface-primary border border-industrial-gray-medium rounded-xl hover:border-sinpetca-orange/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-sinpetca-navy/30 rounded-xl flex items-center justify-center">
                        <FileCheck className="w-6 h-6 text-sinpetca-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">{doc.name}</h3>
                        <div className="flex items-center gap-1.5 text-text-muted text-sm">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{doc.certificationBody}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status badge */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${status.bgColor} ${status.textColor}`}
                    >
                      {status.label}
                    </span>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-industrial-dark/50 rounded-lg">
                    <div>
                      <div className="flex items-center gap-1.5 text-text-muted text-xs mb-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Fecha de Emisión</span>
                      </div>
                      <p className="text-text-primary font-medium">{doc.issueDate}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-text-muted text-xs mb-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Fecha de Vencimiento</span>
                      </div>
                      <p className="text-text-primary font-medium">{doc.expiryDate}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {doc.documentUrl && (
                      <a
                        href={doc.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-sinpetca-navy/30 border border-sinpetca-navy/50 rounded-lg text-sinpetca-blue text-sm font-medium hover:bg-sinpetca-navy/50 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Ver Documento</span>
                      </a>
                    )}
                    {doc.verificationUrl && (
                      <a
                        href={doc.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-sinpetca-orange/10 border border-sinpetca-orange/30 rounded-lg text-sinpetca-orange text-sm font-medium hover:bg-sinpetca-orange/20 transition-colors"
                      >
                        <Shield className="w-4 h-4" />
                        <span>Verificar</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verification Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="p-6 bg-sinpetca-navy/20 border border-sinpetca-navy/30 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-sinpetca-navy/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-sinpetca-blue" />
              </div>
              <div>
                <h4 className="text-text-primary font-semibold mb-2">
                  Verificación de Autenticidad
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Todas nuestras certificaciones pueden ser verificadas directamente con los
                  organismos acreditadores. Los enlaces de verificación le permitirán confirmar la
                  validez y el estado actual de cada certificación en los portales oficiales.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
