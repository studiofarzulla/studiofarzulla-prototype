'use client';

import Link from 'next/link';
import {
  IoPeopleOutline,
  IoResizeOutline,
  IoStarOutline,
  IoArrowForward,
} from 'react-icons/io5';

interface RoomPreviewProps {
  id: string;
  name: string;
  capacity: number;
  size: number;
  price: number;
  image: string;
  features: string[];
  index?: number;
}

export default function RoomPreview({
  id,
  name,
  capacity,
  size,
  price,
  image,
  features,
  index = 0,
}: RoomPreviewProps) {
  return (
    <div className='group bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden'>
      {/* Image */}
      <div className='relative h-64 overflow-hidden'>
        <div
          className='w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${image})`,
          }}
        />

        {/* Price Badge */}
        <div className='absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full'>
          <span className='text-sm font-semibold text-primary-600'>
            ${price}
            <span className='text-xs text-gray-500'>/night</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        <div className='flex items-start justify-between mb-3'>
          <h3 className='text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300'>
            {name}
          </h3>
          <div className='flex text-yellow-400'>
            {[...Array(5)].map((_, i) => (
              <IoStarOutline key={i} className='w-4 h-4 fill-current' />
            ))}
          </div>
        </div>

        {/* Room Details */}
        <div className='flex items-center space-x-4 mb-4 text-gray-600'>
          <div className='flex items-center space-x-1'>
            <IoPeopleOutline className='w-4 h-4' />
            <span className='text-sm'>Up to {capacity} guests</span>
          </div>
          <div className='flex items-center space-x-1'>
            <IoResizeOutline className='w-4 h-4' />
            <span className='text-sm'>{size}m²</span>
          </div>
        </div>

        {/* Features */}
        <div className='mb-6'>
          <div className='flex flex-wrap gap-2'>
            {features.slice(0, 3).map((feature, i) => (
              <span
                key={i}
                className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'
              >
                {feature}
              </span>
            ))}
            {features.length > 3 && (
              <span className='px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded-full'>
                +{features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className='flex space-x-3'>
          <Link
            href={`/rooms/${id}` as any}
            className='flex-1 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center'
          >
            View Details
          </Link>
          <Link
            href={`/rooms/${id}?book=true` as any}
            className='flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200'
          >
            <IoArrowForward className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </div>
  );
}
