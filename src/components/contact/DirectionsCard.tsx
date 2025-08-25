'use client';

import {
  IoAirplane,
  IoCarSport,
  IoTrain,
  IoBus,
  IoTime,
  IoLocation,
  IoCall,
} from 'react-icons/io5';
import { cn } from '@/lib/utils';

interface DirectionStep {
  icon: React.ElementType;
  title: string;
  duration: string;
  distance: string;
  description: string;
  tips?: string[];
  cost?: string;
}

interface DirectionRoute {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  steps: DirectionStep[];
}

const DIRECTION_ROUTES: DirectionRoute[] = [
  {
    id: 'airport',
    title: 'From Baku Airport',
    subtitle: 'Heydar Aliyev International Airport',
    icon: IoAirplane,
    color: 'blue',
    steps: [
      {
        icon: IoAirplane,
        title: 'Exit Airport',
        duration: '5 min',
        distance: '0.5 km',
        description:
          'Exit the arrivals hall and head to the transportation area',
        tips: [
          'Free WiFi available throughout airport',
          'Currency exchange counters are available',
          'Look for hotel shuttle signs',
        ],
      },
      {
        icon: IoCarSport,
        title: 'Transportation Options',
        duration: '45 min',
        distance: '35 km',
        description: 'Choose from taxi, hotel shuttle, or rental car',
        cost: '25-40 AZN by taxi',
        tips: [
          'Hotel shuttle: Free (advance booking required)',
          'Official airport taxis: 35-40 AZN',
          'Uber/Bolt: 25-35 AZN',
          'Car rental available at airport',
        ],
      },
      {
        icon: IoLocation,
        title: 'Route to Hotel',
        duration: '40 min',
        distance: '34.5 km',
        description:
          'Take Heydar Aliyev Avenue towards city center, then coastal road',
        tips: [
          'Follow signs for "City Center"',
          'Turn onto coastal boulevard at Seaside Park',
          'Hotel will be on the right side',
        ],
      },
    ],
  },
  {
    id: 'city',
    title: 'From City Center',
    subtitle: 'Baku Downtown Area',
    icon: IoCarSport,
    color: 'green',
    steps: [
      {
        icon: IoLocation,
        title: 'Start from Fountain Square',
        duration: '2 min',
        distance: '0.2 km',
        description: 'Head east towards the Caspian Sea',
        tips: [
          'Fountain Square is the main reference point',
          'Ask locals for "Bulvar" (Boulevard) direction',
        ],
      },
      {
        icon: IoBus,
        title: 'Take Coastal Route',
        duration: '20 min',
        distance: '15 km',
        description: 'Follow Neftchilar Avenue to the coastal boulevard',
        cost: '0.30 AZN by bus, 15-20 AZN by taxi',
        tips: [
          'Bus #88 goes directly to beach area',
          'Metro to "Sahil" station, then bus',
          'Taxi ride takes 15-20 minutes',
        ],
      },
      {
        icon: IoLocation,
        title: 'Arrive at Hotel',
        duration: '3 min',
        distance: '2.8 km',
        description: 'Hotel entrance is clearly marked on the boulevard',
        tips: [
          'Look for the distinctive crescent logo',
          'Valet parking available',
          'Main entrance faces the sea',
        ],
      },
    ],
  },
  {
    id: 'train',
    title: 'From Railway Station',
    subtitle: 'Baku Central Railway Station',
    icon: IoTrain,
    color: 'purple',
    steps: [
      {
        icon: IoTrain,
        title: 'Exit Railway Station',
        duration: '5 min',
        distance: '0.3 km',
        description: 'Exit main terminal and head to transportation area',
        tips: [
          'Station has luggage storage facilities',
          'ATMs and currency exchange available',
        ],
      },
      {
        icon: IoBus,
        title: 'Metro Connection',
        duration: '15 min',
        distance: '8 km',
        description: 'Take metro from "28 May" to "Sahil" station',
        cost: '0.30 AZN metro ticket',
        tips: [
          'Metro runs every 3-5 minutes',
          'Signs available in Azerbaijani and English',
          'Keep ticket for exit validation',
        ],
      },
      {
        icon: IoCarSport,
        title: 'Final Stretch',
        duration: '10 min',
        distance: '12 km',
        description: 'Bus or taxi from Sahil metro to hotel',
        cost: '0.30 AZN bus, 10-15 AZN taxi',
        tips: [
          'Bus #88 or #125 to beach area',
          'Taxi stands available at metro exit',
          'Hotel shuttle available (call ahead)',
        ],
      },
    ],
  },
];

interface DirectionsCardProps {
  className?: string;
}

export default function DirectionsCard({ className }: DirectionsCardProps) {
  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-200',
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-200',
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-200',
      },
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || '';
  };

  return (
    <div className={cn('space-y-8', className)}>
      {DIRECTION_ROUTES.map((route, routeIndex) => (
        <div
          key={route.id}
          className='bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up'
          style={{
            animationDelay: `${routeIndex * 200}ms`
          }}
        >
          {/* Route Header */}
          <div
            className={cn(
              'px-6 py-4 border-b border-gray-100',
              getColorClasses(route.color, 'bg')
            )}
          >
            <div className='flex items-center gap-3'>
              <div
                className={cn(
                  'w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-sm',
                  getColorClasses(route.color, 'text')
                )}
              >
                <route.icon className='w-6 h-6' />
              </div>
              <div>
                <h3
                  className={cn(
                    'text-xl font-bold',
                    getColorClasses(route.color, 'text')
                  )}
                >
                  {route.title}
                </h3>
                <p
                  className={cn(
                    'text-sm opacity-80',
                    getColorClasses(route.color, 'text')
                  )}
                >
                  {route.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Route Steps */}
          <div className='p-6'>
            <div className='space-y-6'>
              {route.steps.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className='relative animate-slide-in-left'
                  style={{
                    animationDelay: `${(routeIndex * 200) + (stepIndex * 100)}ms`
                  }}
                >
                  {/* Connection Line */}
                  {stepIndex < route.steps.length - 1 && (
                    <div
                      className={cn(
                        'absolute left-6 top-12 w-0.5 h-16 -z-10',
                        getColorClasses(route.color, 'bg')
                      )}
                    />
                  )}

                  <div className='flex gap-4'>
                    {/* Step Icon */}
                    <div
                      className={cn(
                        'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
                        getColorClasses(route.color, 'bg'),
                        getColorClasses(route.color, 'text')
                      )}
                    >
                      <step.icon className='w-6 h-6' />
                    </div>

                    {/* Step Content */}
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        <h4 className='text-lg font-semibold text-gray-900'>
                          {step.title}
                        </h4>
                        <div className='flex items-center gap-2'>
                          <span className='flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm'>
                            <IoTime className='w-3 h-3' />
                            {step.duration}
                          </span>
                          <span className='px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm'>
                            {step.distance}
                          </span>
                          {step.cost && (
                            <span
                              className={cn(
                                'px-2 py-1 rounded-full text-sm',
                                getColorClasses(route.color, 'bg'),
                                getColorClasses(route.color, 'text')
                              )}
                            >
                              {step.cost}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className='text-gray-600 mb-3'>{step.description}</p>

                      {/* Tips */}
                      {step.tips && step.tips.length > 0 && (
                        <div className='bg-gray-50 rounded-lg p-3'>
                          <h5 className='text-sm font-medium text-gray-700 mb-2'>
                            💡 Tips:
                          </h5>
                          <ul className='text-sm text-gray-600 space-y-1'>
                            {step.tips.map((tip, tipIndex) => (
                              <li key={tipIndex}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Route Footer */}
          <div className='px-6 py-4 bg-gray-50 border-t border-gray-100'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2 text-sm text-gray-600'>
                <IoLocation className='w-4 h-4' />
                <span>Need help with directions?</span>
              </div>
              <button className='flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium'>
                <IoCall className='w-4 h-4' />
                Call Concierge
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Additional Information */}
      <div className='bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-6 text-white'>
        <h3 className='text-2xl font-bold mb-4'>Transportation Services</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2'>🚐 Hotel Shuttle</h4>
            <p className='text-sm text-white/90'>
              Complimentary airport shuttle service available with advance
              reservation (24 hours notice required).
            </p>
          </div>
          <div>
            <h4 className='font-semibold mb-2'>🚗 Valet Parking</h4>
            <p className='text-sm text-white/90'>
              Complimentary valet parking service for all hotel guests.
              Self-parking also available.
            </p>
          </div>
          <div>
            <h4 className='font-semibold mb-2'>🚕 Taxi Service</h4>
            <p className='text-sm text-white/90'>
              Our concierge can arrange reliable taxi services and provide
              estimated fares for popular destinations.
            </p>
          </div>
          <div>
            <h4 className='font-semibold mb-2'>🚌 Public Transport</h4>
            <p className='text-sm text-white/90'>
              Baku has an excellent metro system and bus network. Our staff can
              provide routes and schedules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
