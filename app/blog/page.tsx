import { ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { getAllPosts } from "@/lib/markdown"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog | Devora - Web Development Insights from Sheffield",
  description: "Explore the latest web development trends, tips, and strategies from our Sheffield-based team. Expert insights to help your startup grow online.",
  keywords: ["web development blog", "startup tips", "Sheffield web design tips", "Yorkshire startup advice", "react development", "next.js tutorials", "SEO strategies Sheffield", "web design tips Yorkshire"],
}

export default async function BlogPage() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 px-4 md:px-6 pt-32 md:pt-48 bg-gradient-to-br from-background via-background to-secondary/5">
          <div className="container mx-auto">
            <div className="mb-8 md:mb-16">
              <div className="inline-block bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-3 md:mb-6">
                <span aria-hidden="true">★</span> INSIGHTS
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance max-w-2xl mb-4">
                <span className="font-serif italic font-normal">Blog</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl">
                Practical knowledge and proven strategies to help you build better web experiences and grow your business online.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="mb-12 md:mb-16">
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-light mb-8 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Latest articles
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[0.9] tracking-tighter">
                  Recent posts
                </h2>
              </div>

              {allPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allPosts.map((post, index) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block h-full"
                    >
                      <article className="bg-card border border-border hover:border-foreground/20 transition-all duration-300 group-hover:shadow-lg h-full flex flex-col rounded-2xl overflow-hidden hover:bg-card/80">
                        {/* Image Container */}
                        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-secondary/20 to-secondary/5">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index < 3}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          {/* Meta Info */}
                          <div className="mb-4">
                            <div className="flex items-center text-muted-foreground text-xs mb-3 font-light gap-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{post.readingTime}</span>
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-light text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-muted-foreground font-light leading-relaxed line-clamp-3 flex-1 text-sm">
                              {post.excerpt}
                            </p>
                          </div>

                          {/* Footer */}
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-light">
                                {post.author.charAt(0)}
                              </div>
                              <span className="text-muted-foreground text-xs font-light">{post.author}</span>
                            </div>
                            <div className="flex items-center text-foreground text-xs font-light group-hover:translate-x-1 transition-transform">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gradient-to-br from-secondary/5 to-secondary/10 border border-border rounded-2xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 mb-6 rounded-full">
                    <BookOpen className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground mb-4">No blog posts found</h3>
                  <p className="text-muted-foreground mb-8 font-light">Check back soon for new content!</p>
                  <Link href="/">
                    <Button variant="ghost" className="text-foreground hover:text-muted-foreground p-0 h-auto font-light text-lg tracking-wide border-b border-foreground/20 rounded-none pb-1 transition-colors">
                      Back to home →
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-primary-foreground mb-6 leading-tight tracking-tight">
              Interested? Let's have a discussion.
            </h2>
            <p className="text-lg text-primary-foreground/90 font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your startup grow with expert web design and development solutions.
            </p>

            <Link href="/#contact">
              <Button size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-light gap-2">
                Get in touch <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
