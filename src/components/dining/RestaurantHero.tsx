'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoLocationOutline, IoTimeOutline, IoPeopleOutline, IoCallOutline } from 'react-icons/io5';

interface RestaurantHeroProps {
  name: string;
  tagline: string;
  description: string;
  cuisine: string;
  location: string;
  hours: string;
  capacity: string;
  phone?: string;
  images: string[];
  features?: string[];
}

export default function RestaurantHero({
  name,
  tagline,
  description,
  cuisine,
  location,
  hours,
  capacity,
  phone,
  images,
  features = []
}: RestaurantHeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: index === 0 ? 1 : 0,
              scale: 1
            }}
            transition={{ 
              duration: 1.5,
              delay: index * 5,
              repeat: Infinity,
              repeatDelay: images.length * 5 - 5
            }}
          >
            <Image
              src={image}
              alt={`${name} ambiance ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Cuisine Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <span className="text-sm font-medium">{cuisine} Cuisine</span>
          </motion.div>

          {/* Restaurant Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
          >
            {name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl mb-6 text-gray-200"
          >
            {tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed text-gray-300"
          >
            {description}
          </motion.p>

          {/* Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8"
          >
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <IoLocationOutline className="w-6 h-6 text-accent-400" />
              <span className="font-medium">{location}</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <IoTimeOutline className="w-6 h-6 text-accent-400" />
              <span className="font-medium">{hours}</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <IoPeopleOutline className="w-6 h-6 text-accent-400" />
              <span className="font-medium">{capacity}</span>
            </div>
          </motion.div>

          {/* Features */}
          {features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          )}

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Make Reservation
            </button>
            <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              View Full Menu
            </button>
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center space-x-2 text-white hover:text-accent-400 transition-colors duration-200"
              >
                <IoCallOutline className="w-5 h-5" />
                <span className="font-medium">{phone}</span>
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}