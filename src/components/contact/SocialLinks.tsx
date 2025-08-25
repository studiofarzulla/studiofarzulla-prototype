'use client';

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoYoutube,
  IoShare,
  IoHeart,
} from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/constants';

interface SocialPlatform {
  name: string;
  icon: React.ElementType;
  url: string;
  color: string;
  followers?: string;
  description: string;
  posts?: number;
}

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    name: 'Instagram',
    icon: IoLogoInstagram,
    url: SITE_CONFIG.links.instagram,
    color: 'from-purple-500 via-pink-500 to-orange-500',
    followers: '12.5K',
    description:
      'Daily photos of our beautiful resort, guest experiences, and behind-the-scenes content',
    posts: 1247,
  },
  {
    name: 'Facebook',
    icon: IoLogoFacebook,
    url: SITE_CONFIG.links.facebook,
    color: 'from-blue-600 to-blue-500',
    followers: '8.2K',
    description:
      'Hotel updates, event announcements, guest reviews, and community engagement',
    posts: 892,
  },
  {
    name: 'YouTube',
    icon: IoLogoYoutube,
    url: 'https://youtube.com/crescentbeachhotel',
    color: 'from-red-600 to-red-500',
    followers: '3.1K',
    description:
      'Virtual tours, guest testimonials, event highlights, and promotional videos',
    posts: 67,
  },
  {
    name: 'LinkedIn',
    icon: IoLogoLinkedin,
    url: SITE_CONFIG.links.linkedin,
    color: 'from-blue-700 to-blue-600',
    followers: '2.8K',
    description:
      'Business updates, corporate events, partnerships, and professional networking',
    posts: 342,
  },
  {
    name: 'TikTok',
    icon: IoLogoTiktok,
    url: 'https://tiktok.com/@crescentbeachhotel',
    color: 'from-black to-gray-800',
    followers: '5.6K',
    description:
      'Fun, creative content showcasing hotel life, trends, and guest experiences',
    posts: 156,
  },
  {
    name: 'Twitter',
    icon: IoLogoTwitter,
    url: SITE_CONFIG.links.twitter,
    color: 'from-blue-400 to-blue-500',
    followers: '4.3K',
    description:
      'Real-time updates, customer service, industry news, and quick announcements',
    posts: 1892,
  },
];

const HASHTAGS = [
  '#CrescentBeachHotel',
  '#LuxuryTravel',
  '#Azerbaijan',
  '#CaspianSea',
  '#BeachResort',
  '#LuxuryHotel',
  '#TravelAzerbaijan',
  '#BakuHotel',
];

interface SocialLinksProps {
  className?: string;
  showStats?: boolean;
}

export default function SocialLinks({
  className,
  showStats = true,
}: SocialLinksProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: SITE_CONFIG.name,
          text: SITE_CONFIG.description,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        // Show success message (you might want to add a toast here)
      } catch (error) {
        console.error('Share failed:', error);
      }
    }
  };

  return (
    <div className={cn('space-y-8', className)}>
      {/* Main Social Grid */}
      <div>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold text-gray-900'>
            Follow Our Journey
          </h2>
          <button
            onClick={handleShare}
            className='flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium'
          >
            <IoShare className='w-4 h-4' />
            Share
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {SOCIAL_PLATFORMS.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up'
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Background Gradient */}
              <div
                className={cn(
                  'absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity bg-gradient-to-br',
                  platform.color
                )}
              />

              {/* Content */}
              <div className='relative p-6'>
                {/* Header */}
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <div
                      className={cn(
                        'w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br text-white shadow-lg',
                        platform.color
                      )}
                    >
                      <platform.icon className='w-6 h-6' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900'>
                        {platform.name}
                      </h3>
                      {showStats && platform.followers && (
                        <p className='text-sm text-gray-600'>
                          {platform.followers} followers
                        </p>
                      )}
                    </div>
                  </div>
                  <div className='text-right'>
                    {showStats && platform.posts && (
                      <>
                        <p className='text-lg font-bold text-gray-900'>
                          {platform.posts}
                        </p>
                        <p className='text-xs text-gray-500'>posts</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className='text-sm text-gray-600 leading-relaxed mb-4'>
                  {platform.description}
                </p>

                {/* Follow Button */}
                <div className='flex items-center justify-between'>
                  <span
                    className={cn(
                      'inline-block px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r',
                      platform.color
                    )}
                  >
                    Follow Us
                  </span>
                  <div className='flex items-center gap-1 text-gray-400'>
                    <IoHeart className='w-4 h-4' />
                    <span className='text-xs'>Popular</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className='absolute inset-0 border-2 border-transparent group-hover:border-gray-200 rounded-xl transition-colors' />
            </a>
          ))}
        </div>
      </div>

      {/* Hashtags Section */}
      <div className='bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-6 text-white'>
        <h3 className='text-xl font-bold mb-4'>Share Your Experience</h3>
        <p className='text-white/90 mb-4'>
          Tag us in your posts and use our hashtags to be featured on our social
          media!
        </p>
        <div className='flex flex-wrap gap-2 mb-6'>
          {HASHTAGS.map((hashtag, index) => (
            <span
              key={hashtag}
              className='px-3 py-1 bg-white/20 rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer animate-fade-in-scale'
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {hashtag}
            </span>
          ))}
        </div>
        <div className='text-sm text-white/80'>
          <p>📸 Share your photos and get featured on our Instagram stories!</p>
        </div>
      </div>

      {/* User Generated Content */}
      <div className='bg-white rounded-2xl shadow-lg p-6'>
        <h3 className='text-xl font-bold text-gray-900 mb-4'>Guest Stories</h3>
        <p className='text-gray-600 mb-6'>
          See what our guests are sharing about their experiences at The
          Crescent Beach Hotel.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
          {[1, 2, 3, 4].map(item => (
            <div
              key={item}
              className='aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden'
            >
              <div className='text-gray-400 text-center'>
                <IoLogoInstagram className='w-8 h-8 mx-auto mb-2' />
                <span className='text-xs'>Guest Photo</span>
              </div>
              <div className='absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors cursor-pointer' />
            </div>
          ))}
        </div>

        <div className='text-center'>
          <a
            href={SITE_CONFIG.links.instagram}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all font-medium'
          >
            <IoLogoInstagram className='w-5 h-5' />
            View All Guest Photos
          </a>
        </div>
      </div>

      {/* Social Media Feed Integration */}
      <div className='bg-gray-50 rounded-2xl p-6'>
        <h3 className='text-xl font-bold text-gray-900 mb-4'>
          Latest from Our Feeds
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Instagram Feed Preview */}
          <div className='bg-white rounded-lg p-4'>
            <div className='flex items-center gap-3 mb-3'>
              <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center'>
                <IoLogoInstagram className='w-4 h-4 text-white' />
              </div>
              <div>
                <h4 className='font-semibold text-gray-900'>
                  @crescentbeachhotel
                </h4>
                <p className='text-xs text-gray-500'>2 hours ago</p>
              </div>
            </div>
            <p className='text-sm text-gray-700 mb-3'>
              Sunset dinner at our terrace restaurant 🌅 Book your table for
              tonight! #CrescentBeachHotel
            </p>
            <div className='aspect-video bg-gradient-to-br from-orange-200 to-pink-200 rounded-lg mb-3' />
            <div className='flex items-center justify-between text-xs text-gray-500'>
              <span>234 likes</span>
              <span>View on Instagram</span>
            </div>
          </div>

          {/* Facebook Feed Preview */}
          <div className='bg-white rounded-lg p-4'>
            <div className='flex items-center gap-3 mb-3'>
              <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center'>
                <IoLogoFacebook className='w-4 h-4 text-white' />
              </div>
              <div>
                <h4 className='font-semibold text-gray-900'>
                  The Crescent Beach Hotel
                </h4>
                <p className='text-xs text-gray-500'>5 hours ago</p>
              </div>
            </div>
            <p className='text-sm text-gray-700 mb-3'>
              Join us for our weekly wine tasting event every Friday evening.
              Limited seats available!
            </p>
            <div className='aspect-video bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg mb-3' />
            <div className='flex items-center justify-between text-xs text-gray-500'>
              <span>89 likes • 12 comments</span>
              <span>View on Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
