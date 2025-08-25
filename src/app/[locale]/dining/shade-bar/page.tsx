import RestaurantHero from '@/components/dining/RestaurantHero';
import MenuSection from '@/components/dining/MenuSection';
import DiningGallery from '@/components/dining/DiningGallery';
import OpeningHours from '@/components/dining/OpeningHours';
import ReservationForm from '@/components/dining/ReservationForm';
import Image from 'next/image';

// Force static generation for this page
export const dynamic = 'force-static';

const menuItems = {
  cocktails: [
    {
      id: '1',
      name: 'Caspian Sunset',
      description:
        'Signature cocktail with vodka, passion fruit, lime juice, and a splash of cranberry',
      price: '18 AZN',
      popular: true,
    },
    {
      id: '2',
      name: 'Beach Breeze',
      description:
        'Refreshing rum-based cocktail with coconut cream, pineapple juice, and blue curaçao',
      price: '16 AZN',
    },
    {
      id: '3',
      name: 'Sea Salt Margarita',
      description:
        'Classic margarita with premium tequila, fresh lime, and sea salt rim',
      price: '20 AZN',
      popular: true,
    },
    {
      id: '4',
      name: 'Mojito Royale',
      description:
        'Traditional mojito with fresh mint, lime, and a splash of prosecco',
      price: '17 AZN',
    },
    {
      id: '5',
      name: 'Virgin Piña Colada',
      description:
        'Non-alcoholic blend of coconut cream, pineapple juice, and crushed ice',
      price: '12 AZN',
      dietary: ['non-alcoholic'] as any,
    },
  ],
  lightBites: [
    {
      id: '6',
      name: 'Mediterranean Mezze Platter',
      description:
        'Selection of hummus, olives, feta cheese, sun-dried tomatoes, and pita bread',
      price: '32 AZN',
      dietary: ['vegetarian'],
      popular: true,
    },
    {
      id: '7',
      name: 'Fresh Seafood Platter',
      description:
        'Grilled shrimp, calamari rings, and fish cakes with lemon aioli',
      price: '45 AZN',
    },
    {
      id: '8',
      name: 'Beach Club Sandwich',
      description:
        'Grilled chicken, bacon, avocado, and fresh vegetables on toasted bread',
      price: '28 AZN',
    },
    {
      id: '9',
      name: 'Tropical Fruit Bowl',
      description:
        'Fresh seasonal fruits with honey yogurt dip and mint garnish',
      price: '18 AZN',
      dietary: ['vegetarian', 'gluten-free'],
    },
    {
      id: '10',
      name: 'Grilled Halloumi Salad',
      description:
        'Mediterranean salad with grilled halloumi, cherry tomatoes, and herb dressing',
      price: '24 AZN',
      dietary: ['vegetarian'],
    },
  ],
  beverages: [
    {
      id: '11',
      name: 'Fresh Coconut Water',
      description:
        'Served directly from the coconut with ice and tropical fruit garnish',
      price: '15 AZN',
      dietary: ['vegan', 'gluten-free'],
    },
    {
      id: '12',
      name: 'Fresh Fruit Smoothie',
      description: 'Your choice of mango, strawberry, or mixed berry smoothie',
      price: '14 AZN',
      dietary: ['vegan'],
    },
    {
      id: '13',
      name: 'Iced Coffee Specialties',
      description:
        'Cold brew, iced latte, or frappé with various flavor options',
      price: '12 AZN',
    },
    {
      id: '14',
      name: 'Premium Juice Selection',
      description:
        'Freshly squeezed orange, grapefruit, apple, or seasonal fruit juices',
      price: '10 AZN',
      dietary: ['vegan', 'gluten-free'],
    },
  ],
};

const galleryImages = [
  {
    id: '1',
    src: '/images/dining/shade-bar/gallery-1.jpg',
    alt: 'Unique sail structure over beach bar',
    category: 'ambiance',
    title: 'Iconic Sail Structure',
    description:
      'Distinctive sail canopy providing shade over beachfront seating',
  },
  {
    id: '2',
    src: '/images/dining/shade-bar/gallery-2.jpg',
    alt: 'Colorful cocktails on beach bar',
    category: 'food',
    title: 'Signature Cocktails',
    description: 'Refreshing cocktails with stunning sea views',
  },
  {
    id: '3',
    src: '/images/dining/shade-bar/gallery-3.jpg',
    alt: 'Sunset view from The Shade Bar',
    category: 'ambiance',
    title: 'Magical Sunset Views',
    description: 'Perfect spot to watch the sun set over the Caspian Sea',
  },
  {
    id: '4',
    src: '/images/dining/shade-bar/gallery-4.jpg',
    alt: 'Mediterranean mezze platter',
    category: 'food',
    title: 'Mediterranean Mezze',
    description: 'Fresh selection of Mediterranean delights',
  },
  {
    id: '5',
    src: '/images/dining/shade-bar/gallery-5.jpg',
    alt: 'Beach seating area',
    category: 'ambiance',
    title: 'Beachfront Seating',
    description: 'Comfortable lounge seating directly on the sand',
  },
  {
    id: '6',
    src: '/images/dining/shade-bar/gallery-6.jpg',
    alt: 'Evening atmosphere with lights',
    category: 'ambiance',
    title: 'Evening Ambiance',
    description: 'Magical lighting creates perfect evening atmosphere',
  },
];

const schedule = [
  {
    day: 'Monday',
    lunch: '10:00 AM - 6:00 PM',
    dinner: '6:00 PM - 2:00 AM',
  },
  {
    day: 'Tuesday',
    lunch: '10:00 AM - 6:00 PM',
    dinner: '6:00 PM - 2:00 AM',
  },
  {
    day: 'Wednesday',
    lunch: '10:00 AM - 6:00 PM',
    dinner: '6:00 PM - 2:00 AM',
  },
  {
    day: 'Thursday',
    lunch: '10:00 AM - 6:00 PM',
    dinner: '6:00 PM - 2:00 AM',
    note: 'Happy Hour: 5:00 PM - 7:00 PM',
  },
  {
    day: 'Friday',
    lunch: '10:00 AM - 6:00 PM',
    dinner: '6:00 PM - 2:00 AM',
    note: 'Extended cocktail menu available',
  },
  {
    day: 'Saturday',
    lunch: '10:00 AM - 6:00 PM',
    dinner: '6:00 PM - 2:00 AM',
    note: 'Live DJ sets from 8:00 PM',
  },
  {
    day: 'Sunday',
    lunch: '10:00 AM - 6:00 PM',
    dinner: '6:00 PM - 2:00 AM',
    note: 'Sunset cocktail specials',
  },
];

const specialHours = [
  {
    title: 'Summer Extended Hours',
    description: 'Open until 3:00 AM during peak summer season',
    dates: 'June - August',
  },
  {
    title: 'Happy Hour Daily',
    description: '30% off all cocktails and appetizers',
    dates: 'Daily 5:00 PM - 7:00 PM',
  },
];

export default function ShadeBarPage() {
  return (
    <div className='min-h-screen'>
      {/* Restaurant Hero */}
      <RestaurantHero
        name='The Shade Bar'
        tagline='Beach bar under iconic sail structure'
        description='Relax and unwind at our unique beachfront bar, sheltered under a distinctive sail structure that has become an iconic feature of our resort. Enjoy refreshing cocktails, light Mediterranean fare, and spectacular sunset views over the Caspian Sea.'
        cuisine='Beach Bar & Light Mediterranean'
        location='Beachfront - Under Sail Structure'
        hours='10:00 AM - 2:00 AM'
        capacity='60 Guests'
        phone='+994 12 345 6789'
        images={[
          '/images/dining/shade-bar/hero-1.jpg',
          '/images/dining/shade-bar/hero-2.jpg',
          '/images/dining/shade-bar/hero-3.jpg',
        ]}
        features={[
          'Beachfront Location',
          'Sail Canopy Design',
          'Sunset Views',
          'Cocktail Bar',
          'Light Meals',
        ]}
      />

      {/* Bar Introduction */}
      <section className='py-16 bg-gradient-to-br from-blue-50 to-teal-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Your Perfect Beach Escape
              </h2>
              <p className='text-lg text-gray-600 leading-relaxed mb-8'>
                The Shade Bar offers the ultimate beachfront experience under
                our iconic sail structure. Whether you're looking for a
                refreshing midday drink, a romantic sunset cocktail, or
                late-night entertainment, our beach bar provides the perfect
                setting with unobstructed views of the Caspian Sea and a
                relaxed, tropical atmosphere.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='bg-white rounded-lg p-6 shadow-soft'>
                  <div className='text-2xl mb-2'>🌅</div>
                  <div className='font-semibold text-gray-900 mb-1'>
                    Sunset Views
                  </div>
                  <div className='text-sm text-gray-600'>
                    Best sunset spot at the resort
                  </div>
                </div>
                <div className='bg-white rounded-lg p-6 shadow-soft'>
                  <div className='text-2xl mb-2'>⛵</div>
                  <div className='font-semibold text-gray-900 mb-1'>
                    Sail Canopy
                  </div>
                  <div className='text-sm text-gray-600'>
                    Unique architectural feature
                  </div>
                </div>
                <div className='bg-white rounded-lg p-6 shadow-soft'>
                  <div className='text-2xl mb-2'>🍹</div>
                  <div className='font-semibold text-gray-900 mb-1'>
                    Craft Cocktails
                  </div>
                  <div className='text-sm text-gray-600'>
                    Premium spirits & fresh ingredients
                  </div>
                </div>
                <div className='bg-white rounded-lg p-6 shadow-soft'>
                  <div className='text-2xl mb-2'>🏖️</div>
                  <div className='font-semibold text-gray-900 mb-1'>
                    Beach Access
                  </div>
                  <div className='text-sm text-gray-600'>
                    Direct access to private beach
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <MenuSection
            title='Signature Cocktails & Drinks'
            description='Expertly crafted cocktails using premium spirits and fresh ingredients, perfect for beachside relaxation'
            items={menuItems.cocktails}
          />

          <MenuSection
            title='Light Bites & Mediterranean Fare'
            description='Fresh and flavorful light meals and snacks designed to complement your beach bar experience'
            items={menuItems.lightBites}
          />

          <MenuSection
            title='Refreshing Beverages'
            description='Non-alcoholic refreshments including fresh juices, smoothies, and specialty coffee drinks'
            items={menuItems.beverages}
            columns={2}
          />
        </div>
      </section>

      {/* Sunset Experience Section */}
      <section className='py-16 bg-gradient-to-r from-orange-400 to-pink-500 text-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold mb-6'>
                The Perfect Sunset Experience
              </h2>
              <p className='text-xl text-orange-100 mb-6 leading-relaxed'>
                There's no better place to watch the sun set over the Caspian
                Sea than from The Shade Bar. Our prime beachfront location
                offers unobstructed views of the horizon, making every evening a
                spectacular show of colors and tranquility.
              </p>

              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-yellow-300 rounded-full mt-3' />
                  <div>
                    <h4 className='font-semibold text-white'>
                      Golden Hour Specials
                    </h4>
                    <p className='text-orange-100'>
                      Special sunset cocktails available 6:30 PM - 8:00 PM
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-yellow-300 rounded-full mt-3' />
                  <div>
                    <h4 className='font-semibold text-white'>Prime Seating</h4>
                    <p className='text-orange-100'>
                      Reserved sunset seating available with advance booking
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-yellow-300 rounded-full mt-3' />
                  <div>
                    <h4 className='font-semibold text-white'>
                      Photo Opportunities
                    </h4>
                    <p className='text-orange-100'>
                      Perfect Instagram moments with stunning backdrops
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='relative h-96 rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/dining/shade-bar/sunset-view.jpg'
                  alt='Sunset view from The Shade Bar'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
                <div className='absolute bottom-6 left-6 right-6'>
                  <h3 className='text-xl font-bold mb-2 text-white'>
                    Daily Sunset Show
                  </h3>
                  <p className='text-sm text-gray-200'>
                    Every evening offers a unique sunset experience, with colors
                    reflecting off the calm waters of the Caspian Sea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance & Features */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Beach Bar Features & Ambiance
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Our unique design and prime beachfront location create the perfect
              atmosphere for relaxation and socializing by the sea.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center'>
              <div className='text-4xl mb-4'>⛵</div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Iconic Sail Structure
              </h3>
              <p className='text-gray-600'>
                Our distinctive sail canopy provides natural shade while
                creating a unique architectural landmark visible throughout the
                resort.
              </p>
            </div>

            <div className='bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 text-center'>
              <div className='text-4xl mb-4'>🏖️</div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Beach Access
              </h3>
              <p className='text-gray-600'>
                Step directly from the bar onto our private beach with premium
                sunbeds and umbrellas available for guests.
              </p>
            </div>

            <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center'>
              <div className='text-4xl mb-4'>🎵</div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Ambient Music
              </h3>
              <p className='text-gray-600'>
                Carefully curated playlist featuring chill-out, lounge, and
                acoustic music that perfectly complements the beachside
                atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <OpeningHours
        schedule={schedule}
        specialHours={specialHours}
        contact={{
          phone: '+994 12 345 6789',
          email: 'shadebar@crescentbeachhotel.com',
        }}
        reservationRequired={false}
      />

      {/* Gallery */}
      <DiningGallery
        images={galleryImages}
        title='The Shade Bar Gallery'
        subtitle='Discover the unique atmosphere and stunning views of our beachfront bar'
      />

      {/* Special Offers Section */}
      <section className='py-16 bg-gradient-to-br from-blue-50 to-teal-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Special Offers & Events
              </h2>
              <p className='text-lg text-gray-600'>
                Make the most of your beach bar experience with our special
                promotions and events
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='bg-white rounded-2xl shadow-soft p-8'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Happy Hour Daily
                </h3>
                <p className='text-gray-600 mb-4'>
                  Enjoy 30% off all cocktails and appetizers during our daily
                  happy hour, perfectly timed for the golden hour before sunset.
                </p>
                <div className='bg-teal-50 rounded-lg p-4'>
                  <div className='font-semibold text-teal-700'>
                    5:00 PM - 7:00 PM Daily
                  </div>
                  <div className='text-teal-600 text-sm'>
                    All cocktails and light bites
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-2xl shadow-soft p-8'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Weekend DJ Sets
                </h3>
                <p className='text-gray-600 mb-4'>
                  Saturday evenings feature live DJ sets with chill-out and
                  lounge music, creating the perfect atmosphere for evening
                  socializing.
                </p>
                <div className='bg-purple-50 rounded-lg p-4'>
                  <div className='font-semibold text-purple-700'>
                    Saturdays 8:00 PM - 12:00 AM
                  </div>
                  <div className='text-purple-600 text-sm'>
                    Chill-out & lounge vibes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Reservations */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-2xl mx-auto text-center'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Visit The Shade Bar
              </h2>
              <p className='text-lg text-gray-600 mb-8'>
                No reservations required - simply walk in and find your perfect
                spot under our iconic sail. For special events or large groups,
                feel free to contact us in advance.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Walk-ins Welcome
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    No reservation needed for regular seating
                  </p>
                </div>
                <div className='bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Group Bookings
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Contact us for parties of 8 or more
                  </p>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <a
                  href='tel:+994123456789'
                  className='bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2'
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
                <button className='border border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200'>
                  View Location Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
