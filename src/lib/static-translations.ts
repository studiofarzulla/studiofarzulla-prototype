import type { Locale } from '@/types';

// Import all translations statically
const translations = {
  en: require('../../messages/en.json'),
  az: require('../../messages/az.json'),
  ru: require('../../messages/ru.json'),
};

// Simple translation function for static export
export function getStaticTranslation(locale: Locale, key: string): string {
  const messages = translations[locale] || translations.en;
  const keys = key.split('.');
  
  let result = messages;
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      // Fallback to English if key not found
      result = translations.en;
      for (const fallbackKey of keys) {
        if (result && typeof result === 'object' && fallbackKey in result) {
          result = result[fallbackKey];
        } else {
          return key; // Return key if not found
        }
      }
      break;
    }
  }
  
  return typeof result === 'string' ? result : key;
}

// Create a hook-like interface for compatibility
export function createStaticTranslations(locale: Locale) {
  return function t(key: string) {
    return getStaticTranslation(locale, key);
  };
}

// Get locale from pathname during static export
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/');
  const localeSegment = segments[1];
  
  if (localeSegment === 'az' || localeSegment === 'ru' || localeSegment === 'en') {
    return localeSegment;
  }
  
  return 'en'; // Default fallback
}

// Server-side translation function for page components
export function getTranslations(locale?: string) {
  const safeLocale = (locale || 'en') as Locale;
  return function t(key: string): string {
    return getStaticTranslation(safeLocale, key);
  };
}
