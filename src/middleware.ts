import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // The locale prefix to use for URLs
  localePrefix: 'always',

  // Redirect to default locale when accessing without locale
  localeDetection: true,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(az|en|ru)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
