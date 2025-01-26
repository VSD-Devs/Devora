"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const projects = [
  {
    title: "EnviroTech Emergency Plumbing",
    description: "24/7 Emergency Plumbing Service Platform with real-time booking and instant quote functionality",
    image: "/Enviro.png",
    blurImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4xOzc6Njs3OzFEQUFEVU9QVVtbW11ubm5ubm5ubm7/2wBDARUXFx4aHh4rISErXkI2Ql5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
    tags: ["Web Development", "UI/UX", "Branding"],
    link: "https://envirotech-plumbing.co.uk",
    highlights: ["Emergency Booking", "Service Areas", "Online Quotes"]
  },
  {
    title: "Sandalwood Memorials",
    description: "Premium memorial & headstone design service featuring an elegant product showcase and seamless quote system",
    image: "/Sandalwood-Memorials.png",
    blurImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4xOzc6Njs3OzFEQUFEVU9QVVtbW11ubm5ubm5ubm7/2wBDARUXFx4aHh4rISErXkI2Ql5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
    tags: ["E-commerce", "Web Design", "SEO"],
    link: "https://sandalwoodmemorials.co.uk",
    highlights: ["Product Catalog", "Quote System", "Mobile-First Design"]
  },
  {
    title: "Sandalwood Memories",
    description: "Innovative digital memorial platform helping families preserve and share precious memories of loved ones",
    image: "/Sandalwood-Memories.png",
    blurImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4xOzc6Njs3OzFEQUFEVU9QVVtbW11ubm5ubm5ubm7/2wBDARUXFx4aHh4rISErXkI2Ql5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
    tags: ["Web App", "Digital Platform", "Family Sharing"],
    link: "https://sandalwoodmemories.com",
    highlights: ["Memory Sharing", "Photo Galleries", "Family Collaboration"]
  },
  {
    title: "Slush Dating",
    description: "Revolutionary video dating platform connecting singles through meaningful video conversations",
    image: "/Slush.png",
    blurImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4xOzc6Njs3OzFEQUFEVU9QVVtbW11ubm5ubm5ubm7/2wBDARUXFx4aHh4rISErXkI2Ql5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
    tags: ["Web App", "Mobile App", "UX Design"],
    link: "https://www.slushdating.com",
    highlights: ["Video Chat", "AI Matching", "User Profiles"]
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden" id="portfolio">
      {/* Enhanced geometric decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
      <div className="absolute -left-40 top-40 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-40 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white/90 px-4 sm:px-6 py-2 rounded-full mb-6 md:mb-8 backdrop-blur-sm border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="font-medium text-sm sm:text-base">Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 leading-[1.2] tracking-tight">
            Transforming Ideas into Digital Success Stories
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
            We turn startup visions into powerful digital experiences. Explore how we've helped businesses achieve remarkable growth through innovative web solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-4 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-900/90 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-gray-800/50 backdrop-blur-sm"
            >
              <div className="relative h-[160px] sm:h-[250px] md:h-[350px] group">
                <Image
                  src={project.image}
                  alt={`${project.title} - Web Development Project by Devora`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={project.blurImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/40 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-2.5 sm:p-6 md:p-8">
                  <Button
                    variant="secondary"
                    className="bg-white text-gray-900 font-medium shadow-lg backdrop-blur-sm text-xs sm:text-sm md:text-base w-full sm:w-auto py-1 h-auto sm:h-10"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Live Site →
                  </Button>
                </div>
              </div>
              <div className="p-2.5 sm:p-6 md:p-8">
                <div 
                  className="cursor-pointer group/expand"
                  onClick={() => toggleCard(project.title)}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className={`${expandedCards[project.title] ? '' : 'line-clamp-1 sm:line-clamp-none'} text-base sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 md:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300`}>
                      {project.title}
                    </h3>
                    <button className="mt-1 p-1 rounded-full hover:bg-gray-800/50 transition-colors duration-200 sm:hidden">
                      {expandedCards[project.title] ? (
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <p className={`${expandedCards[project.title] ? '' : 'line-clamp-2 sm:line-clamp-none'} text-gray-400 text-xs sm:text-sm md:text-base mb-2 sm:mb-4 md:mb-6 leading-relaxed`}>
                    {project.description}
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-gray-300 font-medium border border-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Mobile tags */}
                <div className={`flex flex-wrap gap-1 sm:hidden mb-2 ${expandedCards[project.title] ? '' : 'line-clamp-1'}`}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 bg-gray-800/50 rounded text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="hidden sm:block space-y-2 md:space-y-3">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium text-sm sm:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
                {/* Mobile highlights as compact tags */}
                <div className={`flex flex-wrap gap-1 sm:hidden ${expandedCards[project.title] ? '' : 'line-clamp-1'}`}>
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center text-[10px] px-1.5 py-0.5 bg-blue-500/10 text-blue-300 rounded gap-1"
                    >
                      <svg className="w-2 h-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}