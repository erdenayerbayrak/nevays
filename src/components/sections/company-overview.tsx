import Image from 'next/image';
import { Building2, Users, Globe, Award } from 'lucide-react';
import Section from '@/components/ui/section';

const overviewData = [
  {
    icon: Building2,
    title: 'Kuruluş',
    value: '1998',
    description: 'İstanbul merkezli olarak kurulan şirketimiz'
  },
  {
    icon: Globe,
    title: 'Merkez',
    value: 'İstanbul',
    description: 'Türkiye\'nin teknoloji başkenti'
  },
  {
    icon: Users,
    title: 'CEO',
    value: 'Dr. Ali Nevay',
    description: 'Sektörde 30+ yıllık deneyim'
  },
  {
    icon: Award,
    title: 'Tesis',
    value: '12,000 m²',
    description: 'Modern üretim ve AR-GE merkezi'
  }
];

const values = [
  {
    title: 'Kalite',
    description: 'Uluslararası standartlarda mükemmellik',
    image: '/images/about/value-quality.jpg'
  },
  {
    title: 'İnovasyon',
    description: 'Sürekli AR-GE ve teknoloji geliştirme',
    image: '/images/about/value-innovation.jpg'
  },
  {
    title: 'Güvenilirlik',
    description: '25 yıllık sektör deneyimi ve referansları',
    image: '/images/about/value-reliability.jpg'
  },
  {
    title: 'Sürdürülebilirlik',
    description: 'Çevre dostu ve enerji verimli çözümler',
    image: '/images/about/value-sustainability.jpg'
  }
];

export default function CompanyOverview() {
  return (
    <Section background="light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading text-gray-900 mb-4">
          Kurumsal Genel Bakış
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto mb-6" />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Türkiye\'nin önde gelen temiz oda ve hava teknolojileri şirketi olarak, 
          global pazarda güvenilir çözümler sunuyoruz.
        </p>
      </div>

      {/* Quad Grid Overview (Inspired by Termovent) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {overviewData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary/20 transition-colors duration-300">
              <item.icon className="h-8 w-8 text-brand-primary" />
            </div>
            <h3 className="font-display font-heading text-lg text-gray-900 mb-2">
              {item.title}
            </h3>
            <div className="text-2xl font-display font-heading text-brand-primary mb-2">
              {item.value}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Company Values */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-display font-heading text-gray-900 mb-4">
            Değerlerimiz
          </h3>
          <p className="text-gray-600">
            Çalışmalarımızı yönlendiren temel değerler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center p-6">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mr-6">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-display font-heading text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-display font-heading text-brand-primary mb-6">
            Misyonumuz
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            İlaç, hastane ve endüstriyel tesislerde en yüksek kalite standartlarında 
            temiz oda ve hava teknolojileri çözümleri sunarak, insan sağlığına ve 
            çevre korunmasına katkıda bulunmak.
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-display font-heading text-brand-secondary mb-6">
            Vizyonumuz
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Temiz hava teknolojilerinde global lider olmak ve sürdürülebilir, 
            yenilikçi çözümler ile dünya çapında tercih edilen marka haline gelmek.
          </p>
        </div>
      </div>
    </Section>
  );
}