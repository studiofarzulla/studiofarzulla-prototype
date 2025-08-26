'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/LocaleProvider';

import { IoCamera, IoPlay, IoDownload, IoImage } from 'react-icons/io5';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImageLightbox from '@/components/gallery/ImageLightbox';
import InstagramWidget from '@/components/gallery/InstagramWidget';
import VideoGallery from '@/components/gallery/VideoGallery';

// Real hotel gallery images
const GALLERY_IMAGES = [
  {
    id: '1',
    src: '/images/hotel/pretty image of hotel.jpg',
    alt: 'The Crescent Beach Hotel exterior view',
    category: 'hotel',
    title: 'Hotel Exterior',
    description:
      'The impressive architecture of The Crescent Beach Hotel & Leisure Resort overlooking the Caspian Sea.',
    tags: ['architecture', 'exterior', 'luxury', 'resort'],
  },
  {
    id: '2',
    src: '/images/hotel/beach.avif',
    alt: 'Pristine beach area of the Crescent Beach Hotel',
    category: 'beach',
    title: 'Caspian Beach',
    description:
      'Our exclusive beach area with crystal clear Caspian Sea waters and pristine sandy shores.',
    tags: ['beach', 'caspian sea', 'waterfront', 'exclusive'],
  },
  {
    id: '3',
    src: '/images/hotel/shade bar.jpg',
    alt: 'Shade Bar overlooking the Caspian Sea',
    category: 'dining',
    title: 'Shade Bar',
    description:
      'Stylish beachfront bar offering refreshing cocktails and stunning sea views.',
    tags: ['bar', 'beachfront', 'cocktails', 'ocean view'],
  },
  {
    id: '4',
    src: '/images/hotel/outside pool.jpg',
    alt: 'Outdoor pool with sea views',
    category: 'amenities',
    title: 'Outdoor Pool Complex',
    description:
      'Multiple outdoor pools including children\'s areas with panoramic Caspian Sea views.',
    tags: ['pool', 'outdoor', 'swimming', 'family'],
  },
  {
    id: '5',
    src: '/images/hotel/outside pool2.jpg',
    alt: 'Resort pool area with loungers',
    category: 'amenities',
    title: 'Pool Lounging Area',
    description:
      'Relaxing poolside lounging areas with comfortable sunbeds and umbrellas.',
    tags: ['pool', 'lounging', 'relaxation', 'sunbathing'],
  },
  {
    id: '6',
    src: '/images/hotel/sauna steam.jpg',
    alt: 'Luxury sauna and steam room facilities',
    category: 'amenities',
    title: 'Sauna & Steam',
    description:
      'Modern sauna and steam room facilities for ultimate relaxation and wellness.',
    tags: ['sauna', 'steam room', 'wellness', 'relaxation'],
  },
  {
    id: '7',
    src: '/images/hotel/dry sauna.jpg',
    alt: 'Traditional dry sauna facilities',
    category: 'amenities',
    title: 'Dry Sauna',
    description:
      'Traditional Finnish-style dry sauna for detoxification and relaxation.',
    tags: ['sauna', 'dry sauna', 'wellness', 'detox'],
  },
  {
    id: '8',
    src: '/images/hotel/leisure centre reception.jpg',
    alt: 'Leisure centre reception area',
    category: 'hotel',
    title: 'Leisure Centre',
    description:
      'Modern leisure centre reception with friendly staff ready to assist with all activities.',
    tags: ['leisure', 'reception', 'activities', 'service'],
  },
  {
    id: '9',
    src: '/images/hotel/food1.jpg',
    alt: 'Gourmet cuisine at Crescent Beach Hotel',
    category: 'dining',
    title: 'Culinary Excellence',
    description:
      'Exquisite international and local Azerbaijani cuisine prepared by our master chefs.',
    tags: ['food', 'cuisine', 'gourmet', 'dining'],
  },
  {
    id: '10',
    src: '/images/hotel/food2.jpg',
    alt: 'Fine dining presentation',
    category: 'dining',
    title: 'Fine Dining Experience',
    description:
      'Beautifully presented dishes combining traditional flavors with modern techniques.',
    tags: ['food', 'fine dining', 'restaurant', 'gourmet'],
  },
  {
    id: '11',
    src: '/images/hotel/food3.jpg',
    alt: 'Fresh seafood and local specialties',
    category: 'dining',
    title: 'Fresh Seafood',
    description:
      'Daily fresh seafood from the Caspian Sea and local market specialties.',
    tags: ['seafood', 'fresh', 'caspian', 'local'],
  },
  {
    id: '12',
    src: '/images/hotel/outside pool3.jpg',
    alt: 'Evening pool atmosphere',
    category: 'amenities',
    title: 'Evening Pool Scene',
    description:
      'Magical evening atmosphere at our illuminated pool complex.',
    tags: ['pool', 'evening', 'atmosphere', 'lighting'],
  },
  {
    id: '13',
    src: '/images/hotel/beach area.jpg',
    alt: 'Beach recreational area',
    category: 'beach',
    title: 'Beach Activities',
    description:
      'Wide range of beach activities and water sports available for all ages.',
    tags: ['beach', 'activities', 'recreation', 'sports'],
  },
  {
    id: '14',
    src: '/images/hotel/menu1.jpg',
    alt: 'Restaurant menu selections',
    category: 'dining',
    title: 'Menu Selections',
    description:
      'Diverse menu offerings featuring international and Azerbaijani dishes.',
    tags: ['menu', 'dining', 'choices', 'restaurant'],
  },
  {
    id: '15',
    src: '/images/hotel/menu2.jpg',
    alt: 'Specialty drinks and beverages menu',
    category: 'dining',
    title: 'Beverage Selection',
    description:
      'Extensive beverage menu including cocktails, wines, and local specialties.',
    tags: ['drinks', 'beverages', 'cocktails', 'bar'],
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
                <span>{GALLERY_IMAGES.length} Photos</span>
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
                  username='crescent_beach_hotel'
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
