import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com" + (isDev ? " 'unsafe-eval'" : ''),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://*.ingest.sentry.io https://*.sentry.io",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
];

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: cspDirectives.join('; '),
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
];

/**
 * Next.js Configuration - SINPETCA
 *
 * Configures image optimization, security headers, and redirects.
 * - Image formats: AVIF and WebP for modern browsers
 * - Security headers: CSP, HSTS, COOP, and frame-ancestors
 * - Redirect: www subdomain consolidation for canonical domain authority
 */
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    qualities: [70, 75],
  },
  async redirects() {
    return [
      // 301 redirect: sinpetca.com → www.sinpetca.com (consolidate domain authority)
      {
        source: '/:path*',
        destination: 'https://www.sinpetca.com/:path*',
        basePath: false,
        permanent: true, // HTTP 301
        has: [
          {
            type: 'host',
            value: 'sinpetca.com',
          },
        ],
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.sinpetca.com/:path*',
        basePath: false,
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'sinpetca.com',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
