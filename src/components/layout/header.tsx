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
        <Link href={`/${locale}`} className="flex items-center group">
          <span className="text-2xl font-display font-heading text-primary-900 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-neutral-200 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
            NEVAYS
          </span>
        </Link>
      </div>

      {/* Language Switcher - Fixed top right */}
      <div className="fixed top-4 right-4 z-50">
        <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-neutral-200">
          <Link
            href="/tr"
            className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
              locale === 'tr' ? 'text-primary-800 font-semibold' : 'text-neutral-600 hover:text-primary-700'
            }`}
          >
            TR
          </Link>
          <span className="text-neutral-400">•</span>
          <Link
            href="/en"
            className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
              locale === 'en' ? 'text-primary-800 font-semibold' : 'text-neutral-600 hover:text-primary-700'
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