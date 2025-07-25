'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronRight, Calendar, Award, Building, Zap } from 'lucide-react';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  image?: string;
  achievements?: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 2009,
    title: 'NEVAYS Kuruluşu',
    description: 'Temiz oda teknolojileri alanında uzmanlaşma başlangıcı',
    details: 'NEVAYS, temiz oda mühendisliği alanında öncü bir firma olarak kuruldu. İlk günden itibaren kalite ve müşteri memnuniyeti odaklı yaklaşım benimsendi.',
    icon: <Building className="w-6 h-6" />,
    achievements: ['Kuruluş', 'İlk ekip oluşturuldu', 'Temel altyapı']
  },
  {
    year: 2015,
    title: 'İlk Büyük Proje',
    description: 'Pharmaceutical sektöründe milestone proje tamamlandı',
    details: 'İlaç endüstrisinde gerçekleştirilen ilk büyük ölçekli temiz oda projesi başarıyla tamamlandı. Bu proje ile sektördeki konumumuz güçlendi.',
    icon: <Award className="w-6 h-6" />,
    achievements: ['500m² Temiz Oda', 'ISO 14644 Sertifikasyonu', 'GMP Uyumluluk']
  },
  {
    year: 2020,
    title: 'Uluslararası Genişleme',
    description: 'Avrupa pazarına açılım ve teknoloji yatırımları',
    details: 'Uluslararası pazarlara açılım stratejisi hayata geçirildi. Avrupa ülkelerinde projeler gerçekleştirmeye başlandı ve teknoloji altyapısı güçlendirildi.',
    icon: <Zap className="w-6 h-6" />,
    achievements: ['5 Ülkede Proje', 'Teknoloji Merkezi', 'AR-GE Birimi']
  },
  {
    year: 2024,
    title: 'Dijital Dönüşüm',
    description: 'IoT ve AI destekli temiz oda çözümleri',
    details: 'Dijital dönüşüm sürecinde IoT sensörleri ve yapay zeka destekli monitoring sistemleri geliştirilerek müşterilere gelişmiş çözümler sunulmaya başlandı.',
    icon: <Calendar className="w-6 h-6" />,
    achievements: ['Smart Cleanroom', 'IoT Integration', 'AI Monitoring']
  }
];

export default function InteractiveTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleEventClick = (index: number) => {
    setSelectedEvent(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100" ref={timelineRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            NEVAYS Yolculuğu
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            15+ yıllık deneyimimizin kilometre taşları ve başarı hikayelerimiz
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary-200 rounded-full transform -translate-y-1/2">
              <div 
                className={`h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full transition-all duration-2000 ease-out ${
                  isVisible ? 'w-full' : 'w-0'
                }`}
                style={{ transitionDelay: '0.5s' }}
              />
            </div>

            {/* Timeline Events */}
            <div className="relative flex justify-between items-center py-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => handleEventClick(index)}
                >
                  {/* Event Circle */}
                  <div
                    className={`
                      w-16 h-16 rounded-full border-4 flex items-center justify-center 
                      transition-all duration-500 transform group-hover:scale-110
                      ${selectedEvent === index 
                        ? 'bg-primary-600 border-primary-600 text-white shadow-2xl scale-110' 
                        : 'bg-white border-primary-300 text-primary-600 group-hover:border-primary-500'
                      }
                      ${isVisible ? 'animate-bounce' : ''}
                    `}
                    style={{ animationDelay: `${index * 0.3}s`, animationDuration: '0.8s', animationIterationCount: 1 }}
                  >
                    {event.icon}
                  </div>

                  {/* Year */}
                  <div className={`
                    mt-4 text-lg font-bold transition-colors duration-300
                    ${selectedEvent === index ? 'text-primary-600' : 'text-neutral-500 group-hover:text-primary-600'}
                  `}>
                    {event.year}
                  </div>

                  {/* Title */}
                  <div className={`
                    mt-2 text-sm font-medium text-center transition-colors duration-300 max-w-32
                    ${selectedEvent === index ? 'text-primary-700' : 'text-neutral-600 group-hover:text-primary-700'}
                  `}>
                    {event.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Details Card */}
          <div className="mt-12 bg-white rounded-2xl shadow-2xl p-8 border border-primary-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white mr-4">
                    {timelineEvents[selectedEvent].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-900">
                      {timelineEvents[selectedEvent].title}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {timelineEvents[selectedEvent].year}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                  {timelineEvents[selectedEvent].details}
                </p>

                {/* Achievements */}
                {timelineEvents[selectedEvent].achievements && (
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900 mb-3">
                      Önemli Başarılar
                    </h4>
                    <div className="space-y-2">
                      {timelineEvents[selectedEvent].achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-accent-500 mr-2" />
                          <span className="text-neutral-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-black text-primary-600 mb-2">
                    {timelineEvents[selectedEvent].year}
                  </div>
                  <div className="text-primary-700 font-medium">
                    {timelineEvents[selectedEvent].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 cursor-pointer
                ${selectedEvent === index ? 'ring-2 ring-primary-500 shadow-2xl' : 'hover:shadow-xl'}
              `}
              onClick={() => handleEventClick(index)}
            >
              <div className="flex items-center mb-4">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-colors
                  ${selectedEvent === index ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-600'}
                `}>
                  {event.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900">{event.title}</h3>
                  <p className="text-primary-600 font-medium">{event.year}</p>
                </div>
              </div>
              
              <p className="text-neutral-700 mb-4">{event.description}</p>
              
              {selectedEvent === index && (
                <div className="border-t border-primary-100 pt-4 animate-fade-in-up">
                  <p className="text-neutral-700 mb-4">{event.details}</p>
                  {event.achievements && (
                    <div className="space-y-2">
                      {event.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-accent-500 mr-2" />
                          <span className="text-sm text-neutral-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}