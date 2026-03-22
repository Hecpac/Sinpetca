/**
 * SINPETCA Schema Data - Pre-configured JSON-LD data
 * Based on company information from SINPETCA_Brand_Brief.docx
 */

import type {
  OrganizationSchema,
  LocalBusinessSchema,
  ServiceSchema,
  ContactPointSchema,
  PostalAddressSchema,
} from '@/types/schema';
import {
  COMPANY_EXPERIENCE_COPY,
  COMPANY_FOUNDING_YEAR,
  CONTACT_EMAIL,
  CONTACT_PHONE_SCHEMA,
  PRIMARY_OFFICE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from '@/lib/site-config';

// Company Address
export const sinpetcaAddress: PostalAddressSchema = {
  '@type': 'PostalAddress',
  streetAddress: PRIMARY_OFFICE.shortAddress,
  addressLocality: PRIMARY_OFFICE.locality,
  addressRegion: PRIMARY_OFFICE.region,
  postalCode: PRIMARY_OFFICE.postalCode,
  addressCountry: 'VE',
};

// Contact Points
export const sinpetcaContactPoints: ContactPointSchema[] = [
  {
    '@type': 'ContactPoint',
    telephone: CONTACT_PHONE_SCHEMA,
    contactType: 'customer service',
    email: CONTACT_EMAIL,
    areaServed: ['VE', 'CO', 'MX', 'US'],
    availableLanguage: ['Spanish', 'English'],
  },
  {
    '@type': 'ContactPoint',
    telephone: CONTACT_PHONE_SCHEMA,
    contactType: 'sales',
    email: CONTACT_EMAIL,
    areaServed: ['VE', 'CO', 'MX', 'US'],
    availableLanguage: ['Spanish', 'English'],
  },
];

// Main Organization Schema
export const sinpetcaOrganization: OrganizationSchema = {
  '@type': 'Organization',
  name: SITE_NAME,
  alternateName: 'Servicios de Inspección y Ensayos No Destructivos',
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/logo-sinpetca-white.png`,
  description:
    `Empresa líder en servicios de inspección industrial y ensayos no destructivos (NDT) para los sectores petrolero, naval y aeronáutico. ${COMPANY_EXPERIENCE_COPY} de experiencia con certificaciones ISO 17020.`,
  foundingDate: String(COMPANY_FOUNDING_YEAR),
  address: sinpetcaAddress,
  contactPoint: sinpetcaContactPoints,
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.facebook,
  ],
  areaServed: ['Venezuela', 'Colombia', 'México', 'Estados Unidos', 'Caribe'],
  award: [
    'Certificación ISO 17020',
    'Certificación API',
    'Certificación ASME',
  ],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 50,
    maxValue: 100,
  },
  slogan: 'Precisión y Confiabilidad en Inspección Industrial',
  knowsAbout: [
    'Ensayos No Destructivos',
    'Inspección de Soldaduras',
    'Ultrasonido Industrial',
    'Radiografía Industrial',
    'Líquidos Penetrantes',
    'Partículas Magnéticas',
    'Inspección de Tanques API',
    'Certificación Aeronáutica',
    'Inspección Naval',
  ],
};

// LocalBusiness Schema
export const sinpetcaLocalBusiness: LocalBusinessSchema = {
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  image: [
    `${SITE_URL}/images/hero/hero-ndt.jpg`,
    `${SITE_URL}/images/hero/hero-petrolera.jpg`,
  ],
  url: SITE_URL,
  telephone: CONTACT_PHONE_SCHEMA,
  email: CONTACT_EMAIL,
  address: sinpetcaAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.2167, // Update with actual coordinates
    longitude: -64.6333,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
    },
  ],
  priceRange: '$$$',
  description:
    'Servicios profesionales de inspección industrial y ensayos no destructivos para la industria petrolera, naval y aeronáutica.',
  areaServed: [
    { '@type': 'Country', name: 'Venezuela' },
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'Country', name: 'México' },
  ],
};

// Service Schemas
export const petroleumInspectionService: ServiceSchema = {
  '@type': 'ProfessionalService',
  name: 'Inspección Industrial Petrolera',
  description:
    'Servicios especializados de inspección para la industria petrolera incluyendo inspección de soldaduras, tanques API, tuberías y equipos de presión bajo normas API y ASME.',
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  serviceType: 'Industrial Inspection',
  category: 'Petroleum Industry Services',
  url: `${SITE_URL}/servicios/petrolera`,
  areaServed: [
    { '@type': 'Country', name: 'Venezuela' },
    { '@type': 'Country', name: 'Colombia' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Inspección Petrolera',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Inspección de Soldaduras API/ASME',
          description: 'Inspección visual y END de soldaduras según códigos API y ASME',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Inspección de Tanques API 650/653',
          description: 'Inspección completa de tanques de almacenamiento',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Inspección de Tuberías',
          description: 'Evaluación de integridad de sistemas de tuberías',
        },
      },
    ],
  },
  award: ['Certificación API', 'Certificación ASME'],
};

export const navalInspectionService: ServiceSchema = {
  '@type': 'ProfessionalService',
  name: 'Inspección Naval y Marítima',
  description:
    'Servicios de inspección y certificación para embarcaciones, estructuras marítimas, grúas portuarias y equipos navales.',
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  serviceType: 'Naval Inspection',
  category: 'Maritime Industry Services',
  url: `${SITE_URL}/servicios/naval`,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Inspección Naval',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Certificación de Grúas',
          description: 'Certificación y recertificación de grúas portuarias y marítimas',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Medición de Espesores',
          description: 'Medición ultrasónica de espesores en cascos y estructuras',
        },
      },
    ],
  },
};

export const aeronauticalInspectionService: ServiceSchema = {
  '@type': 'ProfessionalService',
  name: 'Inspección Aeronáutica',
  description:
    'Servicios de ensayos no destructivos certificados  para componentes y estructuras aeronáuticas.',
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  serviceType: 'Aeronautical NDT Inspection',
  category: 'Aviation Industry Services',
  url: `${SITE_URL}/servicios/aeronautica`,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Inspección Aeronáutica',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'NDT Aeronáutico',
          description: 'Ensayos no destructivos para componentes de aviación',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Certificación de Componentes',
          description: 'Certificación de integridad estructural aeronáutica',
        },
      },
    ],
  },
};

export const ndtServices: ServiceSchema = {
  '@type': 'ProfessionalService',
  name: 'Ensayos No Destructivos (NDT)',
  description:
    'Servicios completos de ensayos no destructivos: ultrasonido, radiografía, líquidos penetrantes, partículas magnéticas y más.',
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  serviceType: 'Non-Destructive Testing',
  category: 'NDT Services',
  url: `${SITE_URL}/servicios/ndt`,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Métodos de Ensayos No Destructivos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ultrasonido Industrial (UT)',
          description: 'Detección de defectos y medición de espesores por ultrasonido',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Radiografía Industrial (RT)',
          description: 'Inspección por rayos X y rayos gamma',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Líquidos Penetrantes (PT)',
          description: 'Detección de discontinuidades superficiales',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Partículas Magnéticas (MT)',
          description: 'Inspección de materiales ferromagnéticos',
        },
      },
    ],
  },
};

// Export all services as an array
export const allServices: ServiceSchema[] = [
  petroleumInspectionService,
  navalInspectionService,
  aeronauticalInspectionService,
  ndtServices,
];
