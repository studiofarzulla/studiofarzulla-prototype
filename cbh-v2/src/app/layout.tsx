import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { locales } from '@/i18n';

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    template: '%s | The Crescent Beach Hotel',
    default: 'The Crescent Beach Hotel - Luxury Beach Resort in Baku',
  },
  description:
    "Experience luxury at The Crescent Beach Hotel, Baku's premier beachfront resort offering world-class amenities, fine dining, and stunning Caspian Sea views.",
  keywords: ['hotel', 'resort', 'Baku', 'Azerbaijan', 'luxury', 'beach', 'Caspian Sea'],
  authors: [{ name: 'The Crescent Beach Hotel' }],
  creator: 'Studio Farzulla',
  publisher: 'The Crescent Beach Hotel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://crescentbeachhotel.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'The Crescent Beach Hotel',
    title: 'The Crescent Beach Hotel - Luxury Beach Resort in Baku',
    description: 'Experience luxury at The Crescent Beach Hotel',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Crescent Beach Hotel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Crescent Beach Hotel',
    description: 'Luxury Beach Resort in Baku, Azerbaijan',
    images: ['/images/og-image.jpg'],
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
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html className={`${inter.variable} ${playfair.variable}`}>{children}</html>;
}
