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

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conozca la historia de SINPETCA, nuestra misión, visión y el equipo de profesionales que nos respalda. Más de 35 años de excelencia en inspección industrial.',
  alternates: {
    canonical: 'https://sinpetca.com/nosotros',
  },
  openGraph: {
    title: 'Sobre Nosotros | SINPETCA',
    description:
      'Más de 35 años de excelencia en servicios de inspección industrial. Conozca nuestra historia, equipo y compromiso con la calidad.',
    type: 'website',
  },
};

export default function NosotrosPage() {
  return <AboutPageContent />;
}
