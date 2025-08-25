'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import {
  Users,
  Calendar,
  MapPin,
  Trophy,
  Building,
  Star,
  CheckCircle,
} from 'lucide-react';

interface Package {
  name: string;
  description: string;
  duration: string;
  capacity: string;
  price: string;
  features: string[];
  ideal_for: string[];
  popular?: boolean;
}

interface CorporatePartner {
  name: string;
  logo: string;
  event_type: string;
  description: string;
}

interface EventPackageProps {
  packages?: Package[];
  partners?: CorporatePartner[];
}

export default function EventPackage({
  packages,
  partners,
}: EventPackageProps) {
  const t = useTranslations('conferences');

  const defaultPackages: Package[] = [
    {
      name: 'Corporate Meeting Package',
      description:
        'Perfect for business meetings, workshops, and corporate training sessions',
      duration: '4-8 hours',
      capacity: 'Up to 50 attendees',
      price: 'From $800/day',
      features: [
        'Meeting room with AV equipment',
        'Coffee breaks (2x)',
        'Business lunch',
        'High-speed Wi-Fi',
        'Flipchart and stationery',
        'Dedicated event coordinator',
      ],
      ideal_for: [
        'Board meetings',
        'Training sessions',
        'Workshops',
        'Team meetings',
      ],
    },
    {
      name: 'Conference & Event Package',
      description:
        'Comprehensive solution for large conferences, seminars, and corporate events',
      duration: '1-3 days',
      capacity: 'Up to 300 attendees',
      price: 'From $2,500/day',
      popular: true,
      features: [
        'Main conference hall',
        'Breakout rooms',
        'Professional AV setup',
        'Welcome reception',
        'Lunch and coffee breaks',
        'Accommodation discounts',
        'Transportation coordination',
        'Welcome gifts and materials',
      ],
      ideal_for: [
        'Conferences',
        'Seminars',
        'Product launches',
        'Annual meetings',
      ],
    },
    {
      name: 'Corporate Retreat Package',
      description:
        'Complete retreat experience combining business and leisure activities',
      duration: '2-5 days',
      capacity: 'Up to 100 attendees',
      price: 'From $1,500/person',
      features: [
        'Accommodation in corporate building',
        'Meeting facilities',
        'All meals included',
        'Team building activities',
        'Beach access and recreation',
        'Wellness center access',
        'Evening entertainment',
        'Airport transfers',
      ],
      ideal_for: [
        'Team building',
        'Corporate retreats',
        'Leadership programs',
        'Company incentives',
      ],
    },
  ];

  const defaultPartners: CorporatePartner[] = [
    {
      name: 'Saipem',
      logo: '/images/partners/saipem-logo.png',
      event_type: 'Corporate Training',
      description:
        'Multi-day training programs and team building events for international staff',
    },
    {
      name: 'BP (British Petroleum)',
      logo: '/images/partners/bp-logo.png',
      event_type: 'Executive Meetings',
      description:
        'High-level executive retreats and strategic planning sessions',
    },
    {
      name: 'Baku City Circuit (F1)',
      logo: '/images/partners/baku-circuit-logo.png',
      event_type: 'Employee Events',
      description:
        'Annual employee appreciation events and corporate celebrations',
    },
    {
      name: 'FIFA Beach Football',
      logo: '/images/partners/fifa-logo.png',
      event_type: 'Sports Organization',
      description: 'International meetings and tournament organization events',
    },
  ];

  const eventPackages = packages || defaultPackages;
  const corporatePartners = partners || defaultPartners;

  return (
    <section className='section-padding bg-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='heading-secondary mb-4'>Corporate Event Packages</h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            From intimate board meetings to large-scale conferences, our
            comprehensive packages provide everything you need for successful
            corporate events.
          </p>
        </div>

        {/* Package Cards */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
          {eventPackages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-lg transition-shadow ${
                pkg.popular ? 'ring-2 ring-primary-500 relative' : ''
              }`}
            >
              {pkg.popular && (
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                  <div className='bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center'>
                    <Star className='h-4 w-4 mr-1' />
                    Most Popular
                  </div>
                </div>
              )}

              <div className='p-8'>
                <h3 className='text-2xl font-bold mb-3'>{pkg.name}</h3>
                <p className='text-gray-600 mb-4'>{pkg.description}</p>

                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div>
                    <div className='flex items-center text-gray-600 mb-2'>
                      <Calendar className='h-4 w-4 mr-2' />
                      <span className='text-sm'>Duration</span>
                    </div>
                    <p className='font-semibold'>{pkg.duration}</p>
                  </div>

                  <div>
                    <div className='flex items-center text-gray-600 mb-2'>
                      <Users className='h-4 w-4 mr-2' />
                      <span className='text-sm'>Capacity</span>
                    </div>
                    <p className='font-semibold'>{pkg.capacity}</p>
                  </div>
                </div>

                <div className='mb-6'>
                  <p className='text-3xl font-bold text-primary-600 mb-4'>
                    {pkg.price}
                  </p>
                </div>

                <div className='mb-6'>
                  <h4 className='font-semibold mb-3'>Package Includes:</h4>
                  <ul className='space-y-2'>
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='flex items-center text-gray-600'
                      >
                        <CheckCircle className='h-4 w-4 text-green-500 mr-3 flex-shrink-0' />
                        <span className='text-sm'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='mb-6'>
                  <h4 className='font-semibold mb-3'>Ideal For:</h4>
                  <div className='flex flex-wrap gap-2'>
                    {pkg.ideal_for.map((type, typeIndex) => (
                      <span
                        key={typeIndex}
                        className='bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm'
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  className={`w-full ${pkg.popular ? 'bg-primary-600 hover:bg-primary-700' : ''}`}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Partners Section */}
        <div className='bg-white rounded-2xl shadow-soft p-8'>
          <div className='text-center mb-8'>
            <h3 className='text-3xl font-bold mb-4'>
              Trusted by Leading Organizations
            </h3>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              We're proud to have hosted successful events for these prestigious
              international organizations
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {corporatePartners.map((partner, index) => (
              <div
                key={index}
                className='border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors'
              >
                <div className='flex items-start gap-4'>
                  <div className='w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Building className='h-8 w-8 text-gray-600' />
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between mb-2'>
                      <h4 className='text-xl font-bold'>{partner.name}</h4>
                      <span className='bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs'>
                        {partner.event_type}
                      </span>
                    </div>
                    <p className='text-gray-600 text-sm'>
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stats */}
          <div className='border-t border-gray-200 pt-8 mt-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center'>
              <div>
                <div className='text-3xl font-bold text-primary-600 mb-2'>
                  500+
                </div>
                <p className='text-gray-600'>Corporate Events</p>
              </div>
              <div>
                <div className='text-3xl font-bold text-primary-600 mb-2'>
                  50+
                </div>
                <p className='text-gray-600'>International Companies</p>
              </div>
              <div>
                <div className='text-3xl font-bold text-primary-600 mb-2'>
                  25,000+
                </div>
                <p className='text-gray-600'>Business Guests</p>
              </div>
              <div>
                <div className='text-3xl font-bold text-primary-600 mb-2'>
                  98%
                </div>
                <p className='text-gray-600'>Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className='text-center mt-8'>
            <Button size='lg' className='mr-4'>
              Schedule Consultation
            </Button>
            <Button variant='outline' size='lg'>
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
