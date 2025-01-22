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

export default function Portfolio() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 relative overflow-hidden" id="portfolio">
      {/* Modern geometric decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-purple-100/20 blur-[100px]" />
      <div className="absolute -right-40 bottom-40 w-80 h-80 rounded-full bg-blue-100/20 blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
            <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Transforming Ideas into
            Digital Success Stories
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how we've helped businesses across different industries achieve their digital goals with innovative solutions and measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative bg-gradient-to-b from-white to-gray-50/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-200/50 backdrop-blur-sm"
            >
              <div className="relative h-[350px] group">
                <Image
                  src={project.image}
                  alt={`${project.title} - Web Development Project by Devora`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-8">
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
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-1.5 bg-gray-900/5 rounded-full text-gray-700 font-medium border border-gray-200/50 hover:border-gray-300/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center text-gray-700">
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