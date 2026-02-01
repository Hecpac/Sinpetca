/**
 * Schema.org Types for SINPETCA JSON-LD Structured Data
 * Based on Google Search Central guidelines for 2026 SEO standards
 */

// Organization Schema Type
export interface OrganizationSchema {
  '@type': 'Organization';
  name: string;
  alternateName?: string;
  url: string;
  logo: string;
  description: string;
  foundingDate?: string;
  founders?: PersonSchema[];
  address: PostalAddressSchema;
  contactPoint: ContactPointSchema[];
  sameAs?: string[];
  areaServed?: string[];
  award?: string[];
  numberOfEmployees?: {
    '@type': 'QuantitativeValue';
    minValue?: number;
    maxValue?: number;
  };
  slogan?: string;
  knowsAbout?: string[];
}

// LocalBusiness Schema Type
export interface LocalBusinessSchema {
  '@type': 'LocalBusiness' | 'ProfessionalService';
  name: string;
  image: string | string[];
  url: string;
  telephone: string;
  email?: string;
  address: PostalAddressSchema;
  geo?: GeoCoordinatesSchema;
  openingHoursSpecification?: OpeningHoursSchema[];
  priceRange?: string;
  description: string;
  hasOfferCatalog?: OfferCatalogSchema;
  aggregateRating?: AggregateRatingSchema;
  review?: ReviewSchema[];
  areaServed?: AreaServedSchema[];
}

// Service Schema Type
export interface ServiceSchema {
  '@type': 'Service' | 'ProfessionalService';
  name: string;
  description: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  serviceType?: string;
  areaServed?: AreaServedSchema[];
  hasOfferCatalog?: OfferCatalogSchema;
  offers?: OfferSchema[];
  image?: string | string[];
  url?: string;
  category?: string;
  audience?: {
    '@type': 'Audience';
    audienceType: string;
  };
  serviceOutput?: {
    '@type': 'Thing';
    name: string;
    description: string;
  };
  termsOfService?: string;
  award?: string[];
  isRelatedTo?: ServiceSchema[];
}

// PostalAddress Schema
export interface PostalAddressSchema {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
}

// ContactPoint Schema
export interface ContactPointSchema {
  '@type': 'ContactPoint';
  telephone: string;
  contactType: string;
  email?: string;
  areaServed?: string | string[];
  availableLanguage?: string | string[];
  hoursAvailable?: OpeningHoursSchema;
}

// GeoCoordinates Schema
export interface GeoCoordinatesSchema {
  '@type': 'GeoCoordinates';
  latitude: number;
  longitude: number;
}

// OpeningHours Schema
export interface OpeningHoursSchema {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
}

// OfferCatalog Schema
export interface OfferCatalogSchema {
  '@type': 'OfferCatalog';
  name: string;
  itemListElement: OfferSchema[];
}

// Offer Schema
export interface OfferSchema {
  '@type': 'Offer';
  itemOffered: {
    '@type': 'Service';
    name: string;
    description?: string;
  };
  priceCurrency?: string;
  price?: string | number;
  priceSpecification?: {
    '@type': 'PriceSpecification';
    priceCurrency: string;
    price: string;
  };
  eligibleRegion?: string | AreaServedSchema;
}

// AreaServed Schema
export interface AreaServedSchema {
  '@type': 'Country' | 'State' | 'City' | 'GeoCircle';
  name?: string;
  geoMidpoint?: GeoCoordinatesSchema;
  geoRadius?: string;
}

// AggregateRating Schema
export interface AggregateRatingSchema {
  '@type': 'AggregateRating';
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  ratingCount: number;
  reviewCount?: number;
}

// Review Schema
export interface ReviewSchema {
  '@type': 'Review';
  author: PersonSchema;
  datePublished: string;
  reviewBody: string;
  reviewRating: {
    '@type': 'Rating';
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
  };
}

// Person Schema
export interface PersonSchema {
  '@type': 'Person';
  name: string;
  jobTitle?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
}

// WebPage Schema
export interface WebPageSchema {
  '@type': 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';
  name: string;
  description: string;
  url: string;
  inLanguage?: string;
  isPartOf?: {
    '@type': 'WebSite';
    name: string;
    url: string;
  };
  breadcrumb?: BreadcrumbSchema;
  mainEntity?: OrganizationSchema | ServiceSchema | LocalBusinessSchema;
  speakable?: {
    '@type': 'SpeakableSpecification';
    cssSelector: string[];
  };
}

// Breadcrumb Schema
export interface BreadcrumbSchema {
  '@type': 'BreadcrumbList';
  itemListElement: BreadcrumbItemSchema[];
}

export interface BreadcrumbItemSchema {
  '@type': 'ListItem';
  position: number;
  name: string;
  item?: string;
}

// FAQPage Schema
export interface FAQPageSchema {
  '@type': 'FAQPage';
  mainEntity: FAQItemSchema[];
}

export interface FAQItemSchema {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

// Combined Schema wrapper
export interface SchemaGraphWrapper {
  '@context': 'https://schema.org';
  '@graph': (
    | OrganizationSchema
    | LocalBusinessSchema
    | ServiceSchema
    | WebPageSchema
    | BreadcrumbSchema
    | FAQPageSchema
  )[];
}

// Props for SchemaMarkup component
export interface SchemaMarkupProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'WebPage' | 'Breadcrumb' | 'FAQ';
  data: 
    | OrganizationSchema 
    | LocalBusinessSchema 
    | ServiceSchema 
    | WebPageSchema 
    | BreadcrumbSchema 
    | FAQPageSchema;
}

export interface MultiSchemaMarkupProps {
  schemas: SchemaMarkupProps[];
}
