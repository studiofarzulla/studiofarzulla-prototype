import type { Metadata } from 'next';
import { getTranslations } from '@/lib/static-translations';
import Image from 'next/image';
import FacilityHero from '@/components/amenities/FacilityHero';
import AmenityCard from '@/components/amenities/AmenityCard';
import BeachSection from '@/components/amenities/BeachSection';
import WellnessFeatures from '@/components/amenities/WellnessFeatures';
import PoolInfo from '@/components/amenities/PoolInfo';
import ActivitySchedule from '@/components/amenities/ActivitySchedule';
import QuickAccessNav from '@/components/amenities/QuickAccessNav';
import { Button } from '@/components/ui/Button';
import {
  Waves,
  Dumbbell,
  Baby,
  Music,
  Umbrella,
  Sparkles,
  Users,
  Star,
  MapPin,
  Clock,
} from 'lucide-react';

// Enable ISR with 12 hour revalidation for amenities
export const revalidate = 43200; // 12 hours

export const metadata: Metadata = {
  title: 'Luxury Hotel Amenities & Facilities | The Crescent Beach Hotel',
  description:
    'Discover world-class amenities at The Crescent Beach Hotel: private Caspian Sea beach, infinity pools, wellness center with saunas, kids club, entertainment stage, and premium facilities.',
};

interface PageProps {  params?: { locale?: string };}
export default function AmenitiesPage({ params }: PageProps) {
  const t = getTranslations(params?.locale || 'en');

  const amenities = [
    {
      title: 'Private Caspian Beach',
      description: 'Exclusive 500m private beach with premium services',
      iconName: 'waves',
      image: '/images/amenities/private-beach.jpg',
      features: [
        'Direct Caspian Sea access',
        'Premium sunbeds & umbrellas',
        'Beach volleyball court',
        'Water sports equipment',
        'Beachside service',
        'Private cabanas available',
      ],
      href: '/amenities/beach',
    },
    {
      title: 'Infinity & Indoor Pools',
      description: 'Multiple pools for every preference and season',
      iconName: 'waves',
      image: '/images/amenities/pools.jpg',
      features: [
        'Outdoor infinity pool',
        'Heated indoor pool',
        'Dedicated kids pool',
        'Pool bar service',
        'Premium loungers',
        'Year-round access',
      ],
      href: '/amenities/pools',
    },
    {
      title: 'Wellness Center',
      description: 'Complete wellness facilities for body and mind',
      iconName: 'dumbbell',
      image: '/images/amenities/wellness.jpg',
      features: [
        'Modern fitness center',
        'Steam sauna',
        'Dry Finnish sauna',
        'Spa treatment rooms',
        'Yoga & meditation space',
        'Personal training available',
      ],
      href: '/amenities/wellness',
    },
    {
      title: 'Kids Club & Family Area',
      description: 'Safe and fun environment for children',
      iconName: 'baby',
      image: '/images/amenities/kids-club.jpg',
      features: [
        'Supervised play area',
        'Age-appropriate activities',
        'Educational programs',
        'Arts and crafts',
        'Mini water park',
        'Babysitting services',
      ],
      href: '/amenities/kids-club',
    },
    {
      title: 'The Shade Bar',
      description: 'Unique sail-covered beachside relaxation',
      iconName: 'umbrella',
      image: '/images/amenities/shade-bar.jpg',
      features: [
        'Iconic sail structure',
        'Panoramic sea views',
        'Signature cocktails',
        'Light meals & snacks',
        'Sunset viewing spot',
        'Live DJ sessions',
      ],
    },
    {
      title: 'Entertainment Stage',
      description: 'Professional venue for events and performances',
      iconName: 'music',
      image: '/images/amenities/entertainment-stage.jpg',
      features: [
        'Professional sound system',
        'Large performance stage',
        'Live music events',
        'Cultural shows',
        'Guest entertainment',
        'Private event hosting',
      ],
      href: '/amenities/entertainment',
    },
  ];

  const poolData = [
    {
      name: 'Outdoor Infinity Pool',
      type: 'Saltwater Infinity Pool',
      depth: '1.2m - 2.8m',
      capacity: '60 guests',
      hours: '6:00 AM - 10:00 PM',
      features: [
        'Infinity edge design',
        'Saltwater system',
        'Panoramic Caspian Sea views',
        'Underwater lighting',
        'Pool bar service',
        'Premium loungers included',
      ],
      image: '/images/amenities/infinity-pool.jpg',
    },
    {
      name: 'Indoor Heated Pool',
      type: 'All-Weather Indoor Pool',
      temperature: '28°C (82°F)',
      depth: '1.0m - 2.2m',
      capacity: '40 guests',
      hours: '6:00 AM - 11:00 PM',
      features: [
        'Climate controlled environment',
        'UV-treated water system',
        'Spa jets and features',
        'Natural lighting',
        'Relaxation area',
        'Towel service included',
      ],
      image: '/images/amenities/indoor-pool.jpg',
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <FacilityHero
        title='World-Class Amenities'
        subtitle='Experience luxury at every turn'
        description='From our private Caspian Sea beach to our comprehensive wellness facilities, every amenity is designed to create unforgettable experiences for our guests.'
        backgroundImage='/images/amenities/amenities-hero.jpg'
      />

      {/* Quick Access Navigation */}
      <section className='py-12 bg-white border-b'>
        <div className='container mx-auto px-4'>
          <QuickAccessNav 
            items={[
              { name: 'Private Beach', iconName: 'waves', href: '#beach' },
              { name: 'Pools', iconName: 'waves', href: '#pools' },
              { name: 'Wellness', iconName: 'dumbbell', href: '#wellness' },
              { name: 'Kids Club', iconName: 'baby', href: '#kids' },
              { name: 'Entertainment', iconName: 'music', href: '#entertainment' },
              { name: 'Activities', iconName: 'sparkles', href: '#activities' },
            ]}
          />
        </div>
      </section>

      {/* Amenities Overview */}
      <section className='section-padding bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>
              Premium Facilities & Services
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Discover our comprehensive collection of luxury amenities, each
              carefully designed to enhance your stay and create memorable
              experiences on the Caspian Sea shore.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {amenities.map((amenity, index) => (
              <AmenityCard
                key={index}
                title={amenity.title}
                description={amenity.description}
                iconName={amenity.iconName}
                image={amenity.image}
                features={amenity.features}
                href={amenity.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Private Beach Section */}
      <div id='beach'>
        <BeachSection />
      </div>

      {/* Pool Facilities */}
      <div id='pools'>
        <PoolInfo pools={poolData} />
      </div>

      {/* Wellness Center */}
      <div id='wellness'>
        <WellnessFeatures />
      </div>

      {/* Kids & Family Features */}
      <section
        id='kids'
        className='section-padding bg-gradient-to-r from-orange-50 to-yellow-50'
      >
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='heading-secondary mb-6'>
                Kids Club & Family Area
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Our dedicated kids area provides a safe, fun, and educational
                environment where children can play, learn, and make new friends
                while parents enjoy peace of mind.
              </p>

              <div className='grid grid-cols-2 gap-6 mb-8'>
                <div>
                  <div className='bg-white p-4 rounded-lg shadow-soft mb-4'>
                    <Baby className='h-8 w-8 text-orange-600 mb-2' />
                    <h4 className='font-semibold'>Supervised Play</h4>
                    <p className='text-sm text-gray-600'>
                      Professional childcare staff
                    </p>
                  </div>
                </div>
                <div>
                  <div className='bg-white p-4 rounded-lg shadow-soft mb-4'>
                    <Users className='h-8 w-8 text-orange-600 mb-2' />
                    <h4 className='font-semibold'>Age Groups</h4>
                    <p className='text-sm text-gray-600'>3-12 years programs</p>
                  </div>
                </div>
                <div>
                  <div className='bg-white p-4 rounded-lg shadow-soft mb-4'>
                    <Clock className='h-8 w-8 text-orange-600 mb-2' />
                    <h4 className='font-semibold'>Operating Hours</h4>
                    <p className='text-sm text-gray-600'>9:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div>
                  <div className='bg-white p-4 rounded-lg shadow-soft mb-4'>
                    <Star className='h-8 w-8 text-orange-600 mb-2' />
                    <h4 className='font-semibold'>Activities</h4>
                    <p className='text-sm text-gray-600'>Daily programs</p>
                  </div>
                </div>
              </div>

              <Button size='lg'>Learn More About Kids Programs</Button>
            </div>

            <div className='relative'>
              <div className='aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-lg relative h-96'>
                <Image
                  src='/images/amenities/kids-area.jpg'
                  alt='Kids Club'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment & Events */}
      <section id='entertainment' className='section-padding'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>
              Entertainment & Special Events
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Experience vibrant entertainment and cultural performances at our
              professional stage venue, featuring regular shows, live music, and
              special celebrations.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
              <div className='relative h-96 rounded-lg overflow-hidden shadow-lg'>
                <Image
                  src='/images/amenities/entertainment-stage-night.jpg'
                  alt='Entertainment Stage'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-6 left-6 text-white'>
                  <h3 className='text-3xl font-bold mb-2'>
                    Professional Entertainment Stage
                  </h3>
                  <p className='text-lg text-gray-200'>
                    Hosting world-class performances and events
                  </p>
                </div>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='bg-white p-6 rounded-lg shadow-soft'>
                <Music className='h-8 w-8 text-primary-600 mb-3' />
                <h4 className='text-xl font-semibold mb-2'>
                  Live Performances
                </h4>
                <p className='text-gray-600 text-sm mb-4'>
                  Regular live music, cultural shows, and guest performances
                  featuring local and international artists.
                </p>
                <ul className='text-sm text-gray-600 space-y-1'>
                  <li>• Nightly entertainment programs</li>
                  <li>• Cultural dance performances</li>
                  <li>• Live jazz and acoustic sessions</li>
                  <li>• Guest DJ nights</li>
                </ul>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-soft'>
                <Sparkles className='h-8 w-8 text-primary-600 mb-3' />
                <h4 className='text-xl font-semibold mb-2'>Special Events</h4>
                <p className='text-gray-600 text-sm mb-4'>
                  Seasonal celebrations, themed parties, and exclusive events
                  for our guests.
                </p>
                <ul className='text-sm text-gray-600 space-y-1'>
                  <li>• Holiday celebrations</li>
                  <li>• Beach party nights</li>
                  <li>• Wine tasting events</li>
                  <li>• Cultural festivals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Activities Schedule */}
      <div id='activities'>
        <ActivitySchedule />
      </div>

      {/* Additional Services */}
      <section className='section-padding bg-gradient-to-r from-primary-50 to-secondary-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>Additional Services</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Enhance your stay with our comprehensive range of premium services
              and facilities
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                title: 'Business Center',
                description: 'Complete office facilities and meeting rooms',
                icon: '💼',
              },
              {
                title: '24/7 Concierge',
                description: 'Personalized assistance and local expertise',
                icon: '🏨',
              },
              {
                title: 'Laundry Service',
                description: 'Professional cleaning and pressing services',
                icon: '👔',
              },
              {
                title: 'Transportation',
                description: 'Airport transfers and local transport',
                icon: '🚗',
              },
              {
                title: 'Medical Services',
                description: 'On-call medical assistance and first aid',
                icon: '🏥',
              },
              {
                title: 'Shopping Service',
                description: 'Personal shopping and delivery assistance',
                icon: '🛍️',
              },
              {
                title: 'Pet Care',
                description: 'Pet-friendly accommodations and services',
                icon: '🐕',
              },
              {
                title: 'Currency Exchange',
                description: 'On-site currency exchange services',
                icon: '💱',
              },
            ].map((service, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-soft text-center hover:shadow-lg transition-shadow'
              >
                <div className='text-4xl mb-3'>{service.icon}</div>
                <h4 className='font-semibold mb-2'>{service.title}</h4>
                <p className='text-gray-600 text-sm'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='section-padding bg-white'>
        <div className='container mx-auto px-4'>
          <div className='bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-center text-white'>
            <h2 className='text-4xl font-bold mb-4'>
              Ready to Experience Luxury?
            </h2>
            <p className='text-xl mb-8 text-primary-100 max-w-2xl mx-auto'>
              Book your stay now and enjoy access to all our world-class
              amenities and facilities on the beautiful Caspian Sea shore.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-white text-primary-600 hover:bg-gray-100'
              >
                Book Your Stay Now
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white text-white hover:bg-white hover:text-primary-600'
              >
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
