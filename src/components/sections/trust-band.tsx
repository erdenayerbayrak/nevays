'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function TrustBand() {
  const t = useTranslations('common');

  // Client logos - based on existing logos in public folder
  const clientLogos = [
    {
      name: 'Aselsan',
      logo: '/logos/aselsan-logo-1.jpg',
      alt: 'Aselsan Logo'
    },
    {
      name: 'Atabay',
      logo: '/logos/atabay-kimya-sanayi-ve-ticaret-as.html', // This seems to be wrong, will use placeholder
      alt: 'Atabay İlaç Logo'
    },
    {
      name: 'Valeo',
      logo: '/logos/Valeo_Logo.svg',
      alt: 'Valeo Logo'
    },
    {
      name: 'Aysam',
      logo: '/logos/Aysam-Logo-1-scaled.webp',
      alt: 'Aysam Logo'
    },
    {
      name: 'Arion',
      logo: '/logos/arion-lg.png',
      alt: 'Arion Logo'
    },
    {
      name: 'Sistema',
      logo: '/logos/sistema_logo.png',
      alt: 'Sistema Logo'
    }
  ];

  return (
    <section className="py-16 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Band Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            Güvenilir Projeler, Güvenilir Partnerler
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Sektörün öncü firmalarıyla gerçekleştirdiğimiz başarılı projeler
          </p>
        </div>

        {/* Logo Grid - Static for Performance */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clientLogos.map((client, index) => (
            <div
              key={client.name}
              className="group relative h-16 w-32 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              {client.logo.endsWith('.svg') ? (
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <div className="h-12 w-24 bg-neutral-200 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-neutral-500">{client.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100">
            <div className="text-3xl font-bold text-primary-800 mb-2">50+</div>
            <div className="text-neutral-600 font-medium">Tamamlanan Proje</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100">
            <div className="text-3xl font-bold text-primary-800 mb-2">15+</div>
            <div className="text-neutral-600 font-medium">Yıllık Deneyim</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100">
            <div className="text-3xl font-bold text-primary-800 mb-2">30+</div>
            <div className="text-neutral-600 font-medium">Uzman Mühendis</div>
          </div>
        </div>
      </div>
    </section>
  );
}