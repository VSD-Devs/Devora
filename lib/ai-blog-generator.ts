import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';

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
 * This function generates blog content using Hugging Face API.
 * We're using the Mistral-7B-Instruct model which is a powerful open-source
 * language model that provides high-quality text generation.
 */
async function generateContentWithAI(topic: string): Promise<BlogPostData> {
  try {
    // Using Hugging Face API for content generation
    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        headers: { 
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json" 
        },
        method: "POST",
        body: JSON.stringify({
          inputs: `<s>[INST]You are a professional web development expert who writes high-quality, engaging blog posts. 
          
Write a comprehensive blog post about ${topic} for a web development agency's blog. The post should be well-structured with headings, include practical advice, and be written in an engaging, professional style.

The blog post should include:
1. A compelling introduction
2. Several main sections with clear headings (H2) and subheadings (H3) where appropriate
3. Practical tips and actionable advice
4. A conclusion summarizing key points
5. Use markdown formatting for all headings and emphasis

The tone should be knowledgeable but friendly and accessible to business owners and startup founders.[/INST]</s>`,
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
    
    // Handle potential API errors
    if (result.error) {
      console.error("Hugging Face API error:", result.error);
      throw new Error(`API Error: ${result.error}`);
    }
    
    // Extract the generated content from the response
    let generatedContent = result.generated_text || "";
    
    // Clean up the response to extract just the generated content
    // The format is typically: "<s>[INST]prompt[/INST]generated_content</s>"
    generatedContent = generatedContent.split("[/INST]")[1] || generatedContent;
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
      .find(p => p && !p.startsWith('#') && p.length > 100);
    
    if (firstParagraph) {
      excerpt = firstParagraph.substring(0, 160) + (firstParagraph.length > 160 ? '...' : '');
    }
    
    const today = format(new Date(), 'yyyy-MM-dd');
    
    return {
      title,
      excerpt,
      content: generatedContent,
      coverImage: `/blog/${topic.replace(/\s+/g, '-')}.jpg`,
      author: 'Devora Team',
      date: today,
      tags: [topic, 'web development', 'business growth', 'digital strategy'],
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
function generateFallbackContent(topic: string): BlogPostData {
  const today = format(new Date(), 'yyyy-MM-dd');
  const capitalizedTopic = topic.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `The Ultimate Guide to ${capitalizedTopic} in ${new Date().getFullYear()}`,
    excerpt: `Discover the latest strategies and tips for ${topic} that can transform your business and improve your online presence.`,
    content: `
# The Ultimate Guide to ${capitalizedTopic} in ${new Date().getFullYear()}

## Introduction
In today's digital landscape, ${topic} plays a crucial role in the success of any online business. This comprehensive guide will walk you through everything you need to know to excel in this area.

## Why ${capitalizedTopic} Matters
Understanding the importance of ${topic} can give your business a significant competitive advantage. Here's why it matters:

- Improved user experience
- Better search engine rankings
- Higher conversion rates
- Stronger brand presence

## Key Strategies for Success

### 1. Start with Research
Before implementing any ${topic} strategy, thorough research is essential. This includes:

- Competitor analysis
- Market trends evaluation
- User behavior studies

### 2. Implement Best Practices
Following industry best practices ensures that your approach to ${topic} is effective and sustainable:

- Focus on mobile optimization
- Prioritize page loading speed
- Create intuitive navigation
- Use clear calls-to-action

### 3. Measure and Optimize
Continuous improvement is the key to long-term success:

- Set up proper analytics
- Track key performance indicators
- A/B test different approaches
- Iterate based on data-driven insights

## Common Mistakes to Avoid
Even experienced professionals can make these errors when dealing with ${topic}:

1. Overlooking technical fundamentals
2. Ignoring user feedback
3. Focusing too much on trends rather than proven strategies
4. Not adapting to changing market conditions

## Tools and Resources
Here are some tools that can help you master ${topic}:

- Google Analytics for tracking performance
- Hotjar for user behavior analysis
- SEMrush for competitive research
- Figma for design prototyping

## Conclusion
Mastering ${topic} is an ongoing journey that requires dedication, research, and adaptability. By following the strategies outlined in this guide, you'll be well on your way to achieving exceptional results for your business.

Remember, the digital landscape is constantly evolving, so staying updated with the latest trends and best practices in ${topic} is essential for sustained success.
    `,
    coverImage: `/blog/${topic.replace(/\s+/g, '-')}.jpg`,
    author: 'Devora Team',
    date: today,
    tags: [topic, 'web development', 'business growth', 'digital strategy'],
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