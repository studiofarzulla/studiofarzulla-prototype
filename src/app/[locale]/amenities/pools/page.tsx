import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import FacilityHero from '@/components/amenities/FacilityHero';
import PoolInfo from '@/components/amenities/PoolInfo';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, Waves, Thermometer, Clock, Users, Droplets } from 'lucide-react';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Swimming Pools - Indoor & Infinity Pools | The Crescent Beach Hotel',
  description: 'Enjoy our stunning infinity pool with Caspian Sea views and heated indoor pool. Premium pool facilities with bar service and luxury loungers.',
};

export default function PoolsPage() {
  const t = useTranslations('amenities');

  const poolDetails = [
    {
      name: 'Infinity Pool',
      type: 'Saltwater Infinity Pool',
      depth: '1.2m - 2.8m',
      capacity: '60 guests',
      hours: '6:00 AM - 10:00 PM',
      features: [
        'Infinity edge design overlooking Caspian Sea',
        'Saltwater filtration system',
        'Underwater LED lighting',
        'Poolside bar service',
        'Premium loungers included',
        'Towel service available',
        'Children\'s shallow area',
        'Professional lifeguard on duty'
      ],
      image: '/images/amenities/infinity-pool-detailed.jpg'
    },
    {
      name: 'Indoor Heated Pool',
      type: 'All-Weather Indoor Pool',
      temperature: '28°C (82°F)',
      depth: '1.0m - 2.2m',
      capacity: '40 guests',
      hours: '6:00 AM - 11:00 PM',
      features: [
        'Year-round climate control',
        'UV water treatment system',
        'Spa jets and relaxation features',
        'Natural skylight design',
        'Adjacent relaxation lounge',
        'Changing rooms with lockers',
        'Fresh towels provided',
        'Quiet relaxation atmosphere'
      ],
      image: '/images/amenities/indoor-pool-detailed.jpg'
    },
    {
      name: 'Kids Pool',
      type: 'Family-Friendly Pool',
      depth: '0.6m - 1.0m',
      capacity: '25 children',
      hours: '8:00 AM - 8:00 PM',
      features: [
        'Shallow design for safety',
        'Colorful water features',
        'Non-slip pool deck',
        'Shaded seating for parents',
        'Water toys provided',
        'Dedicated lifeguard supervision',
        'Fun water playground elements',
        'Adjacent kids changing area'
      ],
      image: '/images/amenities/kids-pool.jpg'
    }
  ];

  return (
    <div className='min-h-screen'>
      {/* Navigation */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/amenities" className="inline-flex items-center text-gray-600 hover:text-primary-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Amenities
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <FacilityHero
        title="Premium Swimming Pools"
        subtitle="Indoor & outdoor aquatic paradise"
        description="Experience luxury swimming in our stunning infinity pool with Caspian Sea views, climate-controlled indoor pool, and dedicated children's pool area."
        backgroundImage="/images/amenities/pools-hero.jpg"
        ctaText="Reserve Pool Access"
        ctaAction={() => console.log('Reserve pool access')}
      />

      {/* Pool Overview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">World-Class Aquatic Facilities</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our swimming pool complex features three distinct pools designed to cater to every guest's 
                preferences and needs. From the breathtaking infinity pool with panoramic Caspian Sea views 
                to our climate-controlled indoor facility, each pool offers a unique and luxurious experience.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                All pools are maintained to the highest standards with professional lifeguard services, 
                premium amenities, and dedicated staff ensuring your safety and comfort. Whether you're 
                seeking active swimming, peaceful relaxation, or family fun, our pools provide the perfect 
                aquatic environment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Waves className="h-8 w-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold mb-2">Infinity Design</h4>
                  <p className="text-gray-600 text-sm">
                    Stunning infinity edge creating a seamless connection with the Caspian Sea horizon
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Thermometer className="h-8 w-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold mb-2">Climate Controlled</h4>
                  <p className="text-gray-600 text-sm">
                    Indoor pool with perfect temperature control for year-round swimming comfort
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-soft p-6">
                <h3 className="text-xl font-semibold mb-4">Pool Complex Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Three unique pool experiences</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Professional lifeguard services</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Premium loungers & cabanas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Poolside food & beverage service</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Changing rooms with amenities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Towel and equipment service</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Operating Hours</h3>
                <div className="space-y-2 text-blue-100 text-sm">
                  <p>Infinity Pool: 6:00 AM - 10:00 PM</p>
                  <p>Indoor Pool: 6:00 AM - 11:00 PM</p>
                  <p>Kids Pool: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pool Information */}
      <PoolInfo pools={poolDetails} />

      {/* Pool Bar & Dining */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/amenities/pool-bar.jpg" 
                  alt="Pool Bar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Pool Bar & Grill</h3>
                <p className="text-gray-200">Refreshments with a view</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Poolside Dining & Bar</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Enjoy refreshing beverages and delicious light meals without leaving the pool area. 
                Our poolside bar and grill offers a full menu of tropical drinks, healthy snacks, 
                and fresh meals delivered right to your lounger.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <Droplets className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold">Tropical Cocktails</h4>
                  <p className="text-gray-600 text-sm">Fresh fruit cocktails and premium beverages</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <Users className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold">Light Meals</h4>
                  <p className="text-gray-600 text-sm">Healthy salads, grilled items, and fresh seafood</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Pool Bar Features:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Full service bar with premium spirits</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Fresh fruit smoothies and juices</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Light lunch menu available</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Service to your poolside lounger</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Activities & Programs */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Pool Activities & Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our various pool-based activities and fitness programs designed for all ages and skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-soft p-8 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Waves className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Aqua Fitness</h3>
              <p className="text-gray-600 mb-4">
                Low-impact water aerobics classes suitable for all fitness levels, led by certified instructors.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Morning and evening classes</li>
                <li>• Beginner to advanced levels</li>
                <li>• Equipment provided</li>
                <li>• Small group sessions</li>
              </ul>
              <Button size="sm" className="w-full">Join Classes</Button>
            </div>

            <div className="bg-white rounded-lg shadow-soft p-8 text-center">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Swimming Lessons</h3>
              <p className="text-gray-600 mb-4">
                Professional swimming instruction for adults and children, from beginners to advanced techniques.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Individual and group lessons</li>
                <li>• Certified swimming instructors</li>
                <li>• All skill levels welcome</li>
                <li>• Flexible scheduling</li>
              </ul>
              <Button size="sm" className="w-full">Book Lessons</Button>
            </div>

            <div className="bg-white rounded-lg shadow-soft p-8 text-center">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Family Pool Time</h3>
              <p className="text-gray-600 mb-4">
                Dedicated family hours with supervised activities and games for children and parents to enjoy together.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Supervised family activities</li>
                <li>• Pool games and competitions</li>
                <li>• Safety-focused environment</li>
                <li>• Daily scheduled times</li>
              </ul>
              <Button size="sm" className="w-full">View Schedule</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Dive Into Luxury</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Experience the ultimate in aquatic luxury at our world-class pool facilities. 
              Whether you prefer the stunning infinity pool or the comfort of our indoor facility, 
              paradise awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Reserve Pool Access
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Book Pool Activities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}