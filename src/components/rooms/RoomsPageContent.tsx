'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import RoomCard from '@/components/rooms/RoomCard';
import RoomFilter from '@/components/rooms/RoomFilter';
import BuildingSelector from '@/components/rooms/BuildingSelector';
import { 
  IoHomeOutline,
  IoBusinessOutline,
  IoPeopleOutline,
  IoTrophyOutline
} from 'react-icons/io5';

// Room data structure
const roomsData = [
  {
    id: 'standard-single',
    name: 'Standard Single Room',
    description: 'Comfortable accommodation with queen bed and modern amenities',
    capacity: 2,
    size: 25,
    basePrice: 150,
    images: ['/images/rooms/standard-single-1.jpg', '/images/rooms/standard-single-2.jpg'],
    features: ['Queen size bed', 'Free WiFi', 'Air conditioning', 'Safe', 'Minibar', 'Flat-screen TV', 'Private bathroom', 'Room service'],
    viewType: 'garden' as const,
    roomType: 'standard' as const,
    building: 'Building A',
    connectingAvailable: false,
  },
  {
    id: 'standard-twin',
    name: 'Standard Twin Room',
    description: 'Spacious room with two double beds, perfect for families or colleagues',
    capacity: 4,
    size: 30,
    basePrice: 200,
    images: ['/images/rooms/standard-twin-1.jpg', '/images/rooms/standard-twin-2.jpg'],
    features: ['Two double beds', 'Free WiFi', 'Air conditioning', 'Safe', 'Minibar', 'Flat-screen TV', 'Private bathroom', 'Room service'],
    viewType: 'pool' as const,
    roomType: 'standard' as const,
    building: 'Building B',
    connectingAvailable: true,
  },
  {
    id: 'deluxe-sea',
    name: 'Deluxe Room with Sea View',
    description: 'Premium accommodation with stunning Caspian Sea views and upgraded amenities',
    capacity: 3,
    size: 35,
    basePrice: 280,
    images: ['/images/rooms/deluxe-sea-1.jpg', '/images/rooms/deluxe-sea-2.jpg'],
    features: ['King size bed', 'Sea View', 'Private balcony', 'Premium amenities', 'Free WiFi', 'Smart TV', 'Marble bathroom', 'Bathrobes & slippers'],
    viewType: 'sea' as const,
    roomType: 'deluxe' as const,
    building: 'Building C',
    connectingAvailable: false,
  },
  {
    id: 'family-connected',
    name: 'Connected Family Rooms',
    description: 'Two adjoining rooms with connecting door, ideal for families with children',
    capacity: 6,
    size: 50,
    basePrice: 350,
    images: ['/images/rooms/family-connected-1.jpg', '/images/rooms/family-connected-2.jpg'],
    features: ['Two separate rooms', 'Connecting door', 'Multiple bed options', 'Free WiFi', 'Children amenities', 'Extra space', 'Room service'],
    viewType: 'garden' as const,
    roomType: 'family' as const,
    building: 'Building D',
    connectingAvailable: true,
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living area and premium business amenities',
    capacity: 4,
    size: 65,
    basePrice: 450,
    images: ['/images/rooms/executive-suite-1.jpg', '/images/rooms/executive-suite-2.jpg'],
    features: ['Separate bedroom', 'Living room', 'Work area', 'Sea view', 'Premium minibar', 'Smart TV', 'Luxury bathroom', 'Concierge service'],
    viewType: 'sea' as const,
    roomType: 'suite' as const,
    building: 'Building G',
    connectingAvailable: false,
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    description: 'Ultimate luxury accommodation with panoramic views and exclusive services',
    capacity: 6,
    size: 120,
    basePrice: 800,
    images: ['/images/rooms/presidential-suite-1.jpg', '/images/rooms/presidential-suite-2.jpg'],
    features: ['Master bedroom', 'Living room', 'Dining area', 'Private terrace', 'Panoramic sea view', 'Premium bar', 'Entertainment system', 'Butler service'],
    viewType: 'sea' as const,
    roomType: 'suite' as const,
    building: 'Building H',
    connectingAvailable: false,
  },
  {
    id: 'corporate-building',
    name: 'Corporate Building Units',
    description: 'Entire building rental for corporate events and long-term stays',
    capacity: 40,
    size: 400,
    basePrice: 1200,
    images: ['/images/rooms/corporate-building-1.jpg', '/images/rooms/corporate-building-2.jpg'],
    features: ['20 rooms per building', 'Two-floor layout', 'Meeting facilities', 'Business center', 'Conference room', 'Catering services', 'Custom services'],
    viewType: 'city' as const,
    roomType: 'corporate' as const,
    building: 'Corporate Building 1',
    connectingAvailable: false,
  },
];

export default function RoomsPageContent() {
  const t = useTranslations('rooms');
  const tCommon = useTranslations('common');
  
  const [filters, setFilters] = useState({
    roomType: 'all',
    building: 'all',
    viewType: 'all',
    capacity: null as number | null,
    priceRange: [50, 1000] as [number, number],
    amenities: [] as string[],
  });
  
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter rooms based on current filters
  const filteredRooms = roomsData.filter(room => {
    if (filters.roomType !== 'all' && room.roomType !== filters.roomType) return false;
    if (filters.building !== 'all' && room.building.toLowerCase().includes(filters.building)) return false;
    if (filters.viewType !== 'all' && room.viewType !== filters.viewType) return false;
    if (filters.capacity && room.capacity < filters.capacity) return false;
    if (room.basePrice < filters.priceRange[0] || room.basePrice > filters.priceRange[1]) return false;
    if (filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every(amenity => 
        room.features.some(feature => feature.toLowerCase().includes(amenity.toLowerCase()))
      );
      if (!hasAllAmenities) return false;
    }
    if (selectedBuilding && !room.building.toLowerCase().includes(selectedBuilding.toLowerCase())) return false;
    
    return true;
  });

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='relative h-[70vh] flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <Image
            src='/images/rooms/rooms-hero.jpg'
            alt='Luxury hotel rooms'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60' />
        </div>
        
        <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='heading-primary text-white mb-6'
          >
            {t('page_title')}
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl lg:text-2xl text-gray-100 mb-8'
          >
            {t('page_subtitle')}
          </motion.p>
          
          {/* Quick Stats */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'
          >
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-2'>250+</div>
              <div className='text-sm text-gray-200'>Luxury Rooms</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-2'>9</div>
              <div className='text-sm text-gray-200'>Buildings</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-2'>7</div>
              <div className='text-sm text-gray-200'>Room Types</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-2'>24/7</div>
              <div className='text-sm text-gray-200'>Concierge</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          {/* Intro Section */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='heading-secondary mb-6'>{t('hero_title')}</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto mb-12'>
              {t('hero_description')}
            </p>
            
            {/* Key Features */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='text-center'
              >
                <div className='w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IoHomeOutline className='w-8 h-8 text-primary-600' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Modern Comfort</h3>
                <p className='text-gray-600 text-sm'>Premium amenities and contemporary design</p>
              </motion.div>

              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='text-center'
              >
                <div className='w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IoPeopleOutline className='w-8 h-8 text-accent-600' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Family Options</h3>
                <p className='text-gray-600 text-sm'>Connecting rooms and family-friendly layouts</p>
              </motion.div>

              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='text-center'
              >
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IoBusinessOutline className='w-8 h-8 text-green-600' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Corporate Ready</h3>
                <p className='text-gray-600 text-sm'>Full building rentals and business facilities</p>
              </motion.div>

              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className='text-center'
              >
                <div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IoTrophyOutline className='w-8 h-8 text-yellow-600' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Luxury Service</h3>
                <p className='text-gray-600 text-sm'>5-star hospitality and personalized attention</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Filters */}
          <RoomFilter filters={filters} onFiltersChange={setFilters} />

          {/* Building Selector */}
          <BuildingSelector 
            selectedBuilding={selectedBuilding}
            onBuildingSelect={setSelectedBuilding}
            className='mb-8'
          />

          {/* Results Header */}
          <div className='flex items-center justify-between mb-8'>
            <div>
              <h3 className='text-xl font-semibold text-gray-900'>
                {filteredRooms.length} {filteredRooms.length === 1 ? 'Room' : 'Rooms'} Available
              </h3>
              <p className='text-gray-600 text-sm'>
                {selectedBuilding ? `Filtered by building selection` : 'Showing all available rooms'}
              </p>
            </div>
            
            <div className='flex items-center space-x-3'>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                List
              </button>
            </div>
          </div>

          {/* Rooms Grid */}
          {filteredRooms.length > 0 ? (
            <motion.div 
              layout
              className={`grid gap-8 mb-16 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
            >
              {filteredRooms.map((room, index) => (
                <RoomCard
                  key={room.id}
                  id={room.id}
                  name={room.name}
                  description={room.description}
                  capacity={room.capacity}
                  size={room.size}
                  basePrice={room.basePrice}
                  images={room.images}
                  features={room.features}
                  viewType={room.viewType}
                  roomType={room.roomType}
                  building={room.building}
                  connectingAvailable={room.connectingAvailable}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text-center py-16'
            >
              <div className='text-6xl mb-6'>🏨</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>No rooms match your criteria</h3>
              <p className='text-gray-600 mb-6'>Try adjusting your filters to see more options</p>
              <button 
                onClick={() => {
                  setFilters({
                    roomType: 'all',
                    building: 'all',
                    viewType: 'all',
                    capacity: null,
                    priceRange: [50, 1000],
                    amenities: [],
                  });
                  setSelectedBuilding(null);
                }}
                className='btn-primary'
              >
                Clear All Filters
              </button>
            </motion.div>
          )}

          {/* Corporate Partnership Section */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='bg-gradient-to-r from-gray-900 via-primary-900 to-gray-900 rounded-2xl p-12 text-center text-white mb-16'
          >
            <h2 className='text-3xl font-bold mb-6'>Corporate Partnerships</h2>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Trusted by international organizations including Saipem, BP, and FIFA. 
              We offer comprehensive corporate packages with special rates and dedicated services.
            </p>
            <div className='flex flex-col md:flex-row gap-4 justify-center'>
              <button className='btn-accent'>
                Corporate Inquiry
              </button>
              <button className='btn-outline border-white text-white hover:bg-white hover:text-gray-900'>
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}