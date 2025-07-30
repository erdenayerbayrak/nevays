import { Metadata } from 'next';
import { MainLayout } from '@/components/layout';
import { HeroProduction } from '@/components/sections/hero-production';
import ProductionContent from '@/components/sections/production-content';


interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  const title = locale === 'tr' 
    ? 'Üretim - Temiz Oda Paneli Üretimi'
    : 'Production - Cleanroom Panel Manufacturing';
    
  const description = locale === 'tr'
    ? 'NEVAYS temiz oda paneli üretimi: Hijyen panel, temiz oda duvar paneli, temiz oda tavan paneli üretimi. Oval süpürgelik ve hijyen süpürgelik sistemleri ile GMP uyumlu çözümler.'
    : 'NEVAYS cleanroom panel production: Hygiene panel, cleanroom wall panel, cleanroom ceiling panel manufacturing. GMP compliant solutions with oval skirting and hygiene skirting systems.';

  return {
    title: `${title} | NEVAYS`,
    description,
    keywords: 'temiz oda paneli, hijyen panel, temiz oda duvar paneli, cleanroom panels, hygienic panels',
    openGraph: {
      title: `${title} | NEVAYS`,
      description,
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