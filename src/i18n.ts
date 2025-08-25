import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'az', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// For static export, we need to handle locale resolution more carefully
export default getRequestConfig(async ({ requestLocale }) => {
  // For static export, we need to handle the locale more safely
  let locale: string;
  
  try {
    locale = await requestLocale || defaultLocale;
  } catch (error) {
    locale = defaultLocale;
  }

  // Ensure locale is valid
  if (!locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  // Safely import messages with fallback
  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback to default locale messages if import fails
    messages = (await import(`../messages/${defaultLocale}.json`)).default;
  }

  return {
    locale,
    messages,
  };
});
