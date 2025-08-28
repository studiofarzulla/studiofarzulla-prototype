import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Users, Wifi, Coffee, Bath, Tv, Wind, Car } from 'lucide-react';

// Mock data for room types
const roomTypes = [
  {
    id: 'standard-single',
    name: 'Standard Single Room',
    description: 'Comfortable single room with sea view, perfect for solo travelers',
    price: 120,
    size: 25,
    capacity: 1,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
    amenities: ['wifi', 'tv', 'ac', 'coffee'],
    available: true,
  },
  {
    id: 'standard-twin',
    name: 'Standard Twin Room',
    description: 'Spacious twin room with two comfortable beds and partial sea view',
    price: 180,
    size: 32,
    capacity: 2,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
    amenities: ['wifi', 'tv', 'ac', 'coffee', 'bath'],
    available: true,
  },
  {
    id: 'deluxe-sea-view',
    name: 'Deluxe Sea View',
    description: 'Elegant room with panoramic Caspian Sea views and premium amenities',
    price: 280,
    size: 45,
    capacity: 2,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    amenities: ['wifi', 'tv', 'ac', 'coffee', 'bath', 'parking'],
    available: true,
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite',
    description: 'Luxurious suite with separate living area and stunning beach views',
    price: 450,
    size: 65,
    capacity: 3,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800',
    amenities: ['wifi', 'tv', 'ac', 'coffee', 'bath', 'parking'],
    available: false,
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    description: 'Spacious two-bedroom suite ideal for families with children',
    price: 580,
    size: 85,
    capacity: 4,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
    amenities: ['wifi', 'tv', 'ac', 'coffee', 'bath', 'parking'],
    available: true,
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    description: 'Ultimate luxury with panoramic views, private terrace, and butler service',
    price: 1200,
    size: 150,
    capacity: 4,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800',
    amenities: ['wifi', 'tv', 'ac', 'coffee', 'bath', 'parking'],
    available: true,
  },
];

const amenityIcons: { [key: string]: React.ReactNode } = {
  wifi: <Wifi className="w-5 h-5" />,
  tv: <Tv className="w-5 h-5" />,
  ac: <Wind className="w-5 h-5" />,
  coffee: <Coffee className="w-5 h-5" />,
  bath: <Bath className="w-5 h-5" />,
  parking: <Car className="w-5 h-5" />,
};

export default async function RoomsPage() {
  const t = await getTranslations('rooms');

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920"
            alt="Hotel Rooms"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <h1 className="heading-1 mb-4 drop-shadow-2xl">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b sticky top-16 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
                All Rooms
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Available Only
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Suites
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="px-4 py-2 bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-primary-600">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Size</option>
                <option>Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <div
                key={room.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  {!room.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium">
                        Fully Booked
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-lg">
                    <span className="text-2xl font-bold">${room.price}</span>
                    <span className="text-sm opacity-80">/night</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>

                  {/* Room Info */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{room.size}m²</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Up to {room.capacity} guests</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex gap-3 mb-6">
                    {room.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600"
                        title={amenity}
                      >
                        {amenityIcons[amenity]}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      disabled={!room.available}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                        room.available
                          ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg hover:scale-105'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {room.available ? 'Book Now' : 'Unavailable'}
                    </button>
                    <button className="py-2 px-4 border-2 border-gray-200 rounded-lg font-medium hover:border-primary-600 hover:text-primary-600 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our reservation team for personalized assistance and special offers
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="tel:+994123456789"
              className="px-8 py-3 border-2 border-white rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-all"
            >
              Call: +994 12 345 67 89
            </a>
          </div>
        </div>
      </section>
    </>
  );
}