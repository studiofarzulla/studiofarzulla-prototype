'use client';

import { useState, useEffect } from 'react';
import { IoPlay, IoChevronDown, IoStarSharp } from 'react-icons/io5';
import { MdWifi, MdPool, MdRestaurant, MdSpa } from 'react-icons/md';
import BookingWidget from './BookingWidget';

interface HeroSlide {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  subtitle: string;
  category: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: '1',
    type: 'image',
    src: '/images/hotel/beach area.jpg',
    title: 'Caspian Sea Paradise',
    subtitle: 'Private beach access with pristine sandy shores',
    category: 'Beach Experience',
  },
  {
    id: '2',
    type: 'image',
    src: '/images/hotel/pretty image of hotel.jpg',
    title: 'Architectural Marvel',
    subtitle: 'Nine magnificent buildings overlooking the Caspian Sea',
    category: 'Hotel Architecture',
  },
  {
    id: '3',
    type: 'image',
    src: '/images/hotel/outside pool.jpg',
    title: 'Infinity Pool Oasis',
    subtitle: 'Stunning outdoor pools with panoramic sea views',
    category: 'Pool & Recreation',
  },
  {
    id: '4',
    type: 'image',
    src: '/images/hotel/shade bar.jpg',
    title: 'Oceanfront Dining',
    subtitle: 'Exquisite cuisine with breathtaking waterfront views',
    category: 'Culinary Excellence',
  },
  {
    id: '5',
    type: 'image',
    src: '/images/hotel/sauna steam.jpg',
    title: 'Wellness Sanctuary',
    subtitle: 'Rejuvenate in our world-class spa facilities',
    category: 'Spa & Wellness',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentSlide(prev => (prev + 1) % heroSlides.length);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  };

  return (
    <section className='relative h-screen overflow-hidden'>
      {/* Background Slides with Enhanced Overlays */}
      <div className='absolute inset-0'>
        {heroSlides.map(
          (slide, index) =>
            index === currentSlide && (
              <div key={slide.id} className='absolute inset-0 transition-opacity duration-1000'>
                <div
                  className='w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[8000ms]'
                  style={{
                    backgroundImage: `url(${slide.src})`,
                  }}
                />
                {/* Azerbaijan Flag Inspired Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-[#00966F]/20 via-[#00B5E2]/10 to-[#E30A17]/15' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />
              </div>
            )
        )}
      </div>

      {/* Animated Background Pattern */}
      <div className='absolute inset-0 z-5'>
        <div className='absolute top-20 right-20 w-32 h-32 border border-white/10 rotate-45 animate-pulse' />
        <div className='absolute bottom-40 left-20 w-24 h-24 border border-[#00B5E2]/20 rotate-12 animate-pulse delay-1000' />
        <div className='absolute top-1/3 left-1/4 w-16 h-16 border border-[#00966F]/20 rotate-45 animate-pulse delay-2000' />
      </div>

      {/* Content */}
      <div className='relative z-10 h-full flex items-center justify-center'>
        <div className='container mx-auto px-4 text-center text-white'>
          <div key={currentSlide} className='max-w-5xl mx-auto animate-fade-in'>
            {/* Category Badge */}
            <div className='mb-6'>
              <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#00966F] to-[#00B5E2] text-white shadow-lg backdrop-blur-sm'>
                <IoStarSharp className='w-4 h-4 mr-2' />
                {heroSlides[currentSlide].category}
              </span>
            </div>

            {/* Main Title */}
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl'>
              The Crescent Beach Hotel
            </h1>

            {/* Subtitle Section */}
            <div className='mb-8'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 drop-shadow-lg'>
                {heroSlides[currentSlide].title}
              </h2>
              <p className='text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* Hotel Features */}
            <div className='flex justify-center items-center space-x-8 mb-12 text-gray-300'>
              <div className='flex items-center space-x-2'>
                <MdWifi className='w-5 h-5 text-[#00B5E2]' />
                <span className='text-sm'>Free WiFi</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MdPool className='w-5 h-5 text-[#00966F]' />
                <span className='text-sm'>Pool Access</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MdRestaurant className='w-5 h-5 text-[#E30A17]' />
                <span className='text-sm'>Fine Dining</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MdSpa className='w-5 h-5 text-[#00B5E2]' />
                <span className='text-sm'>Spa & Wellness</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
              <button className='group relative px-8 py-4 bg-gradient-to-r from-[#00966F] to-[#00B5E2] hover:from-[#00B5E2] hover:to-[#00966F] text-white font-semibold rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden'>
                <span className='relative z-10'>Book Your Stay</span>
                <div className='absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left' />
              </button>
              
              <button className='group px-8 py-4 border-2 border-white/50 hover:border-[#E30A17] text-white hover:text-[#E30A17] font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10'>
                <span className='flex items-center space-x-2'>
                  <IoPlay className='w-4 h-4' />
                  <span>Virtual Tour</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Widget */}
      <div className='absolute bottom-28 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-5xl px-4'>
        <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-2xl'>
          <BookingWidget />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className='absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-[#00966F] backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group'
        aria-label='Previous slide'
      >
        <IoChevronDown className='w-6 h-6 text-white rotate-90 group-hover:scale-110 transition-transform' />
      </button>
      
      <button
        onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
        className='absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-[#00966F] backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group'
        aria-label='Next slide'
      >
        <IoChevronDown className='w-6 h-6 text-white -rotate-90 group-hover:scale-110 transition-transform' />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
        <div className='flex items-center space-x-3 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20'>
          {heroSlides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`group relative transition-all duration-300 ${
                index === currentSlide
                  ? 'scale-125'
                  : 'hover:scale-110'
              }`}
              aria-label={`Go to ${slide.category}`}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-[#00966F] to-[#00B5E2] shadow-lg shadow-[#00966F]/50'
                  : 'bg-white/50 group-hover:bg-white/75'
              }`} />
              
              {/* Tooltip */}
              <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none'>
                <div className='bg-black/80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap'>
                  {slide.category}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20'>
        <div className='flex flex-col items-center'>
          <span className='text-xs mb-2 tracking-wider uppercase opacity-75'>Explore More</span>
          <div className='w-6 h-6 border-2 border-[#00B5E2] rounded-full flex items-center justify-center'>
            <IoChevronDown className='w-3 h-3 text-[#00B5E2]' />
          </div>
        </div>
      </div>
    </section>
  );
}
