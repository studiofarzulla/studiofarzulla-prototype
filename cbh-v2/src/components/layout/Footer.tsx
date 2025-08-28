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
  Star
} from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Wave Pattern */}
      <div className="relative h-16 -mt-1">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <path
            d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00966F" />
              <stop offset="100%" stopColor="#00B5E2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CB</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Crescent Beach</h3>
                <p className="text-xs opacity-80">Hotel & Resort</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              {t('description')}
            </p>
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-gray-400 text-sm ml-2">5.0</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/rooms" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('rooms')}
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('dining')}
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('amenities')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('gallery')}
                </Link>
              </li>
              <li>
                <Link href="/conferences" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('conferences')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-gray-400">
                  Bilgah Beach, Baku<br />
                  Azerbaijan, AZ1000
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+994123456789" className="text-gray-400 hover:text-primary-400 transition-colors">
                  +994 12 345 67 89
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@crescentbeach.az" className="text-gray-400 hover:text-primary-400 transition-colors">
                  info@crescentbeach.az
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">24/7 {t('reception')}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('newsletter.title')}</h4>
            <p className="text-gray-400 mb-4">
              {t('newsletter.description')}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
              >
                {t('newsletter.subscribe')}
              </button>
            </form>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://facebook.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 The Crescent Beach Hotel. {t('allRights')}
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t('privacy')}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t('terms')}
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t('sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}