'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // WhatsApp number for the hotel (replace with actual number)
  const whatsappNumber = '994123456789'; // Azerbaijan country code
  const defaultMessage = 'Hello! I would like to inquire about The Crescent Beach Hotel.';

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Show tooltip after 10 seconds if user hasn't interacted
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    // Create WhatsApp URL
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 animate-fade-in">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg relative max-w-xs">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-1 right-1 text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="text-sm pr-4">
                Need help? Chat with us on WhatsApp!
              </p>
              <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-gray-900 transform rotate-45"></div>
            </div>
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 group-hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" fill="currentColor" />
        </button>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed {
            bottom: 20px;
            right: 20px;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}