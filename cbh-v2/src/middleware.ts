import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // List of all supported locales
  locales,

  // Default locale
  defaultLocale,

  // Locale detection
  localeDetection: true,

  // Always show locale in URL
  localePrefix: 'always',
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/users`, including the ones containing a dot
    '/([\\w-]+)?/users/(.+)',
  ],
};
