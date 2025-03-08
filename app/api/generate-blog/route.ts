import { NextResponse } from 'next/server';
import { generateBlogPost } from '@/lib/ai-blog-generator';

export async function GET(request: Request) {
  try {
    // Check for API key in headers for security (implement proper auth in production)
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized access' },
        { status: 401 }
      );
    }
    
    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    // In production, use a secure comparison with your actual API key
    // This is just a simple example - replace with proper auth
    const apiKey = process.env.BLOG_GENERATION_API_KEY;
    if (!apiKey || token !== apiKey) {
      return NextResponse.json(
        { error: 'Invalid API key' },
        { status: 401 }
      );
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
      slug
    });
    
  } catch (error) {
    console.error('Error generating blog post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 