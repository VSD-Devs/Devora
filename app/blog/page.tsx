import { ArrowRight, BookOpen, Calendar, Clock, User, Star, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OptimisedImage } from "@/components/ui/optimised-image"
import { BlogImagePreloader } from "@/components/blog/blog-image-preloader"
import Link from "next/link"
import { getAllPosts } from "@/lib/markdown"
import { getOptimalImageDimensions } from "@/lib/image-preloader"
import type { Metadata } from "next"

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
    <div className="min-h-screen">
      {/* Preload critical blog images */}
      <BlogImagePreloader posts={allPosts} limit={3} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-slate-900 to-black text-white py-12 md:py-24 relative overflow-hidden">
        {/* Creative background elements - Simplified for mobile */}
        <div className="absolute inset-0">
          {/* Animated grid - Smaller on mobile */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] animate-pulse"></div>
          
          {/* Floating geometric shapes - Hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-10 w-6 h-6 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
          <div className="hidden md:block absolute top-40 right-20 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce"></div>
          <div className="hidden md:block absolute bottom-40 left-20 w-8 h-8 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
          
          {/* Gradient orbs - Smaller on mobile */}
          <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-l from-blue-600/10 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced badge - Smaller on mobile */}
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-6 md:mb-8 shadow-lg">
              <BookOpen className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
              <span className="font-medium">Web Development Insights</span>
              <div className="ml-2 md:ml-3 flex space-x-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Digital Insights</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">& Strategy</span>
            </h1>
            
            <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
              Practical insights and strategies to help you build better web experiences for your business.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
              {[
                { label: "Fresh Content", value: "Daily", icon: <BookOpen className="w-4 md:w-5 h-4 md:h-5" /> },
                { label: "Topics Covered", value: "10+", icon: <Star className="w-4 md:w-5 h-4 md:h-5" /> },
                { label: "Practical Guides", value: "Growing", icon: <Award className="w-4 md:w-5 h-4 md:h-5" /> },
                { label: "Quality Focus", value: "100%", icon: <Zap className="w-4 md:w-5 h-4 md:h-5" /> }
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-6 border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 group">
                  <div className="text-blue-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-lg md:text-2xl lg:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Creative background elements - Simplified for mobile */}
        <div className="absolute inset-0">
          {/* Animated grid - Smaller on mobile */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px] animate-pulse"></div>
          
          {/* Floating geometric shapes - Hidden on mobile */}
          <div className="hidden md:block absolute top-10 right-10 w-8 h-8 border border-blue-400/40 rotate-45 animate-spin-slow"></div>
          <div className="hidden md:block absolute bottom-10 left-10 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce"></div>
          <div className="hidden md:block absolute top-1/2 right-1/4 w-4 h-4 border-2 border-cyan-400/50 rounded-full animate-pulse"></div>
          
          {/* Gradient orbs - Smaller on mobile */}
          <div className="absolute top-0 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-l from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-r from-blue-600/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
            {/* Enhanced badge - Smaller on mobile */}
            <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-blue-700 mb-6 md:mb-8 shadow-lg">
              <Star className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-600 animate-pulse" />
              <span className="font-medium">Latest Articles</span>
              <div className="ml-2 md:ml-3 flex space-x-1">
                <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-900">
              Latest{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Insights</span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-700">
              Practical insights, tips and strategies for your startup's digital journey
            </p>
          </div>
          
          {allPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {allPosts.map((post, index) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200/50 hover:border-blue-400/60 group-hover:scale-105 h-full flex flex-col relative">
                    {/* Floating accent */}
                    <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-3 md:w-4 h-3 md:h-4 bg-blue-500/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl md:rounded-t-3xl"></div>
                    
                    <div className="relative h-48 md:h-52 overflow-hidden">
                      <OptimisedImage
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Overlay badges */}
                      <div className="absolute top-3 md:top-4 left-3 md:left-4 right-3 md:right-4 flex items-center justify-between">
                        <span className="inline-flex items-center rounded-full bg-blue-600/90 backdrop-blur-sm px-2 md:px-3 py-1 text-xs font-medium text-white border border-blue-400/30 shadow-lg">
                          {post.tags[0]}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center text-white/90 text-xs bg-black/50 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 border border-white/20">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readingTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-6 flex-1 flex flex-col">
                      <div className="mb-3 md:mb-4">
                        <div className="flex items-center text-slate-500 text-xs md:text-sm mb-2">
                          <Calendar className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                          {post.date}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-blue-700 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm md:text-base text-slate-600 group-hover:text-slate-700 transition-colors line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto pt-3 md:pt-4 border-t border-blue-200/50">
                        <div className="flex items-center">
                          <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-600 text-xs md:text-sm font-semibold mr-2 md:mr-3 border border-blue-400/30">
                            <User className="w-3 md:w-4 h-3 md:h-4" />
                          </div>
                          <span className="text-slate-700 text-xs md:text-sm font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center text-blue-600 text-xs md:text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                          Read more <ArrowRight className="ml-1 h-3 md:h-4 w-3 md:w-4" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 md:py-16 bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-blue-200/50 shadow-xl">
              <div className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 shadow-lg border border-blue-400/30 mb-6 mx-auto">
                <BookOpen className="w-8 md:w-10 h-8 md:h-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">No blog posts found</h3>
              <p className="text-slate-600 mb-6 md:mb-8">Check back soon for new content!</p>
              <Link href="/">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl px-6 md:px-8 py-3 md:py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Back to Home
                  <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden text-white">
        {/* Creative background elements */}
        <div className="absolute inset-0">
          {/* Animated grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
          
          {/* Floating geometric shapes - Hidden on mobile */}
          <div className="hidden md:block absolute top-10 left-10 w-8 h-8 border-2 border-white/20 rounded-full animate-spin-slow"></div>
          <div className="hidden md:block absolute top-20 right-20 w-6 h-6 bg-white/10 rotate-45 animate-bounce"></div>
          <div className="hidden md:block absolute bottom-20 left-1/4 w-10 h-10 border border-white/30 rotate-12 animate-pulse"></div>
          
          {/* Gradient orbs */}
          <div className="absolute -top-40 -left-40 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-white/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-tl from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/20 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                {/* Enhanced badge - Smaller on mobile */}
                <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-6 md:mb-8 shadow-lg">
                  <Star className="w-3 md:w-4 h-3 md:h-4 mr-2 text-cyan-300 animate-pulse" />
                  <span className="font-medium">Stay Updated</span>
                  <div className="ml-2 md:ml-3 flex space-x-1">
                    <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-100"></div>
                    <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  Join Our{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Newsletter</span>
                </h2>
                
                <p className="text-blue-100 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  Get the latest web development insights and strategies directly in your inbox.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 md:py-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
                    required
                  />
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 rounded-xl px-6 md:px-8 py-3 md:py-4 font-semibold shadow-2xl shadow-black/20 transition-all duration-300">
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                
                <p className="text-blue-200 text-xs md:text-sm mt-4 opacity-80">
                  Join our growing community of developers. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 