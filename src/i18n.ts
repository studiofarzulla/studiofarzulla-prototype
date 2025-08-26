import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'az', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Optimized for Vercel with proper locale resolution
export default getRequestConfig(async ({ requestLocale }) => {
  // Request locale is now handled properly by next-intl on Vercel
  const locale = await requestLocale || defaultLocale;

  // Ensure locale is valid
  const validLocale = locales.includes(locale as Locale) ? locale : defaultLocale;

  // Import messages with proper error handling
  const messages = (await import(`../messages/${validLocale}.json`)).default;

  return {
    locale: validLocale,
    messages,
  };
});
