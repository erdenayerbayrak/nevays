'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Linkedin, Twitter, Facebook, Phone, Mail } from 'lucide-react';

const socialMedia = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/nevays',
    color: 'text-blue-600 hover:text-blue-700'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/nevays',
    color: 'text-sky-500 hover:text-sky-600'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/nevays',
    color: 'text-blue-700 hover:text-blue-800'
  }
];

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Logo */}
          <div>
            <Link href={`/${locale}`} className="block">
              <div className="text-2xl font-bold text-primary-900">
                NEVAYS
              </div>
            </Link>
          </div>

          {/* Mission Statement */}
          <div className="max-w-2xl">
            <p className="text-gray-600 text-lg leading-relaxed">
              {locale === 'tr' 
                ? 'Yüksek teknoloji için kontrollü alanlar tasarlıyoruz.'
                : 'We design controlled environments for high technology.'
              }
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-600" />
              <a 
                href="tel:+902165551234" 
                className="hover:text-primary-600 transition-colors font-medium"
              >
                +90 216 555 12 34
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-600" />
              <a 
                href="mailto:info@nevays.com" 
                className="hover:text-primary-600 transition-colors font-medium"
              >
                info@nevays.com
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            {socialMedia.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all duration-200 ${social.color}`}
                  title={social.name}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-200 w-full">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NEVAYS. {locale === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
