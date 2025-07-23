import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  locale?: string;
  type?: 'website' | 'article';
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/images/og-default.jpg',
  locale = 'tr',
  type = 'website'
}: SEOProps): Metadata {
  const siteName = 'NEVAYS';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, 'NEVAYS', 'temiz oda', 'clean room', 'HVAC', 'hava teknolojileri'].join(', '),
    authors: [{ name: 'NEVAYS' }],
    creator: 'NEVAYS',
    publisher: 'NEVAYS',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        }
      ],
      locale,
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@nevays',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'tr': `${canonicalUrl}`,
        'en': `${canonicalUrl?.replace('/tr/', '/en/')}`,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NEVAYS',
    url: 'https://nevays.com',
    logo: 'https://nevays.com/images/logo.png',
    description: 'Temiz oda ve hava teknolojileri çözümleri',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Atatürk Mahallesi, Teknoloji Caddesi No: 123',
      addressLocality: 'Beşiktaş',
      addressRegion: 'İstanbul',
      postalCode: '34349',
      addressCountry: 'TR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-212-123-45-67',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English']
    },
    sameAs: [
      'https://linkedin.com/company/nevays',
      'https://twitter.com/nevays'
    ]
  },

  product: (product: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'NEVAYS'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'NEVAYS'
    }
  }),

  article: (article: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'NEVAYS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nevays.com/images/logo.png'
      }
    },
    datePublished: article.publishDate,
    dateModified: article.modifiedDate || article.publishDate
  })
};