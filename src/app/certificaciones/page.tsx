/**
 * Certifications Page - SINPETCA
 *
 * Comprehensive page displaying:
 * - Company certifications and accreditations
 * - Certification timeline/history
 * - Downloadable documents
 * - Detailed certification information
 */

import type { Metadata } from 'next';
import CertificationsPageContent from './CertificationsPageContent';

export const metadata: Metadata = {
  title: 'Certificaciones',
  description:
    'Certificaciones, referencias normativas y criterio de cumplimiento que respaldan las inspecciones de SINPETCA en activos críticos y equipos industriales.',
  alternates: {
    canonical: 'https://sinpetca.com/certificaciones',
  },
  openGraph: {
    title: 'Certificaciones | SINPETCA',
    description:
      'Conozca cómo SINPETCA estructura cumplimiento, trazabilidad y certificación técnica para inspección industrial y equipos críticos.',
    type: 'website',
  },
};

export default function CertificacionesPage() {
  return <CertificationsPageContent />;
}
