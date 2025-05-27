const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
require('dotenv').config({ path: '.env.local' });

// Check for missing blog images and generate them
async function fixMissingImages() {
  console.log('🔍 Checking for missing blog images...\n');
  
  const contentDir = path.join(process.cwd(), 'content/blog');
  const publicBlogDir = path.join(process.cwd(), 'public/blog');
  
  // Ensure directories exist
  if (!fs.existsSync(publicBlogDir)) {
    fs.mkdirSync(publicBlogDir, { recursive: true });
    console.log('📁 Created public/blog directory');
  }
  
  if (!fs.existsSync(contentDir)) {
    console.log('❌ No blog content directory found');
    return;
  }
  
  // Get all blog post files
  const blogFiles = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));
  console.log(`📝 Found ${blogFiles.length} blog posts`);
  
  let missingImages = [];
  
  // Check each blog post for missing images
  for (const file of blogFiles) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract coverImage from frontmatter
    const frontmatterMatch = content.match(/---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const coverImageMatch = frontmatter.match(/coverImage:\s*["']?([^"'\n]+)["']?/);
      
      if (coverImageMatch) {
        const imagePath = coverImageMatch[1];
        const imageFileName = imagePath.replace('/blog/', '');
        const fullImagePath = path.join(publicBlogDir, imageFileName);
        
        if (!fs.existsSync(fullImagePath)) {
          console.log(`❌ Missing image: ${imageFileName} for ${file}`);
          missingImages.push({
            blogFile: file,
            imagePath: imagePath,
            imageFileName: imageFileName,
            fullImagePath: fullImagePath
          });
        } else {
          console.log(`✅ Image exists: ${imageFileName}`);
        }
      }
    }
  }
  
  if (missingImages.length === 0) {
    console.log('\n🎉 All blog images are present!');
    return;
  }
  
  console.log(`\n🔧 Generating ${missingImages.length} missing images...\n`);
  
  // Generate missing images
  for (const missing of missingImages) {
    await generateImageForBlog(missing);
  }
  
  console.log('\n✅ All missing images have been generated!');
}

async function generateImageForBlog(missing) {
  console.log(`🎯 Generating image: ${missing.imageFileName}`);
  
  // Extract topic from filename
  const topic = missing.imageFileName
    .replace('.jpg', '')
    .replace(/-/g, ' ')
    .replace(/\d+/g, '')
    .trim();
  
  console.log(`📝 Topic: ${topic}`);
  
  try {
    // Try Pexels API first
    if (process.env.PEXELS_API_KEY) {
      console.log('🏆 Using Pexels API...');
      
      const searchQuery = getSearchQuery(topic);
      console.log(`🔍 Search query: "${searchQuery}"`);
      
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=15&orientation=landscape`,
        {
          headers: {
            'Authorization': process.env.PEXELS_API_KEY,
          },
        }
      );
      
      if (response.ok) {
        const data = await response.json();
        
        if (data.photos && data.photos.length > 0) {
          const randomIndex = Math.floor(Math.random() * Math.min(data.photos.length, 8));
          const selectedImage = data.photos[randomIndex];
          
          console.log(`📸 Using image by ${selectedImage.photographer}`);
          
          const imageResponse = await fetch(selectedImage.src.large);
          if (imageResponse.ok) {
            const imageBuffer = await imageResponse.arrayBuffer();
            
            await sharp(Buffer.from(imageBuffer))
              .resize(1200, 630, { fit: 'cover' })
              .jpeg({ quality: 85 })
              .toFile(missing.fullImagePath);
            
            console.log(`✅ Generated: ${missing.imageFileName}\n`);
            return;
          }
        }
      }
    }
    
    // Fallback to Lorem Picsum
    console.log('🖼️ Falling back to Lorem Picsum...');
    const seed = topic.replace(/\s+/g, '-');
    const loremUrl = `https://picsum.photos/seed/${seed}/1200/630`;
    
    const loremResponse = await fetch(loremUrl);
    if (loremResponse.ok) {
      const imageBuffer = await loremResponse.arrayBuffer();
      
      await sharp(Buffer.from(imageBuffer))
        .jpeg({ quality: 85 })
        .toFile(missing.fullImagePath);
      
      console.log(`✅ Generated: ${missing.imageFileName} (Lorem Picsum)\n`);
      return;
    }
    
    throw new Error('All image sources failed');
    
  } catch (error) {
    console.error(`❌ Failed to generate ${missing.imageFileName}:`, error.message);
  }
}

function getSearchQuery(topic) {
  const topicMappings = {
    'website analytics for business insights': 'data analytics dashboard business',
    'website design for startups': 'startup business team office',
    'next.js benefits for business websites': 'web development programming computer',
    'how to choose a web development agency': 'business meeting handshake',
    'accessible website design principles': 'accessibility technology inclusive',
    'conversion focused landing pages': 'analytics business growth chart',
    'measuring roi from your website': 'analytics data business metrics',
    'headless cms benefits for business': 'content management technology',
    'website performance and business growth': 'speed performance technology',
    'e commerce website best practices': 'ecommerce online shopping',
    'website security for small businesses': 'security technology protection',
    'mobile first web design benefits': 'mobile technology responsive design',
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

// Run the script
fixMissingImages().catch(console.error); 