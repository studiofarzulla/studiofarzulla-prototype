import type { Metadata } from 'next';
import { getTranslations } from '@/lib/static-translations';
import Image from 'next/image';

// Force static generation for this page
export const dynamic = 'force-static';
import FacilityHero from '@/components/amenities/FacilityHero';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import StageFeatures from '@/components/entertainment/StageFeatures';
import {
  ArrowLeft,
  Music,
  Mic,
  Users,
  Calendar,
  Star,
  Volume2,
  Spotlight,
  Clock,
  MapPin,
  Ticket,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Entertainment Stage & Live Performances | The Crescent Beach Hotel',
  description:
    'Experience world-class entertainment at our professional stage venue featuring live music, cultural shows, and special events with stunning Caspian Sea backdrop.',
};

interface PageProps {
  params?: { locale?: string };
}

export default function EntertainmentPage({ params }: PageProps) {
  const t = getTranslations(params?.locale || 'en');

  const weeklyEvents = [
    {
      day: 'Monday',
      event: 'Acoustic Nights',
      time: '8:00 PM - 10:00 PM',
      description:
        'Intimate acoustic performances featuring local and international artists',
      type: 'Live Music',
    },
    {
      day: 'Tuesday',
      event: 'Cultural Dance Show',
      time: '7:30 PM - 9:00 PM',
      description:
        'Traditional Azerbaijani folk dances and cultural performances',
      type: 'Cultural Show',
    },
    {
      day: 'Wednesday',
      event: 'Jazz Under the Stars',
      time: '8:30 PM - 10:30 PM',
      description: 'Smooth jazz performances with cocktail service',
      type: 'Live Music',
    },
    {
      day: 'Thursday',
      event: 'Guest Artist Showcase',
      time: '8:00 PM - 10:00 PM',
      description: 'Special performances by touring musicians and entertainers',
      type: 'Special Event',
    },
    {
      day: 'Friday',
      event: 'Beach Party Night',
      time: '9:00 PM - 12:00 AM',
      description: 'DJ sets, dancing, and beach party atmosphere',
      type: 'Party Night',
    },
    {
      day: 'Saturday',
      event: 'International Music Night',
      time: '8:00 PM - 11:00 PM',
      description: 'World music performances and international artists',
      type: 'Live Music',
    },
    {
      day: 'Sunday',
      event: 'Family Entertainment',
      time: '6:00 PM - 8:00 PM',
      description:
        'Family-friendly shows, magic acts, and interactive entertainment',
      type: 'Family Show',
    },
  ];

  const pastPerformers = [
    {
      name: 'Aziza Mustafa Zadeh',
      type: 'Jazz Pianist',
      description: 'World-renowned Azerbaijani jazz musician',
      year: '2023',
    },
    {
      name: 'State Song and Dance Ensemble',
      type: 'Folk Performers',
      description: 'Traditional Azerbaijani cultural troupe',
      year: '2023',
    },
    {
      name: 'Baku International Jazz Festival Artists',
      type: 'Jazz Musicians',
      description: 'Various international jazz performers',
      year: '2023',
    },
    {
      name: 'Classical Orchestra of Baku',
      type: 'Classical Music',
      description: 'Full orchestra performances',
      year: '2023',
    },
  ];

  const stageFeatures = [
    {
      title: 'Professional Sound System',
      description:
        'State-of-the-art audio equipment with crystal clear acoustics',
      iconName: 'volume2',
    },
    {
      title: 'Dynamic Lighting',
      description:
        'Professional stage lighting with color-changing LED systems',
      iconName: 'spotlight',
    },
    {
      title: 'Large Performance Area',
      description: 'Spacious stage accommodating various performance types',
      iconName: 'map-pin',
    },
    {
      title: 'VIP Seating Area',
      description: 'Premium seating with table service and enhanced views',
      iconName: 'star',
    },
    {
      title: 'Weather Protection',
      description:
        'Covered performance area suitable for all weather conditions',
      iconName: 'users',
    },
    {
      title: 'Recording Capabilities',
      description: 'Professional recording and livestream equipment available',
      iconName: 'mic',
    },
  ];

  const getEventTypeColor = (type: string) => {
    const colors = {
      'Live Music': 'bg-blue-100 text-blue-700',
      'Cultural Show': 'bg-green-100 text-green-700',
      'Special Event': 'bg-purple-100 text-purple-700',
      'Party Night': 'bg-red-100 text-red-700',
      'Family Show': 'bg-orange-100 text-orange-700',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className='min-h-screen'>
      {/* Navigation */}
      <section className='bg-white border-b'>
        <div className='container mx-auto px-4 py-4'>
          <Link
            href='/amenities'
            className='inline-flex items-center text-gray-600 hover:text-primary-600'
          >
            <ArrowLeft className='h-4 w-4 mr-2' />
            Back to Amenities
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <FacilityHero
        title='Entertainment Stage'
        subtitle='World-class performances under the stars'
        description='Experience unforgettable live entertainment at our professional outdoor stage venue, featuring international artists, cultural shows, and special events with the stunning Caspian Sea as a backdrop.'
        backgroundImage='/images/amenities/entertainment-stage-hero.jpg'
        ctaText='View Event Schedule'
        ctaLink='/contact'
      />

      {/* Stage Overview */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
            <div>
              <h2 className='text-3xl font-bold mb-6'>
                Professional Entertainment Venue
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Our entertainment stage is a world-class outdoor venue that has
                hosted renowned international artists, cultural performers, and
                special events. With professional sound and lighting systems,
                the stage provides an unforgettable experience for both
                performers and audiences.
              </p>
              <p className='text-gray-600 mb-8 leading-relaxed'>
                Set against the backdrop of the Caspian Sea, our venue offers a
                magical atmosphere for evening performances. From intimate
                acoustic sessions to large-scale productions, our flexible stage
                design accommodates various entertainment formats.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='bg-purple-50 p-4 rounded-lg'>
                  <Users className='h-6 w-6 text-purple-600 mb-2' />
                  <h4 className='font-semibold'>Capacity</h4>
                  <p className='text-gray-600 text-sm'>
                    Up to 500 seated / 800 standing
                  </p>
                </div>

                <div className='bg-purple-50 p-4 rounded-lg'>
                  <Clock className='h-6 w-6 text-purple-600 mb-2' />
                  <h4 className='font-semibold'>Show Times</h4>
                  <p className='text-gray-600 text-sm'>
                    Evening performances 7:00 PM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-lg relative h-96'>
                <Image
                  src='/images/amenities/entertainment-stage-detail.jpg'
                  alt='Entertainment Stage'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>

          {/* Stage Features */}
          <StageFeatures features={stageFeatures} />
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className='section-padding bg-gradient-to-r from-purple-50 to-blue-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>
              Weekly Entertainment Schedule
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Join us for nightly entertainment featuring diverse performances,
              cultural shows, and special events throughout the week.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {weeklyEvents.map((event, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-soft p-6 hover:shadow-lg transition-shadow'
              >
                <div className='flex items-start justify-between mb-4'>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>{event.event}</h3>
                    <div className='flex items-center text-gray-600 mb-2'>
                      <Calendar className='h-4 w-4 mr-2' />
                      <span className='font-semibold'>{event.day}</span>
                    </div>
                    <div className='flex items-center text-gray-600 mb-3'>
                      <Clock className='h-4 w-4 mr-2' />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getEventTypeColor(event.type)}`}
                  >
                    {event.type}
                  </span>
                </div>
                <p className='text-gray-600 mb-4'>{event.description}</p>
                <Button size='sm' className='w-full'>
                  Reserve Seats
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performers */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>Featured Past Performers</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Our stage has welcomed renowned artists and cultural performers
              from Azerbaijan and around the world, creating unforgettable
              evenings of entertainment.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {pastPerformers.map((performer, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-soft p-6 text-center'
              >
                <div className='bg-gradient-to-r from-purple-500 to-blue-500 text-white w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center'>
                  <Music className='h-10 w-10' />
                </div>
                <h3 className='font-bold text-lg mb-2'>{performer.name}</h3>
                <p className='text-purple-600 font-semibold text-sm mb-2'>
                  {performer.type}
                </p>
                <p className='text-gray-600 text-sm mb-3'>
                  {performer.description}
                </p>
                <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs'>
                  {performer.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className='section-padding bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='relative'>
              <div className='aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-lg relative h-96'>
                <Image
                  src='/images/amenities/special-events.jpg'
                  alt='Special Events'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg' />
              <div className='absolute bottom-6 left-6 text-white'>
                <h3 className='text-2xl font-bold'>Special Event Hosting</h3>
                <p className='text-gray-200'>
                  Private performances and custom events
                </p>
              </div>
            </div>

            <div>
              <h2 className='text-3xl font-bold mb-6'>
                Private Events & Custom Performances
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Our entertainment stage is available for private events,
                corporate functions, weddings, and special celebrations. We can
                arrange custom performances, coordinate with local and
                international artists, and create memorable events tailored to
                your needs.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-start'>
                  <Star className='h-5 w-5 text-purple-600 mr-3 mt-1' />
                  <div>
                    <h4 className='font-semibold'>Corporate Events</h4>
                    <p className='text-gray-600 text-sm'>
                      Product launches, company celebrations, awards ceremonies
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <Star className='h-5 w-5 text-purple-600 mr-3 mt-1' />
                  <div>
                    <h4 className='font-semibold'>Wedding Celebrations</h4>
                    <p className='text-gray-600 text-sm'>
                      Ceremony and reception entertainment with custom music
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <Star className='h-5 w-5 text-purple-600 mr-3 mt-1' />
                  <div>
                    <h4 className='font-semibold'>Cultural Festivals</h4>
                    <p className='text-gray-600 text-sm'>
                      Traditional celebrations and cultural exchange events
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <Star className='h-5 w-5 text-purple-600 mr-3 mt-1' />
                  <div>
                    <h4 className='font-semibold'>Private Concerts</h4>
                    <p className='text-gray-600 text-sm'>
                      Exclusive performances for groups and special occasions
                    </p>
                  </div>
                </div>
              </div>

              <Button size='lg'>Plan Private Event</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking & Information */}
      <section className='section-padding bg-gradient-to-r from-purple-600 to-blue-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h2 className='text-4xl font-bold mb-4'>
              Experience World-Class Entertainment
            </h2>
            <p className='text-xl text-purple-100 mb-8 leading-relaxed'>
              Join us for unforgettable evenings of music, culture, and
              entertainment under the stars. Reserve your seats for upcoming
              shows or inquire about hosting your own special event.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='bg-white/10 rounded-lg p-6'>
                <Ticket className='h-8 w-8 text-white mx-auto mb-3' />
                <h3 className='font-semibold mb-2'>Ticket Reservations</h3>
                <p className='text-purple-100 text-sm'>
                  Reserve premium seating for all performances
                </p>
              </div>

              <div className='bg-white/10 rounded-lg p-6'>
                <Calendar className='h-8 w-8 text-white mx-auto mb-3' />
                <h3 className='font-semibold mb-2'>Event Calendar</h3>
                <p className='text-purple-100 text-sm'>
                  View upcoming shows and special events
                </p>
              </div>

              <div className='bg-white/10 rounded-lg p-6'>
                <Star className='h-8 w-8 text-white mx-auto mb-3' />
                <h3 className='font-semibold mb-2'>VIP Packages</h3>
                <p className='text-purple-100 text-sm'>
                  Premium seating with dinner and drinks
                </p>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-white text-purple-600 hover:bg-gray-100'
              >
                Reserve Show Tickets
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white text-white hover:bg-white hover:text-purple-600'
              >
                Book Private Event
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
