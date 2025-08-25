'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

import {
  IoPlay,
  IoPause,
  IoVolumeHigh,
  IoVolumeMute,
  IoExpand,
} from 'react-icons/io5';
import { cn } from '@/lib/utils';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: string;
}

interface VideoGalleryProps {
  videos: VideoItem[];
}

const MOCK_VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: 'Virtual Hotel Tour',
    description:
      'Take a comprehensive virtual tour of our luxury hotel facilities',
    thumbnail:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600',
    videoUrl:
      'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4',
    duration: '3:45',
    category: 'Hotel Tour',
  },
  {
    id: '2',
    title: 'Luxury Suite Experience',
    description: 'Discover the elegance and comfort of our presidential suite',
    thumbnail:
      'https://images.unsplash.com/photo-1578774204375-39ab30d2ebb1?w=600',
    videoUrl:
      'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4',
    duration: '2:30',
    category: 'Rooms',
  },
  {
    id: '3',
    title: 'Culinary Excellence',
    description:
      'Meet our executive chef and explore our award-winning restaurants',
    thumbnail:
      'https://images.unsplash.com/photo-1544963650-2bf9e2c36fb4?w=600',
    videoUrl:
      'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4',
    duration: '4:20',
    category: 'Dining',
  },
  {
    id: '4',
    title: 'Spa & Wellness Journey',
    description: 'Relax and rejuvenate at our world-class spa facilities',
    thumbnail:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
    videoUrl:
      'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4',
    duration: '2:15',
    category: 'Wellness',
  },
];

export default function VideoGallery({
  videos = MOCK_VIDEOS,
}: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoSelect = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;

    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;

    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className='space-y-8'>
      {/* Featured Video Player */}
      {selectedVideo && (
        <div className='bg-black rounded-2xl overflow-hidden shadow-2xl'>
          <div className='relative aspect-video'>
            <video
              ref={videoRef}
              src={selectedVideo.videoUrl}
              poster={selectedVideo.thumbnail}
              className='w-full h-full object-cover'
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Video Controls Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 group'>
              {/* Play/Pause Button */}
              <button
                onClick={handlePlayPause}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors'
              >
                {isPlaying ? (
                  <IoPause className='w-8 h-8 text-white' />
                ) : (
                  <IoPlay className='w-8 h-8 text-white ml-1' />
                )}
              </button>

              {/* Bottom Controls */}
              <div className='absolute bottom-0 left-0 right-0 p-6 space-y-4'>
                {/* Progress Bar */}
                <div
                  className='w-full h-2 bg-white/20 rounded-full cursor-pointer'
                  onClick={handleProgressClick}
                >
                  <div
                    className='h-full bg-primary-500 rounded-full relative'
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  >
                    <div className='absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full' />
                  </div>
                </div>

                {/* Control Buttons */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <button
                      onClick={handlePlayPause}
                      className='text-white hover:text-primary-400 transition-colors'
                    >
                      {isPlaying ? (
                        <IoPause className='w-6 h-6' />
                      ) : (
                        <IoPlay className='w-6 h-6' />
                      )}
                    </button>

                    <button
                      onClick={handleMuteToggle}
                      className='text-white hover:text-primary-400 transition-colors'
                    >
                      {isMuted ? (
                        <IoVolumeMute className='w-6 h-6' />
                      ) : (
                        <IoVolumeHigh className='w-6 h-6' />
                      )}
                    </button>

                    <span className='text-white text-sm'>
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <button
                    onClick={handleFullscreen}
                    className='text-white hover:text-primary-400 transition-colors'
                  >
                    <IoExpand className='w-6 h-6' />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className='p-6 bg-white'>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>
              {selectedVideo.title}
            </h3>
            <p className='text-gray-600 mb-4'>{selectedVideo.description}</p>
            <div className='flex items-center gap-4'>
              <span className='px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium'>
                {selectedVideo.category}
              </span>
              <span className='text-gray-500 text-sm'>
                Duration: {selectedVideo.duration}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Video Thumbnail Grid */}
      <div>
        <h3 className='text-2xl font-bold text-gray-900 mb-6'>
          {selectedVideo ? 'More Videos' : 'Video Gallery'}
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={cn(
                'group relative cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300',
                selectedVideo?.id === video.id && 'ring-2 ring-primary-500'
              )}
              onClick={() => handleVideoSelect(video)}
            >
              <div className='relative aspect-video'>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                />

                {/* Play Button Overlay */}
                <div className='absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center'>
                  <div className='w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <IoPlay className='w-6 h-6 text-gray-900 ml-1' />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className='absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium'>
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className='p-4 bg-white'>
                <h4 className='font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors'>
                  {video.title}
                </h4>
                <p className='text-sm text-gray-600 line-clamp-2 mb-3'>
                  {video.description}
                </p>
                <span className='inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
                  {video.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Virtual Tour Section */}
      <div className='bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white text-center'>
        <h3 className='text-3xl font-bold mb-4'>Take a Virtual Tour</h3>
        <p className='text-lg mb-6 opacity-90'>
          Experience our luxury hotel from the comfort of your home with our
          immersive 360° virtual tour
        </p>
        <button className='inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold'>
          <IoPlay className='w-5 h-5' />
          Start Virtual Tour
        </button>
      </div>
    </div>
  );
}
