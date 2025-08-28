import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Waves,
  Star,
} from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Wave Pattern */}
      <div className="relative -mt-1 h-16">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <path d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z" fill="url(#gradient)" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00966F" />
              <stop offset="100%" stopColor="#00B5E2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <div className="mb-6 flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
                <span className="text-xl font-bold text-white">CB</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Crescent Beach</h3>
                <p className="text-xs opacity-80">Hotel & Resort</p>
              </div>
            </div>
            <p className="mb-4 text-gray-400">{t('description')}</p>
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm text-gray-400">5.0</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/rooms"
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  {t('rooms')}
                </Link>
              </li>
              <li>
                <Link
                  href="/dining"
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  {t('dining')}
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  {t('amenities')}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  {t('gallery')}
                </Link>
              </li>
              <li>
                <Link
                  href="/conferences"
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  {t('conferences')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">{t('contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary-400" />
                <span className="text-gray-400">
                  Bilgah Beach, Baku
                  <br />
                  Azerbaijan, AZ1000
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <a
                  href="tel:+994123456789"
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  +994 12 345 67 89
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <a
                  href="mailto:info@crescentbeach.az"
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  info@crescentbeach.az
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">24/7 {t('reception')}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">{t('newsletter.title')}</h4>
            <p className="mb-4 text-gray-400">{t('newsletter.description')}</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 transition-colors focus:border-primary-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-2 font-medium transition-all hover:scale-105 hover:shadow-lg"
              >
                {t('newsletter.subscribe')}
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-6 flex items-center space-x-4">
              <a
                href="https://facebook.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-primary-600"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-primary-600"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-primary-600"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 The Crescent Beach Hotel. {t('allRights')}
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 transition-colors hover:text-primary-400"
              >
                {t('privacy')}
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 transition-colors hover:text-primary-400"
              >
                {t('terms')}
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 transition-colors hover:text-primary-400"
              >
                {t('sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
