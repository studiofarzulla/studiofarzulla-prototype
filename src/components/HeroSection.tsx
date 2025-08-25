'use client';

import { useState, useEffect } from 'react';
import { IoPlay, IoChevronDown } from 'react-icons/io5';
import BookingWidget from './BookingWidget';

interface HeroSlide {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  subtitle: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: '1',
    type: 'image',
    src: '/images/hero/beach-view.jpg',
    title: 'Caspian Sea Paradise',
    subtitle: 'Where luxury meets the endless horizon'
  },
  {
    id: '2',
    type: 'image',
    src: '/images/hero/hotel-exterior.jpg',
    title: 'Architectural Excellence',
    subtitle: 'Nine buildings of pure elegance'
  },
  {
    id: '3',
    type: 'image',
    src: '/images/hero/pool-area.jpg',
    title: 'Infinite Relaxation',
    subtitle: 'Premium pools with breathtaking views'
  },
  {
    id: '4',
    type: 'video',
    src: '/videos/hotel-tour.mp4',
    title: 'Experience The Crescent',
    subtitle: 'A virtual journey through luxury'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          index === currentSlide && (
            <div
              key={slide.id}
              className="absolute inset-0"
            >
                {slide.type === 'image' ? (
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${slide.src})`,
                    }}
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      onPlay={handleVideoPlay}
                      onEnded={handleVideoEnd}
                      poster="/images/hero/video-poster.jpg"
                    >
                      <source src={slide.src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                )}
            </div>
          )
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <div
            key={currentSlide}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight">
              The Crescent Beach Hotel
            </h1>
            
            <div
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-gray-200 mb-4">
                {heroSlides[currentSlide].title}
              </p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            <p
              className="text-base md:text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Experience unparalleled luxury on the pristine shores of the Caspian Sea. 
              Where timeless elegance meets modern comfort across nine magnificent buildings, 
              creating an unforgettable beachfront sanctuary.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Widget */}
      <div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-4xl px-4"
      >
        <BookingWidget />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play Button for Video Slides */}
      {heroSlides[currentSlide].type === 'video' && !isPlaying && (
        <button
          className="absolute inset-0 flex items-center justify-center z-15"
          onClick={() => {
            const video = document.querySelector('video') as HTMLVideoElement;
            video?.play();
          }}
        >
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
            <IoPlay className="w-8 h-8 text-white ml-1" />
          </div>
        </button>
      )}

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs mb-2 tracking-wider uppercase">Scroll</span>
          <IoChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}