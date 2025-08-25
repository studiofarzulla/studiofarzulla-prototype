'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  IoLogoInstagram,
  IoHeart,
  IoArrowForward,
  IoRefresh,
} from 'react-icons/io5';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  timestamp: string;
  permalink: string;
}

interface InstagramWidgetProps {
  username?: string;
  hashtag?: string;
  maxPosts?: number;
}

// Mock Instagram data - In production, this would come from Instagram API
const MOCK_POSTS: InstagramPost[] = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400',
    caption:
      'Sunset views from our terrace restaurant 🌅 #CrescentBeachHotel #Azerbaijan',
    likes: 234,
    timestamp: '2024-01-15T18:30:00Z',
    permalink: 'https://instagram.com/p/example1',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1578774204375-39ab30d2ebb1?w=400',
    caption:
      'Luxury suite with ocean views 🏖️ Book your stay today! #LuxuryTravel',
    likes: 189,
    timestamp: '2024-01-14T12:15:00Z',
    permalink: 'https://instagram.com/p/example2',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1544963650-2bf9e2c36fb4?w=400',
    caption:
      'Fresh seafood at our beachfront restaurant 🦐 #FreshSeafood #CaspianSea',
    likes: 156,
    timestamp: '2024-01-13T19:45:00Z',
    permalink: 'https://instagram.com/p/example3',
  },
  {
    id: '4',
    imageUrl:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400',
    caption: 'Pool day vibes ☀️ Our infinity pool overlooking the Caspian Sea',
    likes: 298,
    timestamp: '2024-01-12T15:20:00Z',
    permalink: 'https://instagram.com/p/example4',
  },
  {
    id: '5',
    imageUrl:
      'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=400',
    caption:
      'Wedding celebration at The Crescent Beach Hotel 💍✨ #WeddingVenue',
    likes: 412,
    timestamp: '2024-01-11T20:10:00Z',
    permalink: 'https://instagram.com/p/example5',
  },
  {
    id: '6',
    imageUrl:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
    caption: 'Spa treatments with a view 🧘‍♀️ Relax and rejuvenate #SpaDay',
    likes: 178,
    timestamp: '2024-01-10T11:30:00Z',
    permalink: 'https://instagram.com/p/example6',
  },
];

export default function InstagramWidget({
  username = 'crescentbeachhotel',
  hashtag = 'CrescentBeachHotel',
  maxPosts = 6,
}: InstagramWidgetProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulate API loading
  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // In production, this would be an actual Instagram API call
        setPosts(MOCK_POSTS.slice(0, maxPosts));
      } catch (err) {
        setError('Failed to load Instagram posts');
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, [maxPosts]);

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInHours = Math.floor(
      (now.getTime() - postTime.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return `${Math.floor(diffInHours / 168)}w ago`;
  };

  const formatLikes = (likes: number) => {
    if (likes >= 1000) {
      return `${(likes / 1000).toFixed(1)}k`;
    }
    return likes.toString();
  };

  if (error) {
    return (
      <div className='bg-white rounded-2xl shadow-lg p-8 text-center'>
        <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
          <IoLogoInstagram className='w-8 h-8 text-red-600' />
        </div>
        <h3 className='text-lg font-semibold text-gray-900 mb-2'>
          Unable to load posts
        </h3>
        <p className='text-gray-600 mb-4'>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className='inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors'
        >
          <IoRefresh className='w-4 h-4' />
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
      {/* Header */}
      <div className='p-6 border-b border-gray-100'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center'>
              <IoLogoInstagram className='w-6 h-6 text-white' />
            </div>
            <div>
              <h3 className='font-semibold text-gray-900'>@{username}</h3>
              <p className='text-sm text-gray-600'>#{hashtag}</p>
            </div>
          </div>

          <Link
            href={`https://instagram.com/${username}`}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium'
          >
            Follow us
            <IoArrowForward className='w-4 h-4' />
          </Link>
        </div>
      </div>

      {/* Posts Grid */}
      <div className='p-6'>
        {isLoading ? (
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className='aspect-square bg-gray-200 rounded-lg animate-pulse'
              />
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='group relative aspect-square rounded-lg overflow-hidden cursor-pointer'
              >
                <Image
                  src={post.imageUrl}
                  alt={post.caption.split(' ').slice(0, 5).join(' ')}
                  width={200}
                  height={200}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center'>
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4'>
                    <div className='flex items-center justify-center gap-2 mb-2'>
                      <IoHeart className='w-5 h-5' />
                      <span className='font-semibold'>
                        {formatLikes(post.likes)}
                      </span>
                    </div>
                    <p className='text-sm line-clamp-2'>
                      {post.caption.length > 50
                        ? `${post.caption.slice(0, 50)}...`
                        : post.caption}
                    </p>
                  </div>
                </div>

                {/* Link overlay */}
                <Link
                  href={post.permalink as any}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='absolute inset-0 z-10'
                  aria-label={`View Instagram post: ${post.caption.slice(0, 50)}`}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* View More Button */}
        <div className='text-center mt-6'>
          <Link
            href={`https://instagram.com/explore/tags/${hashtag.toLowerCase()}`}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium'
          >
            View more on Instagram
            <IoLogoInstagram className='w-5 h-5' />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className='px-6 py-4 bg-gray-50 border-t border-gray-100'>
        <p className='text-xs text-gray-500 text-center'>
          Follow us @{username} for daily updates and exclusive content
        </p>
      </div>
    </div>
  );
}
