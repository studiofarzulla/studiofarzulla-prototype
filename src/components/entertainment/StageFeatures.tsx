'use client';

import {
  Music,
  Mic,
  Users,
  Star,
  MapPin,
  Ticket,
  Volume2,
  Spotlight,
} from 'lucide-react';

interface StageFeature {
  iconName: string;
  title: string;
  description: string;
}

interface StageFeaturesProps {
  features: StageFeature[];
}

// Helper function to get icon component from name
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    'music': Music,
    'mic': Mic,
    'users': Users,
    'star': Star,
    'map-pin': MapPin,
    'ticket': Ticket,
    'volume2': Volume2,
    'spotlight': Spotlight,
  };
  return iconMap[iconName] || Music;
};

export default function StageFeatures({ features }: StageFeaturesProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {features.map((feature, index) => {
        const IconComponent = getIconComponent(feature.iconName);
        return (
          <div
            key={index}
            className='bg-white rounded-lg shadow-soft p-6 hover:shadow-lg transition-shadow'
          >
            <div className='bg-purple-100 p-3 rounded-full w-fit mb-4'>
              <IconComponent className='h-8 w-8 text-purple-600' />
            </div>
            <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
            <p className='text-gray-600'>{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}