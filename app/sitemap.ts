import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devora.dev'
  
  // For production, you should use actual last modified dates
  // This is just a placeholder - replace with your actual dates
  const homeLastMod = new Date('2023-03-06').toISOString();
  const servicesLastMod = new Date('2023-03-01').toISOString();
  const pricingLastMod = new Date('2023-02-20').toISOString();
  const aboutLastMod = new Date('2023-02-15').toISOString();
  const blogLastMod = new Date('2023-02-10').toISOString();
  const contactLastMod = new Date('2023-01-25').toISOString();
  const legalLastMod = new Date('2023-01-20').toISOString();
  
  return [
    {
      url: baseUrl,
      lastModified: homeLastMod,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: servicesLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: pricingLastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: aboutLastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/project-inquiry`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: contactLastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
} 