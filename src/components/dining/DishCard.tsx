'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface DishCardProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  dietary?: ('vegetarian' | 'vegan' | 'gluten-free' | 'halal')[];
  spicy?: boolean;
  popular?: boolean;
  chef_special?: boolean;
  index?: number;
}

export default function DishCard({
  name,
  description,
  price,
  image,
  dietary = [],
  spicy = false,
  popular = false,
  chef_special = false,
  index = 0
}: DishCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden"
    >
      {/* Badge */}
      {(popular || chef_special) && (
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            chef_special 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
              : 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
          }`}>
            {chef_special ? "Chef's Special" : 'Popular'}
          </span>
        </div>
      )}

      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 flex items-center gap-2">
            {name}
            {spicy && (
              <span className="text-red-500 text-sm" title="Spicy dish">🌶️</span>
            )}
          </h3>
          <span className="text-lg font-bold text-primary-600 whitespace-nowrap ml-4">
            {price}
          </span>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Dietary Information */}
        {dietary.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {dietary.map((diet) => (
              <span
                key={diet}
                className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-50 text-green-700 border border-green-200"
              >
                {diet === 'vegetarian' && '🥬 '}
                {diet === 'vegan' && '🌱 '}
                {diet === 'gluten-free' && '🌾 '}
                {diet === 'halal' && '🥩 '}
                {diet.replace('-', ' ').toUpperCase()}
              </span>
            ))}
          </div>
        )}

        {/* Order Button */}
        <button className="w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02]">
          Add to Order
        </button>
      </div>
    </motion.div>
  );
}