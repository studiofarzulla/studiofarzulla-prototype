'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/LocaleProvider';

import { IoCamera, IoPlay, IoDownload, IoImage } from 'react-icons/io5';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImageLightbox from '@/components/gallery/ImageLightbox';
import InstagramWidget from '@/components/gallery/InstagramWidget';
import VideoGallery from '@/components/gallery/VideoGallery';

// Mock gallery data - In production, this would come from a CMS or API
const GALLERY_IMAGES = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    alt: 'Hotel exterior with beautiful architecture',
    category: 'hotel',
    title: 'Grand Hotel Entrance',
    description:
      'The impressive entrance of The Crescent Beach Hotel welcomes guests with luxury and elegance.',
    tags: ['architecture', 'entrance', 'luxury', 'exterior'],
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1578774204375-39ab30d2ebb1?w=800',
    alt: 'Luxury hotel room with ocean view',
    category: 'rooms',
    title: 'Ocean View Suite',
    description:
      'Spacious suite with panoramic views of the Caspian Sea and modern amenities.',
    tags: ['suite', 'ocean view', 'luxury', 'bedroom'],
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1544963650-2bf9e2c36fb4?w=800',
    alt: 'Fine dining restaurant interior',
    category: 'dining',
    title: 'The Terrace Restaurant',
    description:
      'Elegant dining experience with breathtaking sunset views over the sea.',
    tags: ['restaurant', 'fine dining', 'terrace', 'sunset'],
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    alt: 'Infinity pool overlooking the sea',
    category: 'amenities',
    title: 'Infinity Pool',
    description:
      'Our stunning infinity pool creates the illusion of water extending to the horizon.',
    tags: ['pool', 'infinity', 'swimming', 'relaxation'],
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800',
    alt: 'Beach wedding ceremony setup',
    category: 'events',
    title: 'Beach Wedding',
    description:
      'Create unforgettable memories with a romantic beachfront wedding ceremony.',
    tags: ['wedding', 'beach', 'ceremony', 'romantic'],
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    alt: 'Spa treatment room with ocean view',
    category: 'amenities',
    title: 'Spa Sanctuary',
    description:
      'Relax and rejuvenate in our tranquil spa with panoramic sea views.',
    tags: ['spa', 'wellness', 'relaxation', 'treatment'],
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    alt: 'Private beach with crystal clear water',
    category: 'beach',
    title: 'Private Beach',
    description:
      'Exclusive access to pristine beach with crystal clear Caspian Sea waters.',
    tags: ['beach', 'private', 'crystal clear', 'exclusive'],
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800',
    alt: 'Hotel lobby with modern design',
    category: 'hotel',
    title: 'Luxury Lobby',
    description:
      'Grand lobby featuring contemporary design and traditional Azerbaijani elements.',
    tags: ['lobby', 'interior', 'design', 'luxury'],
  },
];

// Metadata will be handled by parent layout

export default function GalleryPageContent() {
  const t = useTranslations('common');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos' | 'instagram'>(
    'photos'
  );

  const handleImageClick = (image: any, index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='relative h-96 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-500' />
        <div className='absolute inset-0 bg-black/20' />
        <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
          <div>
            <h1 className='heading-primary text-white mb-4'>{t('gallery')}</h1>
            <p className='text-xl mb-6 text-white/90'>
              Discover the beauty and luxury of The Crescent Beach Hotel through
              our curated collection of photos and videos
            </p>
            <div className='flex items-center justify-center gap-6 text-white/80'>
              <div className='flex items-center gap-2'>
                <IoCamera className='w-5 h-5' />
                <span>{GALLERY_IMAGES.length}+ Photos</span>
              </div>
              <div className='flex items-center gap-2'>
                <IoPlay className='w-5 h-5' />
                <span>Video Tours</span>
              </div>
              <div className='flex items-center gap-2'>
                <IoImage className='w-5 h-5' />
                <span>360° Views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          {/* Gallery Navigation Tabs */}
          <div className='flex justify-center mb-12'>
            <div className='flex bg-white rounded-xl shadow-lg p-2 gap-1'>
              <button
                onClick={() => setActiveTab('photos')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'photos'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <IoCamera className='w-5 h-5' />
                Photo Gallery
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'videos'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <IoPlay className='w-5 h-5' />
                Video Gallery
              </button>
              <button
                onClick={() => setActiveTab('instagram')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'instagram'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <IoImage className='w-5 h-5' />
                Instagram Feed
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className='space-y-12'>
            {activeTab === 'photos' && (
              <div key='photos'>
                <GalleryGrid
                  images={GALLERY_IMAGES}
                  onImageClick={handleImageClick}
                />
              </div>
            )}

            {activeTab === 'videos' && (
              <div key='videos'>
                <VideoGallery videos={[]} />
              </div>
            )}

            {activeTab === 'instagram' && (
              <div
                key='instagram'
                className='max-w-4xl mx-auto'
              >
                <InstagramWidget
                  username='crescentbeachhotel'
                  hashtag='CrescentBeachHotel'
                />
              </div>
            )}
          </div>

          {/* Press & Media Section */}
          <div className='mt-16'>
            <div className='bg-white rounded-2xl shadow-lg p-8 text-center'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Press & Media
              </h2>
              <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                High-resolution images available for press and media use.
                Contact our marketing team for access to our complete media
                library.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium'>
                  <IoDownload className='w-5 h-5' />
                  Download Press Kit
                </button>
                <button className='flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium'>
                  <IoCamera className='w-5 h-5' />
                  Request Media Assets
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImageIndex !== null && (
        <ImageLightbox
          images={GALLERY_IMAGES}
          currentIndex={selectedImageIndex}
          isOpen={isLightboxOpen}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
        />
      )}
    </div>
  );
}
