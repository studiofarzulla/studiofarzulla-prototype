'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (for prototype, just show alert)
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <h1 className="heading-1 mb-4 drop-shadow-2xl">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                        placeholder="+994 50 123 45 67"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Room Reservation</option>
                        <option value="event">Event Inquiry</option>
                        <option value="dining">Restaurant Booking</option>
                        <option value="general">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm opacity-90">
                        Bilgah Beach, Baku<br />
                        Azerbaijan, AZ1000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm opacity-90">+994 12 345 67 89</p>
                      <p className="text-sm opacity-90">+994 50 123 45 67</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm opacity-90">info@crescentbeach.az</p>
                      <p className="text-sm opacity-90">reservations@crescentbeach.az</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Reception Hours</p>
                      <p className="text-sm opacity-90">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Department Contacts</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm text-gray-600">Reservations</span>
                    <a href="tel:+994123456701" className="text-sm text-primary-600 hover:text-primary-700">
                      +994 12 345 67 01
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm text-gray-600">Events</span>
                    <a href="tel:+994123456702" className="text-sm text-primary-600 hover:text-primary-700">
                      +994 12 345 67 02
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm text-gray-600">Restaurant</span>
                    <a href="tel:+994123456703" className="text-sm text-primary-600 hover:text-primary-700">
                      +994 12 345 67 03
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Spa & Wellness</span>
                    <a href="tel:+994123456704" className="text-sm text-primary-600 hover:text-primary-700">
                      +994 12 345 67 04
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12156.256426821097!2d50.05451!3d40.45737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI3JzI2LjUiTiA1MMKwMDMnMTYuNCJF!5e0!3m2!1sen!2saz!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale"
        />
        
        <div className="absolute bottom-8 left-8 bg-white rounded-xl shadow-xl p-6 max-w-sm">
          <h3 className="font-semibold text-lg mb-2">The Crescent Beach Hotel</h3>
          <p className="text-sm text-gray-600 mb-3">
            Bilgah Beach, Baku, Azerbaijan
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 font-medium text-sm hover:text-primary-700"
          >
            Get Directions →
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white rounded-lg shadow-md">
              <summary className="px-6 py-4 cursor-pointer font-medium hover:bg-gray-50">
                What are the check-in and check-out times?
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Check-in is from 3:00 PM and check-out is until 12:00 PM. Early check-in and late check-out may be available upon request.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md">
              <summary className="px-6 py-4 cursor-pointer font-medium hover:bg-gray-50">
                Is parking available at the hotel?
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Yes, we offer complimentary valet parking and self-parking for all guests.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md">
              <summary className="px-6 py-4 cursor-pointer font-medium hover:bg-gray-50">
                Do you offer airport transfer services?
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Yes, we provide airport transfer services. Please contact our concierge team to arrange your transfer.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md">
              <summary className="px-6 py-4 cursor-pointer font-medium hover:bg-gray-50">
                Are pets allowed in the hotel?
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                We welcome well-behaved pets in designated pet-friendly rooms. Additional fees may apply.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}