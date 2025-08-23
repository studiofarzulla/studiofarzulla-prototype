'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoSearch, IoGrid, IoList, IoFilter } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  description?: string;
  tags: string[];
  isVideo?: boolean;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage, index: number) => void;
}

const CATEGORIES = [
  { id: 'all', name: 'All Photos', icon: '🖼️' },
  { id: 'hotel', name: 'Hotel', icon: '🏨' },
  { id: 'rooms', name: 'Rooms', icon: '🛏️' },
  { id: 'beach', name: 'Beach', icon: '🏖️' },
  { id: 'dining', name: 'Dining', icon: '🍽️' },
  { id: 'events', name: 'Events', icon: '🎉' },
  { id: 'amenities', name: 'Amenities', icon: '🏊' },
];

const VIEW_MODES = [
  { id: 'masonry', name: 'Masonry', icon: IoGrid },
  { id: 'grid', name: 'Grid', icon: IoList },
];

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredImages = useMemo(() => {
    let filtered = images;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(image => image.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(image => 
        image.title.toLowerCase().includes(query) ||
        image.alt.toLowerCase().includes(query) ||
        image.description?.toLowerCase().includes(query) ||
        image.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [images, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search and Filters Header */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search photos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={cn(
              'w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'text-sm'
            )}
          />
        </div>

        {/* View Mode and Filter Toggle */}
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            {VIEW_MODES.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id as 'masonry' | 'grid')}
                className={cn(
                  'flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium transition-colors',
                  viewMode === mode.id
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                <mode.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{mode.name}</span>
              </button>
            ))}
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={cn(
              'flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg',
              'hover:bg-gray-50 transition-colors text-sm font-medium',
              isFilterOpen && 'bg-primary-50 border-primary-300 text-primary-700'
            )}
          >
            <IoFilter className="w-4 h-4" />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors',
                      selectedCategory === category.id
                        ? 'bg-primary-100 text-primary-700 border border-primary-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent'
                    )}
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'} found
        </p>
        {selectedCategory !== 'all' && (
          <button
            onClick={() => setSelectedCategory('all')}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Gallery Grid */}
      <div className={cn(
        viewMode === 'masonry'
          ? 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
      )}>
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={cn(
                'group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer',
                viewMode === 'masonry' ? 'break-inside-avoid' : 'aspect-[4/3]'
              )}
              onClick={() => onImageClick(image, index)}
            >
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={viewMode === 'masonry' ? undefined : 300}
                  className={cn(
                    'w-full transition-transform duration-300 group-hover:scale-105',
                    viewMode === 'grid' ? 'h-full object-cover' : 'h-auto'
                  )}
                  priority={index < 8}
                />
                
                {/* Video indicator */}
                {image.isVideo && (
                  <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    Video
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    {image.description && (
                      <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
                    )}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {image.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/20 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <IoSearch className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No photos found</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Try adjusting your search terms or clearing the filters to see more results.
          </p>
        </div>
      )}
    </div>
  );
}