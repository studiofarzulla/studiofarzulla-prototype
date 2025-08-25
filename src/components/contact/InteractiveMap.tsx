'use client';

import { useState } from 'react';
import { IoLocation, IoNavigate, IoCar, IoTime, IoCall } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { CONTACT_INFO } from '@/constants';

interface MapProps {
  className?: string;
}

export default function InteractiveMap({ className }: MapProps) {
  const [activeTab, setActiveTab] = useState<'map' | 'directions'>('map');

  // Hotel coordinates (example location in Baku)
  const hotelLocation = {
    lat: CONTACT_INFO.address.coordinates.lat,
    lng: CONTACT_INFO.address.coordinates.lng,
    address: `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.city}, ${CONTACT_INFO.address.country}`,
  };

  const handleDirections = (type: 'google' | 'apple') => {
    const { lat, lng } = hotelLocation;
    const address = encodeURIComponent(hotelLocation.address);

    if (type === 'google') {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
        '_blank'
      );
    } else {
      window.open(`https://maps.apple.com/?daddr=${address}`, '_blank');
    }
  };

  const transportOptions = [
    {
      icon: IoCar,
      title: 'From Baku Airport',
      time: '45 minutes',
      distance: '35 km',
      description:
        'Take the highway towards city center, then follow coastal road',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: IoTime,
      title: 'From City Center',
      time: '25 minutes',
      distance: '18 km',
      description: 'Head east along the coastal boulevard',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: IoNavigate,
      title: 'From Train Station',
      time: '30 minutes',
      distance: '22 km',
      description: 'Take metro to center, then taxi or bus',
      color: 'bg-purple-100 text-purple-700',
    },
  ];

  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-lg overflow-hidden',
        className
      )}
    >
      {/* Header with Tabs */}
      <div className='border-b border-gray-200'>
        <div className='p-6 pb-0'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Find Us</h2>
          <div className='flex gap-1 bg-gray-100 p-1 rounded-lg'>
            <button
              onClick={() => setActiveTab('map')}
              className={cn(
                'flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors',
                activeTab === 'map'
                  ? 'bg-white text-primary-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              Interactive Map
            </button>
            <button
              onClick={() => setActiveTab('directions')}
              className={cn(
                'flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors',
                activeTab === 'directions'
                  ? 'bg-white text-primary-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              Directions
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        {activeTab === 'map' ? (
          <div
            key='map'
            className='space-y-6 animate-slide-in-left'
          >
            {/* Map Placeholder */}
            <div className='relative aspect-video bg-gray-100 rounded-lg overflow-hidden'>
              {/* This would be replaced with actual map integration */}
              <div className='absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center'>
                <div className='text-center'>
                  <IoLocation className='w-16 h-16 text-primary-600 mx-auto mb-4' />
                  <p className='text-primary-800 font-semibold mb-2'>
                    Interactive Map
                  </p>
                  <p className='text-sm text-primary-600'>
                    Google Maps integration would go here
                  </p>
                </div>
              </div>

              {/* Map Controls */}
              <div className='absolute top-4 right-4 flex flex-col gap-2'>
                <button
                  onClick={() => handleDirections('google')}
                  className='px-3 py-2 bg-white shadow-md rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors'
                >
                  Open in Google Maps
                </button>
                <button
                  onClick={() => handleDirections('apple')}
                  className='px-3 py-2 bg-white shadow-md rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors'
                >
                  Open in Apple Maps
                </button>
              </div>

              {/* Location Marker */}
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='relative'>
                  <div className='w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse' />
                  <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-500' />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className='bg-gray-50 rounded-lg p-4'>
              <div className='flex items-start gap-3'>
                <IoLocation className='w-5 h-5 text-primary-600 mt-1 flex-shrink-0' />
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1'>
                    Hotel Address
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    {hotelLocation.address}
                  </p>
                  <div className='mt-3 flex flex-wrap gap-2'>
                    <span className='px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full'>
                      GPS: {hotelLocation.lat}, {hotelLocation.lng}
                    </span>
                    <span className='px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full'>
                      Beachfront Location
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className='grid grid-cols-2 gap-3'>
              <button
                onClick={() => handleDirections('google')}
                className='flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium'
              >
                <IoNavigate className='w-5 h-5' />
                Get Directions
              </button>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className='flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium'
              >
                <IoCall className='w-5 h-5' />
                Call Hotel
              </a>
            </div>
          </div>
        ) : (
          <div
            key='directions'
            className='space-y-6 animate-slide-in-right'
          >
            {/* Transportation Options */}
            <div className='space-y-4'>
              {transportOptions.map((option, index) => (
                <div
                  key={option.title}
                  className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors animate-fade-in-up'
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div
                    className={cn(
                      'w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0',
                      option.color
                    )}
                  >
                    <option.icon className='w-6 h-6' />
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='font-semibold text-gray-900'>
                        {option.title}
                      </h3>
                      <span className='px-2 py-1 bg-white text-gray-600 text-sm rounded-full border'>
                        {option.time}
                      </span>
                      <span className='px-2 py-1 bg-white text-gray-600 text-sm rounded-full border'>
                        {option.distance}
                      </span>
                    </div>
                    <p className='text-gray-600 text-sm'>
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
              <h3 className='font-semibold text-blue-900 mb-2'>
                Transportation Services
              </h3>
              <ul className='text-sm text-blue-800 space-y-1'>
                <li>
                  • Free airport shuttle service (advance booking required)
                </li>
                <li>• Complimentary parking for hotel guests</li>
                <li>• Taxi and ride-sharing services available</li>
                <li>• Car rental services can be arranged</li>
              </ul>
            </div>

            {/* Landmarks */}
            <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
              <h3 className='font-semibold text-green-900 mb-3'>
                Nearby Landmarks
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-green-800'>
                <div>• Baku Boulevard - 5 min walk</div>
                <div>• Flame Towers - 15 min drive</div>
                <div>• Old City (Icherisheher) - 20 min drive</div>
                <div>• Heydar Aliyev Center - 25 min drive</div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <h3 className='font-semibold text-red-900 mb-2'>
                Need Help Finding Us?
              </h3>
              <p className='text-sm text-red-800 mb-3'>
                Our concierge team is available 24/7 to assist with directions
                and transportation.
              </p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className='inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm'
              >
                <IoCall className='w-4 h-4' />
                Call Concierge: {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
