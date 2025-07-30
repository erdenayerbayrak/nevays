"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon, Home, Info, Factory, Settings, Package, Shield, Users, BookOpen, FolderOpen, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslations, useLocale } from 'next-intl';

interface NavItem {
  name: string
  url: string
  iconName: string
  translationKey: string
}

const getIconComponent = (iconName: string): LucideIcon => {
  switch (iconName) {
    case 'Home': return Home;
    case 'Info': return Info;
    case 'Factory': return Factory;
    case 'Settings': return Settings;
    case 'Package': return Package;
    case 'Shield': return Shield;
    case 'Users': return Users;
    case 'BookOpen': return BookOpen;
    case 'FolderOpen': return FolderOpen;
    case 'Phone': return Phone;
    default: return Home;
  }
};

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [isHomePage, setIsHomePage] = useState(false)
  const t = useTranslations('navigation');
  const locale = useLocale();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/'
    setIsHomePage(currentPath === '/')
    
    const currentItem = items.find(item => item.url === currentPath)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname, locale, items])

  return (
    <div
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-40 lg:hidden",
        isHomePage 
          ? "bottom-6" 
          : "bottom-6",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-white/90 border border-neutral-200/50 backdrop-blur-xl py-2 px-2 rounded-2xl shadow-2xl ring-1 ring-black/5">
        {items.map((item) => {
          const Icon = getIconComponent(item.iconName)
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={`/${locale}${item.url}`}
              className={cn(
                "relative cursor-pointer text-xs font-semibold px-3 py-2 rounded-xl transition-all duration-300 whitespace-nowrap group",
                "text-neutral-600 hover:text-primary-800 hover:scale-105 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50",
                isActive && "bg-gradient-to-r from-primary-100 to-accent-100 text-primary-900 shadow-lg ring-2 ring-primary-200/50",
              )}
            >
              <span className="hidden md:inline">{t(item.translationKey)}</span>
              <span className="md:hidden">
                <Icon size={14} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 w-full bg-gradient-to-r from-primary-200/80 to-accent-200/80 rounded-xl -z-10 shadow-inner"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full">
                    <div className="absolute w-8 h-3 bg-primary-300/40 rounded-full blur-sm -top-1 -left-1" />
                    <div className="absolute w-4 h-2 bg-accent-400/60 rounded-full blur-xs top-0 left-1" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

// Navigation items based on requested structure
export const navigationItems: NavItem[] = [
  { name: 'home', url: '/', iconName: 'Home', translationKey: 'home' },
  { name: 'about', url: '/hakkimizda', iconName: 'Info', translationKey: 'about' },
  { name: 'production', url: '/uretim', iconName: 'Factory', translationKey: 'production' },
  { name: 'applications', url: '/uygulama', iconName: 'Settings', translationKey: 'applications' },
  { name: 'products', url: '/urunler', iconName: 'Package', translationKey: 'products' },
  { name: 'knowledge', url: '/bilgi-merkezi', iconName: 'Shield', translationKey: 'cleanRoom' },
  { name: 'references', url: '/referanslar', iconName: 'Users', translationKey: 'references' },
  { name: 'blog', url: '/blog', iconName: 'BookOpen', translationKey: 'blog' },
  { name: 'catalogs', url: '/kataloglar', iconName: 'FolderOpen', translationKey: 'catalogs' },
  { name: 'contact', url: '/contact', iconName: 'Phone', translationKey: 'contact' },
]