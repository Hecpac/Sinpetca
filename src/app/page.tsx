/**
 * SINPETCA Homepage
 * 
 * A high-impact landing page showcasing:
 * - Hero: Main value proposition with animated elements
 * - Services: Overview of core industrial inspection services
 * - Stats: Key company statistics with animated counters
 * - Clients: Trusted partners carousel
 * - CTA: Lead generation call-to-action
 */

import type { Metadata } from 'next';
import { CompletePageSchema } from '@/components/seo/SchemaMarkup';
import { sinpetcaOrganization } from '@/lib/schema-data';
import type { WebPageSchema } from '@/types/schema';

// Section Components
import HeroCarousel from '@/components/sections/HeroCarousel';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import Projects from '@/components/sections/Projects';
import Clients from '@/components/sections/Clients';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'SINPETCA, C.A. | Inspección Industrial y Ensayos No Destructivos',
  description:
    'Líderes en servicios de inspección industrial y ensayos no destructivos (NDT) para los sectores petrolero, naval y aeronáutico. Más de 12 años de excelencia. Certificados ISO 17020.',
  alternates: {
    canonical: 'https://sinpetca.com',
  },
};

// WebPage Schema for the homepage
const homePageSchema: WebPageSchema = {
  '@type': 'WebPage',
  name: 'SINPETCA - Servicios de Inspección Industrial y Ensayos No Destructivos',
  description:
    'Empresa líder en inspección industrial y ensayos no destructivos para sectores petrolero, naval y aeronáutico. Certificados ISO 17020.',
  url: 'https://sinpetca.com',
  inLanguage: 'es-VE',
  isPartOf: {
    '@type': 'WebSite',
    name: 'SINPETCA, C.A.',
    url: 'https://sinpetca.com',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.hero-description'],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Schema Markup for SEO */}
      <CompletePageSchema
        organization={sinpetcaOrganization}
        page={homePageSchema}
        breadcrumbs={[{ name: 'Inicio', url: 'https://sinpetca.com' }]}
      />

      <div className="home-flow relative">
        {/* Sticky Hero Section (Section 1) */}
        <div className="sticky top-0 h-screen min-h-[600px] sm:min-h-[700px] max-h-[1200px] w-full z-0 overflow-hidden">
          <HeroCarousel />
        </div>

        {/* Content over Hero (Section 2 onwards acting like a card sliding up) */}
        <div className="relative z-10 bg-industrial-gray rounded-t-[2.5rem] sm:rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/10 overflow-hidden">
          {/* Services Overview */}
          <Services />

          {/* Company Statistics */}
          <Stats />

          {/* Featured Projects */}
          <Projects />

          {/* Trusted Clients */}
          <Clients />

          {/* Call to Action */}
          <CTASection />
        </div>
      </div>
    </>
  );
}
