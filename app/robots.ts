import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/*.json', '/.next/', '/node_modules/', '/admin/', '/login/', '/logout/', '/thank-you'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/.next/', '/thank-you'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/.next/', '/thank-you'],
      },
    ],
    sitemap: 'https://www.devora.co.uk/sitemap.xml',
  }
}
