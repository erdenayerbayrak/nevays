import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Building2, Award, CheckCircle } from 'lucide-react';
import MainLayout from '@/components/layout/main-layout';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import CTABanner from '@/components/sections/cta-banner';

interface Props {
  params: { locale: string; slug: string };
}

// Mock project data - in real app this would come from CMS/API
const projectsData = {
  'pfizer-istanbul': {
    title: 'Pfizer İlaç Üretim Tesisi',
    client: 'Pfizer Turkey',
    location: 'İstanbul, Türkiye',
    year: 2023,
    duration: '14 ay',
    category: 'İlaç Üretimi',
    heroImage: '/images/projects/pfizer-istanbul-hero.jpg',
    description: 'Pfizer\'ın İstanbul\'daki yeni ilaç üretim tesisi için GMP Grade B standartlarında temiz oda sistemi ve kapsamlı HVAC altyapısı projesini başarıyla tamamladık.',
    challenge: 'Proje kapsamında, ilaç üretiminin kritik gereksinimlerini karşılayan, 24/7 kesintisiz çalışabilecek, enerji verimli ve GMP standartlarına uygun bir sistem tasarlanması gerekiyordu.',
    solution: 'Modüler temiz oda sistemleri, HEPA filtrasyon, diferansiyel basınç kontrolü ve otomatik kontrol sistemleri ile entegre bir çözüm geliştirdik.',
    metrics: [
      { label: 'Toplam Alan', value: '2,500 m²', icon: '📐' },
      { label: 'Temiz Oda Sınıfı', value: 'ISO 5 (Grade B)', icon: '🏥' },
      { label: 'Hava Kapasitesi', value: '50,000 m³/h', icon: '💨' },
      { label: 'Enerji Verimliliği', value: 'A+ Sınıfı', icon: '⚡' },
      { label: 'Proje Süresi', value: '14 ay', icon: '📅' },
      { label: 'Ekip Büyüklüğü', value: '25 kişi', icon: '👥' },
    ],
    features: [
      'GMP Grade B temiz oda sistemi',
      'HEPA H14 filtrasyon sistemi',
      'Diferansiyel basınç kontrol sistemi',
      'Otomatik BMS kontrol sistemi',
      'Enerji geri kazanım sistemi',
      '24/7 monitoring sistemi',
      'Bakım ve servis protokolü',
      'Operatör eğitim programı'
    ],
    gallery: [
      '/images/projects/pfizer-1.jpg',
      '/images/projects/pfizer-2.jpg',
      '/images/projects/pfizer-3.jpg',
      '/images/projects/pfizer-4.jpg',
    ],
    testimonial: {
      quote: 'NEVAYS ekibi, projemizi zamanında ve bütçe dahilinde tamamladı. Teknik uzmanlıkları ve profesyonel yaklaşımları sayesinde GMP standartlarına tam uyumlu bir sistem kurduk.',
      author: 'Dr. Mehmet Özkan',
      position: 'Teknik Direktör, Pfizer Turkey',
      avatar: '/images/testimonials/mehmet-ozkan.jpg'
    },
    certifications: ['GMP', 'ISO 14644', 'CE', 'FDA'],
    tags: ['GMP', 'Clean Room', 'HVAC', 'Pharmaceutical', 'Istanbul']
  }
};

// Generate static params for all locale and slug combinations
export async function generateStaticParams() {
  const locales = ['tr', 'en'];
  const projectSlugs = Object.keys(projectsData);
  
  return locales.flatMap((locale) =>
    projectSlugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const project = projectsData[slug as keyof typeof projectsData];
  
  if (!project) {
    return {
      title: 'Proje Bulunamadı',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params: { locale, slug } }: Props) {
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghostButton" size="sm" asChild>
                <Link href={`/${locale}/projects`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Projelere Dön
                </Link>
              </Button>
            </div>

            <div className="max-w-4xl text-white">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-brand-primary rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.year}
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
                <div className="flex items-center text-sm">
                  <Building2 className="h-4 w-4 mr-1" />
                  {project.client}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-heading mb-4 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Metrics */}
      <Section background="light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-2xl font-display font-heading text-brand-primary mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Challenge & Solution */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-heading text-gray-900 mb-6">
              Proje Gereksinimi
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-display font-heading text-gray-900 mb-6">
              Çözümümüz
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.solution}
            </p>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-heading text-gray-900 mb-8 text-center">
            Proje Özellikleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="h-5 w-5 text-brand-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-display font-heading text-gray-900 mb-8 text-center">
          Proje Galerisi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.gallery.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`${project.title} - ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="light">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Award className="h-12 w-12 text-brand-primary mx-auto mb-4" />
            <h2 className="text-3xl font-display font-heading text-gray-900 mb-6">
              Müşteri Görüşü
            </h2>
          </div>
          
          <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
            "{project.testimonial.quote}"
          </blockquote>
          
          <div className="flex items-center justify-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
              <Image
                src={project.testimonial.avatar}
                alt={project.testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">
                {project.testimonial.author}
              </div>
              <div className="text-gray-600 text-sm">
                {project.testimonial.position}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <div className="text-center">
          <h3 className="text-xl font-display font-heading text-gray-900 mb-6">
            Uygunluk Sertifikaları
          </h3>
          <div className="flex justify-center items-center gap-8">
            {project.certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-brand-primary font-semibold">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABanner
        title="Benzer Bir Proje Mi Planlıyorsunuz?"
        description="Uzman ekibimiz ile projenizi değerlendirin ve size özel çözümler geliştirelim."
        buttonText="Proje Danışmanlığı"
        buttonAction="contact"
      />
    </MainLayout>
  );
}