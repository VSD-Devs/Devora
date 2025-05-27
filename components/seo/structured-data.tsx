import Script from 'next/script'

interface OrganizationStructuredDataProps {
  name: string
  url: string
  logo: string
  description: string
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
  contactPoint?: {
    telephone?: string
    contactType?: string
    email?: string
  }
  sameAs?: string[]
}

interface BlogPostStructuredDataProps {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author: {
    name: string
    url?: string
  }
  publisher: {
    name: string
    logo: string
  }
  url: string
  wordCount?: number
  keywords?: string[]
}

interface WebsiteStructuredDataProps {
  name: string
  url: string
  description: string
  potentialAction?: {
    target: string
    queryInput: string
  }
}

interface ServiceStructuredDataProps {
  name: string
  description: string
  provider: {
    name: string
    url: string
  }
  areaServed?: string[]
  serviceType?: string
  offers?: {
    price?: string
    priceCurrency?: string
    description?: string
  }[]
}

export function OrganizationStructuredData({
  name,
  url,
  logo,
  description,
  address,
  contactPoint,
  sameAs = []
}: OrganizationStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo,
    },
    description,
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address,
      },
    }),
    ...(contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        ...contactPoint,
      },
    }),
    ...(sameAs.length > 0 && { sameAs }),
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function BlogPostStructuredData({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
  url,
  wordCount,
  keywords = []
}: BlogPostStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo,
      },
    },
    url,
    ...(wordCount && { wordCount }),
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <Script
      id="blog-post-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function WebsiteStructuredData({
  name,
  url,
  description,
  potentialAction
}: WebsiteStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
    ...(potentialAction && {
      potentialAction: {
        '@type': 'SearchAction',
        target: potentialAction.target,
        'query-input': potentialAction.queryInput,
      },
    }),
  }

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function ServiceStructuredData({
  name,
  description,
  provider,
  areaServed = [],
  serviceType,
  offers = []
}: ServiceStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url,
    },
    ...(areaServed.length > 0 && { areaServed }),
    ...(serviceType && { serviceType }),
    ...(offers.length > 0 && {
      offers: offers.map(offer => ({
        '@type': 'Offer',
        ...offer,
      })),
    }),
  }

  return (
    <Script
      id="service-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
} 