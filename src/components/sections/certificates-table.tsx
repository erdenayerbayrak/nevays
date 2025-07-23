'use client';

import { useState } from 'react';
import { Download, Search, Filter, Calendar, Building2 } from 'lucide-react';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CertificateData {
  id: string;
  name: string;
  standard: string;
  issuedBy: string;
  issueDate: string;
  expiryDate: string;
  language: string;
  status: 'active' | 'expiring' | 'expired';
  downloadUrl: string;
}

const certificatesData: CertificateData[] = [
  {
    id: '1',
    name: 'ISO 14644-1 Temiz Odalar ve İlişkili Kontrollü Ortamlar',
    standard: 'ISO 14644-1:2015',
    issuedBy: 'TÜV SÜD Türkiye',
    issueDate: '2023-06-15',
    expiryDate: '2026-06-15',
    language: 'EN/TR',
    status: 'active',
    downloadUrl: '/downloads/certificates/iso-14644.pdf'
  },
  {
    id: '2',
    name: 'ISO 9001 Kalite Yönetim Sistemi',
    standard: 'ISO 9001:2015',
    issuedBy: 'Bureau Veritas',
    issueDate: '2023-03-20',
    expiryDate: '2026-03-20',
    language: 'TR',
    status: 'active',
    downloadUrl: '/downloads/certificates/iso-9001.pdf'
  },
  {
    id: '3',
    name: 'EU GMP Uygunluk Belgesi',
    standard: 'EU GMP Annex 1',
    issuedBy: 'European Medicines Agency',
    issueDate: '2023-08-10',
    expiryDate: '2025-08-10',
    language: 'EN',
    status: 'expiring',
    downloadUrl: '/downloads/certificates/gmp-eu.pdf'
  },
  {
    id: '4',
    name: 'CE İşareti Uygunluk Beyanı',
    standard: 'CE Marking Directive',
    issuedBy: 'Notified Body NB-1234',
    issueDate: '2023-05-05',
    expiryDate: '2028-05-05',
    language: 'EN',
    status: 'active',
    downloadUrl: '/downloads/certificates/ce-marking.pdf'
  },
  {
    id: '5',
    name: 'FDA Tesis Kayıt Belgesi',
    standard: 'FDA 21 CFR 210/211',
    issuedBy: 'US Food and Drug Administration',
    issueDate: '2023-04-18',
    expiryDate: '2025-04-18',
    language: 'EN',
    status: 'expiring',
    downloadUrl: '/downloads/certificates/fda-approval.pdf'
  },
  {
    id: '6',
    name: 'ISO 45001 İş Sağlığı ve Güvenliği',
    standard: 'ISO 45001:2018',
    issuedBy: 'SGS Türkiye',
    issueDate: '2023-07-22',
    expiryDate: '2026-07-22',
    language: 'TR',
    status: 'active',
    downloadUrl: '/downloads/certificates/iso-45001.pdf'
  },
  {
    id: '7',
    name: 'ISO 14001 Çevre Yönetim Sistemi',
    standard: 'ISO 14001:2015',
    issuedBy: 'TÜRKAK',
    issueDate: '2023-09-12',
    expiryDate: '2026-09-12',
    language: 'TR',
    status: 'active',
    downloadUrl: '/downloads/certificates/iso-14001.pdf'
  },
  {
    id: '8',
    name: 'ATEX Direktifi Uygunluk',
    standard: 'ATEX 2014/34/EU',
    issuedBy: 'TÜV NORD',
    issueDate: '2023-01-30',
    expiryDate: '2027-01-30',
    language: 'EN',
    status: 'active',
    downloadUrl: '/downloads/certificates/atex.pdf'
  }
];

export default function CertificatesTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredAndSorted = certificatesData
    .filter(cert => {
      const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.standard.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.issuedBy.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || cert.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'issueDate':
          aValue = new Date(a.issueDate);
          bValue = new Date(b.issueDate);
          break;
        case 'expiryDate':
          aValue = new Date(a.expiryDate);
          bValue = new Date(b.expiryDate);
          break;
        case 'issuedBy':
          aValue = a.issuedBy;
          bValue = b.issuedBy;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expiring':
        return 'bg-yellow-100 text-yellow-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Geçerli';
      case 'expiring':
        return 'Süresi Yaklaşıyor';
      case 'expired':
        return 'Süresi Dolmuş';
      default:
        return 'Bilinmiyor';
    }
  };

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-heading text-gray-900 mb-4">
          Sertifika Listesi
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto mb-6" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tüm kalite sertifikalarımızın detaylı listesi ve durum bilgileri
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Sertifika adı, standart veya kurum ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option value="all">Tüm Durumlar</option>
              <option value="active">Geçerli</option>
              <option value="expiring">Süresi Yaklaşıyor</option>
              <option value="expired">Süresi Dolmuş</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            {filteredAndSorted.length} sertifika bulundu
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center">
                    Sertifika Adı
                    {sortBy === 'name' && (
                      <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Standart
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('issuedBy')}
                >
                  <div className="flex items-center">
                    Veren Kurum
                    {sortBy === 'issuedBy' && (
                      <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('expiryDate')}
                >
                  <div className="flex items-center">
                    Geçerlilik
                    {sortBy === 'expiryDate' && (
                      <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dil
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAndSorted.map((certificate) => (
                <tr key={certificate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {certificate.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {certificate.standard}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Building2 className="h-4 w-4 mr-2" />
                      {certificate.issuedBy}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(certificate.expiryDate).toLocaleDateString('tr-TR')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {certificate.language}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={cn(
                      'px-2 py-1 text-xs font-medium rounded-full',
                      getStatusColor(certificate.status)
                    )}>
                      {getStatusLabel(certificate.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={certificate.downloadUrl} download>
                        <Download className="h-4 w-4 mr-2" />
                        İndir
                      </a>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAndSorted.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-2">Arama kriterlerinize uygun sertifika bulunamadı.</div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
              }}
            >
              Filtreleri Temizle
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}