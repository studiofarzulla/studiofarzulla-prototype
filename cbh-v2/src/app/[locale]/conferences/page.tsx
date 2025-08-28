import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Projector, 
  Wifi, 
  Coffee, 
  Mic,
  Monitor,
  Calendar,
  Award,
  CheckCircle
} from 'lucide-react';

const venues = [
  {
    id: 'grand-ballroom',
    name: 'Grand Ballroom',
    capacity: '500 guests',
    size: '600m²',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
    features: ['Stage', 'Dance Floor', 'LED Screens', 'Sound System'],
    ideal: 'Perfect for weddings, galas, and large conferences'
  },
  {
    id: 'executive-boardroom',
    name: 'Executive Boardroom',
    capacity: '20 guests',
    size: '80m²',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800',
    features: ['Video Conference', 'Whiteboard', 'Premium Seating', 'Privacy'],
    ideal: 'Ideal for board meetings and executive sessions'
  },
  {
    id: 'sea-view-terrace',
    name: 'Sea View Terrace',
    capacity: '200 guests',
    size: '400m²',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
    features: ['Outdoor Space', 'Sunset Views', 'Cocktail Setup', 'Heating'],
    ideal: 'Stunning venue for cocktail receptions and outdoor events'
  },
  {
    id: 'conference-hall',
    name: 'Conference Hall',
    capacity: '150 guests',
    size: '250m²',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    features: ['Theater Style', 'Presentation Screen', 'Breakout Areas', 'Tech Support'],
    ideal: 'Designed for seminars, workshops, and presentations'
  }
];

const services = [
  {
    icon: <Projector className="w-6 h-6" />,
    title: 'AV Equipment',
    description: 'State-of-the-art audio visual technology'
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: 'High-Speed Internet',
    description: 'Dedicated business bandwidth'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Catering Services',
    description: 'Customizable menu options'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Event Planning',
    description: 'Professional event coordinators'
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'Live Streaming',
    description: 'Hybrid event capabilities'
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: 'Translation Services',
    description: 'Simultaneous interpretation available'
  }
];

const packages = [
  {
    name: 'Half Day Package',
    price: 'From $500',
    duration: '4 hours',
    includes: [
      'Meeting room rental',
      'Basic AV equipment',
      'Coffee break service',
      'WiFi access',
      'Parking'
    ]
  },
  {
    name: 'Full Day Package',
    price: 'From $900',
    duration: '8 hours',
    includes: [
      'Meeting room rental',
      'Full AV setup',
      'Morning & afternoon breaks',
      'Lunch buffet',
      'WiFi access',
      'Parking',
      'Welcome reception'
    ]
  },
  {
    name: 'Multi-Day Conference',
    price: 'Custom pricing',
    duration: '2-5 days',
    includes: [
      'Multiple venue access',
      'Complete AV support',
      'All meals included',
      'Accommodation rates',
      'Dedicated coordinator',
      'Entertainment options',
      'Airport transfers'
    ]
  }
];

export default async function ConferencesPage() {
  const t = await getTranslations('conferences');

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
            alt="Conferences and Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <h1 className="heading-1 mb-4 drop-shadow-2xl">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
            {t('subtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Request Proposal
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary-600 text-white py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-sm opacity-90">Event Venues</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">500</div>
              <div className="text-sm opacity-90">Max Capacity</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">1000+</div>
              <div className="text-sm opacity-90">Events Hosted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Event Venues</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Versatile spaces designed to host everything from intimate meetings to grand celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {venues.map((venue) => (
              <div key={venue.id} className="group">
                <div className="relative h-80 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{venue.name}</h3>
                    <div className="flex gap-4 text-sm">
                      <span>{venue.capacity}</span>
                      <span>•</span>
                      <span>{venue.size}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{venue.ideal}</p>
                
                <div className="flex flex-wrap gap-2">
                  {venue.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Complete Event Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a successful event, all under one roof
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Meeting Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible packages designed to meet your specific needs and budget
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  index === 1
                    ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white transform scale-105'
                    : 'bg-gray-50'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-1">{pkg.price}</div>
                  <div className={`text-sm ${index === 1 ? 'opacity-90' : 'text-gray-600'}`}>
                    {pkg.duration}
                  </div>
                </div>

                <ul className="space-y-3">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 mt-0.5 ${
                        index === 1 ? 'text-white' : 'text-primary-600'
                      }`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full mt-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                  index === 1
                    ? 'bg-white text-primary-600 hover:shadow-lg'
                    : 'bg-primary-600 text-white hover:shadow-lg'
                }`}>
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Host Your Event Here?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Award-Winning Venue</h3>
              <p className="opacity-90">Recognized for excellence in event hosting</p>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="opacity-90">Dedicated event professionals</p>
            </div>
            <div>
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="opacity-90">Accommodating your timeline</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">All-Inclusive</h3>
              <p className="opacity-90">Everything handled seamlessly</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}