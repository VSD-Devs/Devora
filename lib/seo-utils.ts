import type { Metadata } from 'next'

interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}

const DEFAULT_KEYWORDS = [
  'startup web development',
  'affordable web design', 
  'professional web services',
  'React development agency',
  'Next.js development',
  'UK web developer',
  'responsive web design',
  'SEO-friendly websites',
  'web development for startups',
  'mobile-friendly websites'
]

const SITE_CONFIG = {
  name: 'Devora',
  url: 'https://devora.dev',
  description: 'Professional web development services for startups and growing businesses',
  image: '/og-home.jpg',
  twitter: '@devoradev'
}

/**
 * Generate comprehensive metadata for pages
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = [],
  section,
  tags = []
}: SEOConfig): Metadata {
  const fullTitle = title.includes('Devora') ? title : `${title} | Devora`
  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url
  const fullImage = image ? `${SITE_CONFIG.url}${image}` : `${SITE_CONFIG.url}${SITE_CONFIG.image}`
  const allKeywords = [...DEFAULT_KEYWORDS, ...keywords, ...tags]

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: authors.map(author => ({ name: author })),
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
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
      type,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      locale: 'en_GB',
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: SITE_CONFIG.twitter,
      site: SITE_CONFIG.twitter,
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

/**
 * Generate blog post metadata
 */
export function generateBlogMetadata({
  title,
  description,
  slug,
  publishedTime,
  modifiedTime,
  author,
  tags = [],
  image
}: {
  title: string
  description: string
  slug: string
  publishedTime: string
  modifiedTime?: string
  author: string
  tags?: string[]
  image?: string
}): Metadata {
  return generateMetadata({
    title,
    description,
    keywords: tags,
    image: image || '/blog/default-cover.jpg',
    url: `/blog/${slug}`,
    type: 'article',
    publishedTime,
    modifiedTime,
    authors: [author],
    section: 'Web Development',
    tags
  })
}

/**
 * Generate service page metadata
 */
export function generateServiceMetadata({
  title,
  description,
  slug,
  keywords = []
}: {
  title: string
  description: string
  slug: string
  keywords?: string[]
}): Metadata {
  const serviceKeywords = [
    ...keywords,
    'web development services',
    'professional web design',
    'startup web solutions',
    'affordable web development',
    'UK web development agency'
  ]

  return generateMetadata({
    title,
    description,
    keywords: serviceKeywords,
    url: `/services/${slug}`,
    image: '/og-services.jpg'
  })
}

/**
 * Calculate reading time for blog posts
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

/**
 * Generate breadcrumb items for structured data
 */
export function generateBreadcrumbs(path: string): Array<{ name: string; url: string }> {
  const segments = path.split('/').filter(Boolean)
  const breadcrumbs = [{ name: 'Home', url: SITE_CONFIG.url }]
  
  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    breadcrumbs.push({
      name,
      url: `${SITE_CONFIG.url}${currentPath}`
    })
  })
  
  return breadcrumbs
}

/**
 * Generate FAQ structured data
 */
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * Generate local business structured data
 */
export function generateLocalBusinessStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}#business`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UK',
      addressRegion: 'England'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.5074',
      longitude: '-0.1278'
    },
    openingHours: 'Mo-Fr 09:00-17:00',
    telephone: '+44-XXX-XXX-XXXX',
    email: 'contact@devora.dev',
    priceRange: '££',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '27',
      bestRating: '5',
      worstRating: '1'
    }
  }
} 