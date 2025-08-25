import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from '@/lib/static-translations';
import Image from 'next/image';
import FacilityHero from '@/components/amenities/FacilityHero';
import BeachSection from '@/components/amenities/BeachSection';
import { Button } from '@/components/ui/Button';
import LocaleLink from '@/lib/locale-link';
import { ArrowLeft, Waves, Umbrella, Volleyball, Ship } from 'lucide-react';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Private Caspian Sea Beach | The Crescent Beach Hotel Amenities',
  description:
    'Experience our exclusive private beach on the Caspian Sea with premium sunbeds, water sports, beach volleyball, and professional beachside service.',
};

interface PageProps {
  params?: { locale?: string };
}

export default function BeachPage({ params }: PageProps) {
  const t = getTranslations(params?.locale || 'en');

  return (
    <div className='min-h-screen'>
      {/* Navigation */}
      <section className='bg-white border-b'>
        <div className='container mx-auto px-4 py-4'>
          <LocaleLink
            href='/amenities'
            className='inline-flex items-center text-gray-600 hover:text-primary-600'
          >
            <ArrowLeft className='h-4 w-4 mr-2' />
            Back to Amenities
          </LocaleLink>
        </div>
      </section>

      {/* Hero Section */}
      <FacilityHero
        title='Private Caspian Sea Beach'
        subtitle='500 meters of exclusive beachfront paradise'
        description='Enjoy pristine private access to the Caspian Sea with professional beach services, water sports, and luxury amenities in a completely private setting.'
        backgroundImage='/images/amenities/private-beach-hero.jpg'
        ctaText='Reserve Beach Access'
        ctaLink='/contact'
      />

      {/* Beach Overview */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
              <h2 className='text-3xl font-bold mb-6'>Your Private Paradise</h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Our exclusive 500-meter private beach offers guests unparalleled
                access to the pristine waters of the Caspian Sea. With dedicated
                beach staff, premium amenities, and a variety of water
                activities, it's the perfect place to relax, play, and create
                unforgettable memories.
              </p>
              <p className='text-gray-600 mb-8 leading-relaxed'>
                The beach features soft sand, crystal-clear water, and is
                completely private to hotel guests. Whether you prefer active
                water sports or peaceful relaxation, our beach caters to every
                preference with professional staff ensuring your comfort
                throughout your stay.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='bg-blue-50 p-6 rounded-lg'>
                  <Waves className='h-8 w-8 text-blue-600 mb-3' />
                  <h4 className='font-semibold mb-2'>Pristine Waters</h4>
                  <p className='text-gray-600 text-sm'>
                    Clean, clear Caspian Sea water perfect for swimming and
                    water activities
                  </p>
                </div>

                <div className='bg-blue-50 p-6 rounded-lg'>
                  <Umbrella className='h-8 w-8 text-blue-600 mb-3' />
                  <h4 className='font-semibold mb-2'>Premium Service</h4>
                  <p className='text-gray-600 text-sm'>
                    Dedicated beach staff providing towels, drinks, and
                    personalized service
                  </p>
                </div>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='bg-white rounded-lg shadow-soft p-6'>
                <h3 className='text-xl font-semibold mb-4'>Beach Features</h3>
                <ul className='space-y-3'>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    <span className='text-sm'>500m private shoreline</span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    <span className='text-sm'>
                      Professional lifeguard on duty
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    <span className='text-sm'>Premium sunbeds & umbrellas</span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    <span className='text-sm'>
                      Beachside food & beverage service
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    <span className='text-sm'>Changing rooms & showers</span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    <span className='text-sm'>Equipment rental available</span>
                  </li>
                </ul>
              </div>

              <div className='bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6'>
                <h3 className='text-lg font-semibold mb-2'>Beach Hours</h3>
                <p className='text-blue-100 text-sm mb-4'>
                  Daily: 8:00 AM - 8:00 PM
                </p>
                <p className='text-blue-100 text-sm'>
                  Lifeguard on duty during all operating hours. Evening beach
                  access available for hotel guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beach Activities */}
      <BeachSection />

      {/* Water Sports Gallery */}
      <section className='section-padding bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>
              Water Sports & Activities
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              From adrenaline-pumping water sports to relaxing beach activities,
              there's something for everyone at our private beach.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-soft overflow-hidden'>
              <div className='relative h-48'>
                <Image
                  src='/images/amenities/beach-volleyball.jpg'
                  alt='Beach Volleyball'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>
                  <Volleyball className='h-8 w-8 mb-2' />
                  <h3 className='text-lg font-bold'>Beach Volleyball</h3>
                </div>
              </div>
              <div className='p-6'>
                <p className='text-gray-600 text-sm mb-4'>
                  Professional volleyball court with equipment provided. Daily
                  tournaments and casual games welcome.
                </p>
                <ul className='text-sm text-gray-600 space-y-1'>
                  <li>• Professional sand court</li>
                  <li>• Equipment provided</li>
                  <li>• Daily tournaments</li>
                  <li>• Coaching available</li>
                </ul>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-soft overflow-hidden'>
              <div className='relative h-48'>
                <Image
                  src='/images/amenities/water-sports.jpg'
                  alt='Water Sports'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>
                  <Ship className='h-8 w-8 mb-2' />
                  <h3 className='text-lg font-bold'>Water Sports</h3>
                </div>
              </div>
              <div className='p-6'>
                <p className='text-gray-600 text-sm mb-4'>
                  Variety of water sports including kayaking, paddleboarding,
                  and jet skiing with safety equipment.
                </p>
                <ul className='text-sm text-gray-600 space-y-1'>
                  <li>• Kayaking & Paddleboarding</li>
                  <li>• Jet skiing (seasonal)</li>
                  <li>• Safety equipment included</li>
                  <li>• Professional instruction</li>
                </ul>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-soft overflow-hidden'>
              <div className='relative h-48'>
                <Image
                  src='/images/amenities/beach-relaxation.jpg'
                  alt='Beach Relaxation'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>
                  <Umbrella className='h-8 w-8 mb-2' />
                  <h3 className='text-lg font-bold'>Relaxation Zones</h3>
                </div>
              </div>
              <div className='p-6'>
                <p className='text-gray-600 text-sm mb-4'>
                  Quiet areas with premium sunbeds, umbrellas, and personalized
                  beach service for ultimate relaxation.
                </p>
                <ul className='text-sm text-gray-600 space-y-1'>
                  <li>• Premium sunbeds</li>
                  <li>• Umbrella service</li>
                  <li>• Beachside dining</li>
                  <li>• Massage services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beach Services */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          <div className='bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
              <div>
                <h2 className='text-3xl font-bold mb-4'>
                  Premium Beach Services
                </h2>
                <p className='text-lg text-primary-100 mb-6'>
                  Enhance your beach experience with our comprehensive range of
                  personalized services designed for your comfort and enjoyment.
                </p>
                <div className='space-y-3'>
                  <div className='flex items-center'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3'></div>
                    <span>Personalized beach concierge service</span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3'></div>
                    <span>Fresh towel service throughout the day</span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3'></div>
                    <span>Beachside food and beverage delivery</span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3'></div>
                    <span>Equipment rental and setup</span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3'></div>
                    <span>Private cabana reservations</span>
                  </div>
                </div>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold mb-6'>
                  Ready for Beach Paradise?
                </h3>
                <div className='space-y-4'>
                  <Button
                    size='lg'
                    className='w-full bg-white text-primary-600 hover:bg-gray-100'
                  >
                    Reserve Beach Access
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='w-full border-white text-white hover:bg-white hover:text-primary-600'
                  >
                    Contact Beach Concierge
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
