const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
require('dotenv').config({ path: '.env.local' });

async function generateMissingImage() {
  const topic = 'website analytics for business insights';
  const fileName = 'website-analytics-for-business-insights.jpg';
  const outputPath = path.join(process.cwd(), 'public/blog', fileName);
  
  console.log(`🎯 Generating missing image for: ${topic}`);
  console.log(`📁 Output path: ${outputPath}`);
  
  try {
    // Try Pexels API first
    if (process.env.PEXELS_API_KEY) {
      console.log('✅ Pexels API key found, proceeding...');
      
      const searchQuery = 'data analytics dashboard';
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
        throw new Error('Pexels API failed');
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
          await sharp(Buffer.from(imageBuffer))
            .resize(1200, 630, { fit: 'cover' })
            .jpeg({ quality: 85 })
            .toFile(outputPath);
          
          console.log(`✅ Image saved successfully!`);
          console.log(`🔗 Image available at: /blog/${fileName}`);
          return true;
        } else {
          console.log(`❌ Failed to download image: ${imageResponse.status} ${imageResponse.statusText}`);
        }
      }
    }
    
    // Fallback to Lorem Picsum
    console.log('🖼️ Falling back to Lorem Picsum...');
    const seed = topic.replace(/\s+/g, '-');
    const loremUrl = `https://picsum.photos/seed/${seed}/1200/630`;
    
    console.log(`⬇️ Downloading from Lorem Picsum: ${loremUrl}`);
    const loremResponse = await fetch(loremUrl);
    
    if (loremResponse.ok) {
      const imageBuffer = await loremResponse.arrayBuffer();
      
      await sharp(Buffer.from(imageBuffer))
        .jpeg({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`✅ Lorem Picsum image saved successfully!`);
      console.log(`🔗 Image available at: /blog/${fileName}`);
      return true;
    }
    
    throw new Error('All image sources failed');
    
  } catch (error) {
    console.error('❌ Error generating image:', error.message);
    return false;
  }
}

// Run the script
generateMissingImage().then(success => {
  if (success) {
    console.log('\n🎉 Missing image generated successfully!');
    console.log('You can now view the blog post with its proper image.');
  } else {
    console.log('\n❌ Failed to generate missing image.');
  }
}).catch(console.error); 