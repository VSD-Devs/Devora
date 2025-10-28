import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.devora.co.uk'
  
  // Static pages with optimised priority hierarchy
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage - highest priority
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9, // Regular content updates
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, // Portfolio is important
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5, // Legal pages - lower priority
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Get blog posts dynamically
  const blogPosts: MetadataRoute.Sitemap = []
  try {
    const contentDirectory = path.join(process.cwd(), 'content/blog')
    const fileNames = fs.readdirSync(contentDirectory)
    
    fileNames.forEach((fileName) => {
      if (fileName.endsWith('.md')) {
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        
        blogPosts.push({
          url: `${baseUrl}/blog/${fileName.replace(/\.md$/, '')}`,
          lastModified: data.date ? new Date(data.date) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.8, // Blog posts are important content
        })
      }
    })
  } catch (error) {
    console.error('Error reading blog posts:', error)
  }

  // Case studies with comprehensive list
  const caseStudies: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/case-studies/envirotech-plumbing`,
      lastModified: new Date(),
      changeFrequency: 'quarterly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/nl-education`,
      lastModified: new Date(),
      changeFrequency: 'quarterly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/lr-talent`,
      lastModified: new Date(),
      changeFrequency: 'quarterly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/rectify`,
      lastModified: new Date(),
      changeFrequency: 'quarterly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/sandalwood-memorials`,
      lastModified: new Date(),
      changeFrequency: 'quarterly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/sandalwood-memories`,
      lastModified: new Date(),
      changeFrequency: 'quarterly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/hv-direct`,
      lastModified: new Date(),
      changeFrequency: 'quarterly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/rfw`,
      lastModified: new Date(),
      changeFrequency: 'quarterly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/slush-dating`,
      lastModified: new Date(),
      changeFrequency: 'quarterly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/sky-limit-travels`,
      lastModified: new Date(),
      changeFrequency: 'quarterly',
      priority: 0.85,
    },
  ]

  return [...staticPages, ...blogPosts, ...caseStudies]
}

