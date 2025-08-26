/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

const nextConfig = {
  // Enable experimental features for Vercel
  experimental: {
    typedRoutes: true,
  },
  
  // Enable production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization configuration - full Vercel support
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Enable image optimization on Vercel
    unoptimized: false,
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  swcMinify: true,

  // Environment variables
  env: {
    SITE_NAME: 'The Crescent Beach Hotel',
    SITE_URL: process.env.SITE_URL || 'https://farzulla.org',
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
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
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  // Enable ISR and dynamic features
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false,
      },
    ];
  },
};

// Enable next-intl plugin for full internationalization support
module.exports = withNextIntl(nextConfig);
