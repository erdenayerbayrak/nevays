'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';

export default function ProjectShowcase() {
  const t = useTranslations('common');
  const locale = useLocale();

  const featuredProjects = [
    {
      id: 'atabay-pharmaceutical',
      title: 'Atabay İlaç - GMP Temiz Oda Kompleksi',
      category: 'İlaç Endüstrisi',
      location: 'İstanbul, Türkiye',
      year: '2023',
      area: '1,200 m²',
      description: 'Farmasötik üretim için ISO 14644 standartlarında Class C ve Class D temiz oda sistemleri.',
      image: '/images/hero/Laboratuvar-768x431.jpg',
      href: `/projects/atabay-pharmaceutical`,
      tags: ['GMP', 'ISO 14644', 'Farmasötik'],
      gradient: 'from-primary-600 to-primary-700'
    },
    {
      id: 'aselsan-electronics',
      title: 'Aselsan - Elektronik Üretim Alanı',
      category: 'Savunma Sanayi',
      location: 'Ankara, Türkiye',
      year: '2023',
      area: '800 m²',
      description: 'Hassas elektronik komponent üretimi için ESD korumalı temiz oda ve laboratuvar sistemleri.',
      image: '/images/hero/temiz-oda-clean-room-3.jpg',
      href: `/projects/aselsan-electronics`,
      tags: ['ESD', 'Elektronik', 'Class 10K'],
      gradient: 'from-accent-600 to-accent-700'
    },
    {
      id: 'valeo-automotive',
      title: 'Valeo - Otomotiv Test Laboratuvarı',
      category: 'Otomotiv',
      location: 'Bursa, Türkiye',
      year: '2022',
      area: '600 m²',
      description: 'Otomotiv parçaları için kalite kontrol ve test laboratuvarı sistemleri.',
      image: '/images/hero/1cd33d0204ab1612222705ca6e4bf149.jpg',
      href: `/projects/valeo-automotive`,
      tags: ['Otomotiv', 'Test Lab', 'Kalite Kontrol'],
      gradient: 'from-emerald-600 to-emerald-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Son Projelerimizden
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Gerçekleştirdiğimiz başarılı projelerle, temiz oda teknolojilerindeki uzmanlığımızı keşfedin
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary-800">{project.category}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Info */}
                <div className="flex items-center text-sm text-neutral-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-800 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-neutral-500">
                    <span className="font-semibold">Alan:</span> {project.area}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <Link
                  href={`/${locale}${project.href}`}
                  className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800 transition-colors"
                >
                  <span className="mr-2">Proje Detayları</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center px-8 py-4 bg-primary-900 hover:bg-primary-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">Tüm Referanslar</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}