# Devora Website

A modern, responsive website built with Next.js 13+ and Tailwind CSS.

## Features

- Modern design with dark/light themes
- Responsive layout for all devices
- Contact forms with email integration
- Project inquiry multi-step form
- Blog system with automatic content generation
- **Enhanced automated image generation** with multiple sources
- SEO optimised
- Accessible design

## Automatic Blog Posting

The website includes an automated blog posting system that can generate content using AI and automatically source appropriate images.

### Setup

1. **Environment Variables**: Add these to your `.env.local` file:
```bash
# Required for blog generation
BLOG_GENERATION_API_KEY=your-secret-api-key-here
HUGGING_FACE_API_KEY=your-hugging-face-api-key

# Recommended: For instant professional photos
PEXELS_API_KEY=your-pexels-api-key

# Optional: For premium photos (10-day approval wait)
UNSPLASH_ACCESS_KEY=your-unsplash-access-key

# Optional: For additional photo sources
PIXABAY_API_KEY=your-pixabay-api-key
```

2. **Get API Keys**:

   **Hugging Face API Key** (Required for content):
   - Go to [Hugging Face](https://huggingface.co/)
   - Create an account and get your API token
   - Add it to your environment variables

   **Pexels API Key** (Recommended - Instant approval):
   - Go to [Pexels API](https://www.pexels.com/api/)
   - Create a free account
   - Get your API key immediately (no waiting)
   - Add it to your environment variables

   **Unsplash API Key** (Optional - Premium quality, 10-day wait):
   - Go to [Unsplash Developers](https://unsplash.com/developers)
   - Create a developer account
   - Create a new application
   - Wait 10 days for approval
   - Copy your "Access Key" (not the Secret Key)

   **Pixabay API Key** (Optional - Easy approval):
   - Go to [Pixabay API](https://pixabay.com/api/docs/)
   - Create a free account
   - Usually approved within hours

### Enhanced Image Generation

The system now uses a **five-tier approach** for generating blog images:

1. **🏆 Pexels API (Instant Approval)**:
   - Professional photos with immediate access
   - 200 images per hour free tier
   - No waiting period - get API key instantly
   - High-quality business and technology imagery

2. **🖼️ Lorem Picsum (No API Key)**:
   - Beautiful placeholder images
   - No setup required - works immediately
   - Consistent images for same topics
   - Reliable fallback option

3. **📸 Unsplash API (Premium Quality)**:
   - Highest quality professional photos
   - Requires 10-day approval wait
   - 5,000 requests per hour when approved
   - Premium photography collection

4. **🎨 Pixabay API (Easy Approval)**:
   - Large library of business-friendly photos
   - Usually approved within hours
   - Commercial-friendly licensing
   - Good variety of technology images

5. **🎨 Enhanced SVG Generation (Always Works)**:
   - Beautiful gradient-based designs
   - Topic-specific colour schemes and subtitles
   - Professional branding with Devora styling
   - Guaranteed fallback that always works

### Usage

**Generate a blog post via API:**
```bash
curl -X GET "http://localhost:3000/api/generate-blog" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Or in production:**
```bash
curl -X GET "https://your-domain.com/api/generate-blog" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Response:**
```json
{
  "success": true,
  "message": "Blog post created successfully",
  "slug": "the-ultimate-guide-to-web-development-trends-in-2024"
}
```

### How it Works

1. **Random Topic Selection**: Picks from 20+ web development topics
2. **AI Content Generation**: Uses Hugging Face's Mistral-7B model to create quality content
3. **Smart Image Selection**: 
   - First tries Unsplash for real photos matching the topic
   - Falls back to enhanced SVG generation if needed
   - Automatically optimises images to 1200x630px for social sharing
4. **Markdown Creation**: Formats the content with frontmatter
5. **File Storage**: Saves to `content/blog/` directory
6. **Automatic Display**: New posts appear on the blog page immediately

### Image Quality Examples

**With Pexels API** (instant approval - recommended):
- "web development trends" → Professional programming and technology photos
- "startup website essentials" → Modern business and team imagery
- "ui/ux improvements" → Clean design and interface photos

**With Lorem Picsum** (no API key needed):
- Consistent, beautiful placeholder images for each topic
- High-quality curated photography
- Professional appearance - looks intentional
- Always available as immediate fallback

**With Unsplash API** (premium quality after 10-day approval):
- Highest quality professional photography
- "web development trends" → Premium developer and tech imagery
- "startup essentials" → Premium business and office photos

**Enhanced SVG Fallback** (always works):
- Beautiful gradient backgrounds with topic-specific colours
- Professional typography and branding
- Decorative elements and modern design
- Consistent with Devora brand identity

### Topics Covered

The system can generate content about:
- Web development trends
- Startup website essentials  
- React performance tips
- Next.js best practices
- Website optimisation
- SEO for startups
- Responsive design principles
- UI/UX improvements
- Web accessibility
- Website security
- Conversion rate optimisation
- And many more...

### Scheduling (Automated)

**Vercel Cron Functions (Recommended):**

Add to your `vercel.json`:
```json
{
  "crons": [
    {
      "path": "/api/generate-blog",
      "schedule": "0 8 * * *"
    }
  ]
}
```

**GitHub Actions (Alternative):**

The included workflow in `.github/workflows/scheduled-blog-post.yml` runs daily at 8 AM UTC.

### Manual Generation

```bash
# Run the script directly
yarn generate-blog

# Or use the TypeScript version
npx tsx scripts/generate-blog-post.ts
```

### Image Optimisation

All generated images are automatically:
- Resized to 1200x630px (optimal for social sharing)
- Compressed to 85% quality for fast loading
- Saved in JPEG format
- Given unique filenames to prevent conflicts

## Resolving Caching & Dependency Issues

If you encounter persistent build errors, especially related to packages like `sharp` on an Apple Silicon (M1/M2/M3) Mac, it is likely due to a caching issue with `npm`.

### The Quick Fix: `reinstall`

A custom script has been added to `package.json` to automate the cleaning process. If you are facing stubborn build errors, run the following command:

```bash
npm run reinstall
```

This command will:
1.  Forcefully clear the `npm` cache.
2.  Delete the `node_modules` directory.
3.  Remove the `package-lock.json` file.
4.  Perform a fresh, clean installation of all dependencies.

### Proactive Prevention: The `.npmrc` File

To prevent issues with `sharp` specifically, a `.npmrc` file has been added to the project root. This file tells `npm` to always install the `darwin-arm64` version of `sharp`, which is the correct one for Apple Silicon Macs. You do not need to do anything to use this file; its presence is enough.

## Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Generate a test blog post
yarn generate-blog
```

## Deployment

The site is optimised for deployment on Vercel with automatic blog generation via cron functions.

## License

MIT License - see LICENSE file for details. 