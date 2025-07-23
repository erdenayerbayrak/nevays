'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqData = [
  {
    id: 'temiz-oda-nedir',
    question: 'Temiz Oda Nedir?',
    answer: `Temiz oda, havadaki partiküllerin kontrolü altında tutulduğu ve diğer çevresel parametrelerin (sıcaklık, nem, basınç) belirli sınırlar içinde kontrol edildiği özel mühendislik alanlarıdır. İlaç, elektronik, gıda ve tıbbi cihaz üretiminde kritik önem taşır.`
  },
  {
    id: 'temiz-oda-sistemleri',
    question: 'Temiz Oda Sistemleri Nelerdir?',
    answer: `Temiz oda sistemleri: HEPA/ULPA filtre sistemleri, hava devir sistemi (AHU), basınç kontrolü, sıcaklık ve nem kontrolü, partiküllü madde ölçüm sistemleri, personel ve malzeme giriş/çıkış sistemleri, temiz oda panelleri ve özel kapılardan oluşur.`
  },
  {
    id: 'temiz-oda-siniflari',
    question: 'Temiz Oda Sınıfları Nelerdir?',
    answer: `ISO 14644-1 standardına göre temiz odalar 9 sınıfa ayrılır (ISO 1-9). Sınıf numarası arttıkça izin verilen partikül sayısı artar. En temiz sınıf ISO 1, en az temiz sınıf ISO 9'dur. İlaç endüstrisinde genellikle Sınıf A, B, C, D kullanılır.`
  },
  {
    id: 'gmp-nedir',
    question: 'GMP Nedir?',
    answer: `GMP (Good Manufacturing Practice - İyi Üretim Uygulamaları), ilaç ve tıbbi ürünlerin kaliteli, güvenli ve etkili şekilde üretilmesini sağlayan uluslararası standartlardır. Temiz oda tasarımı ve işletmesinde GMP kurallarına uyum zorunludur.`
  },
  {
    id: 'gmp-sertifikasi',
    question: 'GMP Sertifikası Nedir?',
    answer: `GMP sertifikası, bir üretim tesisinin iyi üretim uygulamalarına uygun olarak çalıştığını belgeleyen resmi dokümandır. Bu sertifika yetkili kuruluşlar tarafından düzenli denetimler sonucu verilir ve belirli periyotlarda yenilenmesi gerekir.`
  },
  {
    id: 'iso14644',
    question: 'ISO 14644 Standartı Nedir?',
    answer: `ISO 14644, temiz odalar ve kontrollü ortamlar için uluslararası standartlardır. Sınıflandırma, tasarım, kurulum, test etme ve işletme gereksinimlerini tanımlar. Bu standart, temiz oda performansının objektif olarak değerlendirilmesini sağlar.`
  },
  {
    id: 'steril-alan',
    question: 'Steril Alan Nedir?',
    answer: `Steril alan, tüm mikroorganizmaların tamamen yok edildiği veya uzaklaştırıldığı kontrollü ortamlardır. Aseptik üretim, ameliyathane uygulamaları ve kritik tıbbi cihaz üretiminde kullanılır. Sterilizasyon yöntemleri ve sürekli monitoring gerektirir.`
  },
  {
    id: 'moduler-temiz-oda',
    question: 'Modüler Temiz Oda Nedir?',
    answer: `Modüler temiz oda, standart panellerden oluşan ve gereksinime göre boyutlandırılabilen temiz oda sistemleridir. Hızlı kurulum, esneklik, genişletilebilirlik ve maliyet avantajı sağlar. Özellikle Ar-Ge ve küçük üretim alanları için idealdir.`
  },
  {
    id: 'temiz-oda-yonetmeligi',
    question: 'Temiz Oda Yönetmeliği',
    answer: `Türkiye'de temiz oda uygulamaları İlaç ve Tıbbi Cihaz Kurumu (TİTCK) yönetmelikleri, TSE standartları ve AB GMP kılavuzları ile düzenlenir. Bu yönetmelikler tasarım, kurulum, validasyon ve işletme gereksinimlerini belirler.`
  },
  {
    id: 'temiz-oda-denetim',
    question: 'Temiz Oda Denetimi',
    answer: `Temiz oda denetimi, sistemin belirlenen standartlara uygunluğunun kontrolüdür. Partikül sayımı, hava akış hızı ölçümü, HEPA filtre sızıntı testi, basınç farkı kontrolü ve mikrobiyal kontrol testleri düzenli olarak yapılmalıdır.`
  }
];

export default function CleanRoomFAQ() {
  const [openItems, setOpenItems] = useState<string[]>(['temiz-oda-nedir']);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.includes(item.id);
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.question}
                  </h3>
                  {isOpen ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-heading mb-4">
            Temiz Oda Projeniz İçin Uzman Desteği
          </h2>
          <p className="text-lg mb-6 opacity-90">
            20+ yıllık deneyimimizle projenize özel çözümler geliştiriyoruz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-primary rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Ücretsiz Danışmanlık
            </a>
            <a
              href="tel:+902164720612"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Hemen Arayın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}