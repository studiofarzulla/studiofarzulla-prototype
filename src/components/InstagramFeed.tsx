'use client';

import { IoLogoInstagram, IoHeart, IoChatbubbleOutline } from 'react-icons/io5';

interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    image: '/images/instagram/sunset-pool.jpg',
    likes: 1250,
    comments: 47,
    caption: 'Golden hour at our infinity pool 🌅 #CrescentBeachHotel #CaspianSea'
  },
  {
    id: '2',
    image: '/images/instagram/beach-dining.jpg',
    likes: 890,
    comments: 23,
    caption: 'Dining by the sea at The Terrace Restaurant 🍽️ #LuxuryDining'
  },
  {
    id: '3',
    image: '/images/instagram/spa-treatment.jpg',
    likes: 650,
    comments: 18,
    caption: 'Relax and rejuvenate at our world-class spa 💆‍♀️ #WellnessRetreat'
  },
  {
    id: '4',
    image: '/images/instagram/suite-view.jpg',
    likes: 1100,
    comments: 31,
    caption: 'Wake up to this view every morning 🏖️ #SuiteLife #OceanView'
  },
  {
    id: '5',
    image: '/images/instagram/cultural-event.jpg',
    likes: 780,
    comments: 29,
    caption: 'Traditional Azerbaijani performance on our entertainment stage 🎭'
  },
  {
    id: '6',
    image: '/images/instagram/shade-bar.jpg',
    likes: 920,
    comments: 15,
    caption: 'Refreshing moments at our iconic Shade Bar ⛵ #BeachBar'
  }
];

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="flex items-center justify-center mb-4"
          >
            <IoLogoInstagram className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900">
              Follow Our Journey
            </h2>
          </div>
          
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-6"
          >
            Stay connected with The Crescent Beach Hotel through our Instagram feed. 
            Discover daily moments of luxury, breathtaking views, and unforgettable experiences.
          </p>
          
          <a
            href="https://instagram.com/crescentbeachhotel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <IoLogoInstagram className="w-5 h-5 mr-2" />
            Follow @crescentbeachhotel
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
            >
              {/* Post Image */}
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center">
                      <IoHeart className="w-5 h-5 mr-1" />
                      <span className="text-sm font-medium">{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <IoChatbubbleOutline className="w-5 h-5 mr-1" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <IoLogoInstagram className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div
            className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-4">
              Tag us in your photos for a chance to be featured on our page!
            </p>
            <div className="text-primary-600 font-medium">
              #CrescentBeachHotel #BakuLuxury #CaspianSea
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}