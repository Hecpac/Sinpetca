/**
 * Sitemap Configuration - SINPETCA
 * 
 * Generates XML sitemap for search engine indexing
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import type { MetadataRoute } from 'next';

// Use www as the canonical domain — must match robots.ts and the live site URL
const BASE_URL = 'https://www.sinpetca.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static last-modified dates per page (not dynamic — avoids identical timestamps
  // that Google ignores as auto-generated noise).
  // Update each date whenever the page content changes.
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/nosotros`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/servicios/petrolera`,
      lastModified: new Date('2026-02-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/naval`,
      lastModified: new Date('2026-02-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/aeronautica`,
      lastModified: new Date('2026-02-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/ndt`,
      lastModified: new Date('2026-02-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/certificaciones`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/proyectos`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  return staticPages;
}
