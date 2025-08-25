'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  IoCalendarOutline,
  IoPeopleOutline,
  IoBedOutline,
  IoSearchOutline,
} from 'react-icons/io5';

export default function BookingWidget() {
  const t = useTranslations();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking:', { checkIn, checkOut, guests, rooms });
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getDayAfterTomorrowDate = () => {
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    return dayAfter.toISOString().split('T')[0];
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8'
    >
      <div className='text-center mb-6'>
        <h3 className='text-xl md:text-2xl font-semibold text-gray-900 mb-2'>
          Book Your Perfect Stay
        </h3>
        <p className='text-gray-600'>
          Experience luxury at The Crescent Beach Hotel
        </p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-4 md:space-y-0'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2'>
          {/* Check-in Date */}
          <div className='relative'>
            <label
              htmlFor='checkin'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Check-in
            </label>
            <div className='relative'>
              <input
                type='date'
                id='checkin'
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
                min={getTomorrowDate()}
                className='w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white'
                required
              />
              <IoCalendarOutline className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            </div>
          </div>

          {/* Check-out Date */}
          <div className='relative'>
            <label
              htmlFor='checkout'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Check-out
            </label>
            <div className='relative'>
              <input
                type='date'
                id='checkout'
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
                min={checkIn || getDayAfterTomorrowDate()}
                className='w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white'
                required
              />
              <IoCalendarOutline className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            </div>
          </div>

          {/* Guests */}
          <div className='relative'>
            <label
              htmlFor='guests'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Guests
            </label>
            <div className='relative'>
              <select
                id='guests'
                value={guests}
                onChange={e => setGuests(Number(e.target.value))}
                className='w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white appearance-none cursor-pointer'
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
              <IoPeopleOutline className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            </div>
          </div>

          {/* Rooms */}
          <div className='relative'>
            <label
              htmlFor='rooms'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Rooms
            </label>
            <div className='relative'>
              <select
                id='rooms'
                value={rooms}
                onChange={e => setRooms(Number(e.target.value))}
                className='w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white appearance-none cursor-pointer'
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Room' : 'Rooms'}
                  </option>
                ))}
              </select>
              <IoBedOutline className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className='mt-6'>
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl'
          >
            <IoSearchOutline className='w-5 h-5' />
            <span>Search Available Rooms</span>
          </button>
        </div>
      </form>

      {/* Quick Info */}
      <div className='mt-6 pt-6 border-t border-gray-200'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
          <div>
            <p className='text-2xl font-bold text-primary-600'>200+</p>
            <p className='text-sm text-gray-600'>Luxury Rooms</p>
          </div>
          <div>
            <p className='text-2xl font-bold text-primary-600'>9</p>
            <p className='text-sm text-gray-600'>Buildings</p>
          </div>
          <div>
            <p className='text-2xl font-bold text-primary-600'>2</p>
            <p className='text-sm text-gray-600'>Restaurants</p>
          </div>
          <div>
            <p className='text-2xl font-bold text-primary-600'>24/7</p>
            <p className='text-sm text-gray-600'>Concierge</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
