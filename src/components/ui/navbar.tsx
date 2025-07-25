"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon, Home, Info, Wrench, Target, FileText, BookOpen, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslations, useLocale } from 'next-intl';

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  translationKey: string
}

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
        "fixed left-1/2 -translate-x-1/2 z-50",
        isHomePage 
          ? "bottom-0 sm:top-0 mb-6 sm:pt-6" 
          : "top-0 pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-white/95 border border-neutral-200 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg transform scale-110">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={`/${locale}${item.url}`}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap group",
                "text-neutral-600 hover:text-primary-800 hover:scale-105",
                isActive && "bg-primary-50 text-primary-900 shadow-sm",
              )}
            >
              <span className="hidden md:inline">{t(item.translationKey)}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-gradient-to-r from-primary-100 to-accent-100 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-accent-200 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary-200 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-accent-300 rounded-full blur-sm top-0 left-2" />
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

// Updated Navigation items with new structure based on strategic recommendations
export const navigationItems: NavItem[] = [
  { name: 'home', url: '/', icon: Home, translationKey: 'home' },
  { name: 'about', url: '/about', icon: Info, translationKey: 'about' },
  { name: 'solutions', url: '/solutions', icon: Wrench, translationKey: 'solutions' },
  { name: 'sectors', url: '/sectors', icon: Target, translationKey: 'sectors' },
  { name: 'references', url: '/projects', icon: FileText, translationKey: 'references' },
  { name: 'knowledge', url: '/knowledge-center', icon: BookOpen, translationKey: 'knowledgeCenter' },
  { name: 'contact', url: '/contact', icon: Phone, translationKey: 'contact' },
]