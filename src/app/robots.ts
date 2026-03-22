/**
 * Robots.txt Configuration - SINPETCA
 *
 * Controls search engine crawling behavior
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

/**
 * Generates robots.txt metadata for search engine crawlers.
 *
 * @returns {MetadataRoute.Robots} Robots configuration with allow/disallow rules
 * - Allows crawling of all public pages
 * - Disallows: /api/, /_next/, /admin/, and .json files
 * - Sets sitemap and canonical host
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '*.json$',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
