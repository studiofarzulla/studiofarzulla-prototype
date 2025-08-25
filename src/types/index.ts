export interface Room {
  id: string;
  name: string;
  description: string;
  images: string[];
  capacity: number;
  size: number;
  price: number;
  amenities: string[];
  available: boolean;
}

export interface Booking {
  id: string;
  checkIn: Date;
  checkOut: Date;
  roomId: string;
  guests: number;
  customerInfo: CustomerInfo;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: Address;
  specialRequests?: string;
}

export interface Address {
  street: string;
  city: string;
  country: string;
  postalCode?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category?: 'appetizer' | 'main' | 'dessert' | 'beverage';
  image?: string;
  allergens?: string[];
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  popular?: boolean;
  dietary?: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  capacity: number;
  price?: number;
  image?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'rooms' | 'dining' | 'amenities' | 'events' | 'exterior';
  thumbnail: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface NewsletterSubscription {
  email: string;
  preferences: {
    deals: boolean;
    events: boolean;
    newsletter: boolean;
  };
}

export type Locale = 'en' | 'az' | 'ru';

export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  noIndex?: boolean;
}
