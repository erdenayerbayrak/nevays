import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import CertificatesHero from '@/components/sections/certificates-hero';
import CertificatesGallery from '@/components/sections/certificates-gallery';
import CertificatesTable from '@/components/sections/certificates-table';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'navigation' });

  return {
    title: t('certificates'),
    description: 'NEVAYS kalite sertifikaları, ISO standartları ve uygunluk belgeleri',
  };
}

export default function CertificatesPage() {
  return (
    <MainLayout>
      <CertificatesHero />
      <CertificatesGallery />
      <CertificatesTable />
    </MainLayout>
  );
}