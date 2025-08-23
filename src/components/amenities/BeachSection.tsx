'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Waves, Umbrella, Volleyball, Ship, Sparkles, Users } from 'lucide-react';

interface BeachActivity {
  name: string;
  description: string;
  icon: any;
  available: boolean;
}

interface BeachSectionProps {
  activities?: BeachActivity[];
}

export default function BeachSection({ activities }: BeachSectionProps) {
  const t = useTranslations('amenities');

  const defaultActivities: BeachActivity[] = [
    {
      name: 'Beach Volleyball',
      description: 'Professional court with equipment provided',
      icon: Volleyball,
      available: true
    },
    {
      name: 'Water Sports',
      description: 'Kayaking, paddleboarding, and more',
      icon: Ship,
      available: true
    },
    {
      name: 'Premium Sunbeds',
      description: 'Luxury loungers with umbrellas and service',
      icon: Umbrella,
      available: true
    },
    {
      name: 'Beach Parties',
      description: 'Special events and celebrations',
      icon: Sparkles,
      available: true
    }
  ];

  const beachActivities = activities || defaultActivities;

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="heading-secondary mb-6">Private Caspian Sea Beach</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Experience the ultimate beachfront luxury with exclusive access to our pristine private beach 
              on the Caspian Sea. Enjoy crystal-clear waters, premium beach services, and a variety of 
              water activities in complete privacy and comfort.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Waves className="h-5 w-5 text-primary-600 mr-3" />
                <span className="text-gray-700">500 meters of private shoreline</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary-600 mr-3" />
                <span className="text-gray-700">Dedicated beach staff and lifeguard</span>
              </div>
              <div className="flex items-center">
                <Umbrella className="h-5 w-5 text-primary-600 mr-3" />
                <span className="text-gray-700">Complimentary sunbeds and umbrellas</span>
              </div>
            </div>
            <Button size="lg">Reserve Beach Access</Button>
          </div>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/amenities/private-beach-hero.jpg" 
                alt="Private Beach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Beach Activities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Beach Activities & Services</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From relaxation to adventure, our beach offers something for every guest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beachActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-soft hover:shadow-lg transition-shadow">
                  <div className="bg-primary-100 p-3 rounded-full w-fit mb-4">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="font-semibold mb-2">{activity.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activity.available 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {activity.available ? 'Available' : 'Seasonal'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Beach Services */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Premium Beach Services</h3>
            <p className="text-lg text-gray-600">Enhance your beach experience with our exclusive services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-soft">
                <Umbrella className="h-10 w-10 text-primary-600" />
              </div>
              <h4 className="font-semibold mb-2">Beach Concierge</h4>
              <p className="text-gray-600 text-sm">
                Personal assistance for towels, drinks, and equipment
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-soft">
                <Sparkles className="h-10 w-10 text-primary-600" />
              </div>
              <h4 className="font-semibold mb-2">Beachside Dining</h4>
              <p className="text-gray-600 text-sm">
                Fresh seafood and refreshments delivered to your sunbed
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-soft">
                <Users className="h-10 w-10 text-primary-600" />
              </div>
              <h4 className="font-semibold mb-2">Private Cabanas</h4>
              <p className="text-gray-600 text-sm">
                Exclusive beachfront cabanas for ultimate privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}