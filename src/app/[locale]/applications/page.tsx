import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import { HeroApplications } from '@/components/sections/hero-applications';
import ApplicationsOverview from '@/components/sections/applications-overview';


interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  const title = locale === 'tr' ? 'Uygulamalar | NEVAYS' : 'Applications | NEVAYS';
  const description = locale === 'tr' 
    ? 'Temiz oda kurulumu, laboratuvar sistemleri ve HVAC uygulamaları. Uzman mühendislik çözümleri.'
    : 'Cleanroom installation, laboratory systems and HVAC applications. Expert engineering solutions.';

  return {
    title,
    description,
    keywords: 'temiz oda kurulumu, laboratuvar kurulumu, HVAC uygulamaları, LAF kabin, modüler temiz oda',
    openGraph: {
      title,
      description,
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