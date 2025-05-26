"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink, ArrowRight, Eye, Calendar, Users } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "envirotech-plumbing",
    title: "EnviroTech Emergency Plumbing",
    description: "24/7 Emergency Plumbing Service Platform with real-time booking and instant quote functionality",
    image: "/Enviro.png",
    blurImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4xOzc6Njs3OzFEQUFEVU9QVVtbW11ubm5ubm5ubm7/2wBDARUXFx4aHh4rISErXkI2Ql5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
    tags: ["Web Development", "UI/UX", "Branding"],
    link: "https://envirotech-plumbing.co.uk",
    highlights: ["Emergency Booking", "Service Areas", "Online Quotes"],
    year: "2024",
    duration: "3 months",
    category: "Service Platform"
  },
  {
    id: "sandalwood-memorials",
    title: "Sandalwood Memorials",
    description: "Premium memorial & headstone design service featuring an elegant product showcase and seamless quote system",
    image: "/Sandalwood-Memorials.png",
    blurImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4xOzc6Njs3OzFEQUFEVU9QVVtbW11ubm5ubm5ubm7/2wBDARUXFx4aHh4rISErXkI2Ql5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
    tags: ["E-commerce", "Web Design", "SEO"],
    link: "https://sandalwoodmemorials.co.uk",
    highlights: ["Product Catalogue", "Quote System", "Mobile-First Design"],
    year: "2024",
    duration: "4 months",
    category: "E-commerce"
  },
  {
    id: "sandalwood-memories",
    title: "Sandalwood Memories",
    description: "Innovative digital memorial platform helping families preserve and share precious memories of loved ones",
    image: "/Sandalwood-Memories.png",
    blurImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4xOzc6Njs3OzFEQUFEVU9QVVtbW11ubm5ubm5ubm7/2wBDARUXFx4aHh4rISErXkI2Ql5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
    tags: ["Web App", "Digital Platform", "Family Sharing"],
    link: "https://sandalwoodmemories.com",
    highlights: ["Memory Sharing", "Photo Galleries", "Family Collaboration"],
    year: "2023",
    duration: "5 months",
    category: "Digital Platform"
  },
  {
    id: "slush-dating",
    title: "Slush Dating",
    description: "Revolutionary video dating platform connecting singles through meaningful video conversations",
    image: "/Slush.png",
    blurImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4xOzc6Njs3OzFEQUFEVU9QVVtbW11ubm5ubm5ubm7/2wBDARUXFx4aHh4rISErXkI2Ql5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
    tags: ["Web App", "Mobile App", "UX Design"],
    link: "https://www.slushdating.com",
    highlights: ["Video Chat", "AI Matching", "User Profiles"],
    year: "2023",
    duration: "6 months",
    category: "Social Platform"
  },
  {
    id: "sky-limit-travels",
    title: "Sky Limit Travels",
    description: "Comprehensive travel booking platform with flight search, popular destinations, and personalised recommendations",
    image: "/skylimittravels-web.png",
    blurImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4xOzc6Njs3OzFEQUFEVU9QVVtbW11ubm5ubm5ubm7/2wBDARUXFx4aHh4rISErXkI2Ql5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
    tags: ["Travel Platform", "Flight Search", "User Experience"],
    link: "https://skylimittravels.com",
    highlights: ["Interactive Flight Search", "Popular Destinations", "Traveller Stories"],
    year: "2023",
    duration: "4 months",
    category: "Travel Platform"
  }
]

export default function Portfolio() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (projectTitle: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [projectTitle]: !prev[projectTitle]
    }));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden" id="portfolio" aria-labelledby="portfolio-heading">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" aria-hidden="true" />
      <div className="absolute -left-40 top-40 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] animate-pulse" aria-hidden="true" />
      <div className="absolute -right-40 bottom-40 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse delay-1000" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-[150px]" aria-hidden="true" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white/90 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" aria-hidden="true"></span>
            </span>
            <span className="font-medium text-sm sm:text-base">Featured Projects</span>
          </div>
          <h2 id="portfolio-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 leading-[1.1] tracking-tight">
            Transforming Ideas into 
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Success Stories
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We turn startup visions into powerful digital experiences. Explore how we've helped businesses achieve remarkable growth through innovative web solutions.
          </p>
        </div>

        {/* Enhanced grid layout with better spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-900/90 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/70 hover:shadow-2xl hover:shadow-blue-900/10 hover:transform hover:scale-[1.02]"
            >
              {/* Enhanced image container with better aspect ratio */}
              <div className="relative h-[280px] sm:h-[320px] md:h-[360px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} - Web Development Project by Devora`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  quality={90}
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL={project.blurImage}
                />
                
                {/* Enhanced overlay with better gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/30 to-transparent" />
                
                {/* Project metadata overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/20">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-200 backdrop-blur-sm border border-blue-400/30">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Link href={`/work/${project.id}`}>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View Case Study
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Bottom action buttons */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <Button
                    variant="secondary"
                    className="flex-1 bg-white/90 hover:bg-white text-gray-900 font-medium shadow-lg text-sm py-2 h-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100"
                    onClick={() => window.open(project.link, '_blank')}
                    aria-label={`Visit live site for ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                    Visit Live Site
                  </Button>
                  <Link href={`/work/${project.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full bg-gray-900/80 hover:bg-gray-800/90 text-white border-gray-600 hover:border-gray-500 font-medium shadow-lg text-sm py-2 h-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200"
                    >
                      <Eye className="w-4 h-4 mr-2" aria-hidden="true" />
                      Case Study
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Enhanced content section */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Enhanced tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-gray-300 font-medium border border-gray-800/50 hover:border-gray-700/70 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enhanced highlights */}
                <div className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                      <span className="font-medium text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Project stats */}
                <div className="mt-6 pt-6 border-t border-gray-800/50 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Team Project
                    </span>
                  </div>
                  <Link 
                    href={`/work/${project.id}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA section */}
        <div className="flex flex-col items-center mt-16 md:mt-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with a bespoke digital solution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/work">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-base font-medium transition-all duration-300"
              >
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}