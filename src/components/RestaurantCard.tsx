'use client';

import Link from 'next/link';
import {
  IoTimeOutline,
  IoPeopleOutline,
  IoLocationOutline,
  IoArrowForward,
} from 'react-icons/io5';

interface RestaurantCardProps {
  name: string;
  description: string;
  cuisine: string;
  hours: string;
  capacity: string;
  location: string;
  image: string;
  features: string[];
  href?: string;
  index?: number;
}

export default function RestaurantCard({
  name,
  description,
  cuisine,
  hours,
  capacity,
  location,
  image,
  features,
  href,
  index = 0,
}: RestaurantCardProps) {
  // Generate href from restaurant name if not provided
  const getRestaurantLink = () => {
    if (href) return href;

    const slug = name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    return `/dining/${slug}`;
  };
  return (
    <div className='group bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden'>
      {/* Image */}
      <div className='relative h-64 overflow-hidden'>
        <div
          className='w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${image})`,
          }}
        />

        {/* Cuisine Badge */}
        <div className='absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full'>
          <span className='text-sm font-medium text-gray-800'>{cuisine}</span>
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300'>
          {name}
        </h3>

        <p className='text-gray-600 mb-4 leading-relaxed'>{description}</p>

        {/* Restaurant Details */}
        <div className='space-y-2 mb-4 text-gray-600'>
          <div className='flex items-center space-x-2'>
            <IoTimeOutline className='w-4 h-4 text-primary-500' />
            <span className='text-sm'>{hours}</span>
          </div>
          <div className='flex items-center space-x-2'>
            <IoPeopleOutline className='w-4 h-4 text-primary-500' />
            <span className='text-sm'>{capacity}</span>
          </div>
          <div className='flex items-center space-x-2'>
            <IoLocationOutline className='w-4 h-4 text-primary-500' />
            <span className='text-sm'>{location}</span>
          </div>
        </div>

        {/* Features */}
        <div className='mb-6'>
          <div className='flex flex-wrap gap-2'>
            {features.map((feature, i) => (
              <span
                key={i}
                className='px-3 py-1 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 text-xs rounded-full border border-primary-200'
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className='flex space-x-3'>
          <Link
            href={getRestaurantLink() as any}
            className='flex-1 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white text-sm font-medium py-3 px-4 rounded-lg transition-all duration-200 text-center'
          >
            View Details
          </Link>
          <Link
            href={getRestaurantLink() as any}
            className='flex items-center justify-center px-4 py-3 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200'
          >
            <IoArrowForward className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </div>
  );
}
