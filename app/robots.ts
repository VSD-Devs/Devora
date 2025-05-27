import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/private/', '/*.json$'],
    },
    sitemap: 'https://www.devora.co.uk/sitemap.xml',
    host: 'https://www.devora.co.uk',
  }
} 