import type { Metadata } from 'next';
// import { Inter, Playfair_Display } from 'next/font/google';
import { locales } from '@/i18n';
import './globals.css';
import { hotelStructuredData } from '@/lib/structured-data';
import Script from 'next/script';

// Fallback font configuration for testing
const inter = {
  variable: '--font-inter',
};

const playfair = {
  variable: '--font-playfair',
};

export const metadata: Metadata = {
  title: 'The Crescent Beach Hotel',
  description: 'Luxury beachfront hotel in Baku, Azerbaijan',
};

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-white antialiased scroll-smooth`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hotelStructuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
