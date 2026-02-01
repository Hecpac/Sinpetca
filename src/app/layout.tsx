import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

// Layout Components
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// SEO Components
import { OrganizationMarkup } from '@/components/seo/SchemaMarkup';
import { sinpetcaOrganization } from '@/lib/schema-data';

// Montserrat - Primary Font for SINPETCA
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
});

// SEO Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://sinpetca.com'),
  title: {
    default: 'SINPETCA, C.A. | Servicios de Inspección y Ensayos No Destructivos',
    template: '%s | SINPETCA, C.A.',
  },
  description:
    'Empresa líder en inspección industrial y ensayos no destructivos (NDT) para los sectores petrolero, naval y aeronáutico. Certificados ISO 17020 y OMAC-N 667. Más de 35 años de experiencia en Venezuela e internacionalmente.',
  keywords: [
    'inspección industrial',
    'ensayos no destructivos',
    'NDT',
    'inspección petrolera',
    'inspección naval',
    'certificación aeronáutica',
    'ultrasonido industrial',
    'rayos X industrial',
    'líquidos penetrantes',
    'partículas magnéticas',
    'ISO 17020',
    'OMAC',
    'API',
    'ASME',
    'Venezuela',
    'inspección de soldaduras',
    'certificación de grúas',
    'medición de espesores',
  ],
  authors: [{ name: 'SINPETCA, C.A.' }],
  creator: 'SINPETCA, C.A.',
  publisher: 'SINPETCA, C.A.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_VE',
    alternateLocale: 'en_US',
    url: 'https://sinpetca.com',
    siteName: 'SINPETCA, C.A.',
    title: 'SINPETCA, C.A. | Servicios de Inspección y Ensayos No Destructivos',
    description:
      'Empresa líder en inspección industrial y ensayos no destructivos (NDT) para los sectores petrolero, naval y aeronáutico.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SINPETCA - Inspección Industrial y NDT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SINPETCA, C.A. | Inspección Industrial y NDT',
    description:
      'Servicios de inspección y ensayos no destructivos para sectores petrolero, naval y aeronáutico.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual code
  },
  alternates: {
    canonical: 'https://sinpetca.com',
    languages: {
      'es-VE': 'https://sinpetca.com',
      'en-US': 'https://sinpetca.com/en',
    },
  },
  category: 'Industrial Services',
};

// Viewport Configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0D3B66' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Global Organization Schema for entire site */}
        <OrganizationMarkup organization={sinpetcaOrganization} />
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased bg-industrial-dark text-text-primary min-h-screen flex flex-col`}
      >
        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sinpetca-orange focus:text-industrial-dark focus:rounded-lg focus:font-semibold"
        >
          Saltar al contenido principal
        </a>

        {/* Navigation Header */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
