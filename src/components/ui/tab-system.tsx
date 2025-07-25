'use client';

import { useState } from 'react';
import { ChevronRight, CheckCircle, Settings, Microscope, Wind, Shield } from 'lucide-react';
import Image from 'next/image';

interface TabContent {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  features: string[];
  processSteps: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  images: string[];
  technicalSpecs?: string[];
}

const solutionsData: TabContent[] = [
  {
    id: 'temiz-oda',
    title: 'Temiz Oda Kurulumu',
    icon: <Settings className="w-6 h-6" />,
    description: 'GMP uyumlu, ISO 14644 standartlarında anahtar teslim temiz oda sistemleri',
    details: 'Pharmaceutical, elektronik ve medikal sektörlerde en üst düzey kalite standartlarında temiz oda kurulumu gerçekleştiriyoruz. Her proje için özel tasarım yaklaşımı benimsiyor, müşteri ihtiyaçlarına uygun çözümler sunuyoruz.',
    features: [
      'ISO 14644 Standartları',
      'GMP Uyumlu Tasarım',
      'Modüler Panel Sistemleri',
      'Hava Filtrasyonu',
      'Basınç Kontrolü',
      'Validasyon Hizmetleri'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Danışmanlık ve Analiz',
        description: 'İhtiyaç analizi, mevcut durumu değerlendirme ve özel çözüm tasarımı'
      },
      {
        step: 2,
        title: 'Proje Tasarımı',
        description: '3D modelleme, teknik çizimler ve sistem spesifikasyonları hazırlama'
      },
      {
        step: 3,
        title: 'Kurulum ve Montaj',
        description: 'Profesyonel ekip ile hızlı ve kaliteli montaj süreçleri'
      },
      {
        step: 4,
        title: 'Test ve Teslim',
        description: 'Kapsamlı testler, validasyon ve kullanıcı eğitimi'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop'
    ],
    technicalSpecs: [
      'Class 10 - Class 100,000 temizlik seviyesi',
      '±2°C sıcaklık kontrolü',
      '±5% nem kontrolü',
      '0.5 Pa - 15 Pa basınç farkı'
    ]
  },
  {
    id: 'laboratuvar',
    title: 'Laboratuvar Sistemleri',
    icon: <Microscope className="w-6 h-6" />,
    description: 'Analitik ve AR-GE laboratuvarları için özel tasarım sistemleri',
    details: 'Modern laboratuvar kurulumları için kapsamlı çözümler sunuyoruz. Analitik laboratuvarlardan AR-GE merkezlerine kadar geniş yelpazede uzmanlaşmış hizmetler.',
    features: [
      'Lab Furniture Sistemleri',
      'Fume Hood Kurulumu',
      'Gas Dağıtım Sistemleri',
      'Elektrik Altyapısı',
      'Su Arıtma Sistemleri',
      'Güvenlik Sistemleri'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Lab Planlaması',
        description: 'Kullanım amacına uygun laboratuvar tasarımı ve planlaması'
      },
      {
        step: 2,
        title: 'Altyapı Kurulumu',
        description: 'Elektrik, gaz, su ve havalandırma altyapılarının kurulumu'
      },
      {
        step: 3,
        title: 'Ekipman Montajı',
        description: 'Laboratuvar ekipmanları ve furniture sistemlerinin montajı'
      },
      {
        step: 4,
        title: 'Kalibrasyon',
        description: 'Tüm sistemlerin kalibrasyonu ve performans testleri'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'hvac',
    title: 'HVAC Uygulamaları',
    icon: <Wind className="w-6 h-6" />,
    description: 'Enerji verimli ısıtma, soğutma ve havalandırma sistemleri',
    details: 'Endüstriyel tesisler için özel HVAC çözümleri geliştiriyoruz. Enerji verimliliği ve çevresel sürdürülebilirlik odaklı sistemler tasarlıyoruz.',
    features: [
      'Merkezi Klima Sistemleri',
      'Hava Filtrasyon Üniteleri',
      'Enerji Geri Kazanım',
      'BMS Entegrasyonu',
      'IoT Monitoring',
      'Bakım ve Servis'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Sistem Tasarımı',
        description: 'Termal analiz ve sistem kapasitesi hesaplamaları'
      },
      {
        step: 2,
        title: 'Ekipman Seçimi',
        description: 'Enerji verimli ekipman seçimi ve tedarik süreçleri'
      },
      {
        step: 3,
        title: 'Kurulum',
        description: 'Profesyonel montaj ve bağlantı işlemleri'
      },
      {
        step: 4,
        title: 'Komisyoning',
        description: 'Sistem ayarları, test ve devreye alma işlemleri'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'validasyon',
    title: 'Validasyon Hizmetleri',
    icon: <Shield className="w-6 h-6" />,
    description: 'IQ/OQ/PQ validasyon süreçleri ve compliance hizmetleri',
    details: 'Pharmaceutical ve medikal cihaz endüstrisinde kritik öneme sahip validasyon süreçlerini gerçekleştiriyoruz. Regulatory compliance için kapsamlı dokümantasyon.',
    features: [
      'IQ (Installation Qualification)',
      'OQ (Operational Qualification)',
      'PQ (Performance Qualification)',
      'Risk Assessment',
      'Dokümantasyon',
      'Regulatory Support'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Risk Analizi',
        description: 'Sistem risk değerlendirmesi ve validasyon planı hazırlama'
      },
      {
        step: 2,
        title: 'IQ/OQ Testleri',
        description: 'Kurulum ve operasyonel kalifikasyon testlerinin gerçekleştirilmesi'
      },
      {
        step: 3,
        title: 'PQ Süreçleri',
        description: 'Performans kalifikasyonu ve sürekli izleme protokolleri'
      },
      {
        step: 4,
        title: 'Dokümantasyon',
        description: 'Kapsamlı validasyon raporları ve compliance dokümantasyonu'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'
    ]
  }
];

export default function TabSystem() {
  const [activeTab, setActiveTab] = useState('temiz-oda');

  const activeContent = solutionsData.find(tab => tab.id === activeTab) || solutionsData[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Çözümlerimiz
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Her sektörün ihtiyaçlarına uygun özelleştirilmiş temiz oda ve laboratuvar çözümleri
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col lg:flex-row lg:justify-center mb-12">
          <div className="flex flex-col lg:flex-row bg-neutral-100 rounded-2xl p-2 lg:inline-flex">
            {solutionsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-left lg:text-center whitespace-nowrap
                  ${activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-white/50'
                  }
                `}
              >
                <span className="mr-3 lg:mr-2">
                  {tab.icon}
                </span>
                <span className="text-sm lg:text-base">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mr-4">
                  {activeContent.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-1">
                    {activeContent.title}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {activeContent.description}
                  </p>
                </div>
              </div>

              <p className="text-neutral-700 leading-relaxed mb-8 text-lg">
                {activeContent.details}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-primary-900 mb-4">
                  Özellikler
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeContent.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specs */}
              {activeContent.technicalSpecs && (
                <div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-4">
                    Teknik Özellikler
                  </h4>
                  <div className="space-y-2">
                    {activeContent.technicalSpecs.map((spec, index) => (
                      <div key={index} className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-accent-500 mr-2" />
                        <span className="text-sm text-neutral-600">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Process Steps Side */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 lg:p-12">
              <h4 className="text-xl font-bold text-primary-900 mb-8">
                Süreç Adımları
              </h4>
              
              <div className="space-y-6">
                {activeContent.processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Line */}
                    {index < activeContent.processSteps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-primary-200" />
                    )}
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-primary-900 mb-2">
                          {step.title}
                        </h5>
                        <p className="text-neutral-700 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg">
                  Detayları İnceleyin
                  <ChevronRight className="w-5 h-5 ml-2 inline-block" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}