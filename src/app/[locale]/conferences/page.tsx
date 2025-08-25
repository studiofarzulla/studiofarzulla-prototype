import { Metadata } from 'next';
import { getTranslations } from '@/lib/static-translations';
import Image from 'next/image';
import FacilityHero from '@/components/amenities/FacilityHero';
import ConferenceRoom from '@/components/conferences/ConferenceRoom';
import EventPackage from '@/components/conferences/EventPackage';
import { Button } from '@/components/ui/Button';
import {
  Users,
  Building,
  Award,
  Globe,
  Calendar,
  Presentation,
  Coffee,
  Car,
  Phone,
  Mail,
} from 'lucide-react';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title:
    'Professional Conference & Corporate Event Facilities | The Crescent Beach Hotel',
  description:
    'Host successful corporate events at The Crescent Beach Hotel. State-of-the-art conference facilities, meeting rooms, and comprehensive event packages. Trusted by Saipem, BP, Baku City Circuit.',
};

interface PageProps {  params?: { locale?: string };}
export default function ConferencesPage({ params }: PageProps) {
  const t = getTranslations(params?.locale || 'en');

  const conferenceRooms = [
    {
      name: 'Grand Conference Hall',
      capacity: {
        theater: 300,
        classroom: 200,
        boardroom: 80,
        reception: 400,
      },
      size: '400 sq meters',
      equipment: [
        'High-definition projection systems',
        'Professional wireless microphone system',
        'Advanced lighting control',
        'High-speed internet (fiber optic)',
        'Climate control system',
        'Audio recording capabilities',
      ],
      features: [
        'Natural lighting with blackout options',
        'Dedicated entrance and reception area',
        'Adjacent breakout rooms',
        'VIP green rooms',
        'Direct beach access',
        'Catering preparation area',
      ],
      image: '/images/conferences/grand-hall.jpg',
      priceRange: '$2,500-4,500/day',
    },
    {
      name: 'Executive Boardroom',
      capacity: {
        theater: 60,
        classroom: 40,
        boardroom: 24,
        reception: 80,
      },
      size: '120 sq meters',
      equipment: [
        'Interactive smart boards',
        'Video conferencing system',
        'Document camera',
        'Wireless presentation system',
        'Premium sound system',
        'LED lighting system',
      ],
      features: [
        'Executive-level furnishing',
        'Private entrance',
        'Adjacent catering area',
        'Sea view windows',
        'High-end conferencing table',
        'Dedicated support staff',
      ],
      image: '/images/conferences/executive-boardroom.jpg',
      priceRange: '$800-1,500/day',
    },
    {
      name: 'Breakout Meeting Rooms',
      capacity: {
        theater: 40,
        classroom: 24,
        boardroom: 16,
        reception: 50,
      },
      size: '80 sq meters each',
      equipment: [
        'LCD displays',
        'Wireless microphones',
        'Flip charts and whiteboards',
        'Conference call facilities',
        'Adjustable lighting',
        'Temperature control',
      ],
      features: [
        'Flexible room configurations',
        'Mobile furniture',
        'Natural light options',
        'Soundproof design',
        'Adjacent to main halls',
        'Coffee station access',
      ],
      image: '/images/conferences/breakout-rooms.jpg',
      priceRange: '$400-800/day',
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <FacilityHero
        title='Professional Conference Facilities'
        subtitle='Where business meets excellence'
        description='Host successful corporate events, conferences, and meetings in our state-of-the-art facilities with comprehensive support services and stunning Caspian Sea views.'
        backgroundImage='/images/conferences/conference-hero.jpg'
        ctaText='Schedule Site Visit'
        ctaLink='/contact'
      />

      {/* Quick Stats */}
      <section className='py-12 bg-white border-b'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl font-bold text-primary-600 mb-2'>
                500+
              </div>
              <p className='text-gray-600'>Corporate Events</p>
            </div>
            <div>
              <div className='text-4xl font-bold text-primary-600 mb-2'>
                50+
              </div>
              <p className='text-gray-600'>International Companies</p>
            </div>
            <div>
              <div className='text-4xl font-bold text-primary-600 mb-2'>
                25,000+
              </div>
              <p className='text-gray-600'>Business Delegates</p>
            </div>
            <div>
              <div className='text-4xl font-bold text-primary-600 mb-2'>
                98%
              </div>
              <p className='text-gray-600'>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Room Details */}
      <ConferenceRoom rooms={conferenceRooms} />

      {/* Corporate Partnerships Section */}
      <section className='section-padding bg-gradient-to-r from-blue-50 to-indigo-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>
              Trusted by Leading Organizations
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              We've proudly hosted major international corporations, sports
              organizations, and government entities for their most important
              events and meetings.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg shadow-soft p-8'>
              <div className='flex items-start mb-6'>
                <div className='bg-blue-100 p-3 rounded-full mr-4'>
                  <Building className='h-8 w-8 text-blue-600' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold mb-2'>
                    Corporate Partners
                  </h3>
                  <p className='text-gray-600'>
                    Long-term relationships with industry leaders
                  </p>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='border-l-4 border-blue-500 pl-4'>
                  <h4 className='font-semibold text-lg'>Saipem S.p.A.</h4>
                  <p className='text-gray-600 text-sm mb-2'>
                    Italian Multinational Oil & Gas Company
                  </p>
                  <p className='text-gray-700'>
                    Multi-week corporate training programs, executive retreats,
                    and international team building events. Consistent choice
                    for Azerbaijan operations.
                  </p>
                </div>

                <div className='border-l-4 border-green-500 pl-4'>
                  <h4 className='font-semibold text-lg'>
                    BP (British Petroleum)
                  </h4>
                  <p className='text-gray-600 text-sm mb-2'>
                    Global Energy Corporation
                  </p>
                  <p className='text-gray-700'>
                    High-level executive meetings, strategic planning sessions,
                    and regional management conferences for Caspian operations.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-soft p-8'>
              <div className='flex items-start mb-6'>
                <div className='bg-red-100 p-3 rounded-full mr-4'>
                  <Award className='h-8 w-8 text-red-600' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold mb-2'>Sports & Events</h3>
                  <p className='text-gray-600'>
                    International sports and entertainment events
                  </p>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='border-l-4 border-red-500 pl-4'>
                  <h4 className='font-semibold text-lg'>
                    Baku City Circuit (Formula 1)
                  </h4>
                  <p className='text-gray-600 text-sm mb-2'>
                    Azerbaijan Grand Prix Organization
                  </p>
                  <p className='text-gray-700'>
                    Annual employee appreciation events, corporate hospitality,
                    and international media briefings during F1 race weekends.
                  </p>
                </div>

                <div className='border-l-4 border-orange-500 pl-4'>
                  <h4 className='font-semibold text-lg'>FIFA Beach Soccer</h4>
                  <p className='text-gray-600 text-sm mb-2'>
                    International Football Association
                  </p>
                  <p className='text-gray-700'>
                    Tournament planning meetings, international delegation
                    hosting, and official FIFA committee sessions for beach
                    football events.
                  </p>
                </div>

                <div className='border-l-4 border-purple-500 pl-4'>
                  <h4 className='font-semibold text-lg'>
                    International Handball Teams
                  </h4>
                  <p className='text-gray-600 text-sm mb-2'>
                    European National Teams
                  </p>
                  <p className='text-gray-700'>
                    Team accommodation, training coordination meetings, and
                    international sports delegation events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Packages */}
      <EventPackage />

      {/* Corporate Building Rental */}
      <section className='section-padding bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='heading-secondary mb-6'>
                Corporate Building Rental
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Rent entire buildings for extended corporate programs, training
                sessions, and team retreats. Each building contains 20 premium
                rooms with dedicated facilities and services.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-white p-6 rounded-lg shadow-soft'>
                  <Building className='h-8 w-8 text-primary-600 mb-3' />
                  <h4 className='font-semibold mb-2'>20 Rooms per Building</h4>
                  <p className='text-gray-600 text-sm'>
                    Complete privacy and dedicated facilities for your team
                  </p>
                </div>

                <div className='bg-white p-6 rounded-lg shadow-soft'>
                  <Users className='h-8 w-8 text-primary-600 mb-3' />
                  <h4 className='font-semibold mb-2'>Up to 40 Guests</h4>
                  <p className='text-gray-600 text-sm'>
                    Comfortable accommodation with room for expansion
                  </p>
                </div>

                <div className='bg-white p-6 rounded-lg shadow-soft'>
                  <Presentation className='h-8 w-8 text-primary-600 mb-3' />
                  <h4 className='font-semibold mb-2'>
                    Dedicated Meeting Space
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Private conference facilities within the building
                  </p>
                </div>

                <div className='bg-white p-6 rounded-lg shadow-soft'>
                  <Coffee className='h-8 w-8 text-primary-600 mb-3' />
                  <h4 className='font-semibold mb-2'>Catering Services</h4>
                  <p className='text-gray-600 text-sm'>
                    On-site dining and meeting refreshment options
                  </p>
                </div>
              </div>

              <div className='flex gap-4'>
                <Button size='lg'>Get Building Rental Quote</Button>
                <Button variant='outline' size='lg'>
                  View Floor Plans
                </Button>
              </div>
            </div>

            <div className='relative'>
              <div className='aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-lg relative h-96'>
                <Image
                  src='/images/conferences/corporate-building.jpg'
                  alt='Corporate Building'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg' />
              <div className='absolute bottom-6 left-6 text-white'>
                <h3 className='text-2xl font-bold'>
                  Corporate Building Complex
                </h3>
                <p className='text-gray-200'>
                  Dedicated corporate accommodation facilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Building & Recreation */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>
              Team Building & Corporate Recreation
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Combine business with pleasure through our comprehensive team
              building programs and recreational activities designed to
              strengthen corporate relationships.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-soft overflow-hidden'>
              <div className='relative h-48'>
                <Image
                  src='/images/conferences/beach-team-building.jpg'
                  alt='Beach Team Building'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>
                  <h4 className='text-xl font-bold'>Beach Activities</h4>
                </div>
              </div>
              <div className='p-6'>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• Beach volleyball tournaments</li>
                  <li>• Water sports competitions</li>
                  <li>• Coastal team challenges</li>
                  <li>• Sunset networking sessions</li>
                </ul>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-soft overflow-hidden'>
              <div className='relative h-48'>
                <Image
                  src='/images/conferences/indoor-activities.jpg'
                  alt='Indoor Team Building'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>
                  <h4 className='text-xl font-bold'>Indoor Programs</h4>
                </div>
              </div>
              <div className='p-6'>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• Leadership workshops</li>
                  <li>• Problem-solving activities</li>
                  <li>• Communication exercises</li>
                  <li>• Strategic planning sessions</li>
                </ul>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-soft overflow-hidden'>
              <div className='relative h-48'>
                <Image
                  src='/images/conferences/wellness-programs.jpg'
                  alt='Wellness Programs'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>
                  <h4 className='text-xl font-bold'>Wellness Programs</h4>
                </div>
              </div>
              <div className='p-6'>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• Group yoga sessions</li>
                  <li>• Spa team experiences</li>
                  <li>• Fitness challenges</li>
                  <li>• Relaxation workshops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Planning */}
      <section className='section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold mb-6'>
                Ready to Plan Your Event?
              </h2>
              <p className='text-xl mb-8 text-primary-100 leading-relaxed'>
                Our experienced event planning team is ready to help you create
                a successful and memorable corporate event. From initial
                planning to final execution, we handle every detail.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-center'>
                  <Phone className='h-6 w-6 text-primary-200 mr-3' />
                  <span className='text-lg'>+994 12 123 4567</span>
                </div>
                <div className='flex items-center'>
                  <Mail className='h-6 w-6 text-primary-200 mr-3' />
                  <span className='text-lg'>events@crescentbeachhotel.com</span>
                </div>
                <div className='flex items-center'>
                  <Globe className='h-6 w-6 text-primary-200 mr-3' />
                  <span className='text-lg'>
                    Available 24/7 for international clients
                  </span>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  className='bg-white text-primary-600 hover:bg-gray-100'
                >
                  Request Proposal
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-white text-white hover:bg-white hover:text-primary-600'
                >
                  Schedule Site Visit
                </Button>
              </div>
            </div>

            <div className='bg-white/10 rounded-2xl p-8'>
              <h3 className='text-2xl font-bold mb-6'>
                Event Planning Process
              </h3>
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0'>
                    <span className='text-sm font-bold'>1</span>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Initial Consultation</h4>
                    <p className='text-primary-100 text-sm'>
                      Understand your requirements and objectives
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0'>
                    <span className='text-sm font-bold'>2</span>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Custom Proposal</h4>
                    <p className='text-primary-100 text-sm'>
                      Detailed proposal with venue options and pricing
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0'>
                    <span className='text-sm font-bold'>3</span>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Event Coordination</h4>
                    <p className='text-primary-100 text-sm'>
                      Complete event management and on-site support
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0'>
                    <span className='text-sm font-bold'>4</span>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Follow-up</h4>
                    <p className='text-primary-100 text-sm'>
                      Post-event feedback and future planning support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
