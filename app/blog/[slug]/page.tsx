import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ArrowRight, User } from 'lucide-react';
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
    .slice(0, 2);
  
  if (!post) {
    notFound();
  }
  
  // Format the date
  const formattedDate = post.date ? format(parseISO(post.date), 'MMMM d, yyyy') : '';
  
  return (
    <div className="min-h-screen">
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

      {/* Hero Section - Ultra Minimalist */}
      <section className="relative min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-light mb-12 group"
              aria-label="Back to blog"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to blog</span>
            </Link>

            {/* Article metadata */}
            <div className="mb-12">
              <div className="flex items-center gap-6 text-gray-400 font-light text-sm mb-8">
                {formattedDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formattedDate}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-12">
                {post.tags.slice(0, 3).map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs text-gray-400 uppercase tracking-wider font-light px-3 py-1 border border-gray-800 bg-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Main headline - Ultra clean typography */}
            <div className="mb-16">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-tighter mb-8 text-white">
                {post.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl font-light leading-relaxed tracking-wide">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative aspect-[16/9] overflow-hidden border border-gray-200">
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
      
      {/* Article Content - Ultra Minimalist */}
      <main className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <article className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
              className="[&>h1]:text-4xl [&>h1]:font-light [&>h1]:text-black [&>h1]:mt-16 [&>h1]:mb-8 [&>h1]:leading-tight [&>h1]:tracking-tight
                         [&>h2]:text-3xl [&>h2]:font-light [&>h2]:text-black [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:leading-tight [&>h2]:tracking-tight
                         [&>h3]:text-2xl [&>h3]:font-light [&>h3]:text-black [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:tracking-tight
                         [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg [&>p]:max-w-none [&>p]:font-light
                         [&>ul]:my-6 [&>ul]:space-y-2 [&>li]:text-gray-700 [&>li]:text-lg [&>li]:leading-relaxed [&>li]:font-light
                         [&>ol]:my-6 [&>ol]:space-y-2
                         [&>blockquote]:border-l-4 [&>blockquote]:border-black [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-gray-700 [&>blockquote]:text-lg [&>blockquote]:font-light
                         [&>pre]:bg-black [&>pre]:text-white [&>pre]:p-6 [&>pre]:my-8 [&>pre]:overflow-x-auto [&>pre]:text-sm [&>pre]:font-mono
                         [&>code]:bg-gray-100 [&>code]:text-black [&>code]:px-2 [&>code]:py-1 [&>code]:text-sm [&>code]:font-mono
                         [&_a]:text-black [&_a]:hover:text-gray-600 [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:font-light
                         [&>img]:my-8 [&>img]:border [&>img]:border-gray-200"
            />
          </article>
        </div>
      </main>
      
      {/* Author Section - Minimal */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-light text-xl mx-auto mb-6">
              {post.author.substring(0, 1)}
            </div>
            <h3 className="text-2xl font-light text-black mb-3 tracking-wide">
              Written by {post.author}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed mb-6 max-w-2xl mx-auto">
              Professional web developer at Devora specialising in building high-performance websites for startups and growing businesses.
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Posts - Minimal */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-6">Continue reading</div>
              <h2 className="text-4xl md:text-5xl font-light text-black leading-tight tracking-tight">
                Related articles
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="space-y-4">
                    <div className="relative aspect-[16/9] overflow-hidden border border-gray-200">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-gray-400 text-xs font-light">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{relatedPost.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{relatedPost.readingTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-light text-black group-hover:text-gray-600 transition-colors leading-tight tracking-tight">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-gray-600 font-light leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Newsletter CTA - Ultra Minimal */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight tracking-tight">
              Stay updated
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              Get the latest insights and strategies delivered to your inbox. Quality content, no spam.
            </p>
          </div>
          
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-gray-700 focus:border-white text-white placeholder-gray-500 py-3 px-0 focus:outline-none font-light text-lg transition-colors"
              required
            />
            <Button variant="ghost" className="w-full text-white hover:text-gray-300 p-0 h-auto font-light text-lg tracking-wide border-b border-white border-opacity-30 rounded-none pb-1 transition-colors">
              Subscribe →
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
} 