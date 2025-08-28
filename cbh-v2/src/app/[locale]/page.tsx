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
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600" />

        <div className="container relative z-10 text-center text-white">
          <h1 className="heading-1 mb-6 drop-shadow-2xl">{t('hero.title')}</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl opacity-90 md:text-2xl">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/rooms" className="btn-primary px-8 py-3 text-lg">
              {t('hero.bookNow')}
            </Link>
            <Link
              href="/gallery"
              className="btn-outline border-white px-8 py-3 text-lg text-white hover:bg-white hover:text-primary-600"
            >
              {t('hero.explore')}
            </Link>
          </div>
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-20 top-20 h-72 w-72 animate-float rounded-full bg-white mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-2000 absolute right-20 top-40 h-72 w-72 animate-float rounded-full bg-white mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-4000 absolute -bottom-8 left-40 h-72 w-72 animate-float rounded-full bg-white mix-blend-multiply blur-xl filter" />
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="heading-2 mb-16 text-center">{t('features.title')}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature cards will go here */}
            <div className="card p-8 transition-shadow hover:shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100">
                <div className="h-8 w-8 rounded bg-primary-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{t('features.beachAccess.title')}</h3>
              <p className="text-gray-600">{t('features.beachAccess.description')}</p>
            </div>

            <div className="card p-8 transition-shadow hover:shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-secondary-100">
                <div className="h-8 w-8 rounded bg-secondary-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{t('features.dining.title')}</h3>
              <p className="text-gray-600">{t('features.dining.description')}</p>
            </div>

            <div className="card p-8 transition-shadow hover:shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100">
                <div className="h-8 w-8 rounded bg-primary-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{t('features.wellness.title')}</h3>
              <p className="text-gray-600">{t('features.wellness.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold text-primary-600">262</div>
              <div className="text-gray-600">{t('stats.rooms')}</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-secondary-600">4</div>
              <div className="text-gray-600">{t('stats.restaurants')}</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-primary-600">3</div>
              <div className="text-gray-600">{t('stats.pools')}</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-secondary-600">800m</div>
              <div className="text-gray-600">{t('stats.beach')}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
