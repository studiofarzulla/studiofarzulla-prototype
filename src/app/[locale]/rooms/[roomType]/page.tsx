import { useTranslations } from 'next-intl';
import Image from 'next/image';
import RoomGallery from '@/components/rooms/RoomGallery';
import RoomAmenities from '@/components/rooms/RoomAmenities';
import PriceDisplay from '@/components/rooms/PriceDisplay';
import BookingCard from '@/components/rooms/BookingCard';
import {
  IoArrowBackOutline,
  IoPeopleOutline,
  IoResizeOutline,
  IoEyeOutline,
  IoBusinessOutline,
  IoStarOutline,
  IoLocationOutline,
  IoShieldCheckmarkOutline,
} from 'react-icons/io5';

// Force static generation for this page
export const dynamic = 'force-static';

// Generate static params for all room types
export function generateStaticParams() {
  const roomTypes = [
    'standard-single',
    'standard-twin',
    'deluxe-sea-view',
    'junior-suite',
    'family-suite',
    'presidential-suite',
  ];

  const locales = ['en', 'az', 'ru'];

  return locales.flatMap(locale =>
    roomTypes.map(roomType => ({
      locale,
      roomType,
    }))
  );
}

// Room data - this would typically come from an API
const roomsData = {
  'standard-single': {
    id: 'standard-single',
    name: 'Standard Single Room',
    description:
      'Our Standard Single Room offers comfortable accommodation with a queen bed and modern amenities. Perfect for solo travelers or business guests who appreciate quality and comfort without compromising on style.',
    capacity: 2,
    size: 25,
    basePrice: 150,
    images: [
      '/images/rooms/standard-single-1.jpg',
      '/images/rooms/standard-single-2.jpg',
      '/images/rooms/standard-single-3.jpg',
      '/images/rooms/standard-single-4.jpg',
    ],
    features: [
      'Queen size bed',
      'City/Garden view',
      'Work desk',
      'Free WiFi',
      'Air conditioning',
      'Safe',
      'Minibar',
      'Flat-screen TV',
      'Private bathroom',
      'Room service',
      'Daily housekeeping',
      '24-hour front desk',
    ],
    viewType: 'garden' as const,
    roomType: 'standard' as const,
    building: 'Building A',
    floor: '2nd-5th Floor',
    bedConfiguration: '1 Queen Bed',
    maxOccupancy: 2,
    smokingPolicy: 'Non-smoking',
    petPolicy: 'No pets allowed',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    connectingAvailable: false,
    accessibility: ['Standard room'],
    nearbyAttractions: ['Pool Area', 'Restaurant', 'Lobby'],
    roomService: '24/7 available',
  },
  'standard-twin': {
    id: 'standard-twin',
    name: 'Standard Twin Room',
    description:
      'Spacious room with two double beds, perfect for families or colleagues traveling together. Features modern amenities and a comfortable layout with ample space for relaxation.',
    capacity: 4,
    size: 30,
    basePrice: 200,
    images: [
      '/images/rooms/standard-twin-1.jpg',
      '/images/rooms/standard-twin-2.jpg',
      '/images/rooms/standard-twin-3.jpg',
      '/images/rooms/standard-twin-4.jpg',
    ],
    features: [
      'Two double beds',
      'Garden/Pool view',
      'Sitting area',
      'Free WiFi',
      'Air conditioning',
      'Safe',
      'Minibar',
      'Flat-screen TV',
      'Private bathroom',
      'Room service',
      'Daily housekeeping',
      'Family amenities',
    ],
    viewType: 'pool' as const,
    roomType: 'standard' as const,
    building: 'Building B',
    floor: '1st-4th Floor',
    bedConfiguration: '2 Double Beds',
    maxOccupancy: 4,
    smokingPolicy: 'Non-smoking',
    petPolicy: 'No pets allowed',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    connectingAvailable: true,
    accessibility: ['Family-friendly layout'],
    nearbyAttractions: ['Pool Area', 'Children Area', 'Restaurant'],
    roomService: '24/7 available',
  },
  'deluxe-sea': {
    id: 'deluxe-sea',
    name: 'Deluxe Room with Sea View',
    description:
      'Premium accommodation featuring stunning Caspian Sea views and upgraded amenities. Each room includes a private balcony where you can enjoy breathtaking sunsets over the water.',
    capacity: 3,
    size: 35,
    basePrice: 280,
    images: [
      '/images/rooms/deluxe-sea-1.jpg',
      '/images/rooms/deluxe-sea-2.jpg',
      '/images/rooms/deluxe-sea-3.jpg',
      '/images/rooms/deluxe-sea-4.jpg',
      '/images/rooms/deluxe-sea-5.jpg',
    ],
    features: [
      'King size bed',
      'Private balcony',
      'Sea view',
      'Premium amenities',
      'Free WiFi',
      'Air conditioning',
      'Safe',
      'Minibar',
      'Smart TV',
      'Marble bathroom',
      'Bathrobes & slippers',
      'Premium toiletries',
      'Nespresso machine',
      'Evening turndown service',
    ],
    viewType: 'sea' as const,
    roomType: 'deluxe' as const,
    building: 'Building C',
    floor: '3rd-6th Floor',
    bedConfiguration: '1 King Bed',
    maxOccupancy: 3,
    smokingPolicy: 'Non-smoking',
    petPolicy: 'No pets allowed',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    connectingAvailable: false,
    accessibility: ['Sea view balcony access'],
    nearbyAttractions: ['Private Beach', 'Spa', 'Fine Dining'],
    roomService: '24/7 premium service',
  },
  'family-connected': {
    id: 'family-connected',
    name: 'Connected Family Rooms',
    description:
      'Two adjoining rooms with a connecting door, specifically designed for families with children. Offers privacy for parents while keeping the family close together.',
    capacity: 6,
    size: 50,
    basePrice: 350,
    images: [
      '/images/rooms/family-connected-1.jpg',
      '/images/rooms/family-connected-2.jpg',
      '/images/rooms/family-connected-3.jpg',
      '/images/rooms/family-connected-4.jpg',
    ],
    features: [
      'Two separate rooms',
      'Connecting door',
      'Multiple bed options',
      'Family-friendly',
      'Free WiFi',
      'Air conditioning',
      'Safe',
      'Minibar',
      'Children amenities',
      'Extra space',
      'Room service',
      'Baby cot available',
      'Child safety features',
      'Family entertainment',
    ],
    viewType: 'garden' as const,
    roomType: 'family' as const,
    building: 'Building D',
    floor: '2nd-4th Floor',
    bedConfiguration: '1 King + 2 Twin Beds',
    maxOccupancy: 6,
    smokingPolicy: 'Non-smoking',
    petPolicy: 'No pets allowed',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    connectingAvailable: true,
    accessibility: ['Child-safe environment', 'Ground floor access available'],
    nearbyAttractions: ['Children Play Area', 'Family Pool', 'Kids Club'],
    roomService: '24/7 family service',
  },
  'executive-suite': {
    id: 'executive-suite',
    name: 'Executive Suite',
    description:
      'Luxurious suite featuring separate bedroom and living areas, perfect for business travelers or guests seeking extra space and premium amenities.',
    capacity: 4,
    size: 65,
    basePrice: 450,
    images: [
      '/images/rooms/executive-suite-1.jpg',
      '/images/rooms/executive-suite-2.jpg',
      '/images/rooms/executive-suite-3.jpg',
      '/images/rooms/executive-suite-4.jpg',
      '/images/rooms/executive-suite-5.jpg',
    ],
    features: [
      'Separate bedroom',
      'Living room',
      'Work area',
      'Premium location',
      'Sea view',
      'Free WiFi',
      'Air conditioning',
      'Safe',
      'Premium minibar',
      'Smart TV',
      'Luxury bathroom',
      'Concierge service',
      'Business amenities',
      'Premium bedding',
      'Executive lounge access',
    ],
    viewType: 'sea' as const,
    roomType: 'suite' as const,
    building: 'Building G',
    floor: '5th-7th Floor',
    bedConfiguration: '1 King Bed + Sofa Bed',
    maxOccupancy: 4,
    smokingPolicy: 'Non-smoking',
    petPolicy: 'No pets allowed',
    checkIn: '2:00 PM',
    checkOut: '1:00 PM',
    connectingAvailable: false,
    accessibility: ['Executive floor privileges'],
    nearbyAttractions: ['Business Center', 'Executive Lounge', 'Spa'],
    roomService: '24/7 executive service',
  },
  'presidential-suite': {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    description:
      'The ultimate luxury accommodation featuring panoramic sea views, private terrace, and exclusive butler service. Experience unmatched elegance and privacy.',
    capacity: 6,
    size: 120,
    basePrice: 800,
    images: [
      '/images/rooms/presidential-suite-1.jpg',
      '/images/rooms/presidential-suite-2.jpg',
      '/images/rooms/presidential-suite-3.jpg',
      '/images/rooms/presidential-suite-4.jpg',
      '/images/rooms/presidential-suite-5.jpg',
      '/images/rooms/presidential-suite-6.jpg',
    ],
    features: [
      'Master bedroom',
      'Separate living room',
      'Dining area',
      'Private terrace',
      'Panoramic sea view',
      'Premium WiFi',
      'Climate control',
      'Safe',
      'Premium bar',
      'Entertainment system',
      'Spa bathroom',
      'Butler service',
      'Private entrance',
      'Luxury furnishings',
      'VIP amenities',
      'Complimentary breakfast',
    ],
    viewType: 'sea' as const,
    roomType: 'suite' as const,
    building: 'Building H',
    floor: 'Top Floor',
    bedConfiguration: '1 King Bed + Additional Bedrooms',
    maxOccupancy: 6,
    smokingPolicy: 'Non-smoking',
    petPolicy: 'Pets allowed with prior arrangement',
    checkIn: '1:00 PM',
    checkOut: '2:00 PM',
    connectingAvailable: false,
    accessibility: ['Private elevator access', 'VIP services'],
    nearbyAttractions: ['Private Beach Access', 'VIP Spa', 'Fine Dining'],
    roomService: '24/7 butler service',
  },
  'corporate-building': {
    id: 'corporate-building',
    name: 'Corporate Building Units',
    description:
      'Entire building available for corporate rentals, featuring 20 rooms across two floors with dedicated meeting facilities and business services.',
    capacity: 40,
    size: 400,
    basePrice: 1200,
    images: [
      '/images/rooms/corporate-building-1.jpg',
      '/images/rooms/corporate-building-2.jpg',
      '/images/rooms/corporate-building-3.jpg',
      '/images/rooms/corporate-building-4.jpg',
    ],
    features: [
      '20 rooms per building',
      'Two-floor layout',
      'Meeting facilities',
      'Dedicated entrance',
      'Group amenities',
      'Business center',
      'Conference room',
      'Catering services',
      'Parking',
      '24/7 support',
      'Custom services',
      'Group dining area',
      'Presentation equipment',
      'Team building spaces',
    ],
    viewType: 'city' as const,
    roomType: 'corporate' as const,
    building: 'Corporate Building 1',
    floor: '2-Floor Building',
    bedConfiguration: 'Various Configurations',
    maxOccupancy: 40,
    smokingPolicy: 'Designated areas',
    petPolicy: 'Corporate policy applies',
    checkIn: 'Flexible',
    checkOut: 'Flexible',
    connectingAvailable: true,
    accessibility: ['Full building access', 'Meeting room facilities'],
    nearbyAttractions: [
      'Conference Center',
      'Business Dining',
      'Corporate Services',
    ],
    roomService: '24/7 corporate support',
  },
};

export default function RoomDetailPage({
  params,
}: {
  params: { roomType: string; locale: string };
}) {
  const roomType = params.roomType;
  const t = useTranslations('rooms');
  const tCommon = useTranslations('common');

  const room = roomsData[roomType as keyof typeof roomsData];

  if (!room) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>
            Room Not Found
          </h1>
          <p className='text-gray-600 mb-6'>
            The room you're looking for doesn't exist.
          </p>
          <button onClick={() => window.history.back()} className='btn-primary'>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Navigation */}
      <div className='bg-white border-b border-gray-200 sticky top-16 z-40'>
        <div className='container mx-auto px-4 py-4'>
          <button
            onClick={() => window.history.back()}
            className='flex items-center text-primary-600 hover:text-primary-700 transition-colors'
          >
            <IoArrowBackOutline className='w-5 h-5 mr-2' />
            Back to Rooms
          </button>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            {/* Room Header */}
            <div className='mb-8'>
              <div className='flex items-center gap-3 mb-4'>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    room.roomType === 'standard'
                      ? 'bg-blue-100 text-blue-800'
                      : room.roomType === 'deluxe'
                        ? 'bg-purple-100 text-purple-800'
                        : room.roomType === 'suite'
                          ? 'bg-amber-100 text-amber-800'
                          : room.roomType === 'family'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {room.roomType.charAt(0).toUpperCase() +
                    room.roomType.slice(1)}
                </span>
                <div className='flex text-yellow-400'>
                  {[...Array(5)].map((_, i) => (
                    <IoStarOutline key={i} className='w-4 h-4 fill-current' />
                  ))}
                </div>
              </div>

              <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                {room.name}
              </h1>

              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                {room.description}
              </p>

              {/* Quick Info */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-xl border border-gray-200'>
                <div className='text-center'>
                  <IoPeopleOutline className='w-6 h-6 text-primary-600 mx-auto mb-2' />
                  <div className='text-sm text-gray-600'>Capacity</div>
                  <div className='font-semibold text-gray-900'>
                    {room.capacity} guests
                  </div>
                </div>
                <div className='text-center'>
                  <IoResizeOutline className='w-6 h-6 text-primary-600 mx-auto mb-2' />
                  <div className='text-sm text-gray-600'>Size</div>
                  <div className='font-semibold text-gray-900'>
                    {room.size}m²
                  </div>
                </div>
                <div className='text-center'>
                  <IoEyeOutline className='w-6 h-6 text-primary-600 mx-auto mb-2' />
                  <div className='text-sm text-gray-600'>View</div>
                  <div className='font-semibold text-gray-900 capitalize'>
                    {room.viewType}
                  </div>
                </div>
                <div className='text-center'>
                  <IoLocationOutline className='w-6 h-6 text-primary-600 mx-auto mb-2' />
                  <div className='text-sm text-gray-600'>Building</div>
                  <div className='font-semibold text-gray-900'>
                    {room.building}
                  </div>
                </div>
              </div>
            </div>

            {/* Room Gallery */}
            <div className='mb-12'>
              <RoomGallery
                images={room.images}
                roomName={room.name}
                className='group'
              />
            </div>

            {/* Room Details */}
            <div className='mb-12'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Room Details
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      Bed Configuration
                    </h4>
                    <p className='text-gray-600'>{room.bedConfiguration}</p>
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>Floor</h4>
                    <p className='text-gray-600'>{room.floor}</p>
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      Max Occupancy
                    </h4>
                    <p className='text-gray-600'>{room.maxOccupancy} guests</p>
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      Check-in / Check-out
                    </h4>
                    <p className='text-gray-600'>
                      {room.checkIn} / {room.checkOut}
                    </p>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      Smoking Policy
                    </h4>
                    <p className='text-gray-600'>{room.smokingPolicy}</p>
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      Pet Policy
                    </h4>
                    <p className='text-gray-600'>{room.petPolicy}</p>
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      Room Service
                    </h4>
                    <p className='text-gray-600'>{room.roomService}</p>
                  </div>
                  {room.connectingAvailable && (
                    <div>
                      <h4 className='font-medium text-gray-900 mb-2'>
                        Special Features
                      </h4>
                      <p className='text-green-600 flex items-center'>
                        <IoShieldCheckmarkOutline className='w-4 h-4 mr-1' />
                        Connecting rooms available
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className='mb-12'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Room Features & Amenities
              </h2>
              <RoomAmenities
                amenities={room.features}
                roomType={room.roomType}
              />
            </div>

            {/* Location & Nearby */}
            <div className='mb-12'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Location & Nearby
              </h2>
              <div className='bg-white rounded-xl p-6 border border-gray-200'>
                <div className='flex items-center mb-4'>
                  <IoLocationOutline className='w-5 h-5 text-primary-600 mr-2' />
                  <span className='font-medium text-gray-900'>
                    {room.building} - {room.floor}
                  </span>
                </div>
                <div>
                  <h4 className='font-medium text-gray-900 mb-3'>
                    Nearby Attractions
                  </h4>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    {room.nearbyAttractions.map((attraction, index) => (
                      <div
                        key={index}
                        className='flex items-center text-sm text-gray-600'
                      >
                        <div className='w-2 h-2 bg-primary-600 rounded-full mr-2'></div>
                        {attraction}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Pricing & Offers
              </h2>
              <PriceDisplay
                basePrice={room.basePrice}
                roomType={room.roomType}
                viewType={room.viewType}
              />
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className='lg:col-span-1'>
            <div>
              <BookingCard
                roomId={room.id}
                roomName={room.name}
                basePrice={room.basePrice}
                availability='available'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
