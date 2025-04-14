import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { getAllPosts } from "@/lib/markdown"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Devora - Web Development Insights",
  description: "Explore the latest web development trends, tips, and strategies to help your startup grow online. Expert insights from the Devora team.",
  keywords: ["web development blog", "startup tips", "react development", "next.js tutorials", "SEO strategies", "web design tips"],
}

export default async function BlogPage() {
  const allPosts = getAllPosts();
  
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] z-0" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-[3]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm mb-6">
              <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
              <span className="text-white/70">Web Development Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Digital Insights</span>
              <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent"> & Strategy</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
              Explore our latest articles, guides, and insights to help you build better web experiences for your business.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {[
                { label: "Articles Published", value: `${allPosts.length}+` },
                { label: "Topics Covered", value: "12+" },
                { label: "Expert Guides", value: "20+" },
                { label: "Monthly Readers", value: "500+" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 relative bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]" aria-hidden="true" />
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-lg mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full mb-6"></div>
            <p className="text-white/70">Discover practical insights, tips and strategies for your startup's digital journey</p>
          </div>
          
          {allPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {allPosts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="inline-flex items-center rounded-full bg-blue-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/20">
                          {post.tags[0]}
                        </span>
                        <span className="text-white/70 text-xs bg-slate-800/50 backdrop-blur-sm rounded-full px-3 py-1">{post.readingTime}</span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className="text-white/50 text-sm">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-white/70 text-sm mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center mt-auto pt-4 border-t border-white/10">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center text-white text-xs mr-2">
                          {post.author.substring(0, 1)}
                        </div>
                        <span className="text-white/80 text-sm">{post.author}</span>
                        <div className="ml-auto flex items-center text-blue-400 text-sm group-hover:translate-x-1 transition-transform duration-300">
                          Read more <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">No blog posts found</h3>
              <p className="text-white/70 mb-8">Check back soon for new content!</p>
              <Button className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white">
                Back to Home
              </Button>
            </div>
          )}
        </div>
      </section>

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
                  Stay Updated with Our Newsletter
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Get the latest web development insights and strategies directly in your inbox.
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