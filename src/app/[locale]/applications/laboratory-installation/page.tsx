import { Metadata } from 'next';
import { MainLayout } from '@/components/layout';
import SolutionHero from '@/components/sections/solution-hero';
import LaboratoryInstallationContent from '@/components/sections/laboratory-installation-content';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  return {
    title: 'Laboratuvar Kurulumu | NEVAYS',
    description: 'Araştırma ve kalite kontrol laboratuvarları için özel tasarım sistemleri. Biosafety cabinet, fume hood ve özel havalandırma çözümleri.',
    keywords: 'laboratuvar kurulumu, lab installation, biosafety, fume hood, laboratory design',
  };
}

export default function LaboratoryInstallationPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Laboratuvar Kurulumu"
        subtitle="Güvenli Araştırma Ortamları"
        description="Araştırma ve kalite kontrol laboratuvarları için biosafety cabinet, fume hood ve özel havalandırma sistemleri ile güvenli çalışma ortamları oluşturuyoruz."
        imageSrc="/images/applications/laboratory-installation-hero.jpg"
        catalogUrl="/catalogs/laboratory-installation.pdf"
      />
      <LaboratoryInstallationContent />
    </MainLayout>
  );
}