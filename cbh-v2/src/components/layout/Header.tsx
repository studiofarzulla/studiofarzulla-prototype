'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeNames } from '@/i18n';
import { Menu, X, ChevronDown, Globe, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('navigation');
  
  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] as keyof typeof localeNames;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/rooms', label: t('rooms') },
    { href: '/dining', label: t('dining') },
    { href: '/amenities', label: t('amenities') },
    { href: '/conferences', label: t('conferences') },
    { href: '/gallery', label: t('gallery') },
    { href: '/contact', label: t('contact') },
  ];

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.slice(3) || '/';
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-gradient-to-b from-black/50 to-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className={`flex items-center space-x-3 transition-colors ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CB</span>
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold">Crescent Beach</h1>
                <p className="text-xs opacity-80">Hotel & Resort</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-primary-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Phone Number */}
              <a
                href="tel:+994123456789"
                className={`hidden md:flex items-center space-x-2 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+994 12 345 67 89</span>
              </a>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                    isScrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {localeNames[currentLocale]}
                  </span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${
                    isLangMenuOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Language Dropdown */}
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[150px]">
                    {locales.map((locale) => (
                      <button
                        key={locale}
                        onClick={() => {
                          switchLocale(locale);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                          locale === currentLocale
                            ? 'text-primary-600 font-medium'
                            : 'text-gray-700'
                        }`}
                      >
                        {localeNames[locale]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Book Now Button */}
              <Link
                href="/rooms"
                className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
              >
                {t('bookNow')}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden transform transition-transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mt-16 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-6 border-t">
              <Link
                href="/rooms"
                className="block w-full py-3 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center rounded-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('bookNow')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}