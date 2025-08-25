'use client';

import {
  Waves,
  Dumbbell,
  Baby,
  Music,
  Sparkles,
} from 'lucide-react';

interface NavItem {
  name: string;
  iconName: string;
  href: string;
}

interface QuickAccessNavProps {
  items: NavItem[];
}

// Helper function to get icon component from name
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    'waves': Waves,
    'dumbbell': Dumbbell,
    'baby': Baby,
    'music': Music,
    'sparkles': Sparkles,
  };
  return iconMap[iconName] || Sparkles;
};

export default function QuickAccessNav({ items }: QuickAccessNavProps) {
  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {items.map((item, index) => {
        const IconComponent = getIconComponent(item.iconName);
        return (
          <a
            key={index}
            href={item.href}
            className='flex items-center bg-gray-50 hover:bg-primary-50 px-4 py-2 rounded-full transition-colors'
          >
            <IconComponent className='h-5 w-5 text-primary-600 mr-2' />
            <span className='text-sm font-medium'>{item.name}</span>
          </a>
        );
      })}
    </div>
  );
}