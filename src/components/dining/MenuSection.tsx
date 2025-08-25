'use client';

import { useState } from 'react';

interface MenuItemLocal {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary?: string[];
  spicy?: boolean;
  popular?: boolean;
}

interface MenuSectionProps {
  title: string;
  description?: string;
  items: MenuItemLocal[];
  columns?: 1 | 2;
}

export default function MenuSection({
  title,
  description,
  items,
  columns = 2,
}: MenuSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const dietaryFilters = ['all', 'vegetarian', 'vegan', 'gluten-free', 'halal'];

  const filteredItems =
    activeFilter === 'all'
      ? items
      : items.filter(item => item.dietary?.includes(activeFilter as any));

  return (
    <section
      className='mb-12'
    >
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>{title}</h2>
        {description && (
          <p className='text-gray-600 max-w-2xl mx-auto'>{description}</p>
        )}
      </div>

      {/* Dietary Filters */}
      <div className='flex flex-wrap justify-center gap-2 mb-8'>
        {dietaryFilters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeFilter === filter
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600'
            }`}
          >
            {filter === 'all'
              ? 'All Items'
              : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div
        className={`grid gap-6 ${columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}
      >
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className='relative bg-white p-6 rounded-lg border border-gray-200 hover:shadow-soft transition-shadow duration-300'
          >
            {/* Popular Badge */}
            {item.popular && (
              <div className='absolute -top-2 -right-2 bg-gradient-to-r from-accent-500 to-secondary-500 text-white text-xs px-3 py-1 rounded-full'>
                Popular
              </div>
            )}

            <div className='flex justify-between items-start mb-3'>
              <h3 className='text-lg font-semibold text-gray-900 flex items-center gap-2'>
                {item.name}
                {item.spicy && (
                  <span className='text-red-500' title='Spicy'>
                    🌶️
                  </span>
                )}
              </h3>
              <span className='text-lg font-bold text-primary-600 whitespace-nowrap ml-4'>
                {item.price}
              </span>
            </div>

            <p className='text-gray-600 text-sm mb-3 leading-relaxed'>
              {item.description}
            </p>

            {/* Dietary Tags */}
            {item.dietary && item.dietary.length > 0 && (
              <div className='flex flex-wrap gap-1'>
                {item.dietary.map(diet => (
                  <span
                    key={diet}
                    className='inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full'
                  >
                    {diet === 'vegetarian' && '🥬'}
                    {diet === 'vegan' && '🌱'}
                    {diet === 'gluten-free' && '🌾'}
                    {diet === 'halal' && '🥩'}
                    <span className='ml-1'>{diet}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-gray-500'>
            No items found for the selected dietary preference.
          </p>
        </div>
      )}
    </section>
  );
}
