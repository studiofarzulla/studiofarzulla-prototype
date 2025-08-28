import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Supported locales
export const locales = ['en', 'az', 'ru'] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'en';

// Locale metadata
export const localeNames: Record<Locale, string> = {
  en: 'English',
  az: 'Azərbaycanca',
  ru: 'Русский',
};

// Locale configuration for Next.js
export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale promise
  const locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Asia/Baku',
    now: new Date(),
    formats: {
      dateTime: {
        short: {
          day: 'numeric' as const,
          month: 'short' as const,
          year: 'numeric' as const,
        },
        long: {
          day: 'numeric' as const,
          month: 'long' as const,
          year: 'numeric' as const,
          hour: 'numeric' as const,
          minute: 'numeric' as const,
        },
      },
      number: {
        currency: {
          style: 'currency' as const,
          currency: 'AZN',
        },
        percent: {
          style: 'percent' as const,
        },
      },
    },
  };
});
