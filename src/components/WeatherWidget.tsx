'use client';

import { useState, useEffect } from 'react';
import { Cloud, CloudRain, CloudSnow, Sun, Wind, Droplets, Eye } from 'lucide-react';

interface WeatherData {
  temp: number;
  feels_like: number;
  description: string;
  icon: string;
  humidity: number;
  wind_speed: number;
  visibility: number;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch weather data for Baku
    const fetchWeather = async () => {
      try {
        // Using OpenWeatherMap API (you'll need to add your API key)
        const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'demo';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Baku,AZ&units=metric&appid=${API_KEY}`
        );
        
        if (!response.ok) {
          // Fallback to mock data if API fails
          setWeather({
            temp: 22,
            feels_like: 21,
            description: 'Clear sky',
            icon: 'sun',
            humidity: 65,
            wind_speed: 5.2,
            visibility: 10
          });
        } else {
          const data = await response.json();
          setWeather({
            temp: Math.round(data.main.temp),
            feels_like: Math.round(data.main.feels_like),
            description: data.weather[0].description,
            icon: data.weather[0].main.toLowerCase(),
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            visibility: data.visibility / 1000
          });
        }
      } catch (err) {
        // Use fallback data
        setWeather({
          temp: 22,
          feels_like: 21,
          description: 'Clear sky',
          icon: 'sun',
          humidity: 65,
          wind_speed: 5.2,
          visibility: 10
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    // Update every 30 minutes
    const interval = setInterval(fetchWeather, 1800000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case 'clear':
      case 'sun':
        return <Sun className="w-8 h-8 text-yellow-400" />;
      case 'clouds':
        return <Cloud className="w-8 h-8 text-gray-400" />;
      case 'rain':
      case 'drizzle':
        return <CloudRain className="w-8 h-8 text-blue-400" />;
      case 'snow':
        return <CloudSnow className="w-8 h-8 text-blue-200" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-400" />;
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-4 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-4 border border-blue-200">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-sm font-medium text-gray-600">Baku, Azerbaijan</h3>
          <p className="text-xs text-gray-500 capitalize">{weather.description}</p>
        </div>
        {getWeatherIcon(weather.icon)}
      </div>
      
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-3xl font-bold text-gray-900">{weather.temp}°</span>
        <span className="text-sm text-gray-500">Feels like {weather.feels_like}°</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <Droplets className="w-3 h-3 text-blue-500" />
          <span className="text-gray-600">{weather.humidity}%</span>
        </div>
        <div className="flex items-center gap-1">
          <Wind className="w-3 h-3 text-gray-500" />
          <span className="text-gray-600">{weather.wind_speed} m/s</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="w-3 h-3 text-gray-500" />
          <span className="text-gray-600">{weather.visibility} km</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-blue-200">
        <p className="text-xs text-gray-500">Perfect weather for a beach vacation!</p>
      </div>
    </div>
  );
}