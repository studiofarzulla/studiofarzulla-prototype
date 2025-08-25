'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { IoSend, IoCheckmark, IoAlert, IoCall, IoMail } from 'react-icons/io5';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  category: z.enum([
    'general',
    'reservation',
    'event',
    'complaint',
    'partnership',
  ]),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  preferredContact: z.enum(['email', 'phone']),
  newsletter: z.boolean().default(false),
});

type ContactFormData = z.infer<typeof contactSchema>;

const CONTACT_CATEGORIES = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'reservation', label: 'Reservation' },
  { value: 'event', label: 'Events & Conferences' },
  { value: 'complaint', label: 'Complaint or Feedback' },
  { value: 'partnership', label: 'Business Partnership' },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      category: 'general',
      preferredContact: 'email',
      newsletter: false,
    },
  });

  const selectedCategory = watch('category');
  const preferredContact = watch('preferredContact');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In production, this would be an actual API call
      console.log('Form submitted:', data);

      setIsSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCategoryDescription = (category: string) => {
    const descriptions = {
      general: 'For general questions about our hotel and services',
      reservation: 'For room bookings and reservation inquiries',
      event: 'For weddings, conferences, and special events',
      complaint: 'For feedback or concerns about your experience',
      partnership: 'For business opportunities and collaborations',
    };
    return descriptions[category as keyof typeof descriptions];
  };

  if (isSuccess) {
    return (
      <div className='bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-in-scale'>
        <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
          <IoCheckmark className='w-8 h-8 text-green-600' />
        </div>
        <h3 className='text-2xl font-bold text-green-800 mb-2'>
          Message Sent Successfully!
        </h3>
        <p className='text-green-700 mb-6'>
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className='px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors'
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
      {/* Header */}
      <div className='bg-gradient-to-r from-primary-500 to-accent-500 p-6 text-white'>
        <h2 className='text-2xl font-bold mb-2'>Get in Touch</h2>
        <p className='text-primary-100'>
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='p-6 space-y-6'>
        {/* Name Fields */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='firstName'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              First Name *
            </label>
            <input
              type='text'
              id='firstName'
              {...register('firstName')}
              className={cn(
                'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                errors.firstName ? 'border-red-300' : 'border-gray-300'
              )}
              placeholder='Your first name'
            />
            {errors.firstName && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='lastName'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Last Name *
            </label>
            <input
              type='text'
              id='lastName'
              {...register('lastName')}
              className={cn(
                'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                errors.lastName ? 'border-red-300' : 'border-gray-300'
              )}
              placeholder='Your last name'
            />
            {errors.lastName && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Contact Fields */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Email Address *
            </label>
            <input
              type='email'
              id='email'
              {...register('email')}
              className={cn(
                'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                errors.email ? 'border-red-300' : 'border-gray-300'
              )}
              placeholder='your@email.com'
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Phone Number
            </label>
            <input
              type='tel'
              id='phone'
              {...register('phone')}
              className={cn(
                'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                errors.phone ? 'border-red-300' : 'border-gray-300'
              )}
              placeholder='+994 12 345 6789'
            />
            {errors.phone && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor='category'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            Category *
          </label>
          <select
            id='category'
            {...register('category')}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
          >
            {CONTACT_CATEGORIES.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <p className='mt-1 text-sm text-gray-500'>
            {getCategoryDescription(selectedCategory)}
          </p>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor='subject'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            Subject *
          </label>
          <input
            type='text'
            id='subject'
            {...register('subject')}
            className={cn(
              'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              errors.subject ? 'border-red-300' : 'border-gray-300'
            )}
            placeholder='Brief subject of your message'
          />
          {errors.subject && (
            <p className='mt-1 text-sm text-red-600'>
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            Message *
          </label>
          <textarea
            id='message'
            rows={5}
            {...register('message')}
            className={cn(
              'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical',
              errors.message ? 'border-red-300' : 'border-gray-300'
            )}
            placeholder='Tell us more about your inquiry...'
          />
          {errors.message && (
            <p className='mt-1 text-sm text-red-600'>
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-3'>
            Preferred Contact Method
          </label>
          <div className='flex gap-4'>
            <label className='flex items-center'>
              <input
                type='radio'
                value='email'
                {...register('preferredContact')}
                className='w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500'
              />
              <span className='ml-2 text-sm text-gray-700 flex items-center gap-2'>
                <IoMail className='w-4 h-4' />
                Email
              </span>
            </label>
            <label className='flex items-center'>
              <input
                type='radio'
                value='phone'
                {...register('preferredContact')}
                className='w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500'
              />
              <span className='ml-2 text-sm text-gray-700 flex items-center gap-2'>
                <IoCall className='w-4 h-4' />
                Phone
              </span>
            </label>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className='flex items-start gap-3'>
          <input
            type='checkbox'
            id='newsletter'
            {...register('newsletter')}
            className='mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500'
          />
          <label htmlFor='newsletter' className='text-sm text-gray-700'>
            I'd like to receive updates and special offers from The Crescent
            Beach Hotel
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <div className='flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg'>
            <IoAlert className='w-5 h-5 text-red-600' />
            <p className='text-red-700'>{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type='submit'
          disabled={isSubmitting}
          className={cn(
            'w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium transition-colors',
            isSubmitting
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
          )}
        >
          {isSubmitting ? (
            <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
          ) : (
            <IoSend className='w-5 h-5' />
          )}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {/* Footer Note */}
        <p className='text-xs text-gray-500 text-center'>
          By submitting this form, you agree to our privacy policy. We'll never
          share your information with third parties.
        </p>
      </form>
    </div>
  );
}
