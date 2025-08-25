'use client';

import { useState, useEffect, useCallback } from 'react';

import {
  IoClose,
  IoChevronBack,
  IoChevronForward,
  IoDownload,
  IoShare,
  IoHeart,
  IoHeartOutline,
  IoPlay,
  IoPause,
} from 'react-icons/io5';
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

interface ImageLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: ImageLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const currentImage = images[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case ' ':
          e.preventDefault();
          if (currentImage?.isVideo) {
            setIsPlaying(!isPlaying);
          }
          break;
        case 'z':
          setIsZoomed(!isZoomed);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isZoomed, isPlaying, onClose, onNext, onPrevious, currentImage]);

  // Auto-hide controls for videos
  useEffect(() => {
    if (!currentImage?.isVideo || !showControls) return;

    const timer = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentImage, showControls]);

  const handleDownload = useCallback(async () => {
    if (!currentImage) return;

    try {
      const response = await fetch(currentImage.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${currentImage.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  }, [currentImage]);

  const handleShare = useCallback(async () => {
    if (!currentImage) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: currentImage.title,
          text: currentImage.description || currentImage.alt,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        // You might want to show a toast notification here
      } catch (error) {
        console.error('Share failed:', error);
      }
    }
  }, [currentImage]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className='fixed inset-0 z-50 bg-black/95 flex items-center justify-center'
        onClick={e => {
          if (e.target === e.currentTarget) onClose();
        }}
        onMouseMove={() => setShowControls(true)}
      >
        {/* Navigation Controls */}
        {showControls && (
          <div className='absolute inset-0 pointer-events-none'>
              {/* Header Controls */}
              <div className='absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4 pointer-events-auto'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <span className='text-white text-sm'>
                      {currentIndex + 1} / {images.length}
                    </span>
                    <span className='text-white/70 text-sm'>
                      {currentImage.category}
                    </span>
                  </div>

                  <div className='flex items-center gap-2'>
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className='p-2 text-white hover:bg-white/20 rounded-full transition-colors'
                      aria-label='Like photo'
                    >
                      {isLiked ? (
                        <IoHeart className='w-6 h-6 text-red-500' />
                      ) : (
                        <IoHeartOutline className='w-6 h-6' />
                      )}
                    </button>

                    <button
                      onClick={handleShare}
                      className='p-2 text-white hover:bg-white/20 rounded-full transition-colors'
                      aria-label='Share photo'
                    >
                      <IoShare className='w-6 h-6' />
                    </button>

                    <button
                      onClick={handleDownload}
                      className='p-2 text-white hover:bg-white/20 rounded-full transition-colors'
                      aria-label='Download photo'
                    >
                      <IoDownload className='w-6 h-6' />
                    </button>

                    <button
                      onClick={onClose}
                      className='p-2 text-white hover:bg-white/20 rounded-full transition-colors'
                      aria-label='Close lightbox'
                    >
                      <IoClose className='w-6 h-6' />
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={onPrevious}
                    className='absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:bg-white/20 rounded-full transition-colors pointer-events-auto'
                    aria-label='Previous image'
                  >
                    <IoChevronBack className='w-8 h-8' />
                  </button>

                  <button
                    onClick={onNext}
                    className='absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:bg-white/20 rounded-full transition-colors pointer-events-auto'
                    aria-label='Next image'
                  >
                    <IoChevronForward className='w-8 h-8' />
                  </button>
                </>
              )}

              {/* Bottom Info */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 pointer-events-auto'>
                <div className='max-w-4xl mx-auto'>
                  <h2 className='text-white text-2xl font-bold mb-2'>
                    {currentImage.title}
                  </h2>
                  {currentImage.description && (
                    <p className='text-white/80 text-lg mb-4'>
                      {currentImage.description}
                    </p>
                  )}
                  {currentImage.tags.length > 0 && (
                    <div className='flex flex-wrap gap-2'>
                      {currentImage.tags.map(tag => (
                        <span
                          key={tag}
                          className='px-3 py-1 bg-white/20 text-white text-sm rounded-full'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
        )}

        {/* Main Content */}
        <div className='relative max-w-full max-h-full flex items-center justify-center'>
          {currentImage.isVideo ? (
            <div className='relative'>
              <video
                src={currentImage.src}
                className={cn(
                  'max-w-full max-h-screen object-contain transition-transform duration-300',
                  isZoomed && 'scale-150 cursor-zoom-out'
                )}
                controls={showControls}
                autoPlay={isPlaying}
                onClick={() => setIsZoomed(!isZoomed)}
              />

              {/* Video Play Button */}
              {!showControls && (
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors'
                >
                  {isPlaying ? (
                    <IoPause className='w-8 h-8' />
                  ) : (
                    <IoPlay className='w-8 h-8 ml-1' />
                  )}
                </button>
              )}
            </div>
          ) : (
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className={cn(
                'max-w-full max-h-screen object-contain transition-transform duration-300 cursor-zoom-in',
                isZoomed && 'scale-150 cursor-zoom-out'
              )}
              onClick={() => setIsZoomed(!isZoomed)}
              priority
            />
          )}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className='absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4'>
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => {
                  const diff = index - currentIndex;
                  if (diff > 0) {
                    for (let i = 0; i < diff; i++) onNext();
                  } else if (diff < 0) {
                    for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                  }
                }}
                className={cn(
                  'relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all',
                  index === currentIndex
                    ? 'border-white opacity-100 scale-110'
                    : 'border-transparent opacity-60 hover:opacity-80'
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={64}
                  height={64}
                  className='w-full h-full object-cover'
                />
              </button>
            ))}
          </div>
        )}

        {/* Keyboard Shortcuts Help */}
        <div className='absolute bottom-4 right-4 text-white/60 text-xs space-y-1'>
          <div>← → Navigate</div>
          <div>Esc Close</div>
          <div>Z Zoom</div>
          {currentImage.isVideo && <div>Space Play/Pause</div>}
        </div>
    </div>
  );
}
