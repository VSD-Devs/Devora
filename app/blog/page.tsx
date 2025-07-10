import { ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BlogImagePreloader } from "@/components/blog/blog-image-preloader"
import Link from "next/link"
import { getAllPosts } from "@/lib/markdown"
import { getOptimalImageDimensions } from "@/lib/image-preloader"
import type { Metadata } from "next"
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Blog | Devora - Web Development Insights",
  description: "Explore the latest web development trends, tips, and strategies to help your startup grow online. Expert insights from the Devora team.",
  keywords: ["web development blog", "startup tips", "react development", "next.js tutorials", "SEO strategies", "web design tips"],
}

export default async function BlogPage() {
  const allPosts = getAllPosts();
  
  // Get optimal dimensions for blog thumbnails
  const { width: thumbWidth, height: thumbHeight } = getOptimalImageDimensions('blog-thumbnail');
  
  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Devora Blog',
            description: 'Web development insights and strategies for startups',
            url: 'https://www.devora.co.uk/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Devora',
              url: 'https://www.devora.co.uk'
            },
            blogPost: allPosts.map(post => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              url: `https://www.devora.co.uk/blog/${post.slug}`,
              datePublished: post.date,
              author: {
                '@type': 'Person',
                name: post.author
              }
            }))
          })
        }}
      />
      
      <div className="min-h-screen">
        {/* Preload critical blog images */}
        <BlogImagePreloader posts={allPosts} limit={3} />
        
        {/* Hero Section - Ultra Minimalist */}
        <section className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
          {/* Subtle dot pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          </div>
          
          <div className="container mx-auto px-6 py-20 md:py-32 relative z-20">
            <div className="max-w-5xl mx-auto">
              {/* Subtle status indicator */}
              <div className="inline-flex items-center gap-3 mb-12">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-400 font-light tracking-wide">Our insights</span>
              </div>
              
              {/* Main headline - Ultra clean typography */}
              <div className="mb-16">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tighter mb-8">
                  <span className="block text-white font-extralight">Digital</span>
                  <span className="block text-gray-300 font-extralight italic">Insights</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide">
                  Practical insights and strategies to help you build better web experiences for your business.
                </p>
              </div>
              
              {/* Minimal CTA */}
                             <div className="flex items-center gap-8 mb-20">
                 <Link href="/contact">
                   <Button variant="ghost" className="text-white hover:text-gray-300 p-0 h-auto font-light text-lg tracking-wide border-b border-white border-opacity-30 rounded-none pb-1 transition-colors">
                     Enquire →
                   </Button>
                 </Link>
                <Link href="/contact">
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-light text-lg tracking-wide transition-colors">
                    Get in touch
                  </Button>
                </Link>
              </div>
              
              {/* Minimal stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-gray-800 border-opacity-30">
                {[
                  { value: "Fresh", label: "Content" },
                  { value: "10+", label: "Topics" },
                  { value: "Practical", label: "Guides" },
                  { value: "Quality", label: "Focus" }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-light text-white mb-1 tracking-wide">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid Section - Ultra Minimalist */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-50 to-transparent rounded-full opacity-40 -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-50 to-transparent rounded-full opacity-40 translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-6xl mx-auto">
              {/* Ultra minimal header */}
              <div className="mb-24">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-8">Latest articles</div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                  Recent posts
                </h2>
              </div>
              
              {allPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allPosts.map((post, index) => (
                    <Link 
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block"
                    >
                      <article className="bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 group-hover:shadow-lg h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index < 3}
                          />
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="mb-4">
                            <div className="flex items-center text-gray-400 text-sm mb-3">
                              <Calendar className="w-4 h-4 mr-2" />
                              {post.date}
                              <span className="mx-2">•</span>
                              <Clock className="w-4 h-4 mr-2" />
                              {post.readingTime}
                            </div>
                            <h3 className="text-xl font-light text-black mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-gray-500 font-light leading-relaxed line-clamp-3 flex-1">
                              {post.excerpt}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs mr-3">
                                <User className="w-3 h-3" />
                              </div>
                              <span className="text-gray-600 text-sm font-light">{post.author}</span>
                            </div>
                            <div className="flex items-center text-black text-sm font-light group-hover:translate-x-1 transition-transform">
                              Read more <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 border border-gray-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 mb-6 mx-auto">
                    <BookOpen className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-light text-black mb-4">No blog posts found</h3>
                  <p className="text-gray-500 mb-8 font-light">Check back soon for new content!</p>
                  <Link href="/">
                    <Button variant="ghost" className="text-black hover:text-gray-600 p-0 h-auto font-light text-lg tracking-wide border-b border-black border-opacity-30 rounded-none pb-1 transition-colors">
                      Back to home →
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Section - Ultra Minimalist */}
        <section className="py-32 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[0.9] tracking-tighter mb-8">
                  Stay<br />informed
                </h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
                  Get the latest web development insights and strategies directly in your inbox.
                </p>
              </div>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-500 transition-colors font-light"
                  required
                />
                <Button variant="ghost" className="text-white hover:text-gray-300 border border-gray-700 hover:border-gray-500 px-6 py-3 font-light tracking-wide transition-colors">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              
              <p className="text-center text-gray-500 text-sm font-light">
                Join our growing community. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 