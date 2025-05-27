import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Bookmark, ArrowRight, User, Eye, Heart, Twitter, Linkedin, Facebook } from 'lucide-react';
import { getPostWithHtml, getAllPosts } from '@/lib/markdown';
import { format, parseISO } from 'date-fns';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { BlogPostStructuredData, BreadcrumbStructuredData } from '@/components/seo/structured-data';

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
    .slice(0, 3);
  
  if (!post) {
    notFound();
  }
  
  // Format the date
  const formattedDate = post.date ? format(parseISO(post.date), 'MMMM d, yyyy') : '';
  
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <BlogPostStructuredData
        headline={post.title}
        description={post.excerpt}
        image={`https://www.devora.co.uk${post.coverImage}`}
        datePublished={post.date}
        author={{
          name: post.author,
          url: 'https://www.devora.co.uk/about'
        }}
        publisher={{
          name: 'Devora',
          logo: 'https://www.devora.co.uk/DEVORA.png'
        }}
        url={`https://www.devora.co.uk/blog/${post.slug}`}
        keywords={post.tags}
      />
      
      {/* Breadcrumb Structured Data */}
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: 'https://www.devora.co.uk' },
          { name: 'Blog', url: 'https://www.devora.co.uk/blog' },
          { name: post.title, url: `https://www.devora.co.uk/blog/${post.slug}` }
        ]}
      />
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back to Blog</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <button className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all" aria-label="Share this article">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all" aria-label="Bookmark this article">
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Width */}
      <header className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-gradient-to-l from-blue-600/8 to-indigo-500/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i} 
                className="inline-flex items-center rounded-full bg-blue-100/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 border border-blue-200/50"
              >
                <Tag className="mr-2 h-3.5 w-3.5" />
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[1.1] text-slate-900 text-center max-w-4xl mx-auto">
            {post.title}
          </h1>
          
          {/* Excerpt */}
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed text-center">
            {post.excerpt}
          </p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-lg font-semibold shadow-lg">
                {post.author.substring(0, 1)}
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900 text-lg">{post.author}</div>
                <div className="text-sm text-slate-500">Author</div>
              </div>
            </div>
            
            {formattedDate && (
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-medium text-lg">{formattedDate}</span>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium text-lg">{post.readingTime}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              <span className="font-medium text-lg">2.1k views</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Cover Image - Full Width */}
      <section className="py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      
      {/* Article Content - Modern Layout */}
      <main className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Social Sidebar - Left */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32">
                <div className="flex flex-col items-center gap-4">
                  <button className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-red-600 transition-all group">
                    <Heart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </button>
                  <span className="text-sm text-slate-500 font-medium">24</span>
                  
                  <div className="w-px h-8 bg-slate-200"></div>
                  
                  <button className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition-all group">
                    <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <button className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition-all group">
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <button className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition-all group">
                    <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <div className="w-px h-8 bg-slate-200"></div>
                  
                  <button className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all group">
                    <Bookmark className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </aside>
            
            {/* Main Content - Much Wider */}
            <article className="lg:col-span-8">
              <div className="prose prose-xl prose-slate max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
                  className="[&>h1]:text-4xl [&>h1]:font-bold [&>h1]:text-slate-900 [&>h1]:mt-16 [&>h1]:mb-8 [&>h1]:leading-tight
                             [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:leading-tight
                             [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-slate-900 [&>h3]:mt-10 [&>h3]:mb-4
                             [&>p]:text-slate-700 [&>p]:leading-relaxed [&>p]:mb-8 [&>p]:text-xl [&>p]:max-w-none
                             [&>ul]:my-8 [&>ul]:space-y-3 [&>li]:text-slate-700 [&>li]:text-xl [&>li]:leading-relaxed
                             [&>ol]:my-8 [&>ol]:space-y-3
                             [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-8 [&>blockquote]:py-6 [&>blockquote]:my-12 [&>blockquote]:bg-blue-50 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>blockquote]:text-slate-700 [&>blockquote]:text-xl
                             [&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-8 [&>pre]:rounded-2xl [&>pre]:my-12 [&>pre]:overflow-x-auto [&>pre]:text-lg
                             [&>code]:bg-slate-100 [&>code]:text-slate-800 [&>code]:px-3 [&>code]:py-1.5 [&>code]:rounded-lg [&>code]:text-lg [&>code]:font-mono
                             [&_a]:text-blue-600 [&_a]:hover:text-blue-700 [&_a]:underline [&_a]:decoration-blue-300 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:font-medium
                             [&>img]:rounded-2xl [&>img]:shadow-xl [&>img]:my-12 [&>img]:border [&>img]:border-slate-200"
                />
              </div>
              
              {/* Mobile Social Actions */}
              <div className="lg:hidden mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-red-600 transition-all">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm font-medium">24</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition-all">
                    <Share2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all">
                    <Bookmark className="h-4 w-4" />
                    <span className="text-sm font-medium">Save</span>
                  </button>
                </div>
              </div>
            </article>
            
            {/* Right Sidebar - Table of Contents */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-6 text-lg">In this article</h3>
                  <nav className="space-y-3">
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors py-1 border-l-2 border-transparent hover:border-blue-600 pl-3">Introduction</a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors py-1 border-l-2 border-transparent hover:border-blue-600 pl-3">Key Strategies</a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors py-1 border-l-2 border-transparent hover:border-blue-600 pl-3">Implementation</a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors py-1 border-l-2 border-transparent hover:border-blue-600 pl-3">Best Practices</a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors py-1 border-l-2 border-transparent hover:border-blue-600 pl-3">Conclusion</a>
                  </nav>
                </div>
                
                {/* Author Card */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold shadow-lg mx-auto mb-4">
                      {post.author.substring(0, 1)}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{post.author}</h4>
                    <p className="text-slate-600 text-sm mb-4">Web Developer at Devora</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Follow
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      {/* Author Bio - Full Width */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl lg:text-4xl font-bold shadow-xl">
                {post.author.substring(0, 1)}
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Written by {post.author}</h3>
                <p className="text-slate-600 text-xl leading-relaxed mb-6 max-w-3xl">
                  Professional web developer at Devora specialising in building high-performance websites for startups and growing businesses. Passionate about creating digital experiences that drive results and help companies scale.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-6 text-slate-500 mb-6">
                  <span className="font-medium">12 articles published</span>
                  <span>•</span>
                  <span className="font-medium">5.2k followers</span>
                  <span>•</span>
                  <span className="font-medium">Web Development</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    Follow {post.author}
                  </Button>
                  <Button variant="outline" className="border-slate-300">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts - Full Width */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Continue Reading</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Explore more insights and strategies to grow your business</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-200 shadow-lg">
                          {relatedPost.tags[0]}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                        {relatedPost.title}
                      </h3>
                      <p className="text-slate-600 mb-6 line-clamp-3 flex-1 text-lg leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-slate-500">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{relatedPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{relatedPost.readingTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Newsletter CTA - Full Width */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-white/20 shadow-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Enjoyed this article?
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join our newsletter to get the latest web development insights, strategies, and industry trends delivered straight to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-5 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-lg"
                  required
                />
                <Button className="bg-white text-blue-600 hover:bg-white/90 rounded-2xl px-10 py-5 font-bold shadow-xl text-lg">
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              <p className="text-white/70 text-lg">
                Join 2,000+ developers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 