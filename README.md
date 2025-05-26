# Devora Website

A modern, responsive website built with Next.js 13+ and Tailwind CSS.

## Features

- Modern design with dark/light themes
- Responsive layout for all devices
- Contact forms with email integration
- Project inquiry multi-step form
- Blog system with automatic content generation
- SEO optimised
- Accessible design

## Automatic Blog Posting

The website includes an automated blog posting system that can generate content using AI.

### Setup

1. **Environment Variables**: Add these to your `.env.local` file:
```bash
BLOG_GENERATION_API_KEY=your-secret-api-key-here
HUGGING_FACE_API_KEY=your-hugging-face-api-key
```

2. **Get a Hugging Face API Key**:
   - Go to [Hugging Face](https://huggingface.co/)
   - Create an account and get your API token
   - Add it to your environment variables

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
3. **Markdown Creation**: Formats the content with frontmatter
4. **File Storage**: Saves to `content/blog/` directory
5. **Automatic Display**: New posts appear on the blog page immediately

### Topics Covered

The system can generate content about:
- Web development trends
- Startup website essentials  
- React performance tips
- Next.js best practices
- Website optimisation
- SEO for startups
- And many more...

### Scheduling (Automated)

**Vercel Cron Functions (Recommended):**

The project includes a `vercel.json` file that automatically sets up cron functions:

```json
{
  "crons": [
    {
      "path": "/api/generate-blog",
      "schedule": "0 9 * * 1"
    }
  ]
}
```

This will automatically generate a new blog post **every Monday at 9:00 AM UTC**.

**Admin Dashboard:**

Visit `/admin` on your deployed site to:
- Manually generate blog posts
- View the automated schedule status
- Check environment variable setup

**Alternative Scheduling Options:**

You can also set up automated posting using:
- **GitHub Actions** (for automated deployment)
- **Traditional Cron Jobs** (Linux/Mac servers)
- **Any task scheduler**

Example traditional cron job (daily at 9 AM):
```bash
0 9 * * * curl -X GET "https://your-domain.com/api/generate-blog" -H "Authorization: Bearer YOUR_API_KEY"
```

**Customising the Schedule:**

To change when posts are generated, edit the `schedule` in `vercel.json`:

- `0 9 * * 1` - Every Monday at 9 AM UTC
- `0 9 * * *` - Every day at 9 AM UTC  
- `0 9 * * 0,3` - Every Sunday and Wednesday at 9 AM UTC
- `0 */6 * * *` - Every 6 hours

After changing the schedule, redeploy to Vercel for changes to take effect.

## Development

```bash
npm install
npm run dev
```

## Deployment

The site is optimised for deployment on Vercel, Netlify, or any Node.js hosting platform.

## Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Email**: Nodemailer
- **Content**: Markdown with frontmatter
- **AI**: Hugging Face API (Mistral-7B) 