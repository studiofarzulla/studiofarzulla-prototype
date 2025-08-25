'use client';

import { IoArrowBack } from 'react-icons/io5';

interface BackButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function BackButton({ className = '', children }: BackButtonProps) {
  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium ${className}`}
    >
      {children || (
        <>
          <IoArrowBack className='w-5 h-5' />
          Go Back
        </>
      )}
    </button>
  );
}
