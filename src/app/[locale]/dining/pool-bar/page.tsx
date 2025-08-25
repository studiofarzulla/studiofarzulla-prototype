import RestaurantHero from '@/components/dining/RestaurantHero';
import MenuSection from '@/components/dining/MenuSection';
import DiningGallery from '@/components/dining/DiningGallery';
import OpeningHours from '@/components/dining/OpeningHours';
import Image from 'next/image';

// Force static generation for this page
export const dynamic = 'force-static';

const menuItems = {
  poolsideCocktails: [
    {
      id: '1',
      name: 'Pool Paradise',
      description: 'Tropical rum blend with mango, coconut cream, and pineapple juice',
      price: '16 AZN',
      popular: true
    },
    {
      id: '2',
      name: 'Aqua Splash',
      description: 'Refreshing vodka cocktail with watermelon, mint, and lime',
      price: '15 AZN'
    },
    {
      id: '3',
      name: 'Frozen Daiquiri',
      description: 'Classic frozen daiquiri available in strawberry, mango, or lime',
      price: '14 AZN',
      popular: true
    },
    {
      id: '4',
      name: 'Blue Lagoon',
      description: 'Vodka, blue curaçao, and lemonade served with fresh fruit',
      price: '16 AZN'
    },
    {
      id: '5',
      name: 'Virgin Mojito',
      description: 'Fresh mint, lime, and soda water with crushed ice',
      price: '10 AZN',
      dietary: ['non-alcoholic']
    }
  ],
  snacks: [
    {
      id: '6',
      name: 'Pool Club Sandwich',
      description: 'Triple-decker sandwich with chicken, bacon, lettuce, and tomato',
      price: '24 AZN',
      popular: true
    },
    {
      id: '7',
      name: 'Chicken Quesadilla',
      description: 'Grilled chicken with cheese, peppers, and onions in crispy tortilla',
      price: '22 AZN'
    },
    {
      id: '8',
      name: 'Pool Nachos',
      description: 'Crispy tortilla chips with cheese sauce, jalapeños, and sour cream',
      price: '18 AZN',
      dietary: ['vegetarian']
    },
    {
      id: '9',
      name: 'Fresh Caesar Salad',
      description: 'Crisp romaine lettuce with parmesan cheese and garlic croutons',
      price: '20 AZN',
      dietary: ['vegetarian']
    },
    {
      id: '10',
      name: 'Fish & Chips',
      description: 'Beer-battered fish fillet with golden fries and tartar sauce',
      price: '28 AZN'
    }
  ],
  refreshments: [
    {
      id: '11',
      name: 'Fresh Fruit Platter',
      description: 'Seasonal selection of tropical and local fruits served chilled',
      price: '16 AZN',
      dietary: ['vegan', 'gluten-free']
    },
    {
      id: '12',
      name: 'Frozen Fruit Smoothie',
      description: 'Blended smoothie with your choice of tropical fruits',
      price: '12 AZN',
      dietary: ['vegan']
    },
    {
      id: '13',
      name: 'Iced Coffee Float',
      description: 'Cold brew coffee with vanilla ice cream and whipped cream',
      price: '14 AZN'
    },
    {
      id: '14',
      name: 'Fresh Lemonade',
      description: 'House-made lemonade with fresh herbs and fruit garnish',
      price: '8 AZN',
      dietary: ['vegan']
    },
    {
      id: '15',
      name: 'Energy Smoothie Bowl',
      description: 'Acai and banana blend topped with granola and fresh berries',
      price: '18 AZN',
      dietary: ['vegan']
    }
  ],
  iceCream: [
    {
      id: '16',
      name: 'Premium Ice Cream Selection',
      description: 'Choice of vanilla, chocolate, strawberry, or pistachio',
      price: '8 AZN',
      dietary: ['vegetarian']
    },
    {
      id: '17',
      name: 'Ice Cream Sundae',
      description: 'Three scoops with chocolate sauce, whipped cream, and cherry',
      price: '14 AZN',
      dietary: ['vegetarian']
    },
    {
      id: '18',
      name: 'Fruit Popsicles',
      description: 'House-made popsicles with real fruit pieces',
      price: '6 AZN',
      dietary: ['vegan']
    }
  ]
};

const galleryImages = [
  {
    id: '1',
    src: '/images/dining/pool-bar/gallery-1.jpg',
    alt: 'Pool bar overlooking swimming pool',
    category: 'ambiance' ,
    title: 'Poolside Paradise',
    description: 'Bar deck overlooking the outdoor swimming pool'
  },
  {
    id: '2',
    src: '/images/dining/pool-bar/gallery-2.jpg',
    alt: 'Tropical cocktails by the pool',
    category: 'food' ,
    title: 'Tropical Pool Cocktails',
    description: 'Refreshing drinks perfect for poolside relaxation'
  },
  {
    id: '3',
    src: '/images/dining/pool-bar/gallery-3.jpg',
    alt: 'Comfortable pool lounge seating',
    category: 'ambiance' ,
    title: 'Comfort & Style',
    description: 'Stylish lounge seating with pool views'
  },
  {
    id: '4',
    src: '/images/dining/pool-bar/gallery-4.jpg',
    alt: 'Fresh poolside snacks',
    category: 'food' ,
    title: 'Light Pool Snacks',
    description: 'Fresh and tasty options for pool dining'
  },
  {
    id: '5',
    src: '/images/dining/pool-bar/gallery-5.jpg',
    alt: 'Pool service delivery',
    category: 'service' ,
    title: 'Poolside Service',
    description: 'Drinks and food delivered directly to your lounger'
  },
  {
    id: '6',
    src: '/images/dining/pool-bar/gallery-6.jpg',
    alt: 'Evening pool bar atmosphere',
    category: 'ambiance' ,
    title: 'Evening Pool Vibes',
    description: 'Beautiful lighting creates magical evening ambiance'
  }
];

const schedule = [
  {
    day: 'Monday',
    breakfast: '9:00 AM - 11:00 AM',
    lunch: '11:00 AM - 6:00 PM',
    dinner: '6:00 PM - 10:00 PM'
  },
  {
    day: 'Tuesday',
    breakfast: '9:00 AM - 11:00 AM',
    lunch: '11:00 AM - 6:00 PM',
    dinner: '6:00 PM - 10:00 PM'
  },
  {
    day: 'Wednesday',
    breakfast: '9:00 AM - 11:00 AM',
    lunch: '11:00 AM - 6:00 PM',
    dinner: '6:00 PM - 10:00 PM'
  },
  {
    day: 'Thursday',
    breakfast: '9:00 AM - 11:00 AM',
    lunch: '11:00 AM - 6:00 PM',
    dinner: '6:00 PM - 10:00 PM',
    note: 'Pool party preparations available'
  },
  {
    day: 'Friday',
    breakfast: '9:00 AM - 11:00 AM',
    lunch: '11:00 AM - 6:00 PM',
    dinner: '6:00 PM - 10:00 PM',
    note: 'Extended cocktail hours'
  },
  {
    day: 'Saturday',
    breakfast: '9:00 AM - 11:30 AM',
    lunch: '11:30 AM - 6:30 PM',
    dinner: '6:30 PM - 10:30 PM',
    note: 'Weekend extended hours'
  },
  {
    day: 'Sunday',
    breakfast: '9:00 AM - 11:30 AM',
    lunch: '11:30 AM - 6:30 PM',
    dinner: '6:30 PM - 10:30 PM',
    note: 'Family pool day specials'
  }
];

const specialHours = [
  {
    title: 'Summer Season Extension',
    description: 'Extended hours during peak swimming season',
    dates: 'June - September: Open until 11:00 PM'
  },
  {
    title: 'Pool Party Events',
    description: 'Special hours for private pool parties and events',
    dates: 'Available by arrangement'
  }
];

export default function PoolBarPage() {
  return (
    <div className="min-h-screen">
      {/* Restaurant Hero */}
      <RestaurantHero
        name="Pool Bar"
        tagline="Refreshing drinks with poolside views"
        description="Cool off and relax at our Pool Bar, perfectly positioned to overlook our outdoor swimming pool and recreational areas. Enjoy tropical cocktails, refreshing smoothies, and light snacks while taking in the vibrant pool atmosphere and sunshine."
        cuisine="Poolside Refreshments & Light Meals"
        location="Pool Area - Outdoor Deck"
        hours="9:00 AM - 10:00 PM"
        capacity="40 Guests"
        phone="+994 12 345 6789"
        images={[
          '/images/dining/pool-bar/hero-1.jpg',
          '/images/dining/pool-bar/hero-2.jpg',
          '/images/dining/pool-bar/hero-3.jpg'
        ]}
        features={['Pool Views', 'Direct Pool Service', 'Tropical Cocktails', 'Light Snacks', 'Ice Cream Bar']}
      />

      {/* Pool Bar Introduction */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Poolside Refreshment Destination
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The Pool Bar is your gateway to the perfect pool day experience. Whether you're 
                cooling off after a swim, enjoying a sunny afternoon with friends, or treating 
                the kids to ice cream, our poolside location offers everything you need for a 
                refreshing and enjoyable time by the water.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-soft">
                  <div className="text-2xl mb-2">🏊‍♂️</div>
                  <div className="font-semibold text-gray-900 mb-1">Pool Views</div>
                  <div className="text-sm text-gray-600">Perfect spot to watch pool activities</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-soft">
                  <div className="text-2xl mb-2">🍹</div>
                  <div className="font-semibold text-gray-900 mb-1">Pool Service</div>
                  <div className="text-sm text-gray-600">Drinks delivered to your lounger</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-soft">
                  <div className="text-2xl mb-2">🍦</div>
                  <div className="font-semibold text-gray-900 mb-1">Ice Cream Bar</div>
                  <div className="text-sm text-gray-600">Premium ice cream selection</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-soft">
                  <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                  <div className="font-semibold text-gray-900 mb-1">Family Friendly</div>
                  <div className="text-sm text-gray-600">Kids menu and activities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MenuSection
            title="Poolside Cocktails & Drinks"
            description="Tropical and refreshing cocktails perfect for pool relaxation and sunny days"
            items={menuItems.poolsideCocktails}
          />
          
          <MenuSection
            title="Light Snacks & Pool Food"
            description="Easy-to-eat snacks and light meals designed for poolside dining"
            items={menuItems.snacks}
          />
          
          <MenuSection
            title="Refreshing Beverages"
            description="Cool and healthy options to keep you hydrated and energized"
            items={menuItems.refreshments}
            columns={2}
          />
          
          <MenuSection
            title="Ice Cream & Frozen Treats"
            description="Cool down with our selection of premium ice creams and frozen delights"
            items={menuItems.iceCream}
            columns={1}
          />
        </div>
      </section>

      {/* Pool Service Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Direct Pool Service</h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Don't want to leave your comfortable spot by the pool? No problem! 
                Our friendly staff will bring your drinks and snacks directly to your 
                pool lounger, ensuring you can enjoy uninterrupted relaxation in the sun.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-white">Lounger Service</h4>
                    <p className="text-blue-100">Orders delivered directly to your pool chair</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-white">Waterproof Menus</h4>
                    <p className="text-blue-100">Easy-to-use poolside ordering system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-white">Towel Service</h4>
                    <p className="text-blue-100">Fresh towels available with food service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dining/pool-bar/pool-service.jpg"
                  alt="Pool service delivery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold mb-2 text-white">VIP Pool Service</h3>
                  <p className="text-sm text-gray-200">
                    Relax and enjoy as our staff takes care of all your poolside needs, 
                    from refreshing drinks to comfortable amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Families</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Pool Bar caters to guests of all ages with special family-friendly features, 
              kids' options, and activities to keep everyone happy and entertained.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🧒</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Kids Menu</h3>
              <p className="text-gray-600 text-sm">
                Special menu items designed for children with healthy options and fun presentations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🍦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ice Cream Station</h3>
              <p className="text-gray-600 text-sm">
                Premium ice cream selection with various flavors and fun toppings for all ages.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🥤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Healthy Options</h3>
              <p className="text-gray-600 text-sm">
                Fresh fruit smoothies, natural juices, and nutritious snacks for health-conscious families.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Pool Games</h3>
              <p className="text-gray-600 text-sm">
                Water volleyball, pool basketball, and other fun activities to keep the family active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Bar Features */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/images/dining/pool-bar/feature-1.jpg"
                      alt="Pool bar seating"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src="/images/dining/pool-bar/feature-2.jpg"
                      alt="Cocktail preparation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src="/images/dining/pool-bar/feature-3.jpg"
                      alt="Pool activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/images/dining/pool-bar/feature-4.jpg"
                      alt="Ice cream service"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Pool Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Pool Bar is more than just a refreshment stop - it's the heart of our 
                pool area social experience. With comfortable seating, excellent service, 
                and a fun atmosphere, it's where memories are made.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Location</h4>
                    <p className="text-gray-600">Best views of the pool and surrounding gardens</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">All-Day Service</h4>
                    <p className="text-gray-600">From morning coffee to evening cocktails</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Social Hub</h4>
                    <p className="text-gray-600">Meet other guests and enjoy the vibrant atmosphere</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                  View Pool Amenities
                </button>
                <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Pool Activities Schedule
                </button>
              </div>
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
          email: 'poolbar@crescentbeachhotel.com'
        }}
        reservationRequired={false}
      />

      {/* Gallery */}
      <DiningGallery
        images={galleryImages}
        title="Pool Bar Gallery"
        subtitle="Discover the fun and relaxing atmosphere of our poolside destination"
      />

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready for Pool Time?</h2>
              <p className="text-lg text-gray-600 mb-8">
                No reservations needed - just grab a spot by the pool and let us take care of 
                everything else. Pool towels, comfortable loungers, and refreshing service await!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Walk-Up Service</h4>
                  <p className="text-gray-600 text-sm">No reservations needed</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Pool Equipment</h4>
                  <p className="text-gray-600 text-sm">Towels, loungers, and umbrellas available</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Group Events</h4>
                  <p className="text-gray-600 text-sm">Pool parties and celebrations welcome</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+994123456789"
                  className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Pool Bar Inquiries</span>
                </a>
                <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Pool Rules & Guidelines
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}