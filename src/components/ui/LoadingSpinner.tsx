'use client';


interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LoadingSpinner({
  size = 'md',
  className = '',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-primary-200 border-t-primary-600 rounded-full animate-spin`}
      />
    </div>
  );
}

export function LoadingCard({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`}>
      <div className='p-6 space-y-4'>
        <div className='h-4 bg-gray-300 rounded w-3/4'></div>
        <div className='h-3 bg-gray-300 rounded w-1/2'></div>
        <div className='h-3 bg-gray-300 rounded w-5/6'></div>
      </div>
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='text-center space-y-4'>
        <LoadingSpinner size='lg' />
        <p className='text-gray-600 font-medium'>Loading...</p>
      </div>
    </div>
  );
}
