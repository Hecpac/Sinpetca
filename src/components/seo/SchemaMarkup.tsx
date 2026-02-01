'use client';

/**
 * SchemaMarkup Component - JSON-LD Structured Data for SEO
 * 
 * CRITICAL for 2026 SEO Standards:
 * - Improves visibility in AI-powered search (Google AI Overview, Perplexity, etc.)
 * - Enables rich snippets in search results
 * - Helps search engines understand page content semantically
 * 
 * Based on:
 * - Google Search Central guidelines
 * - Schema.org vocabulary
 * - ALM Corp SEO best practices
 */

import { memo } from 'react';
import type {
  SchemaMarkupProps,
  MultiSchemaMarkupProps,
  OrganizationSchema,
  LocalBusinessSchema,
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
  FAQPageSchema,
} from '@/types/schema';

/**
 * Single Schema Markup Component
 * Renders a single JSON-LD script tag for one schema type
 */
export const SchemaMarkup = memo(function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { '@type': _existingType, ...restData } = data as unknown as Record<string, unknown>;
  
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...restData,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 0),
      }}
    />
  );
});

/**
 * Multi Schema Markup Component
 * Renders multiple schemas using @graph for complex pages
 */
export const MultiSchemaMarkup = memo(function MultiSchemaMarkup({
  schemas,
}: MultiSchemaMarkupProps) {
  const graphData = {
    '@context': 'https://schema.org',
    '@graph': schemas.map(({ type, data }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { '@type': _existingType, ...restData } = data as unknown as Record<string, unknown>;
      return {
        '@type': type,
        ...restData,
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graphData, null, 0),
      }}
    />
  );
});

/**
 * Pre-configured Organization Schema Component
 */
interface OrganizationSchemaProps {
  organization: OrganizationSchema;
}

export const OrganizationMarkup = memo(function OrganizationMarkup({
  organization,
}: OrganizationSchemaProps) {
  return <SchemaMarkup type="Organization" data={organization} />;
});

/**
 * Pre-configured LocalBusiness Schema Component
 */
interface LocalBusinessSchemaProps {
  business: LocalBusinessSchema;
}

export const LocalBusinessMarkup = memo(function LocalBusinessMarkup({
  business,
}: LocalBusinessSchemaProps) {
  return <SchemaMarkup type="LocalBusiness" data={business} />;
});

/**
 * Pre-configured Service Schema Component
 */
interface ServiceSchemaProps {
  service: ServiceSchema;
}

export const ServiceMarkup = memo(function ServiceMarkup({ service }: ServiceSchemaProps) {
  return <SchemaMarkup type="Service" data={service} />;
});

/**
 * Pre-configured WebPage Schema Component
 */
interface WebPageSchemaProps {
  page: WebPageSchema;
}

export const WebPageMarkup = memo(function WebPageMarkup({ page }: WebPageSchemaProps) {
  return <SchemaMarkup type="WebPage" data={page} />;
});

/**
 * Breadcrumb Schema Component
 * Generates breadcrumb structured data from an array of items
 */
interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbMarkupProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbMarkup = memo(function BreadcrumbMarkup({ items }: BreadcrumbMarkupProps) {
  const breadcrumbData: BreadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };

  return <SchemaMarkup type="Breadcrumb" data={breadcrumbData} />;
});

/**
 * FAQ Schema Component
 * Generates FAQ structured data for FAQ pages/sections
 */
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQMarkupProps {
  faqs: FAQItem[];
}

export const FAQMarkup = memo(function FAQMarkup({ faqs }: FAQMarkupProps) {
  const faqData: FAQPageSchema = {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <SchemaMarkup type="FAQ" data={faqData} />;
});

/**
 * Complete Page Schema Component
 * Combines Organization, WebPage, and Breadcrumb schemas for a complete page
 */
interface CompletePageSchemaProps {
  organization: OrganizationSchema;
  page: WebPageSchema;
  breadcrumbs?: BreadcrumbItem[];
  service?: ServiceSchema;
}

export const CompletePageSchema = memo(function CompletePageSchema({
  organization,
  page,
  breadcrumbs,
  service,
}: CompletePageSchemaProps) {
  const schemas: SchemaMarkupProps[] = [
    { type: 'Organization', data: organization },
    { type: 'WebPage', data: page },
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbData: BreadcrumbSchema = {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        ...(item.url && { item: item.url }),
      })),
    };
    schemas.push({ type: 'Breadcrumb', data: breadcrumbData });
  }

  if (service) {
    schemas.push({ type: 'Service', data: service });
  }

  return <MultiSchemaMarkup schemas={schemas} />;
});

// Default export for convenience
export default SchemaMarkup;
