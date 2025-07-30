import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import CertificatesHero from '@/components/sections/certificates-hero';
import CertificatesGallery from '@/components/sections/certificates-gallery';
import CertificatesTable from '@/components/sections/certificates-table';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  const title = locale === 'tr' 
    ? 'Sertifikalar - Kalite Belgeleri | NEVAYS'
    : 'Certificates - Quality Documents | NEVAYS';
    
  const description = locale === 'tr'
    ? 'NEVAYS kalite sertifikaları, ISO standartları ve uygunluk belgeleri'
    : 'NEVAYS quality certificates, ISO standards and compliance documents';

  return {
    title,
    description,
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