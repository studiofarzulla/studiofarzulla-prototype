import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  IoStar, 
  IoWifi, 
  IoCarSport, 
  IoRestaurant, 
  IoFitness, 
  IoWater,
  IoArrowForward,
  IoBed,
  IoHome,
  IoTrendingUp,
  IoGlobe,
  IoShield,
  IoHeart,
  IoWaterOutline,
  IoGameController,
  IoCafe,
  IoCamera,
  IoCheckmarkCircle
} from 'react-icons/io5';
import { SITE_CONFIG } from '@/constants';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import RoomPreview from '@/components/RoomPreview';
import RestaurantCard from '@/components/RestaurantCard';
import TestimonialCard from '@/components/TestimonialCard';
import StatisticsCounter from '@/components/StatisticsCounter';
import InstagramFeed from '@/components/InstagramFeed';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Luxury Beach Resort | The Crescent Beach Hotel',
  description: 'Experience unparalleled luxury at The Crescent Beach Hotel on the shores of the Caspian Sea. Premium accommodations, world-class dining, and exceptional amenities await.',
  keywords: ['luxury hotel', 'beach resort', 'Baku hotel', 'Caspian Sea', 'premium accommodation'],
};

export default function HomePage() {
  const t = useTranslations();

  // Premium Amenities
  const features = [
    {
      icon: IoWaterOutline,
      title: 'Indoor & Outdoor Pools',
      description: 'Multiple swimming pools including infinity pools with stunning Caspian Sea views and indoor pools for year-round enjoyment.',
      gradient: 'from-blue-100 to-blue-200'
    },
    {
      icon: IoFitness,
      title: 'Wellness & Spa',
      description: 'Complete wellness center with modern gym, steam and dry saunas, and rejuvenating spa treatments.',
      gradient: 'from-green-100 to-green-200'
    },
    {
      icon: IoWater,
      title: 'Private Beach Access',
      description: 'Exclusive private beach with premium sunbeds and beachside service on the pristine Caspian Sea shore.',
      gradient: 'from-cyan-100 to-cyan-200'
    },
    {
      icon: IoGameController,
      title: 'Children\'s Paradise',
      description: 'Dedicated children\'s area with safe play zones, entertainment programs, and family-friendly activities.',
      gradient: 'from-purple-100 to-purple-200'
    },
    {
      icon: IoCafe,
      title: 'Shade Bar',
      description: 'Unique sail-structured bar offering refreshing beverages and light snacks with panoramic sea views.',
      gradient: 'from-orange-100 to-orange-200'
    },
    {
      icon: IoCamera,
      title: 'Entertainment Stage',
      description: 'Professional entertainment venue hosting live performances, cultural shows, and special events.',
      gradient: 'from-pink-100 to-pink-200'
    }
  ];

  // Statistics
  const statistics = [
    { icon: IoBed, value: 200, label: 'Luxury Rooms', suffix: '+' },
    { icon: IoHome, value: 9, label: 'Buildings' },
    { icon: IoRestaurant, value: 2, label: 'Restaurants' },
    { icon: IoGlobe, value: 50, label: 'Countries Served', suffix: '+' }
  ];

  // Featured Rooms
  const featuredRooms = [
    {
      id: 'deluxe',
      name: 'Deluxe Sea View',
      capacity: 3,
      size: 35,
      price: 250,
      image: '/images/rooms/deluxe-sea-view.jpg',
      features: ['Sea View', 'Balcony', 'Premium WiFi', 'Mini Bar']
    },
    {
      id: 'suite',
      name: 'Executive Suite',
      capacity: 4,
      size: 55,
      price: 450,
      image: '/images/rooms/executive-suite.jpg',
      features: ['Panoramic View', 'Living Area', 'Premium Amenities', 'Butler Service']
    },
    {
      id: 'presidential',
      name: 'Presidential Suite',
      capacity: 6,
      size: 85,
      price: 850,
      image: '/images/rooms/presidential-suite.jpg',
      features: ['Private Terrace', 'Jacuzzi', 'Premium Services', 'VIP Treatment']
    }
  ];

  // Restaurants
  const restaurants = [
    {
      name: 'The Terrace',
      description: 'Elegant fine dining restaurant offering international cuisine with breathtaking panoramic views of the Caspian Sea.',
      cuisine: 'International Fine Dining',
      hours: '7:00 AM - 11:00 PM',
      capacity: 'Up to 120 guests',
      location: 'Main Building, 2nd Floor',
      image: '/images/restaurants/terrace.jpg',
      features: ['Sea View', 'Fine Dining', 'Wine Cellar', 'Private Events']
    },
    {
      name: 'Wild West',
      description: 'Unique themed restaurant bringing American frontier atmosphere with authentic Western cuisine and entertainment.',
      cuisine: 'American Western',
      hours: '6:00 PM - 12:00 AM',
      capacity: 'Up to 80 guests',
      location: 'Building C, Ground Floor',
      image: '/images/restaurants/wild-west.jpg',
      features: ['Live Music', 'Themed Decor', 'BBQ Specialties', 'Entertainment']
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'London, UK',
      rating: 5,
      text: 'The Crescent Beach Hotel exceeded all our expectations. The beachfront location is absolutely stunning, and the service was impeccable throughout our stay.',
      avatar: '/images/testimonials/sarah.jpg',
      date: 'August 2024'
    },
    {
      name: 'Ahmed Al-Rashid',
      location: 'Dubai, UAE',
      rating: 5,
      text: 'Outstanding facilities and world-class hospitality. The restaurants are exceptional, and the private beach made our vacation truly memorable.',
      avatar: '/images/testimonials/ahmed.jpg',
      date: 'July 2024'
    },
    {
      name: 'Elena Volkov',
      location: 'Moscow, Russia',
      rating: 5,
      text: 'A perfect blend of luxury and comfort. The spa facilities are incredible, and the staff went above and beyond to make our stay special.',
      avatar: '/images/testimonials/elena.jpg',
      date: 'September 2024'
    }
  ];

  // Why Choose Us points
  const whyChooseUs = [
    {
      icon: IoCheckmarkCircle,
      title: 'Legacy of Excellence',
      description: 'Decades of hospitality experience with a reputation for exceptional service and memorable experiences.',
    },
    {
      icon: IoHeart,
      title: 'Personalized Service',
      description: '24/7 concierge service and personalized attention to ensure every guest feels special and cared for.',
    },
    {
      icon: IoShield,
      title: 'Safety & Security',
      description: 'Comprehensive safety protocols and security measures ensuring peace of mind throughout your stay.',
    },
    {
      icon: IoTrendingUp,
      title: 'Modern Amenities',
      description: 'Cutting-edge facilities and technology integrated seamlessly with traditional Azerbaijani hospitality.',
    }
  ];

  return (
    <>
      {/* Hero Section with Booking Widget */}
      <HeroSection />

      {/* Welcome & Legacy Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6"
            >
              A Legacy of Luxury on the Caspian Shore
            </motion.h2>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              For decades, The Crescent Beach Hotel has stood as a beacon of excellence on Azerbaijan's 
              most prestigious beachfront. Spanning nine magnificent buildings with over 200 luxurious rooms, 
              we offer an unmatched blend of traditional Azerbaijani hospitality and modern sophistication.
            </motion.p>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base text-gray-500 mb-12"
            >
              From hosting international sports teams to corporate leaders, we've welcomed guests from over 
              50 countries, creating unforgettable experiences on the shores of the Caspian Sea.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <StatisticsCounter
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Amenities */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6"
            >
              World-Class Amenities
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Every detail has been carefully crafted to provide you with the ultimate luxury experience, 
              from our private beach to our world-class spa and entertainment facilities.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6"
            >
              Luxurious Accommodations
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Choose from our collection of elegantly designed rooms and suites, each offering stunning 
              views and premium amenities for the perfect stay.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <RoomPreview
                key={room.id}
                {...room}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/rooms"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              View All Rooms
              <IoArrowForward className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dining Excellence */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6"
            >
              Culinary Excellence
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Embark on a culinary journey at our distinctive restaurants, each offering unique 
              atmospheres and exceptional cuisine crafted by world-renowned chefs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={restaurant.name}
                {...restaurant}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-light text-white mb-6"
            >
              Why Choose The Crescent Beach Hotel
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-100 max-w-3xl mx-auto"
            >
              Discover what makes us the premier choice for discerning travelers seeking 
              the ultimate beachfront luxury experience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-primary-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6"
            >
              What Our Guests Say
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Read testimonials from our valued guests who have experienced the exceptional 
              hospitality and luxury that defines The Crescent Beach Hotel.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Notable Guests & Partnerships */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6"
            >
              Trusted by International Organizations
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
            >
              We proudly serve as the preferred destination for international sports teams, 
              corporate events, and prestigious organizations from around the world.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <IoStar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">FIFA Beach Football</h3>
              <p className="text-primary-700">Official accommodation partner for international beach football tournaments and events.</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100"
            >
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <IoTrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent-900">Baku City Circuit</h3>
              <p className="text-accent-700">Premium hospitality services during Formula 1 and motorsport events in Baku.</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary-50 to-secondary-100"
            >
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <IoGlobe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-900">International Teams</h3>
              <p className="text-secondary-700">Host to handball teams and sports delegations from across Europe and beyond.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Offers & Programs */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6"
            >
              Exclusive Offers & Programs
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <IoShield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Packages</h3>
              <p className="text-gray-600 mb-4">Special corporate rates and comprehensive packages for business travelers and conference groups.</p>
              <Link href="/conferences" className="text-primary-600 font-medium hover:text-primary-700">
                Learn More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <IoHeart className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Summer Membership</h3>
              <p className="text-gray-600 mb-4">Exclusive seasonal membership with beach access, dining privileges, and special event invitations.</p>
              <Link href="/contact" className="text-accent-600 font-medium hover:text-accent-700">
                Join Now →
              </Link>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <IoStar className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Loyalty Rewards</h3>
              <p className="text-gray-600 mb-4">Earn points with every stay and enjoy exclusive benefits, room upgrades, and personalized services.</p>
              <Link href="/contact" className="text-secondary-600 font-medium hover:text-secondary-700">
                Sign Up →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-light text-white mb-6"
          >
            Begin Your Extraordinary Journey
          </motion.h2>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto text-primary-100"
          >
            Experience the perfect blend of luxury, tradition, and modern comfort at Azerbaijan's 
            premier beachfront destination. Your unforgettable stay awaits.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/rooms"
              className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Book Your Stay
              <IoArrowForward className="ml-2 w-5 h-5" />
            </Link>
            
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}