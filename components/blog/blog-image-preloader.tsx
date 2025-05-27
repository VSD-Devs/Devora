'use client';

import { useEffect } from 'react';
import { preloadCriticalBlogImages } from '@/lib/image-preloader';

interface BlogImagePreloaderProps {
  posts: Array<{ coverImage: string }>;
  limit?: number;
}

export function BlogImagePreloader({ posts, limit = 3 }: BlogImagePreloaderProps) {
  useEffect(() => {
    // Preload critical blog images on component mount
    preloadCriticalBlogImages(posts, limit);
  }, [posts, limit]);

  // This component doesn't render anything
  return null;
} 