const https = require('https');
const fs = require('fs');
const path = require('path');

const PEXELS_API_KEY = 'YLRyUj2390x7JcKZpDHwV6xE0EcPrmSrieU4q5rvDbAfVtFQq3mxVk7h';

// Blog post configurations with search terms
const blogPosts = [
  {
    filename: 'the-ultimate-guide-to-website-accessibility-in-2.jpg',
    searchTerm: 'accessibility inclusive web design digital inclusion',
    orientation: 'landscape'
  },
  {
    filename: 'the-ultimate-guide-to-scalable-web-applications-in.jpg',
    searchTerm: 'scalable architecture cloud computing servers technology',
    orientation: 'landscape'
  },
  {
    filename: 'the-ultimate-guide-to-seo-strategies-for-startups-i.jpg',
    searchTerm: 'SEO search engine optimization analytics growth',
    orientation: 'landscape'
  },
  {
    filename: 'the-ultimate-guide-to-modern-javascript-frameworks-i.jpg',
    searchTerm: 'javascript programming coding development framework',
    orientation: 'landscape'
  }
];

function searchPexels(query, orientation = 'landscape') {
  return new Promise((resolve, reject) => {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://api.pexels.com/v1/search?query=${encodedQuery}&orientation=${orientation}&size=large&per_page=1`;

    const options = {
      headers: {
        'Authorization': PEXELS_API_KEY
      }
    };

    https.get(url, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.photos && response.photos.length > 0) {
            resolve(response.photos[0]);
          } else {
            reject(new Error(`No photos found for query: ${query}`));
          }
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, 'public', 'blog', filename);

    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${res.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filePath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });

      fileStream.on('error', (error) => {
        fs.unlink(filePath, () => {}); // Delete the file on error
        reject(error);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting image downloads from Pexels...\n');

  for (const post of blogPosts) {
    try {
      console.log(`🔍 Searching for: "${post.searchTerm}"`);
      const photo = await searchPexels(post.searchTerm, post.orientation);

      console.log(`📥 Downloading image for: ${post.filename}`);
      await downloadImage(photo.src.large, post.filename);

      // Add a small delay to be respectful to the API
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
      console.error(`❌ Error processing ${post.filename}:`, error.message);
    }
  }

  console.log('\n🎉 All image downloads completed!');
}

downloadAllImages().catch(console.error);

