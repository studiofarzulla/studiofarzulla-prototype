'use client';

import { IoStarOutline, IoChatboxOutline } from 'react-icons/io5';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  text,
  avatar,
  date,
  index = 0,
}: TestimonialCardProps) {
  return (
    <div className='bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300'>
      {/* Quote Icon */}
      <div className='mb-4'>
        <IoChatboxOutline className='w-8 h-8 text-primary-300' />
      </div>

      {/* Rating */}
      <div className='flex items-center space-x-1 mb-4'>
        {[...Array(5)].map((_, i) => (
          <IoStarOutline
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className='text-gray-700 leading-relaxed mb-6 italic'>"{text}"</p>

      {/* Author */}
      <div className='flex items-center space-x-3'>
        <div className='relative'>
          <div
            className='w-12 h-12 bg-cover bg-center rounded-full border-2 border-primary-200'
            style={{ backgroundImage: `url(${avatar})` }}
          />
        </div>
        <div>
          <h4 className='font-semibold text-gray-900'>{name}</h4>
          <p className='text-sm text-gray-600'>{location}</p>
          <p className='text-xs text-gray-500'>{date}</p>
        </div>
      </div>
    </div>
  );
}
