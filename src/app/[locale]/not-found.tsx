import Link from 'next/link';
import { IoHome, IoCall, IoSearch, IoArrowBack } from 'react-icons/io5';
import { CONTACT_INFO, NAVIGATION_ITEMS } from '@/constants';

interface PageProps {
  params: {
    locale: string;
  };
}

export default function NotFoundPage({ params }: PageProps) {
  const { locale } = params;
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div>
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-primary-200 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center">
                <IoSearch className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              We're sorry, but the page you're looking for seems to have sailed away. 
              Don't worry, there are plenty of other beautiful destinations to explore at 
              The Crescent Beach Hotel.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              <IoHome className="w-5 h-5" />
              Back to Homepage
            </Link>
            
            <Link
              href="#"
              onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined') window.history.back(); }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              <IoArrowBack className="w-5 h-5" />
              Go Back
            </Link>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors font-medium"
            >
              <IoCall className="w-5 h-5" />
              Call for Help
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Popular Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {NAVIGATION_ITEMS.slice(0, 6).map((item, index) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block p-4 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors group"
                  >
                    <div className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                      {item.key.split('.')[1]?.charAt(0).toUpperCase() + item.key.split('.')[1]?.slice(1) || 'Home'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {getPageDescription(item.key)}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
            <p className="text-white/90 mb-6">
              Our friendly staff is available 24/7 to help you find what you're looking for
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IoCall className="w-6 h-6" />
                </div>
                <div className="font-semibold">Call Us</div>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-white/90 hover:text-white">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IoCall className="w-6 h-6" />
                </div>
                <div className="font-semibold">Email Us</div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white/90 hover:text-white">
                  {CONTACT_INFO.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IoCall className="w-6 h-6" />
                </div>
                <div className="font-semibold">Visit Us</div>
                <div className="text-white/90">
                  {CONTACT_INFO.address.street}<br />
                  {CONTACT_INFO.address.city}
                </div>
              </div>
            </div>
          </div>

          {/* Search Suggestions */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">
              You might have been looking for:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Room Reservations',
                'Dining Options',
                'Spa Services',
                'Event Planning',
                'Beach Access',
                'Hotel Amenities'
              ].map((suggestion, index) => (
                <span
                  key={suggestion}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 cursor-pointer transition-colors"
                >
                  {suggestion}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get page descriptions
function getPageDescription(key: string): string {
  const descriptions: Record<string, string> = {
    'common.home': 'Discover luxury beachfront accommodations',
    'common.rooms': 'Explore our elegant rooms and suites',
    'common.dining': 'Experience world-class culinary delights',
    'common.amenities': 'Enjoy premium facilities and services',
    'common.conferences': 'Host successful events and meetings',
    'common.gallery': 'View stunning photos and videos',
    'common.contact': 'Get in touch with our team'
  };
  return descriptions[key] || 'Learn more about our services';
}