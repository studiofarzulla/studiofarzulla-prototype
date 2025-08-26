'use client';

import { Button } from '@/components/ui/Button';
import { useTranslations } from '@/lib/LocaleProvider';
import LocaleLink from '@/lib/locale-link';

interface FacilityHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function FacilityHero({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText,
  ctaLink,
}: FacilityHeroProps) {
  const t = useTranslations('common');

  return (
    <section className='relative min-h-[70vh] flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30' />

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 text-center text-white'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4 leading-tight'>
            {title}
          </h1>
          <p className='text-xl md:text-2xl mb-6 text-gray-200'>{subtitle}</p>
          <p className='text-lg mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            {description}
          </p>

          {ctaText && ctaLink && (
            <LocaleLink href={ctaLink as any}>
              <Button
                size='lg'
                className='bg-primary-600 hover:bg-primary-700 text-white px-8 py-4'
              >
                {ctaText}
              </Button>
            </LocaleLink>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce'>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </div>
    </section>
  );
}
