'use client';

import { SITE_CONFIG, CONTACT_INFO } from '@/constants';
import { HOTEL_FEATURES, HOTEL_POLICIES } from '@/constants/hotel-info';
import { 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  Plane,
  Clock,
  Star,
  Building
} from 'lucide-react';

export default function HotelHighlights() {
  const highlights = [
    {
      icon: Building,
      title: 'Established Excellence',
      value: `Since ${HOTEL_FEATURES.yearEstablished}`,
      description: 'Over 20 years of hospitality',
    },
    {
      icon: Users,
      title: 'Room Capacity',
      value: `${HOTEL_FEATURES.totalRooms} Rooms`,
      description: 'Steps away from the beach',
    },
    {
      icon: Star,
      title: 'Guest Rating',
      value: `${HOTEL_FEATURES.rating}/10`,
      description: `Based on ${HOTEL_FEATURES.reviewCount} verified reviews`,
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      value: CONTACT_INFO.distanceFromCenter,
      description: 'From Baku city center',
    },
    {
      icon: Plane,
      title: 'Airport Transfer',
      value: CONTACT_INFO.airportTransferTime,
      description: `${CONTACT_INFO.distanceFromAirport} from airport`,
    },
    {
      icon: Clock,
      title: 'Check-in/Check-out',
      value: `${HOTEL_POLICIES.checkIn} / ${HOTEL_POLICIES.checkOut}`,
      description: 'Flexible options available',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose {SITE_CONFIG.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {SITE_CONFIG.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Bar */}
        <div className="mt-12 bg-primary-600 text-white rounded-xl p-6">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4">
              <Award className="h-8 w-8" />
              <div>
                <p className="font-semibold text-lg">
                  First Beach Resort on the Caspian Sea
                </p>
                <p className="text-primary-100">
                  {HOTEL_FEATURES.beachLength} of private beach access
                </p>
              </div>
            </div>
            <a
              href={SITE_CONFIG.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 lg:mt-0 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Check Availability on Booking.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}