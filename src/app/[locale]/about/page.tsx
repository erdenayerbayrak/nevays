import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import { HeroAbout } from '@/components/sections/hero-about';
import CompanyOverview from '@/components/sections/company-overview';
import CompanyHistory from '@/components/sections/company-history';
import CTABanner from '@/components/sections/cta-banner';
import InteractiveTimeline from '@/components/ui/interactive-timeline';


interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'tr' ? 'Hakkımızda' : 'About';
  
  return {
    title,
    description: locale === 'tr' 
      ? 'NEVAYS hakkında bilgi: Tarihçe, vizyon, misyon ve yönetim ekibi'
      : 'About NEVAYS: History, vision, mission and management team',
  };
}

export default function AboutPage() {
  return (
    <MainLayout>
      <HeroAbout 
        title="Mühendislik Çözümlerinde Öncü"
        description="NEVAYS olarak, temiz oda sistemleri ve mühendislik çözümlerinde 25+ yıllık deneyimimizle sektöre öncülük ediyoruz. Yenilikçi yaklaşımımız ve uzman ekibimizle, müşterilerimize en kaliteli hizmeti sunuyoruz."
      />
      <CompanyOverview />
      <InteractiveTimeline />
      <CTABanner
        title="NEVAYS Ailesine Katılın"
        description="Dünya çapında projeler gerçekleştiren ekibimizde yerinizi alın."
        buttonText="Kariyer Fırsatları"
        buttonAction="contact"
      />
    </MainLayout>
  );
}