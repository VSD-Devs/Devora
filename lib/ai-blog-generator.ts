import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';
import sharp from 'sharp';

// Blog topics relevant to web development and your expertise
const BLOG_TOPICS = [
  'web development trends',
  'startup website essentials',
  'react performance tips',
  'next.js best practices',
  'website optimization',
  'seo for startups',
  'responsive design principles',
  'ui/ux improvements',
  'web accessibility',
  'website security',
  'conversion rate optimization',
  'landing page design',
  'mobile-first design',
  'website analytics',
  'e-commerce optimization',
  'web development workflow',
  'cms comparison',
  'website maintenance',
  'client communication tips',
  'web project management'
];

interface BlogPostData {
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  tags: string[];
}

/**
 * Enhanced image generation with multiple sources
 */
async function generateCoverImage(title: string, topic: string): Promise<string> {
  const fileName = `${topic.replace(/\s+/g, '-')}-${Date.now()}.jpg`;
  const outputPath = path.join(process.cwd(), 'public/blog', fileName);
  
  try {
    // Try different image sources in order of preference
    
    // 1. First try Pexels API (instant approval, no waiting)
    const pexelsImage = await tryPexelsImage(topic, outputPath);
    if (pexelsImage) {
      return `/blog/${fileName}`;
    }
    
    // 2. Try Unsplash API (if available and approved)
    const unsplashImage = await tryUnsplashImage(topic, outputPath);
    if (unsplashImage) {
      return `/blog/${fileName}`;
    }
    
    // 3. Try Lorem Picsum (no API key needed, instant)
    const loremPicsumImage = await tryLoremPicsumImage(topic, outputPath);
    if (loremPicsumImage) {
      return `/blog/${fileName}`;
    }
    
    // 4. Try Pixabay API (easy approval)
    const pixabayImage = await tryPixabayImage(topic, outputPath);
    if (pixabayImage) {
      return `/blog/${fileName}`;
    }
    
    // 5. Fallback to enhanced SVG generation
    await generateEnhancedSVGImage(title, topic, outputPath);
    return `/blog/${fileName}`;
    
  } catch (error) {
    console.error('Error generating cover image:', error);
    return '/blog/default-cover.jpg';
  }
}

/**
 * Try to get an image from Pexels (instant approval, free)
 */
async function tryPexelsImage(topic: string, outputPath: string): Promise<boolean> {
  if (!process.env.PEXELS_API_KEY) {
    console.log('Pexels API key not found, skipping Pexels image generation');
    return false;
  }
  
  try {
    const searchQuery = getPexelsSearchQuery(topic);
    
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=15&orientation=landscape`,
      {
        headers: {
          'Authorization': process.env.PEXELS_API_KEY,
        },
      }
    );
    
    if (!response.ok) {
      console.log('Pexels API request failed:', response.status);
      return false;
    }
    
    const data = await response.json();
    
    if (data.photos && data.photos.length > 0) {
      // Pick a random image from the results
      const randomIndex = Math.floor(Math.random() * Math.min(data.photos.length, 8));
      const selectedImage = data.photos[randomIndex];
      
      // Download the large image
      const imageResponse = await fetch(selectedImage.src.large);
      if (imageResponse.ok) {
        const imageBuffer = await imageResponse.arrayBuffer();
        
        // Process and save the image
        await sharp(Buffer.from(imageBuffer))
          .resize(1200, 630, { fit: 'cover' })
          .jpeg({ quality: 85 })
          .toFile(outputPath);
        
        console.log(`✅ Successfully downloaded Pexels image for topic: ${topic}`);
        return true;
      }
    }
    
    console.log('No suitable Pexels images found for topic:', topic);
    return false;
    
  } catch (error) {
    console.error('Error fetching from Pexels:', error);
    return false;
  }
}

/**
 * Try Lorem Picsum for placeholder images (no API key needed)
 */
async function tryLoremPicsumImage(topic: string, outputPath: string): Promise<boolean> {
  try {
    // Lorem Picsum provides beautiful placeholder images
    // We'll use a seed based on the topic for consistency
    const seed = topic.replace(/\s+/g, '').toLowerCase();
    const imageUrl = `https://picsum.photos/seed/${seed}/1200/630`;
    
    const imageResponse = await fetch(imageUrl);
    if (imageResponse.ok) {
      const imageBuffer = await imageResponse.arrayBuffer();
      
      // Process and save the image
      await sharp(Buffer.from(imageBuffer))
        .jpeg({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`✅ Successfully downloaded Lorem Picsum image for topic: ${topic}`);
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error('Error fetching from Lorem Picsum:', error);
    return false;
  }
}

/**
 * Try Pixabay API (easy approval, generous free tier)
 */
async function tryPixabayImage(topic: string, outputPath: string): Promise<boolean> {
  if (!process.env.PIXABAY_API_KEY) {
    console.log('Pixabay API key not found, skipping Pixabay image generation');
    return false;
  }
  
  try {
    const searchQuery = getPixabaySearchQuery(topic);
    
    const response = await fetch(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent(searchQuery)}&image_type=photo&orientation=horizontal&category=business&min_width=1200&per_page=20`
    );
    
    if (!response.ok) {
      console.log('Pixabay API request failed:', response.status);
      return false;
    }
    
    const data = await response.json();
    
    if (data.hits && data.hits.length > 0) {
      // Pick a random image from the results
      const randomIndex = Math.floor(Math.random() * Math.min(data.hits.length, 10));
      const selectedImage = data.hits[randomIndex];
      
      // Use the large image URL
      const imageUrl = selectedImage.largeImageURL || selectedImage.webformatURL;
      const imageResponse = await fetch(imageUrl);
      
      if (imageResponse.ok) {
        const imageBuffer = await imageResponse.arrayBuffer();
        
        // Process and save the image
        await sharp(Buffer.from(imageBuffer))
          .resize(1200, 630, { fit: 'cover' })
          .jpeg({ quality: 85 })
          .toFile(outputPath);
        
        console.log(`✅ Successfully downloaded Pixabay image for topic: ${topic}`);
        return true;
      }
    }
    
    console.log('No suitable Pixabay images found for topic:', topic);
    return false;
    
  } catch (error) {
    console.error('Error fetching from Pixabay:', error);
    return false;
  }
}

/**
 * Convert blog topic to Pexels search query
 */
function getPexelsSearchQuery(topic: string): string {
  const topicMappings: Record<string, string> = {
    'web development trends': 'technology computer programming',
    'startup website essentials': 'startup business team',
    'react performance tips': 'coding development computer',
    'next.js best practices': 'web development programming',
    'website optimization': 'speed technology performance',
    'seo for startups': 'marketing business growth',
    'responsive design principles': 'mobile design technology',
    'ui/ux improvements': 'design interface user experience',
    'web accessibility': 'accessibility technology inclusive',
    'website security': 'security technology protection',
    'conversion rate optimization': 'analytics business growth',
    'landing page design': 'website design business',
    'mobile-first design': 'mobile technology responsive',
    'website analytics': 'data analytics business',
    'e-commerce optimization': 'ecommerce online shopping',
    'web development workflow': 'development team collaboration',
    'cms comparison': 'content management technology',
    'website maintenance': 'maintenance technology tools',
    'client communication tips': 'business meeting communication',
    'web project management': 'project management team'
  };
  
  return topicMappings[topic] || `${topic} business technology`;
}

/**
 * Convert blog topic to Pixabay search query
 */
function getPixabaySearchQuery(topic: string): string {
  const topicMappings: Record<string, string> = {
    'web development trends': 'technology computer business',
    'startup website essentials': 'startup business office',
    'react performance tips': 'programming computer technology',
    'next.js best practices': 'web development business',
    'website optimization': 'performance technology business',
    'seo for startups': 'marketing business strategy',
    'responsive design principles': 'design technology mobile',
    'ui/ux improvements': 'design user interface',
    'web accessibility': 'accessibility technology',
    'website security': 'security technology business',
    'conversion rate optimization': 'analytics business growth',
    'landing page design': 'website business design',
    'mobile-first design': 'mobile technology design',
    'website analytics': 'analytics data business',
    'e-commerce optimization': 'ecommerce business online',
    'web development workflow': 'development business team',
    'cms comparison': 'technology business tools',
    'website maintenance': 'maintenance technology business',
    'client communication tips': 'business communication meeting',
    'web project management': 'project management business'
  };
  
  return topicMappings[topic] || `${topic} business`;
}

/**
 * Try to get an appropriate image from Unsplash
 */
async function tryUnsplashImage(topic: string, outputPath: string): Promise<boolean> {
  if (!process.env.UNSPLASH_ACCESS_KEY) {
    console.log('Unsplash API key not found, skipping Unsplash image generation');
    return false;
  }
  
  try {
    // Create search query based on topic
    const searchQuery = getUnsplashSearchQuery(topic);
    
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=10&orientation=landscape`,
      {
        headers: {
          'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    );
    
    if (!response.ok) {
      console.log('Unsplash API request failed:', response.status);
      return false;
    }
    
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      // Pick a random image from the results
      const randomIndex = Math.floor(Math.random() * Math.min(data.results.length, 5));
      const selectedImage = data.results[randomIndex];
      
      // Download the image
      const imageResponse = await fetch(selectedImage.urls.regular);
      if (imageResponse.ok) {
        const imageBuffer = await imageResponse.arrayBuffer();
        
        // Process and save the image
        await sharp(Buffer.from(imageBuffer))
          .resize(1200, 630, { fit: 'cover' })
          .jpeg({ quality: 85 })
          .toFile(outputPath);
        
        // Trigger download tracking (required by Unsplash API)
        if (selectedImage.links.download_location) {
          fetch(selectedImage.links.download_location, {
            headers: {
              'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
            },
          }).catch(() => {}); // Silent fail for tracking
        }
        
        console.log(`✅ Successfully downloaded Unsplash image for topic: ${topic}`);
        return true;
      }
    }
    
    console.log('No suitable Unsplash images found for topic:', topic);
    return false;
    
  } catch (error) {
    console.error('Error fetching from Unsplash:', error);
    return false;
  }
}

/**
 * Convert blog topic to Unsplash search query
 */
function getUnsplashSearchQuery(topic: string): string {
  const topicMappings: Record<string, string> = {
    'web development trends': 'technology computer coding',
    'startup website essentials': 'startup business office',
    'react performance tips': 'programming code development',
    'next.js best practices': 'web development coding',
    'website optimization': 'speed performance technology',
    'seo for startups': 'marketing analytics business',
    'responsive design principles': 'mobile design interface',
    'ui/ux improvements': 'user interface design',
    'web accessibility': 'accessibility inclusive design',
    'website security': 'cybersecurity protection lock',
    'conversion rate optimization': 'analytics growth chart',
    'landing page design': 'website design interface',
    'mobile-first design': 'mobile phone responsive',
    'website analytics': 'data analytics dashboard',
    'e-commerce optimization': 'online shopping ecommerce',
    'web development workflow': 'development team coding',
    'cms comparison': 'content management system',
    'website maintenance': 'maintenance tools development',
    'client communication tips': 'business meeting communication',
    'web project management': 'project management team'
  };
  
  return topicMappings[topic] || `${topic} technology business`;
}

/**
 * Try AI image generation (placeholder for future implementation)
 */
async function tryAIImageGeneration(title: string, topic: string, outputPath: string): Promise<boolean> {
  // This is a placeholder for AI image generation services like:
  // - Stability AI (Stable Diffusion)
  // - DALL-E 3 API
  // - Midjourney API
  // - Replicate API
  
  // For now, we'll skip this and fall back to SVG
  // You can implement this later with your preferred AI image service
  
  if (process.env.STABILITY_API_KEY) {
    // Example implementation for Stability AI
    try {
      const prompt = `Professional blog header image about ${topic}, modern design, clean, business-focused, high quality, 16:9 aspect ratio`;
      
      // This would be the actual API call to Stability AI
      // const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${process.env.STABILITY_API_KEY}`,
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     text_prompts: [{ text: prompt }],
      //     cfg_scale: 7,
      //     height: 630,
      //     width: 1200,
      //     steps: 30,
      //   }),
      // });
      
      console.log('AI image generation not implemented yet');
      return false;
    } catch (error) {
      console.error('AI image generation failed:', error);
      return false;
    }
  }
  
  return false;
}

/**
 * Generate enhanced SVG image with better design
 */
async function generateEnhancedSVGImage(title: string, topic: string, outputPath: string): Promise<void> {
  const width = 1200;
  const height = 630;
  const backgroundColor = getColorForTopic(topic);
  const accentColor = getAccentColorForTopic(topic);
  
  // Create a more sophisticated SVG design
  const svgImage = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${backgroundColor}" stop-opacity="1" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.8" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.8" />
          <stop offset="100%" stop-color="${backgroundColor}" stop-opacity="0.6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="100%" height="100%" fill="url(#bgGrad)" />
      
      <!-- Decorative elements -->
      <circle cx="100" cy="100" r="60" fill="${accentColor}" opacity="0.1" />
      <circle cx="${width - 100}" cy="${height - 100}" r="80" fill="${accentColor}" opacity="0.15" />
      <rect x="${width - 200}" y="50" width="150" height="150" fill="url(#accentGrad)" opacity="0.1" transform="rotate(45 ${width - 125} 125)" />
      
      <!-- Content area -->
      <rect x="80" y="120" width="${width - 160}" height="${height - 240}" fill="rgba(255,255,255,0.05)" rx="20" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
      
      <!-- Title -->
      <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle" filter="url(#glow)">
        ${title.length > 35 ? title.substring(0, 32) + '...' : title}
      </text>
      
      <!-- Subtitle -->
      <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.8)" text-anchor="middle" dominant-baseline="middle">
        ${getSubtitleForTopic(topic)}
      </text>
      
      <!-- Brand -->
      <text x="50%" y="85%" font-family="Arial, sans-serif" font-size="20" font-weight="600" fill="${accentColor}" text-anchor="middle" dominant-baseline="middle">
        DEVORA INSIGHTS
      </text>
      
      <!-- Decorative line -->
      <line x1="50%" y1="75%" x2="50%" y2="80%" stroke="${accentColor}" stroke-width="3" transform="translate(-50 0)" />
      <line x1="50%" y1="75%" x2="50%" y2="80%" stroke="${accentColor}" stroke-width="3" transform="translate(50 0)" />
    </svg>
  `;
  
  await sharp(Buffer.from(svgImage))
    .jpeg({ quality: 90 })
    .toFile(outputPath);
    
  console.log(`✅ Generated enhanced SVG image for topic: ${topic}`);
}

/**
 * Get a color based on the topic for the gradient
 */
function getColorForTopic(topic: string): string {
  const topicColors: Record<string, string> = {
    'web development trends': '#4F46E5',
    'startup website essentials': '#EF4444',
    'react performance tips': '#10B981',
    'next.js best practices': '#06B6D4',
    'website optimization': '#8B5CF6',
    'seo for startups': '#F59E0B',
    'responsive design principles': '#3B82F6',
    'ui/ux improvements': '#EC4899',
    'web accessibility': '#059669',
    'website security': '#DC2626',
    'conversion rate optimization': '#7C3AED',
    'landing page design': '#0EA5E9',
    'mobile-first design': '#84CC16',
    'website analytics': '#F97316',
    'e-commerce optimization': '#6366F1',
    'web development workflow': '#14B8A6',
    'cms comparison': '#A855F7',
    'website maintenance': '#64748B',
    'client communication tips': '#2563EB',
    'web project management': '#16A34A'
  };
  
  return topicColors[topic] || '#4F46E5';
}

/**
 * Get accent color for the topic
 */
function getAccentColorForTopic(topic: string): string {
  const baseColor = getColorForTopic(topic);
  // Create a lighter version of the base color for accent
  const colorMap: Record<string, string> = {
    '#4F46E5': '#818CF8',
    '#EF4444': '#F87171',
    '#10B981': '#34D399',
    '#06B6D4': '#22D3EE',
    '#8B5CF6': '#A78BFA',
    '#F59E0B': '#FBBF24',
    '#3B82F6': '#60A5FA',
    '#EC4899': '#F472B6',
    '#059669': '#10B981',
    '#DC2626': '#EF4444',
    '#7C3AED': '#8B5CF6',
    '#0EA5E9': '#38BDF8',
    '#84CC16': '#A3E635',
    '#F97316': '#FB923C',
    '#6366F1': '#818CF8',
    '#14B8A6': '#2DD4BF',
    '#A855F7': '#C084FC',
    '#64748B': '#94A3B8',
    '#2563EB': '#3B82F6',
    '#16A34A': '#22C55E'
  };
  
  return colorMap[baseColor] || '#818CF8';
}

/**
 * Get subtitle based on topic
 */
function getSubtitleForTopic(topic: string): string {
  const subtitles: Record<string, string> = {
    'web development trends': 'Latest Industry Insights',
    'startup website essentials': 'Building Your Digital Foundation',
    'react performance tips': 'Optimisation Strategies',
    'next.js best practices': 'Framework Mastery',
    'website optimization': 'Performance & Speed',
    'seo for startups': 'Search Visibility Guide',
    'responsive design principles': 'Multi-Device Excellence',
    'ui/ux improvements': 'User Experience Focus',
    'web accessibility': 'Inclusive Design Practices',
    'website security': 'Protection & Safety',
    'conversion rate optimization': 'Maximising Results',
    'landing page design': 'First Impression Matters',
    'mobile-first design': 'Mobile Excellence',
    'website analytics': 'Data-Driven Decisions',
    'e-commerce optimization': 'Online Sales Growth',
    'web development workflow': 'Efficient Processes',
    'cms comparison': 'Content Management',
    'website maintenance': 'Ongoing Care',
    'client communication tips': 'Professional Relations',
    'web project management': 'Successful Delivery'
  };
  
  return subtitles[topic] || 'Professional Insights';
}

/**
 * This function generates blog content using Hugging Face API.
 * We're using the Mistral-7B-Instruct model which is a powerful open-source
 * language model that provides high-quality text generation.
 */
async function generateContentWithAI(topic: string): Promise<BlogPostData> {
  try {
    // Using Hugging Face API for content generation with a reliable model
    const response = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-base",
      {
        headers: { 
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json" 
        },
        method: "POST",
        body: JSON.stringify({
          inputs: `Write a comprehensive blog post about ${topic} for a web development agency. Include practical business advice, clear headings, and actionable tips. Write in British English with a professional but friendly tone.`,
          parameters: { 
            max_new_tokens: 800,
            temperature: 0.7,
            wait_for_model: true
          }
        }),
      }
    );
    
    const result = await response.json();
    
    // Handle potential API errors
    if (result.error) {
      console.error("Hugging Face API error:", result.error);
      throw new Error(`API Error: ${result.error}`);
    }
    
    // Extract the generated content from the response
    let generatedContent = result[0]?.generated_text || result.generated_text || "";
    
    // Clean up the response to extract just the generated content
    // The format is typically: "<s>[INST]prompt[/INST]generated_content</s>"
    if (generatedContent.includes("[/INST]")) {
      generatedContent = generatedContent.split("[/INST]")[1] || generatedContent;
    }
    generatedContent = generatedContent.replace("</s>", "").trim();
    
    // Generate a title from the content if possible, or create a default one
    let title = `The Ultimate Guide to ${topic.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')} in ${new Date().getFullYear()}`;
    
    // Try to extract a title from the first line if it looks like a heading
    const firstLine = generatedContent.split('\n')[0];
    if (firstLine && firstLine.startsWith('# ')) {
      title = firstLine.replace('# ', '');
      // Remove the title from the content to avoid duplication
      generatedContent = generatedContent.replace(firstLine, '').trim();
    }
    
    // Extract or create an excerpt
    let excerpt = `Discover the latest strategies and tips for ${topic} that can transform your business and improve your online presence.`;
    
    // Try to extract an excerpt from the first paragraph
    const firstParagraph = generatedContent
      .split('\n\n')
      .find((p: string) => p && !p.startsWith('#') && p.length > 100);
    
    if (firstParagraph) {
      excerpt = firstParagraph.substring(0, 160) + (firstParagraph.length > 160 ? '...' : '');
    }
    
    const today = format(new Date(), 'yyyy-MM-dd');
    
    // Generate cover image with enhanced system
    const coverImage = await generateCoverImage(title, topic);
    
    return {
      title,
      excerpt,
      content: generatedContent,
      coverImage,
      author: getAuthorForTopic(topic),
      date: today,
      tags: generateTagsForTopic(topic),
    };
  } catch (error) {
    console.error("Error generating content with AI:", error);
    
    // Fallback to template content if the API fails
    return generateFallbackContent(topic);
  }
}

/**
 * Get author based on topic
 */
function getAuthorForTopic(topic: string): string {
  const authors = [
    'Sarah Mitchell',
    'James Thompson',
    'Emily Chen',
    'Alex Rodriguez',
    'Sophie Williams'
  ];
  
  // Use topic to consistently assign the same author to similar topics
  const index = topic.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % authors.length;
  return authors[index];
}

/**
 * Generate relevant tags based on the topic
 */
function generateTagsForTopic(topic: string): string[] {
  const lowerTopic = topic.toLowerCase();
  const baseTags = ['web development', 'digital strategy', 'business growth'];
  
  // Add topic-specific tags
  const topicTags: string[] = [];
  
  if (lowerTopic.includes('startup') || lowerTopic.includes('business')) {
    topicTags.push('startup advice', 'business strategy');
  }
  
  if (lowerTopic.includes('performance') || lowerTopic.includes('optimization') || lowerTopic.includes('optimisation')) {
    topicTags.push('website performance', 'speed optimisation');
  }
  
  if (lowerTopic.includes('accessibility') || lowerTopic.includes('inclusive')) {
    topicTags.push('web accessibility', 'inclusive design');
  }
  
  if (lowerTopic.includes('conversion') || lowerTopic.includes('roi') || lowerTopic.includes('analytics')) {
    topicTags.push('conversion optimisation', 'business metrics');
  }
  
  if (lowerTopic.includes('mobile') || lowerTopic.includes('responsive')) {
    topicTags.push('mobile-first design', 'responsive web');
  }
  
  if (lowerTopic.includes('design') || lowerTopic.includes('ui') || lowerTopic.includes('ux')) {
    topicTags.push('design principles', 'user experience');
  }
  
  if (lowerTopic.includes('next.js') || lowerTopic.includes('react')) {
    topicTags.push('next.js development', 'react applications');
  }
  
  if (lowerTopic.includes('seo') || lowerTopic.includes('search')) {
    topicTags.push('search engine optimisation', 'content strategy');
  }
  
  // Always include the main topic as a tag
  topicTags.push(topic);
  
  // Combine base tags with topic tags and take up to 6
  return [...baseTags, ...topicTags].slice(0, 6);
}

/**
 * Generates fallback content if the AI API call fails
 */
function generateFallbackContent(topic: string): BlogPostData {
  const today = format(new Date(), 'yyyy-MM-dd');
  const capitalizedTopic = topic.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const title = `The Ultimate Guide to ${capitalizedTopic} in ${new Date().getFullYear()}`;
  
  return {
    title,
    excerpt: `Discover practical strategies and insights about ${topic} that can transform your business website and improve your digital presence.`,
    content: `
# The Ultimate Guide to ${capitalizedTopic} in ${new Date().getFullYear()}

## Introduction

In today's competitive digital landscape, ${topic} has become essential for businesses looking to establish a strong online presence. At Devora, we've helped numerous startups and established businesses implement effective strategies in this area, and we're excited to share our insights with you.

## Why ${capitalizedTopic} Matters for Your Business

Understanding the importance of ${topic} can give your business a significant competitive advantage. Here's why it should be a priority:

- Improved user experience and satisfaction
- Better search engine visibility
- Higher conversion rates
- Stronger brand perception
- Increased customer trust and loyalty

## Key Strategies for Success with ${capitalizedTopic}

### 1. Start with a Clear Strategy

Before implementing any ${topic} initiatives, it's vital to develop a comprehensive strategy that aligns with your business goals:

- Define specific, measurable objectives
- Understand your target audience's needs and preferences
- Analyse competitors' approaches
- Create a realistic implementation timeline

### 2. Implement Best Practices

Following industry best practices ensures that your approach to ${topic} is effective and sustainable:

- Focus on mobile optimisation first
- Prioritise accessibility for all users
- Ensure fast loading times
- Create intuitive navigation structures
- Use clear calls-to-action

### 3. Measure, Learn and Optimise

Continuous improvement is the key to long-term success:

- Implement proper analytics tracking
- Monitor key performance indicators
- A/B test different approaches
- Make data-driven refinements

## Common Pitfalls to Avoid

Even experienced businesses can make these errors when dealing with ${topic}:

1. Prioritising aesthetics over functionality
2. Ignoring mobile users' needs
3. Overlooking accessibility requirements
4. Not having clear conversion goals
5. Failing to update content regularly

## How Devora Can Help

With our expertise in creating bespoke, high-performing websites, we specialise in implementing effective ${topic} strategies that drive real business results. Our approach combines:

- User-centred design principles
- Performance-optimised development
- Conversion-focused strategies
- Ongoing support and optimisation

## Conclusion

Mastering ${topic} is an ongoing journey that requires a strategic approach, attention to detail, and a focus on business outcomes. By following the strategies outlined in this guide, you'll be well-positioned to enhance your digital presence and achieve your business goals.

If you'd like to discuss how we can help implement these strategies for your business, please [contact our team](/contact) for a consultation.
    `,
    coverImage: generateCoverImage(title, topic).then(path => path).catch(() => '/blog/default-cover.jpg') as any,
    author: getAuthorForTopic(topic),
    date: today,
    tags: generateTagsForTopic(topic),
  };
}

export async function generateBlogPost(): Promise<string | null> {
  try {
    // 1. Choose a random topic from our list
    const randomTopic = BLOG_TOPICS[Math.floor(Math.random() * BLOG_TOPICS.length)];
    
    // 2. Generate content with AI
    const postData = await generateContentWithAI(randomTopic);
    
    // 3. Create slug from title
    const slug = postData.title
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
    
    // 4. Create markdown content
    const markdownContent = `---
title: "${postData.title}"
excerpt: "${postData.excerpt}"
date: "${postData.date}"
author: "${postData.author}"
coverImage: "${postData.coverImage}"
tags: [${postData.tags.map(tag => `"${tag}"`).join(', ')}]
---

${postData.content}
`;
    
    // 5. Save to file
    const postsDirectory = path.join(process.cwd(), 'content/blog');
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
    }
    
    const filePath = path.join(postsDirectory, `${slug}.md`);
    fs.writeFileSync(filePath, markdownContent);
    
    console.log(`✅ Successfully generated blog post: ${slug}`);
    console.log(`📸 Cover image: ${postData.coverImage}`);
    
    return slug;
  } catch (error) {
    console.error('Error generating blog post:', error);
    return null;
  }
}

export async function scheduleAutomatedBlogPosts() {
  // This function would be called by a cron job or scheduled task
  // For local testing, you could just call it directly
  
  try {
    const slug = await generateBlogPost();
    if (slug) {
      console.log(`Successfully generated new blog post: ${slug}`);
      return slug;
    } else {
      console.error('Failed to generate blog post');
      return null;
    }
  } catch (error) {
    console.error('Error in automated blog post scheduling:', error);
    return null;
  }
} 