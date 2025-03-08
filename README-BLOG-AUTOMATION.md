# Automated Blog Post Generation

This document explains how the automated blog post generation system works for the Devora website.

## Overview

The automated blog system uses AI to generate high-quality blog posts about web development topics. It's designed to:

1. Generate content on a schedule (daily by default)
2. Create properly formatted markdown files with frontmatter
3. Include SEO-friendly metadata
4. Support manual generation when needed

## How It Works

The system uses the following components:

- **AI Content Generation**: We use a placeholder implementation that can be connected to various AI APIs
- **Markdown Processing**: Uses gray-matter and remark to process markdown content
- **GitHub Actions**: A scheduled workflow that runs daily to generate new posts
- **Local Script**: A command for manually generating posts during development

## Free AI Options

Instead of using OpenAI (which requires payment), you can use these free alternatives:

1. **Hugging Face Inference API**
   - Free access to thousands of open-source models
   - Example model: Mistral-7B-Instruct
   - [Sign up here](https://huggingface.co/inference-api)

2. **Together AI**
   - Provides free credits for text generation
   - Access to models like Llama 3
   - [Sign up here](https://together.ai/)

3. **Anthropic Claude API**
   - Free tier available when you sign up
   - High quality responses
   - [Sign up here](https://www.anthropic.com/claude)

4. **Ollama**
   - Run open-source models locally
   - No API keys needed, runs on your machine
   - Completely free
   - [Download here](https://ollama.com/)

5. **Google Gemini API**
   - Free tier available
   - Formerly known as Bard
   - [Sign up here](https://ai.google.dev/)

## Setup

### 1. Environment Variables

Create a `.env.local` file with the API key for your chosen AI provider:

```
# Choose one of these options based on which free service you're using
HUGGING_FACE_API_KEY=your_huggingface_key_here
TOGETHER_AI_API_KEY=your_together_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here

# API key for our internal blog generation API 
BLOG_GENERATION_API_KEY=your_secret_key_here
```

### 2. GitHub Secrets

For the automated GitHub Action to work, add the appropriate secrets to your repository:

- `HUGGING_FACE_API_KEY` (or whichever AI service you choose)
- `BLOG_GENERATION_API_KEY`: This is for API authentication
- `GITHUB_TOKEN`: This is provided automatically by GitHub Actions

## Usage

### Manual Blog Post Generation

To generate a blog post manually:

```bash
# Run the script directly
yarn generate-blog
```

### Scheduled Generation

The system is configured to automatically generate a new blog post every day at 8 AM UTC using GitHub Actions. The workflow is defined in `.github/workflows/scheduled-blog-post.yml`.

### Custom Topics

You can modify the list of potential blog topics in `lib/ai-blog-generator.ts`. Simply update the `BLOG_TOPICS` array with your preferred topics.

## Customization

### Blog Post Templates

To modify the structure of generated blog posts, edit the template in `lib/ai-blog-generator.ts` in the `generateContentWithAI` function.

### API Integration

The system is designed to be easily connected to your chosen AI API. Example implementations are provided in comments within the `generateContentWithAI` function in `lib/ai-blog-generator.ts`.

#### Example with Hugging Face (Free)

```typescript
const response = await fetch(
  "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
  {
    headers: { 
      Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
      "Content-Type": "application/json" 
    },
    method: "POST",
    body: JSON.stringify({
      inputs: `Write a comprehensive blog post about ${topic} for a web development agency's blog`,
      parameters: { 
        max_new_tokens: 2000,
        temperature: 0.7
      }
    }),
  }
);
const result = await response.json();
const generatedContent = result[0].generated_text;
```

#### Example with Ollama (Free, Local)

```typescript
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const prompt = `Write a comprehensive blog post about ${topic} for a web development agency's blog`;
const { stdout } = await execPromise(`curl -X POST http://localhost:11434/api/generate -d '{"model": "llama3", "prompt": "${prompt}"}'`);
const generatedContent = JSON.parse(stdout).response;
```

## Folder Structure

- `content/blog/`: Where blog post markdown files are stored
- `public/blog/`: Where blog images are stored
- `app/blog/`: The blog pages in Next.js
- `lib/markdown.ts`: Utilities for working with markdown content
- `lib/ai-blog-generator.ts`: Logic for generating blog posts
- `scripts/generate-blog-post.ts`: Script for manual generation

## Technical Details

- **Markdown Processing**: Uses gray-matter for frontmatter parsing and remark for HTML conversion
- **Date Formatting**: Uses date-fns for date manipulation
- **Image Handling**: Blog posts reference images in `/public/blog/`
- **Syntax Highlighting**: Code blocks are styled with Tailwind Typography

## Troubleshooting

### Missing Images

If blog posts reference images that don't exist, they'll fall back to the default cover image at `/public/blog/default-cover.jpg`.

### API Rate Limits

Be aware that free tiers of AI services often have rate limits. If your automated generation fails, you might need to wait before trying again.

### Running Locally with Ollama

If you're using Ollama, make sure you've downloaded and started the model before running the blog generation script:

```bash
# Install Ollama first from ollama.com
ollama pull llama3
ollama run llama3
```

### GitHub Actions Failures

If the automated workflow fails, check:
- Repository permissions
- Secret configuration
- API key validity
- Rate limiting on the AI service you're using

## Enhancement Ideas

1. Add image generation using Stable Diffusion (free and open source)
2. Implement topic research to find trending topics
3. Add social media posting after blog generation
4. Implement a review workflow before publishing
5. Rotate between different free AI providers to maximize free usage 