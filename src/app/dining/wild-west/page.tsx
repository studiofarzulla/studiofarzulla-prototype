'use client';

import RestaurantHero from '@/components/dining/RestaurantHero';
import MenuSection from '@/components/dining/MenuSection';
import ChefProfile from '@/components/dining/ChefProfile';
import DiningGallery from '@/components/dining/DiningGallery';
import OpeningHours from '@/components/dining/OpeningHours';
import ReservationForm from '@/components/dining/ReservationForm';
import { motion } from 'framer-motion';

const menuItems = {
  appetizers: [
    {
      id: '1',
      name: 'Buffalo Wings',
      description: 'Crispy chicken wings tossed in authentic buffalo sauce, served with celery and blue cheese dip',
      price: '28 AZN',
      spicy: true,
      popular: true
    },
    {
      id: '2',
      name: 'Loaded Potato Skins',
      description: 'Crispy potato skins loaded with cheese, bacon bits, and green onions, served with sour cream',
      price: '24 AZN'
    },
    {
      id: '3',
      name: 'Cowboy Nachos',
      description: 'House-made tortilla chips with melted cheese, jalapeños, beef chili, and all the fixings',
      price: '32 AZN',
      spicy: true
    },
    {
      id: '4',
      name: 'Onion Rings',
      description: 'Beer-battered onion rings served with ranch dipping sauce',
      price: '18 AZN',
      dietary: ['vegetarian'] 
    }
  ],
  mains: [
    {
      id: '5',
      name: 'Cowboy Ribeye Steak',
      description: '14oz ribeye steak grilled to perfection, served with mashed potatoes and grilled vegetables',
      price: '75 AZN',
      popular: true
    },
    {
      id: '6',
      name: 'BBQ Baby Back Ribs',
      description: 'Slow-cooked pork ribs glazed with house BBQ sauce, served with coleslaw and baked beans',
      price: '58 AZN'
    },
    {
      id: '7',
      name: 'Pulled Pork Sandwich',
      description: 'Slow-cooked pulled pork with tangy BBQ sauce on a toasted brioche bun, served with fries',
      price: '35 AZN'
    },
    {
      id: '8',
      name: 'Texas Chili',
      description: 'Hearty beef chili with kidney beans, served with cornbread and shredded cheese',
      price: '28 AZN',
      spicy: true
    },
    {
      id: '9',
      name: 'Grilled Chicken Breast',
      description: 'Herb-marinated chicken breast with wild rice and seasonal vegetables',
      price: '42 AZN',
      dietary: ['gluten-free'] 
    },
    {
      id: '10',
      name: 'Veggie Burger',
      description: 'House-made black bean and quinoa patty with avocado and sweet potato fries',
      price: '32 AZN',
      dietary: ['vegetarian'] 
    }
  ],
  burgers: [
    {
      id: '11',
      name: 'Wild West Burger',
      description: 'Double beef patty with cheddar cheese, bacon, onion rings, and BBQ sauce',
      price: '45 AZN',
      popular: true
    },
    {
      id: '12',
      name: 'Rodeo Burger',
      description: 'Beef patty with jalapeño jack cheese, guacamole, and chipotle mayo',
      price: '38 AZN',
      spicy: true
    },
    {
      id: '13',
      name: 'Classic Cheeseburger',
      description: 'Beef patty with American cheese, lettuce, tomato, and special sauce',
      price: '32 AZN'
    }
  ],
  desserts: [
    {
      id: '14',
      name: 'Apple Pie à la Mode',
      description: 'Traditional apple pie with vanilla ice cream and caramel sauce',
      price: '22 AZN',
      dietary: ['vegetarian'] ,
      popular: true
    },
    {
      id: '15',
      name: 'Chocolate Brownie Sundae',
      description: 'Warm chocolate brownie with vanilla ice cream, whipped cream, and chocolate sauce',
      price: '24 AZN',
      dietary: ['vegetarian'] 
    }
  ]
};

const galleryImages = [
  {
    id: '1',
    src: '/images/dining/wild-west/gallery-1.jpg',
    alt: 'Western themed dining room',
    category: 'ambiance' ,
    title: 'Authentic Western Atmosphere',
    description: 'Rustic décor with genuine Western artifacts'
  },
  {
    id: '2',
    src: '/images/dining/wild-west/gallery-2.jpg',
    alt: 'BBQ ribs platter',
    category: 'food' ,
    title: 'BBQ Baby Back Ribs',
    description: 'Slow-cooked ribs with house BBQ sauce'
  },
  {
    id: '3',
    src: '/images/dining/wild-west/gallery-3.jpg',
    alt: 'Live country music performance',
    category: 'events' ,
    title: 'Live Country Music',
    description: 'Authentic country music every Saturday night'
  },
  {
    id: '4',
    src: '/images/dining/wild-west/gallery-4.jpg',
    alt: 'Wild West burger',
    category: 'food' ,
    title: 'Wild West Signature Burger',
    description: 'Double patty with all the fixings'
  },
  {
    id: '5',
    src: '/images/dining/wild-west/gallery-5.jpg',
    alt: 'Bar area with western décor',
    category: 'ambiance' ,
    title: 'Saloon-Style Bar',
    description: 'Craft cocktails in authentic Western setting'
  },
  {
    id: '6',
    src: '/images/dining/wild-west/gallery-6.jpg',
    alt: 'Line dancing event',
    category: 'events' ,
    title: 'Line Dancing Night',
    description: 'Weekly line dancing lessons and fun'
  }
];

const schedule = [
  {
    day: 'Monday',
    closed: true
  },
  {
    day: 'Tuesday',
    dinner: '6:00 PM - 11:00 PM'
  },
  {
    day: 'Wednesday',
    dinner: '6:00 PM - 11:00 PM'
  },
  {
    day: 'Thursday',
    dinner: '6:00 PM - 11:00 PM',
    note: 'Happy Hour: 6:00 PM - 8:00 PM'
  },
  {
    day: 'Friday',
    dinner: '6:00 PM - 12:00 AM',
    note: 'Extended hours with live music'
  },
  {
    day: 'Saturday',
    dinner: '6:00 PM - 12:00 AM',
    note: 'BBQ Night with live country music and line dancing'
  },
  {
    day: 'Sunday',
    dinner: '6:00 PM - 11:00 PM'
  }
];

const specialHours = [
  {
    title: 'BBQ Saturday Nights',
    description: 'Extended hours until midnight with special BBQ buffet and entertainment',
    dates: 'Every Saturday from 8:00 PM'
  },
  {
    title: 'Happy Hour Special',
    description: '25% off all drinks and appetizers',
    dates: 'Thursday 6:00 PM - 8:00 PM'
  }
];

const chefProfile = {
  name: 'Jake "Smokey" Thompson',
  title: 'Pit Master & Head Chef - Wild West Restaurant',
  image: '/images/dining/chef-jake.jpg',
  bio: 'Born and raised in Texas, Chef Jake brings authentic American BBQ traditions to Azerbaijan. With over 12 years of experience in American cuisine and BBQ smoking techniques, he creates genuine Western dining experiences.',
  experience: '12+ years in American cuisine and BBQ specialization',
  specialties: ['BBQ Smoking', 'American Comfort Food', 'Grill Mastery', 'Western Cuisine'],
  achievements: [
    'Winner of International BBQ Championship 2020',
    'Featured in BBQ Monthly Magazine',
    'Certified Kansas City BBQ Society Judge',
    'Founded Texas BBQ Academy'
  ],
  education: [
    'Culinary Institute of America - American Cuisine',
    'BBQ Certification - Kansas City BBQ Society',
    'Meat Science Program - Texas A&M University'
  ],
  signature_dishes: [
    'BBQ Baby Back Ribs',
    'Wild West Burger',
    'Cowboy Ribeye Steak',
    'Texas Chili'
  ],
  philosophy: 'Real BBQ isn\'t just cooking - it\'s a passion, a tradition, and a way of bringing people together around great food and good times.'
};

export default function WildWestRestaurantPage() {
  return (
    <div className="min-h-screen">
      {/* Restaurant Hero */}
      <RestaurantHero
        name="Wild West Restaurant"
        tagline="Authentic American cuisine in a Western atmosphere"
        description="Step back in time to the American frontier with our Western-themed restaurant featuring authentic American BBQ, hearty comfort food, and rustic ambiance. Experience the spirit of the Wild West with live country music, line dancing, and genuine hospitality."
        cuisine="American & Western"
        location="Building F - First Floor"
        hours="6:00 PM - 12:00 AM (Closed Mondays)"
        capacity="80 Guests"
        phone="+994 12 345 6789"
        images={[
          '/images/dining/wild-west/hero-1.jpg',
          '/images/dining/wild-west/hero-2.jpg',
          '/images/dining/wild-west/hero-3.jpg'
        ]}
        features={['Western Theme', 'Live Country Music', 'Line Dancing', 'BBQ Specialties', 'Craft Cocktails']}
      />

      {/* Restaurant Introduction */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Welcome to the Wild West Experience
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Immerse yourself in the authentic atmosphere of the American frontier. Our Wild West 
                Restaurant combines genuine Western décor with traditional American cuisine, creating 
                an unforgettable dining experience that transports you to the days of cowboys, saloons, 
                and frontier hospitality.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-soft">
                  <div className="text-3xl font-bold text-orange-600 mb-2">12h</div>
                  <div className="text-gray-600">Slow BBQ Smoking</div>
                  <div className="text-sm text-gray-500 mt-1">Traditional pit smoking</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-soft">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-gray-600">Authentic Recipes</div>
                  <div className="text-sm text-gray-500 mt-1">Traditional American cuisine</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-soft">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Live</div>
                  <div className="text-gray-600">Entertainment</div>
                  <div className="text-sm text-gray-500 mt-1">Country music & line dancing</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MenuSection
            title="Appetizers & Starters"
            description="Start your Wild West adventure with our selection of hearty appetizers and finger foods"
            items={menuItems.appetizers}
          />
          
          <MenuSection
            title="Main Course Adventures"
            description="Hearty main courses featuring authentic American BBQ, steaks, and comfort food classics"
            items={menuItems.mains}
          />
          
          <MenuSection
            title="Signature Burgers"
            description="Hand-crafted burgers with premium beef patties and bold Western flavors"
            items={menuItems.burgers}
          />
          
          <MenuSection
            title="Sweet Endings"
            description="Classic American desserts to round off your frontier feast"
            items={menuItems.desserts}
            columns={1}
          />
        </div>
      </section>

      {/* BBQ Specialties Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Authentic BBQ Smoking Process</h2>
              <p className="text-xl text-orange-100 mb-6 leading-relaxed">
                Our BBQ meats are smoked low and slow for up to 12 hours using traditional 
                American hardwoods, ensuring that authentic smoky flavor and tender texture 
                that defines real barbecue.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-white">12-Hour Smoking</h4>
                    <p className="text-orange-100">Low temperature smoking for maximum tenderness</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-white">Premium Hardwoods</h4>
                    <p className="text-orange-100">Hickory and oak for authentic smoky flavor</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-white">House-Made Rubs</h4>
                    <p className="text-orange-100">Secret blend of spices and seasonings</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/dining/wild-west/bbq-smoker.jpg"
                  alt="BBQ smoking process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Traditional BBQ Pit</h3>
                  <p className="text-sm text-gray-200">
                    Our custom-built smoker maintains the perfect temperature for authentic 
                    American barbecue, just like they do it in Texas.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef Profile */}
      <ChefProfile {...chefProfile} />

      {/* Entertainment & Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Entertainment & Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience authentic Western entertainment with live country music, line dancing lessons, 
              and special themed events that bring the spirit of the American frontier to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-4">🎸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Country Music</h3>
              <p className="text-gray-600 mb-4">
                Enjoy authentic country music performances every Friday and Saturday night featuring 
                local and visiting artists.
              </p>
              <div className="text-sm text-orange-600 font-medium">Fri-Sat 8:00 PM</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-4">💃</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Line Dancing</h3>
              <p className="text-gray-600 mb-4">
                Join our line dancing sessions every Saturday night with free lessons for beginners 
                and fun for experienced dancers.
              </p>
              <div className="text-sm text-red-600 font-medium">Saturdays 9:00 PM</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-4">🥩</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">BBQ Nights</h3>
              <p className="text-gray-600 mb-4">
                Special BBQ buffet nights featuring all-you-can-eat barbecue, live music, 
                and authentic Western atmosphere.
              </p>
              <div className="text-sm text-yellow-600 font-medium">Saturdays 8:00 PM</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <OpeningHours
        schedule={schedule}
        specialHours={specialHours}
        contact={{
          phone: '+994 12 345 6789',
          email: 'wildwest@crescentbeachhotel.com'
        }}
        reservationRequired={true}
      />

      {/* Gallery */}
      <DiningGallery
        images={galleryImages}
        title="Wild West Restaurant Gallery"
        subtitle="Experience the authentic Western atmosphere and delicious American cuisine"
      />

      {/* Reservation Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ReservationForm restaurantName="Wild West Restaurant" />
          </div>
        </div>
      </section>
    </div>
  );
}