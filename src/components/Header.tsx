'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/lib/LocaleProvider';
import { IoMenu, IoClose, IoCall } from 'react-icons/io5';
import { NAVIGATION_ITEMS, SITE_CONFIG, CONTACT_INFO } from '@/constants';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return (
        pathname === '/' ||
        pathname === '/en' ||
        pathname === '/az' ||
        pathname === '/ru'
      );
    }
    return pathname.includes(href);
  };

  const isHomePage =
    pathname === '/' ||
    pathname === '/en' ||
    pathname === '/az' ||
    pathname === '/ru';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : isHomePage
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-soft'
      )}
    >
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 lg:h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2 z-50'>
            <div className='w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>C</span>
            </div>
            <div className='hidden sm:block'>
              <h1
                className={cn(
                  'text-lg font-serif font-bold transition-colors duration-300',
                  isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
                )}
              >
                {SITE_CONFIG.name}
              </h1>
              <p
                className={cn(
                  'text-xs -mt-1 transition-colors duration-300',
                  isScrolled || !isHomePage ? 'text-gray-600' : 'text-gray-200'
                )}
              >
                Luxury Beach Resort
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {NAVIGATION_ITEMS.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-300 hover:text-primary-600',
                  isActiveLink(item.href)
                    ? 'text-primary-600'
                    : isScrolled || !isHomePage
                      ? 'text-gray-700'
                      : 'text-white hover:text-primary-200'
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className='hidden lg:flex items-center space-x-4'>
            <Link
              href={`tel:${CONTACT_INFO.phone}`}
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors duration-300',
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-primary-200'
              )}
            >
              <IoCall className='w-4 h-4' />
              <span className='hidden xl:inline'>{CONTACT_INFO.phone}</span>
            </Link>

            <LanguageSwitcher />

            <Link
              href='/contact'
              className={cn(
                'px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg',
                isScrolled || !isHomePage
                  ? 'bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary-600 border border-white/30'
              )}
            >
              {t('common.book_now')}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className='flex lg:hidden items-center space-x-4'>
            <LanguageSwitcher />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'p-2 rounded-lg transition-colors duration-300',
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                  : 'text-white hover:text-primary-200 hover:bg-white/20'
              )}
              aria-label={t('navigation.main_menu')}
            >
              {isMenuOpen ? (
                <IoClose className='w-6 h-6' />
              ) : (
                <IoMenu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden bg-white border-t border-gray-200 shadow-medium transition-all duration-300'>
            <div className='container mx-auto px-4 py-6'>
              <div className='flex flex-col space-y-4'>
                {NAVIGATION_ITEMS.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-base font-medium py-2 transition-colors duration-200',
                      isActiveLink(item.href)
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    )}
                  >
                    {t(item.key)}
                  </Link>
                ))}

                <div className='pt-4 border-t border-gray-200'>
                  <Link
                    href={`tel:${CONTACT_INFO.phone}`}
                    className='flex items-center gap-2 text-gray-700 hover:text-primary-600 py-2'
                  >
                    <IoCall className='w-5 h-5' />
                    {CONTACT_INFO.phone}
                  </Link>
                </div>

                <div className='pt-2'>
                  <Link
                    href='/contact'
                    className='btn-primary w-full justify-center'
                  >
                    {t('common.book_now')}
                  </Link>
                </div>
              </div>
            </div>
        </div>
      )}
    </header>
  );
}
