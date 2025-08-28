import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Phone, Star, ChefHat, Wine, Coffee, Utensils } from 'lucide-react';

const restaurants = [
  {
    id: 'the-terrace',
    name: 'The Terrace',
    cuisine: 'International Fine Dining',
    description:
      'Elegant rooftop restaurant offering panoramic sea views and gourmet international cuisine',
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
  'Sea View': <Wine className="h-5 w-5" />,
  'Live Music': <Coffee className="h-5 w-5" />,
  'Wine Bar': <Wine className="h-5 w-5" />,
  'Private Dining': <Utensils className="h-5 w-5" />,
  'Open Kitchen': <ChefHat className="h-5 w-5" />,
  Bar: <Wine className="h-5 w-5" />,
  'Beach Access': <MapPin className="h-5 w-5" />,
  'Pool Service': <Coffee className="h-5 w-5" />,
};

export default async function DiningPage() {
  const t = await getTranslations('dining');

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
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

        <div className="container relative z-10 text-center text-white">
          <h1 className="heading-1 mb-4 drop-shadow-2xl">{t('title')}</h1>
          <p className="mx-auto max-w-3xl text-xl opacity-90 md:text-2xl">{t('subtitle')}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 mb-6">A Culinary Journey</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              From sunrise breakfast to moonlit dinners, our four unique dining venues offer an
              extraordinary culinary experience. Each restaurant showcases distinct flavors and
              atmospheres, united by our commitment to exceptional quality and service.
            </p>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="space-y-20">
            {restaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="group relative h-96 overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute left-6 top-6 rounded-lg bg-white/90 px-4 py-2 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-current text-yellow-500" />
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
                      <p className="text-lg font-medium text-primary-600">{restaurant.cuisine}</p>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-600">
                      {restaurant.description}
                    </p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="h-5 w-5 text-primary-600" />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="h-5 w-5 text-primary-600" />
                        <span>{restaurant.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Phone className="h-5 w-5 text-primary-600" />
                        <span>{restaurant.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <ChefHat className="h-5 w-5 text-primary-600" />
                        <span>{restaurant.signature}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3">
                      {restaurant.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-lg bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <button className="rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg">
                        Reserve a Table
                      </button>
                      <button className="rounded-lg border-2 border-primary-600 px-6 py-3 font-medium text-primary-600 transition-colors hover:bg-primary-50">
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
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 py-20 text-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="heading-2 mb-4">Special Culinary Events</h2>
            <p className="mx-auto max-w-2xl text-xl opacity-90">
              Join us for exclusive dining experiences and themed nights
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                <Wine className="h-10 w-10" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Wine Tasting Evenings</h3>
              <p className="opacity-80">Every Friday with our sommelier</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                <ChefHat className="h-10 w-10" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Chef&apos;s Table Experience</h3>
              <p className="opacity-80">Exclusive 7-course tasting menu</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                <Utensils className="h-10 w-10" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Sunday Brunch Buffet</h3>
              <p className="opacity-80">International cuisine with live stations</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
