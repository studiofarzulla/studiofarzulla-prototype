'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoLocationOutline,
  IoPeopleOutline,
  IoTicketOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';

export interface SpecialEvent {
  id: string;
  title: string;
  description: string;
  type: 'culinary' | 'entertainment' | 'seasonal' | 'corporate' | 'private';
  date: string;
  time: string;
  duration?: string;
  location: string;
  capacity?: number;
  price?: string;
  image: string;
  features: string[];
  booking_required: boolean;
  booking_deadline?: string;
  recurring?: boolean;
}

interface SpecialEventsProps {
  title?: string;
  subtitle?: string;
  events: SpecialEvent[];
  showAll?: boolean;
}

export default function SpecialEvents({
  title = 'Special Events & Experiences',
  subtitle = 'Join us for unforgettable culinary and entertainment experiences',
  events,
  showAll = false,
}: SpecialEventsProps) {
  const displayEvents = showAll ? events : events.slice(0, 3);

  const eventTypeColors = {
    culinary: 'from-orange-500 to-red-500',
    entertainment: 'from-purple-500 to-pink-500',
    seasonal: 'from-green-500 to-teal-500',
    corporate: 'from-blue-500 to-indigo-500',
    private: 'from-gray-500 to-gray-700',
  };

  const eventTypeLabels = {
    culinary: 'Culinary Experience',
    entertainment: 'Entertainment',
    seasonal: 'Seasonal Event',
    corporate: 'Corporate Event',
    private: 'Private Dining',
  };

  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-white'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            {title}
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>{subtitle}</p>
        </motion.div>

        {/* Events Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12'>
          {displayEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className='group bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden'
            >
              {/* Event Image */}
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />

                {/* Event Type Badge */}
                <div className='absolute top-4 left-4'>
                  <span
                    className={`px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${eventTypeColors[event.type]}`}
                  >
                    {eventTypeLabels[event.type]}
                  </span>
                </div>

                {/* Recurring Badge */}
                {event.recurring && (
                  <div className='absolute top-4 right-4'>
                    <span className='px-2 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full'>
                      Recurring
                    </span>
                  </div>
                )}

                {/* Date and Time Overlay */}
                <div className='absolute bottom-4 left-4 right-4'>
                  <div className='bg-white/90 backdrop-blur-sm rounded-lg p-3'>
                    <div className='flex items-center justify-between text-sm'>
                      <div className='flex items-center space-x-2 text-gray-700'>
                        <IoCalendarOutline className='w-4 h-4' />
                        <span className='font-medium'>{event.date}</span>
                      </div>
                      <div className='flex items-center space-x-2 text-gray-700'>
                        <IoTimeOutline className='w-4 h-4' />
                        <span className='font-medium'>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300'>
                  {event.title}
                </h3>

                <p className='text-gray-600 mb-4 line-clamp-3 leading-relaxed'>
                  {event.description}
                </p>

                {/* Event Details */}
                <div className='space-y-2 mb-4 text-sm text-gray-600'>
                  <div className='flex items-center space-x-2'>
                    <IoLocationOutline className='w-4 h-4 text-primary-500' />
                    <span>{event.location}</span>
                  </div>

                  {event.duration && (
                    <div className='flex items-center space-x-2'>
                      <IoTimeOutline className='w-4 h-4 text-primary-500' />
                      <span>Duration: {event.duration}</span>
                    </div>
                  )}

                  {event.capacity && (
                    <div className='flex items-center space-x-2'>
                      <IoPeopleOutline className='w-4 h-4 text-primary-500' />
                      <span>Max {event.capacity} guests</span>
                    </div>
                  )}

                  {event.price && (
                    <div className='flex items-center space-x-2'>
                      <IoTicketOutline className='w-4 h-4 text-primary-500' />
                      <span className='font-semibold text-primary-600'>
                        {event.price}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className='mb-6'>
                  <div className='flex flex-wrap gap-2'>
                    {event.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className='px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full border border-primary-200'
                      >
                        {feature}
                      </span>
                    ))}
                    {event.features.length > 3 && (
                      <span className='px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200'>
                        +{event.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Booking Information */}
                {event.booking_required && (
                  <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4'>
                    <p className='text-yellow-800 text-sm font-medium flex items-center'>
                      <IoCalendarOutline className='w-4 h-4 mr-2' />
                      Advance booking required
                    </p>
                    {event.booking_deadline && (
                      <p className='text-yellow-700 text-xs mt-1'>
                        Book by: {event.booking_deadline}
                      </p>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className='flex space-x-3'>
                  <button className='flex-1 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-sm'>
                    {event.booking_required ? 'Book Now' : 'Learn More'}
                  </button>
                  <button className='px-4 py-3 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200'>
                    <IoArrowForwardOutline className='w-4 h-4' />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {!showAll && events.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center'
          >
            <Link
              href='/dining'
              className='inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105'
            >
              <span>View All Events</span>
              <IoArrowForwardOutline className='w-5 h-5' />
            </Link>
          </motion.div>
        )}

        {/* Private Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl shadow-soft overflow-hidden'
        >
          <div className='p-8 text-white text-center'>
            <h3 className='text-2xl font-bold mb-4'>
              Planning a Private Event?
            </h3>
            <p className='text-primary-100 mb-6 max-w-2xl mx-auto'>
              From intimate dinner parties to corporate celebrations, our expert
              team will create a memorable experience tailored to your specific
              needs and preferences.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <button className='bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200'>
                Request Consultation
              </button>
              <a
                href='tel:+994123456789'
                className='flex items-center space-x-2 text-white hover:text-primary-200 transition-colors duration-200'
              >
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <span>Call +994 12 345 6789</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
