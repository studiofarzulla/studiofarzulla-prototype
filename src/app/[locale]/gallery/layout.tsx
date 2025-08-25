import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery | The Crescent Beach Hotel',
  description:
    'Explore our stunning photo gallery showcasing beautiful rooms, amenities, dining spaces, and breathtaking ocean views.',
  keywords: [
    'gallery',
    'photos',
    'hotel gallery',
    'luxury hotel photos',
    'Azerbaijan hotel',
    'Caspian Sea',
  ],
  openGraph: {
    title: 'Photo Gallery | The Crescent Beach Hotel',
    description:
      'Explore our stunning photo gallery showcasing beautiful rooms, amenities, dining spaces, and breathtaking ocean views.',
    type: 'website',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
