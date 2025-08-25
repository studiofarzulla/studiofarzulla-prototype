import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Rooms & Suites | The Crescent Beach Hotel',
  description:
    'Discover our elegant rooms and suites across 9 magnificent buildings. Choose from 250+ accommodations with stunning sea views, premium amenities, and exceptional comfort at The Crescent Beach Hotel.',
  keywords: [
    'luxury hotel rooms',
    'Baku accommodation',
    'Caspian Sea hotel',
    'business hotel Baku',
    'family rooms Azerbaijan',
    'sea view rooms',
    'corporate accommodation',
    'hotel suites Baku',
    'connecting rooms',
    'Saipem accommodation',
    'BP hotel rates',
  ],
  openGraph: {
    title: 'Luxury Rooms & Suites | The Crescent Beach Hotel',
    description:
      '250+ luxury rooms across 9 buildings. From standard accommodations to presidential suites, find your perfect stay with sea views and premium amenities.',
    type: 'website',
    images: [
      {
        url: '/images/rooms/rooms-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury hotel rooms at The Crescent Beach Hotel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Rooms & Suites | The Crescent Beach Hotel',
    description:
      '250+ luxury rooms across 9 buildings with stunning Caspian Sea views.',
    images: ['/images/rooms/rooms-hero.jpg'],
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RoomsLayout({ children }: Props) {
  return children;
}
