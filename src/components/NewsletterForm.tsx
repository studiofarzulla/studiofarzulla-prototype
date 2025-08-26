'use client';

import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error);
      }

      setStatus('success');
      setMessage(data.message);
      setEmail('');

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);

    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="h-6 w-6 text-primary-400" />
        <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
      </div>
      
      <p className="text-gray-300 text-sm mb-4">
        Subscribe to our newsletter for exclusive offers and updates
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/50 transition-all"
            disabled={status === 'loading'}
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
              Subscribing...
            </>
          ) : (
            'Subscribe Now'
          )}
        </button>
      </form>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="mt-3 p-3 bg-green-500/20 border border-green-400/30 rounded-lg flex items-start gap-2">
          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
          <div>
            <p className="text-green-300 text-sm font-medium">Success!</p>
            <p className="text-green-200 text-xs mt-1">{message}</p>
            {message.includes('WELCOME10') && (
              <p className="text-green-300 text-xs mt-2 font-semibold">
                Use code WELCOME10 for 10% off!
              </p>
            )}
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-3 p-3 bg-red-500/20 border border-red-400/30 rounded-lg flex items-start gap-2">
          <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
          <div>
            <p className="text-red-300 text-sm font-medium">Error</p>
            <p className="text-red-200 text-xs mt-1">{message}</p>
          </div>
        </div>
      )}

      <p className="text-gray-400 text-xs mt-4">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );
}