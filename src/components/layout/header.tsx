'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { NavBar, navigationItems } from '@/components/ui/navbar';

export default function Header() {
  const locale = useLocale();

  return (
    <>
      {/* Logo - Fixed top left */}
      <div className="fixed top-4 left-4 z-50">
        <Link href={`/${locale}`} className="flex items-center">
          <span className="text-2xl font-display font-heading text-brand-primary bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
            NEVAYS
          </span>
        </Link>
      </div>

      {/* Language Switcher - Fixed top right */}
      <div className="fixed top-4 right-4 z-50">
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
          <Link
            href="/tr"
            className={`text-sm font-medium transition-colors duration-200 ${
              locale === 'tr' ? 'text-brand-primary' : 'text-gray-500 hover:text-brand-primary'
            }`}
          >
            TR
          </Link>
          <span className="text-gray-300">/</span>
          <Link
            href="/en"
            className={`text-sm font-medium transition-colors duration-200 ${
              locale === 'en' ? 'text-brand-primary' : 'text-gray-500 hover:text-brand-primary'
            }`}
          >
            EN
          </Link>
        </div>
      </div>

      {/* Animated Navigation Bar */}
      <NavBar items={navigationItems} />
    </>
  );
}