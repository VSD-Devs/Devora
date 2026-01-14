import { generateBlogPost } from './ai-blog-generator.js';
import fs from 'fs';
import path from 'path';
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

async function run() {
  console.log('🚀 Starting manual blog generation...');

  loadEnv();

  if (!process.env.HUGGING_FACE_API_KEY) {
    console.warn('⚠️ HUGGING_FACE_API_KEY not found in environment. AI generation will fall back to template.');
  }

  try {
    const slug = await generateBlogPost();

    if (slug === 'already-exists') {
      console.log('\n✅ Task completed: No new post needed for today.');
    } else if (slug) {
      console.log(`\n🎉 Success! Blog post generated: ${slug}`);
      console.log(`📄 Path: content/blog/${slug}.md`);
    } else {
      console.error('\n❌ Failed to generate blog post.');
      process.exit(1);
    }
  } catch (error) {
    console.error('\n💥 Fatal error during blog generation:', error);
    process.exit(1);
  }
}

run();
