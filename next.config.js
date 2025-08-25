/** @type {import('next').NextConfig} */
// Temporarily disable next-intl plugin for static export
// const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

const nextConfig = {
  // Enable experimental features
  experimental: {
    typedRoutes: false, // Temporarily disabled due to locale routing changes
  },
  
  // Disable problematic optimizations for static export
  compiler: {
    removeConsole: false,
  },

  // Image optimization configuration
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

  // Headers for security and performance - disabled for static export
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'strict-origin-when-cross-origin',
  //         },
  //         {
  //           key: 'X-DNS-Prefetch-Control',
  //           value: 'on',
  //         },
  //         {
  //           key: 'Strict-Transport-Security',
  //           value: 'max-age=31536000; includeSubDomains',
  //         },
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/api/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, s-maxage=86400, stale-while-revalidate=43200',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/_next/static/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/images/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //   ];
  // },

  // Static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
};

// Export config directly without next-intl plugin for now
module.exports = nextConfig;
// module.exports = withNextIntl(nextConfig);
