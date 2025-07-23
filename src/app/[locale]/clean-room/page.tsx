import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import { HeroCleanroom } from '@/components/sections/hero-cleanroom';
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
      <HeroCleanroom
        title="Kapsamlı Temiz Oda Rehberi"
        description="Temiz oda sistemleri, GMP standartları, ISO 14644 sınıflandırması ve steril alan uygulamaları hakkında merak ettiklerinizi yanıtlıyoruz."
      />
      <CleanRoomFAQ />
    </MainLayout>
  );
}