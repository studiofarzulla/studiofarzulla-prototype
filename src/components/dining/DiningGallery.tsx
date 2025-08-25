'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  IoCloseOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from 'react-icons/io5';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title?: string;
  description?: string;
}

interface DiningGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}

export default function DiningGallery({
  images,
  title = 'Gallery',
  subtitle = 'A glimpse into our culinary world',
}: DiningGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<
    'all' | GalleryImage['category']
  >('all');

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'food', label: 'Cuisine' },
    { key: 'ambiance', label: 'Ambiance' },
    { key: 'service', label: 'Service' },
    { key: 'events', label: 'Events' },
  ] as const;

  const filteredImages =
    activeFilter === 'all'
      ? images
      : images.filter(img => img.category === activeFilter);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  // Add event listener for keyboard navigation
  if (typeof window !== 'undefined' && selectedImage !== null) {
    window.addEventListener('keydown', handleKeyDown);
  }

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>{title}</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>{subtitle}</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-2 mb-8'
        >
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === key
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 ${
                  index % 7 === 0
                    ? 'sm:col-span-2 sm:row-span-2'
                    : 'aspect-square'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* Content */}
                <div className='absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                  {image.title && (
                    <h3 className='font-semibold mb-1'>{image.title}</h3>
                  )}
                  {image.description && (
                    <p className='text-sm opacity-90'>{image.description}</p>
                  )}
                </div>

                {/* Category Badge */}
                <div className='absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full'>
                    {image.category.charAt(0).toUpperCase() +
                      image.category.slice(1)}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500'>
              No images found for the selected category.
            </p>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4'
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10'
                onClick={() => setSelectedImage(null)}
              >
                <IoCloseOutline className='w-8 h-8' />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    className='absolute left-4 text-white hover:text-gray-300 transition-colors duration-200 z-10'
                    onClick={e => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <IoChevronBackOutline className='w-8 h-8' />
                  </button>
                  <button
                    className='absolute right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10'
                    onClick={e => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <IoChevronForwardOutline className='w-8 h-8' />
                  </button>
                </>
              )}

              {/* Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='relative max-w-5xl max-h-[90vh] w-full h-full'
                onClick={e => e.stopPropagation()}
              >
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className='object-contain'
                />

                {/* Image Info */}
                {(filteredImages[selectedImage].title ||
                  filteredImages[selectedImage].description) && (
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white'>
                    {filteredImages[selectedImage].title && (
                      <h3 className='text-xl font-semibold mb-2'>
                        {filteredImages[selectedImage].title}
                      </h3>
                    )}
                    {filteredImages[selectedImage].description && (
                      <p className='opacity-90'>
                        {filteredImages[selectedImage].description}
                      </p>
                    )}
                  </div>
                )}

                {/* Image Counter */}
                <div className='absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm'>
                  {selectedImage + 1} / {filteredImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
