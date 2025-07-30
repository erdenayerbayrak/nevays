'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Linkedin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Sütun 1: Marka Kimliği */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="block">
              <div className="text-xl font-bold text-white">
                NEVAYS
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              {locale === 'tr' 
                ? 'Geleceğin teknolojisi için kontrollü alanlar.'
                : 'Controlled environments for future technology.'
              }
            </p>
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} NEVAYS. {locale === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
            </p>
          </div>

          {/* Sütun 2: Hızlı Erişim */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              {locale === 'tr' ? 'Hızlı Erişim' : 'Quick Access'}
            </h4>
            <nav className="space-y-2">
              <Link href={`/${locale}/hakkimizda`} className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                {locale === 'tr' ? 'Hakkımızda' : 'About Us'}
              </Link>
              <Link href={`/${locale}/uygulama`} className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                {locale === 'tr' ? 'Mühendislik Çözümleri' : 'Engineering Solutions'}
              </Link>
              <Link href={`/${locale}/referanslar`} className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                {locale === 'tr' ? 'Referanslar' : 'References'}
              </Link>
              <Link href={`/${locale}/bilgi-merkezi`} className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                {locale === 'tr' ? 'Bilgi Merkezi' : 'Knowledge Center'}
              </Link>
              <Link href={`/${locale}/contact`} className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                {locale === 'tr' ? 'İletişim' : 'Contact'}
              </Link>
            </nav>
          </div>

          {/* Sütun 3: İletişim ve Sosyal Medya */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              {locale === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
            </h4>
            
            {/* Direkt İletişim */}
            <div className="space-y-3">
              <a 
                href="tel:+902165551234" 
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                +90 216 555 12 34
              </a>
              <a 
                href="mailto:proje@nevays.com" 
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                proje@nevays.com
              </a>
            </div>

            {/* Öne Çıkan WhatsApp Linki */}
            <a 
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Proje Hattı
            </a>

            {/* LinkedIn */}
            <div className="pt-2">
              <a
                href="https://linkedin.com/company/nevays"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-300 hover:text-primary-400 transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
