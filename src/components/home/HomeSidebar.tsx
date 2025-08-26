'use client';

import WeatherWidget from '@/components/WeatherWidget';
import { IoCall, IoChatbubbles, IoMail } from 'react-icons/io5';
import { CONTACT_INFO } from '@/constants';
import LocaleLink from '@/lib/locale-link';

export default function HomeSidebar() {
  return (
    <div className="space-y-6">
      {/* Weather Widget */}
      <WeatherWidget />

      {/* Quick Contact */}
      <div className="bg-white rounded-xl shadow-lg p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Contact</h3>
        <div className="space-y-2">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <IoCall className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-gray-600">Call Now</span>
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <IoMail className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-gray-600">Email Us</span>
          </a>
          <button
            onClick={() => {
              const whatsappNumber = CONTACT_INFO.whatsapp.replace('+', '');
              window.open(`https://wa.me/${whatsappNumber}`, '_blank');
            }}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left"
          >
            <IoChatbubbles className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600">WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Special Offer */}
      <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl p-4 text-white">
        <h3 className="font-semibold mb-2">Special Offer</h3>
        <p className="text-sm mb-3 text-white/90">
          Book 3 nights and get 20% off on spa treatments!
        </p>
        <LocaleLink
          href="/rooms"
          className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Book Now →
        </LocaleLink>
      </div>
    </div>
  );
}