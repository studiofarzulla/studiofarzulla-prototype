import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LocaleProvider } from '@/lib/LocaleProvider';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'hotel',
    'resort',
    'beach',
    'luxury',
    'Baku',
    'Azerbaijan',
    'Caspian Sea',
    'accommodation',
    'vacation',
    'conference',
    'spa',
    'dining',
  ],
  authors: [{ name: 'Studio Farzulla' }],
  creator: 'Studio Farzulla',
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: '@crescentbeach',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'az' }, { locale: 'ru' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { locale?: string };
}) {
  const locale = params?.locale || 'en';
  
  // Load messages for static export
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback to English messages
    messages = (await import(`../../../messages/en.json`)).default;
  }

  return (
    <LocaleProvider locale={locale} messages={messages}>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 pt-16 lg:pt-20'>{children}</main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
