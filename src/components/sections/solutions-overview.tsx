'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Building2, FlaskConical, Wind, CheckCircle, Shield } from 'lucide-react';

interface Props {
  locale: string;
}

export default function SolutionsOverview({ locale }: Props) {
  const t = useTranslations('common');

  const solutions = [
    {
      id: 'cleanroom-installation',
      title: 'Temiz Oda Kurulumu',
      description: 'GMP standartlarında temiz oda tasarımı ve kurulumu. İlaç, medikal ve elektronik sektörleri için özel çözümler.',
      icon: Building2,
      href: `/${locale}/solutions/clean-room`,
      color: 'from-primary-500 to-primary-600',
      hoverColor: 'group-hover:from-primary-600 group-hover:to-primary-700'
    },
    {
      id: 'laboratory-installation', 
      title: 'Laboratuvar Kurulumu',
      description: 'Analiz ve araştırma laboratuvarları için kontrollü ortam sistemleri. Hassas ölçüm ve test alanları.',
      icon: FlaskConical,
      href: `/${locale}/solutions/engineering`,
      color: 'from-accent-500 to-accent-600',
      hoverColor: 'group-hover:from-accent-600 group-hover:to-accent-700'
    },
    {
      id: 'hvac-systems',
      title: 'HVAC Sistemleri',
      description: 'Temiz oda ve laboratuvarlar için özel tasarlanmış havalandırma, klima ve filtrasyon sistemleri.',
      icon: Wind,
      href: `/${locale}/solutions/air-handling`,
      color: 'from-secondary-500 to-secondary-600',
      hoverColor: 'group-hover:from-secondary-600 group-hover:to-secondary-700'
    },
    {
      id: 'laminar-flow-cabinets',
      title: 'Laminer Hava Akışlı Kabinler',
      description: 'Yüksek kaliteli laminer akış kabinleri, biyogüvenlik kabinleri ve steril çalışma alanları.',
      icon: Wind,
      href: `/${locale}/solutions/laminar-cabinets`,
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'group-hover:from-emerald-600 group-hover:to-emerald-700'
    },
    {
      id: 'clean-room-systems',
      title: 'Temiz Oda Sistemleri',
      description: 'Modüler temiz oda sistemleri, kontrollü alanlar ve ISO sınıfı temiz oda çözümleri.',
      icon: Shield,
      href: `/${locale}/solutions/clean-room-systems`,
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'group-hover:from-indigo-600 group-hover:to-indigo-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Uzmanlık Alanlarımız
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Temiz oda teknolojilerinde kapsamlı çözümler sunarak, projenizin her aşamasında yanınızdayız
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Link
                key={solution.id}
                href={solution.href}
                className="group block"
              >
                <div className="relative h-full bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} ${solution.hoverColor} text-white mb-6 transition-all duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-primary-800 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-primary-700 font-semibold group-hover:text-primary-800 transition-colors">
                    <span className="mr-2">Detaylı Bilgi</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href={`/${locale}/solutions`}
            className="inline-flex items-center px-8 py-4 bg-primary-900 hover:bg-primary-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">Tüm Çözümler</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}