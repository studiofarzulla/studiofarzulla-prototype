'use client';

import { useTranslations } from 'next-intl';
import {
  IoWifiOutline,
  IoSnowOutline,
  IoTvOutline,
  IoShieldCheckmarkOutline,
  IoRestaurantOutline,
  IoCarOutline,
  IoCafeOutline,
  IoBusinessOutline,
  IoFitnessOutline,
  IoWaterOutline,
  IoFlowerOutline,
  IoEyeOutline,
  IoBedOutline,
  IoHomeOutline,
  IoCallOutline,
  IoSparklesOutline,
  IoCheckmarkCircleOutline,
  IoStarOutline,
} from 'react-icons/io5';

interface RoomAmenitiesProps {
  amenities: string[];
  roomType: 'standard' | 'deluxe' | 'suite' | 'family' | 'corporate';
  className?: string;
}

export default function RoomAmenities({
  amenities,
  roomType,
  className = '',
}: RoomAmenitiesProps) {
  const t = useTranslations('rooms');

  const getAmenityIcon = (amenity: string) => {
    const lowerAmenity = amenity.toLowerCase();

    if (lowerAmenity.includes('wifi'))
      return <IoWifiOutline className='w-5 h-5' />;
    if (
      lowerAmenity.includes('air conditioning') ||
      lowerAmenity.includes('ac')
    )
      return <IoSnowOutline className='w-5 h-5' />;
    if (lowerAmenity.includes('tv') || lowerAmenity.includes('television'))
      return <IoTvOutline className='w-5 h-5' />;
    if (lowerAmenity.includes('safe'))
      return <IoShieldCheckmarkOutline className='w-5 h-5' />;
    if (
      lowerAmenity.includes('room service') ||
      lowerAmenity.includes('service')
    )
      return <IoRestaurantOutline className='w-5 h-5' />;
    if (lowerAmenity.includes('parking'))
      return <IoCarOutline className='w-5 h-5' />;
    if (lowerAmenity.includes('minibar') || lowerAmenity.includes('bar'))
      return <IoCafeOutline className='w-5 h-5' />;
    if (lowerAmenity.includes('business') || lowerAmenity.includes('work'))
      return <IoBusinessOutline className='w-5 h-5' />;
    if (lowerAmenity.includes('gym') || lowerAmenity.includes('fitness'))
      return <IoFitnessOutline className='w-5 h-5' />;
    if (lowerAmenity.includes('bathroom') || lowerAmenity.includes('shower'))
      return <IoWaterOutline className='w-5 h-5' />;
    if (lowerAmenity.includes('balcony') || lowerAmenity.includes('terrace'))
      return <IoFlowerOutline className='w-5 h-5' />;
    if (
      lowerAmenity.includes('view') ||
      lowerAmenity.includes('sea') ||
      lowerAmenity.includes('garden')
    )
      return <IoEyeOutline className='w-5 h-5' />;
    if (
      lowerAmenity.includes('bed') ||
      lowerAmenity.includes('king') ||
      lowerAmenity.includes('queen')
    )
      return <IoBedOutline className='w-5 h-5' />;
    if (lowerAmenity.includes('living') || lowerAmenity.includes('sitting'))
      return <IoHomeOutline className='w-5 h-5' />;
    if (lowerAmenity.includes('phone') || lowerAmenity.includes('telephone'))
      return <IoCallOutline className='w-5 h-5' />;
    if (
      lowerAmenity.includes('cleaning') ||
      lowerAmenity.includes('housekeeping')
    )
      return <IoSparklesOutline className='w-5 h-5' />;
    if (lowerAmenity.includes('premium') || lowerAmenity.includes('luxury'))
      return <IoStarOutline className='w-5 h-5' />;

    return <IoCheckmarkCircleOutline className='w-5 h-5' />;
  };

  const getAmenityCategory = (amenity: string) => {
    const lowerAmenity = amenity.toLowerCase();

    if (
      lowerAmenity.includes('wifi') ||
      lowerAmenity.includes('tv') ||
      lowerAmenity.includes('smart')
    )
      return 'technology';
    if (
      lowerAmenity.includes('bed') ||
      lowerAmenity.includes('king') ||
      lowerAmenity.includes('queen') ||
      lowerAmenity.includes('bathroom')
    )
      return 'comfort';
    if (
      lowerAmenity.includes('view') ||
      lowerAmenity.includes('balcony') ||
      lowerAmenity.includes('terrace')
    )
      return 'location';
    if (
      lowerAmenity.includes('service') ||
      lowerAmenity.includes('concierge') ||
      lowerAmenity.includes('butler')
    )
      return 'service';
    if (
      lowerAmenity.includes('business') ||
      lowerAmenity.includes('work') ||
      lowerAmenity.includes('meeting')
    )
      return 'business';
    if (lowerAmenity.includes('safe') || lowerAmenity.includes('security'))
      return 'safety';

    return 'general';
  };

  const categorizedAmenities = amenities.reduce(
    (acc, amenity) => {
      const category = getAmenityCategory(amenity);
      if (!acc[category]) acc[category] = [];
      acc[category].push(amenity);
      return acc;
    },
    {} as Record<string, string[]>
  );

  const categoryTitles = {
    technology: 'Technology & Entertainment',
    comfort: 'Comfort & Furnishing',
    location: 'Views & Outdoor Spaces',
    service: 'Guest Services',
    business: 'Business Facilities',
    safety: 'Safety & Security',
    general: 'Additional Amenities',
  };

  const categoryColors = {
    technology: 'bg-blue-50 border-blue-200',
    comfort: 'bg-purple-50 border-purple-200',
    location: 'bg-green-50 border-green-200',
    service: 'bg-amber-50 border-amber-200',
    business: 'bg-gray-50 border-gray-200',
    safety: 'bg-red-50 border-red-200',
    general: 'bg-primary-50 border-primary-200',
  };

  const getRoomTypeFeatures = () => {
    switch (roomType) {
      case 'suite':
        return [
          'Separate living area',
          'Premium location',
          'Concierge service',
          'Room upgrade priority',
        ];
      case 'deluxe':
        return [
          'Enhanced amenities',
          'Better views',
          'Premium bathroom',
          'Welcome amenities',
        ];
      case 'family':
        return [
          'Family-friendly layout',
          'Children amenities',
          'Extra space',
          'Connecting room options',
        ];
      case 'corporate':
        return [
          'Meeting facilities',
          'Business services',
          'Group bookings',
          'Extended stay options',
        ];
      default:
        return [
          'Modern amenities',
          'Comfortable stay',
          'Daily housekeeping',
          'Quality furnishing',
        ];
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Room Type Highlights */}
      <div className='bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100'>
        <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center'>
          <IoStarOutline className='w-5 h-5 text-primary-600 mr-2' />
          Room Highlights
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          {getRoomTypeFeatures().map((feature, index) => (
            <div key={index} className='flex items-center space-x-3'>
              <div className='w-2 h-2 bg-primary-600 rounded-full'></div>
              <span className='text-sm text-gray-700'>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Amenities */}
      {Object.entries(categorizedAmenities).map(([category, amenitiesList]) => (
        <div
          key={category}
          className={`rounded-xl p-6 border ${categoryColors[category as keyof typeof categoryColors] || categoryColors.general}`}
        >
          <h4 className='text-md font-semibold text-gray-900 mb-4'>
            {categoryTitles[category as keyof typeof categoryTitles] ||
              'Amenities'}
          </h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            {amenitiesList.map((amenity, index) => (
              <div
                key={index}
                className='flex items-center space-x-3 p-2 bg-white rounded-lg'
              >
                <div className='text-primary-600 flex-shrink-0'>
                  {getAmenityIcon(amenity)}
                </div>
                <span className='text-sm text-gray-700'>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Special Services Note */}
      {(roomType === 'suite' || roomType === 'corporate') && (
        <div className='bg-accent-50 border border-accent-200 rounded-xl p-6'>
          <h4 className='text-md font-semibold text-accent-800 mb-3 flex items-center'>
            <IoStarOutline className='w-5 h-5 mr-2' />
            {roomType === 'suite'
              ? 'Exclusive Suite Services'
              : 'Corporate Services'}
          </h4>
          <div className='text-sm text-accent-700 space-y-2'>
            {roomType === 'suite' ? (
              <>
                <p>• Priority check-in/check-out service</p>
                <p>• Complimentary breakfast and evening cocktails</p>
                <p>• Personal concierge assistance</p>
                <p>• Access to exclusive facilities</p>
              </>
            ) : (
              <>
                <p>• Dedicated account management</p>
                <p>• Flexible booking and cancellation policies</p>
                <p>• Group dining arrangements</p>
                <p>• Transportation coordination</p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Accessibility Features */}
      <div className='border border-gray-200 rounded-xl p-6'>
        <h4 className='text-md font-semibold text-gray-900 mb-4 flex items-center'>
          <IoCheckmarkCircleOutline className='w-5 h-5 text-green-600 mr-2' />
          Accessibility & Standards
        </h4>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600'>
          <div className='space-y-2'>
            <p>✓ Non-smoking environment</p>
            <p>✓ Fire safety compliant</p>
            <p>✓ Emergency communication systems</p>
          </div>
          <div className='space-y-2'>
            <p>✓ 24-hour maintenance support</p>
            <p>✓ Multilingual staff assistance</p>
            <p>✓ Pet-friendly options available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
