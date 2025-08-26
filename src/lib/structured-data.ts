import { SITE_CONFIG, CONTACT_INFO } from '@/constants';

export const hotelStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.png`,
  image: [
    `${SITE_CONFIG.url}/images/hotel/pretty image of hotel.jpg`,
    `${SITE_CONFIG.url}/images/hotel/beach.avif`,
    `${SITE_CONFIG.url}/images/hotel/outside pool.jpg`,
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: CONTACT_INFO.address.city,
    postalCode: CONTACT_INFO.address.postalCode,
    addressCountry: CONTACT_INFO.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT_INFO.address.coordinates.lat,
    longitude: CONTACT_INFO.address.coordinates.lng,
  },
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  starRating: {
    '@type': 'Rating',
    ratingValue: SITE_CONFIG.rating,
    bestRating: '10',
    worstRating: '1',
  },
  numberOfRooms: SITE_CONFIG.totalRooms,
  checkInTime: '14:00',
  checkOutTime: '12:00',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Beach Access', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Spa', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Fitness Center', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Bar', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kids Club', value: true },
  ],
  priceRange: '$$$ - $$$$',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  availableLanguage: ['English', 'Azerbaijani', 'Russian', 'Turkish'],
  sameAs: [
    SITE_CONFIG.links.facebook,
    SITE_CONFIG.links.instagram,
    SITE_CONFIG.links.twitter,
    SITE_CONFIG.links.linkedin,
  ],
};

export const breadcrumbStructuredData = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: SITE_CONFIG.name,
  image: `${SITE_CONFIG.url}/images/hotel/pretty image of hotel.jpg`,
  '@id': SITE_CONFIG.url,
  url: SITE_CONFIG.url,
  telephone: CONTACT_INFO.phone,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: CONTACT_INFO.address.city,
    postalCode: CONTACT_INFO.address.postalCode,
    addressCountry: 'AZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT_INFO.address.coordinates.lat,
    longitude: CONTACT_INFO.address.coordinates.lng,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '00:00',
    closes: '24:00'
  }
};