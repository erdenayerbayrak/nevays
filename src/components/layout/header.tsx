'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { NavBar, navigationItems } from '@/components/ui/navbar';

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('navigation');

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200/50 shadow-lg ring-1 ring-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center group">
              <span className="text-2xl font-display font-heading text-primary-900 transition-all duration-300 group-hover:scale-105">
                NEVAYS
              </span>
            </Link>

            {/* Navigation Menu - Center */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item) => {
                const isActive = false; // Will be handled by NavBar component
                return (
                  <Link
                    key={item.name}
                    href={`/${locale}${item.url}`}
                    className="relative text-sm font-medium text-neutral-600 hover:text-primary-700 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:shadow-md group"
                  >
                    <span className="relative z-10">{t(item.translationKey)}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-100/0 to-accent-100/0 group-hover:from-primary-100/50 group-hover:to-accent-100/50 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  </Link>
                );
              })}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-neutral-100/80 rounded-xl p-1 backdrop-blur-sm">
              <Link
                href="/tr"
                className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300 ${
                  locale === 'tr' 
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg ring-2 ring-primary-200/50' 
                    : 'text-neutral-600 hover:text-primary-700 hover:bg-white/80'
                }`}
              >
                TR
              </Link>
              <Link
                href="/en"
                className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300 ${
                  locale === 'en' 
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg ring-2 ring-primary-200/50' 
                    : 'text-neutral-600 hover:text-primary-700 hover:bg-white/80'
                }`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Navigation Bar */}
      <NavBar items={navigationItems} />
    </>
  );
}