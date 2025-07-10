require('dotenv').config({ path: '.env.local' });

async function testPexelsAPI() {
  console.log('🧪 Testing Pexels API...');
  console.log('API Key:', process.env.PEXELS_API_KEY ? 
    `${process.env.PEXELS_API_KEY.substring(0, 10)}...` : 
    'NOT FOUND'
  );
  
  if (!process.env.PEXELS_API_KEY) {
    console.error('❌ No Pexels API key found in environment variables');
    return;
  }
  
  try {
    const response = await fetch(
      'https://api.pexels.com/v1/search?query=technology&per_page=1',
      {
        headers: {
          'Authorization': process.env.PEXELS_API_KEY,
        },
      }
    );
    
    console.log(`📡 Response status: ${response.status}`);
    console.log(`📡 Response headers:`, Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ API request failed: ${response.status} - ${errorText}`);
      return;
    }
    
    const data = await response.json();
    console.log(`✅ API request successful!`);
    console.log(`📊 Found ${data.photos?.length || 0} photos`);
    
    if (data.photos && data.photos.length > 0) {
      console.log(`📸 First photo by: ${data.photos[0].photographer}`);
      console.log(`🔗 Image URL: ${data.photos[0].src.medium}`);
    }
    
  } catch (error) {
    console.error('❌ Error testing Pexels API:', error.message);
  }
}

testPexelsAPI(); 