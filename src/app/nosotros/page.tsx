/**
 * About Us Page - SINPETCA
 *
 * Complete page with:
 * - Company overview and introduction
 * - Mission, Vision & Values
 * - Company history timeline
 * - Leadership team
 * - Why choose us section
 */

import type { Metadata } from 'next';
import AboutPageContent from './AboutPageContent';
import { COMPANY_EXPERIENCE_COPY, getCanonicalUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    `Conozca la historia de SINPETCA, nuestra misión, visión y el equipo de profesionales que nos respalda. ${COMPANY_EXPERIENCE_COPY} de excelencia en inspección industrial.`,
  alternates: {
    canonical: getCanonicalUrl('/nosotros'),
  },
  openGraph: {
    title: 'Sobre Nosotros | SINPETCA',
    description:
      `${COMPANY_EXPERIENCE_COPY} de excelencia en servicios de inspección industrial. Conozca nuestra historia, equipo y compromiso con la calidad.`,
    type: 'website',
  },
};

export default function NosotrosPage() {
  return <AboutPageContent />;
}
