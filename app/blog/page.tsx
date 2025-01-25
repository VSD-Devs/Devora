import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Sample blog posts data - In a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Features Every Startup Website Needs in 2024",
    excerpt: "Discover the must-have features that will make your startup website stand out and convert visitors into customers.",
    image: "/blog/startup-website.jpg",
    category: "Web Development",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "essential-startup-website-features-2024"
  },
  {
    id: 2,
    title: "Why Next.js is the Future of Web Development",
    excerpt: "Learn how Next.js is revolutionizing web development and why it's the perfect choice for your next project.",
    image: "/blog/nextjs-future.jpg",
    category: "Technology",
    date: "March 10, 2024",
    readTime: "7 min read",
    slug: "nextjs-future-web-development"
  },
  {
    id: 3,
    title: "Maximizing ROI with Strategic Web Design",
    excerpt: "Explore how thoughtful web design can drive business growth and increase your return on investment.",
    image: "/blog/web-design-roi.jpg",
    category: "Business",
    date: "March 5, 2024",
    readTime: "6 min read",
    slug: "maximizing-roi-web-design"
  },
  {
    id: 4,
    title: "The Complete Guide to Website Maintenance",
    excerpt: "Everything you need to know about keeping your website secure, fast, and up-to-date.",
    image: "/blog/website-maintenance.jpg",
    category: "Maintenance",
    date: "March 1, 2024",
    readTime: "8 min read",
    slug: "complete-website-maintenance-guide"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 relative">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-b from-white/50 to-white/30 pointer-events-none" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none" />
      
      {/* Dark overlay for nav */}
      <div className="fixed inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-900/60 via-gray-900/1 to-transparent z-[1]" />

      {/* Content wrapper */}
      <div className="relative z-[2] pt-40">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Insights & Resources
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert insights, industry trends, and practical tips for building successful digital products.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-black hover:bg-gray-900 text-white">
                  Subscribe to Newsletter <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <Link 
                  href={`/blog/${post.slug}`} 
                  key={post.id}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-300/5 rounded-3xl blur-xl group-hover:from-blue-500/10 group-hover:to-blue-300/10 transition-all duration-300" />
                  <article className="relative bg-white/80 p-6 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
                    <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden bg-black rounded-3xl p-12">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
                <div className="relative text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Stay Updated with Industry Insights
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Join our newsletter and get expert insights, industry news, and practical tips delivered straight to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 flex-grow"
                    />
                    <Button className="bg-white hover:bg-gray-100 text-black whitespace-nowrap">
                      Subscribe <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 