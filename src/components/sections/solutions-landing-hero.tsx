'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Building2, FlaskConical, Wind, CheckCircle, Shield } from 'lucide-react';

interface Props {
  locale: string;
}

export default function SolutionsLandingHero({ locale }: Props) {
  const t = useTranslations('common');

  const solutions = [
    {
      icon: Building2,
      title: 'Temiz Oda Kurulumu',
      description: 'GMP standartlarında profesyonel temiz oda sistemleri',
      href: '/solutions/clean-room'
    },
    {
      icon: FlaskConical,
      title: 'Laboratuvar Kurulumu',
      description: 'Analiz ve araştırma laboratuvarları için çözümler',
      href: '/solutions/engineering'
    },
    {
      icon: Wind,
      title: 'HVAC Sistemleri',
      description: 'Özel tasarım havalandırma ve filtrasyon sistemleri',
      href: '/solutions/air-handling'
    },
    {
      icon: Wind,
      title: 'Laminer Hava Akışlı Kabinler',
      description: 'Yüksek kaliteli laminer akış ve biyogüvenlik kabinleri',
      href: '/solutions/laminar-cabinets'
    },
    {
      icon: Shield,
      title: 'Temiz Oda Sistemleri',
      description: 'Modüler temiz oda sistemleri ve kontrollü alan çözümleri',
      href: '/solutions/clean-room-systems'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Çözümlerimiz
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Temiz oda teknolojilerinde kapsamlı çözümler sunarak, projenizin her aşamasında yanınızdayız
          </p>
        </div>

        {/* Quick Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Link
                key={solution.title}
                href={`/${locale}${solution.href}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{solution.description}</p>
                  <div className="flex items-center text-accent-300 font-medium">
                    <span className="mr-2">Detaylar</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/80 mb-6">
            Projeniz için özel çözüm mü arıyorsunuz?
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span className="mr-2">İletişime Geçin</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}