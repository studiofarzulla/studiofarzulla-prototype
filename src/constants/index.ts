export const SITE_CONFIG = {
  name: 'The Crescent Beach Hotel',
  description: 'Experience luxury on the shores of the Caspian Sea',
  url: 'https://farzulla.org',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/crescentbeach',
    facebook: 'https://facebook.com/crescentbeachhotel',
    instagram: 'https://instagram.com/crescentbeachhotel',
    linkedin: 'https://linkedin.com/company/crescentbeachhotel',
  },
} as const;

export const CONTACT_INFO = {
  phone: '+994123454567',
  email: 'info@crescentbeachhotel.com',
  address: {
    street: '123 Beach Boulevard',
    city: 'Baku',
    country: 'Azerbaijan',
    coordinates: {
      lat: 40.3777,
      lng: 49.8919,
    },
  },
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
  'Swimming Pool',
  'Spa & Wellness',
  'Fitness Center',
  'Beach Access',
  'Restaurant',
  'Bar & Lounge',
  'Conference Rooms',
  'Concierge Service',
  'Room Service',
  'Laundry Service',
  'Parking',
] as const;