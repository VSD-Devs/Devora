import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/markdown'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devora.dev'
  
  // Get current date for dynamic content
  const now = new Date()
  const currentDate = now.toISOString()
  
  // Static page dates - update these when pages are modified
  const homeLastMod = new Date('2024-01-15').toISOString();
  const servicesLastMod = new Date('2024-01-10').toISOString();
  const pricingLastMod = new Date('2024-01-08').toISOString();
  const aboutLastMod = new Date('2024-01-05').toISOString();
  const contactLastMod = new Date('2024-01-03').toISOString();
  const legalLastMod = new Date('2024-01-01').toISOString();
  
  // Get all blog posts for dynamic sitemap generation
  const allPosts = getAllPosts()
  const blogLastMod = allPosts.length > 0 
    ? new Date(allPosts[0].date).toISOString() 
    : new Date('2024-01-01').toISOString();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: homeLastMod,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: servicesLastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: pricingLastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: aboutLastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogLastMod,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/project-inquiry`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: contactLastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
  ]

  // Dynamic blog post pages
  const blogPages = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
} 