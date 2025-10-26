import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables from .env file
function loadEnv() {
  const envPath = path.join(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const lines = envContent.split('\n');
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        const value = valueParts.join('=').trim();
        if (key && value) {
          process.env[key.trim()] = value;
        }
      }
    }
  }
}

loadEnv();

console.log(`PEXELS_API_KEY available: ${!!process.env.PEXELS_API_KEY}`);

/**
 * Generate cover images for all blog posts
 */
async function generateBlogImages() {
  try {
    const blogDir = path.join(__dirname, '../content/blog');
    const publicBlogDir = path.join(__dirname, '../public/blog');

    // Create public/blog directory if it doesn't exist
    if (!fs.existsSync(publicBlogDir)) {
      fs.mkdirSync(publicBlogDir, { recursive: true });
    }

    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
    console.log(`Found ${files.length} blog posts to process...\n`);

    for (const file of files) {
      const filePath = path.join(blogDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(content);

      const title = data.title || '';
      const slug = file.replace('.md', '');

      console.log(`Processing: ${title}`);

      // Extract topic from title for better Pexels search
      const topic = extractTopicFromTitle(title);
      const imageFileName = `${slug.substring(0, 50)}.jpg`;
      const imagePath = path.join(publicBlogDir, imageFileName);

      // Skip if image already exists
      if (fs.existsSync(imagePath)) {
        console.log(`  ✅ Image already exists: ${imageFileName}`);
        continue;
      }

      // Try to download from Pexels first
      let success = await tryPexelsImage(topic, imagePath);

      // Fallback to Lorem Picsum if Pexels fails
      if (!success) {
        console.log(`  ⚠️ Pexels failed, trying Lorem Picsum...`);
        success = await tryLoremPicsumImage(slug, imagePath);
      }

      if (success) {
        console.log(`  ✅ Generated: ${imageFileName}`);
        
        // Update frontmatter with correct image path
        updateFrontmatter(filePath, `/blog/${imageFileName}`);
      } else {
        console.log(`  ❌ Failed to generate image for: ${title}`);
      }
    }

    console.log('\n✅ Blog image generation completed!');
  } catch (error) {
    console.error('Error generating blog images:', error);
    process.exit(1);
  }
}

/**
 * Extract topic and generate specific Pexels search query
 */
function extractTopicFromTitle(title) {
  const lowerTitle = title.toLowerCase();
  
  // Specific mappings for blog titles to relevant search queries
  const titleMappings = {
    'branding consistency': 'brand identity design consistency',
    'content strategy': 'content marketing strategy planning',
    'conversion-focused landing': 'conversion rate optimization landing page',
    'e-commerce': 'ecommerce online shopping business',
    'mobile-first': 'mobile responsive design app',
    'user experience design': 'ux design user interface wireframe',
    'website bounce rates': 'website analytics metrics dashboard',
    'website analytics': 'data analytics dashboard business intelligence',
    'website design startup': 'startup office team tech',
    'website localisation': 'global business international commerce',
    'website performance': 'web development coding laptop computer',
    'website security': 'cybersecurity protection data security lock'
  };

  // Check for exact title matches first
  for (const [key, value] of Object.entries(titleMappings)) {
    if (lowerTitle.includes(key)) {
      return value;
    }
  }

  // Fallback keyword mapping
  const keywords = [
    { term: 'security', query: 'cybersecurity protection technology' },
    { term: 'performance', query: 'web development coding' },
    { term: 'analytics', query: 'data analytics dashboard' },
    { term: 'design', query: 'web design ux ui' },
    { term: 'mobile', query: 'mobile app responsive' },
    { term: 'ecommerce', query: 'online store shopping' },
    { term: 'landing page', query: 'website conversion marketing' },
    { term: 'user experience', query: 'ux design interface' },
    { term: 'content', query: 'content marketing strategy' },
    { term: 'branding', query: 'brand identity design' },
    { term: 'website', query: 'web development technology' },
    { term: 'startup', query: 'startup business team office' }
  ];

  for (const { term, query } of keywords) {
    if (lowerTitle.includes(term)) {
      return query;
    }
  }

  return 'web development technology business';
}

/**
 * Try to get image from Pexels API
 */
async function tryPexelsImage(searchQuery, outputPath) {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    return false;
  }

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=15&orientation=landscape`,
      {
        headers: {
          'Authorization': apiKey,
        },
      }
    );

    if (!response.ok) {
      console.log(`  ⚠️ Pexels API error: ${response.status}`);
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

        console.log(`  ✅ Downloaded from Pexels`);
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error('  Error fetching from Pexels:', error);
    return false;
  }
}

/**
 * Fallback to Lorem Picsum
 */
async function tryLoremPicsumImage(seed, outputPath) {
  try {
    const imageUrl = `https://picsum.photos/seed/${seed}/1200/630`;

    const imageResponse = await fetch(imageUrl);
    if (imageResponse.ok) {
      const imageBuffer = await imageResponse.arrayBuffer();

      await sharp(Buffer.from(imageBuffer))
        .jpeg({ quality: 85 })
        .toFile(outputPath);

      return true;
    }

    return false;
  } catch (error) {
    console.error('  Error fetching from Lorem Picsum:', error);
    return false;
  }
}

/**
 * Update frontmatter in markdown file
 */
function updateFrontmatter(filePath, newImagePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: markdownContent } = matter(content);

    // Update cover image
    data.coverImage = newImagePath;

    // Rebuild frontmatter
    const updatedContent = matter.stringify(markdownContent, data);
    fs.writeFileSync(filePath, updatedContent);
  } catch (error) {
    console.error(`Error updating frontmatter for ${filePath}:`, error);
  }
}

// Run if executed directly
generateBlogImages().catch(console.error);

export { generateBlogImages };
