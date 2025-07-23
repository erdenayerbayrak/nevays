import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import { HeroApplications } from '@/components/sections/hero-applications';
import ApplicationsOverview from '@/components/sections/applications-overview';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'applications' });

  return {
    title: `${t('title')} | NEVAYS`,
    description: t('description'),
    keywords: 'temiz oda kurulumu, laboratuvar kurulumu, HVAC uygulamaları, LAF kabin, modüler temiz oda',
    openGraph: {
      title: `${t('title')} | NEVAYS`,
      description: t('description'),
      locale: locale,
      type: 'website',
    },
  };
}

export default function ApplicationsPage() {
  return (
    <MainLayout>
      <HeroApplications
        title="Kapsamlı Mühendislik Çözümleri"
        description="İlaç, sağlık, elektronik ve gıda sektörlerinde temiz oda kurulumu, laboratuvar sistemleri ve HVAC entegrasyonu alanlarında uzman mühendislik hizmetleri sunuyoruz."
      />
      <ApplicationsOverview />
    </MainLayout>
  );
}