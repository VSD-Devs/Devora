import { generateBlogPost } from '../lib/ai-blog-generator';
import * as path from 'path';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Ensure content directory exists
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

// Generate a default cover image if it doesn't exist
const defaultCoverPath = path.join(publicBlogDir, 'default-cover.jpg');
if (!fs.existsSync(defaultCoverPath)) {
  // Create a simple colored rectangle as a placeholder
  // In a real implementation, you might use a real image
  console.log('Default cover image not found. You should create one at public/blog/default-cover.jpg');
}

async function main() {
  console.log('Generating new blog post using Hugging Face API...');
  
  // Verify API key is available
  if (!process.env.HUGGING_FACE_API_KEY) {
    console.error('❌ Hugging Face API key not found in environment variables');
    console.error('Please add HUGGING_FACE_API_KEY to your .env.local file');
    process.exit(1);
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