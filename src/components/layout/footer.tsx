'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Building2 } from 'lucide-react';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: 'Ürünler',
        links: [
            { title: 'Tüm Ürünler', href: '/products' },
            { title: 'Temiz Oda Panelleri', href: '/products/clean-room-panels' },
            { title: 'Temiz Oda Kapıları', href: '/products/clean-room-doors' },
            { title: 'Pass Box', href: '/products/pass-box' },
        ],
    },
    {
        label: 'Şirket',
        links: [
            { title: 'Hakkımızda', href: '/about' },
            { title: 'Üretim', href: '/production' },
            { title: 'Referanslar', href: '/projects' },
            { title: 'İletişim', href: '/contact' },
        ],
    },
    {
        label: 'Kaynaklar',
        links: [
            { title: 'Blog', href: '/blog' },
            { title: 'Kataloglar', href: '/catalogs' },
            { title: 'Temiz Oda Bilgileri', href: '/clean-room' },
            { title: 'Uygulamalar', href: '/applications' },
        ],
    },
    {
        label: 'Sosyal Medya',
        links: [
            { title: 'LinkedIn', href: 'https://linkedin.com/company/nevays', icon: Linkedin },
            { title: 'Twitter', href: 'https://twitter.com/nevays', icon: Twitter },
            { title: 'Instagram', href: 'https://instagram.com/nevays', icon: Instagram },
        ],
    },
];

export default function Footer() {
    const locale = useLocale();

    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

                <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
                    <AnimatedContainer className="space-y-4">
                        <Building2 className="size-8 text-blue-400" />
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white">NEVAYS</h3>
                            <p className="text-gray-300 text-sm">
                                Temiz oda sistemleri ve mühendislik çözümlerinde güvenilir ortağınız.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-300">
                                    <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                                    <span>Mahmutlar Mah., Barbaros Cad. No:27, Alanya/Antalya</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-300">
                                    <Phone className="h-4 w-4 mr-2 text-blue-400" />
                                    <a href="tel:+905301234567" className="hover:text-blue-400 transition-colors">
                                        +90 530 123 45 67
                                    </a>
                                </div>
                                <div className="flex items-center text-sm text-gray-300">
                                    <Mail className="h-4 w-4 mr-2 text-blue-400" />
                                    <a href="mailto:info@nevays.com.tr" className="hover:text-blue-400 transition-colors">
                                        info@nevays.com.tr
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedContainer>

                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
                        {footerLinks.map((section, index) => (
                            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                                <div>
                                    <h3 className="text-sm font-semibold text-white mb-4">{section.label}</h3>
                                    <ul className="text-gray-300 space-y-2 text-sm">
                                        {section.links.map((link) => (
                                            <li key={link.title}>
                                                <Link
                                                    href={link.href.startsWith('http') ? link.href : `/${locale}${link.href}`}
                                                    className="hover:text-blue-400 inline-flex items-center transition-all duration-300"
                                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                >
                                                    {link.icon && <link.icon className="me-1 size-4" />}
                                                    {link.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedContainer>
                        ))}
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 mt-8">
                    <p className="text-gray-400 text-sm text-center">
                        © {new Date().getFullYear()} NEVAYS. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}