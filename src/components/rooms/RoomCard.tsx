'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from '@/lib/LocaleProvider';
import {
  IoPeopleOutline,
  IoResizeOutline,
  IoStarOutline,
  IoArrowForward,
  IoWifiOutline,
  IoCarOutline,
  IoRestaurantOutline,
} from 'react-icons/io5';

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  capacity: number;
  size: number;
  basePrice: number;
  images: string[];
  features: string[];
  viewType: 'sea' | 'garden' | 'pool' | 'city';
  roomType: 'standard' | 'deluxe' | 'suite' | 'family' | 'corporate';
  building?: string;
  connectingAvailable?: boolean;
  index?: number;
}

export default function RoomCard({
  id,
  name,
  description,
  capacity,
  size,
  basePrice,
  images,
  features,
  viewType,
  roomType,
  building,
  connectingAvailable,
  index = 0,
}: RoomCardProps) {
  const t = useTranslations('rooms');
  const tCommon = useTranslations('common');

  const getViewIcon = () => {
    switch (viewType) {
      case 'sea':
        return '🌊';
      case 'garden':
        return '🌿';
      case 'pool':
        return '🏊‍♂️';
      default:
        return '🏙️';
    }
  };

  const getRoomTypeColor = () => {
    switch (roomType) {
      case 'standard':
        return 'bg-blue-100 text-blue-800';
      case 'deluxe':
        return 'bg-purple-100 text-purple-800';
      case 'suite':
        return 'bg-amber-100 text-amber-800';
      case 'family':
        return 'bg-green-100 text-green-800';
      case 'corporate':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div
      className='group bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden animate-fade-in-up'
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Image Section */}
      <div className='relative h-64 overflow-hidden'>
        <div className='relative w-full h-full'>
          <Image
            src={images[0] || '/images/rooms/placeholder.jpg'}
            alt={name}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
        </div>

        {/* Room Type Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getRoomTypeColor()}`}
        >
          {t(`filter_${roomType}`)}
        </div>

        {/* Price Badge */}
        <div className='absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-soft'>
          <div className='text-sm font-semibold text-primary-600'>
            ${basePrice}
            <span className='text-xs text-gray-500'>/{t('per_night')}</span>
          </div>
        </div>

        {/* View Type Badge */}
        <div className='absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm'>
          <span className='mr-1'>{getViewIcon()}</span>
          {t(`${viewType}_view`)}
        </div>

        {/* Connecting Rooms Badge */}
        {connectingAvailable && (
          <div className='absolute bottom-4 right-4 bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
            {t('connecting_rooms')}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className='p-6'>
        {/* Header */}
        <div className='flex items-start justify-between mb-3'>
          <div>
            <h3 className='text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 line-clamp-1'>
              {name}
            </h3>
            {building && (
              <p className='text-sm text-gray-500 mt-1'>{building}</p>
            )}
          </div>
          <div className='flex text-yellow-400'>
            {[...Array(5)].map((_, i) => (
              <IoStarOutline key={i} className='w-4 h-4 fill-current' />
            ))}
          </div>
        </div>

        {/* Description */}
        <p className='text-gray-600 text-sm mb-4 line-clamp-2'>{description}</p>

        {/* Room Details */}
        <div className='flex items-center space-x-4 mb-4 text-gray-600'>
          <div className='flex items-center space-x-1'>
            <IoPeopleOutline className='w-4 h-4' />
            <span className='text-sm'>
              {capacity} {capacity === 1 ? tCommon('guest') : tCommon('guests')}
            </span>
          </div>
          <div className='flex items-center space-x-1'>
            <IoResizeOutline className='w-4 h-4' />
            <span className='text-sm'>{size}m²</span>
          </div>
        </div>

        {/* Key Features */}
        <div className='mb-6'>
          <div className='flex flex-wrap gap-2'>
            {features.slice(0, 3).map((feature, i) => (
              <span
                key={i}
                className='flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'
              >
                {feature === 'Free WiFi' && (
                  <IoWifiOutline className='w-3 h-3' />
                )}
                {feature === 'Parking' && <IoCarOutline className='w-3 h-3' />}
                {feature === 'Room service' && (
                  <IoRestaurantOutline className='w-3 h-3' />
                )}
                <span>{feature}</span>
              </span>
            ))}
            {features.length > 3 && (
              <span className='px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded-full font-medium'>
                +{features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className='flex space-x-3'>
          <Link
            href={`/rooms/${id}`}
            className='flex-1 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center'
          >
            {tCommon('view_details')}
          </Link>
          <Link
            href={`/rooms/${id}?book=true`}
            className='flex items-center justify-center px-4 py-3 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200 group'
          >
            <IoArrowForward className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' />
          </Link>
        </div>

        {/* Special Offers Indicator */}
        {(roomType === 'corporate' || connectingAvailable) && (
          <div className='mt-4 pt-4 border-t border-gray-100'>
            <div className='flex items-center justify-between text-xs'>
              {roomType === 'corporate' && (
                <span className='text-accent-600 font-medium'>
                  {t('corporate_rental')}
                </span>
              )}
              {connectingAvailable && (
                <span className='text-green-600 font-medium'>
                  {t('family')} ✓
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
