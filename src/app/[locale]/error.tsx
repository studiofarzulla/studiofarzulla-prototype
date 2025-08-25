'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50 px-4'>
      <div className='text-center max-w-md'>
        <div className='mb-8'>
          <div className='w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6'>
            <svg
              className='w-12 h-12 text-red-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
              />
            </svg>
          </div>

          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            Something went wrong!
          </h1>
          <p className='text-gray-600 mb-6'>
            We apologize for the inconvenience. This issue has been logged and
            our team will look into it.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <details className='text-left bg-red-50 border border-red-200 rounded-lg p-4 mb-6'>
              <summary className='text-sm font-semibold text-red-800 cursor-pointer mb-2'>
                Error Details (Development Only)
              </summary>
              <code className='text-xs text-red-700 whitespace-pre-wrap block'>
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </code>
              {error.digest && (
                <p className='text-xs text-red-600 mt-2'>
                  Error ID: {error.digest}
                </p>
              )}
            </details>
          )}
        </div>

        <div className='space-y-4'>
          <Button onClick={reset} className='w-full'>
            Try again
          </Button>
          <Button
            variant='outline'
            onClick={() => (window.location.href = '/')}
            className='w-full'
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
