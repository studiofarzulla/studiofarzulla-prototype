'use client';

import Image from 'next/image';
import {
  IoLocationOutline,
  IoTimeOutline,
  IoPeopleOutline,
  IoCallOutline,
} from 'react-icons/io5';

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
  features = [],
}: RestaurantHeroProps) {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src={images[0]}
          alt={`${name} ambiance`}
          fill
          className='object-cover'
          priority
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30' />
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 text-center text-white'>
        {/* Cuisine Badge */}
        <div className='inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
          <span className='text-sm font-medium'>{cuisine} Cuisine</span>
        </div>

        {/* Restaurant Name */}
        <h1 className='text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent'>
          {name}
        </h1>

        {/* Tagline */}
        <p className='text-xl md:text-2xl mb-6 text-gray-200'>
          {tagline}
        </p>

        {/* Description */}
        <p className='text-lg max-w-3xl mx-auto mb-8 leading-relaxed text-gray-300'>
          {description}
        </p>

        {/* Restaurant Info */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8'>
            <div className='flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4'>
              <IoLocationOutline className='w-6 h-6 text-accent-400' />
              <span className='font-medium'>{location}</span>
            </div>
            <div className='flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4'>
              <IoTimeOutline className='w-6 h-6 text-accent-400' />
              <span className='font-medium'>{hours}</span>
            </div>
            <div className='flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4'>
              <IoPeopleOutline className='w-6 h-6 text-accent-400' />
              <span className='font-medium'>{capacity}</span>
            </div>
          </div>

        {/* Features */}
        {features.length > 0 && (
          <div className='flex flex-wrap justify-center gap-3 mb-8'>
            {features.map((feature, index) => (
              <span
                key={index}
                className='px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20'
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Call to Actions */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button className='bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105'>
              Make Reservation
            </button>
            <button className='border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all duration-200'>
              View Full Menu
            </button>
            {phone && (
              <a
                href={`tel:${phone}`}
                className='flex items-center space-x-2 text-white hover:text-accent-400 transition-colors duration-200'
              >
                <IoCallOutline className='w-5 h-5' />
                <span className='font-medium'>{phone}</span>
              </a>
            )}
          </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white/70 rounded-full mt-2' />
        </div>
      </div>
    </section>
  );
}
