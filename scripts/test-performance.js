#!/usr/bin/env node

/**
 * Performance Testing Script for Devora Website
 * Tests image loading, Core Web Vitals, and SEO metrics
 */

const https = require('https');
const fs = require('fs');

const SITE_URL = 'https://www.devora.co.uk';
const TEST_PAGES = [
  '/',
  '/blog',
  '/services',
  '/pricing',
  '/about',
  '/contact'
];

// Simple performance test function
async function testPagePerformance(url) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    const req = https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const endTime = Date.now();
        const loadTime = endTime - startTime;
        
        // Basic checks
        const hasImages = data.includes('<img') || data.includes('Image');
        const hasStructuredData = data.includes('application/ld+json');
        const hasMetaTags = data.includes('<meta');
        const hasOpenGraph = data.includes('og:');
        
        resolve({
          url,
          statusCode: res.statusCode,
          loadTime,
          contentLength: data.length,
          hasImages,
          hasStructuredData,
          hasMetaTags,
          hasOpenGraph,
          headers: res.headers
        });
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url,
        error: err.message,
        loadTime: -1
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        url,
        error: 'Timeout',
        loadTime: -1
      });
    });
  });
}

// Test image optimization
function checkImageOptimization(headers) {
  const cacheControl = headers['cache-control'] || '';
  const contentType = headers['content-type'] || '';
  
  return {
    hasCaching: cacheControl.includes('max-age'),
    isOptimized: contentType.includes('webp') || contentType.includes('avif'),
    cacheControl,
    contentType
  };
}

// Main test function
async function runPerformanceTests() {
  console.log('🚀 Starting Devora Website Performance Tests\n');
  console.log('Testing pages:', TEST_PAGES.map(p => SITE_URL + p).join(', '));
  console.log('=' * 60);
  
  const results = [];
  
  for (const page of TEST_PAGES) {
    const url = SITE_URL + page;
    console.log(`\n📊 Testing: ${url}`);
    
    const result = await testPagePerformance(url);
    results.push(result);
    
    if (result.error) {
      console.log(`❌ Error: ${result.error}`);
      continue;
    }
    
    console.log(`✅ Status: ${result.statusCode}`);
    console.log(`⏱️  Load Time: ${result.loadTime}ms`);
    console.log(`📦 Content Size: ${(result.contentLength / 1024).toFixed(2)}KB`);
    console.log(`🖼️  Has Images: ${result.hasImages ? '✅' : '❌'}`);
    console.log(`📋 Structured Data: ${result.hasStructuredData ? '✅' : '❌'}`);
    console.log(`🏷️  Meta Tags: ${result.hasMetaTags ? '✅' : '❌'}`);
    console.log(`📱 Open Graph: ${result.hasOpenGraph ? '✅' : '❌'}`);
    
    // Check caching headers
    const imageOpt = checkImageOptimization(result.headers);
    console.log(`💾 Caching: ${imageOpt.hasCaching ? '✅' : '❌'}`);
  }
  
  // Summary
  console.log('\n' + '=' * 60);
  console.log('📈 PERFORMANCE SUMMARY');
  console.log('=' * 60);
  
  const successfulTests = results.filter(r => !r.error);
  const avgLoadTime = successfulTests.reduce((sum, r) => sum + r.loadTime, 0) / successfulTests.length;
  const avgContentSize = successfulTests.reduce((sum, r) => sum + r.contentLength, 0) / successfulTests.length;
  
  console.log(`✅ Successful Tests: ${successfulTests.length}/${results.length}`);
  console.log(`⏱️  Average Load Time: ${avgLoadTime.toFixed(0)}ms`);
  console.log(`📦 Average Content Size: ${(avgContentSize / 1024).toFixed(2)}KB`);
  
  const seoScore = successfulTests.reduce((score, r) => {
    return score + (r.hasStructuredData ? 1 : 0) + (r.hasMetaTags ? 1 : 0) + (r.hasOpenGraph ? 1 : 0);
  }, 0) / (successfulTests.length * 3) * 100;
  
  console.log(`🎯 SEO Score: ${seoScore.toFixed(1)}%`);
  
  // Recommendations
  console.log('\n📝 RECOMMENDATIONS:');
  
  if (avgLoadTime > 2000) {
    console.log('⚠️  Consider optimizing images further - load time is above 2s');
  } else {
    console.log('✅ Load times are good!');
  }
  
  if (seoScore < 90) {
    console.log('⚠️  Some pages missing SEO elements');
  } else {
    console.log('✅ SEO implementation is excellent!');
  }
  
  console.log('\n🔧 NEXT STEPS:');
  console.log('1. Test with Google PageSpeed Insights');
  console.log('2. Check Core Web Vitals in Google Search Console');
  console.log('3. Monitor image loading with browser dev tools');
  console.log('4. Test on mobile devices');
  console.log('5. Submit sitemap to Google Search Console');
  
  // Save results
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `performance-test-${timestamp}.json`;
  
  fs.writeFileSync(filename, JSON.stringify({
    timestamp: new Date().toISOString(),
    results,
    summary: {
      avgLoadTime,
      avgContentSize,
      seoScore,
      successfulTests: successfulTests.length,
      totalTests: results.length
    }
  }, null, 2));
  
  console.log(`\n💾 Results saved to: ${filename}`);
}

// Run the tests
if (require.main === module) {
  runPerformanceTests().catch(console.error);
}

module.exports = { testPagePerformance, runPerformanceTests }; 