'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import {
  Dumbbell,
  Heart,
  Droplets,
  Leaf,
  Clock,
  Users,
  Award,
  Thermometer,
} from 'lucide-react';

interface WellnessService {
  name: string;
  description: string;
  duration?: string;
  price?: string;
  category: 'gym' | 'sauna' | 'spa' | 'fitness';
}

interface WellnessFeature {
  title: string;
  description: string;
  icon: any;
  features: string[];
}

interface WellnessFeaturesProps {
  services?: WellnessService[];
}

export default function WellnessFeatures({ services }: WellnessFeaturesProps) {
  const t = useTranslations('amenities');

  const wellnessFeatures: WellnessFeature[] = [
    {
      title: 'Modern Fitness Center',
      description:
        'State-of-the-art equipment and professional training facilities',
      icon: Dumbbell,
      features: [
        'Latest Technogym equipment',
        'Free weights and resistance training',
        'Cardio machines with entertainment systems',
        'Personal training available',
        'Group fitness classes',
        'Yoga and Pilates studio',
      ],
    },
    {
      title: 'Steam Sauna',
      description: 'Traditional steam rooms for relaxation and detoxification',
      icon: Droplets,
      features: [
        'Eucalyptus-infused steam',
        'Temperature controlled environment',
        'Separate facilities for men and women',
        'Relaxation area with herbal teas',
        'Professional attendant service',
        'Post-sauna cold showers',
      ],
    },
    {
      title: 'Dry Sauna',
      description: 'Finnish-style dry sauna for deep relaxation',
      icon: Thermometer,
      features: [
        'Authentic Finnish design',
        'Premium wood construction',
        'Controlled temperature and humidity',
        'Aromatherapy options',
        'Relaxation loungers',
        'Refreshment station',
      ],
    },
    {
      title: 'Spa Services',
      description: 'Rejuvenating treatments and massage therapy',
      icon: Leaf,
      features: [
        'Professional massage therapists',
        'Variety of treatment options',
        'Natural and organic products',
        'Couples treatment rooms',
        'Relaxation packages',
        'Beauty and wellness consultations',
      ],
    },
  ];

  const operatingHours = [
    { facility: 'Fitness Center', hours: '6:00 AM - 11:00 PM' },
    { facility: 'Steam Sauna', hours: '8:00 AM - 10:00 PM' },
    { facility: 'Dry Sauna', hours: '8:00 AM - 10:00 PM' },
    { facility: 'Spa Services', hours: '9:00 AM - 9:00 PM' },
  ];

  return (
    <section className='section-padding'>
      <div className='container mx-auto px-4'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h2 className='heading-secondary mb-6'>Wellness & Fitness Center</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Rejuvenate your body and mind at our comprehensive wellness center,
            featuring modern fitness facilities, traditional saunas, and
            professional spa services designed to promote health and relaxation.
          </p>
        </div>

        {/* Wellness Features Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
          {wellnessFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className='bg-white rounded-lg shadow-soft p-8 hover:shadow-lg transition-shadow'
              >
                <div className='flex items-start mb-6'>
                  <div className='bg-primary-100 p-3 rounded-full mr-4'>
                    <IconComponent className='h-8 w-8 text-primary-600' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold mb-2'>{feature.title}</h3>
                    <p className='text-gray-600'>{feature.description}</p>
                  </div>
                </div>

                <ul className='space-y-3'>
                  {feature.features.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className='flex items-center text-gray-700'
                    >
                      <div className='w-2 h-2 bg-primary-500 rounded-full mr-3' />
                      <span className='text-sm'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Operating Hours */}
        <div className='bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-16'>
          <div className='text-center mb-8'>
            <h3 className='text-3xl font-bold mb-4'>Operating Hours</h3>
            <p className='text-lg text-gray-600'>
              Plan your wellness routine with our convenient schedules
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {operatingHours.map((schedule, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-soft text-center'
              >
                <Clock className='h-8 w-8 text-primary-600 mx-auto mb-3' />
                <h4 className='font-semibold mb-2'>{schedule.facility}</h4>
                <p className='text-gray-600 text-sm'>{schedule.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness Packages */}
        <div className='bg-white rounded-2xl shadow-soft p-8'>
          <div className='text-center mb-8'>
            <h3 className='text-3xl font-bold mb-4'>Wellness Packages</h3>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Choose from our curated wellness experiences designed to
              revitalize and restore
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors'>
              <div className='bg-primary-100 p-3 rounded-full w-fit mb-4'>
                <Heart className='h-8 w-8 text-primary-600' />
              </div>
              <h4 className='text-xl font-bold mb-3'>Relaxation Package</h4>
              <p className='text-gray-600 mb-4'>
                Steam sauna session, dry sauna experience, and 60-minute massage
              </p>
              <ul className='text-sm text-gray-600 space-y-2 mb-6'>
                <li>• 30-minute steam sauna</li>
                <li>• 30-minute dry sauna</li>
                <li>• 60-minute therapeutic massage</li>
                <li>• Herbal tea and refreshments</li>
              </ul>
              <Button className='w-full'>Book Package</Button>
            </div>

            <div className='border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors bg-primary-50'>
              <div className='bg-primary-200 p-3 rounded-full w-fit mb-4'>
                <Award className='h-8 w-8 text-primary-700' />
              </div>
              <h4 className='text-xl font-bold mb-3'>Premium Wellness</h4>
              <p className='text-gray-600 mb-4'>
                Complete wellness experience with fitness training and spa
                treatments
              </p>
              <ul className='text-sm text-gray-600 space-y-2 mb-6'>
                <li>• Personal training session</li>
                <li>• Full sauna experience</li>
                <li>• 90-minute spa treatment</li>
                <li>• Nutritional consultation</li>
                <li>• Healthy meal plan</li>
              </ul>
              <Button className='w-full'>Book Premium</Button>
            </div>

            <div className='border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors'>
              <div className='bg-primary-100 p-3 rounded-full w-fit mb-4'>
                <Users className='h-8 w-8 text-primary-600' />
              </div>
              <h4 className='text-xl font-bold mb-3'>Couple's Retreat</h4>
              <p className='text-gray-600 mb-4'>
                Romantic wellness experience designed for couples
              </p>
              <ul className='text-sm text-gray-600 space-y-2 mb-6'>
                <li>• Private sauna session</li>
                <li>• Couples massage (90 minutes)</li>
                <li>• Champagne and strawberries</li>
                <li>• Private relaxation suite</li>
              </ul>
              <Button className='w-full'>Book Retreat</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
