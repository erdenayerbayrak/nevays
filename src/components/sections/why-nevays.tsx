'use client';

import { useTranslations } from 'next-intl';
import { Award, Users, Wrench, Headphones, TrendingUp, Shield } from 'lucide-react';
import Image from 'next/image';
import { useScrollAnimation, useCounterAnimation } from '@/hooks/useScrollAnimation';

export default function WhyNevays() {
  const t = useTranslations('common');
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });
  
  // Counter animations using custom hook
  const projectsCount = useCounterAnimation(50, 2000, isVisible);
  const experienceCount = useCounterAnimation(15, 2000, isVisible);
  const engineersCount = useCounterAnimation(30, 2000, isVisible);

  const features = [
    {
      icon: Wrench,
      title: 'Anahtar Teslim Proje Yönetimi',
      description: 'Tasarımdan kuruluma, testlerden devreye almaya kadar tüm süreçleri tek elden yönetiyoruz.',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Shield,
      title: 'Uluslararası Standartlarda Üretim',
      description: 'ISO standartları ve GMP gerekliliklerine uygun, kaliteli malzemelerle üretim yapıyoruz.',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      icon: Users,
      title: 'Deneyimli Mühendis Kadrosu',
      description: 'Temiz oda teknolojilerinde uzmanlaşmış mühendis ekibimizle en karmaşık projeleri çözüyoruz.',
      gradient: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Headphones,
      title: '7/24 Teknik Destek',
      description: 'Kurulum sonrası sürekli teknik destek ve bakım hizmetleriyle yanınızdayız.',
      gradient: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Project Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/temiz-oda-clean-room-3.jpg"
                alt="Nevays Temiz Oda Projesi"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary-800">ISO 14644</div>
                <div className="text-sm text-neutral-600">Sertifikalı</div>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Neden Nevays?
            </h2>
            
            <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
              15 yıllık deneyimimiz ve uzman ekibimizle, temiz oda teknolojilerinde sektörün öncü çözüm ortağıyız.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300 ${
                      isVisible ? 'animate-slide-in-left' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Animated Counters */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                <div className="text-3xl font-bold text-primary-800 mb-1">
                  {projectsCount}+
                </div>
                <div className="text-sm text-neutral-600 font-medium">
                  Tamamlanan Proje
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                <div className="text-3xl font-bold text-primary-800 mb-1">
                  {experienceCount}+
                </div>
                <div className="text-sm text-neutral-600 font-medium">
                  Yıllık Deneyim
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                <div className="text-3xl font-bold text-primary-800 mb-1">
                  {engineersCount}+
                </div>
                <div className="text-sm text-neutral-600 font-medium">
                  Uzman Mühendis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}