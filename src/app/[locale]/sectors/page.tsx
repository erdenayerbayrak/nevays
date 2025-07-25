import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SectorSolutions from '@/components/sections/sector-solutions';
import EnhancedSectorCards from '@/components/ui/enhanced-sector-cards';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'sectors' });
  
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