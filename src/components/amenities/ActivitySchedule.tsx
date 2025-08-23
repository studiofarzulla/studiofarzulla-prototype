'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Clock, MapPin, Users, Star, Calendar } from 'lucide-react';

interface Activity {
  time: string;
  name: string;
  location: string;
  duration: string;
  capacity?: number;
  instructor?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  type: 'fitness' | 'water' | 'wellness' | 'entertainment' | 'kids';
  price?: string;
  featured?: boolean;
}

interface DaySchedule {
  day: string;
  date: string;
  activities: Activity[];
}

interface ActivityScheduleProps {
  schedule?: DaySchedule[];
  showWeekView?: boolean;
}

export default function ActivitySchedule({ schedule, showWeekView = true }: ActivityScheduleProps) {
  const t = useTranslations('amenities');

  const defaultSchedule: DaySchedule[] = [
    {
      day: 'Monday',
      date: 'Today',
      activities: [
        {
          time: '7:00 AM',
          name: 'Morning Yoga',
          location: 'Beach Pavilion',
          duration: '60 min',
          capacity: 15,
          instructor: 'Sarah Johnson',
          difficulty: 'Easy',
          type: 'wellness',
          featured: true
        },
        {
          time: '9:00 AM',
          name: 'Aqua Aerobics',
          location: 'Outdoor Pool',
          duration: '45 min',
          capacity: 20,
          instructor: 'Mike Thompson',
          difficulty: 'Medium',
          type: 'water'
        },
        {
          time: '11:00 AM',
          name: 'Beach Volleyball',
          location: 'Private Beach',
          duration: '90 min',
          capacity: 12,
          difficulty: 'Medium',
          type: 'water'
        },
        {
          time: '2:00 PM',
          name: 'Kids Pool Party',
          location: 'Kids Pool Area',
          duration: '60 min',
          capacity: 25,
          type: 'kids',
          featured: true
        },
        {
          time: '4:00 PM',
          name: 'Sunset Pilates',
          location: 'Wellness Center',
          duration: '60 min',
          capacity: 12,
          instructor: 'Elena Rodriguez',
          difficulty: 'Easy',
          type: 'wellness'
        },
        {
          time: '8:00 PM',
          name: 'Live Music Performance',
          location: 'Entertainment Stage',
          duration: '120 min',
          type: 'entertainment',
          featured: true
        }
      ]
    },
    {
      day: 'Tuesday',
      date: 'Tomorrow',
      activities: [
        {
          time: '6:30 AM',
          name: 'Beach Run Club',
          location: 'Private Beach',
          duration: '45 min',
          capacity: 15,
          instructor: 'Alex Morgan',
          difficulty: 'Medium',
          type: 'fitness'
        },
        {
          time: '10:00 AM',
          name: 'Water Sports Training',
          location: 'Beach Sports Center',
          duration: '120 min',
          capacity: 8,
          difficulty: 'Hard',
          type: 'water',
          price: '$25'
        },
        {
          time: '1:00 PM',
          name: 'Family Cooking Class',
          location: 'Culinary Studio',
          duration: '90 min',
          capacity: 10,
          type: 'kids',
          price: '$35'
        },
        {
          time: '3:30 PM',
          name: 'Spa & Wellness Tour',
          location: 'Wellness Center',
          duration: '60 min',
          capacity: 8,
          type: 'wellness'
        },
        {
          time: '7:30 PM',
          name: 'Cultural Dance Show',
          location: 'Entertainment Stage',
          duration: '90 min',
          type: 'entertainment'
        }
      ]
    }
  ];

  const activitySchedule = schedule || defaultSchedule;

  const getActivityTypeColor = (type: Activity['type']) => {
    const colors = {
      fitness: 'bg-red-100 text-red-700',
      water: 'bg-blue-100 text-blue-700',
      wellness: 'bg-green-100 text-green-700',
      entertainment: 'bg-purple-100 text-purple-700',
      kids: 'bg-orange-100 text-orange-700'
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  const getDifficultyColor = (difficulty?: Activity['difficulty']) => {
    if (!difficulty) return '';
    const colors = {
      Easy: 'bg-green-100 text-green-700',
      Medium: 'bg-yellow-100 text-yellow-700',
      Hard: 'bg-red-100 text-red-700'
    };
    return colors[difficulty];
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Daily Activity Schedule</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our exciting daily activities designed for guests of all ages and interests. 
            From wellness sessions to water sports, there's something for everyone.
          </p>
        </div>

        {/* Schedule Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <Button 
              variant="ghost" 
              size="sm" 
              className="bg-white shadow-sm"
            >
              Today
            </Button>
            <Button variant="ghost" size="sm">Tomorrow</Button>
            <Button variant="ghost" size="sm">This Week</Button>
          </div>
        </div>

        {/* Activity Schedule */}
        <div className="space-y-8">
          {activitySchedule.map((daySchedule, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-lg shadow-soft overflow-hidden">
              {/* Day Header */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{daySchedule.day}</h3>
                    <p className="text-primary-100">{daySchedule.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-primary-200">
                      {daySchedule.activities.length} activities scheduled
                    </p>
                  </div>
                </div>
              </div>

              {/* Activities List */}
              <div className="p-6">
                <div className="space-y-4">
                  {daySchedule.activities.map((activity, activityIndex) => (
                    <div 
                      key={activityIndex} 
                      className={`border rounded-lg p-4 hover:border-primary-300 transition-colors ${
                        activity.featured ? 'bg-primary-50 border-primary-200' : 'border-gray-200'
                      }`}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                        {/* Time & Title */}
                        <div>
                          <div className="flex items-center mb-2">
                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="font-semibold text-primary-600">{activity.time}</span>
                            {activity.featured && (
                              <Star className="h-4 w-4 text-yellow-500 ml-2" />
                            )}
                          </div>
                          <h4 className="font-bold text-lg">{activity.name}</h4>
                          <p className="text-sm text-gray-600">{activity.duration}</p>
                        </div>

                        {/* Location & Instructor */}
                        <div>
                          <div className="flex items-center mb-1">
                            <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm text-gray-600">{activity.location}</span>
                          </div>
                          {activity.instructor && (
                            <p className="text-sm text-gray-600">
                              Instructor: <span className="font-medium">{activity.instructor}</span>
                            </p>
                          )}
                        </div>

                        {/* Details */}
                        <div>
                          <div className="flex flex-wrap gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs ${getActivityTypeColor(activity.type)}`}>
                              {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                            </span>
                            {activity.difficulty && (
                              <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(activity.difficulty)}`}>
                                {activity.difficulty}
                              </span>
                            )}
                          </div>
                          {activity.capacity && (
                            <div className="flex items-center mt-2">
                              <Users className="h-4 w-4 text-gray-500 mr-1" />
                              <span className="text-sm text-gray-600">Max {activity.capacity} guests</span>
                            </div>
                          )}
                        </div>

                        {/* Action */}
                        <div className="text-right">
                          {activity.price && (
                            <p className="font-bold text-primary-600 mb-2">{activity.price}</p>
                          )}
                          <Button size="sm" className="w-full lg:w-auto">
                            {activity.price ? 'Book Now' : 'Join Activity'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Types Legend */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Activity Types</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { type: 'fitness', label: 'Fitness & Sports', icon: '💪' },
              { type: 'water', label: 'Water Activities', icon: '🏊' },
              { type: 'wellness', label: 'Wellness & Spa', icon: '🧘' },
              { type: 'entertainment', label: 'Entertainment', icon: '🎭' },
              { type: 'kids', label: 'Kids & Family', icon: '👨‍👩‍👧‍👦' }
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="mr-2">{item.icon}</span>
                <span className={`px-3 py-1 rounded-full text-sm ${getActivityTypeColor(item.type as Activity['type'])}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-soft p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need More Information?</h3>
            <p className="text-gray-600 mb-6">
              Contact our activities coordinator for private sessions, group bookings, or special requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Activities Team</Button>
              <Button variant="outline" size="lg">Download Full Schedule</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}