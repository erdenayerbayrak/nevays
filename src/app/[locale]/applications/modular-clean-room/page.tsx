import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SolutionHero from '@/components/sections/solution-hero';
import ModularCleanroomContent from '@/components/sections/modular-cleanroom-content';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: 'Modüler Temiz Oda | NEVAYS',
    description: 'Hızlı kurulum imkanı sunan modüler temiz oda sistemleri. Flexible tasarım ve kolay genişletme imkanları ile ekonomik çözümler.',
    keywords: 'modüler temiz oda, modular cleanroom, flexible design, hızlı kurulum, prefabrik temiz oda',
  };
}

export default function ModularCleanroomPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Modüler Temiz Oda"
        subtitle="Esnek ve Hızlı Çözümler"
        description="Hızlı kurulum imkanı sunan modüler temiz oda sistemleri ile flexible tasarım ve kolay genişletme seçenekleri."
        imageSrc="/images/applications/modular-cleanroom-hero.jpg"
        catalogUrl="/catalogs/modular-cleanrooms.pdf"
      />
      <ModularCleanroomContent />
    </MainLayout>
  );
}