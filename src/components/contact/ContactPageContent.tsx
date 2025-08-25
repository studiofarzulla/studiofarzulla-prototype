'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/LocaleProvider';
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
  IoShield,
} from 'react-icons/io5';
import ContactForm from '@/components/contact/ContactForm';
import InteractiveMap from '@/components/contact/InteractiveMap';
import DirectionsCard from '@/components/contact/DirectionsCard';

// Force static generation for this page
export const dynamic = 'force-static';

export default function ContactPageContent() {
  const t = useTranslations('contact');
  const [activeTab, setActiveTab] = useState('general');

  const contactInfo = {
    phone: '+994 12 599 88 88',
    email: 'info@crescentbeach.az',
    address: 'Bilgah Beach, Baku AZ1023, Azerbaijan',
    hours: 'Available 24/7 for guests',
  };

  const departments = [
    {
      id: 'reservations',
      icon: IoCalendar,
      title: 'Reservations',
      email: 'reservations@crescentbeach.az',
      phone: '+994 12 599 88 01',
      hours: '24/7 Support',
      description: 'Room bookings and availability inquiries',
    },
    {
      id: 'events',
      icon: IoPeople,
      title: 'Events & Conferences',
      email: 'events@crescentbeach.az',
      phone: '+994 12 599 88 02',
      hours: 'Mon-Fri: 9:00 - 18:00',
      description: 'Wedding planning, conferences, and special events',
    },
    {
      id: 'dining',
      icon: IoBusinessOutline,
      title: 'Dining Reservations',
      email: 'dining@crescentbeach.az',
      phone: '+994 12 599 88 03',
      hours: 'Daily: 10:00 - 22:00',
      description: 'Restaurant bookings and culinary experiences',
    },
    {
      id: 'wellness',
      icon: IoHeart,
      title: 'Spa & Wellness',
      email: 'spa@crescentbeach.az',
      phone: '+994 12 599 88 04',
      hours: 'Daily: 9:00 - 21:00',
      description: 'Spa treatments and wellness programs',
    },
    {
      id: 'concierge',
      icon: IoGlobe,
      title: 'Concierge Services',
      email: 'concierge@crescentbeach.az',
      phone: '+994 12 599 88 05',
      hours: '24/7 Support',
      description: 'Local experiences and guest services',
    },
    {
      id: 'security',
      icon: IoShield,
      title: 'Guest Relations',
      email: 'guestrelations@crescentbeach.az',
      phone: '+994 12 599 88 06',
      hours: '24/7 Support',
      description: 'Special requests and feedback',
    },
  ];


  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary-500 to-primary-700 py-32'>
        <div className='absolute inset-0 bg-black/20' />
        <div className='container mx-auto px-4 relative z-10'>
          <div className='text-center text-white max-w-4xl mx-auto animate-fade-in-up'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              {t('page_title')}
            </h1>
            <p className='text-xl md:text-2xl text-white/90'>{t('page_subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className='bg-gray-50 py-8 border-b'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div className='flex items-center space-x-3 animate-fade-in-up'>
              <div className='bg-primary-100 p-3 rounded-full'>
                <IoCall className='h-6 w-6 text-primary-600' />
              </div>
              <div>
                <p className='text-sm text-gray-600'>Call Us</p>
                <p className='font-semibold'>{contactInfo.phone}</p>
              </div>
            </div>

            <div className='flex items-center space-x-3 animate-fade-in-up animation-delay-100'>
              <div className='bg-primary-100 p-3 rounded-full'>
                <IoMail className='h-6 w-6 text-primary-600' />
              </div>
              <div>
                <p className='text-sm text-gray-600'>Email</p>
                <p className='font-semibold'>{contactInfo.email}</p>
              </div>
            </div>

            <div className='flex items-center space-x-3 animate-fade-in-up animation-delay-200'>
              <div className='bg-primary-100 p-3 rounded-full'>
                <IoLocation className='h-6 w-6 text-primary-600' />
              </div>
              <div>
                <p className='text-sm text-gray-600'>Location</p>
                <p className='font-semibold'>{contactInfo.address}</p>
              </div>
            </div>

            <div className='flex items-center space-x-3 animate-fade-in-up animation-delay-300'>
              <div className='bg-primary-100 p-3 rounded-full'>
                <IoTime className='h-6 w-6 text-primary-600' />
              </div>
              <div>
                <p className='text-sm text-gray-600'>Support</p>
                <p className='font-semibold'>{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='animate-slide-in-left'>
              <h2 className='text-3xl font-bold mb-6'>Send Us a Message</h2>
              <p className='text-gray-600 mb-8'>
                Have a question or special request? Fill out the form below and
                our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Department Contacts */}
            <div className='animate-slide-in-right'>
              <h2 className='text-3xl font-bold mb-6'>Department Contacts</h2>
              <p className='text-gray-600 mb-8'>
                Connect directly with our specialized departments for faster
                service.
              </p>

              <div className='space-y-4'>
                {departments.map(dept => {
                  const Icon = dept.icon;
                  return (
                    <div
                      key={dept.id}
                      className='bg-white border rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'
                    >
                      <div className='flex items-start space-x-4'>
                        <div className='bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-lg'>
                          <Icon className='h-6 w-6 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h3 className='font-bold text-lg mb-2'>
                            {dept.title}
                          </h3>
                          <p className='text-gray-600 text-sm mb-3'>
                            {dept.description}
                          </p>
                          <div className='space-y-1 text-sm'>
                            <p className='flex items-center'>
                              <IoMail className='h-4 w-4 mr-2 text-gray-400' />
                              <a
                                href={`mailto:${dept.email}`}
                                className='text-primary-600 hover:underline'
                              >
                                {dept.email}
                              </a>
                            </p>
                            <p className='flex items-center'>
                              <IoCall className='h-4 w-4 mr-2 text-gray-400' />
                              <a
                                href={`tel:${dept.phone.replace(/\s/g, '')}`}
                                className='text-primary-600 hover:underline'
                              >
                                {dept.phone}
                              </a>
                            </p>
                            <p className='flex items-center'>
                              <IoTime className='h-4 w-4 mr-2 text-gray-400' />
                              <span className='text-gray-600'>
                                {dept.hours}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12 animate-fade-in-up'>
            <h2 className='text-3xl font-bold mb-4'>Find Us</h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Located on the stunning shores of the Caspian Sea, just 35 minutes
              from Baku city center and 45 minutes from Heydar Aliyev
              International Airport.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <InteractiveMap />
            <DirectionsCard />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto animate-fade-in-up'>
            <h2 className='text-3xl font-bold text-center mb-12'>
              Frequently Asked Questions
            </h2>

            <div className='space-y-6'>
              <div className='bg-white border rounded-lg p-6'>
                <h3 className='font-bold text-lg mb-2'>
                  What are your check-in and check-out times?
                </h3>
                <p className='text-gray-600'>
                  Check-in is from 3:00 PM and check-out is until 12:00 PM.
                  Early check-in and late check-out may be available upon
                  request, subject to availability.
                </p>
              </div>

              <div className='bg-white border rounded-lg p-6'>
                <h3 className='font-bold text-lg mb-2'>
                  Do you provide airport transfers?
                </h3>
                <p className='text-gray-600'>
                  Yes, we offer premium airport transfer services. Please
                  contact our concierge team at least 24 hours in advance to
                  arrange your transfer.
                </p>
              </div>

              <div className='bg-white border rounded-lg p-6'>
                <h3 className='font-bold text-lg mb-2'>
                  Is parking available at the hotel?
                </h3>
                <p className='text-gray-600'>
                  Yes, we provide complimentary valet parking and self-parking
                  options for all our guests. Electric vehicle charging stations
                  are also available.
                </p>
              </div>

              <div className='bg-white border rounded-lg p-6'>
                <h3 className='font-bold text-lg mb-2'>
                  Are pets allowed at the hotel?
                </h3>
                <p className='text-gray-600'>
                  We welcome well-behaved pets up to 15 kg. Please inform us in
                  advance about bringing your pet. Additional fees may apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
