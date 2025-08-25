import { Metadata } from 'next';

// Generate static paths for all available rooms
export async function generateStaticParams() {
  return [
    { roomType: 'standard-single' },
    { roomType: 'standard-twin' },
    { roomType: 'deluxe-sea' },
    { roomType: 'family-connected' },
    { roomType: 'executive-suite' },
    { roomType: 'presidential-suite' },
    { roomType: 'corporate-building' },
  ];
}

// Room metadata mapping
const roomMetadata = {
  'standard-single': {
    title: 'Standard Single Room | The Crescent Beach Hotel',
    description: 'Comfortable accommodation with queen bed and modern amenities. Perfect for solo travelers and business guests seeking quality and comfort.',
    keywords: 'standard room, single room, queen bed, business accommodation, Baku hotel'
  },
  'standard-twin': {
    title: 'Standard Twin Room | The Crescent Beach Hotel', 
    description: 'Spacious room with two double beds, perfect for families or colleagues. Features modern amenities and comfortable layout.',
    keywords: 'twin room, family room, two beds, group accommodation, Baku hotel'
  },
  'deluxe-sea': {
    title: 'Deluxe Sea View Room | The Crescent Beach Hotel',
    description: 'Premium accommodation with stunning Caspian Sea views, private balcony, and upgraded amenities for an unforgettable stay.',
    keywords: 'deluxe room, sea view, balcony, premium accommodation, Caspian Sea, luxury hotel Baku'
  },
  'family-connected': {
    title: 'Connected Family Rooms | The Crescent Beach Hotel',
    description: 'Two adjoining rooms with connecting door, ideal for families. Offers privacy for parents while keeping the family together.',
    keywords: 'family rooms, connecting rooms, children friendly, family accommodation, Baku'
  },
  'executive-suite': {
    title: 'Executive Suite | The Crescent Beach Hotel',
    description: 'Luxurious suite with separate bedroom and living areas, perfect for business travelers seeking premium accommodations.',
    keywords: 'executive suite, business suite, luxury accommodation, separate living room, Baku'
  },
  'presidential-suite': {
    title: 'Presidential Suite | The Crescent Beach Hotel',
    description: 'Ultimate luxury accommodation with panoramic sea views, private terrace, and exclusive butler service.',
    keywords: 'presidential suite, luxury suite, butler service, panoramic views, VIP accommodation, Baku'
  },
  'corporate-building': {
    title: 'Corporate Building Rental | The Crescent Beach Hotel',
    description: 'Entire building rental for corporate events and long-term stays. 20 rooms with meeting facilities and business services.',
    keywords: 'corporate rental, business accommodation, meeting facilities, group booking, Saipem, BP'
  }
};

type Props = {
  children: React.ReactNode;
  params: { roomType: string; locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const roomType = params.roomType;
  const metadata = roomMetadata[roomType as keyof typeof roomMetadata];

  if (!metadata) {
    return {
      title: 'Room Details | The Crescent Beach Hotel',
      description: 'Discover our luxury accommodations at The Crescent Beach Hotel.',
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
      images: [
        {
          url: `/images/rooms/${roomType}-1.jpg`,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [`/images/rooms/${roomType}-1.jpg`],
    },
  };
}

export default function RoomLayout({ children }: Props) {
  return children;
}