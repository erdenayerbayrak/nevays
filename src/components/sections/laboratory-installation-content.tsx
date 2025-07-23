'use client';

import { Microscope, Wind, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function LaboratoryInstallationContent() {
  const systems = [
    {
      icon: Microscope,
      title: 'Biosafety Cabinet Sistemleri',
      description: 'Class I, II ve III biosafety cabinet kurulumu ve validasyonu. Mikrobiyolojik güvenlik için özel havalandırma sistemleri.',
      applications: ['Mikrobiyoloji Laboratuvarları', 'Viral Araştırma', 'Genetik Mühendisliği']
    },
    {
      icon: Wind,
      title: 'Fume Hood Sistemleri',
      description: 'Kimyasal buhar ve zararlı gazların güvenli tahliyesi için özel tasarım fume hood sistemleri ve havalandırma entegrasyonu.',
      applications: ['Kimya Laboratuvarları', 'Analitik Testler', 'R&D Merkezleri']
    },
    {
      icon: Shield,
      title: 'Kontaminasyon Kontrolü',
      description: 'Cross-contamination önleme sistemleri, özel airlock tasarımları ve pressure cascade yönetimi.',
      applications: ['Pharmaceutical QC', 'Gıda Laboratuvarları', 'Çevre Analizi']
    },
    {
      icon: Zap,
      title: 'Özel Havalandırma',
      description: 'Laboratory-grade filtrasyon, precise air changes ve özel exhaust sistemleri ile optimal çalışma koşulları.',
      applications: ['Histopatoloji', 'Seroloji', 'Toksikoloji']
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ana İçerik */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Laboratuvar Kurulumu Expertise
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                <strong>Laboratuvar kurulumu</strong> projelerimizde, araştırma kalitesini ve 
                personel güvenliğini en üst düzeyde tutacak sistemler tasarlıyoruz. Biosafety 
                cabinet, fume hood ve özel havalandırma sistemleri ile laboratuvar ortamlarını 
                optimize ediyoruz.
              </p>
              <p>
                Her laboratuvar tipi için özelleştirilmiş çözümler sunuyoruz. 
                <strong>Biosafety</strong> gereksinimlerinden kimyasal güvenlik protokollerine, 
                contamination kontrolünden precise air flow yönetimine kadar her detayı ele alıyoruz.
              </p>
              <p>
                <strong>Laboratory design</strong> süreçlerimizde, workflow optimizasyonu ve 
                ergonomik çalışma koşulları da priorite verdiğimiz konulardır. Araştırmacıların 
                verimli ve güvenli çalışabilmesi için kapsamlı planlama yapıyoruz.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src="/images/applications/laboratory-systems.jpg"
              alt="Laboratuvar sistemleri kurulumu"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Sistem Tipleri */}
        <div className="space-y-12 mb-16">
          {systems.map((system, index) => {
            const Icon = system.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-sm text-blue-600 font-medium">
                      Özel Sistem Çözümü
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {system.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {system.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Uygulama Alanları:</h4>
                    <div className="flex flex-wrap gap-2">
                      {system.applications.map((app, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`${!isEven ? 'lg:col-start-1' : ''} ${isEven ? '' : 'lg:row-start-1'}`}>
                  <div className="bg-gray-100 rounded-2xl p-8 text-center">
                    <Icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900">#{index + 1}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Teknik Standartlar */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Uyguladığımız Teknik Standartlar
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { standard: 'EN 12469', desc: 'Biosafety Cabinet Standardı' },
              { standard: 'ASHRAE 110', desc: 'Fume Hood Performance' },
              { standard: 'ISO 14644', desc: 'Cleanroom Standards' },
              { standard: 'CDC/NIH Guidelines', desc: 'Biosafety Protocols' }
            ].map((std, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-4 shadow-sm">
                <div className="text-lg font-bold text-blue-600 mb-2">{std.standard}</div>
                <div className="text-sm text-gray-600">{std.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Laboratuvar Projeniz İçin Teknik Danışmanlık</h3>
          <p className="text-blue-100 mb-6">
            Laboratuvar gereksinimlerinizi değerlendirelim ve size özel sistem önerisi hazırlayalım
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+905123456789">Teknik Görüşme</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <a href="https://wa.me/905123456789" target="_blank">WhatsApp</a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}