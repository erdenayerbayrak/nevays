'use client';

import { useState, useRef, useEffect } from 'react';
import Section from '@/components/ui/section';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const historyData = [
  {
    year: '1998',
    title: 'Şirket Kuruluşu',
    description: 'NEVAYS, İstanbul\'da temiz oda teknolojilerine odaklanarak kuruldu.',
    achievements: ['İlk temiz oda projesi', 'Kurucu ekip oluşturuldu']
  },
  {
    year: '2002',
    title: 'İlk Büyük Proje',
    description: 'Türkiye\'nin en büyük ilaç şirketlerinden biri için GMP temiz oda sistemi teslim edildi.',
    achievements: ['GMP sertifikasyonu', '50+ çalışan']
  },
  {
    year: '2005',
    title: 'Uluslararası Genişleme',
    description: 'Orta Doğu ve Balkan ülkelerine ilk ihracat gerçekleştirildi.',
    achievements: ['İlk ihracat', '10 ülkede faaliyet']
  },
  {
    year: '2008',
    title: 'AR-GE Merkezi',
    description: 'Şirket bünyesinde AR-GE merkezi kurularak inovatif çözümler geliştirilmeye başlandı.',
    achievements: ['AR-GE merkezi', 'Patent başvuruları']
  },
  {
    year: '2012',
    title: 'Avrupa Pazarı',
    description: 'Almanya ve Fransa\'da stratejik ortaklıklar kurularak Avrupa pazarına giriş yapıldı.',
    achievements: ['Avrupa ofisleri', 'ISO 14644 sertifikasyonu']
  },
  {
    year: '2015',
    title: 'Dijital Dönüşüm',
    description: 'IoT ve endüstri 4.0 teknolojileri entegre edilerek akıllı sistemler geliştirildi.',
    achievements: ['IoT sistemler', 'Uzaktan monitoring']
  },
  {
    year: '2018',
    title: '20. Yıl Dönümü',
    description: '20 yıllık deneyim ile 300+ proje tamamlandı ve sektör lideri pozisyon güçlendirildi.',
    achievements: ['300+ proje', '25 ülke']
  },
  {
    year: '2020',
    title: 'Pandemi Çözümleri',
    description: 'COVID-19 pandemi sürecinde hastaneler için özel havalandırma çözümleri geliştirildi.',
    achievements: ['Pandemi çözümleri', 'Hızlı teslimat']
  },
  {
    year: '2022',
    title: 'Sürdürülebilirlik',
    description: 'Enerji verimli ve çevre dostu çözümler ile sürdürülebilir teknolojilere odaklanıldı.',
    achievements: ['A+ enerji sınıfı', 'Karbon nötr hedefi']
  },
  {
    year: '2024',
    title: 'Global Liderlik',
    description: '45 ülkede 500+ proje ile küresel temiz hava teknolojileri lideri konumuna ulaşıldı.',
    achievements: ['45 ülke', '500+ proje']
  }
];

export default function CompanyHistory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (timelineRef.current?.offsetLeft || 0));
    setScrollLeft(timelineRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (timelineRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (timelineRef.current) {
      timelineRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    if (timelineRef.current) {
      const item = timelineRef.current.children[index] as HTMLElement;
      if (item) {
        item.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  const nextSlide = () => {
    const newIndex = activeIndex === historyData.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = activeIndex === 0 ? historyData.length - 1 : activeIndex - 1;
    scrollToIndex(newIndex);
  };

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading text-gray-900 mb-4">
          Tarihçemiz
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto mb-6" />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          25 yıllık yolculuğumuzda attığımız önemli adımlar ve elde ettiğimiz başarılar
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden lg:block relative">
        {/* Timeline SVG Line */}
        <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />
        
        <div className="flex justify-between items-start">
          {historyData.map((item, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col items-center cursor-pointer transition-all duration-300 w-28',
                activeIndex === index ? 'transform scale-110' : 'hover:transform hover:scale-105'
              )}
              onClick={() => setActiveIndex(index)}
            >
              {/* Timeline Node */}
              <div className={cn(
                'w-4 h-4 rounded-full border-4 border-white shadow-lg transition-colors duration-300 mb-4',
                activeIndex === index ? 'bg-brand-primary' : 'bg-gray-400'
              )} />
              
              {/* Year */}
              <div className={cn(
                'text-sm font-display font-heading mb-2 transition-colors duration-300',
                activeIndex === index ? 'text-brand-primary' : 'text-gray-600'
              )}>
                {item.year}
              </div>
              
              {/* Title */}
              <div className={cn(
                'text-xs text-center leading-tight transition-colors duration-300',
                activeIndex === index ? 'text-gray-900' : 'text-gray-500'
              )}>
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Active Item Details */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-display font-heading text-brand-primary mr-4">
                {historyData[activeIndex].year}
              </span>
              <h3 className="text-2xl font-display font-heading text-gray-900">
                {historyData[activeIndex].title}
              </h3>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {historyData[activeIndex].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {historyData[activeIndex].achievements.map((achievement, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm rounded-full"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" size="sm" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-center">
            <span className="text-sm text-gray-500">
              {activeIndex + 1} / {historyData.length}
            </span>
          </div>
          <Button variant="outline" size="sm" onClick={nextSlide}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div
          ref={timelineRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex space-x-4 pb-4" style={{ width: `${historyData.length * 300}px` }}>
            {historyData.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'flex-shrink-0 w-72 bg-white rounded-lg p-6 shadow-sm transition-all duration-300',
                  activeIndex === index ? 'ring-2 ring-brand-primary shadow-lg' : ''
                )}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-display font-heading text-brand-primary mr-3">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-display font-heading text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}