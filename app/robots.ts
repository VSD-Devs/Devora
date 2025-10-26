import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/*.json', '/.next/', '/node_modules/', '/admin/', '/login/', '/logout/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/.next/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/.next/'],
      },
    ],
    sitemap: 'https://www.devora.co.uk/sitemap.xml',
  }
}

