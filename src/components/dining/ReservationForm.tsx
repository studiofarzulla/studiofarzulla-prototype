'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoCallOutline,
  IoMailOutline,
} from 'react-icons/io5';

interface ReservationFormProps {
  restaurantName: string;
  onSubmit?: (formData: ReservationData) => void;
}

interface ReservationData {
  date: string;
  time: string;
  guests: number;
  name: string;
  phone: string;
  email: string;
  specialRequests?: string;
}

export default function ReservationForm({
  restaurantName,
  onSubmit,
}: ReservationFormProps) {
  const [formData, setFormData] = useState<ReservationData>({
    date: '',
    time: '',
    guests: 2,
    name: '',
    phone: '',
    email: '',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
  ];

  const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (onSubmit) {
        onSubmit(formData);
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Reservation error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    field: keyof ReservationData,
    value: string | number
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='bg-white rounded-2xl shadow-soft p-8 text-center'
      >
        <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
          <svg
            className='w-8 h-8 text-green-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 13l4 4L19 7'
            />
          </svg>
        </div>
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>
          Reservation Confirmed!
        </h3>
        <p className='text-gray-600 mb-6'>
          Your table at {restaurantName} has been reserved for {formData.guests}{' '}
          guests on {new Date(formData.date).toLocaleDateString()} at{' '}
          {formData.time}.
        </p>
        <p className='text-sm text-gray-500 mb-6'>
          A confirmation email has been sent to {formData.email}
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              date: '',
              time: '',
              guests: 2,
              name: '',
              phone: '',
              email: '',
              specialRequests: '',
            });
          }}
          className='bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200'
        >
          Make Another Reservation
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='bg-white rounded-2xl shadow-soft p-8'
    >
      <div className='text-center mb-8'>
        <h3 className='text-2xl font-bold text-gray-900 mb-2'>
          Reserve Your Table
        </h3>
        <p className='text-gray-600'>
          Book your dining experience at {restaurantName}
        </p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Date and Time Selection */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <IoCalendarOutline className='inline w-4 h-4 mr-2' />
              Preferred Date
            </label>
            <input
              type='date'
              min={today}
              value={formData.date}
              onChange={e => handleInputChange('date', e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <IoTimeOutline className='inline w-4 h-4 mr-2' />
              Preferred Time
            </label>
            <select
              value={formData.time}
              onChange={e => handleInputChange('time', e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200'
              required
            >
              <option value=''>Select Time</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Number of Guests */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            <IoPeopleOutline className='inline w-4 h-4 mr-2' />
            Number of Guests
          </label>
          <select
            value={formData.guests}
            onChange={e =>
              handleInputChange('guests', parseInt(e.target.value))
            }
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200'
          >
            {guestOptions.map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>

        {/* Contact Information */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <IoPersonOutline className='inline w-4 h-4 mr-2' />
              Full Name
            </label>
            <input
              type='text'
              value={formData.name}
              onChange={e => handleInputChange('name', e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200'
              placeholder='Your full name'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <IoCallOutline className='inline w-4 h-4 mr-2' />
              Phone Number
            </label>
            <input
              type='tel'
              value={formData.phone}
              onChange={e => handleInputChange('phone', e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200'
              placeholder='+994 xx xxx xxxx'
              required
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            <IoMailOutline className='inline w-4 h-4 mr-2' />
            Email Address
          </label>
          <input
            type='email'
            value={formData.email}
            onChange={e => handleInputChange('email', e.target.value)}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200'
            placeholder='your@email.com'
            required
          />
        </div>

        {/* Special Requests */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Special Requests (Optional)
          </label>
          <textarea
            value={formData.specialRequests}
            onChange={e => handleInputChange('specialRequests', e.target.value)}
            rows={3}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none'
            placeholder='Dietary restrictions, special occasions, seating preferences...'
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100'
        >
          {isSubmitting ? (
            <span className='flex items-center justify-center'>
              <svg
                className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                />
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
              </svg>
              Processing Reservation...
            </span>
          ) : (
            'Confirm Reservation'
          )}
        </button>
      </form>

      <div className='mt-6 text-center'>
        <p className='text-sm text-gray-500'>
          Need to make changes? Call us at{' '}
          <a
            href='tel:+994123456789'
            className='text-primary-600 hover:text-primary-700 font-medium'
          >
            +994 12 345 6789
          </a>
        </p>
      </div>
    </motion.div>
  );
}
