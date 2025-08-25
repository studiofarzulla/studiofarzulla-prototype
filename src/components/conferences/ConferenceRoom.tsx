'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import {
  Users,
  Monitor,
  Wifi,
  Coffee,
  Car,
  Utensils,
  Mic,
  Presentation,
} from 'lucide-react';

interface RoomSpecification {
  name: string;
  capacity: {
    theater: number;
    classroom: number;
    boardroom: number;
    reception: number;
  };
  size: string;
  equipment: string[];
  features: string[];
  image: string;
  priceRange?: string;
}

interface ConferenceRoomProps {
  rooms: RoomSpecification[];
}

export default function ConferenceRoom({ rooms }: ConferenceRoomProps) {
  const t = useTranslations('conferences');

  const standardEquipment = [
    { name: 'High-Definition Projectors', icon: Monitor },
    { name: 'Professional Sound System', icon: Mic },
    { name: 'Wireless Presentation System', icon: Presentation },
    { name: 'High-Speed Internet', icon: Wifi },
    { name: 'Climate Control', icon: Monitor },
    { name: 'Natural Lighting', icon: Monitor },
  ];

  return (
    <section className='section-padding'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='heading-secondary mb-4'>Conference Facilities</h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Our state-of-the-art conference facilities provide the perfect
            setting for successful business events, from intimate board meetings
            to large corporate gatherings.
          </p>
        </div>

        {/* Conference Rooms */}
        <div className='space-y-12 mb-16'>
          {rooms.map((room, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-2' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className='relative h-80 rounded-lg overflow-hidden shadow-lg'>
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                  <div className='absolute bottom-4 left-4 text-white'>
                    <h3 className='text-2xl font-bold'>{room.name}</h3>
                    <p className='text-primary-200'>{room.size}</p>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h3 className='text-3xl font-bold mb-4'>{room.name}</h3>

                {/* Capacity Information */}
                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <div className='flex items-center mb-2'>
                      <Users className='h-5 w-5 text-primary-600 mr-2' />
                      <span className='font-semibold'>Theater Style</span>
                    </div>
                    <p className='text-2xl font-bold text-primary-600'>
                      {room.capacity.theater}
                    </p>
                  </div>

                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <div className='flex items-center mb-2'>
                      <Users className='h-5 w-5 text-primary-600 mr-2' />
                      <span className='font-semibold'>Classroom</span>
                    </div>
                    <p className='text-2xl font-bold text-primary-600'>
                      {room.capacity.classroom}
                    </p>
                  </div>

                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <div className='flex items-center mb-2'>
                      <Users className='h-5 w-5 text-primary-600 mr-2' />
                      <span className='font-semibold'>Boardroom</span>
                    </div>
                    <p className='text-2xl font-bold text-primary-600'>
                      {room.capacity.boardroom}
                    </p>
                  </div>

                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <div className='flex items-center mb-2'>
                      <Users className='h-5 w-5 text-primary-600 mr-2' />
                      <span className='font-semibold'>Reception</span>
                    </div>
                    <p className='text-2xl font-bold text-primary-600'>
                      {room.capacity.reception}
                    </p>
                  </div>
                </div>

                {/* Equipment & Features */}
                <div className='mb-6'>
                  <h4 className='font-semibold mb-3'>Included Equipment</h4>
                  <ul className='space-y-2'>
                    {room.equipment.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className='flex items-center text-gray-600'
                      >
                        <div className='w-2 h-2 bg-primary-500 rounded-full mr-3' />
                        <span className='text-sm'>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='mb-8'>
                  <h4 className='font-semibold mb-3'>Additional Features</h4>
                  <ul className='space-y-2'>
                    {room.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='flex items-center text-gray-600'
                      >
                        <div className='w-2 h-2 bg-secondary-500 rounded-full mr-3' />
                        <span className='text-sm'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='flex gap-4'>
                  <Button size='lg'>Request Quote</Button>
                  <Button variant='outline' size='lg'>
                    View Floor Plan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Standard Equipment Section */}
        <div className='bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-16'>
          <div className='text-center mb-8'>
            <h3 className='text-3xl font-bold mb-4'>
              Standard Equipment in All Rooms
            </h3>
            <p className='text-lg text-gray-600'>
              Every conference room comes equipped with professional-grade
              technology and amenities
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {standardEquipment.map((equipment, index) => {
              const IconComponent = equipment.icon;
              return (
                <div
                  key={index}
                  className='bg-white p-6 rounded-lg shadow-soft text-center'
                >
                  <div className='bg-primary-100 p-3 rounded-full w-fit mx-auto mb-4'>
                    <IconComponent className='h-8 w-8 text-primary-600' />
                  </div>
                  <h4 className='font-semibold'>{equipment.name}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Services */}
        <div className='bg-white rounded-2xl shadow-soft p-8'>
          <div className='text-center mb-8'>
            <h3 className='text-3xl font-bold mb-4'>Conference Services</h3>
            <p className='text-lg text-gray-600'>
              Comprehensive support services to ensure your event runs smoothly
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='bg-primary-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center'>
                <Coffee className='h-10 w-10 text-primary-600' />
              </div>
              <h4 className='font-semibold mb-2'>Catering Services</h4>
              <p className='text-gray-600 text-sm'>
                Coffee breaks, lunch packages, and full-service catering
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-primary-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center'>
                <Users className='h-10 w-10 text-primary-600' />
              </div>
              <h4 className='font-semibold mb-2'>Event Coordination</h4>
              <p className='text-gray-600 text-sm'>
                Dedicated event managers and technical support
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-primary-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center'>
                <Car className='h-10 w-10 text-primary-600' />
              </div>
              <h4 className='font-semibold mb-2'>Transportation</h4>
              <p className='text-gray-600 text-sm'>
                Airport transfers and local transportation arrangements
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-primary-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center'>
                <Utensils className='h-10 w-10 text-primary-600' />
              </div>
              <h4 className='font-semibold mb-2'>Accommodation</h4>
              <p className='text-gray-600 text-sm'>
                Special group rates and corporate building rentals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
