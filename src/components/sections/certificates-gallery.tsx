'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Download, Eye, Calendar } from 'lucide-react';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Certificate {
  id: string;
  name: string;
  standard: string;
  issuedBy: string;
  issueDate: string;
  expiryDate: string;
  language: 'TR' | 'EN' | 'DE' | 'FR';
  category: 'iso' | 'gmp' | 'ce' | 'fda' | 'other';
  thumbnail: string;
  fullImage: string;
  downloadUrl: string;
}

const certificates: Certificate[] = [
  {
    id: 'iso-14644',
    name: 'ISO 14644 Temiz Odalar',
    standard: 'ISO 14644-1:2015',
    issuedBy: 'TÜV SÜD',
    issueDate: '2023-06-15',
    expiryDate: '2026-06-15',
    language: 'EN',
    category: 'iso',
    thumbnail: '/images/certificates/iso-14644-thumb.jpg',
    fullImage: '/images/certificates/iso-14644-full.jpg',
    downloadUrl: '/downloads/certificates/iso-14644.pdf'
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001 Kalite Yönetimi',
    standard: 'ISO 9001:2015',
    issuedBy: 'Bureau Veritas',
    issueDate: '2023-03-20',
    expiryDate: '2026-03-20',
    language: 'TR',
    category: 'iso',
    thumbnail: '/images/certificates/iso-9001-thumb.jpg',
    fullImage: '/images/certificates/iso-9001-full.jpg',
    downloadUrl: '/downloads/certificates/iso-9001.pdf'
  },
  {
    id: 'gmp-eu',
    name: 'EU GMP Uygunluk Belgesi',
    standard: 'EU GMP Annex 1',
    issuedBy: 'EMA',
    issueDate: '2023-08-10',
    expiryDate: '2025-08-10',
    language: 'EN',
    category: 'gmp',
    thumbnail: '/images/certificates/gmp-eu-thumb.jpg',
    fullImage: '/images/certificates/gmp-eu-full.jpg',
    downloadUrl: '/downloads/certificates/gmp-eu.pdf'
  },
  {
    id: 'ce-marking',
    name: 'CE İşareti Uygunluk',
    standard: 'CE Marking',
    issuedBy: 'Notified Body',
    issueDate: '2023-05-05',
    expiryDate: '2028-05-05',
    language: 'EN',
    category: 'ce',
    thumbnail: '/images/certificates/ce-marking-thumb.jpg',
    fullImage: '/images/certificates/ce-marking-full.jpg',
    downloadUrl: '/downloads/certificates/ce-marking.pdf'
  },
  {
    id: 'fda-approval',
    name: 'FDA Tesis Onayı',
    standard: 'FDA 21 CFR 210/211',
    issuedBy: 'US FDA',
    issueDate: '2023-04-18',
    expiryDate: '2025-04-18',
    language: 'EN',
    category: 'fda',
    thumbnail: '/images/certificates/fda-approval-thumb.jpg',
    fullImage: '/images/certificates/fda-approval-full.jpg',
    downloadUrl: '/downloads/certificates/fda-approval.pdf'
  },
  {
    id: 'iso-45001',
    name: 'ISO 45001 İş Sağlığı',
    standard: 'ISO 45001:2018',
    issuedBy: 'SGS',
    issueDate: '2023-07-22',
    expiryDate: '2026-07-22',
    language: 'TR',
    category: 'iso',
    thumbnail: '/images/certificates/iso-45001-thumb.jpg',
    fullImage: '/images/certificates/iso-45001-full.jpg',
    downloadUrl: '/downloads/certificates/iso-45001.pdf'
  }
];

const categories = [
  { key: 'all', label: 'Tümü', color: 'bg-gray-500' },
  { key: 'iso', label: 'ISO', color: 'bg-blue-500' },
  { key: 'gmp', label: 'GMP', color: 'bg-green-500' },
  { key: 'ce', label: 'CE', color: 'bg-purple-500' },
  { key: 'fda', label: 'FDA', color: 'bg-red-500' },
  { key: 'other', label: 'Diğer', color: 'bg-orange-500' },
];

export default function CertificatesGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const filteredCertificates = certificates.filter(cert => 
    selectedCategory === 'all' || cert.category === selectedCategory
  );

  const getCategoryColor = (category: string) => {
    return categories.find(cat => cat.key === category)?.color || 'bg-gray-500';
  };

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-heading text-gray-900 mb-4">
          Sertifika Galerisi
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto mb-6" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kalite ve uygunluk sertifikalarımızı kategorilere göre görüntüleyin
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category.key}
            variant={selectedCategory === category.key ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category.key)}
            className={cn(
              'transition-all duration-200',
              selectedCategory === category.key
                ? 'shadow-md'
                : 'hover:border-brand-primary hover:text-brand-primary'
            )}
          >
            <span className={cn('w-3 h-3 rounded-full mr-2', category.color)} />
            {category.label}
          </Button>
        ))}
      </div>

      {/* Masonry Gallery */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {filteredCertificates.map((certificate) => (
          <div
            key={certificate.id}
            className="break-inside-avoid bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
            onClick={() => setSelectedCertificate(certificate)}
          >
            <div className="relative">
              <Image
                src={certificate.thumbnail}
                alt={certificate.name}
                width={400}
                height={300}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className={cn(
                  'px-2 py-1 text-xs font-medium text-white rounded-full uppercase',
                  getCategoryColor(certificate.category)
                )}>
                  {certificate.category}
                </span>
              </div>

              {/* Language Badge */}
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {certificate.language}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-display font-heading text-lg text-gray-900 mb-2 line-clamp-2">
                {certificate.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {certificate.standard}
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                Geçerli: {new Date(certificate.expiryDate).toLocaleDateString('tr-TR')}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex-1">
                <h3 className="text-lg font-display font-heading text-gray-900">
                  {selectedCertificate.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedCertificate.issuedBy} • {selectedCertificate.standard}
                </p>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a href={selectedCertificate.downloadUrl} download>
                    <Download className="h-4 w-4 mr-2" />
                    İndir
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCertificate(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative max-h-[70vh] overflow-auto">
              <Image
                src={selectedCertificate.fullImage}
                alt={selectedCertificate.name}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-gray-50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Veriliş:</span>
                  <div className="text-gray-600">
                    {new Date(selectedCertificate.issueDate).toLocaleDateString('tr-TR')}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Geçerlilik:</span>
                  <div className="text-gray-600">
                    {new Date(selectedCertificate.expiryDate).toLocaleDateString('tr-TR')}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Veren Kurum:</span>
                  <div className="text-gray-600">{selectedCertificate.issuedBy}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Dil:</span>
                  <div className="text-gray-600">{selectedCertificate.language}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}