'use client';

import Image from 'next/image';
import {
  IoTrophyOutline,
  IoRestaurantOutline,
  IoSchoolOutline,
} from 'react-icons/io5';

interface ChefProfileProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  experience: string;
  specialties: string[];
  achievements: string[];
  education?: string[];
  signature_dishes?: string[];
  philosophy?: string;
}

export default function ChefProfile({
  name,
  title,
  image,
  bio,
  experience,
  specialties,
  achievements,
  education = [],
  signature_dishes = [],
  philosophy,
}: ChefProfileProps) {
  return (
    <section
      className='bg-gradient-to-br from-gray-50 to-white py-16'
    >
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Chef Image */}
          <div
            className='relative'
          >
            <div className='relative w-full max-w-md mx-auto'>
              {/* Background decoration */}
              <div className='absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl transform rotate-3' />

              <div className='relative bg-white rounded-2xl shadow-soft overflow-hidden'>
                <div className='relative h-96'>
                  <Image
                    src={image}
                    alt={`Chef ${name}`}
                    fill
                    className='object-cover'
                  />
                </div>

                {/* Chef Name Badge */}
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6'>
                  <h3 className='text-2xl font-bold text-white mb-1'>{name}</h3>
                  <p className='text-accent-300 font-medium'>{title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chef Information */}
          <div
            className='space-y-6'
          >
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Meet Our Executive Chef
              </h2>
              <p className='text-lg text-gray-600 leading-relaxed mb-6'>
                {bio}
              </p>
              <p className='text-primary-600 font-semibold'>{experience}</p>
            </div>

            {/* Philosophy */}
            {philosophy && (
              <div className='bg-white p-6 rounded-xl shadow-soft border-l-4 border-primary-500'>
                <h4 className='text-lg font-semibold text-gray-900 mb-3'>
                  Culinary Philosophy
                </h4>
                <p className='text-gray-600 italic'>"{philosophy}"</p>
              </div>
            )}

            {/* Specialties */}
            <div>
              <h4 className='text-lg font-semibold text-gray-900 mb-3 flex items-center'>
                <IoRestaurantOutline className='w-5 h-5 text-primary-500 mr-2' />
                Specialties
              </h4>
              <div className='flex flex-wrap gap-2'>
                {specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium'
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className='text-lg font-semibold text-gray-900 mb-3 flex items-center'>
                <IoTrophyOutline className='w-5 h-5 text-accent-500 mr-2' />
                Achievements
              </h4>
              <ul className='space-y-2'>
                {achievements.map((achievement, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0' />
                    <span className='text-gray-600'>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            {education.length > 0 && (
              <div>
                <h4 className='text-lg font-semibold text-gray-900 mb-3 flex items-center'>
                  <IoSchoolOutline className='w-5 h-5 text-secondary-500 mr-2' />
                  Education & Training
                </h4>
                <ul className='space-y-2'>
                  {education.map((edu, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0' />
                      <span className='text-gray-600'>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Signature Dishes */}
            {signature_dishes.length > 0 && (
              <div>
                <h4 className='text-lg font-semibold text-gray-900 mb-3'>
                  Signature Dishes
                </h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  {signature_dishes.map((dish, index) => (
                    <div
                      key={index}
                      className='bg-gradient-to-r from-primary-50 to-accent-50 p-4 rounded-lg border border-primary-200'
                    >
                      <span className='text-primary-700 font-medium'>
                        {dish}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
