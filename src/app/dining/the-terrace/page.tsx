'use client';

import RestaurantHero from '@/components/dining/RestaurantHero';
import MenuSection from '@/components/dining/MenuSection';
import ChefProfile from '@/components/dining/ChefProfile';
import DiningGallery from '@/components/dining/DiningGallery';
import OpeningHours from '@/components/dining/OpeningHours';
import ReservationForm from '@/components/dining/ReservationForm';
import { motion } from 'framer-motion';

const menuItems = {
  breakfast: [
    {
      id: '1',
      name: 'Continental Breakfast',
      description: 'Fresh croissants, artisan breads, seasonal fruits, cheeses, and cold cuts with premium coffee',
      price: '35 AZN',
      dietary: ['vegetarian'] ,
      popular: true
    },
    {
      id: '2',
      name: 'Eggs Benedict',
      description: 'Poached eggs, Canadian bacon, hollandaise sauce on toasted English muffins',
      price: '28 AZN'
    },
    {
      id: '3',
      name: 'Turkish Menemen',
      description: 'Traditional Turkish scrambled eggs with tomatoes, peppers, and herbs',
      price: '24 AZN',
      dietary: ['vegetarian'] ,
      spicy: true
    },
    {
      id: '4',
      name: 'Fresh Fruit Bowl',
      description: 'Seasonal selection of local and tropical fruits with Greek yogurt and honey',
      price: '18 AZN',
      dietary: ['vegetarian', 'gluten-free'] 
    }
  ],
  lunch: [
    {
      id: '5',
      name: 'Grilled Atlantic Salmon',
      description: 'Fresh salmon fillet with Mediterranean vegetables and lemon herb butter',
      price: '48 AZN',
      dietary: ['gluten-free'] ,
      popular: true
    },
    {
      id: '6',
      name: 'Beef Tenderloin',
      description: 'Premium beef tenderloin with roasted potatoes and seasonal vegetables',
      price: '65 AZN',
      dietary: ['gluten-free'] 
    },
    {
      id: '7',
      name: 'Mediterranean Pasta',
      description: 'House-made pasta with sun-dried tomatoes, olives, capers, and fresh basil',
      price: '32 AZN',
      dietary: ['vegetarian'] 
    },
    {
      id: '8',
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce, parmesan cheese, croutons, and classic Caesar dressing',
      price: '26 AZN',
      dietary: ['vegetarian'] 
    }
  ],
  dinner: [
    {
      id: '9',
      name: 'Caspian Sea Caviar Platter',
      description: 'Premium local caviar served with traditional accompaniments and blinis',
      price: '120 AZN',
      popular: true
    },
    {
      id: '10',
      name: 'Lobster Thermidor',
      description: 'Whole lobster with cognac cream sauce, gruyere cheese, and aromatic herbs',
      price: '85 AZN'
    },
    {
      id: '11',
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with cherry compote and potato gratin',
      price: '52 AZN',
      dietary: ['gluten-free'] 
    },
    {
      id: '12',
      name: 'Vegetarian Tasting Menu',
      description: 'Five-course seasonal vegetarian menu showcasing local produce',
      price: '68 AZN',
      dietary: ['vegetarian'] 
    }
  ],
  desserts: [
    {
      id: '13',
      name: 'Crème Brûlée',
      description: 'Classic vanilla custard with caramelized sugar and fresh berries',
      price: '22 AZN',
      dietary: ['vegetarian', 'gluten-free'] ,
      popular: true
    },
    {
      id: '14',
      name: 'Chocolate Soufflé',
      description: 'Warm chocolate soufflé with vanilla ice cream (20 minutes preparation)',
      price: '28 AZN',
      dietary: ['vegetarian'] 
    }
  ]
};

const galleryImages = [
  {
    id: '1',
    src: '/images/dining/terrace/gallery-1.jpg',
    alt: 'Elegant terrace dining area',
    category: 'ambiance' ,
    title: 'Sea View Terrace',
    description: 'Elegant dining with panoramic Caspian Sea views'
  },
  {
    id: '2',
    src: '/images/dining/terrace/gallery-2.jpg',
    alt: 'Grilled salmon dish',
    category: 'food' ,
    title: 'Grilled Atlantic Salmon',
    description: 'Fresh salmon with Mediterranean vegetables'
  },
  {
    id: '3',
    src: '/images/dining/terrace/gallery-3.jpg',
    alt: 'Professional service',
    category: 'service' ,
    title: 'Professional Service',
    description: 'Attentive staff providing exceptional dining service'
  },
  {
    id: '4',
    src: '/images/dining/terrace/gallery-4.jpg',
    alt: 'Wine selection',
    category: 'food' ,
    title: 'Premium Wine Selection',
    description: 'Curated international wine collection'
  },
  {
    id: '5',
    src: '/images/dining/terrace/gallery-5.jpg',
    alt: 'Private dining setup',
    category: 'events' ,
    title: 'Private Dining',
    description: 'Intimate setting for special occasions'
  },
  {
    id: '6',
    src: '/images/dining/terrace/gallery-6.jpg',
    alt: 'Sunset dining',
    category: 'ambiance' ,
    title: 'Sunset Views',
    description: 'Romantic atmosphere during golden hour'
  }
];

const schedule = [
  {
    day: 'Monday',
    breakfast: '7:00 AM - 11:00 AM',
    lunch: '12:00 PM - 4:00 PM',
    dinner: '7:00 PM - 11:00 PM'
  },
  {
    day: 'Tuesday',
    breakfast: '7:00 AM - 11:00 AM',
    lunch: '12:00 PM - 4:00 PM',
    dinner: '7:00 PM - 11:00 PM'
  },
  {
    day: 'Wednesday',
    breakfast: '7:00 AM - 11:00 AM',
    lunch: '12:00 PM - 4:00 PM',
    dinner: '7:00 PM - 11:00 PM'
  },
  {
    day: 'Thursday',
    breakfast: '7:00 AM - 11:00 AM',
    lunch: '12:00 PM - 4:00 PM',
    dinner: '7:00 PM - 11:00 PM'
  },
  {
    day: 'Friday',
    breakfast: '7:00 AM - 11:00 AM',
    lunch: '12:00 PM - 4:00 PM',
    dinner: '7:00 PM - 12:00 AM',
    note: 'Extended hours for Wine Tasting event'
  },
  {
    day: 'Saturday',
    breakfast: '7:00 AM - 11:30 AM',
    lunch: '12:00 PM - 4:30 PM',
    dinner: '7:00 PM - 12:00 AM'
  },
  {
    day: 'Sunday',
    breakfast: '7:00 AM - 11:30 AM',
    lunch: '12:00 PM - 4:30 PM',
    dinner: '7:00 PM - 11:00 PM'
  }
];

const specialHours = [
  {
    title: 'Wine Tasting Fridays',
    description: 'Extended dinner service until midnight for wine tasting events',
    dates: 'Every Friday from 7:00 PM'
  },
  {
    title: 'Holiday Schedule',
    description: 'Special holiday hours and festive menus available',
    dates: 'December 31 - January 2'
  }
];

const chefProfile = {
  name: 'Alessandro Marino',
  title: 'Executive Chef - The Terrace Restaurant',
  image: '/images/dining/chef-alessandro.jpg',
  bio: 'With over 15 years of international culinary experience, Chef Alessandro brings a sophisticated approach to international cuisine, blending classical techniques with modern innovation.',
  experience: '15+ years in fine dining across Europe and Asia',
  specialties: ['French Cuisine', 'Mediterranean Flavors', 'Seafood Mastery', 'Wine Pairing'],
  achievements: [
    'Michelin-starred experience in Lyon, France',
    'Winner of International Culinary Competition 2019',
    'Featured in Gourmet Magazine\'s Rising Stars',
    'Certified Sommelier Level 2'
  ],
  education: [
    'Le Cordon Bleu Paris - Culinary Arts Diploma',
    'Advanced Wine Studies - Court of Master Sommeliers',
    'Seafood Specialization - Culinary Institute of America'
  ],
  signature_dishes: [
    'Caspian Sea Caviar Platter',
    'Duck Confit with Cherry Compote',
    'Lobster Thermidor',
    'Five-Course Tasting Menu'
  ],
  philosophy: 'Cuisine is the art of transforming simple ingredients into extraordinary experiences, where every dish tells a story of culture, tradition, and innovation.'
};

export default function TerraceRestaurantPage() {
  return (
    <div className="min-h-screen">
      {/* Restaurant Hero */}
      <RestaurantHero
        name="The Terrace Restaurant"
        tagline="International à la carte dining with sea views"
        description="Experience sophisticated international cuisine on our elegant terrace overlooking the Caspian Sea. Our à la carte menu features carefully crafted dishes from around the world, prepared with the finest ingredients and served in an atmosphere of refined luxury."
        cuisine="International"
        location="Main Building - Ground Floor"
        hours="7:00 AM - 11:00 PM"
        capacity="120 Guests"
        phone="+994 12 345 6789"
        images={[
          '/images/dining/terrace/hero-1.jpg',
          '/images/dining/terrace/hero-2.jpg',
          '/images/dining/terrace/hero-3.jpg'
        ]}
        features={['Sea View Terrace', 'International Menu', 'Wine Selection', 'Private Dining', 'Live Music']}
      />

      {/* Restaurant Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Where Culinary Art Meets Ocean Views
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The Terrace Restaurant stands as our flagship dining venue, offering an unparalleled 
                culinary journey that celebrates international flavors while embracing the beauty of 
                our beachfront location. Every meal becomes a memorable experience with our carefully 
                curated à la carte menu and stunning panoramic views of the Caspian Sea.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">120</div>
                  <div className="text-gray-600">Seating Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-gray-600">Menu Items</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
                  <div className="text-gray-600">Wine Selections</div>
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
            title="Breakfast Menu"
            description="Start your day with our carefully crafted breakfast selection, from continental favorites to local specialties"
            items={menuItems.breakfast}
          />
          
          <MenuSection
            title="Lunch Selection"
            description="Midday dining featuring fresh seafood, premium meats, and vibrant Mediterranean flavors"
            items={menuItems.lunch}
          />
          
          <MenuSection
            title="Dinner Experience"
            description="Evening fine dining showcasing international cuisine with premium ingredients and expert preparation"
            items={menuItems.dinner}
          />
          
          <MenuSection
            title="Sweet Endings"
            description="Artisanal desserts to complete your dining experience"
            items={menuItems.desserts}
            columns={1}
          />
        </div>
      </section>

      {/* Chef Profile */}
      <ChefProfile {...chefProfile} />

      {/* Wine & Beverage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Wine & Beverage Selection</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our extensive wine collection features over 200 carefully selected wines from renowned 
                vineyards around the world. From crisp whites to full-bodied reds, our sommelier will 
                help you find the perfect pairing for your meal.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">International Collection</h4>
                    <p className="text-gray-600">Wines from France, Italy, Spain, California, and beyond</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Sommelier</h4>
                    <p className="text-gray-600">Professional wine pairing recommendations and tastings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Craft Cocktails</h4>
                    <p className="text-gray-600">Signature cocktails and premium spirits selection</p>
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
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="/images/dining/terrace/wine-cellar.jpg"
                  alt="Wine selection at The Terrace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Wine Tasting Fridays</h3>
                  <p className="text-sm opacity-90">
                    Join us every Friday for our weekly wine tasting experience featuring 
                    six premium wines paired with gourmet appetizers.
                  </p>
                </div>
              </div>
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
          email: 'terrace@crescentbeachhotel.com'
        }}
        reservationRequired={true}
      />

      {/* Gallery */}
      <DiningGallery
        images={galleryImages}
        title="The Terrace Restaurant Gallery"
        subtitle="A visual journey through our elegant dining experience"
      />

      {/* Reservation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ReservationForm restaurantName="The Terrace Restaurant" />
          </div>
        </div>
      </section>
    </div>
  );
}