'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  IoTrendingDownOutline,
  IoTrendingUpOutline,
  IoCalendarOutline,
  IoInformationCircleOutline,
  IoStarOutline,
  IoFlashOutline,
  IoTimeOutline,
} from 'react-icons/io5';

interface SeasonalPricing {
  season: 'low' | 'mid' | 'high' | 'peak';
  multiplier: number;
  dates: string;
  description: string;
}

interface SpecialOffer {
  id: string;
  title: string;
  discount: number;
  validUntil: string;
  description: string;
  conditions: string[];
}

interface PriceDisplayProps {
  basePrice: number;
  roomType: 'standard' | 'deluxe' | 'suite' | 'family' | 'corporate';
  viewType: 'sea' | 'garden' | 'pool' | 'city';
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  className?: string;
}

export default function PriceDisplay({
  basePrice,
  roomType,
  viewType,
  checkIn,
  checkOut,
  guests = 1,
  className = '',
}: PriceDisplayProps) {
  const t = useTranslations('rooms');
  const [selectedSeason, setSelectedSeason] = useState<
    'low' | 'mid' | 'high' | 'peak'
  >('mid');
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [availableOffers, setAvailableOffers] = useState<SpecialOffer[]>([]);

  const seasonalPricing: SeasonalPricing[] = [
    {
      season: 'low',
      multiplier: 0.7,
      dates: 'Nov - Feb',
      description: 'Off-season rates with maximum savings',
    },
    {
      season: 'mid',
      multiplier: 1.0,
      dates: 'Mar - Apr, Oct',
      description: 'Regular season standard pricing',
    },
    {
      season: 'high',
      multiplier: 1.3,
      dates: 'May - Jun, Sep',
      description: 'Popular season with premium rates',
    },
    {
      season: 'peak',
      multiplier: 1.6,
      dates: 'Jul - Aug',
      description: 'Peak summer season maximum rates',
    },
  ];

  useEffect(() => {
    const specialOffers: SpecialOffer[] = [
      {
        id: 'early-bird',
        title: 'Early Bird Discount',
        discount: 15,
        validUntil: '2024-12-31',
        description: 'Book 30 days in advance',
        conditions: [
          'Minimum 3 nights',
          'Non-refundable',
          'Valid for standard rooms',
        ],
      },
      {
        id: 'extended-stay',
        title: 'Extended Stay',
        discount: 20,
        validUntil: '2024-12-31',
        description: 'Stay 7+ nights and save',
        conditions: [
          'Minimum 7 nights',
          'All room types',
          'Flexible cancellation',
        ],
      },
      {
        id: 'corporate-rate',
        title: 'Corporate Partnership',
        discount: 25,
        validUntil: '2024-12-31',
        description: 'Special rates for oil companies',
        conditions: [
          'Corporate verification required',
          'Bulk booking discounts',
          'Saipem & BP preferred rates',
        ],
      },
    ];

    // Filter offers based on room type and other conditions
    const filtered = specialOffers.filter(offer => {
      if (offer.id === 'corporate-rate' && roomType !== 'corporate')
        return false;
      if (offer.id === 'extended-stay' && (!checkIn || !checkOut)) return true; // Always show for demo
      return true;
    });
    setAvailableOffers(filtered);
  }, [roomType, checkIn, checkOut]);

  const getCurrentPricing = () => {
    const season = seasonalPricing.find(s => s.season === selectedSeason)!;
    return season;
  };

  const calculateViewSupplement = () => {
    switch (viewType) {
      case 'sea':
        return basePrice * 0.2;
      case 'pool':
        return basePrice * 0.1;
      case 'garden':
        return 0;
      default:
        return -basePrice * 0.05;
    }
  };

  const calculateRoomTypeSupplement = () => {
    switch (roomType) {
      case 'deluxe':
        return basePrice * 0.3;
      case 'suite':
        return basePrice * 0.8;
      case 'family':
        return basePrice * 0.4;
      case 'corporate':
        return basePrice * 1.2;
      default:
        return 0;
    }
  };

  const getCurrentPrice = () => {
    const pricing = getCurrentPricing();
    const viewSupplement = calculateViewSupplement();
    const roomTypeSupplement = calculateRoomTypeSupplement();

    return (
      (basePrice + viewSupplement + roomTypeSupplement) * pricing.multiplier
    );
  };

  const getOriginalPrice = () => {
    const viewSupplement = calculateViewSupplement();
    const roomTypeSupplement = calculateRoomTypeSupplement();
    return basePrice + viewSupplement + roomTypeSupplement;
  };

  const getBestOffer = () => {
    return availableOffers.reduce(
      (best, current) => (current.discount > best.discount ? current : best),
      availableOffers[0]
    );
  };

  const getPriceWithOffer = (offer: SpecialOffer) => {
    const currentPrice = getCurrentPrice();
    return currentPrice * (1 - offer.discount / 100);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getSeasonColor = (season: string) => {
    switch (season) {
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'mid':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'peak':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const bestOffer = getBestOffer();

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Main Price Display */}
      <div className='bg-white rounded-2xl shadow-soft p-6 border border-gray-200'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-semibold text-gray-900'>Room Pricing</h3>
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className='text-sm text-primary-600 hover:text-primary-700 flex items-center'
          >
            <IoInformationCircleOutline className='w-4 h-4 mr-1' />
            Price Breakdown
          </button>
        </div>

        {/* Current Price */}
        <div className='text-center mb-6'>
          <div className='text-3xl font-bold text-primary-600'>
            {formatPrice(getCurrentPrice())}
          </div>
          <div className='text-sm text-gray-500'>{t('per_night')}</div>

          {selectedSeason !== 'mid' && (
            <div className='flex items-center justify-center mt-2'>
              {getCurrentPricing().multiplier < 1 ? (
                <IoTrendingDownOutline className='w-4 h-4 text-green-600 mr-1' />
              ) : (
                <IoTrendingUpOutline className='w-4 h-4 text-red-600 mr-1' />
              )}
              <span
                className={`text-sm ${getCurrentPricing().multiplier < 1 ? 'text-green-600' : 'text-red-600'}`}
              >
                {getCurrentPricing().multiplier < 1
                  ? 'Seasonal Discount'
                  : 'Peak Season'}
              </span>
            </div>
          )}
        </div>

        {/* Seasonal Selector */}
        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-700 mb-3'>
            <IoCalendarOutline className='inline w-4 h-4 mr-1' />
            Select Season
          </label>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {seasonalPricing.map(season => (
              <button
                key={season.season}
                onClick={() => setSelectedSeason(season.season)}
                className={`p-3 rounded-lg border-2 text-sm transition-all ${
                  selectedSeason === season.season
                    ? getSeasonColor(season.season)
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className='font-medium capitalize'>{season.season}</div>
                <div className='text-xs opacity-75'>{season.dates}</div>
              </button>
            ))}
          </div>
          <p className='text-xs text-gray-500 mt-2'>
            {getCurrentPricing().description}
          </p>
        </div>

        {/* Price Breakdown */}
        {showBreakdown && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className='bg-gray-50 rounded-lg p-4 mb-6'
          >
            <h4 className='font-medium text-gray-900 mb-3'>Price Breakdown</h4>
            <div className='space-y-2 text-sm'>
              <div className='flex justify-between'>
                <span>Base Price</span>
                <span>{formatPrice(basePrice)}</span>
              </div>
              {calculateRoomTypeSupplement() > 0 && (
                <div className='flex justify-between'>
                  <span>Room Type Supplement ({roomType})</span>
                  <span>+{formatPrice(calculateRoomTypeSupplement())}</span>
                </div>
              )}
              {calculateViewSupplement() !== 0 && (
                <div className='flex justify-between'>
                  <span>View Supplement ({viewType})</span>
                  <span
                    className={
                      calculateViewSupplement() > 0 ? '' : 'text-green-600'
                    }
                  >
                    {calculateViewSupplement() > 0 ? '+' : ''}
                    {formatPrice(calculateViewSupplement())}
                  </span>
                </div>
              )}
              <div className='flex justify-between border-t pt-2'>
                <span>Subtotal</span>
                <span>{formatPrice(getOriginalPrice())}</span>
              </div>
              <div className='flex justify-between'>
                <span>Season Multiplier ({getCurrentPricing().season})</span>
                <span
                  className={
                    getCurrentPricing().multiplier > 1
                      ? 'text-red-600'
                      : getCurrentPricing().multiplier < 1
                        ? 'text-green-600'
                        : ''
                  }
                >
                  ×{getCurrentPricing().multiplier}
                </span>
              </div>
              <div className='flex justify-between border-t pt-2 font-semibold'>
                <span>Total</span>
                <span>{formatPrice(getCurrentPrice())}</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Special Offers */}
      {availableOffers.length > 0 && (
        <div className='bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-6 border border-accent-200'>
          <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center'>
            <IoFlashOutline className='w-5 h-5 text-accent-600 mr-2' />
            {t('special_offers')}
          </h3>

          <div className='space-y-4'>
            {availableOffers.map(offer => (
              <div
                key={offer.id}
                className='bg-white rounded-lg p-4 border border-accent-200'
              >
                <div className='flex items-center justify-between mb-2'>
                  <div className='flex items-center'>
                    <div className='bg-accent-600 text-white px-2 py-1 rounded text-sm font-medium'>
                      -{offer.discount}%
                    </div>
                    <h4 className='font-semibold text-gray-900 ml-3'>
                      {offer.title}
                    </h4>
                  </div>
                  <div className='text-right'>
                    <div className='text-lg font-bold text-accent-600'>
                      {formatPrice(getPriceWithOffer(offer))}
                    </div>
                    <div className='text-xs text-gray-500 line-through'>
                      {formatPrice(getCurrentPrice())}
                    </div>
                  </div>
                </div>

                <p className='text-sm text-gray-600 mb-3'>
                  {offer.description}
                </p>

                <div className='space-y-1'>
                  {offer.conditions.slice(0, 2).map((condition, idx) => (
                    <div
                      key={idx}
                      className='text-xs text-gray-500 flex items-center'
                    >
                      <div className='w-1 h-1 bg-gray-400 rounded-full mr-2'></div>
                      {condition}
                    </div>
                  ))}
                  {offer.conditions.length > 2 && (
                    <div className='text-xs text-gray-400'>
                      +{offer.conditions.length - 2} more conditions
                    </div>
                  )}
                </div>

                <div className='flex items-center justify-between mt-3 pt-3 border-t border-gray-100'>
                  <div className='flex items-center text-xs text-gray-500'>
                    <IoTimeOutline className='w-3 h-3 mr-1' />
                    Valid until {offer.validUntil}
                  </div>
                  <button className='bg-accent-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-accent-700 transition-colors'>
                    Apply Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Long-term Stay Calculator */}
      {roomType !== 'corporate' && (
        <div className='bg-white rounded-xl p-6 border border-gray-200'>
          <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center'>
            <IoCalendarOutline className='w-5 h-5 text-primary-600 mr-2' />
            Extended Stay Savings
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {[
              { nights: 3, discount: 5, label: 'Weekend Stay' },
              { nights: 7, discount: 15, label: 'Weekly Stay' },
              { nights: 30, discount: 30, label: 'Monthly Stay' },
            ].map(stay => (
              <div
                key={stay.nights}
                className='text-center p-4 bg-primary-50 rounded-lg border border-primary-200'
              >
                <div className='text-2xl font-bold text-primary-600'>
                  {stay.nights}
                </div>
                <div className='text-sm text-gray-600 mb-2'>{stay.label}</div>
                <div className='text-lg font-semibold text-green-600'>
                  -{stay.discount}%
                </div>
                <div className='text-sm text-gray-500'>
                  {formatPrice(
                    getCurrentPrice() * stay.nights * (1 - stay.discount / 100)
                  )}
                </div>
                <div className='text-xs text-gray-400 line-through'>
                  {formatPrice(getCurrentPrice() * stay.nights)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Corporate Rates Notice */}
      {roomType === 'corporate' && (
        <div className='bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-blue-200'>
          <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center'>
            <IoStarOutline className='w-5 h-5 text-blue-600 mr-2' />
            {t('oil_company_rates')}
          </h3>
          <p className='text-gray-600 mb-4'>
            Special partnership rates available for Saipem, BP, and other oil
            industry partners. Contact our corporate sales team for customized
            packages.
          </p>
          <div className='flex space-x-4'>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors'>
              Contact Corporate Sales
            </button>
            <button className='border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors'>
              Request Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
