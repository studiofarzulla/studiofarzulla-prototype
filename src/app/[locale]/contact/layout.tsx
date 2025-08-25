import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | The Crescent Beach Hotel',
  description:
    'Get in touch with The Crescent Beach Hotel. Contact information, location details, and inquiry form for reservations and general information.',
  keywords: [
    'contact',
    'hotel contact',
    'reservations',
    'Azerbaijan hotel contact',
    'Baku hotel',
  ],
  openGraph: {
    title: 'Contact Us | The Crescent Beach Hotel',
    description:
      'Get in touch with The Crescent Beach Hotel. Contact information, location details, and inquiry form for reservations and general information.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
