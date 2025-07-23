import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import CleanRoomFAQ from '@/components/sections/clean-room-faq';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'cleanRoom' });

  return {
    title: 'Temiz Oda Nedir? | NEVAYS',
    description: 'Temiz oda sistemleri, GMP standartları, ISO 14644 sınıflandırması ve steril alan uygulamaları hakkında detaylı bilgiler.',
    keywords: 'temiz oda, cleanroom, GMP, ISO 14644, steril alan, modüler temiz oda, temiz oda sınıfları',
    openGraph: {
      title: 'Temiz Oda Sistemleri ve Uygulamaları | NEVAYS',
      description: 'Dünya standartlarında temiz oda çözümleri ve mühendislik hizmetleri',
      locale: locale,
      type: 'website',
    },
  };
}

export default function CleanRoomPage() {
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-heading font-display text-gray-900 mb-4">
              Temiz Oda Bilgi Merkezi
            </h1>
            <p className="text-xl text-gray-600">
              Temiz oda sistemleri ve uygulamaları hakkında merak ettikleriniz
            </p>
          </div>
        </div>
        
        <CleanRoomFAQ />
      </div>
    </MainLayout>
  );
}