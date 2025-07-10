require('dotenv').config({ path: '.env.local' });
const sharp = require('sharp');
const path = require('path');

async function testImageDownload() {
  console.log('🧪 Testing complete image download process...');
  
  const topic = 'reducing website bounce rates';
  const fileName = `${topic.replace(/\s+/g, '-')}.jpg`;
  const outputPath = path.join(process.cwd(), 'public/blog', fileName);
  
  console.log(`📁 Output path: ${outputPath}`);
  
  try {
    // 1. Search Pexels
    console.log('🔍 Searching Pexels for: "user experience analytics"');
    const response = await fetch(
      'https://api.pexels.com/v1/search?query=user%20experience%20analytics&per_page=15&orientation=landscape',
      {
        headers: {
          'Authorization': process.env.PEXELS_API_KEY,
        },
      }
    );
    
    if (!response.ok) {
      console.log('❌ Pexels API request failed:', response.status, response.statusText);
      return;
    }
    
    const data = await response.json();
    console.log(`📊 API response: ${data.photos?.length || 0} photos found`);
    
    if (data.photos && data.photos.length > 0) {
      // Pick the first image for testing
      const selectedImage = data.photos[0];
      
      console.log(`📸 Found ${data.photos.length} images, using image by ${selectedImage.photographer}`);
      console.log(`🔗 Image URL: ${selectedImage.src.large}`);
      
      // 2. Download the image
      console.log(`⬇️ Downloading image...`);
      const imageResponse = await fetch(selectedImage.src.large);
      console.log(`📡 Image download status: ${imageResponse.status}`);
      
      if (imageResponse.ok) {
        const imageBuffer = await imageResponse.arrayBuffer();
        console.log(`📦 Image buffer size: ${imageBuffer.byteLength} bytes`);
        
        // 3. Process and save with Sharp
        console.log(`🔧 Processing with Sharp and saving to: ${outputPath}`);
        try {
          await sharp(Buffer.from(imageBuffer))
            .resize(1200, 630, { fit: 'cover' })
            .jpeg({ quality: 85 })
            .toFile(outputPath);
          
          console.log(`✅ Image saved successfully!`);
          
          // 4. Verify the file was created
          const fs = require('fs');
          if (fs.existsSync(outputPath)) {
            const stats = fs.statSync(outputPath);
            console.log(`📊 File size: ${stats.size} bytes`);
            console.log(`✅ File verification: SUCCESS`);
          } else {
            console.log(`❌ File verification: FAILED - File not found`);
          }
          
        } catch (sharpError) {
          console.error(`❌ Sharp processing failed:`, sharpError);
        }
      } else {
        console.log(`❌ Failed to download image: ${imageResponse.status} ${imageResponse.statusText}`);
      }
    } else {
      console.log('❌ No images found in search results');
    }
    
  } catch (error) {
    console.error('❌ Error during image download test:', error);
  }
}

testImageDownload(); 