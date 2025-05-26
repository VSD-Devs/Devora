# Enhanced Blog Image Generation Setup Guide

This guide will help you set up the enhanced automated blog image generation system for your Devora website.

## 🎯 Overview

The system uses a **five-tier approach** to ensure your blog posts always have appropriate, high-quality images:

1. **🏆 Pexels API** - Professional photos with instant approval (recommended)
2. **🖼️ Lorem Picsum** - Beautiful placeholder images (no API key needed)
3. **📸 Unsplash API** - Premium photos (requires 10-day approval)
4. **🎨 Pixabay API** - Large photo library (easy approval)
5. **🎨 Enhanced SVG** - Beautiful branded graphics (reliable fallback)

## 📋 Quick Setup Checklist

- [ ] Set up Hugging Face API key (required for content)
- [ ] **IMMEDIATE**: Set up Pexels API key (instant approval, recommended)
- [ ] **IMMEDIATE**: Enable Lorem Picsum (no API key needed)
- [ ] Optional: Set up Pixabay API key (easy approval)
- [ ] Optional: Set up Unsplash API key (10-day approval wait)
- [ ] Test the system
- [ ] Configure automated scheduling

## 🔑 API Key Setup

### 1. Hugging Face API (Required)

**Purpose**: Generates the blog content using AI

**Steps**:
1. Go to [Hugging Face](https://huggingface.co/)
2. Create a free account
3. Go to [Settings → Access Tokens](https://huggingface.co/settings/tokens)
4. Click "New token"
5. Give it a name like "Devora Blog Generator"
6. Select "Read" permissions
7. Copy the token

**Add to `.env.local`**:
```bash
HUGGING_FACE_API_KEY=hf_your_token_here
```

### 2. 🏆 Pexels API (INSTANT APPROVAL - Recommended)

**Purpose**: High-quality professional photos with immediate access

**Why Pexels?**:
- ✅ **Instant approval** - no waiting period
- ✅ **Free tier**: 200 images per hour
- ✅ **High quality** professional photos
- ✅ **Business-friendly** licensing
- ✅ **Easy setup** - takes 2 minutes

**Steps**:
1. Go to [Pexels API](https://www.pexels.com/api/)
2. Click "Get Started"
3. Create a free account
4. Your API key is **immediately available** on the dashboard
5. Copy your API key

**Add to `.env.local`**:
```bash
PEXELS_API_KEY=your_pexels_api_key_here
```

### 3. 🖼️ Lorem Picsum (NO API KEY NEEDED)

**Purpose**: Beautiful placeholder images for immediate use

**Why Lorem Picsum?**:
- ✅ **No API key required** - works immediately
- ✅ **Consistent images** - same topic gets same image
- ✅ **High quality** curated photos
- ✅ **Zero setup** - already enabled
- ✅ **Reliable fallback** - always works

**Setup**: Already enabled! No configuration needed.

### 4. Pixabay API (Easy Approval)

**Purpose**: Large library of business-friendly photos

**Steps**:
1. Go to [Pixabay API](https://pixabay.com/api/docs/)
2. Create a free account
3. API key is usually approved within hours
4. Copy your API key

**Add to `.env.local`**:
```bash
PIXABAY_API_KEY=your_pixabay_api_key_here
```

### 5. Unsplash API (10-Day Approval Wait)

**Purpose**: Premium professional photography

**Steps**:
1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Create a developer account
3. Create a new application
4. **Wait 10 days for approval**
5. Copy the **Access Key** (not Secret Key)

**Add to `.env.local`**:
```bash
UNSPLASH_ACCESS_KEY=your_access_key_here
```

### 6. Blog Generation API Key (Required)

**Purpose**: Secures your blog generation endpoint

**Steps**:
1. Generate a secure random string (32+ characters)
2. You can use: `openssl rand -base64 32` or an online generator

**Add to `.env.local`**:
```bash
BLOG_GENERATION_API_KEY=your_secure_random_string_here
```

## 🧪 Testing the System

### Test Image Generation

Run the test script to verify everything is working:

```bash
yarn test-images
```

This will:
- Check your API key configuration
- Generate a test blog post
- Show you which image source was used
- Provide troubleshooting tips if needed

### Manual Blog Generation

Generate a blog post manually:

```bash
yarn generate-blog
```

### Check Generated Content

After generation, check:
- **Blog post**: `content/blog/[slug].md`
- **Cover image**: `public/blog/[image-name].jpg`
- **Live preview**: `http://localhost:3000/blog/[slug]`

## 🎨 Image Quality Examples

### With Pexels API (Instant - Recommended)
When you have `PEXELS_API_KEY` configured:

- **"web development trends"** → Professional programming and technology photos
- **"startup website essentials"** → Modern business and team imagery
- **"ui/ux improvements"** → Clean design and interface photos
- **"website security"** → Technology and security imagery

### With Lorem Picsum (No API Key)
Always available as immediate fallback:

- **Consistent images** - same topic always gets the same beautiful photo
- **High-quality** curated photography
- **Professional appearance** - looks intentional, not random
- **Instant availability** - no setup required

### With Pixabay API (Easy Approval)
When you have `PIXABAY_API_KEY` configured:

- **Large selection** of business-focused imagery
- **Commercial-friendly** licensing
- **Technology and business** themed photos

### Enhanced SVG Fallback
When all APIs are unavailable:

- Beautiful gradient backgrounds with topic-specific colours
- Professional typography with the blog title
- Devora branding and styling
- Decorative elements and modern design
- Always consistent and professional

## 🚀 Immediate Setup (2 Minutes)

**For instant results right now:**

1. **Get Pexels API key** (2 minutes):
   ```bash
   # Go to https://www.pexels.com/api/
   # Sign up → Get instant API key
   # Add to .env.local:
   PEXELS_API_KEY=your_key_here
   ```

2. **Test immediately**:
   ```bash
   yarn test-images
   ```

3. **You're done!** You now have professional photos for your blog posts.

**Lorem Picsum is already enabled** as a backup - no setup needed!

## 🔄 Automated Scheduling

### Option 1: Vercel Cron (Recommended)

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

This generates a new blog post every day at 8 AM UTC.

### Option 2: GitHub Actions

The included workflow in `.github/workflows/scheduled-blog-post.yml` runs daily.

Make sure to add your API keys to GitHub Secrets:
- `HUGGING_FACE_API_KEY`
- `PEXELS_API_KEY` (recommended)
- `PIXABAY_API_KEY` (optional)
- `UNSPLASH_ACCESS_KEY` (optional, after approval)
- `BLOG_GENERATION_API_KEY`

### Option 3: Manual API Calls

```bash
curl -X GET "https://your-domain.com/api/generate-blog" \
  -H "Authorization: Bearer YOUR_BLOG_GENERATION_API_KEY"
```

## 🛠️ Customisation

### Topic-Specific Image Mapping

Edit the search query functions in `lib/ai-blog-generator.ts`:

```typescript
// For Pexels
function getPexelsSearchQuery(topic: string): string {
  const topicMappings: Record<string, string> = {
    'web development trends': 'technology computer programming',
    'startup website essentials': 'startup business team',
    // Add your custom mappings
  };
  return topicMappings[topic] || `${topic} business technology`;
}
```

### Adding New Topics

Add topics to the `BLOG_TOPICS` array in `lib/ai-blog-generator.ts`:

```typescript
const BLOG_TOPICS = [
  'web development trends',
  'your new topic here',
  // ... existing topics
];
```

## 🔍 Troubleshooting

### No Images Appearing

**Check**:
- `public/blog/` directory exists
- API keys are correctly configured
- Check browser console for errors

**Solutions**:
```bash
# Create directories if missing
mkdir -p public/blog content/blog

# Test the system
yarn test-images
```

### Pexels API Issues

**Common Problems**:
- Invalid API key
- Rate limit exceeded (200/hour)

**Solutions**:
- Double-check your API key from Pexels dashboard
- Monitor your usage
- Lorem Picsum will automatically take over if Pexels fails

### Lorem Picsum Issues

**Rare Problems**:
- Network connectivity issues

**Solutions**:
- Lorem Picsum is very reliable
- SVG fallback will activate if needed
- Check your internet connection

## 📊 Image Source Priority

The system tries sources in this order:

1. **Pexels** (if API key provided) - Professional photos
2. **Unsplash** (if API key provided and approved) - Premium photos  
3. **Lorem Picsum** (always available) - Beautiful placeholders
4. **Pixabay** (if API key provided) - Large library
5. **Enhanced SVG** (always works) - Branded graphics

## 💡 Recommendations

**For immediate use (today):**
- Set up Pexels API (2 minutes)
- Lorem Picsum is already working

**For best quality (long term):**
- Apply for Unsplash API (wait 10 days)
- Keep Pexels as backup

**For maximum coverage:**
- Set up both Pexels and Pixabay
- Keep Lorem Picsum as reliable fallback

## 📞 Support

If you encounter issues:

1. Run `yarn test-images` for diagnostics
2. Check the console logs for detailed error messages
3. Verify all environment variables are set correctly
4. Ensure all required directories exist

The system is designed to be robust with multiple fallbacks, so you should always get appropriate images for your blog posts! 