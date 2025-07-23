import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  solutions: [
    { name: 'airHandling', href: '/solutions/air-handling' },
    { name: 'cleanRoom', href: '/solutions/clean-room' },
    { name: 'engineering', href: '/solutions/engineering' },
  ],
  company: [
    { name: 'about', href: '/about' },
    { name: 'projects', href: '/projects' },
    { name: 'references', href: '/references' },
    { name: 'career', href: '/career' },
  ],
  resources: [
    { name: 'certificates', href: '/certificates' },
    { name: 'blog', href: '/blog' },
    { name: 'contact', href: '/contact' },
  ],
};

export default function Footer() {
  const t = useTranslations();
  const tNav = useTranslations('navigation');
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href={`/${locale}`} className="flex items-center mb-4">
                <span className="text-2xl font-display font-heading text-brand-primary">
                  NEVAYS
                </span>
              </Link>
              <p className="text-gray-300 mb-6">
                {tFooter('description')}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <MapPin className="h-4 w-4 mr-2 text-brand-secondary" />
                  <span>İstanbul, Türkiye</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Phone className="h-4 w-4 mr-2 text-brand-secondary" />
                  <a href="tel:+902121234567" className="hover:text-brand-secondary transition-colors">
                    +90 212 123 45 67
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Mail className="h-4 w-4 mr-2 text-brand-secondary" />
                  <a href="mailto:info@nevays.com" className="hover:text-brand-secondary transition-colors">
                    info@nevays.com
                  </a>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{tFooter('solutions')}</h3>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-gray-300 hover:text-brand-secondary transition-colors duration-200"
                    >
                      {tNav(link.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{tFooter('company')}</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-gray-300 hover:text-brand-secondary transition-colors duration-200"
                    >
                      {tNav(link.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{tFooter('quickLinks')}</h3>
              <ul className="space-y-2 mb-6">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-gray-300 hover:text-brand-secondary transition-colors duration-200"
                    >
                      {tNav(link.name)}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-400">Sosyal Medya</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://linkedin.com/company/nevays"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-secondary transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/nevays"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-secondary transition-colors duration-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/nevays"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-secondary transition-colors duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              {tFooter('copyright')}
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link
                href={`/${locale}/privacy`}
                className="text-sm text-gray-400 hover:text-brand-secondary transition-colors duration-200"
              >
                {tFooter('privacy')}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-sm text-gray-400 hover:text-brand-secondary transition-colors duration-200"
              >
                {tFooter('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}