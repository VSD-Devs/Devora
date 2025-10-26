import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';
import sharp from 'sharp';

// Blog topics relevant to web development and Devora's expertise
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
 * Generate cover image with multiple sources
 */
async function generateCoverImage(title: string, topic: string): Promise<string> {
  const fileName = `${topic.replace(/\s+/g, '-')}-${Date.now()}.jpg`;
  const outputPath = path.join(process.cwd(), 'public/blog', fileName);
  
  try {
    // Ensure directory exists
    const blogDir = path.join(process.cwd(), 'public/blog');
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    // 1. Try Lorem Picsum (no API key needed, instant)
    const loremPicsumImage = await tryLoremPicsumImage(topic, outputPath);
    if (loremPicsumImage) {
      return `/blog/${fileName}`;
    }
    
    // 2. Try Pexels API if available
    const pexelsImage = await tryPexelsImage(topic, outputPath);
    if (pexelsImage) {
      return `/blog/${fileName}`;
    }
    
    // 3. Fallback to enhanced SVG generation
    await generateEnhancedSVGImage(title, topic, outputPath);
    return `/blog/${fileName}`;
    
  } catch (error) {
    console.error('Error generating cover image:', error);
    return '/blog/default-cover.jpg';
  }
}

/**
 * Try Lorem Picsum for placeholder images (no API key needed)
 */
async function tryLoremPicsumImage(topic: string, outputPath: string): Promise<boolean> {
  try {
    const seed = topic.replace(/\s+/g, '').toLowerCase();
    const imageUrl = `https://picsum.photos/seed/${seed}/1200/630`;
    
    const imageResponse = await fetch(imageUrl);
    if (imageResponse.ok) {
      const imageBuffer = await imageResponse.arrayBuffer();
      
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
 * Try to get an image from Pexels
 */
async function tryPexelsImage(topic: string, outputPath: string): Promise<boolean> {
  if (!process.env.PEXELS_API_KEY) {
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
      return false;
    }
    
    const data = await response.json();
    
    if (data.photos && data.photos.length > 0) {
      const randomIndex = Math.floor(Math.random() * Math.min(data.photos.length, 8));
      const selectedImage = data.photos[randomIndex];
      
      const imageResponse = await fetch(selectedImage.src.large);
      if (imageResponse.ok) {
        const imageBuffer = await imageResponse.arrayBuffer();
        
        await sharp(Buffer.from(imageBuffer))
          .resize(1200, 630, { fit: 'cover' })
          .jpeg({ quality: 85 })
          .toFile(outputPath);
        
        console.log(`✅ Successfully downloaded Pexels image for topic: ${topic}`);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error('Error fetching from Pexels:', error);
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
 * Generate enhanced SVG image
 */
async function generateEnhancedSVGImage(title: string, topic: string, outputPath: string): Promise<void> {
  const width = 1200;
  const height = 630;
  const backgroundColor = getColorForTopic(topic);
  const accentColor = getAccentColorForTopic(topic);
  
  const svgImage = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${backgroundColor}" stop-opacity="1" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.8" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGrad)" />
      <circle cx="100" cy="100" r="60" fill="${accentColor}" opacity="0.1" />
      <circle cx="${width - 100}" cy="${height - 100}" r="80" fill="${accentColor}" opacity="0.15" />
      <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
        ${title.length > 35 ? title.substring(0, 32) + '...' : title}
      </text>
      <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.8)" text-anchor="middle" dominant-baseline="middle">
        ${getSubtitleForTopic(topic)}
      </text>
      <text x="50%" y="85%" font-family="Arial, sans-serif" font-size="20" font-weight="600" fill="${accentColor}" text-anchor="middle" dominant-baseline="middle">
        DEVORA INSIGHTS
      </text>
    </svg>
  `;
  
  await sharp(Buffer.from(svgImage))
    .jpeg({ quality: 90 })
    .toFile(outputPath);
    
  console.log(`✅ Generated SVG image for topic: ${topic}`);
}

/**
 * Get a color based on the topic
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
 * Generate blog content using Hugging Face API
 */
async function generateContentWithAI(topic: string): Promise<BlogPostData> {
  try {
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
    
    if (result.error) {
      console.error("Hugging Face API error:", result.error);
      throw new Error(`API Error: ${result.error}`);
    }
    
    let generatedContent = result[0]?.generated_text || result.generated_text || "";
    
    if (generatedContent.includes("[/INST]")) {
      generatedContent = generatedContent.split("[/INST]")[1] || generatedContent;
    }
    generatedContent = generatedContent.replace("</s>", "").trim();
    
    let title = `The Ultimate Guide to ${topic.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')} in ${new Date().getFullYear()}`;
    
    const firstLine = generatedContent.split('\n')[0];
    if (firstLine && firstLine.startsWith('# ')) {
      title = firstLine.replace('# ', '');
      generatedContent = generatedContent.replace(firstLine, '').trim();
    }
    
    let excerpt = `Discover the latest strategies and tips for ${topic} that can transform your business and improve your online presence.`;
    
    const firstParagraph = generatedContent
      .split('\n\n')
      .find((p: string) => p && !p.startsWith('#') && p.length > 100);
    
    if (firstParagraph) {
      excerpt = firstParagraph.substring(0, 160) + (firstParagraph.length > 160 ? '...' : '');
    }
    
    const today = format(new Date(), 'yyyy-MM-dd');
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
  
  const index = topic.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % authors.length;
  return authors[index];
}

/**
 * Generate relevant tags based on the topic
 */
function generateTagsForTopic(topic: string): string[] {
  const lowerTopic = topic.toLowerCase();
  const baseTags = ['web development', 'digital strategy', 'business growth'];
  
  const topicTags: string[] = [];
  
  if (lowerTopic.includes('startup') || lowerTopic.includes('business')) {
    topicTags.push('startup advice', 'business strategy');
  }
  
  if (lowerTopic.includes('performance') || lowerTopic.includes('optimization') || lowerTopic.includes('optimisation')) {
    topicTags.push('website performance', 'speed optimisation');
  }
  
  topicTags.push(topic);
  
  return [...baseTags, ...topicTags].slice(0, 6);
}

/**
 * Generate fallback content if the AI API call fails
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

In today's competitive digital landscape, ${topic} has become essential for businesses looking to establish a strong online presence.

## Why ${capitalizedTopic} Matters

Understanding the importance of ${topic} can give your business a significant competitive advantage.

## Key Strategies for Success

### Start with a Clear Strategy

Before implementing any ${topic} initiatives, develop a comprehensive strategy that aligns with your business goals.

### Implement Best Practices

Following industry best practices ensures that your approach is effective and sustainable.

## Conclusion

Mastering ${topic} is an ongoing journey that requires a strategic approach and attention to detail.
    `,
    coverImage: '/blog/default-cover.jpg',
    author: getAuthorForTopic(topic),
    date: today,
    tags: generateTagsForTopic(topic),
  };
}

export async function generateBlogPost(): Promise<string | null> {
  try {
    const randomTopic = BLOG_TOPICS[Math.floor(Math.random() * BLOG_TOPICS.length)];
    const postData = await generateContentWithAI(randomTopic);
    
    const slug = postData.title
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
    
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
