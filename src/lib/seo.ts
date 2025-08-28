import type { Metadata } from 'next';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.hotel';
  twitterCard?: 'summary' | 'summary_large_image';
  canonical?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const SITE_CONFIG = {
  siteName: 'The Crescent Beach Hotel',
  siteUrl: process.env.SITE_URL || 'https://crescentbeachhotel.com',
  description:
    'Experience unparalleled luxury at The Crescent Beach Hotel on the shores of the Caspian Sea. Premium accommodations, world-class dining, and exceptional amenities await in Baku, Azerbaijan.',
  twitterHandle: '@crescentbeachhotel',
  fbAppId: '123456789',
  defaultOgImage: '/images/og/hotel-main.jpg',
  locale: 'en_US',
  alternateLocales: ['az_AZ', 'ru_RU'],
};

export function generateSEO(config: SEOConfig = {}): Metadata {
  const {
    title = 'Luxury Beach Resort & Hotel in Baku, Azerbaijan',
    description = SITE_CONFIG.description,
    keywords = [],
    ogImage = SITE_CONFIG.defaultOgImage,
    ogType = 'business.hotel',
    twitterCard = 'summary_large_image',
    canonical,
    noIndex = false,
  } = config;

  const fullTitle = title.includes(SITE_CONFIG.siteName)
    ? title
    : `${title} | ${SITE_CONFIG.siteName}`;

  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_CONFIG.siteUrl}${ogImage}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'luxury hotel',
      'Baku hotel',
      'Caspian Sea',
      'Azerbaijan resort',
      'beach hotel',
    ].join(', '),

    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: canonical
        ? `${SITE_CONFIG.siteUrl}${canonical}`
        : SITE_CONFIG.siteUrl,
      siteName: SITE_CONFIG.siteName,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: SITE_CONFIG.locale,
      type: ogType as any,
    },

    // Twitter
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      site: SITE_CONFIG.twitterHandle,
      images: [fullOgImage],
    },

    // Additional meta tags
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    alternates: canonical
      ? {
          canonical: `${SITE_CONFIG.siteUrl}${canonical}`,
        }
      : undefined,

    // App specific
    applicationName: SITE_CONFIG.siteName,
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',

    // Icons
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
      other: [
        {
          rel: 'mask-icon',
          url: '/icons/safari-pinned-tab.svg',
        },
      ],
    },

    // Manifest
    manifest: '/manifest.json',

    // Theme
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#1E40AF' },
      { media: '(prefers-color-scheme: dark)', color: '#1E40AF' },
    ],
  };

  return metadata;
}

// Predefined SEO configurations for common pages
export const SEO_CONFIGS = {
  home: {
    title: 'Luxury Beach Resort & Hotel in Baku, Azerbaijan',
    description:
      'Experience unparalleled luxury at The Crescent Beach Hotel on the shores of the Caspian Sea. Premium accommodations, world-class dining, and exceptional amenities await.',
    keywords: [
      'luxury hotel Baku',
      'Caspian Sea resort',
      'Azerbaijan beach hotel',
      'five star hotel Baku',
    ],
    canonical: '/',
  },

  rooms: {
    title: 'Luxury Hotel Rooms & Suites - Ocean View Accommodations',
    description:
      'Discover our collection of elegantly appointed rooms and suites, each featuring stunning Caspian Sea views and premium amenities for the ultimate comfort.',
    keywords: [
      'hotel rooms Baku',
      'luxury suites',
      'ocean view rooms',
      'premium accommodations',
    ],
    canonical: '/rooms',
  },

  dining: {
    title: 'Fine Dining Restaurants & Bars - Culinary Excellence',
    description:
      'Savor exceptional cuisine at our world-class restaurants and bars. From beachfront dining to gourmet experiences, indulge in culinary perfection.',
    keywords: [
      'fine dining Baku',
      'luxury restaurants',
      'beachfront dining',
      'gourmet cuisine',
    ],
    canonical: '/dining',
  },

  amenities: {
    title: 'Resort Amenities & Facilities - Luxury Experience',
    description:
      'Explore our extensive amenities including spa, fitness center, pools, beach access, and recreational facilities designed for your ultimate relaxation.',
    keywords: [
      'hotel amenities',
      'luxury spa',
      'beach resort facilities',
      'wellness center',
    ],
    canonical: '/amenities',
  },

  conferences: {
    title: 'Business Conferences & Events - Premium Meeting Facilities',
    description:
      'Host successful events in our state-of-the-art conference facilities. Professional meeting rooms and event spaces for corporate gatherings.',
    keywords: [
      'business hotel Baku',
      'conference facilities',
      'meeting rooms',
      'corporate events',
    ],
    canonical: '/conferences',
  },

  contact: {
    title: 'Contact Us - Reservations & Information',
    description:
      'Get in touch with The Crescent Beach Hotel for reservations, inquiries, and assistance. Our dedicated team is here to help plan your perfect stay.',
    keywords: [
      'hotel contact',
      'reservations Baku',
      'hotel booking',
      'customer service',
    ],
    canonical: '/contact',
  },

  gallery: {
    title: 'Hotel Gallery - Photos & Virtual Tour',
    description:
      'Explore our stunning hotel through our comprehensive photo gallery. Discover rooms, dining venues, amenities, and breathtaking views.',
    keywords: [
      'hotel photos',
      'virtual tour',
      'hotel gallery',
      'Baku hotel images',
    ],
    canonical: '/gallery',
  },
};

export function getStructuredData(
  type: 'hotel' | 'restaurant' | 'event',
  data: any
) {
  const baseUrl = SITE_CONFIG.siteUrl;

  const commonData = {
    '@context': 'https://schema.org',
    url: baseUrl,
    sameAs: [
      'https://www.facebook.com/crescentbeachhotel',
      'https://www.instagram.com/crescentbeachhotel',
      'https://www.linkedin.com/company/crescentbeachhotel',
    ],
  };

  switch (type) {
    case 'hotel':
      return {
        ...commonData,
        '@type': 'Hotel',
        name: SITE_CONFIG.siteName,
        description: SITE_CONFIG.description,
        image: `${baseUrl}/images/hotel/exterior-main.jpg`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Seaside Boulevard',
          addressLocality: 'Baku',
          addressCountry: 'AZ',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 40.4093,
          longitude: 49.8671,
        },
        telephone: '+994-12-123-4567',
        priceRange: '$$$',
        starRating: {
          '@type': 'Rating',
          ratingValue: 5,
        },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Beach Access' },
          { '@type': 'LocationFeatureSpecification', name: 'Spa' },
          { '@type': 'LocationFeatureSpecification', name: 'Fitness Center' },
          { '@type': 'LocationFeatureSpecification', name: 'Restaurant' },
          { '@type': 'LocationFeatureSpecification', name: 'WiFi' },
          { '@type': 'LocationFeatureSpecification', name: 'Parking' },
        ],
      };

    case 'restaurant':
      return {
        ...commonData,
        '@type': 'Restaurant',
        name: data.name,
        description: data.description,
        image: data.image,
        servesCuisine: data.cuisine,
        priceRange: data.priceRange,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Seaside Boulevard',
          addressLocality: 'Baku',
          addressCountry: 'AZ',
        },
      };

    default:
      return commonData;
  }
}
