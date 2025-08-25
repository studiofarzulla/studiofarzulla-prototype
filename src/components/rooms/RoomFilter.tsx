'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/LocaleProvider';
import {
  IoFunnelOutline,
  IoCloseOutline,
  IoPeopleOutline,
  IoResizeOutline,
  IoEyeOutline,
  IoBusinessOutline,
} from 'react-icons/io5';

interface FilterOptions {
  roomType: string;
  building: string;
  viewType: string;
  capacity: number | null;
  priceRange: [number, number];
  amenities: string[];
}

interface RoomFilterProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export default function RoomFilter({
  filters,
  onFiltersChange,
}: RoomFilterProps) {
  const t = useTranslations('rooms');
  const [isExpanded, setIsExpanded] = useState(false);

  const roomTypes = [
    { value: 'all', label: t('filter_all') },
    { value: 'standard', label: t('filter_standard') },
    { value: 'deluxe', label: t('filter_deluxe') },
    { value: 'suite', label: t('filter_suite') },
    { value: 'family', label: t('filter_family') },
    { value: 'corporate', label: t('filter_corporate') },
  ];

  const buildings = [
    { value: 'all', label: t('building_all') },
    { value: 'building-a', label: t('building_a') },
    { value: 'building-b', label: t('building_b') },
    { value: 'building-c', label: t('building_c') },
    { value: 'building-d', label: t('building_d') },
    { value: 'building-e', label: t('building_e') },
    { value: 'building-f', label: t('building_f') },
    { value: 'building-g', label: t('building_g') },
    { value: 'building-h', label: t('building_h') },
    { value: 'building-i', label: t('building_i') },
    { value: 'corporate', label: t('corporate_building') },
  ];

  const viewTypes = [
    { value: 'all', label: 'All Views' },
    { value: 'sea', label: t('sea_view') },
    { value: 'garden', label: t('garden_view') },
    { value: 'pool', label: t('pool_view') },
    { value: 'city', label: 'City View' },
  ];

  const capacityOptions = [
    { value: null, label: 'Any' },
    { value: 1, label: '1 Guest' },
    { value: 2, label: '2 Guests' },
    { value: 4, label: '4+ Guests' },
    { value: 6, label: '6+ Guests' },
  ];

  const amenityOptions = [
    'Free WiFi',
    'Sea View',
    'Balcony',
    'Minibar',
    'Room Service',
    'Air Conditioning',
    'Safe',
    'Smart TV',
    'Connecting Rooms',
    'Business Facilities',
  ];

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      roomType: 'all',
      building: 'all',
      viewType: 'all',
      capacity: null,
      priceRange: [50, 1000],
      amenities: [],
    });
  };

  const activeFiltersCount = [
    filters.roomType !== 'all',
    filters.building !== 'all',
    filters.viewType !== 'all',
    filters.capacity !== null,
    filters.priceRange[0] > 50 || filters.priceRange[1] < 1000,
    filters.amenities.length > 0,
  ].filter(Boolean).length;

  return (
    <div className='bg-white rounded-2xl shadow-soft p-6 mb-8'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center space-x-3'>
          <IoFunnelOutline className='w-5 h-5 text-primary-600' />
          <h3 className='text-lg font-semibold text-gray-900'>Filter Rooms</h3>
          {activeFiltersCount > 0 && (
            <span className='bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full'>
              {activeFiltersCount}
            </span>
          )}
        </div>
        <div className='flex items-center space-x-2'>
          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className='text-sm text-gray-500 hover:text-gray-700 transition-colors'
            >
              Clear All
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='lg:hidden bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors'
          >
            {isExpanded ? (
              <IoCloseOutline className='w-4 h-4' />
            ) : (
              <IoFunnelOutline className='w-4 h-4' />
            )}
          </button>
        </div>
      </div>

      {/* Quick Filters */}
      <div className='flex flex-wrap gap-2 mb-6'>
        {roomTypes.slice(1).map(type => (
          <button
            key={type.value}
            onClick={() => updateFilter('roomType', type.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filters.roomType === type.value
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Detailed Filters */}
      <div className={`space-y-6 ${!isExpanded && 'hidden lg:block'}`}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Room Type */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <IoBusinessOutline className='inline w-4 h-4 mr-1' />
              Room Type
            </label>
            <select
              value={filters.roomType}
              onChange={e => updateFilter('roomType', e.target.value)}
              className='w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors'
            >
              {roomTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Building */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              {t('building_selector')}
            </label>
            <select
              value={filters.building}
              onChange={e => updateFilter('building', e.target.value)}
              className='w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors'
            >
              {buildings.map(building => (
                <option key={building.value} value={building.value}>
                  {building.label}
                </option>
              ))}
            </select>
          </div>

          {/* View Type */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <IoEyeOutline className='inline w-4 h-4 mr-1' />
              {t('view_type')}
            </label>
            <select
              value={filters.viewType}
              onChange={e => updateFilter('viewType', e.target.value)}
              className='w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors'
            >
              {viewTypes.map(view => (
                <option key={view.value} value={view.value}>
                  {view.label}
                </option>
              ))}
            </select>
          </div>

          {/* Capacity */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <IoPeopleOutline className='inline w-4 h-4 mr-1' />
              {t('guests_capacity')}
            </label>
            <select
              value={filters.capacity || ''}
              onChange={e =>
                updateFilter(
                  'capacity',
                  e.target.value ? parseInt(e.target.value) : null
                )
              }
              className='w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors'
            >
              {capacityOptions.map(option => (
                <option key={option.value || 'null'} value={option.value || ''}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            {t('price_range')} (${filters.priceRange[0]} - $
            {filters.priceRange[1]})
          </label>
          <div className='flex items-center space-x-4'>
            <input
              type='range'
              min='50'
              max='1000'
              step='25'
              value={filters.priceRange[0]}
              onChange={e =>
                updateFilter('priceRange', [
                  parseInt(e.target.value),
                  filters.priceRange[1],
                ])
              }
              className='flex-1'
            />
            <input
              type='range'
              min='50'
              max='1000'
              step='25'
              value={filters.priceRange[1]}
              onChange={e =>
                updateFilter('priceRange', [
                  filters.priceRange[0],
                  parseInt(e.target.value),
                ])
              }
              className='flex-1'
            />
          </div>
          <div className='flex justify-between text-xs text-gray-500 mt-1'>
            <span>$50</span>
            <span>$1000+</span>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-3'>
            {t('amenities')}
          </label>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
            {amenityOptions.map(amenity => (
              <label
                key={amenity}
                className='flex items-center space-x-2 cursor-pointer'
              >
                <input
                  type='checkbox'
                  checked={filters.amenities.includes(amenity)}
                  onChange={e => {
                    if (e.target.checked) {
                      updateFilter('amenities', [
                        ...filters.amenities,
                        amenity,
                      ]);
                    } else {
                      updateFilter(
                        'amenities',
                        filters.amenities.filter(a => a !== amenity)
                      );
                    }
                  }}
                  className='w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500'
                />
                <span className='text-sm text-gray-700'>{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
