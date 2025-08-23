'use client';

import { useTranslations } from 'next-intl';
import { Waves, Thermometer, Clock, Users } from 'lucide-react';

interface PoolDetails {
  name: string;
  type: string;
  temperature?: string;
  depth: string;
  capacity: string;
  hours: string;
  features: string[];
  image: string;
}

interface PoolInfoProps {
  pools: PoolDetails[];
}

export default function PoolInfo({ pools }: PoolInfoProps) {
  const t = useTranslations('amenities');

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Pool Facilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enjoy our collection of pristine swimming pools, each designed for different experiences and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pools.map((pool, index) => (
            <div key={index} className="bg-white rounded-lg shadow-soft overflow-hidden">
              <div className="relative h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pool.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{pool.name}</h3>
                  <p className="text-primary-200">{pool.type}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {pool.temperature && (
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-primary-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-600">Temperature</p>
                        <p className="font-semibold">{pool.temperature}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <Waves className="h-5 w-5 text-primary-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Depth</p>
                      <p className="font-semibold">{pool.depth}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Capacity</p>
                      <p className="font-semibold">{pool.capacity}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Hours</p>
                      <p className="font-semibold">{pool.hours}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Features & Amenities</h4>
                  <ul className="space-y-2">
                    {pool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}