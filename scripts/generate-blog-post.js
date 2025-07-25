// CommonJS version of the blog generator
const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');
const sharp = require('sharp');
require('dotenv').config({ path: '.env.local' });

// Blog topics relevant to Devora's expertise and target audience
const BLOG_TOPICS = [
  'website design for startups',
  'next.js benefits for business websites',
  'how to choose a web development agency',
  'accessible website design principles',
  'conversion-focused landing pages',
  'measuring ROI from your website',
  'headless CMS benefits for business',
  'website performance and business growth',
  'e-commerce website best practices',
  'website security for small businesses',
  'mobile-first web design benefits',
  'website analytics for business insights',
  'startup digital presence strategy',
  'bespoke vs template websites',
  'branding consistency in web design',
  'content strategy for business websites',
  'website localisation strategies',
  'website accessibility compliance',
  'reducing website bounce rates',
  'user experience design principles'
];

// Devora team members for author rotation
const DEVORA_TEAM = [
  {
    name: 'Sarah Thompson',
    role: 'Lead Designer',
    expertise: ['ui/ux', 'accessibility', 'branding']
  },
  {
    name: 'James Wilson',
    role: 'Technical Director',
    expertise: ['next.js', 'performance', 'security']
  },
  {
    name: 'Emma Davies',
    role: 'Content Strategist',
    expertise: ['content strategy', 'seo', 'user research']
  },
  {
    name: 'Michael Chen',
    role: 'Frontend Developer',
    expertise: ['react', 'accessibility', 'animation']
  },
  {
    name: 'Olivia Patel',
    role: 'UX Researcher',
    expertise: ['user testing', 'conversion optimisation', 'analytics']
  }
];

/**
 * Get an appropriate author based on the blog topic
 * @param {string} topic - The blog post topic
 * @returns {string} - The author name
 */
function getAuthorForTopic(topic) {
  // Try to match topic keywords with author expertise
  const lowerTopic = topic.toLowerCase();
  
  // Find authors whose expertise matches the topic
  const matchingAuthors = DEVORA_TEAM.filter(author => 
    author.expertise.some(skill => lowerTopic.includes(skill))
  );
  
  if (matchingAuthors.length > 0) {
    // Use a matched author
    const author = matchingAuthors[Math.floor(Math.random() * matchingAuthors.length)];
    return `${author.name}, ${author.role} at Devora`;
  } else {
    // Use a random author if no matches
    const randomAuthor = DEVORA_TEAM[Math.floor(Math.random() * DEVORA_TEAM.length)];
    return `${randomAuthor.name}, ${randomAuthor.role} at Devora`;
  }
}

/**
 * Generate a cover image for the blog post with multiple sources
 * @param {string} title - The blog post title
 * @param {string} topic - The blog post topic
 * @returns {Promise<string>} - The path to the generated image
 */
async function generateCoverImage(title, topic) {
  // Create a file name from the topic
  const fileName = `${topic.replace(/\s+/g, '-')}.jpg`;
  const outputPath = path.join(process.cwd(), 'public/blog', fileName);
  
  try {
    // Try different image sources in order of preference
    
    // 1. First try Pexels API (instant approval, no waiting)
    console.log(`🎯 Attempting to generate image for: ${topic}`);
    console.log(`📁 Output path: ${outputPath}`);
    const pexelsImage = await tryPexelsImage(topic, outputPath);
    if (pexelsImage) {
      console.log(`✅ Successfully downloaded Pexels image for topic: ${topic}`);
      return `/blog/${fileName}`;
    } else {
      console.log(`⚠️ Pexels image generation failed for topic: ${topic}`);
    }
    
    // 2. Try Lorem Picsum (no API key needed, instant)
    const loremPicsumImage = await tryLoremPicsumImage(topic, outputPath);
    if (loremPicsumImage) {
      console.log(`✅ Successfully downloaded Lorem Picsum image for topic: ${topic}`);
      return `/blog/${fileName}`;
    }
    
    // 3. Fallback to enhanced SVG generation
    await generateEnhancedSVGImage(title, topic, outputPath);
    console.log(`✅ Generated enhanced SVG image for topic: ${topic}`);
    return `/blog/${fileName}`;
    
  } catch (error) {
    console.error('Error generating cover image:', error);
    return '/blog/default-cover.jpg';
  }
}

/**
 * Try to get an image from Pexels (instant approval, free)
 */
async function tryPexelsImage(topic, outputPath) {
  console.log(`🚀 tryPexelsImage called with topic: "${topic}", outputPath: "${outputPath}"`);
  
  if (!process.env.PEXELS_API_KEY) {
    console.log('Pexels API key not found, skipping Pexels image generation');
    return false;
  }
  
  console.log('✅ Pexels API key found, proceeding...');
  
  try {
    const searchQuery = getPexelsSearchQuery(topic);
    console.log(`🔍 Searching Pexels for: "${searchQuery}"`);
    
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=15&orientation=landscape`,
      {
        headers: {
          'Authorization': process.env.PEXELS_API_KEY,
        },
      }
    );
    
    if (!response.ok) {
      console.log('Pexels API request failed:', response.status, response.statusText);
      return false;
    }
    
    const data = await response.json();
    console.log(`📊 API response: ${data.photos?.length || 0} photos found`);
    
    if (data.photos && data.photos.length > 0) {
      // Pick a random image from the results
      const randomIndex = Math.floor(Math.random() * Math.min(data.photos.length, 8));
      const selectedImage = data.photos[randomIndex];
      
      console.log(`📸 Found ${data.photos.length} images, using image by ${selectedImage.photographer}`);
      console.log(`🔗 Image URL: ${selectedImage.src.large}`);
      
      // Download the large image
      console.log(`⬇️ Downloading image...`);
      const imageResponse = await fetch(selectedImage.src.large);
      console.log(`📡 Image download status: ${imageResponse.status}`);
      
      if (imageResponse.ok) {
        const imageBuffer = await imageResponse.arrayBuffer();
        console.log(`📦 Image buffer size: ${imageBuffer.byteLength} bytes`);
        
        // Process and save the image
        console.log(`🔧 Processing with Sharp and saving to: ${outputPath}`);
        try {
          await sharp(Buffer.from(imageBuffer))
            .resize(1200, 630, { fit: 'cover' })
            .jpeg({ quality: 85 })
            .toFile(outputPath);
          
          console.log(`✅ Image saved successfully!`);
          return true;
        } catch (sharpError) {
          console.error(`❌ Sharp processing failed:`, sharpError.message);
          return false;
        }
      } else {
        console.log(`❌ Failed to download image: ${imageResponse.status} ${imageResponse.statusText}`);
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
async function tryLoremPicsumImage(topic, outputPath) {
  try {
    // Lorem Picsum provides beautiful placeholder images
    // We'll use a seed based on the topic for consistency
    const seed = topic.replace(/\s+/g, '').toLowerCase();
    const imageUrl = `https://picsum.photos/seed/${seed}/1200/630`;
    
    console.log(`🖼️  Trying Lorem Picsum with seed: ${seed}`);
    
    const imageResponse = await fetch(imageUrl);
    if (imageResponse.ok) {
      const imageBuffer = await imageResponse.arrayBuffer();
      
      // Process and save the image
      await sharp(Buffer.from(imageBuffer))
        .jpeg({ quality: 85 })
        .toFile(outputPath);
      
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error('Error fetching from Lorem Picsum:', error);
    return false;
  }
}

/**
 * Convert blog topic to Pexels search query
 */
function getPexelsSearchQuery(topic) {
  const topicMappings = {
    'website design for startups': 'startup business team office',
    'next.js benefits for business websites': 'web development programming computer',
    'how to choose a web development agency': 'business meeting handshake',
    'accessible website design principles': 'accessibility technology inclusive',
    'conversion-focused landing pages': 'analytics business growth chart',
    'measuring ROI from your website': 'analytics data business metrics',
    'headless CMS benefits for business': 'content management technology',
    'website performance and business growth': 'speed performance technology',
    'e-commerce website best practices': 'ecommerce online shopping',
    'website security for small businesses': 'security technology protection',
    'mobile-first web design benefits': 'mobile technology responsive design',
    'website analytics for business insights': 'data analytics dashboard',
    'startup digital presence strategy': 'startup business strategy',
    'bespoke vs template websites': 'custom design development',
    'branding consistency in web design': 'branding design consistency',
    'content strategy for business websites': 'content strategy marketing',
    'website localisation strategies': 'global business international',
    'website accessibility compliance': 'accessibility compliance technology',
    'reducing website bounce rates': 'user experience analytics',
    'user experience design principles': 'user experience design interface'
  };
  
  return topicMappings[topic] || `${topic} business technology`;
}

/**
 * Generate enhanced SVG image with better design
 */
async function generateEnhancedSVGImage(title, topic, outputPath) {
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
}

/**
 * Get accent color for the topic
 */
function getAccentColorForTopic(topic) {
  const baseColor = getColorForTopic(topic);
  // Create a lighter version of the base color for accent
  const colorMap = {
    '#4A56E2': '#818CF8',
    '#E24A56': '#F87171',
    '#56E24A': '#34D399',
    '#4AE2E2': '#22D3EE',
    '#E24AE2': '#A78BFA',
    '#E2E24A': '#FBBF24'
  };
  
  return colorMap[baseColor] || '#818CF8';
}

/**
 * Get subtitle based on topic
 */
function getSubtitleForTopic(topic) {
  const subtitles = {
    'website design for startups': 'Building Your Digital Foundation',
    'next.js benefits for business websites': 'Framework Excellence',
    'how to choose a web development agency': 'Making the Right Choice',
    'accessible website design principles': 'Inclusive Design Practices',
    'conversion-focused landing pages': 'Maximising Results',
    'measuring ROI from your website': 'Data-Driven Success',
    'headless CMS benefits for business': 'Content Management Evolution',
    'website performance and business growth': 'Speed & Success',
    'e-commerce website best practices': 'Online Sales Excellence',
    'website security for small businesses': 'Protection & Trust',
    'mobile-first web design benefits': 'Mobile Excellence',
    'website analytics for business insights': 'Data-Driven Decisions',
    'startup digital presence strategy': 'Digital Strategy Guide',
    'bespoke vs template websites': 'Custom vs Template',
    'branding consistency in web design': 'Brand Excellence',
    'content strategy for business websites': 'Content That Converts',
    'website localisation strategies': 'Global Reach',
    'website accessibility compliance': 'Inclusive Web Design',
    'reducing website bounce rates': 'User Engagement',
    'user experience design principles': 'UX Excellence'
  };
  
  return subtitles[topic] || 'Professional Insights';
}

/**
 * Get a color based on the topic for the gradient
 * @param {string} topic - The blog post topic
 * @returns {string} - A hex color
 */
function getColorForTopic(topic) {
  // Map topics to colors for consistent branding
  const topicColors = {
    'web development trends': '#4A56E2',
    'startup website essentials': '#E24A56',
    'react performance tips': '#56E24A',
    'next.js best practices': '#4AE2E2',
    'website optimization': '#E24AE2',
    'seo for startups': '#E2E24A',
    'responsive design principles': '#4A56E2',
    'ui/ux improvements': '#E24A56',
    'web accessibility': '#56E24A',
    'mobile-first design': '#4AE2E2',
  };
  
  return topicColors[topic] || '#4A56E2'; // Default to blue if topic not found
}

/**
 * Generate relevant tags based on the topic
 * @param {string} topic - The blog post topic
 * @returns {string[]} - Array of relevant tags
 */
function generateTagsForTopic(topic) {
  const lowerTopic = topic.toLowerCase();
  const baseTags = ['devora insights', 'web design', 'digital strategy'];
  
  // Add topic-specific tags
  const topicTags = [];
  
  if (lowerTopic.includes('startup') || lowerTopic.includes('business')) {
    topicTags.push('startup advice', 'business growth');
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
  
  if (lowerTopic.includes('content') || lowerTopic.includes('strategy')) {
    topicTags.push('content strategy', 'digital marketing');
  }
  
  // Always include the main topic as a tag
  topicTags.push(topic);
  
  // Combine base tags with topic tags and take up to 5
  return [...baseTags, ...topicTags].slice(0, 5);
}

/**
 * Generate blog content using Hugging Face API
 */
async function generateContentWithAI(topic) {
  try {
    console.log(`Generating content about: ${topic}`);
    console.log('Using API key:', process.env.HUGGING_FACE_API_KEY ? `${process.env.HUGGING_FACE_API_KEY.substring(0, 5)}...` : 'No API key found');
    
    // Using Hugging Face API for content generation
    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3",
      {
        headers: { 
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json" 
        },
        method: "POST",
        body: JSON.stringify({
          inputs: `<s>[INST]You are a content writer for Devora, a modern web development agency specialising in creating bespoke websites and digital experiences for ambitious startups and established businesses.

ABOUT DEVORA:
- We focus on crafting elegant, performant, and accessible websites that help businesses grow
- We prioritise user experience, performance, and conversion-focused design
- Our target audience is primarily startup founders, small business owners, and decision-makers at medium-sized companies
- We have particular expertise in Next.js, React, Tailwind CSS, and headless CMS integration

WRITING STYLE GUIDELINES:
- Write in British English
- Use a friendly, conversational, but authoritative tone
- Avoid overly technical jargon without explanation
- Include practical examples and actionable advice
- Avoid using the word "expert" in website copy
- Focus on business benefits rather than technical specifications
- Use inclusive language and emphasise accessibility

Write a comprehensive blog post about ${topic} that aligns with Devora's brand voice. The post should be well-structured with headings, include practical advice that our clients can implement, and position Devora as a thought leader in web development.

The blog post should include:
1. A compelling introduction that hooks the reader and establishes relevance for businesses
2. Several main sections with clear headings (H2) and subheadings (H3) where appropriate
3. Practical tips and actionable advice that businesses can implement
4. A conclusion summarizing key points
5. Use markdown formatting for all headings and emphasis

Ensure the content is accessible to business owners with varying levels of technical knowledge.[/INST]</s>`,
          parameters: { 
            max_new_tokens: 2000,
            temperature: 0.7,
            top_p: 0.95,
            do_sample: true
          }
        }),
      }
    );
    
    const result = await response.json();
    
    console.log("API Response:");
    console.log(JSON.stringify(result, null, 2));
    
    // Handle potential API errors
    if (result.error) {
      console.error("Hugging Face API error:", result.error);
      throw new Error(`API Error: ${result.error}`);
    }
    
    // Extract the generated content from the response
    let generatedContent = result[0]?.generated_text || result.generated_text || "";
    
    console.log("Generated content (first 100 chars):", generatedContent.substring(0, 100));
    
    // Clean up the response to extract just the generated content
    // The format is typically: "<s>[INST]prompt[/INST]generated_content</s>"
    if (generatedContent.includes("[/INST]")) {
      generatedContent = generatedContent.split("[/INST]")[1] || generatedContent;
      console.log("After splitting at [/INST] (first 100 chars):", generatedContent.substring(0, 100));
    }
    
    generatedContent = generatedContent.replace("</s>", "").trim();
    console.log("After removing </s> (first 100 chars):", generatedContent.substring(0, 100));
    
    // Generate a title from the content if possible, or create a default one
    const capitalizedTopic = topic.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      
    let title = `The Ultimate Guide to ${capitalizedTopic} in ${new Date().getFullYear()}`;
    
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
      .find(p => p && !p.startsWith('#') && p.length > 100);
    
    if (firstParagraph) {
      excerpt = firstParagraph.substring(0, 160) + (firstParagraph.length > 160 ? '...' : '');
    }
    
    const today = format(new Date(), 'yyyy-MM-dd');
    
    // For debugging, write the full content to a separate file
    const debugFilePath = path.join(process.cwd(), 'debug-content.txt');
    fs.writeFileSync(debugFilePath, generatedContent);
    console.log(`Full debug content written to ${debugFilePath}`);
    
    // Generate a custom cover image for the blog post
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
 * Generates fallback content if the AI API call fails
 */
function generateFallbackContent(topic) {
  const today = format(new Date(), 'yyyy-MM-dd');
  const capitalizedTopic = topic.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const title = `The Ultimate Guide to ${capitalizedTopic} in ${new Date().getFullYear()}`;
  
  // Create a fallback image too
  generateCoverImage(title, topic).catch(() => {
    console.log('Using default cover image for fallback content');
  });
  
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
    coverImage: `/blog/${topic.replace(/\s+/g, '-')}.jpg`,
    author: getAuthorForTopic(topic),
    date: today,
    tags: generateTagsForTopic(topic),
  };
}

async function generateBlogPost() {
  try {
    // 1. Choose a random topic from our list
    const randomTopic = BLOG_TOPICS[Math.floor(Math.random() * BLOG_TOPICS.length)];
    console.log(`Selected topic: ${randomTopic}`);
    
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
    
    return slug;
  } catch (error) {
    console.error('Error generating blog post:', error);
    return null;
  }
}

// Ensure directories exist
const contentDir = path.join(process.cwd(), 'content');
const blogDir = path.join(contentDir, 'blog');

if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir);
}

if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir);
}

// Create placeholder images directory
const publicBlogDir = path.join(process.cwd(), 'public/blog');
if (!fs.existsSync(publicBlogDir)) {
  fs.mkdirSync(publicBlogDir, { recursive: true });
}

// Main function
async function main() {
  console.log('Generating new blog post using Hugging Face API...');
  
  // Verify API key is available
  if (!process.env.HUGGING_FACE_API_KEY) {
    console.error('❌ Hugging Face API key not found in environment variables');
    console.error('Please add HUGGING_FACE_API_KEY to your .env.local file');
    console.log('Continuing with fallback content generation...');
  } else if (process.env.HUGGING_FACE_API_KEY.length < 20) {
    console.error('❌ Hugging Face API key appears to be invalid (too short)');
    console.error('Please check your HUGGING_FACE_API_KEY in .env.local file');
    console.log('Continuing with fallback content generation...');
  }
  
  try {
    const slug = await generateBlogPost();
    
    if (slug) {
      console.log(`✅ Successfully created blog post: ${slug}`);
      console.log(`View it at: http://localhost:3000/blog/${slug}`);
    } else {
      console.error('❌ Failed to generate blog post');
    }
  } catch (error) {
    console.error('Error generating blog post:', error);
  }
}

// Run the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Unhandled error:', error);
    process.exit(1);
  }); 