import { Metadata } from 'next';
import { MainLayout } from '@/components/layout';
import SolutionHero from '@/components/sections/solution-hero';
import HvacApplicationsContent from '@/components/sections/hvac-applications-content';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  return {
    title: 'HVAC Uygulamaları | NEVAYS',
    description: 'Endüstriyel tesislerde hava teknolojileri entegrasyonu. AHU sistemleri, filtrasyon ve klima kontrol sistemlerinin profesyonel kurulumu.',
    keywords: 'HVAC uygulamaları, hava teknolojileri, AHU sistemleri, air handling unit, filtrasyon',
  };
}

export default function HvacApplicationsPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="HVAC Uygulamaları"
        subtitle="Hava Teknolojileri Entegrasyonu"
        description="Endüstriyel tesislerde AHU sistemleri, filtrasyon ve klima kontrol sistemlerinin profesyonel tasarımı ve kurulumu."
        imageSrc="/images/applications/hvac-systems-hero.jpg"
        catalogUrl="/catalogs/hvac-applications.pdf"
      />
      <HvacApplicationsContent />
    </MainLayout>
  );
}