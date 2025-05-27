'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimisedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// Generate a simple blur placeholder
const generateBlurDataURL = (width: number = 10, height: number = 10): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Create a subtle gradient blur effect
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f1f5f9');
    gradient.addColorStop(0.5, '#e2e8f0');
    gradient.addColorStop(1, '#cbd5e1');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL();
};

// Default blur placeholder for SSR compatibility
const DEFAULT_BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m9T+BdNNvGzTGLxzuBB+jvSm86HcDOvYd7OIuXuEyHLdPQfvGGvjuFuuR1A+YvU/gXTTbxs0xi8c7gQfo70pvOh3Azr2HezjLl7hMhy3T0H7xhr47hbrkdQPmL1P4F0028bNMYvHO4EH6O9KbzodwM69h3s4i5e4TIct09B+8Ya+O4W65HUD5i9T+BdNNvGzTGLxzuBB+jvSm86HcDOvYd7OIuXuEyHLdPQfvGGvjuFuuR1A+YvU/gXTTbxs0xi8c7gQfo70pvOh3Azr2HezjLl7hMhy3T0H7xhr47hbrkdQ';

export function OptimisedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  quality = 85,
  sizes,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError,
}: OptimisedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Generate blur placeholder if not provided
  const finalBlurDataURL = blurDataURL || (typeof window !== 'undefined' && width && height 
    ? generateBlurDataURL(Math.min(width, 40), Math.min(height, 40))
    : DEFAULT_BLUR_DATA_URL);

  // Default responsive sizes if not provided
  const defaultSizes = sizes || (fill 
    ? '100vw' 
    : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw');

  if (hasError) {
    return (
      <div 
        className={cn(
          'flex items-center justify-center bg-slate-100 text-slate-400',
          fill ? 'absolute inset-0' : '',
          className
        )}
        style={!fill ? { width, height } : undefined}
      >
        <svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={defaultSizes}
        placeholder={placeholder}
        blurDataURL={placeholder === 'blur' ? finalBlurDataURL : undefined}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          fill ? 'object-cover' : ''
        )}
      />
      
      {/* Loading overlay */}
      {isLoading && (
        <div 
          className={cn(
            'absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center',
            fill ? '' : 'rounded-lg'
          )}
          style={!fill ? { width, height } : undefined}
        >
          <div className="w-6 h-6 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
} 