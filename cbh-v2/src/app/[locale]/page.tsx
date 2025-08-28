import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Users, 
  Sparkles, 
  Waves, 
  Dumbbell, 
  Utensils,
  Calendar,
  Award,
  Building
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const t = await getTranslations('homepage');

  return (
    <>
      {/* Hero Section - Full height with video/image background */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-primary-900 to-primary-800">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Background image placeholder */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')] bg-cover bg-center bg-no-repeat" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-white drop-shadow-2xl md:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-white/90 md:text-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/rooms" 
                className="group relative overflow-hidden rounded-full bg-secondary-500 px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-secondary-600 hover:shadow-2xl"
              >
                <span className="relative z-10">{t('hero.bookNow')}</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary-600 to-secondary-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border-2 border-white/80 bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white hover:text-primary-900"
              >
                {t('hero.explore')}
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="h-6 w-6 rotate-45 border-b-2 border-r-2 border-white/50" />
          </div>
        </div>
      </section>

      {/* Features Section - Cards with icons */}
      <section className="relative -mt-20 pb-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 p-4 text-white">
                <Waves className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary-900">{t('features.beachAccess.title')}</h3>
              <p className="text-primary-600">{t('features.beachAccess.description')}</p>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-accent-100 to-accent-200 opacity-20 transition-all group-hover:scale-150" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-secondary-400 to-secondary-600 p-4 text-white">
                <Utensils className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary-900">{t('features.dining.title')}</h3>
              <p className="text-primary-600">{t('features.dining.description')}</p>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-secondary-100 to-secondary-200 opacity-20 transition-all group-hover:scale-150" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 p-4 text-white">
                <Dumbbell className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary-900">{t('features.wellness.title')}</h3>
              <p className="text-primary-600">{t('features.wellness.description')}</p>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 opacity-20 transition-all group-hover:scale-150" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-primary-900 md:text-5xl">
                {t('legacy_title')}
              </h2>
              <p className="text-lg leading-relaxed text-primary-700">
                {t('legacy_description')}
              </p>
              <p className="rounded-lg border-l-4 border-secondary-500 bg-white p-4 text-primary-600 italic">
                {t('legacy_note')}
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 font-semibold text-secondary-600 transition-colors hover:text-secondary-700"
              >
                Learn More About Our Story
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-200 to-secondary-200 shadow-2xl">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070')] bg-cover bg-center" />
              </div>
              <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-secondary-200 to-secondary-300 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - More visual appeal */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 py-16">
        <div className="container">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div className="group">
              <div className="mb-3 inline-flex rounded-full bg-white/10 p-4 transition-all group-hover:bg-white/20">
                <Building className="h-8 w-8 text-secondary-400" />
              </div>
              <div className="mb-2 font-serif text-5xl font-bold text-white">262</div>
              <div className="text-lg text-white/80">{t('stats.rooms')}</div>
            </div>
            <div className="group">
              <div className="mb-3 inline-flex rounded-full bg-white/10 p-4 transition-all group-hover:bg-white/20">
                <Utensils className="h-8 w-8 text-secondary-400" />
              </div>
              <div className="mb-2 font-serif text-5xl font-bold text-white">4</div>
              <div className="text-lg text-white/80">{t('stats.restaurants')}</div>
            </div>
            <div className="group">
              <div className="mb-3 inline-flex rounded-full bg-white/10 p-4 transition-all group-hover:bg-white/20">
                <Waves className="h-8 w-8 text-secondary-400" />
              </div>
              <div className="mb-2 font-serif text-5xl font-bold text-white">1</div>
              <div className="text-lg text-white/80">Indoor Pool</div>
            </div>
            <div className="group">
              <div className="mb-3 inline-flex rounded-full bg-white/10 p-4 transition-all group-hover:bg-white/20">
                <MapPin className="h-8 w-8 text-secondary-400" />
              </div>
              <div className="mb-2 font-serif text-5xl font-bold text-white">800m</div>
              <div className="text-lg text-white/80">{t('stats.beach')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-primary-900 md:text-5xl">
              Corporate & Enterprise Solutions
            </h2>
            <p className="mb-12 text-xl text-primary-700">
              Complete packages for businesses including bulk accommodations, meeting facilities, buffet dining, and city transportation services.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <Calendar className="mx-auto mb-4 h-12 w-12 text-secondary-600" />
                <h3 className="mb-2 text-xl font-bold text-primary-900">Long-term Rentals</h3>
                <p className="text-primary-600">Special rates for extended corporate stays</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <Users className="mx-auto mb-4 h-12 w-12 text-secondary-600" />
                <h3 className="mb-2 text-xl font-bold text-primary-900">Team Packages</h3>
                <p className="text-primary-600">Complete solutions for sports teams and delegations</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <Award className="mx-auto mb-4 h-12 w-12 text-secondary-600" />
                <h3 className="mb-2 text-xl font-bold text-primary-900">Loyalty Benefits</h3>
                <p className="text-primary-600">Exclusive rewards for our corporate partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary-500 to-secondary-600 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative z-10 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            {t('final_cta_title')}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90">
            {t('final_cta_description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/rooms" 
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-secondary-600 transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              Book Your Stay
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-secondary-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/5" />
      </section>
    </>
  );
}