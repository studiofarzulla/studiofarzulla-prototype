import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://crescentbeachhotel.com';
  const currentDate = new Date();

  // Static pages with high priority
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/rooms`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dining`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/amenities`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/conferences`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Room pages
  const roomPages = ['standard', 'deluxe', 'suite', 'family', 'corporate'].map(
    roomType => ({
      url: `${baseUrl}/rooms/${roomType}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  );

  // Dining pages
  const diningPages = ['the-terrace', 'wild-west', 'shade-bar', 'pool-bar'].map(
    restaurant => ({
      url: `${baseUrl}/dining/${restaurant}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })
  );

  // Amenity pages
  const amenityPages = [
    'beach',
    'pools',
    'wellness',
    'kids-club',
    'entertainment',
  ].map(amenity => ({
    url: `${baseUrl}/amenities/${amenity}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Combine all pages
  return [...staticPages, ...roomPages, ...diningPages, ...amenityPages];
}
