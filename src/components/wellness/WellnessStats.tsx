'use client';

import {
  Dumbbell,
  Heart,
  Droplets,
  Users,
  Star,
  Award,
  Leaf,
} from 'lucide-react';

interface WellnessStat {
  iconName: string;
  number: string;
  label: string;
}

interface WellnessStatsProps {
  stats: WellnessStat[];
}

// Helper function to get icon component from name
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    'dumbbell': Dumbbell,
    'heart': Heart,
    'droplets': Droplets,
    'users': Users,
    'star': Star,
    'award': Award,
    'leaf': Leaf,
  };
  return iconMap[iconName] || Heart;
};

export default function WellnessStats({ stats }: WellnessStatsProps) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
      {stats.map((stat, index) => {
        const IconComponent = getIconComponent(stat.iconName);
        return (
          <div key={index} className='text-center'>
            <div className='bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center'>
              <IconComponent className='h-10 w-10 text-green-600' />
            </div>
            <div className='text-3xl font-bold text-green-600 mb-2'>
              {stat.number}
            </div>
            <p className='text-gray-600 text-sm'>{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}