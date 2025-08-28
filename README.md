# The Crescent Beach Hotel 🏖️

> A luxury beach resort website built with Next.js 15, TypeScript, and Tailwind CSS

## 📁 Project Structure

The main project is located in the `cbh-v2` directory. This is a complete rebuild with modern architecture and improved performance.

[![Deployed on Vercel](https://vercel.com/button)](https://vercel.com)
[![Deploy Status](https://img.shields.io/badge/Deployment-Vercel-black)](https://farzulla.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🌟 Features

### 🏨 Hotel Management

- **Room Showcase**: Multiple room types with detailed information, amenities, and pricing
- **Interactive Galleries**: High-quality image galleries with lightbox functionality
- **Booking Integration**: Ready-to-integrate booking system with form validation
- **Multilingual Support**: English, Azerbaijani, and Russian language support

### 🍽️ Dining Experience

- **Restaurant Menus**: Dynamic menu displays with dietary information
- **Reservation System**: Table booking functionality with time slot management
- **Special Events**: Showcase of culinary events and experiences
- **Chef Profiles**: Meet the culinary team behind exceptional dining

### 🏊‍♀️ Amenities & Services

- **Beach Access**: Information about private beach and water sports
- **Wellness Center**: Spa services, treatments, and wellness programs
- **Pool Areas**: Multiple pool facilities with poolside service
- **Kids Club**: Family-friendly amenities and activities
- **Entertainment**: Live shows, cultural events, and recreational activities

### 💼 Business Services

- **Conference Facilities**: Meeting rooms and event spaces
- **Corporate Packages**: Business travel and group booking options
- **Event Planning**: Wedding and special event coordination

### 📱 Technical Excellence

- **Responsive Design**: Perfect experience across all devices
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Comprehensive meta tags and structured data
- **PWA Ready**: Progressive Web App capabilities
- **Accessibility**: WCAG compliant design and navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/studiofarzulla/crescent-beach-hotel.git
cd crescent-beach-hotel/cbh-v2

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Edit environment variables
nano .env.local
```

## 📁 Project Structure

```
crescent-beach-hotel/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── (routes)/          # Route groups
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── loading.tsx        # Global loading UI
│   │   ├── error.tsx          # Global error UI
│   │   ├── not-found.tsx      # 404 page
│   │   └── sitemap.ts         # Dynamic sitemap
│   ├── components/            # Reusable components
│   │   ├── ui/               # Base UI components
│   │   ├── rooms/            # Room-specific components
│   │   ├── dining/           # Restaurant components
│   │   ├── amenities/        # Amenity components
│   │   ├── conferences/      # Business components
│   │   ├── gallery/          # Gallery components
│   │   └── contact/          # Contact components
│   ├── lib/                  # Utility libraries
│   │   ├── utils.ts          # General utilities
│   │   └── seo.ts            # SEO helpers
│   ├── types/                # TypeScript definitions
│   ├── constants/            # App constants
│   └── i18n.ts              # Internationalization config
├── public/                   # Static assets
│   ├── images/              # Image assets
│   ├── icons/               # PWA icons
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # SEO robots file
├── .github/                 # GitHub workflows
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS config
└── tsconfig.json           # TypeScript config
```

## 🛠️ Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run export          # Export static files

# Quality Assurance
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run type-check      # TypeScript type checking
npm run prettier        # Format code
npm run test:build      # Test build process

# Utilities
npm run clean           # Clean build files
npm run preview         # Build and start for preview
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue tones (`primary-50` to `primary-900`)
- **Accent**: Complementary accent colors
- **Neutral**: Grays for typography and backgrounds
- **Semantic**: Success, warning, error, and info colors

### Typography

- **Headings**: Inter font family
- **Body**: System font stack for optimal performance
- **Serif**: Playfair Display for elegant headings

### Components

- Consistent spacing using Tailwind's spacing scale
- Shadow system for depth and elevation
- Animation system using Framer Motion
- Responsive breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`

## 🌐 Internationalization

The application supports multiple languages:

- **English (en)**: Default language
- **Azerbaijani (az)**: Local language
- **Russian (ru)**: Regional language

Language switching is handled through the URL structure:

- `/` - English (default)
- `/az/` - Azerbaijani
- `/ru/` - Russian

## 📈 SEO & Performance

### SEO Features

- Dynamic meta tags and Open Graph
- Structured data (Schema.org)
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs
- Language alternate links

### Performance Optimizations

- Image optimization with WebP/AVIF support
- Lazy loading for images and components
- Code splitting and bundle optimization
- Compression and caching headers
- Service worker for offline functionality

### Core Web Vitals

The application is optimized for:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Automated Deployment**: Push to `main` branch triggers automatic deployment
2. **Custom Domain**: Configure in repository settings
3. **HTTPS**: Automatically enabled

### Manual Deployment

```bash
# Build and export
npm run export

# Deploy the 'out' folder to your hosting provider
```

### Environment Variables for Production

```bash
SITE_URL=https://yourdomain.com
NODE_ENV=production
```

## 🔧 Configuration

### Next.js Configuration

- Image optimization settings
- Security headers
- Compression and performance
- Static export configuration
- Internationalization setup

### Tailwind CSS

- Custom color palette
- Extended typography
- Component utilities
- Responsive design tokens

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use semantic commit messages
- Ensure responsive design
- Test across multiple browsers
- Maintain accessibility standards

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Credits

### Design & Development

- **Studio Farzulla**: Design and development team

### Technologies

- **Next.js**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Hook Form**: Form management
- **Zod**: Schema validation

### Assets

- **Images**: High-quality hotel photography
- **Icons**: Custom hotel-themed icon set
- **Fonts**: Inter and Playfair Display

## 📞 Support

For support and inquiries:

- **Email**: support@crescentbeachhotel.com
- **Phone**: +994-12-123-4567
- **Website**: [crescentbeachhotel.com](https://crescentbeachhotel.com)

---

<div align="center">
  <p><strong>Built with ❤️ by Studio Farzulla</strong></p>
  <p>Experience luxury at The Crescent Beach Hotel</p>
</div>
