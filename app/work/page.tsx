"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const projects = [
    {
        id: "envirotech-plumbing",
        title: "EnviroTech Emergency Plumbing",
        description: "A 24/7 emergency plumbing service platform with real-time booking and instant quote functionality.",
        image: "/Enviro.png",
        tags: ["Web Development", "UI/UX", "Branding"],
    },
    {
        id: "sandalwood-memorials",
        title: "Sandalwood Memorials",
        description: "A premium memorial and headstone design service featuring an elegant product showcase and a seamless quote system.",
        image: "/Sandalwood-Memorials.png",
        tags: ["E-commerce", "Web Design", "SEO"],
    },
    {
        id: "sandalwood-memories",
        title: "Sandalwood Memories",
        description: "An innovative digital memorial platform helping families preserve and share precious memories of loved ones.",
        image: "/Sandalwood-Memories.png",
        tags: ["Web App", "Digital Platform", "Family Sharing"],
    },
    {
        id: "slush-dating",
        title: "Slush Dating",
        description: "A revolutionary video dating platform connecting singles through meaningful video conversations.",
        image: "/Slush.png",
        tags: ["Web App", "Mobile App", "UX Design"],
    },
    {
        id: "sky-limit-travels",
        title: "Sky Limit Travels",
        description: "A comprehensive travel booking platform offering flight search, popular destinations, and personalized travel recommendations.",
        image: "/skylimittravels-web.png",
        tags: ["Travel Platform", "Flight Search", "User Experience"],
    },
]

export default function WorkPage() {
    const router = useRouter()

    const handleBack = () => {
        router.push('/')
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Inspired by project-inquiry page */}
            <section className="relative bg-black text-white">
                <div className="container mx-auto px-6 py-20 md:py-32">
                    <div className="max-w-4xl mx-auto">
                        <button
                            onClick={handleBack}
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-light mb-12 group"
                            aria-label="Back to homepage"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            <span>Back to home</span>
                        </button>

                        <div className="mb-16">
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tighter mb-8">
                                <span className="block text-white font-extralight">Our Work</span>
                                <span className="block text-gray-300 font-extralight italic">Portfolio</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide">
                                Explore a selection of our projects that demonstrate our commitment to quality, creativity, and results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Showcase Grid */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {projects.map((project) => (
                            <Link key={project.id} href={`/work/${project.id}`} className="group block">
                                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-light text-black group-hover:text-gray-700 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 font-light leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-light tracking-wide"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
} 