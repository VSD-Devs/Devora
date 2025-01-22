"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui/button"

const projects = [
  {
    title: "EnviroTech Emergency Plumbing",
    description: "24/7 Emergency Plumbing Service Platform with real-time booking and instant quote functionality",
    image: "/Enviro.png",
    tags: ["Web Development", "UI/UX", "Branding"],
    link: "https://envirotech-plumbing.co.uk",
    highlights: ["Emergency Booking", "Service Areas", "Online Quotes"]
  },
  {
    title: "Sandalwood Memorials",
    description: "Premium memorial & headstone design service featuring an elegant product showcase and seamless quote system",
    image: "/Sandalwood-Memorials.png",
    tags: ["E-commerce", "Web Design", "SEO"],
    link: "https://sandalwoodmemorials.co.uk",
    highlights: ["Product Catalog", "Quote System", "Mobile-First Design"]
  },
  {
    title: "Sandalwood Memories",
    description: "Innovative digital memorial platform helping families preserve and share precious memories of loved ones",
    image: "/Sandalwood-Memories.png",
    tags: ["Web App", "Digital Platform", "Family Sharing"],
    link: "https://sandalwoodmemories.com",
    highlights: ["Memory Sharing", "Photo Galleries", "Family Collaboration"]
  },
  {
    title: "Slush Dating",
    description: "Revolutionary video dating platform connecting singles through meaningful video conversations",
    image: "/Slush.png",
    tags: ["Web App", "Mobile App", "UX Design"],
    link: "https://slushdating.com",
    highlights: ["Video Chat", "AI Matching", "User Profiles"]
  }
]

const stats = [
  { value: "156%", label: "Average Growth", description: "in client revenue after launch" },
  { value: "3 Weeks", label: "Delivery Time", description: "from concept to launch" },
  { value: "98%", label: "Client Satisfaction", description: "across all projects" },
  { value: "24/7", label: "Support", description: "dedicated assistance" }
]

export default function Portfolio() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" id="portfolio">
      {/* Modern geometric decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-purple-500/20 blur-[100px] animate-pulse" />
      <div className="absolute -right-40 bottom-40 w-80 h-80 rounded-full bg-blue-500/20 blur-[100px] animate-pulse" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Our Success Stories</span>
          </div>
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400">
            Transforming Ideas into
            Digital Success Stories
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            We turn startup visions into powerful digital experiences. Explore how we've helped businesses achieve remarkable growth through innovative web solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-white/80 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative bg-gradient-to-b from-white/10 to-white/5 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/10 backdrop-blur-sm hover:border-white/20"
            >
              <div className="relative h-[350px] group">
                <Image
                  src={project.image}
                  alt={`${project.title} - Web Development Project by Devora`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-8">
                  <Button
                    variant="secondary"
                    className="bg-white/95 hover:bg-white text-gray-900 font-medium shadow-lg backdrop-blur-sm"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Live Site →
                  </Button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-1.5 bg-white/5 rounded-full text-gray-300 font-medium border border-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}