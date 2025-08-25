'use client';

import Link from 'next/link';
import { useTranslations } from '@/lib/LocaleProvider';
import {
  IoCall,
  IoMail,
  IoLocation,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoSend,
} from 'react-icons/io5';
import { SITE_CONFIG, CONTACT_INFO, NAVIGATION_ITEMS } from '@/constants';
import { cn } from '@/lib/utils';

export default function Footer() {
  const t = useTranslations();

  const socialLinks = [
    {
      icon: IoLogoFacebook,
      href: SITE_CONFIG.links.facebook,
      label: 'Facebook',
    },
    {
      icon: IoLogoInstagram,
      href: SITE_CONFIG.links.instagram,
      label: 'Instagram',
    },
    { icon: IoLogoTwitter, href: SITE_CONFIG.links.twitter, label: 'Twitter' },
    {
      icon: IoLogoLinkedin,
      href: SITE_CONFIG.links.linkedin,
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className='bg-gray-900 text-white'>
      {/* Main Footer Content */}
      <div className='container mx-auto px-4 py-12 lg:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            <Link href='/' className='flex items-center space-x-3 mb-6'>
              <div className='w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>C</span>
              </div>
              <div>
                <h3 className='text-xl font-serif font-bold'>
                  {SITE_CONFIG.name}
                </h3>
                <p className='text-gray-400 text-sm'>Luxury Beach Resort</p>
              </div>
            </Link>

            <p className='text-gray-300 mb-6 text-sm leading-relaxed'>
              {SITE_CONFIG.description}
            </p>

            {/* Social Links */}
            <div className='flex space-x-4'>
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(
                    'w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center',
                    'hover:bg-primary-500 transition-colors duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900'
                  )}
                  aria-label={social.label}
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Quick Links</h4>
            <ul className='space-y-3'>
              {NAVIGATION_ITEMS.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Contact Info</h4>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <IoLocation className='w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0' />
                <div className='text-sm text-gray-300'>
                  <p>{t('footer.address')}</p>
                </div>
              </li>

              <li className='flex items-center gap-3'>
                <IoCall className='w-5 h-5 text-primary-400 flex-shrink-0' />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className='text-sm text-gray-300 hover:text-white transition-colors duration-200'
                >
                  {t('footer.phone')}
                </a>
              </li>

              <li className='flex items-center gap-3'>
                <IoMail className='w-5 h-5 text-primary-400 flex-shrink-0' />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className='text-sm text-gray-300 hover:text-white transition-colors duration-200'
                >
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Stay Connected</h4>
            <p className='text-gray-300 text-sm mb-4'>
              {t('footer.newsletter')}
            </p>

            <form className='space-y-3'>
              <div className='flex flex-col sm:flex-row gap-2'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className={cn(
                    'flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg',
                    'text-white placeholder-gray-400 text-sm',
                    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                  )}
                />
                <button
                  type='submit'
                  className={cn(
                    'px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg',
                    'flex items-center justify-center gap-2 text-sm font-medium',
                    'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
                  )}
                >
                  <IoSend className='w-4 h-4' />
                  <span className='hidden sm:inline'>Subscribe</span>
                </button>
              </div>
            </form>

            <p className='text-xs text-gray-400 mt-3'>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>

            {/* Instagram Badge */}
            <div className='mt-6 p-3 bg-gray-800 rounded-lg'>
              <div className='flex items-center gap-2 mb-2'>
                <IoLogoInstagram className='w-4 h-4 text-pink-400' />
                <span className='text-sm font-medium text-gray-300'>
                  @crescentbeachhotel
                </span>
              </div>
              <p className='text-xs text-gray-400'>
                Follow us for daily updates and exclusive content
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-gray-400'>
              © 2024 {SITE_CONFIG.name}. All rights reserved.
            </p>

            <div className='flex flex-wrap justify-center md:justify-end gap-6 text-sm'>
              <a
                href='/privacy-policy'
                className='text-gray-400 hover:text-white transition-colors duration-200'
              >
                Privacy Policy
              </a>
              <a
                href='/terms-of-service'
                className='text-gray-400 hover:text-white transition-colors duration-200'
              >
                Terms of Service
              </a>
              <a
                href='/sitemap'
                className='text-gray-400 hover:text-white transition-colors duration-200'
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
