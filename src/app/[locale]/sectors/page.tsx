import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SectorSolutions from '@/components/sections/sector-solutions';
import EnhancedSectorCards from '@/components/ui/enhanced-sector-cards';


interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  
  const title = locale === 'tr' 
    ? 'Sektörler - İlaç, Elektronik, Gıda ve Medikal Çözümler | NEVAYS'
    : 'Sectors - Pharmaceutical, Electronics, Food and Medical Solutions | NEVAYS';
    
  const description = locale === 'tr'
    ? 'Farklı sektörlere özel temiz oda çözümleri: İlaç endüstrisi, elektronik, gıda, medikal cihaz ve kozmetik sektörlerinde uzman hizmetler.'
    : 'Sector-specific cleanroom solutions: Expert services in pharmaceutical, electronics, food, medical device and cosmetics industries.';

  return {
    title,
    description,
  };
}

export default function SectorsPage() {
  return (
    <MainLayout>
      <EnhancedSectorCards />
    </MainLayout>
  );
}