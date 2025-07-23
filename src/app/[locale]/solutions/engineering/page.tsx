import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SolutionHero from '@/components/sections/solution-hero';
import Section from '@/components/ui/section';
import CTABanner from '@/components/sections/cta-banner';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'navigation' });

  return {
    title: t('engineering'),
    description: 'Kapsamlı proje yönetimi ve sistem entegrasyonu',
  };
}

const processSteps = [
  {
    step: 1,
    title: 'Proje Analizi & Tasarım',
    description: 'İhtiyaç analizi, alan incelemesi, ön tasarım ve teknik şartname hazırlama',
    duration: '2-4 hafta',
    deliverables: ['Teknik şartname', '3D tasarım', 'Zaman planı', 'Maliyet analizi']
  },
  {
    step: 2,
    title: 'Detay Mühendislik',
    description: 'Sistem seçimi, detay tasarım, üretim çizimleri ve onay süreci',
    duration: '3-6 hafta',
    deliverables: ['P&ID diyagramları', 'İmalat çizimleri', 'Malzeme listesi', 'Risk analizi']
  },
  {
    step: 3,
    title: 'Üretim & Tedarik',
    description: 'Kalite kontrollü üretim, tedarik zinciri yönetimi ve fabrika testleri',
    duration: '8-12 hafta',
    deliverables: ['FAT raporları', 'Kalite sertifikaları', 'O&M manualleri', 'Yedek parça listesi']
  },
  {
    step: 4,
    title: 'Kurulum & Devreye Alma',
    description: 'Sahada montaj, sistem entegrasyonu, testler ve performans doğrulama',
    duration: '4-8 hafta',
    deliverables: ['Kurulum raporları', 'Komisyon testleri', 'Eğitim sertifikaları', 'Garanti belgesi']
  },
  {
    step: 5,
    title: 'Destek & Bakım',
    description: 'Sürekli teknik destek, planlı bakım ve sistem optimizasyonu',
    duration: 'Devam eden',
    deliverables: ['Bakım planı', 'Uzaktan izleme', '24/7 destek', 'Performans raporları']
  }
];

const services = [
  {
    title: 'HVAC Sistem Tasarımı',
    description: 'Enerji verimli havalandırma ve iklimlendirme sistemlerinin hesaplanması ve tasarımı',
    features: ['HAP/Carrier HAP analizi', 'CFD simülasyonları', 'Enerji modelleme', 'Load calculation']
  },
  {
    title: 'Temiz Oda Validasyonu',
    description: 'GMP ve ISO 14644 standartlarına uygun temiz oda testleri ve validasyon süreçleri',
    features: ['DQ/IQ/OQ/PQ süreçleri', 'Parçacık sayımı', 'Hava akış testleri', 'Mikrobiyolojik testler']
  },
  {
    title: 'Enerji Verimliliği',
    description: 'Mevcut sistemlerin optimizasyonu ve enerji tasarrufu çözümleri',
    features: ['Enerji auditi', 'Sistem optimizasyonu', 'Heat recovery çözümleri', 'VRF/VRV sistemler']
  },
  {
    title: 'Otomasyon & Kontrol',
    description: 'Akıllı bina yönetim sistemleri ve endüstri 4.0 entegrasyonu',
    features: ['BMS/SCADA sistemler', 'IoT sensörler', 'Uzaktan izleme', 'Predictive maintenance']
  }
];

export default function EngineeringPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Mühendislik Hizmetleri"
        subtitle="Engineering Services"
        description="Tasarımdan devreye almaya kadar, kapsamlı mühendislik hizmetleri ile projelerinizi baştan sona yönetiyoruz."
        imageSrc="/images/solutions/engineering-hero.jpg"
        catalogUrl="/downloads/engineering-services.pdf"
      />
      
      {/* Process Timeline */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading text-gray-900 mb-4">
            Proje Süreci
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            5 aşamalı sistematik yaklaşımımızla projelerinizi zamanında ve bütçe dahilinde teslim ediyoruz
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 top-16 bottom-16 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary" />

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative`}>
                  <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-display font-heading text-lg mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-heading text-gray-900">
                          {step.title}
                        </h3>
                        <span className="text-sm text-brand-primary font-medium">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Çıktılar:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-brand-secondary mr-2 flex-shrink-0" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} relative`}>
                  <div className="h-64 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <div className="w-8 h-8 bg-brand-primary rounded-sm transform rotate-45" />
                      </div>
                      <span className="text-gray-600 font-medium">Aşama {step.step}</span>
                    </div>
                  </div>
                  
                  {/* Timeline Node - only visible on desktop */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-brand-primary rounded-full border-4 border-white shadow-lg" />
                    {index < processSteps.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-brand-secondary mt-8 mx-auto" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-heading text-gray-900 mb-6">
            Uzman Hizmetlerimiz
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-display font-heading text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-secondary mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Projenizi Birlikte Planlayalım"
        description="Uzman mühendislik ekibimiz ile teknik danışmanlık ve proje yönetimi hizmeti alın."
        buttonText="Teknik Danışmanlık"
        buttonAction="contact"
      />
    </MainLayout>
  );
}