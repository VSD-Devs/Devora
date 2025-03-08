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
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] z-0" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] z-0" />
        
        <div className="container px-4 md:px-6 mx-auto relative z-[3]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm mb-6">
              <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
              <span className="text-white/70">Web Development Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Insights & Resources for Modern Web Development
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8">
              Explore our latest articles, guides, and insights to help you build better web experiences for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="container px-4 md:px-6 mx-auto">
          {allPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 h-full flex flex-col">
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                          {post.tags[0]}
                        </span>
                        <span className="text-white/50 text-xs">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                        {post.title}
                      </h2>
                      <p className="text-white/70 text-sm mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs mr-2">
                            {post.author.substring(0, 1)}
                          </div>
                          <span className="text-white/70 text-sm">{post.author}</span>
                        </div>
                        <span className="text-white/50 text-xs">{post.readingTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-white mb-4">No blog posts found</h3>
              <p className="text-white/70 mb-8">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.05] z-[1]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 rounded-full blur-[120px] -translate-x-1/2 z-0" />
        
        <div className="container px-4 md:px-6 mx-auto relative z-[3]">
          <div className="max-w-3xl mx-auto text-center">
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
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <Button className="bg-white text-blue-600 hover:bg-white/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 