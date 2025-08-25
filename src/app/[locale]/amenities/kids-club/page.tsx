import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

// Force static generation for this page
export const dynamic = 'force-static';
import FacilityHero from '@/components/amenities/FacilityHero';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  Baby,
  Users,
  Clock,
  Star,
  Heart,
  BookOpen,
  Palette,
  Waves,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kids Club & Family Activities | The Crescent Beach Hotel',
  description:
    'Safe, fun, and educational environment for children with supervised activities, educational programs, and professional childcare services.',
};

export default function KidsClubPage() {
  const t = useTranslations('amenities');

  const ageGroups = [
    {
      title: 'Toddlers (3-5 years)',
      activities: [
        'Sensory play activities',
        'Simple arts and crafts',
        'Story time sessions',
        'Basic swimming lessons',
        'Playground supervision',
      ],
      hours: '9:00 AM - 6:00 PM',
      staff: '1:4 child-to-staff ratio',
    },
    {
      title: 'Children (6-8 years)',
      activities: [
        'Educational games and puzzles',
        'Beach treasure hunts',
        'Nature exploration walks',
        'Swimming pool games',
        'Creative art projects',
      ],
      hours: '8:00 AM - 8:00 PM',
      staff: '1:6 child-to-staff ratio',
    },
    {
      title: 'Pre-teens (9-12 years)',
      activities: [
        'Team building activities',
        'Water sports training',
        'Cultural learning programs',
        'Mini cooking classes',
        'Technology workshops',
      ],
      hours: '8:00 AM - 8:00 PM',
      staff: '1:8 child-to-staff ratio',
    },
  ];

  const dailySchedule = [
    {
      time: '9:00 AM',
      activity: 'Welcome & Free Play',
      location: 'Indoor Play Area',
    },
    {
      time: '10:00 AM',
      activity: 'Arts & Crafts Session',
      location: 'Craft Room',
    },
    {
      time: '11:00 AM',
      activity: 'Pool Time & Swimming',
      location: 'Kids Pool',
    },
    { time: '12:00 PM', activity: 'Lunch Break', location: 'Kids Dining Area' },
    { time: '1:00 PM', activity: 'Story Time & Rest', location: 'Quiet Room' },
    {
      time: '2:30 PM',
      activity: 'Beach Activities',
      location: 'Private Beach',
    },
    {
      time: '4:00 PM',
      activity: 'Educational Games',
      location: 'Learning Center',
    },
    { time: '5:00 PM', activity: 'Creative Time', location: 'Activity Room' },
    {
      time: '6:00 PM',
      activity: 'Evening Wind Down',
      location: 'Indoor Play Area',
    },
  ];

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
        title='Kids Club & Family Center'
        subtitle='Safe, fun, and educational adventures for children'
        description='Our professional childcare team provides a nurturing environment where children can play, learn, and make new friends while parents enjoy peace of mind.'
        backgroundImage='/images/amenities/kids-club-hero.jpg'
        ctaText='Register Your Child'
        ctaAction={() => console.log('Register child')}
      />

      {/* Safety & Care Standards */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
            <div className='lg:col-span-2'>
              <h2 className='text-3xl font-bold mb-6'>
                Child Safety & Professional Care
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Our Kids Club is designed with child safety as the top priority.
                All staff members are certified in childcare, first aid, and
                child protection. The facility features secure access,
                age-appropriate equipment, and constant supervision to ensure
                your child's safety and wellbeing.
              </p>
              <p className='text-gray-600 mb-8 leading-relaxed'>
                We maintain low child-to-staff ratios, ensuring personalized
                attention for each child. Our structured activities promote
                learning, creativity, and social development while providing
                hours of fun and engagement.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='bg-orange-50 p-6 rounded-lg'>
                  <Shield className='h-8 w-8 text-orange-600 mb-3' />
                  <h4 className='font-semibold mb-2'>Certified Staff</h4>
                  <p className='text-gray-600 text-sm'>
                    All childcare professionals certified in first aid and child
                    development
                  </p>
                </div>

                <div className='bg-orange-50 p-6 rounded-lg'>
                  <Heart className='h-8 w-8 text-orange-600 mb-3' />
                  <h4 className='font-semibold mb-2'>Nurturing Environment</h4>
                  <p className='text-gray-600 text-sm'>
                    Warm, welcoming atmosphere that feels like a home away from
                    home
                  </p>
                </div>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='bg-white rounded-lg shadow-soft p-6'>
                <h3 className='text-xl font-semibold mb-4'>Operating Hours</h3>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Monday - Friday</span>
                    <span className='font-semibold'>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Saturday - Sunday</span>
                    <span className='font-semibold'>9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className='bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg p-6'>
                <h3 className='text-lg font-semibold mb-2'>Age Range</h3>
                <p className='text-orange-100 text-sm mb-4'>3-12 years old</p>
                <p className='text-orange-100 text-sm'>
                  Programs tailored to different developmental stages and
                  interests
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups & Programs */}
      <section className='section-padding bg-gradient-to-r from-orange-50 to-yellow-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>Age-Appropriate Programs</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Our programs are carefully designed for different age groups,
              ensuring activities are developmentally appropriate and engaging
              for each child.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {ageGroups.map((group, index) => (
              <div key={index} className='bg-white rounded-lg shadow-soft p-6'>
                <div className='bg-orange-100 p-3 rounded-full w-fit mb-4'>
                  <Baby className='h-8 w-8 text-orange-600' />
                </div>
                <h3 className='text-xl font-bold mb-4'>{group.title}</h3>

                <div className='mb-6'>
                  <h4 className='font-semibold mb-3'>Daily Activities:</h4>
                  <ul className='space-y-2'>
                    {group.activities.map((activity, actIndex) => (
                      <li
                        key={actIndex}
                        className='flex items-center text-gray-600'
                      >
                        <div className='w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0' />
                        <span className='text-sm'>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='border-t border-gray-200 pt-4'>
                  <div className='flex items-center mb-2'>
                    <Clock className='h-4 w-4 text-gray-500 mr-2' />
                    <span className='text-sm font-medium'>{group.hours}</span>
                  </div>
                  <div className='flex items-center'>
                    <Users className='h-4 w-4 text-gray-500 mr-2' />
                    <span className='text-sm'>{group.staff}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>Daily Activity Schedule</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              A structured day filled with fun, learning, and adventure designed
              to keep children engaged and happy throughout their stay.
            </p>
          </div>

          <div className='max-w-4xl mx-auto'>
            <div className='bg-white rounded-lg shadow-soft overflow-hidden'>
              <div className='bg-gradient-to-r from-orange-500 to-yellow-500 p-6 text-white'>
                <h3 className='text-2xl font-bold'>Sample Daily Schedule</h3>
                <p className='text-orange-100'>
                  Activities may vary based on weather and group preferences
                </p>
              </div>

              <div className='p-6'>
                <div className='space-y-4'>
                  {dailySchedule.map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors'
                    >
                      <div className='bg-orange-100 p-2 rounded-full mr-4'>
                        <Clock className='h-5 w-5 text-orange-600' />
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <h4 className='font-semibold text-lg'>
                              {item.activity}
                            </h4>
                            <p className='text-gray-600 text-sm'>
                              {item.location}
                            </p>
                          </div>
                          <div className='text-orange-600 font-bold text-lg'>
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className='section-padding bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>
              Special Programs & Services
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Additional services and special programs to make your family's
              stay extra special
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white rounded-lg shadow-soft p-6 text-center'>
              <div className='bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center'>
                <Waves className='h-10 w-10 text-blue-600' />
              </div>
              <h3 className='font-bold mb-2'>Swimming Lessons</h3>
              <p className='text-gray-600 text-sm'>
                Professional swimming instruction for all skill levels in our
                dedicated kids pool
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-soft p-6 text-center'>
              <div className='bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center'>
                <BookOpen className='h-10 w-10 text-green-600' />
              </div>
              <h3 className='font-bold mb-2'>Educational Workshops</h3>
              <p className='text-gray-600 text-sm'>
                Fun learning sessions covering science, nature, and local
                culture
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-soft p-6 text-center'>
              <div className='bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center'>
                <Palette className='h-10 w-10 text-purple-600' />
              </div>
              <h3 className='font-bold mb-2'>Arts & Crafts</h3>
              <p className='text-gray-600 text-sm'>
                Creative projects and artistic expression with professional art
                supplies
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-soft p-6 text-center'>
              <div className='bg-pink-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center'>
                <Star className='h-10 w-10 text-pink-600' />
              </div>
              <h3 className='font-bold mb-2'>Special Events</h3>
              <p className='text-gray-600 text-sm'>
                Birthday celebrations, holiday parties, and themed activity days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Information */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          <div className='bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 lg:p-12 text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
              <div>
                <h2 className='text-3xl font-bold mb-4'>
                  Peace of Mind for Parents
                </h2>
                <p className='text-lg text-orange-100 mb-6'>
                  Enjoy your vacation knowing your children are in safe, caring
                  hands with our professional childcare team and comprehensive
                  safety measures.
                </p>

                <div className='space-y-4 mb-8'>
                  <div className='flex items-center'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3' />
                    <span>
                      Regular updates and photo sharing throughout the day
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3' />
                    <span>Flexible pickup and drop-off times</span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3' />
                    <span>Meals and snacks included in full-day programs</span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3' />
                    <span>Evening babysitting services available</span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3' />
                    <span>Special dietary requirements accommodated</span>
                  </div>
                </div>
              </div>

              <div className='text-center'>
                <h3 className='text-2xl font-bold mb-6'>Ready to Register?</h3>
                <div className='space-y-4'>
                  <Button
                    size='lg'
                    className='w-full bg-white text-orange-600 hover:bg-gray-100'
                  >
                    Register Your Child
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='w-full border-white text-white hover:bg-white hover:text-orange-600'
                  >
                    Schedule Facility Tour
                  </Button>
                </div>

                <div className='mt-8 text-center'>
                  <p className='text-orange-100 text-sm mb-2'>
                    Questions about our Kids Club?
                  </p>
                  <p className='font-semibold'>Call: +994 12 123 4567</p>
                  <p className='text-orange-100 text-sm'>
                    kidclub@crescentbeachhotel.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
