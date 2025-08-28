import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const t = await getTranslations('homepage');

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600" />
        
        <div className="relative z-10 container text-center text-white">
          <h1 className="heading-1 mb-6 drop-shadow-2xl">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/rooms"
              className="btn-primary px-8 py-3 text-lg"
            >
              {t('hero.bookNow')}
            </Link>
            <Link
              href="/gallery"
              className="btn-outline px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-primary-600"
            >
              {t('hero.explore')}
            </Link>
          </div>
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000" />
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000" />
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="heading-2 text-center mb-16">
            {t('features.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature cards will go here */}
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('features.beachAccess.title')}</h3>
              <p className="text-gray-600">{t('features.beachAccess.description')}</p>
            </div>
            
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-secondary-600 rounded" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('features.dining.title')}</h3>
              <p className="text-gray-600">{t('features.dining.description')}</p>
            </div>
            
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('features.wellness.title')}</h3>
              <p className="text-gray-600">{t('features.wellness.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">262</div>
              <div className="text-gray-600">{t('stats.rooms')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">4</div>
              <div className="text-gray-600">{t('stats.restaurants')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-gray-600">{t('stats.pools')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">800m</div>
              <div className="text-gray-600">{t('stats.beach')}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}