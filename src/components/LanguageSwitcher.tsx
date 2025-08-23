'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown, IoGlobe } from 'react-icons/io5';
import { LANGUAGES } from '@/constants';
import { cn } from '@/lib/utils';
import type { Locale } from '@/types';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const t = useTranslations('navigation');

  const currentLanguage = LANGUAGES.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath as any);
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200',
          'border border-gray-200 rounded-lg hover:border-primary-300 bg-white hover:bg-gray-50'
        )}
        aria-label={t('language')}
      >
        <IoGlobe className='w-4 h-4' />
        <span className='hidden sm:inline'>{currentLanguage?.nativeName}</span>
        <span className='sm:hidden'>{currentLanguage?.flag}</span>
        <IoChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className='fixed inset-0 z-30'
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-medium z-40',
                'py-1 max-h-60 overflow-auto'
              )}
            >
              {LANGUAGES.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code as Locale)}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors duration-150',
                    locale === language.code &&
                      'bg-primary-50 text-primary-700 font-medium'
                  )}
                >
                  <span className='text-lg'>{language.flag}</span>
                  <span>{language.nativeName}</span>
                  {locale === language.code && (
                    <div className='ml-auto w-2 h-2 bg-primary-500 rounded-full' />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}