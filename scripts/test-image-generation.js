const path = require('path');
const fs = require('fs');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

async function testImageGeneration() {
  console.log('🧪 Testing Enhanced Image Generation System\n');
  
  // Check environment variables
  console.log('📋 Environment Check:');
  console.log(`✅ Hugging Face API: ${process.env.HUGGING_FACE_API_KEY ? 'Configured' : '❌ Missing'}`);
  console.log(`🏆 Pexels API: ${process.env.PEXELS_API_KEY ? 'Configured (INSTANT - Recommended)' : '⚠️  Not configured'}`);
  console.log(`🖼️  Lorem Picsum: Always available (no API key needed)`);
  console.log(`📸 Unsplash API: ${process.env.UNSPLASH_ACCESS_KEY ? 'Configured (Premium quality)' : '⚠️  Not configured (10-day approval wait)'}`);
  console.log(`🎨 Pixabay API: ${process.env.PIXABAY_API_KEY ? 'Configured (Easy approval)' : '⚠️  Not configured'}`);
  console.log('');
  
  // Ensure directories exist
  const publicBlogDir = path.join(process.cwd(), 'public/blog');
  const contentBlogDir = path.join(process.cwd(), 'content/blog');
  
  if (!fs.existsSync(publicBlogDir)) {
    fs.mkdirSync(publicBlogDir, { recursive: true });
    console.log('📁 Created public/blog directory');
  }
  
  if (!fs.existsSync(contentBlogDir)) {
    fs.mkdirSync(contentBlogDir, { recursive: true });
    console.log('📁 Created content/blog directory');
  }
  
  console.log('🚀 Generating test blog post with enhanced images...\n');
  
  try {
    // Import the TypeScript module using dynamic import
    const { generateBlogPost } = await import('../lib/ai-blog-generator.js');
    
    const slug = await generateBlogPost();
    
    if (slug) {
      console.log('\n✅ SUCCESS! Blog post generated successfully');
      console.log(`📝 Slug: ${slug}`);
      console.log(`🔗 View at: http://localhost:3000/blog/${slug}`);
      console.log(`📄 Markdown file: content/blog/${slug}.md`);
      
      // Check if image was created
      const blogDir = path.join(process.cwd(), 'public/blog');
      const files = fs.readdirSync(blogDir);
      const recentImages = files.filter(file => 
        file.endsWith('.jpg') && 
        file !== 'default-cover.jpg'
      ).sort((a, b) => {
        const statA = fs.statSync(path.join(blogDir, a));
        const statB = fs.statSync(path.join(blogDir, b));
        return statB.mtime - statA.mtime;
      });
      
      if (recentImages.length > 0) {
        console.log(`🖼️  Cover image: public/blog/${recentImages[0]}`);
        
        // Check image source
        if (process.env.PEXELS_API_KEY) {
          console.log('🏆 Image source: Likely from Pexels API (instant professional photo)');
        } else if (process.env.UNSPLASH_ACCESS_KEY) {
          console.log('📸 Image source: Likely from Unsplash API (premium quality photo)');
        } else if (process.env.PIXABAY_API_KEY) {
          console.log('🎨 Image source: Likely from Pixabay API (business-friendly photo)');
        } else {
          console.log('🖼️  Image source: Lorem Picsum (beautiful placeholder) or Enhanced SVG (branded fallback)');
        }
      }
      
      console.log('\n🎉 Test completed successfully!');
      
    } else {
      console.error('❌ Failed to generate blog post');
    }
    
  } catch (error) {
    console.error('❌ Error during test:', error.message);
    
    if (error.message.includes('Hugging Face')) {
      console.log('\n💡 Tip: Make sure your HUGGING_FACE_API_KEY is valid');
      console.log('   Get one at: https://huggingface.co/settings/tokens');
    }
    
    if (error.message.includes('Pexels')) {
      console.log('\n💡 Tip: Check your PEXELS_API_KEY');
      console.log('   Get one instantly at: https://www.pexels.com/api/');
    }
    
    if (error.message.includes('Unsplash')) {
      console.log('\n💡 Tip: Check your UNSPLASH_ACCESS_KEY');
      console.log('   Get one at: https://unsplash.com/developers (10-day approval wait)');
      console.log('   Make sure you\'re using the Access Key, not Secret Key');
    }
    
    if (error.message.includes('Pixabay')) {
      console.log('\n💡 Tip: Check your PIXABAY_API_KEY');
      console.log('   Get one at: https://pixabay.com/api/docs/ (easy approval)');
    }
  }
}

// Run the test
testImageGeneration().catch(console.error); 