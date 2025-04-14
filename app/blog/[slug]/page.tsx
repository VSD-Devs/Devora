import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Bookmark, ArrowRight } from 'lucide-react';
import { getPostWithHtml, getAllPosts } from '@/lib/markdown';
import { format, parseISO } from 'date-fns';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostWithHtml(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | Devora Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostWithHtml(params.slug);
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== params.slug)
    .filter(p => p.tags.some(tag => post?.tags.includes(tag)))
    .slice(0, 2);
  
  if (!post) {
    notFound();
  }
  
  // Format the date
  const formattedDate = post.date ? format(parseISO(post.date), 'MMMM d, yyyy') : '';
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section with Cover Image */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] z-0" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-[3]">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center mb-8 text-sm text-white/60 hover:text-white transition-colors bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="inline-flex items-center rounded-full bg-blue-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/20"
                >
                  <Tag className="mr-1.5 h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">{post.title}</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-white/80 text-sm">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center text-white text-xs mr-2 border border-white/10">
                  {post.author.substring(0, 1)}
                </div>
                <span>{post.author}</span>
              </div>
              
              {formattedDate && (
                <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                  <Calendar className="mr-1.5 h-3.5 w-3.5" />
                  <span>{formattedDate}</span>
                </div>
              )}
              
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                <Clock className="mr-1.5 h-3.5 w-3.5" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cover Image */}
      <section className="relative -mt-12 mb-12 z-10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 transition-colors border border-white/10" aria-label="Share this article">
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 transition-colors border border-white/10" aria-label="Bookmark this article">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="prose prose-lg prose-invert max-w-none bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-10 border border-white/10">
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Author Bio */}
      <section className="py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center text-white text-xl border border-white/10">
                  {post.author.substring(0, 1)}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{post.author}</h4>
                  <p className="text-white/70">
                    Professional web developer at Devora specialising in building high-performance websites for startups and growing businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-12 border-t border-white/10">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block overflow-hidden"
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 h-full flex flex-col">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3 flex items-center">
                          <span className="inline-flex items-center rounded-full bg-blue-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/20">
                            {relatedPost.tags[0]}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
                          {relatedPost.title}
                        </h3>
                        <div className="mt-auto pt-3 flex items-center justify-between text-xs text-white/60">
                          <span>{relatedPost.date}</span>
                          <span>{relatedPost.readingTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.05] z-[1]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-[100px] z-0" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-[100px] z-0" />
        
        <div className="container px-4 md:px-6 mx-auto relative z-[3]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Enjoyed this article?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Subscribe to our newsletter to get notified about new web development insights and strategies.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    required
                  />
                  <Button className="bg-white text-blue-600 hover:bg-white/90 rounded-xl px-6 py-3">
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 