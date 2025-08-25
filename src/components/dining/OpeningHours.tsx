'use client';

import {
  IoTimeOutline,
  IoCalendarOutline,
  IoInformationCircleOutline,
} from 'react-icons/io5';

interface DayHours {
  day: string;
  breakfast?: string;
  lunch?: string;
  dinner?: string;
  closed?: boolean;
  note?: string;
}

interface OpeningHoursProps {
  title?: string;
  schedule: DayHours[];
  timezone?: string;
  specialHours?: {
    title: string;
    description: string;
    dates: string;
  }[];
  contact?: {
    phone: string;
    email: string;
  };
  reservationRequired?: boolean;
}

export default function OpeningHours({
  title = 'Opening Hours',
  schedule,
  timezone = 'Azerbaijan Time (AZT)',
  specialHours = [],
  contact,
  reservationRequired = false,
}: OpeningHoursProps) {
  const currentDay = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
  });

  return (
    <section
      className='bg-white py-16'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h2
              className='text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center'
            >
              <IoTimeOutline className='w-8 h-8 text-primary-500 mr-3' />
              {title}
            </h2>
            <p
              className='text-gray-600'
            >
              All times shown in {timezone}
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Schedule */}
            <div
              className='bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-soft p-8'
            >
              <h3 className='text-xl font-semibold text-gray-900 mb-6'>
                Weekly Schedule
              </h3>

              <div className='space-y-4'>
                {schedule.map((daySchedule, index) => {
                  const isToday = daySchedule.day === currentDay;

                  return (
                    <div
                      key={daySchedule.day}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        isToday
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className='flex items-center justify-between mb-2'>
                        <h4
                          className={`font-semibold ${
                            isToday ? 'text-primary-700' : 'text-gray-900'
                          }`}
                        >
                          {daySchedule.day}
                          {isToday && (
                            <span className='ml-2 px-2 py-1 bg-primary-500 text-white text-xs rounded-full'>
                              Today
                            </span>
                          )}
                        </h4>
                      </div>

                      {daySchedule.closed ? (
                        <p className='text-gray-500 italic'>Closed</p>
                      ) : (
                        <div className='space-y-1 text-sm'>
                          {daySchedule.breakfast && (
                            <div className='flex justify-between'>
                              <span className='text-gray-600'>Breakfast:</span>
                              <span className='font-medium'>
                                {daySchedule.breakfast}
                              </span>
                            </div>
                          )}
                          {daySchedule.lunch && (
                            <div className='flex justify-between'>
                              <span className='text-gray-600'>Lunch:</span>
                              <span className='font-medium'>
                                {daySchedule.lunch}
                              </span>
                            </div>
                          )}
                          {daySchedule.dinner && (
                            <div className='flex justify-between'>
                              <span className='text-gray-600'>Dinner:</span>
                              <span className='font-medium'>
                                {daySchedule.dinner}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {daySchedule.note && (
                        <p className='text-xs text-gray-500 mt-2 italic'>
                          {daySchedule.note}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Information */}
            <div
              className='space-y-6'
            >
              {/* Special Hours */}
              {specialHours.length > 0 && (
                <div className='bg-gradient-to-br from-accent-50 to-secondary-50 rounded-2xl shadow-soft p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center'>
                    <IoCalendarOutline className='w-5 h-5 text-accent-500 mr-2' />
                    Special Hours
                  </h3>
                  <div className='space-y-4'>
                    {specialHours.map((special, index) => (
                      <div
                        key={index}
                        className='border-l-4 border-accent-400 pl-4'
                      >
                        <h4 className='font-semibold text-gray-900'>
                          {special.title}
                        </h4>
                        <p className='text-gray-600 text-sm mb-1'>
                          {special.description}
                        </p>
                        <p className='text-accent-600 text-sm font-medium'>
                          {special.dates}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Notes */}
              <div className='bg-blue-50 rounded-2xl shadow-soft p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center'>
                  <IoInformationCircleOutline className='w-5 h-5 text-blue-500 mr-2' />
                  Important Information
                </h3>
                <div className='space-y-3 text-sm'>
                  {reservationRequired && (
                    <div className='flex items-start space-x-2'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0' />
                      <span className='text-gray-700'>
                        <strong>Reservations recommended</strong> for dinner
                        service, especially on weekends
                      </span>
                    </div>
                  )}
                  <div className='flex items-start space-x-2'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0' />
                    <span className='text-gray-700'>
                      Last orders are taken 30 minutes before closing time
                    </span>
                  </div>
                  <div className='flex items-start space-x-2'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0' />
                    <span className='text-gray-700'>
                      Kitchen hours may vary during special events and holidays
                    </span>
                  </div>
                  <div className='flex items-start space-x-2'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0' />
                    <span className='text-gray-700'>
                      Room service available 24/7 for hotel guests
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              {contact && (
                <div className='bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-soft p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                    Reservations & Inquiries
                  </h3>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center'>
                        <svg
                          className='w-5 h-5 text-white'
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
                      </div>
                      <div>
                        <p className='font-medium text-gray-900'>Phone</p>
                        <a
                          href={`tel:${contact.phone}`}
                          className='text-primary-600 hover:text-primary-700 transition-colors duration-200'
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className='flex items-center space-x-3'>
                      <div className='w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center'>
                        <svg
                          className='w-5 h-5 text-white'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                      </div>
                      <div>
                        <p className='font-medium text-gray-900'>Email</p>
                        <a
                          href={`mailto:${contact.email}`}
                          className='text-primary-600 hover:text-primary-700 transition-colors duration-200'
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
