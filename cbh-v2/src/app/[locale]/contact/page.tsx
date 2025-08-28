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
  Twitter,
} from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
      message: '',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden">
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

        <div className="container relative z-10 text-center text-white">
          <h1 className="heading-1 mb-4 drop-shadow-2xl">{t('title')}</h1>
          <p className="mx-auto max-w-3xl text-xl opacity-90 md:text-2xl">{t('subtitle')}</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-primary-600"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-primary-600"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-primary-600"
                        placeholder="+994 50 123 45 67"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Subject *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-primary-600"
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
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-primary-600"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 py-4 text-lg font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 p-8 text-white">
                <h3 className="mb-6 text-xl font-semibold">Quick Contact</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm opacity-90">
                        Bilgah Beach, Baku
                        <br />
                        Azerbaijan, AZ1000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm opacity-90">+994 12 345 67 89</p>
                      <p className="text-sm opacity-90">+994 50 123 45 67</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm opacity-90">info@crescentbeach.az</p>
                      <p className="text-sm opacity-90">reservations@crescentbeach.az</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Reception Hours</p>
                      <p className="text-sm opacity-90">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="rounded-2xl bg-white p-6 shadow-xl">
                <h3 className="mb-4 text-lg font-semibold">Department Contacts</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b py-2">
                    <span className="text-sm text-gray-600">Reservations</span>
                    <a
                      href="tel:+994123456701"
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      +994 12 345 67 01
                    </a>
                  </div>
                  <div className="flex items-center justify-between border-b py-2">
                    <span className="text-sm text-gray-600">Events</span>
                    <a
                      href="tel:+994123456702"
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      +994 12 345 67 02
                    </a>
                  </div>
                  <div className="flex items-center justify-between border-b py-2">
                    <span className="text-sm text-gray-600">Restaurant</span>
                    <a
                      href="tel:+994123456703"
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      +994 12 345 67 03
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600">Spa & Wellness</span>
                    <a
                      href="tel:+994123456704"
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      +994 12 345 67 04
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="rounded-2xl bg-white p-6 shadow-xl">
                <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-all hover:bg-primary-600 hover:text-white"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-all hover:bg-primary-600 hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-all hover:bg-primary-600 hover:text-white"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-all hover:bg-primary-600 hover:text-white"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96">
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

        <div className="absolute bottom-8 left-8 max-w-sm rounded-xl bg-white p-6 shadow-xl">
          <h3 className="mb-2 text-lg font-semibold">The Crescent Beach Hotel</h3>
          <p className="mb-3 text-sm text-gray-600">Bilgah Beach, Baku, Azerbaijan</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            Get Directions →
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            <details className="rounded-lg bg-white shadow-md">
              <summary className="cursor-pointer px-6 py-4 font-medium hover:bg-gray-50">
                What are the check-in and check-out times?
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Check-in is from 3:00 PM and check-out is until 12:00 PM. Early check-in and late
                check-out may be available upon request.
              </div>
            </details>

            <details className="rounded-lg bg-white shadow-md">
              <summary className="cursor-pointer px-6 py-4 font-medium hover:bg-gray-50">
                Is parking available at the hotel?
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Yes, we offer complimentary valet parking and self-parking for all guests.
              </div>
            </details>

            <details className="rounded-lg bg-white shadow-md">
              <summary className="cursor-pointer px-6 py-4 font-medium hover:bg-gray-50">
                Do you offer airport transfer services?
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Yes, we provide airport transfer services. Please contact our concierge team to
                arrange your transfer.
              </div>
            </details>

            <details className="rounded-lg bg-white shadow-md">
              <summary className="cursor-pointer px-6 py-4 font-medium hover:bg-gray-50">
                Are pets allowed in the hotel?
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                We welcome well-behaved pets in designated pet-friendly rooms. Additional fees may
                apply.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
