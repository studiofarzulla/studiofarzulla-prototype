import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import RestaurantCard from '@/components/RestaurantCard';
import SpecialEvents, { SpecialEvent } from '@/components/dining/SpecialEvents';
import {
  IoRestaurantOutline,
  IoWineOutline,
  IoUmbrellaOutline,
  IoWaterOutline,
  IoHomeOutline,
  IoBusinessOutline,
  IoHeartOutline,
  IoStarOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';

// Enable ISR with 8 hour revalidation for dining (menu updates)
export const revalidate = 28800; // 8 hours

// export const metadata: Metadata = {
//   title: 'Fine Dining & Restaurants | The Crescent Beach Hotel',
//   description: 'Experience world-class cuisine at our restaurants and bars. From international flavors to local specialties, every meal is a culinary adventure.',
// };

const restaurants = [
  {
    name: 'The Terrace Restaurant',
    description:
      'Experience international cuisine at its finest with our à la carte menu featuring dishes from around the world, complemented by stunning Caspian Sea views.',
    cuisine: 'International À La Carte',
    hours: '7:00 AM - 11:00 PM',
    capacity: 'Up to 120 guests',
    location: 'Main Building - Ground Floor',
    image: '/images/dining/terrace-restaurant.jpg',
    features: [
      'Sea View Terrace',
      'International Menu',
      'Wine Selection',
      'Private Dining',
    ],
    href: '/dining/the-terrace',
  },
  {
    name: 'Wild West Restaurant',
    description:
      'Step into the American frontier with our Western-themed restaurant offering authentic American cuisine in a rustic, nostalgic atmosphere.',
    cuisine: 'American & Western',
    hours: '6:00 PM - 12:00 AM',
    capacity: 'Up to 80 guests',
    location: 'Building F - First Floor',
    image: '/images/dining/wild-west-restaurant.jpg',
    features: [
      'Western Theme',
      'BBQ Specialties',
      'Live Entertainment',
      'Craft Cocktails',
    ],
    href: '/dining/wild-west',
  },
  {
    name: 'The Shade Bar',
    description:
      'Relax under our unique sail structure while enjoying refreshing beverages and light snacks with unobstructed views of the Caspian Sea.',
    cuisine: 'Beach Bar & Light Meals',
    hours: '10:00 AM - 2:00 AM',
    capacity: 'Up to 60 guests',
    location: 'Beachfront - Under Sail Structure',
    image: '/images/dining/shade-bar.jpg',
    features: [
      'Beachfront Location',
      'Sunset Views',
      'Cocktail Bar',
      'Light Meals',
    ],
    href: '/dining/shade-bar',
  },
  {
    name: 'Pool Bar',
    description:
      'Cool off poolside with tropical drinks and casual dining while enjoying the perfect view of our outdoor swimming pool and recreational areas.',
    cuisine: 'Poolside Refreshments',
    hours: '9:00 AM - 10:00 PM',
    capacity: 'Up to 40 guests',
    location: 'Pool Area - Outdoor Deck',
    image: '/images/dining/pool-bar.jpg',
    features: ['Pool Views', 'Tropical Drinks', 'Pool Service', 'Light Snacks'],
    href: '/dining/pool-bar',
  },
];

const specialEvents: SpecialEvent[] = [
  {
    id: 'wine-tasting',
    title: 'International Wine Tasting',
    description:
      'Join our sommelier for an exclusive wine tasting experience featuring selected wines from around the world, paired with gourmet appetizers.',
    type: 'culinary',
    date: 'Every Friday',
    time: '7:00 PM',
    duration: '2.5 hours',
    location: 'The Terrace Restaurant',
    capacity: 20,
    price: '150 AZN per person',
    image: '/images/dining/events/wine-tasting.jpg',
    features: [
      'Professional Sommelier',
      '6 Wine Selection',
      'Gourmet Pairings',
      'Certificate',
    ],
    booking_required: true,
    booking_deadline: '48 hours in advance',
    recurring: true,
  },
  {
    id: 'bbq-night',
    title: 'Wild West BBQ Night',
    description:
      'Experience authentic American BBQ with live country music, line dancing, and all-you-can-eat barbecue feast in our Wild West themed restaurant.',
    type: 'entertainment',
    date: 'Every Saturday',
    time: '8:00 PM',
    duration: '4 hours',
    location: 'Wild West Restaurant',
    price: '80 AZN per person',
    image: '/images/dining/events/bbq-night.jpg',
    features: [
      'Live Country Music',
      'Line Dancing',
      'All-You-Can-Eat BBQ',
      'Western Atmosphere',
    ],
    booking_required: true,
    recurring: true,
  },
  {
    id: 'beach-sunset',
    title: 'Sunset Beach Dining',
    description:
      'Romantic beachfront dining experience with specially curated sunset menu, live acoustic music, and premium service under the stars.',
    type: 'seasonal',
    date: 'May - September',
    time: '7:30 PM',
    duration: '3 hours',
    location: 'The Shade Bar - Beach Setup',
    capacity: 30,
    price: '120 AZN per person',
    image: '/images/dining/events/sunset-dining.jpg',
    features: [
      'Beachfront Setup',
      'Live Acoustic Music',
      'Romantic Atmosphere',
      'Premium Service',
    ],
    booking_required: true,
    booking_deadline: '24 hours in advance',
    recurring: false,
  },
];

const features = [
  {
    iconName: 'restaurant-outline',
    title: 'International Cuisine',
    description:
      'À la carte menu featuring the finest dishes from around the world',
    color: 'from-orange-500 to-red-500',
  },
  {
    iconName: 'wine-outline',
    title: 'Premium Beverages',
    description:
      'Extensive wine collection and craft cocktails by expert mixologists',
    color: 'from-purple-500 to-pink-500',
  },
  {
    iconName: 'umbrella-outline',
    title: 'Beachfront Dining',
    description: 'Unique dining experiences directly on the Caspian Sea shore',
    color: 'from-blue-500 to-teal-500',
  },
  {
    iconName: 'water-outline',
    title: 'Poolside Service',
    description:
      'Refreshments and meals served directly to your poolside location',
    color: 'from-green-500 to-blue-500',
  },
  {
    iconName: 'home-outline',
    title: '24/7 Room Service',
    description: 'In-room dining available around the clock for hotel guests',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    iconName: 'business-outline',
    title: 'Event Catering',
    description:
      'Corporate events, weddings, and special occasion catering services',
    color: 'from-yellow-500 to-orange-500',
  },
];

// Helper function to get icon component from name
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    'restaurant-outline': IoRestaurantOutline,
    'wine-outline': IoWineOutline,
    'umbrella-outline': IoUmbrellaOutline,
    'water-outline': IoWaterOutline,
    'home-outline': IoHomeOutline,
    'business-outline': IoBusinessOutline,
  };
  return iconMap[iconName] || IoRestaurantOutline;
};

interface PageProps {  params?: { locale?: string };}
export default function DiningPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/images/dining/dining-hero.jpg'
            alt='Fine dining at The Crescent Beach Hotel'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30' />
        </div>

        <div className='relative z-10 container mx-auto px-4 text-center text-white'>
          <div>
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>
              Culinary Excellence
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto'>
              Experience world-class cuisine at our distinctive restaurants and
              bars, where international flavors meet the pristine shores of the
              Caspian Sea
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href='#restaurants'
                className='bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105'
              >
                Explore Our Restaurants
              </Link>
              <Link
                href='#reservations'
                className='border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all duration-200'
              >
                Make Reservation
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
          <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white/70 rounded-full mt-2' />
          </div>
        </div>
      </section>

      {/* Dining Features Overview */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              A Culinary Journey Awaits
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              From international à la carte dining to beachfront refreshments,
              discover a world of flavors and dining experiences across our
              distinctive venues
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => {
              const IconComponent = getIconComponent(feature.iconName);
              return (
                <div key={index} className='group text-center p-6'>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section id='restaurants' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Our Distinctive Restaurants
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Each venue offers a unique atmosphere and culinary experience,
              from elegant fine dining to casual beachside relaxation
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={index}
                name={restaurant.name}
                description={restaurant.description}
                cuisine={restaurant.cuisine}
                hours={restaurant.hours}
                capacity={restaurant.capacity}
                location={restaurant.location}
                image={restaurant.image}
                features={restaurant.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Private Dining & Events */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                Private Dining & Special Events
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Create unforgettable memories with our bespoke private dining
                experiences. Whether it's an intimate celebration, corporate
                event, or wedding reception, our expert team will craft the
                perfect culinary experience.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-primary-500 rounded-full mt-3' />
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Wedding Receptions
                    </h4>
                    <p className='text-gray-600'>
                      Romantic beachfront ceremonies and elegant receptions
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-primary-500 rounded-full mt-3' />
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Corporate Events
                    </h4>
                    <p className='text-gray-600'>
                      Professional catering for conferences and business
                      gatherings
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-primary-500 rounded-full mt-3' />
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Special Celebrations
                    </h4>
                    <p className='text-gray-600'>
                      Birthdays, anniversaries, and milestone celebrations
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200'>
                  Plan Your Event
                </button>
                <button className='border border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200'>
                  View Event Gallery
                </button>
              </div>
            </div>

            <div className='relative'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-4'>
                  <div className='relative h-40 rounded-lg overflow-hidden'>
                    <Image
                      src='/images/dining/private-dining-1.jpg'
                      alt='Private dining setup'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='relative h-48 rounded-lg overflow-hidden'>
                    <Image
                      src='/images/dining/private-dining-2.jpg'
                      alt='Wedding reception'
                      fill
                      className='object-cover'
                    />
                  </div>
                </div>
                <div className='space-y-4 pt-8'>
                  <div className='relative h-48 rounded-lg overflow-hidden'>
                    <Image
                      src='/images/dining/private-dining-3.jpg'
                      alt='Corporate event'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='relative h-40 rounded-lg overflow-hidden'>
                    <Image
                      src='/images/dining/private-dining-4.jpg'
                      alt='Celebration dinner'
                      fill
                      className='object-cover'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <SpecialEvents events={specialEvents} />

      {/* Room Service & Additional Services */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-2xl shadow-soft p-8 text-center'>
              <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6'>
                <IoHomeOutline className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                24/7 Room Service
              </h3>
              <p className='text-gray-600 mb-6'>
                Enjoy our full dining menu from the comfort of your room,
                available around the clock for hotel guests.
              </p>
              <button className='text-primary-600 hover:text-primary-700 font-medium flex items-center mx-auto space-x-1'>
                <span>View Room Service Menu</span>
                <IoArrowForwardOutline className='w-4 h-4' />
              </button>
            </div>

            <div className='bg-white rounded-2xl shadow-soft p-8 text-center'>
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6'>
                <IoHeartOutline className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Dietary Accommodations
              </h3>
              <p className='text-gray-600 mb-6'>
                Our chefs are happy to accommodate special dietary requirements
                including vegetarian, vegan, and gluten-free options.
              </p>
              <button className='text-primary-600 hover:text-primary-700 font-medium flex items-center mx-auto space-x-1'>
                <span>Dietary Information</span>
                <IoArrowForwardOutline className='w-4 h-4' />
              </button>
            </div>

            <div className='bg-white rounded-2xl shadow-soft p-8 text-center'>
              <div className='w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6'>
                <IoStarOutline className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Chef's Table Experience
              </h3>
              <p className='text-gray-600 mb-6'>
                Book an exclusive chef's table experience with personalized menu
                creation and behind-the-scenes kitchen access.
              </p>
              <button className='text-primary-600 hover:text-primary-700 font-medium flex items-center mx-auto space-x-1'>
                <span>Reserve Chef's Table</span>
                <IoArrowForwardOutline className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id='reservations'
        className='py-16 bg-gradient-to-r from-primary-600 to-accent-500'
      >
        <div className='container mx-auto px-4 text-center'>
          <div className='text-white'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Ready for Your Culinary Journey?
            </h2>
            <p className='text-xl text-primary-100 mb-8 max-w-2xl mx-auto'>
              Make a reservation today and discover why our dining experiences
              are celebrated by guests from around the world.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <button className='bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105'>
                Make Reservation
              </button>
              <a
                href='tel:+994123456789'
                className='border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center space-x-2'
              >
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <span>Call +994 12 345 6789</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
