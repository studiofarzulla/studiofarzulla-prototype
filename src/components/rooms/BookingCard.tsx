'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  IoCalendarOutline,
  IoPeopleOutline,
  IoTimeOutline,
  IoCheckmarkCircleOutline,
  IoWarningOutline,
  IoHeartOutline,
  IoShareOutline,
  IoCallOutline,
  IoMailOutline
} from 'react-icons/io5';

interface BookingCardProps {
  roomId: string;
  roomName: string;
  basePrice: number;
  availability: 'available' | 'limited' | 'unavailable';
  className?: string;
}

export default function BookingCard({ 
  roomId, 
  roomName, 
  basePrice, 
  availability,
  className = '' 
}: BookingCardProps) {
  const t = useTranslations('rooms');
  const tCommon = useTranslations('common');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [children, setChildren] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleQuickBooking = async () => {
    setIsBooking(true);
    // Simulate booking API call
    setTimeout(() => {
      setIsBooking(false);
      // Redirect to booking confirmation or payment
      window.location.href = `/booking/confirm?room=${roomId}&checkin=${checkIn}&checkout=${checkOut}&guests=${guests}`;
    }, 2000);
  };

  const handleContact = () => {
    setShowContactForm(!showContactForm);
  };

  const getAvailabilityStatus = () => {
    switch (availability) {
      case 'available':
        return {
          color: 'text-green-600',
          bgColor: 'bg-green-50 border-green-200',
          icon: <IoCheckmarkCircleOutline className="w-5 h-5" />,
          text: 'Available'
        };
      case 'limited':
        return {
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50 border-yellow-200',
          icon: <IoWarningOutline className="w-5 h-5" />,
          text: 'Limited Availability'
        };
      case 'unavailable':
        return {
          color: 'text-red-600',
          bgColor: 'bg-red-50 border-red-200',
          icon: <IoWarningOutline className="w-5 h-5" />,
          text: 'Fully Booked'
        };
    }
  };

  const status = getAvailabilityStatus();

  const isFormValid = checkIn && checkOut && guests > 0;
  const isBookingDisabled = !isFormValid || availability === 'unavailable' || isBooking;

  return (
    <div className={`bg-white rounded-2xl shadow-soft p-6 sticky top-24 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{t('book_this_room')}</h3>
          <p className="text-sm text-gray-500">{roomName}</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
            <IoHeartOutline className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
            <IoShareOutline className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Price Display */}
      <div className="text-center mb-6 p-4 bg-primary-50 rounded-xl border border-primary-200">
        <div className="text-3xl font-bold text-primary-600">
          ${basePrice}
        </div>
        <div className="text-sm text-gray-600">{t('per_night')}</div>
      </div>

      {/* Availability Status */}
      <div className={`flex items-center justify-center p-3 rounded-lg border mb-6 ${status.bgColor}`}>
        <div className={`flex items-center ${status.color}`}>
          {status.icon}
          <span className="ml-2 font-medium">{status.text}</span>
        </div>
      </div>

      {/* Booking Form */}
      <div className="space-y-4 mb-6">
        {/* Check-in & Check-out */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {tCommon('check_in')}
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors pl-10"
              />
              <IoCalendarOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {tCommon('check_out')}
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors pl-10"
              />
              <IoCalendarOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Guests */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adults
            </label>
            <div className="relative">
              <select
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors pl-10 appearance-none"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <IoPeopleOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Children
            </label>
            <div className="relative">
              <select
                value={children}
                onChange={(e) => setChildren(parseInt(e.target.value))}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors pl-10 appearance-none"
              >
                {[0, 1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <IoPeopleOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Booking Summary */}
      {isFormValid && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-gray-50 rounded-lg p-4 mb-6"
        >
          <h4 className="font-medium text-gray-900 mb-3">Booking Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Dates</span>
              <span>{checkIn} → {checkOut}</span>
            </div>
            <div className="flex justify-between">
              <span>Guests</span>
              <span>{guests} adults {children > 0 && `+ ${children} children`}</span>
            </div>
            {(() => {
              const nights = checkIn && checkOut ? 
                Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 0;
              if (nights > 0) {
                return (
                  <>
                    <div className="flex justify-between">
                      <span>Nights</span>
                      <span>{nights}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total</span>
                      <span>${basePrice * nights}</span>
                    </div>
                  </>
                );
              }
            })()}
          </div>
        </motion.div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleQuickBooking}
          disabled={isBookingDisabled}
          className={`w-full py-4 rounded-xl font-semibold transition-all ${
            isBookingDisabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-medium'
          }`}
        >
          {isBooking ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
              Processing...
            </div>
          ) : availability === 'unavailable' ? (
            'Fully Booked'
          ) : (
            tCommon('book_now')
          )}
        </button>

        <button
          onClick={handleContact}
          className="w-full py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-medium hover:bg-primary-50 transition-colors"
        >
          Contact for Availability
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <IoCallOutline className="w-4 h-4 mr-1" />
            Call
          </button>
          <button className="flex items-center justify-center py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <IoMailOutline className="w-4 h-4 mr-1" />
            Email
          </button>
        </div>
      </div>

      {/* Contact Form */}
      {showContactForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
        >
          <h4 className="font-medium text-blue-900 mb-3">Quick Contact</h4>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-blue-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border border-blue-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <textarea
              placeholder="Message or special requests..."
              rows={3}
              className="w-full p-2 border border-blue-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            ></textarea>
            <button className="w-full bg-blue-600 text-white py-2 rounded font-medium text-sm hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </div>
        </motion.div>
      )}

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="space-y-3 text-xs text-gray-500">
          <div className="flex items-center">
            <IoTimeOutline className="w-3 h-3 mr-1" />
            <span>Free cancellation up to 24 hours</span>
          </div>
          <div className="flex items-center">
            <IoCheckmarkCircleOutline className="w-3 h-3 mr-1" />
            <span>Instant confirmation</span>
          </div>
          <div className="flex items-center">
            <IoWarningOutline className="w-3 h-3 mr-1" />
            <span>Prices include taxes and fees</span>
          </div>
        </div>
      </div>
    </div>
  );
}