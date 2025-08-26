'use client';

import { useState } from 'react';
import { IoStar, IoStarHalf, IoStarOutline, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  roomType: string;
  source: 'Booking.com' | 'TripAdvisor' | 'Google' | 'Direct';
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'United Kingdom',
    date: 'December 2024',
    rating: 5,
    title: 'Exceptional Beach Resort Experience',
    content: 'The Crescent Beach Hotel exceeded all expectations. The staff was incredibly welcoming, the beach access was perfect, and the rooms were spacious and clean. The view of the Caspian Sea from our balcony was breathtaking!',
    roomType: 'Deluxe Sea View',
    source: 'Booking.com'
  },
  {
    id: '2',
    name: 'Ahmed Al-Rahman',
    location: 'UAE',
    date: 'November 2024',
    rating: 4.5,
    title: 'Great Family Vacation',
    content: 'Perfect for families! The kids loved the pools and beach activities. The variety of dining options was impressive, especially the seafood at Shade Bar. Only minor issue was the WiFi speed, but who needs internet at such a beautiful location?',
    roomType: 'Family Suite',
    source: 'TripAdvisor'
  },
  {
    id: '3',
    name: 'Elena Petrov',
    location: 'Russia',
    date: 'October 2024',
    rating: 5,
    title: 'Отличный отель на берегу моря',
    content: 'Прекрасное расположение, чистые номера, вежливый персонал. Спа-центр просто великолепен! Обязательно вернемся сюда снова. Рекомендую всем, кто хочет отдохнуть на Каспийском море.',
    roomType: 'Standard Twin',
    source: 'Google'
  },
  {
    id: '4',
    name: 'Maria García',
    location: 'Spain',
    date: 'September 2024',
    rating: 4,
    title: 'Beautiful Resort with Minor Improvements Needed',
    content: 'The location is unbeatable and the beach is pristine. Food quality was good but could have more international options. Staff speaks excellent English. The spa treatments were heavenly!',
    roomType: 'Deluxe Room',
    source: 'Direct'
  },
  {
    id: '5',
    name: 'Kemal Öztürk',
    location: 'Turkey',
    date: 'August 2024',
    rating: 5,
    title: 'Mükemmel Bir Tatil',
    content: 'Bakü\'da harika bir tatil geçirdik. Otel gerçekten lüks ve konforlu. Deniz manzarası muhteşem, yemekler lezzetli. Personel çok yardımsever ve güler yüzlü. Kesinlikle tavsiye ederim!',
    roomType: 'Suite',
    source: 'Booking.com'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoStar key={`full-${i}`} className="w-5 h-5 text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<IoStarHalf key="half" className="w-5 h-5 text-yellow-400" />);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<IoStarOutline key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }
    return stars;
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'Booking.com': return 'bg-blue-100 text-blue-700';
      case 'TripAdvisor': return 'bg-green-100 text-green-700';
      case 'Google': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Guest Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our guests are saying about their experience at The Crescent Beach Hotel
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">{renderStars(4.5)}</div>
            <span className="text-lg font-semibold">4.5/5</span>
            <span className="text-gray-500">({testimonials.length}+ reviews)</span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 relative">
            <Quote className="absolute top-4 right-4 w-12 h-12 text-primary-100" />
            
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {testimonials[currentIndex].title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  {renderStars(testimonials[currentIndex].rating)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSourceColor(testimonials[currentIndex].source)}`}>
                    {testimonials[currentIndex].source}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex items-center justify-between border-t pt-4">
              <div>
                <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].location} • {testimonials[currentIndex].date}
                </p>
                <p className="text-sm text-primary-600 font-medium">
                  Stayed in {testimonials[currentIndex].roomType}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <IoChevronBack className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <IoChevronForward className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Read All Reviews
          </button>
        </div>
      </div>
    </section>
  );
}