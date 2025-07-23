import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import { HeroProduction } from '@/components/sections/hero-production';
import ProductionContent from '@/components/sections/production-content';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'production' });

  return {
    title: `${t('title')} | NEVAYS`,
    description: t('description'),
    keywords: 'temiz oda paneli, hijyen panel, temiz oda duvar paneli, cleanroom panels, hygienic panels',
    openGraph: {
      title: `${t('title')} | NEVAYS`,
      description: t('description'),
      locale: locale,
      type: 'website',
    },
  };
}

export default function ProductionPage() {
  return (
    <MainLayout>
      <HeroProduction
        title="Teknik Mükemmellik ve Kalite"
        description="Partner firmamızla birlikte ürettiğimiz temiz oda panelleri, antibakteriyel malzemeler ve hijyenik detaylarla endüstrinin en yüksek standartlarını karşılar."
      />
      <ProductionContent />
    </MainLayout>
  );
}