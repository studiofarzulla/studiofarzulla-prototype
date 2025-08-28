import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Phone, Star, ChefHat, Wine, Coffee, Utensils } from 'lucide-react';

const restaurants = [
  {
    id: 'the-terrace',
    name: 'The Terrace',
    cuisine: 'International Fine Dining',
    description: 'Elegant rooftop restaurant offering panoramic sea views and gourmet international cuisine',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
    rating: 4.9,
    priceRange: '$$$$',
    hours: '18:00 - 23:00',
    location: 'Main Building, 12th Floor',
    phone: '+994 12 345 67 89',
    features: ['Sea View', 'Live Music', 'Wine Bar', 'Private Dining'],
    signature: 'Caspian Caviar Tasting Menu',
  },
  {
    id: 'wild-west',
    name: 'Wild West Steakhouse',
    cuisine: 'American Grill',
    description: 'Authentic American steakhouse with premium cuts and craft cocktails',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800',
    rating: 4.7,
    priceRange: '$$$',
    hours: '12:00 - 24:00',
    location: 'West Wing, Ground Floor',
    phone: '+994 12 345 67 90',
    features: ['Open Kitchen', 'Bar', 'Live Sports', 'Kids Menu'],
    signature: 'Dry-Aged Ribeye Steak',
  },
  {
    id: 'shade-bar',
    name: 'Shade Beach Bar',
    cuisine: 'Mediterranean & Cocktails',
    description: 'Beachfront bar serving light Mediterranean fare and tropical cocktails',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    rating: 4.6,
    priceRange: '$$',
    hours: '10:00 - 02:00',
    location: 'Beach Front',
    phone: '+994 12 345 67 91',
    features: ['Beach Access', 'Sunset View', 'DJ Nights', 'Shisha'],
    signature: 'Signature Sunset Cocktail',
  },
  {
    id: 'pool-bar',
    name: 'Aqua Pool Bar',
    cuisine: 'Snacks & Refreshments',
    description: 'Poolside refreshment bar with healthy snacks and fresh juices',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
    rating: 4.5,
    priceRange: '$',
    hours: '09:00 - 19:00',
    location: 'Main Pool Area',
    phone: '+994 12 345 67 92',
    features: ['Pool Service', 'Fresh Juices', 'Smoothies', 'Light Bites'],
    signature: 'Tropical Paradise Smoothie Bowl',
  },
];

const featureIcons: { [key: string]: React.ReactNode } = {
  'Sea View': <Wine className="w-5 h-5" />,
  'Live Music': <Coffee className="w-5 h-5" />,
  'Wine Bar': <Wine className="w-5 h-5" />,
  'Private Dining': <Utensils className="w-5 h-5" />,
  'Open Kitchen': <ChefHat className="w-5 h-5" />,
  'Bar': <Wine className="w-5 h-5" />,
  'Beach Access': <MapPin className="w-5 h-5" />,
  'Pool Service': <Coffee className="w-5 h-5" />,
};

export default async function DiningPage() {
  const t = await getTranslations('dining');

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
            alt="Fine Dining"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <h1 className="heading-1 mb-4 drop-shadow-2xl">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">A Culinary Journey</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From sunrise breakfast to moonlit dinners, our four unique dining venues offer 
              an extraordinary culinary experience. Each restaurant showcases distinct flavors 
              and atmospheres, united by our commitment to exceptional quality and service.
            </p>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="space-y-20">
            {restaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="font-semibold">{restaurant.rating}</span>
                        <span className="text-gray-600">• {restaurant.priceRange}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    <div>
                      <h3 className="heading-3 mb-2">{restaurant.name}</h3>
                      <p className="text-primary-600 font-medium text-lg">{restaurant.cuisine}</p>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {restaurant.description}
                    </p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-primary-600" />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-primary-600" />
                        <span>{restaurant.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Phone className="w-5 h-5 text-primary-600" />
                        <span>{restaurant.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <ChefHat className="w-5 h-5 text-primary-600" />
                        <span>{restaurant.signature}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3">
                      {restaurant.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105">
                        Reserve a Table
                      </button>
                      <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                        View Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Special Culinary Events</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join us for exclusive dining experiences and themed nights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wine Tasting Evenings</h3>
              <p className="opacity-80">Every Friday with our sommelier</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chef's Table Experience</h3>
              <p className="opacity-80">Exclusive 7-course tasting menu</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sunday Brunch Buffet</h3>
              <p className="opacity-80">International cuisine with live stations</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}