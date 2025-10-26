import { NextResponse } from 'next/server';
import { generateBlogPost } from '@/lib/ai-blog-generator';

export async function GET(request: Request) {
  try {
    // Check if this is a Vercel cron request
    const cronSecret = request.headers.get('authorization');
    const userAgent = request.headers.get('user-agent');
    
    // Vercel cron requests have a specific user-agent and authorization header
    const isVercelCron = userAgent?.includes('vercel-cron') || 
                        cronSecret === `Bearer ${process.env.CRON_SECRET}`;
    
    // For manual API calls, check for proper authentication
    if (!isVercelCron) {
      if (!cronSecret || !cronSecret.startsWith('Bearer ')) {
        return NextResponse.json(
          { error: 'Unauthorized access' },
          { status: 401 }
        );
      }
      
      const token = cronSecret.substring(7); // Remove 'Bearer ' prefix
      
      // In production, use a secure comparison with your actual API key
      const apiKey = process.env.BLOG_GENERATION_API_KEY;
      if (!apiKey || token !== apiKey) {
        return NextResponse.json(
          { error: 'Invalid API key' },
          { status: 401 }
        );
      }
    }
    
    // Generate the blog post
    const slug = await generateBlogPost();
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Failed to generate blog post' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Blog post created successfully',
      slug,
      source: isVercelCron ? 'cron' : 'manual'
    });
    
  } catch (error) {
    console.error('Error generating blog post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
