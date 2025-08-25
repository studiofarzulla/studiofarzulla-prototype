'use client';

import Link from 'next/link';
import { useTranslations } from '@/lib/LocaleProvider';
import { Button } from '@/components/ui/Button';
import { 
  Waves,
  Dumbbell,
  Baby,
  Music,
  Umbrella,
  Sparkles,
} from 'lucide-react';

interface AmenityCardProps {
  title: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
  href?: string;
  className?: string;
}

// Helper function to get icon component from name
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    'waves': Waves,
    'dumbbell': Dumbbell,
    'baby': Baby,
    'music': Music,
    'umbrella': Umbrella,
    'sparkles': Sparkles,
  };
  return iconMap[iconName] || Sparkles;
};

export default function AmenityCard({
  title,
  description,
  iconName,
  image,
  features,
  href,
  className = '',
}: AmenityCardProps) {
  const Icon = getIconComponent(iconName);
  const t = useTranslations('common');

  return (
    <div
      className={`bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <div className='relative h-64'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
        <div className='absolute top-4 left-4'>
          <div className='bg-white/90 p-2 rounded-full'>
            <Icon className='h-6 w-6 text-primary-600' />
          </div>
        </div>
        <div className='absolute bottom-4 left-4 text-white'>
          <h3 className='text-xl font-bold mb-2'>{title}</h3>
          <p className='text-sm opacity-90'>{description}</p>
        </div>
      </div>

      <div className='p-6'>
        <ul className='space-y-2 mb-6'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center text-gray-600'>
              <div className='w-2 h-2 bg-primary-500 rounded-full mr-3' />
              <span className='text-sm'>{feature}</span>
            </li>
          ))}
        </ul>

        {href && (
          <Link href={href as any}>
            <Button className='w-full'>{t('view_details')}</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
