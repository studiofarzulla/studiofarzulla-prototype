export const SITE_CONFIG = {
  name: 'The Crescent Beach Hotel & Leisure Resort',
  description: 'An isolated heaven within a city - First beach resort on the Caspian Sea shore with over 20 years of excellence',
  url: 'https://farzulla.org',
  ogImage: '/images/og-image.jpg',
  rating: 7.9,
  totalRooms: 260,
  established: 2000,
  links: {
    twitter: 'https://twitter.com/crescentbeach',
    facebook: 'https://facebook.com/crescentbeachhotel',
    instagram: 'https://instagram.com/crescentbeachhotel',
    linkedin: 'https://linkedin.com/company/crescentbeachhotel',
    booking: 'https://www.booking.com/hotel/az/the-crescent-beach.html',
  },
} as const;

export const CONTACT_INFO = {
  phone: '+994123454567',
  whatsapp: '+994123456789',
  email: 'info@crescentbeachhotel.com',
  address: {
    street: 'Salyan Highway 31, Shikhov',
    city: 'Baku',
    postalCode: 'AZ1023',
    country: 'Azerbaijan',
    coordinates: {
      lat: 40.3093,
      lng: 49.7707,
    },
  },
  distanceFromCenter: '8.9 km',
  distanceFromAirport: '40 km',
  airportTransferTime: '35-40 minutes',
} as const;

export const NAVIGATION_ITEMS = [
  { href: '/', key: 'common.home' },
  { href: '/rooms', key: 'common.rooms' },
  { href: '/dining', key: 'common.dining' },
  { href: '/amenities', key: 'common.amenities' },
  { href: '/conferences', key: 'common.conferences' },
  { href: '/gallery', key: 'common.gallery' },
  { href: '/contact', key: 'common.contact' },
] as const;

export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycanca', flag: '🇦🇿' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
] as const;

export const ROOM_TYPES = [
  {
    id: 'standard',
    name: 'Standard Room',
    capacity: 2,
    size: 25,
    price: 150,
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    capacity: 3,
    size: 35,
    price: 250,
  },
  {
    id: 'suite',
    name: 'Executive Suite',
    capacity: 4,
    size: 55,
    price: 450,
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    capacity: 6,
    size: 85,
    price: 850,
  },
] as const;

export const AMENITIES = [
  'Free WiFi',
  'Private Beach (400+ meters)',
  'Outdoor Swimming Pool',
  'Indoor Swimming Pool',
  'Spa & Wellness Center',
  'Sauna & Steam Bath',
  'Massage Room',
  'Fitness Center/Gym',
  'Tennis Courts',
  'Squash Courts',
  'Table Tennis',
  'Mini Golf',
  'Bowling Club',
  'Nightclub',
  '3 Restaurants',
  'Poolside Bar',
  'Terrace Bar',
  'Wild West Bar',
  'Shade Bar',
  '24-Hour Room Service',
  'Business Center',
  'Conference Rooms',
  'Concierge Service',
  'Airport Shuttle (24h)',
  'Free Parking',
  'Laundry & Dry Cleaning',
  'Car Rental',
  'ATM on Site',
  'Safe Deposit Box',
  'Luggage Storage',
  'BBQ Facilities',
  'Golf Cart Transportation',
] as const;
