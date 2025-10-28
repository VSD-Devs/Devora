import React from 'react'

interface SchemaProps {
  data: any
}

/**
 * Component to render JSON-LD structured data in the page head
 * This improves SEO by helping search engines understand your content
 */
export function JsonLd({ data }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  )
}
