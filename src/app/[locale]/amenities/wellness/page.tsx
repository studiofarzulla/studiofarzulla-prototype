import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FacilityHero from '@/components/amenities/FacilityHero';
import WellnessFeatures from '@/components/amenities/WellnessFeatures';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  Dumbbell,
  Heart,
  Droplets,
  Thermometer,
  Clock,
  Users,
  Star,
  Award,
  Leaf,
} from 'lucide-react';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Wellness Center - Gym, Sauna & Spa | The Crescent Beach Hotel',
  description:
    'Rejuvenate at our comprehensive wellness center featuring modern fitness facilities, steam & dry saunas, spa treatments, and professional wellness programs.',
};

export default function WellnessPage() {
  const t = useTranslations('amenities');

  const wellnessStats = [
    { number: '200+', label: 'Fitness Equipment Pieces', icon: Dumbbell },
    { number: '15+', label: 'Spa Treatment Options', icon: Leaf },
    { number: '4', label: 'Sauna Facilities', icon: Droplets },
    { number: '24/7', label: 'Fitness Center Access', icon: Clock },
  ];

  const fitnessEquipment = [
    {
      category: 'Cardio Equipment',
      items: [
        'Professional treadmills with entertainment systems',
        'Elliptical machines with heart rate monitors',
        'Stationary bikes and spinning equipment',
        'Rowing machines and stair climbers',
      ],
    },
    {
      category: 'Strength Training',
      items: [
        'Complete set of free weights',
        'Professional weight machines',
        'Cable and pulley systems',
        'Olympic barbells and platforms',
      ],
    },
    {
      category: 'Functional Training',
      items: [
        'TRX suspension training systems',
        'Battle ropes and kettlebells',
        'Plyometric boxes and medicine balls',
        'Resistance bands and stability balls',
      ],
    },
  ];

  const spaServices = [
    {
      name: 'Signature Caspian Sea Massage',
      duration: '90 minutes',
      price: '$120',
      description:
        'Therapeutic massage using local sea minerals and essential oils',
    },
    {
      name: 'Aromatherapy Relaxation',
      duration: '60 minutes',
      price: '$85',
      description: 'Full body massage with customized aromatherapy oils',
    },
    {
      name: 'Hot Stone Therapy',
      duration: '75 minutes',
      price: '$95',
      description: 'Deep tissue massage using heated volcanic stones',
    },
    {
      name: 'Couples Wellness Package',
      duration: '120 minutes',
      price: '$240',
      description: 'Side-by-side massage experience in private suite',
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
        title='Wellness & Fitness Center'
        subtitle='Complete wellness destination for body and mind'
        description='Rejuvenate at our state-of-the-art wellness center featuring modern fitness equipment, traditional saunas, professional spa treatments, and personalized wellness programs.'
        backgroundImage='/images/amenities/wellness-hero.jpg'
        ctaText='Book Wellness Session'
        ctaAction={() => console.log('Book wellness session')}
      />

      {/* Wellness Stats */}
      <section className='py-12 bg-white border-b'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {wellnessStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className='text-center'>
                  <div className='bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center'>
                    <IconComponent className='h-10 w-10 text-green-600' />
                  </div>
                  <div className='text-3xl font-bold text-green-600 mb-2'>
                    {stat.number}
                  </div>
                  <p className='text-gray-600 text-sm'>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fitness Center Detail */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
            <div>
              <h2 className='text-3xl font-bold mb-6'>
                State-of-the-Art Fitness Center
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Our modern fitness center features the latest Technogym
                equipment, spacious workout areas, and professional training
                facilities. Whether you're maintaining your routine or starting
                a new fitness journey, our center provides everything you need.
              </p>
              <p className='text-gray-600 mb-8 leading-relaxed'>
                With 24/7 access for hotel guests, climate control,
                entertainment systems, and dedicated areas for different workout
                styles, you'll find the perfect environment to achieve your
                fitness goals while enjoying your stay.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='bg-green-50 p-4 rounded-lg'>
                  <Award className='h-6 w-6 text-green-600 mb-2' />
                  <h4 className='font-semibold'>Premium Equipment</h4>
                  <p className='text-gray-600 text-sm'>
                    Latest Technogym machines and free weights
                  </p>
                </div>

                <div className='bg-green-50 p-4 rounded-lg'>
                  <Users className='h-6 w-6 text-green-600 mb-2' />
                  <h4 className='font-semibold'>Personal Training</h4>
                  <p className='text-gray-600 text-sm'>
                    Certified trainers available by appointment
                  </p>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-lg relative h-96'>
                <Image
                  src='/images/amenities/fitness-center.jpg'
                  alt='Fitness Center'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>

          {/* Equipment Categories */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {fitnessEquipment.map((category, index) => (
              <div key={index} className='bg-white rounded-lg shadow-soft p-6'>
                <h3 className='text-xl font-bold mb-4 text-green-600'>
                  {category.category}
                </h3>
                <ul className='space-y-3'>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className='flex items-start'>
                      <div className='w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0'></div>
                      <span className='text-gray-600 text-sm'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sauna Facilities */}
      <section className='section-padding bg-gradient-to-r from-blue-50 to-purple-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>Sauna & Steam Facilities</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Experience the therapeutic benefits of our traditional steam and
              dry sauna facilities, designed for ultimate relaxation and
              wellness.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg shadow-soft overflow-hidden'>
              <div className='relative h-64'>
                <Image
                  src='/images/amenities/steam-sauna.jpg'
                  alt='Steam Sauna'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>
                  <Droplets className='h-8 w-8 mb-2' />
                  <h3 className='text-2xl font-bold'>Steam Sauna</h3>
                </div>
              </div>
              <div className='p-6'>
                <p className='text-gray-600 mb-4'>
                  Traditional steam room with eucalyptus-infused steam for deep
                  cleansing and relaxation.
                </p>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <div>
                    <p className='text-sm text-gray-600'>Temperature</p>
                    <p className='font-semibold'>40-45°C</p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-600'>Humidity</p>
                    <p className='font-semibold'>100%</p>
                  </div>
                </div>
                <ul className='text-sm text-gray-600 space-y-2'>
                  <li>• Eucalyptus aromatherapy</li>
                  <li>• Separate men's and women's facilities</li>
                  <li>• Adjacent relaxation lounge</li>
                  <li>• Cold shower stations</li>
                </ul>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-soft overflow-hidden'>
              <div className='relative h-64'>
                <Image
                  src='/images/amenities/dry-sauna.jpg'
                  alt='Dry Sauna'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>
                  <Thermometer className='h-8 w-8 mb-2' />
                  <h3 className='text-2xl font-bold'>Finnish Dry Sauna</h3>
                </div>
              </div>
              <div className='p-6'>
                <p className='text-gray-600 mb-4'>
                  Authentic Finnish-style dry sauna with premium wood
                  construction and controlled heating.
                </p>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <div>
                    <p className='text-sm text-gray-600'>Temperature</p>
                    <p className='font-semibold'>80-90°C</p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-600'>Humidity</p>
                    <p className='font-semibold'>10-20%</p>
                  </div>
                </div>
                <ul className='text-sm text-gray-600 space-y-2'>
                  <li>• Authentic Finnish wood design</li>
                  <li>• Traditional heating stones</li>
                  <li>• Relaxation area with herbal teas</li>
                  <li>• Professional maintenance daily</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Services */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='heading-secondary mb-4'>
              Professional Spa Services
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Indulge in our signature spa treatments performed by certified
              therapists using premium products and techniques for ultimate
              relaxation and rejuvenation.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
            {spaServices.map((service, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-soft p-6 border-l-4 border-green-500'
              >
                <div className='flex justify-between items-start mb-3'>
                  <h3 className='text-xl font-bold'>{service.name}</h3>
                  <div className='text-right'>
                    <p className='text-2xl font-bold text-green-600'>
                      {service.price}
                    </p>
                    <p className='text-sm text-gray-600'>{service.duration}</p>
                  </div>
                </div>
                <p className='text-gray-600 mb-4'>{service.description}</p>
                <Button size='sm'>Book Treatment</Button>
              </div>
            ))}
          </div>

          {/* Spa Amenities */}
          <div className='bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8'>
            <div className='text-center mb-8'>
              <h3 className='text-3xl font-bold mb-4'>
                Spa Amenities & Features
              </h3>
              <p className='text-lg text-gray-600'>
                Complete wellness experience with premium facilities
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='bg-white p-6 rounded-lg shadow-soft text-center'>
                <Heart className='h-10 w-10 text-green-600 mx-auto mb-3' />
                <h4 className='font-semibold mb-2'>Relaxation Lounge</h4>
                <p className='text-gray-600 text-sm'>
                  Quiet space for pre and post-treatment relaxation
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-soft text-center'>
                <Leaf className='h-10 w-10 text-green-600 mx-auto mb-3' />
                <h4 className='font-semibold mb-2'>Organic Products</h4>
                <p className='text-gray-600 text-sm'>
                  Premium natural and organic skincare products
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-soft text-center'>
                <Star className='h-10 w-10 text-green-600 mx-auto mb-3' />
                <h4 className='font-semibold mb-2'>Private Suites</h4>
                <p className='text-gray-600 text-sm'>
                  Individual and couples treatment rooms available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Programs */}
      <WellnessFeatures />

      {/* Operating Hours & Booking */}
      <section className='section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold mb-6'>
                Your Wellness Journey Awaits
              </h2>
              <p className='text-xl text-green-100 mb-8 leading-relaxed'>
                Transform your stay into a wellness retreat with our
                comprehensive facilities and services. From energizing workouts
                to relaxing spa treatments, create your perfect wellness
                experience.
              </p>

              <div className='space-y-4 mb-8'>
                <h3 className='text-xl font-semibold'>Operating Hours</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-green-100'>
                  <div>
                    <p className='font-medium'>Fitness Center</p>
                    <p>24/7 (Hotel Guests)</p>
                  </div>
                  <div>
                    <p className='font-medium'>Sauna Facilities</p>
                    <p>6:00 AM - 10:00 PM</p>
                  </div>
                  <div>
                    <p className='font-medium'>Spa Services</p>
                    <p>9:00 AM - 9:00 PM</p>
                  </div>
                  <div>
                    <p className='font-medium'>Personal Training</p>
                    <p>7:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  className='bg-white text-green-600 hover:bg-gray-100'
                >
                  Book Spa Treatment
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-white text-white hover:bg-white hover:text-green-600'
                >
                  Schedule Personal Training
                </Button>
              </div>
            </div>

            <div className='bg-white/10 rounded-2xl p-8'>
              <h3 className='text-2xl font-bold mb-6'>
                Wellness Package Deals
              </h3>
              <div className='space-y-6'>
                <div className='border-l-4 border-white pl-4'>
                  <h4 className='font-semibold text-lg'>Daily Wellness Pass</h4>
                  <p className='text-green-100 mb-2'>
                    Full access to fitness center and sauna facilities
                  </p>
                  <p className='text-2xl font-bold'>$35/day</p>
                </div>

                <div className='border-l-4 border-white pl-4'>
                  <h4 className='font-semibold text-lg'>Spa & Sauna Combo</h4>
                  <p className='text-green-100 mb-2'>
                    60-minute massage plus sauna session
                  </p>
                  <p className='text-2xl font-bold'>$110</p>
                </div>

                <div className='border-l-4 border-white pl-4'>
                  <h4 className='font-semibold text-lg'>
                    Weekly Wellness Program
                  </h4>
                  <p className='text-green-100 mb-2'>
                    Complete wellness package for extended stays
                  </p>
                  <p className='text-2xl font-bold'>$195/week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
