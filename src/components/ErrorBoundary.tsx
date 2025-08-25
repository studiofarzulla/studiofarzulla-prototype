'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
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
              <h1 className='text-2xl font-bold text-gray-900 mb-4'>
                Oops! Something went wrong
              </h1>
              <p className='text-gray-600 mb-6'>
                We apologize for the inconvenience. Our team has been notified
                and is working on a fix.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className='text-left bg-red-50 border border-red-200 rounded-lg p-4 mb-6'>
                  <h3 className='text-sm font-semibold text-red-800 mb-2'>
                    Error Details (Development Only):
                  </h3>
                  <code className='text-xs text-red-700 whitespace-pre-wrap'>
                    {this.state.error.stack}
                  </code>
                </div>
              )}
            </div>
            <div className='space-y-4'>
              <Button onClick={this.handleRetry} className='w-full'>
                Try Again
              </Button>
              <Button
                variant='outline'
                onClick={() => (window.location.href = '/')}
                className='w-full'
              >
                Go to Homepage
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Simpler error boundary for smaller components
export function SimpleErrorBoundary({ children, fallback }: Props) {
  return (
    <ErrorBoundary
      fallback={
        fallback || (
          <div className='text-red-500 text-sm'>Something went wrong</div>
        )
      }
    >
      {children}
    </ErrorBoundary>
  );
}
