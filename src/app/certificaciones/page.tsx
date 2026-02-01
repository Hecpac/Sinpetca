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
    'Certificaciones y acreditaciones de SINPETCA: ISO 17020, OMAC-N 667, API, ASME. Más de 35 años garantizando calidad y cumplimiento con estándares internacionales.',
  alternates: {
    canonical: 'https://sinpetca.com/certificaciones',
  },
  openGraph: {
    title: 'Certificaciones | SINPETCA',
    description:
      'Conozca nuestras certificaciones internacionales que respaldan más de 35 años de excelencia en inspección industrial.',
    type: 'website',
  },
};

export default function CertificacionesPage() {
  return <CertificationsPageContent />;
}
