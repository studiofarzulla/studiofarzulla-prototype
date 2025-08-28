'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { X, ChevronLeft, ChevronRight, Grid3x3, Maximize2 } from 'lucide-react';

const galleryCategories = [
  'All',
  'Hotel Views',
  'Rooms',
  'Beach',
  'Dining',
  'Events',
  'Spa & Wellness',
];

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
    category: 'Hotel Views',
    title: 'Sunset View from Terrace',
    description: 'Breathtaking sunset over the Caspian Sea',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    category: 'Hotel Views',
    title: 'Hotel Exterior',
    description: 'Modern architecture meets coastal elegance',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
    category: 'Rooms',
    title: 'Presidential Suite',
    description: 'Luxury accommodation with panoramic views',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
    category: 'Rooms',
    title: 'Deluxe Room Interior',
    description: 'Elegant and comfortable design',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800',
    category: 'Beach',
    title: 'Private Beach',
    description: '800m of pristine coastline',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800',
    category: 'Beach',
    title: 'Beach Cabanas',
    description: 'Luxury beachfront relaxation',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    category: 'Dining',
    title: 'Fine Dining Experience',
    description: 'The Terrace restaurant',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    category: 'Dining',
    title: 'Restaurant Interior',
    description: 'Elegant dining atmosphere',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
    category: 'Events',
    title: 'Wedding Reception',
    description: 'Beachfront celebration venue',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
    category: 'Events',
    title: 'Conference Hall',
    description: 'State-of-the-art meeting facilities',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800',
    category: 'Spa & Wellness',
    title: 'Spa Treatment Room',
    description: 'Tranquil wellness sanctuary',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=800',
    category: 'Spa & Wellness',
    title: 'Infinity Pool',
    description: 'Heated pool with sea views',
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
    category: 'Hotel Views',
    title: 'Lobby Interior',
    description: 'Grand entrance with modern design',
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
    category: 'Hotel Views',
    title: 'Garden Terrace',
    description: 'Landscaped outdoor spaces',
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800',
    category: 'Rooms',
    title: 'Family Suite',
    description: 'Spacious accommodation for families',
  },
];

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: (typeof galleryImages)[0]) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1537572263231-4314a30d444f?w=1920"
            alt="Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="container relative z-10 text-center text-white">
          <h1 className="heading-1 mb-4 drop-shadow-2xl">{t('title')}</h1>
          <p className="mx-auto max-w-3xl text-xl opacity-90 md:text-2xl">{t('subtitle')}</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 border-b bg-white">
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg px-4 py-2 font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`rounded-lg p-2 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                title="Grid View"
              >
                <Grid3x3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`rounded-lg p-2 transition-all ${
                  viewMode === 'masonry'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                title="Masonry View"
              >
                <Maximize2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          {/* Results Count */}
          <p className="mb-6 text-gray-600">Showing {filteredImages.length} images</p>

          {/* Image Grid */}
          <div
            className={`${
              viewMode === 'grid'
                ? 'grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'columns-1 gap-4 md:columns-2 lg:columns-3 xl:columns-4'
            }`}
          >
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`animate-in fade-in slide-in-up group relative cursor-pointer overflow-hidden rounded-lg ${
                  viewMode === 'masonry' ? 'mb-4 break-inside-avoid' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(image)}
              >
                <div
                  className={`relative ${
                    viewMode === 'grid'
                      ? 'h-64'
                      : index % 3 === 0
                        ? 'h-96'
                        : index % 3 === 1
                          ? 'h-72'
                          : 'h-80'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-lg p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 rounded-lg p-2 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-16 rounded-lg p-2 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image Container */}
          <div className="relative mx-auto h-full max-h-[90vh] w-full max-w-7xl p-4">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain"
              sizes="100vw"
            />

            {/* Image Info */}
            <div className="absolute bottom-8 left-8 right-8 rounded-lg bg-black/60 p-4 text-white backdrop-blur-sm">
              <h3 className="mb-1 text-2xl font-semibold">{selectedImage.title}</h3>
              <p className="text-lg opacity-90">{selectedImage.description}</p>
              <span className="mt-2 inline-block rounded-full bg-primary-600 px-3 py-1 text-sm">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Instagram Section */}
      <section className="bg-white py-20">
        <div className="container text-center">
          <h2 className="heading-2 mb-6">Follow Us on Instagram</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Stay connected with the latest updates and exclusive glimpses of our resort
          </p>
          <a
            href="https://instagram.com/crescentbeachhotel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
          >
            @crescentbeachhotel
          </a>
        </div>
      </section>
    </>
  );
}
