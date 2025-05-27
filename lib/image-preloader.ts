/**
 * Image preloader utility for better performance
 * Preloads critical images to improve perceived loading speed
 */

interface PreloadOptions {
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

/**
 * Preload a single image
 */
export function preloadImage(src: string, options: PreloadOptions = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    
    if (options.sizes) {
      link.setAttribute('imagesizes', options.sizes);
    }
    
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
    
    document.head.appendChild(link);
  });
}

/**
 * Preload multiple images
 */
export function preloadImages(sources: string[], options: PreloadOptions = {}): Promise<void[]> {
  return Promise.all(sources.map(src => preloadImage(src, options)));
}

/**
 * Preload critical blog images
 */
export function preloadCriticalBlogImages(posts: Array<{ coverImage: string }>, limit: number = 3): void {
  if (typeof window === 'undefined') return;
  
  const criticalImages = posts.slice(0, limit).map(post => post.coverImage);
  
  criticalImages.forEach(src => {
    preloadImage(src, {
      priority: true,
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    }).catch(error => {
      console.warn('Failed to preload critical image:', error);
    });
  });
}

/**
 * Create optimised image URLs for different screen sizes
 */
export function generateResponsiveImageUrls(baseUrl: string, sizes: number[] = [640, 828, 1200, 1920]): string[] {
  // For external URLs, return as-is since Next.js will handle optimisation
  if (baseUrl.startsWith('http')) {
    return [baseUrl];
  }
  
  // For local images, generate different sizes
  return sizes.map(size => {
    const url = new URL(baseUrl, window.location.origin);
    url.searchParams.set('w', size.toString());
    url.searchParams.set('q', '85');
    return url.toString();
  });
}

/**
 * Check if an image is in the viewport for lazy loading
 */
export function isImageInViewport(element: HTMLElement, threshold: number = 0.1): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  return (
    rect.top <= windowHeight * (1 + threshold) &&
    rect.bottom >= -windowHeight * threshold &&
    rect.left <= windowWidth * (1 + threshold) &&
    rect.right >= -windowWidth * threshold
  );
}

/**
 * Intersection Observer for lazy loading images
 */
export function createImageObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, defaultOptions);
}

/**
 * Get optimal image dimensions for different use cases
 */
export function getOptimalImageDimensions(useCase: 'blog-cover' | 'blog-thumbnail' | 'hero' | 'avatar'): {
  width: number;
  height: number;
  aspectRatio: string;
} {
  switch (useCase) {
    case 'blog-cover':
      return { width: 1200, height: 630, aspectRatio: '16/9' };
    case 'blog-thumbnail':
      return { width: 400, height: 225, aspectRatio: '16/9' };
    case 'hero':
      return { width: 1920, height: 1080, aspectRatio: '16/9' };
    case 'avatar':
      return { width: 200, height: 200, aspectRatio: '1/1' };
    default:
      return { width: 800, height: 450, aspectRatio: '16/9' };
  }
}

/**
 * Generate blur data URL for placeholder
 */
export function generateBlurDataURL(width: number = 10, height: number = 10, color: string = '#f1f5f9'): string {
  // Create a simple SVG blur placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  `;
  
  const base64 = btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
} 