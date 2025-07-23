/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://nevays.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  alternateRefs: [
    {
      href: 'https://nevays.com/tr',
      hreflang: 'tr',
    },
    {
      href: 'https://nevays.com/en',
      hreflang: 'en',
    },
  ],
  transform: async (config, path) => {
    // Custom transform function to handle internationalization
    const isDefaultLocale = !path.includes('/en/');
    const cleanPath = path.replace('/tr/', '/').replace('/en/', '/');
    
    return {
      loc: path,
      changefreq: getChangeFreq(cleanPath),
      priority: getPriority(cleanPath),
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://nevays.com/sitemap.xml',
    ],
  },
};

function getChangeFreq(path) {
  if (path === '/') return 'daily';
  if (path.includes('/blog/')) return 'weekly';
  if (path.includes('/projects/')) return 'monthly';
  return 'monthly';
}

function getPriority(path) {
  if (path === '/') return 1.0;
  if (path.startsWith('/solutions/')) return 0.9;
  if (path.startsWith('/projects')) return 0.8;
  if (path.startsWith('/about')) return 0.7;
  if (path.startsWith('/blog/')) return 0.6;
  return 0.5;
}