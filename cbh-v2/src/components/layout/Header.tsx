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
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 py-2 shadow-lg backdrop-blur-md'
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
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
                <span className="text-xl font-bold text-white">CB</span>
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold">Crescent Beach</h1>
                <p className="text-xs opacity-80">Hotel & Resort</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 lg:flex">
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
                className={`hidden items-center space-x-2 transition-colors md:flex ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+994 12 345 67 89</span>
              </a>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`flex items-center space-x-2 rounded-lg px-3 py-2 transition-all ${
                    isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{localeNames[currentLocale]}</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Language Dropdown */}
                {isLangMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 min-w-[150px] rounded-lg bg-white py-2 shadow-xl">
                    {locales.map((locale) => (
                      <button
                        key={locale}
                        onClick={() => {
                          switchLocale(locale);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left transition-colors hover:bg-gray-50 ${
                          locale === currentLocale
                            ? 'font-medium text-primary-600'
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
                className="hidden rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-2 font-medium text-white transition-all hover:scale-105 hover:shadow-lg md:block"
              >
                {t('bookNow')}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`rounded-lg p-2 transition-colors lg:hidden ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
                }`}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 transform bg-white transition-transform lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute right-6 top-6 rounded-lg p-2 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="mt-16 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-lg font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t pt-6">
              <Link
                href="/rooms"
                className="block w-full rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-3 text-center font-medium text-white"
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
