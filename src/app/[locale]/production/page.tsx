import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SolutionHero from '@/components/sections/solution-hero';
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
      <SolutionHero
        title="Temiz Oda Panel Üretimi"
        subtitle="Teknik Mükemmellik ve Kalite Standartları"
        description="Partner firmamızla birlikte ürettiğimiz temiz oda panelleri, antibakteriyel malzemeler ve hijyenik detaylarla endüstrinin en yüksek standartlarını karşılar."
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&crop=center"
        catalogUrl="/catalogs/cleanroom-panels.pdf"
      />
      <ProductionContent />
    </MainLayout>
  );
}