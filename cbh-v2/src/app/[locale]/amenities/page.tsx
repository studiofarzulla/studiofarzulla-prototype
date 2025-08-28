import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import {
  Waves,
  Dumbbell,
  Sparkles,
  Users,
  TreePalm,
  Wifi,
  Car,
  Coffee,
  Heart,
  Music,
  Sun,
  Gamepad2,
} from 'lucide-react';

const amenities = [
  {
    id: 'beach',
    title: 'Private Beach',
    description: '800 meters of pristine Caspian coastline exclusively for our guests',
    image: 'https://images.unsplash.com/photo-1520942702018-0862200e6873?w=800',
    features: ['Private cabanas', 'Beach volleyball', 'Water sports', 'Sunset yoga sessions'],
    icon: <Waves className="h-8 w-8" />,
  },
  {
    id: 'pools',
    title: 'Swimming Pools',
    description: 'Three stunning pools including infinity pool with sea views',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=800',
    features: [
      'Heated infinity pool',
      'Kids splash zone',
      'Poolside service',
      'Evening pool parties',
    ],
    icon: <Sun className="h-8 w-8" />,
  },
  {
    id: 'spa',
    title: 'Wellness & Spa',
    description: 'Full-service spa offering traditional and modern treatments',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
    features: ['Turkish hammam', 'Finnish sauna', 'Massage therapy', 'Beauty treatments'],
    icon: <Sparkles className="h-8 w-8" />,
  },
  {
    id: 'fitness',
    title: 'Fitness Center',
    description: 'State-of-the-art equipment with personal training available',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    features: ['24/7 access', 'Personal trainers', 'Group classes', 'Modern equipment'],
    icon: <Dumbbell className="h-8 w-8" />,
  },
  {
    id: 'kids-club',
    title: 'Kids Club',
    description: 'Supervised activities and entertainment for children',
    image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800',
    features: [
      'Age-appropriate activities',
      'Professional childcare',
      'Educational programs',
      'Kids pool area',
    ],
    icon: <Gamepad2 className="h-8 w-8" />,
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    description: 'Live performances and events throughout the week',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    features: ['Live music nights', 'Cultural shows', 'Beach parties', 'Movie screenings'],
    icon: <Music className="h-8 w-8" />,
  },
];

const additionalServices = [
  { icon: <Wifi />, name: 'High-Speed WiFi', description: 'Complimentary throughout' },
  { icon: <Car />, name: 'Valet Parking', description: 'Free parking service' },
  { icon: <Coffee />, name: '24/7 Room Service', description: 'Available anytime' },
  { icon: <Heart />, name: 'Concierge', description: 'Personalized assistance' },
  { icon: <TreePalm />, name: 'Gardens', description: 'Landscaped grounds' },
  { icon: <Users />, name: 'Event Spaces', description: 'For special occasions' },
];

export default async function AmenitiesPage() {
  const t = await getTranslations('amenities');

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920"
            alt="Hotel Amenities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        </div>

        <div className="container relative z-10 text-center text-white">
          <h1 className="heading-1 mb-4 drop-shadow-2xl">{t('title')}</h1>
          <p className="mx-auto max-w-3xl text-xl opacity-90 md:text-2xl">{t('subtitle')}</p>
        </div>
      </section>

      {/* Main Amenities Grid */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="heading-2 mb-4">Resort Facilities</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Everything you need for an unforgettable stay at the Caspian Sea
            </p>
          </div>

          <div className="space-y-24">
            {amenities.map((amenity, index) => (
              <div
                key={amenity.id}
                className={`flex flex-col items-center gap-12 lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="relative h-[400px]">
                      <Image
                        src={amenity.image}
                        alt={amenity.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Overlay Icon */}
                    <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/90 text-primary-600 backdrop-blur-sm">
                      {amenity.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    <div>
                      <h3 className="heading-3 mb-3">{amenity.title}</h3>
                      <p className="text-lg leading-relaxed text-gray-600">{amenity.description}</p>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-4">
                      {amenity.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary-600" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div>
                      <button className="rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="heading-2 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">Complementary amenities to enhance your stay</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-600">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 py-20 text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-6">Experience Paradise</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Book your stay today and enjoy all our world-class amenities
          </p>
          <Link
            href="/rooms"
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-600 transition-all hover:scale-105 hover:shadow-2xl"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </>
  );
}
