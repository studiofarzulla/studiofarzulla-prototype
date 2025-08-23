'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  IoCall, 
  IoMail, 
  IoLocation, 
  IoTime, 
  IoPeople,
  IoBusinessOutline,
  IoHeart,
  IoCalendar,
  IoGlobe,
  IoShield
} from 'react-icons/io5';
import ContactForm from '@/components/contact/ContactForm';
import InteractiveMap from '@/components/contact/InteractiveMap';
import DirectionsCard from '@/components/contact/DirectionsCard';
import SocialLinks from '@/components/contact/SocialLinks';
import { CONTACT_INFO } from '@/constants';

// Department contact information
const DEPARTMENTS = [
  {
    id: 'reservations',
    name: 'Reservations',
    icon: IoCalendar,
    phone: '+994 12 345 6789',
    email: 'reservations@crescentbeachhotel.com',
    hours: '24/7 Available',
    description: 'Room bookings, availability, and reservation modifications',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'events',
    name: 'Events & Conferences',
    icon: IoPeople,
    phone: '+994 12 345 6790',
    email: 'events@crescentbeachhotel.com',
    hours: 'Mon-Fri 8:00-18:00',
    description: 'Weddings, corporate events, meetings, and special occasions',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    id: 'corporate',
    name: 'Corporate Sales',
    icon: IoBusinessOutline,
    phone: '+994 12 345 6791',
    email: 'corporate@crescentbeachhotel.com',
    hours: 'Mon-Fri 9:00-17:00',
    description: 'Group bookings, corporate accounts, and business partnerships',
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 'concierge',
    name: 'Concierge',
    icon: IoHeart,
    phone: '+994 12 345 6792',
    email: 'concierge@crescentbeachhotel.com',
    hours: '24/7 Available',
    description: 'Guest services, recommendations, and assistance during your stay',
    color: 'bg-pink-100 text-pink-700'
  }
];

// Quick contact stats
const CONTACT_STATS = [
  { label: 'Response Time', value: '<2 Hours', icon: IoTime },
  { label: 'Languages', value: '3', icon: IoGlobe },
  { label: 'Satisfaction', value: '98%', icon: IoShield },
  { label: 'Availability', value: '24/7', icon: IoCall }
];

// Metadata will be handled by parent layout

export default function ContactPage() {
  const t = useTranslations('common');
  const [activeSection, setActiveSection] = useState<'contact' | 'directions' | 'social'>('contact');

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='relative h-96 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-secondary-600 to-accent-500' />
        <div className='absolute inset-0 bg-black/20' />
        <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='heading-primary text-white mb-4'>
              {t('contact')}
            </h1>
            <p className='text-xl mb-6 text-white/90'>
              We're here to help you plan your perfect stay and answer any questions you may have
            </p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto'>
              {CONTACT_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className='text-center'
                >
                  <stat.icon className='w-6 h-6 mx-auto mb-2 text-white/80' />
                  <div className='font-bold text-lg'>{stat.value}</div>
                  <div className='text-sm text-white/70'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className='section-padding'>
        <div className='container mx-auto px-4'>
          {/* Quick Contact Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className='bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow'
            >
              <div className='w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <IoCall className='w-8 h-8 text-primary-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Call Us</h3>
              <p className='text-gray-600 mb-4'>Available 24/7 for your convenience</p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className='text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors'
              >
                {CONTACT_INFO.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow'
            >
              <div className='w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <IoMail className='w-8 h-8 text-secondary-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Email Us</h3>
              <p className='text-gray-600 mb-4'>We respond within 2 hours</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className='text-secondary-600 hover:text-secondary-700 font-semibold transition-colors break-all'
              >
                {CONTACT_INFO.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow'
            >
              <div className='w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <IoLocation className='w-8 h-8 text-accent-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Visit Us</h3>
              <p className='text-gray-600 mb-4'>Prime beachfront location</p>
              <address className='text-accent-600 font-semibold not-italic'>
                {CONTACT_INFO.address.street}<br />
                {CONTACT_INFO.address.city}, {CONTACT_INFO.address.country}
              </address>
            </motion.div>
          </div>

          {/* Department Contacts */}
          <div className='mb-16'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>Department Contacts</h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Connect directly with our specialized teams for faster, more personalized service
              </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {DEPARTMENTS.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6'
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${dept.color}`}>
                    <dept.icon className='w-6 h-6' />
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>{dept.name}</h3>
                  <p className='text-sm text-gray-600 mb-4'>{dept.description}</p>
                  
                  <div className='space-y-2'>
                    <div className='flex items-center gap-2'>
                      <IoCall className='w-4 h-4 text-gray-400' />
                      <a href={`tel:${dept.phone}`} className='text-sm text-primary-600 hover:text-primary-700'>
                        {dept.phone}
                      </a>
                    </div>
                    <div className='flex items-center gap-2'>
                      <IoMail className='w-4 h-4 text-gray-400' />
                      <a href={`mailto:${dept.email}`} className='text-sm text-primary-600 hover:text-primary-700 truncate'>
                        {dept.email}
                      </a>
                    </div>
                    <div className='flex items-center gap-2'>
                      <IoTime className='w-4 h-4 text-gray-400' />
                      <span className='text-sm text-gray-600'>{dept.hours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section Navigation */}
          <div className='flex justify-center mb-12'>
            <div className='flex bg-white rounded-xl shadow-lg p-2 gap-1'>
              <button
                onClick={() => setActiveSection('contact')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === 'contact'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Contact Form
              </button>
              <button
                onClick={() => setActiveSection('directions')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === 'directions'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Directions & Map
              </button>
              <button
                onClick={() => setActiveSection('social')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === 'social'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Social Media
              </button>
            </div>
          </div>

          {/* Dynamic Content Based on Active Section */}
          <div className='space-y-12'>
            {activeSection === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className='grid grid-cols-1 lg:grid-cols-2 gap-12'
              >
                <ContactForm />
                <InteractiveMap />
              </motion.div>
            )}

            {activeSection === 'directions' && (
              <motion.div
                key="directions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <DirectionsCard />
              </motion.div>
            )}

            {activeSection === 'social' && (
              <motion.div
                key="social"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <SocialLinks showStats={true} />
              </motion.div>
            )}
          </div>

          {/* Emergency Contact */}
          <div className='mt-16'>
            <div className='bg-red-50 border border-red-200 rounded-2xl p-6'>
              <div className='flex items-center gap-4'>
                <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0'>
                  <IoShield className='w-8 h-8 text-red-600' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-xl font-bold text-red-900 mb-2'>Emergency Contact</h3>
                  <p className='text-red-800 mb-3'>
                    For urgent matters or emergencies during your stay, our security team is available 24/7.
                  </p>
                  <a
                    href='tel:+994123456789'
                    className='inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium'
                  >
                    <IoCall className='w-5 h-5' />
                    Emergency Hotline: +994 12 345 6789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}