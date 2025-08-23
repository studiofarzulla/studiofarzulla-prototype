'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoChevronBackOutline, 
  IoChevronForwardOutline,
  IoCloseOutline,
  IoExpandOutline
} from 'react-icons/io5';

interface RoomGalleryProps {
  images: string[];
  roomName: string;
  className?: string;
}

export default function RoomGallery({ images, roomName, className = '' }: RoomGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className={`relative ${className}`}>
        {/* Main Image Display */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={images[currentIndex] || '/images/rooms/placeholder.jpg'}
            alt={`${roomName} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-soft transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <IoChevronBackOutline className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-soft transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <IoChevronForwardOutline className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-soft transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="View in fullscreen"
          >
            <IoExpandOutline className="w-5 h-5" />
          </button>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="mt-4 flex space-x-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex 
                    ? 'border-primary-600 ring-2 ring-primary-600 ring-offset-2' 
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <Image
                  src={image}
                  alt={`${roomName} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2 transition-colors z-10"
                aria-label="Close fullscreen"
              >
                <IoCloseOutline className="w-8 h-8" />
              </button>

              {/* Fullscreen Image */}
              <div className="relative w-full h-full">
                <Image
                  src={images[currentIndex]}
                  alt={`${roomName} - Image ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                />
                
                {/* Navigation in Fullscreen */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
                      aria-label="Previous image"
                    >
                      <IoChevronBackOutline className="w-6 h-6" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
                      aria-label="Next image"
                    >
                      <IoChevronForwardOutline className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Fullscreen Counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                  {currentIndex + 1} / {images.length}
                </div>
              </div>

              {/* Fullscreen Thumbnail Strip */}
              {images.length > 1 && (
                <div className="absolute -bottom-20 left-0 right-0 flex justify-center space-x-2 overflow-x-auto pb-4">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentIndex 
                          ? 'border-white ring-2 ring-white ring-offset-2 ring-offset-black' 
                          : 'border-transparent hover:border-white/50'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${roomName} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}