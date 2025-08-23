import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="text-center space-y-6">
        <div className="relative">
          <LoadingSpinner size="lg" />
          <div className="absolute -top-2 -left-2 w-16 h-16 border border-primary-300 rounded-full opacity-30 animate-ping"></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-serif text-gray-900">The Crescent Beach Hotel</h2>
          <p className="text-gray-600">Preparing your luxurious experience...</p>
        </div>
      </div>
    </div>
  );
}