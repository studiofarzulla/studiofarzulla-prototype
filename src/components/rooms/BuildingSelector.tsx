'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  IoBusinessOutline,
  IoHomeOutline,
  IoPeopleOutline,
  IoLocationOutline,
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline,
} from 'react-icons/io5';

interface Building {
  id: string;
  name: string;
  rooms: number;
  type: 'standard' | 'corporate';
  features: string[];
  location: string;
  available: number;
  priceRange: [number, number];
}

interface BuildingSelectorProps {
  selectedBuilding: string | null;
  onBuildingSelect: (buildingId: string | null) => void;
  className?: string;
}

export default function BuildingSelector({
  selectedBuilding,
  onBuildingSelect,
  className = '',
}: BuildingSelectorProps) {
  const t = useTranslations('rooms');
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const buildings: Building[] = [
    {
      id: 'building-a',
      name: 'Building A',
      rooms: 25,
      type: 'standard',
      features: ['Sea View', 'Standard Rooms', 'Pool Access'],
      location: 'Beachfront East',
      available: 18,
      priceRange: [150, 300],
    },
    {
      id: 'building-b',
      name: 'Building B',
      rooms: 25,
      type: 'standard',
      features: ['Garden View', 'Family Rooms', 'Play Area'],
      location: 'Garden Side',
      available: 22,
      priceRange: [120, 250],
    },
    {
      id: 'building-c',
      name: 'Building C',
      rooms: 25,
      type: 'standard',
      features: ['Pool View', 'Deluxe Rooms', 'Spa Access'],
      location: 'Pool Area',
      available: 15,
      priceRange: [180, 350],
    },
    {
      id: 'building-d',
      name: 'Building D',
      rooms: 25,
      type: 'standard',
      features: ['Sea View', 'Connecting Rooms', 'Beach Access'],
      location: 'Beachfront Central',
      available: 20,
      priceRange: [160, 320],
    },
    {
      id: 'building-e',
      name: 'Building E',
      rooms: 25,
      type: 'standard',
      features: ['Mixed Views', 'Standard & Deluxe', 'Central Location'],
      location: 'Resort Center',
      available: 19,
      priceRange: [140, 280],
    },
    {
      id: 'building-f',
      name: 'Building F',
      rooms: 25,
      type: 'standard',
      features: ['Garden View', 'Quiet Zone', 'Wellness Area'],
      location: 'Garden Retreat',
      available: 23,
      priceRange: [130, 260],
    },
    {
      id: 'building-g',
      name: 'Building G',
      rooms: 25,
      type: 'standard',
      features: ['Sea View', 'Executive Floors', 'Business Center'],
      location: 'Beachfront West',
      available: 16,
      priceRange: [200, 400],
    },
    {
      id: 'building-h',
      name: 'Building H',
      rooms: 25,
      type: 'standard',
      features: ['Premium Suites', 'Panoramic Views', 'VIP Services'],
      location: 'Premium Wing',
      available: 12,
      priceRange: [300, 600],
    },
    {
      id: 'building-i',
      name: 'Building I',
      rooms: 30,
      type: 'standard',
      features: ['Mixed Types', 'Largest Building', 'All Amenities'],
      location: 'Main Complex',
      available: 25,
      priceRange: [150, 450],
    },
    {
      id: 'corporate-1',
      name: 'Corporate Building 1',
      rooms: 20,
      type: 'corporate',
      features: ['Two-Floor Layout', 'Meeting Rooms', 'Private Entrance'],
      location: 'Business District',
      available: 20,
      priceRange: [800, 1500],
    },
    {
      id: 'corporate-2',
      name: 'Corporate Building 2',
      rooms: 20,
      type: 'corporate',
      features: ['Conference Facilities', 'Group Dining', 'Team Spaces'],
      location: 'Conference Area',
      available: 20,
      priceRange: [850, 1600],
    },
  ];

  const handleBuildingClick = (buildingId: string) => {
    onBuildingSelect(selectedBuilding === buildingId ? null : buildingId);
  };

  const getAvailabilityColor = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 70) return 'text-green-600';
    if (percentage > 30) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAvailabilityText = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 70) return 'Good Availability';
    if (percentage > 30) return 'Limited Availability';
    return 'Low Availability';
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-semibold text-gray-900 flex items-center'>
            <IoBusinessOutline className='w-5 h-5 text-primary-600 mr-2' />
            {t('building_selector')}
          </h3>
          <p className='text-gray-600 text-sm mt-1'>
            Choose from 9 magnificent buildings with unique characteristics
          </p>
        </div>

        {selectedBuilding && (
          <button
            onClick={() => onBuildingSelect(null)}
            className='text-sm text-primary-600 hover:text-primary-700 font-medium'
          >
            Clear Selection
          </button>
        )}
      </div>

      {/* Quick Stats */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl'>
        <div className='text-center'>
          <div className='text-2xl font-bold text-primary-600'>250</div>
          <div className='text-sm text-gray-600'>Total Rooms</div>
        </div>
        <div className='text-center'>
          <div className='text-2xl font-bold text-green-600'>190</div>
          <div className='text-sm text-gray-600'>Available</div>
        </div>
        <div className='text-center'>
          <div className='text-2xl font-bold text-accent-600'>11</div>
          <div className='text-sm text-gray-600'>Buildings</div>
        </div>
        <div className='text-center'>
          <div className='text-2xl font-bold text-purple-600'>2</div>
          <div className='text-sm text-gray-600'>Corporate</div>
        </div>
      </div>

      {/* Standard Buildings */}
      <div>
        <h4 className='text-lg font-medium text-gray-900 mb-4 flex items-center'>
          <IoHomeOutline className='w-4 h-4 text-gray-600 mr-2' />
          Standard Buildings
        </h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {buildings
            .filter(b => b.type === 'standard')
            .map((building, index) => (
              <motion.div
                key={building.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  selectedBuilding === building.id
                    ? 'border-primary-600 bg-primary-50 shadow-medium'
                    : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-soft'
                }`}
                onClick={() => handleBuildingClick(building.id)}
              >
                {/* Selection Indicator */}
                {selectedBuilding === building.id && (
                  <div className='absolute -top-2 -right-2 bg-primary-600 text-white rounded-full p-1'>
                    <IoCheckmarkCircleOutline className='w-4 h-4' />
                  </div>
                )}

                <div className='flex justify-between items-start mb-3'>
                  <div>
                    <h5 className='font-semibold text-gray-900'>
                      {building.name}
                    </h5>
                    <p className='text-sm text-gray-500'>{building.location}</p>
                  </div>
                  <div className='text-right'>
                    <div className='text-lg font-bold text-primary-600'>
                      {building.rooms}
                    </div>
                    <div className='text-xs text-gray-500'>rooms</div>
                  </div>
                </div>

                {/* Availability */}
                <div className='flex items-center justify-between mb-3'>
                  <span
                    className={`text-sm font-medium ${getAvailabilityColor(building.available, building.rooms)}`}
                  >
                    {getAvailabilityText(building.available, building.rooms)}
                  </span>
                  <span className='text-sm text-gray-600'>
                    {building.available}/{building.rooms} available
                  </span>
                </div>

                {/* Price Range */}
                <div className='mb-3'>
                  <span className='text-sm text-gray-600'>
                    ${building.priceRange[0]} - ${building.priceRange[1]} /
                    night
                  </span>
                </div>

                {/* Features */}
                <div className='space-y-2'>
                  {building.features.slice(0, 2).map((feature, idx) => (
                    <div
                      key={idx}
                      className='flex items-center text-sm text-gray-600'
                    >
                      <div className='w-1.5 h-1.5 bg-primary-600 rounded-full mr-2'></div>
                      {feature}
                    </div>
                  ))}
                  {building.features.length > 2 && (
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        setShowDetails(
                          showDetails === building.id ? null : building.id
                        );
                      }}
                      className='text-sm text-primary-600 hover:text-primary-700 flex items-center'
                    >
                      <IoInformationCircleOutline className='w-4 h-4 mr-1' />
                      {building.features.length - 2} more features
                    </button>
                  )}
                </div>

                {/* Details Dropdown */}
                {showDetails === building.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className='mt-3 pt-3 border-t border-gray-200'
                  >
                    <div className='space-y-1'>
                      {building.features.slice(2).map((feature, idx) => (
                        <div
                          key={idx}
                          className='flex items-center text-sm text-gray-600'
                        >
                          <div className='w-1.5 h-1.5 bg-primary-600 rounded-full mr-2'></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
        </div>
      </div>

      {/* Corporate Buildings */}
      <div>
        <h4 className='text-lg font-medium text-gray-900 mb-4 flex items-center'>
          <IoBusinessOutline className='w-4 h-4 text-gray-600 mr-2' />
          Corporate Buildings
        </h4>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {buildings
            .filter(b => b.type === 'corporate')
            .map((building, index) => (
              <motion.div
                key={building.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  selectedBuilding === building.id
                    ? 'border-accent-600 bg-accent-50 shadow-medium'
                    : 'border-gray-200 bg-white hover:border-accent-300 hover:shadow-soft'
                }`}
                onClick={() => handleBuildingClick(building.id)}
              >
                {/* Selection Indicator */}
                {selectedBuilding === building.id && (
                  <div className='absolute -top-2 -right-2 bg-accent-600 text-white rounded-full p-1'>
                    <IoCheckmarkCircleOutline className='w-4 h-4' />
                  </div>
                )}

                {/* Corporate Badge */}
                <div className='absolute top-4 right-4 bg-accent-600 text-white px-2 py-1 rounded-full text-xs font-medium'>
                  Corporate
                </div>

                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <h5 className='font-semibold text-gray-900'>
                      {building.name}
                    </h5>
                    <p className='text-sm text-gray-500'>{building.location}</p>
                  </div>
                  <div className='text-right'>
                    <div className='text-xl font-bold text-accent-600'>
                      {building.rooms}
                    </div>
                    <div className='text-xs text-gray-500'>rooms</div>
                  </div>
                </div>

                {/* Full Building Rental */}
                <div className='bg-accent-100 p-3 rounded-lg mb-4'>
                  <div className='flex items-center text-accent-800'>
                    <IoPeopleOutline className='w-4 h-4 mr-2' />
                    <span className='text-sm font-medium'>
                      Full Building Rental Available
                    </span>
                  </div>
                  <div className='text-sm text-accent-700 mt-1'>
                    Perfect for corporate events, training programs, and team
                    retreats
                  </div>
                </div>

                {/* Price Range */}
                <div className='mb-4'>
                  <span className='text-sm text-gray-600'>
                    ${building.priceRange[0]} - ${building.priceRange[1]} /
                    night (full building)
                  </span>
                </div>

                {/* Features */}
                <div className='space-y-2'>
                  {building.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className='flex items-center text-sm text-gray-600'
                    >
                      <div className='w-1.5 h-1.5 bg-accent-600 rounded-full mr-2'></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Selected Building Info */}
      {selectedBuilding && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='bg-primary-50 border border-primary-200 rounded-xl p-6'
        >
          <h4 className='text-lg font-semibold text-primary-900 mb-3 flex items-center'>
            <IoLocationOutline className='w-5 h-5 mr-2' />
            Selected Building Details
          </h4>
          {(() => {
            const building = buildings.find(b => b.id === selectedBuilding);
            return building ? (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
                <div>
                  <div className='font-medium text-primary-900'>
                    {building.name}
                  </div>
                  <div className='text-primary-700'>{building.location}</div>
                </div>
                <div>
                  <div className='font-medium text-primary-900'>Capacity</div>
                  <div className='text-primary-700'>
                    {building.rooms} rooms total
                  </div>
                </div>
                <div>
                  <div className='font-medium text-primary-900'>
                    Availability
                  </div>
                  <div
                    className={`${getAvailabilityColor(building.available, building.rooms)}`}
                  >
                    {building.available} rooms available
                  </div>
                </div>
              </div>
            ) : null;
          })()}
        </motion.div>
      )}
    </div>
  );
}
