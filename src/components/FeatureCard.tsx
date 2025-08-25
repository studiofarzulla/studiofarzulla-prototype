'use client';

import { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  gradient?: string;
  index?: number;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient = 'from-primary-100 to-primary-200',
  index = 0 
}: FeatureCardProps) {
  return (
    <div
      className="group bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-primary-600" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}