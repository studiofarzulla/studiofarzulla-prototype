// Mock translations for static export
// This is a temporary fallback to enable static export
// Replace with proper i18n implementation later

export function useTranslations(namespace?: string) {
  return (key: string) => {
    // Return the key itself as fallback
    return key;
  };
}

export const mockMessages = {
  common: {
    home: 'Home',
    rooms: 'Rooms',
    dining: 'Dining',
    amenities: 'Amenities',
    conferences: 'Conferences',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  rooms: {
    title: 'Our Rooms',
    subtitle: 'Discover luxury accommodations',
  }
};