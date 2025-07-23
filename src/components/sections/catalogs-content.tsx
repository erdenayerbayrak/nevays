'use client';

import { Download, FileText, Eye, Calendar, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CatalogsContent() {
  const catalogs = [
    {
      category: 'Genel Kataloglar',
      items: [
        {
          title: 'NEVAYS Ana Katalog',
          description: 'Şirket profili, tüm hizmetler ve referans projeler hakkında kapsamlı bilgiler.',
          size: '12 MB',
          pages: '48 sayfa',
          lastUpdate: '2024',
          downloadUrl: '/catalogs/nevays-main-catalog.pdf'
        },
        {
          title: 'Temiz Oda Sistemleri Genel Bakış',
          description: 'Temiz oda tasarımı, kurulumu ve validasyon süreçleri hakkında teknik rehber.',
          size: '8 MB',
          pages: '32 sayfa',
          lastUpdate: '2024',
          downloadUrl: '/catalogs/cleanroom-systems-overview.pdf'
        }
      ]
    },
    {
      category: 'Ürün Katalogları',
      items: [
        {
          title: 'Temiz Oda Panelleri',
          description: 'HPL ve sac metal paneller, teknik özellikler, boyutlar ve montaj detayları.',
          size: '6 MB',
          pages: '24 sayfa',
          lastUpdate: '2024',
          downloadUrl: '/catalogs/cleanroom-panels.pdf'
        },
        {
          title: 'Temiz Oda Kapıları',
          description: 'Hermetic kapılar, sliding doors ve acil çıkış kapıları teknik spesifikasyonları.',
          size: '4 MB',
          pages: '16 sayfa',
          lastUpdate: '2024',
          downloadUrl: '/catalogs/cleanroom-doors.pdf'
        },
        {
          title: 'Pass Box Sistemleri',
          description: 'UV sterilizasyonlu pass box\'lar, interlock sistemler ve özel boyut seçenekleri.',
          size: '3 MB',
          pages: '12 sayfa',
          lastUpdate: '2024',
          downloadUrl: '/catalogs/pass-box-systems.pdf'
        },
        {
          title: 'Temiz Oda Kıyafetleri',
          description: 'ESD korumalı tulumlar, ayakkabılar ve aksesuarlar katalogu.',
          size: '5 MB',
          pages: '20 sayfa',
          lastUpdate: '2024',
          downloadUrl: '/catalogs/cleanroom-clothing.pdf'
        }
      ]
    },
    {
      category: 'Uygulama Katalogları', 
      items: [
        {
          title: 'Pharmaceutical Cleanroom Applications',
          description: 'İlaç sanayi temiz oda projeleri, GMP uyumluluk ve validasyon süreçleri.',
          size: '10 MB',
          pages: '36 sayfa',
          lastUpdate: '2024',
          downloadUrl: '/catalogs/pharmaceutical-applications.pdf'
        },
        {
          title: 'Laboratory Installation Guide',
          description: 'Laboratuvar kurulumu, biosafety cabinet ve fume hood sistemleri.',
          size: '7 MB',
          pages: '28 sayfa',
          lastUpdate: '2024',
          downloadUrl: '/catalogs/laboratory-installation.pdf'
        },
        {
          title: 'HVAC Systems Catalog',
          description: 'AHU sistemleri, filtrasyon teknolojileri ve enerji verimliliği çözümleri.',
          size: '9 MB',
          pages: '40 sayfa',
          lastUpdate: '2024',
          downloadUrl: '/catalogs/hvac-systems.pdf'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50/30 to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-2 mb-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700">Teknik Dokümantasyon</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-teal-700 bg-clip-text text-transparent">
              Temiz Oda Katalog Merkezi
            </span>
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-24"></div>
            <div className="mx-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent w-24"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Temiz oda sistemleri, ürünleri ve uygulamaları hakkında detaylı teknik bilgiler 
            içeren kataloglarımız PDF formatında organize edilmiştir. Tüm dokümanlar güncel 
            tutulmakta ve <span className="text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text font-semibold">ücretsiz</span> olarak sunulmaktadır.
          </p>
        </div>

        {/* Premium Katalog Kategorileri */}
        {catalogs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="relative mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
                  {category.category}
                </span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((catalog, index) => (
                <div key={index} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative p-8">
                    <div className="flex items-start mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mr-4 flex-shrink-0 shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <FileText className="h-8 w-8 text-white" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                          {catalog.title}
                        </h4>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                          <span className="flex items-center px-3 py-1 bg-gray-50 rounded-full">
                            <Download className="h-3 w-3 mr-1" />
                            {catalog.size}
                          </span>
                          <span className="flex items-center px-3 py-1 bg-gray-50 rounded-full">
                            <Eye className="h-3 w-3 mr-1" />
                            {catalog.pages}
                          </span>
                          <span className="flex items-center px-3 py-1 bg-gray-50 rounded-full">
                            <Calendar className="h-3 w-3 mr-1" />
                            {catalog.lastUpdate}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 text-base">
                      {catalog.description}
                    </p>
                    
                    <div className="flex gap-3">
                      <Button size="sm" asChild className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <a href={catalog.downloadUrl} target="_blank">
                          <Download className="mr-2 h-4 w-4" />
                          İndir
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                        <a href={catalog.downloadUrl} target="_blank">
                          <Eye className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Premium İstatistikler */}
        <div className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-white rounded-3xl p-12 mb-20 border border-gray-100 shadow-xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-teal-700 bg-clip-text text-transparent">
                Dokümantasyon İstatistikleri
              </span>
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-gray-600 font-medium">Katalog Kategorisi</div>
              </div>
              <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">200+</div>
                <div className="text-gray-600 font-medium">Sayfa İçerik</div>
              </div>
              <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">2024</div>
                <div className="text-gray-600 font-medium">Güncel Sürüm</div>
              </div>
              <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">PDF</div>
                <div className="text-gray-600 font-medium">Format</div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Özel Katalog Talebi CTA */}
        <div className="relative text-center bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/20 rounded-full translate-y-20 -translate-x-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-6 py-2 mb-6 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-white/90">Özel Hizmet</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Özel Katalog Talebi
            </h3>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Projenize özel teknik dokümantasyon veya detaylı ürün bilgileri için bizimle iletişime geçin. 
              <span className="text-white font-semibold">Uzman ekibimiz</span> size özel kataloglar hazırlar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="secondary" size="lg" asChild className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]">
                <a href="tel:+905123456789" className="font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Katalog Talebi
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]" asChild>
                <a href="https://wa.me/905123456789" target="_blank" className="font-semibold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}