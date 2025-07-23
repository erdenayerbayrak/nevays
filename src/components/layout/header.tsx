'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'about', href: '/about' },
  { name: 'production', href: '/production' },
  {
    name: 'applications',
    href: '/applications',
    children: [
      { name: 'cleanRoomInstallation', href: '/applications/clean-room-installation' },
      { name: 'laboratoryInstallation', href: '/applications/laboratory-installation' },
      { name: 'hvacApplications', href: '/applications/hvac' },
      { name: 'lafCabin', href: '/applications/laf-cabin' },
      { name: 'modularCleanRoom', href: '/applications/modular-clean-room' },
    ],
  },
  {
    name: 'products',
    href: '/products',
    children: [
      { name: 'cleanRoomPanels', href: '/products/clean-room-panels' },
      { name: 'cleanRoomDoors', href: '/products/clean-room-doors' },
      { name: 'passBox', href: '/products/pass-box' },
      { name: 'cleanRoomClothing', href: '/products/clean-room-clothing' },
    ],
  },
  { name: 'cleanRoom', href: '/clean-room' },
  { name: 'references', href: '/references' },
  { name: 'blog', href: '/blog' },
  { name: 'catalogs', href: '/catalogs' },
  { name: 'contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center">
              <span className="text-2xl font-display font-heading text-brand-primary">
                NEVAYS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={`/${locale}${item.href}`}
                    className={cn(
                      'px-3 py-2 text-sm font-medium transition-colors duration-200',
                      isScrolled
                        ? 'text-gray-700 hover:text-brand-primary'
                        : 'text-white hover:text-brand-secondary'
                    )}
                  >
                    <span className="flex items-center">
                      {t(item.name)}
                      {item.children && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </span>
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div className="invisible group-hover:visible absolute left-0 top-full pt-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <div className="w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={`/${locale}${child.href}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors duration-200"
                            >
                              {t(child.name)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/tr"
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                locale === 'tr'
                  ? isScrolled
                    ? 'text-brand-primary'
                    : 'text-brand-secondary'
                  : isScrolled
                  ? 'text-gray-500 hover:text-brand-primary'
                  : 'text-white/70 hover:text-white'
              )}
            >
              TR
            </Link>
            <span className={isScrolled ? 'text-gray-300' : 'text-white/30'}>
              /
            </span>
            <Link
              href="/en"
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                locale === 'en'
                  ? isScrolled
                    ? 'text-brand-primary'
                    : 'text-brand-secondary'
                  : isScrolled
                  ? 'text-gray-500 hover:text-brand-primary'
                  : 'text-white/70 hover:text-white'
              )}
            >
              EN
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className={isScrolled ? 'text-gray-700' : 'text-white'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.name)}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={`/${locale}${child.href}`}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t(child.name)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex items-center justify-center px-3">
                  <div className="flex items-center space-x-2">
                    <Link
                      href="/tr"
                      className={cn(
                        'text-sm font-medium',
                        locale === 'tr'
                          ? 'text-brand-primary'
                          : 'text-gray-500'
                      )}
                    >
                      TR
                    </Link>
                    <span className="text-gray-300">/</span>
                    <Link
                      href="/en"
                      className={cn(
                        'text-sm font-medium',
                        locale === 'en'
                          ? 'text-brand-primary'
                          : 'text-gray-500'
                      )}
                    >
                      EN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}