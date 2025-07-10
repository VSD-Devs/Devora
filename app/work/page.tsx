import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeftRight, Lightbulb, Code, PenTool, CheckCircle, Rocket, ExternalLink, Award, TrendingUp, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | Devora - Web Design & Development",
  description: "Explore our portfolio of successful web design and development projects. See how we've helped businesses transform their digital presence.",
};

// Extended project data with more detailed information
const projects = [
  {
    id: "envirotech-plumbing",
    title: "EnviroTech Emergency Plumbing",
    description: "24/7 Emergency Plumbing Service Platform with real-time booking and instant quote functionality",
    image: "/Enviro.png",
    tags: ["Web Development", "UI/UX", "Branding"],
    link: "https://envirotech-plumbing.co.uk",
    highlights: ["Emergency Booking", "Service Areas", "Online Quotes"],
    challenge: "EnviroTech needed a platform that could handle emergency service requests 24/7 while providing instant quotes to customers in distress situations.",
    solution: "We developed a robust booking system with real-time availability, integrated with a custom quote calculator. The mobile-first design ensures customers can easily request help even in stressful situations.",
    results: "50% increase in emergency call conversions and 35% reduction in administrative workload through automation."
  },
  {
    id: "sandalwood-memorials",
    title: "Sandalwood Memorials",
    description: "Premium memorial & headstone design service featuring an elegant product showcase and seamless quote system",
    image: "/Sandalwood-Memorials.png",
    tags: ["E-commerce", "Web Design", "SEO"],
    link: "https://sandalwoodmemorials.co.uk",
    highlights: ["Product Catalogue", "Quote System", "Mobile-First Design"],
    challenge: "Sandalwood Memorials required a delicate balance between showcasing their premium products while remaining sensitive to their clients' emotional needs during difficult times.",
    solution: "We created an elegant, respectful design with intuitive navigation and a discreet quote system that guides users through options without overwhelming them.",
    results: "145% increase in online enquiries and improved engagement metrics, with users spending an average of 5 minutes exploring the memorial options."
  },
  {
    id: "sandalwood-memories",
    title: "Sandalwood Memories",
    description: "Innovative digital memorial platform helping families preserve and share precious memories of loved ones",
    image: "/Sandalwood-Memories.png",
    tags: ["Web App", "Digital Platform", "Family Sharing"],
    link: "https://sandalwoodmemories.com",
    highlights: ["Memory Sharing", "Photo Galleries", "Family Collaboration"],
    challenge: "Creating a dignified yet user-friendly platform where multiple family members could contribute to and preserve digital memorials for their loved ones.",
    solution: "We developed a collaborative platform with intuitive sharing permissions, elegant photo galleries, and a thoughtful UX that respects the emotional nature of the content.",
    results: "The platform now hosts over 10,000 memories and has received overwhelmingly positive feedback for its sensitive approach to digital memorialisation."
  },
  {
    id: "slush-dating",
    title: "Slush Dating",
    description: "Revolutionary video dating platform connecting singles through meaningful video conversations",
    image: "/Slush.png",
    tags: ["Web App", "Mobile App", "UX Design"],
    link: "https://www.slushdating.com",
    highlights: ["Video Chat", "AI Matching", "User Profiles"],
    challenge: "Slush Dating wanted to differentiate from swipe-based dating apps by fostering genuine connections through video conversations, requiring complex real-time capabilities.",
    solution: "We built a WebRTC-based platform with custom matching algorithms and an intuitive interface that guides users through creating engaging video profiles and meaningful conversations.",
    results: "The platform achieved a 78% match-to-conversation rate, significantly higher than industry averages, with users reporting more authentic connections."
  },
  {
    id: "sky-limit-travels",
    title: "Sky Limit Travels",
    description: "Comprehensive travel booking platform offering flight search, popular destinations, and personalised travel recommendations",
    image: "/skylimittravels-web.png",
    tags: ["Travel Platform", "Flight Search", "User Experience"],
    link: "https://skylimittravels.com",
    highlights: ["Interactive Flight Search", "Popular Destinations", "Traveller Stories"],
    challenge: "Creating an intuitive travel booking platform that simplifies the flight search process while offering competitive prices and inspiring travel content.",
    solution: "We designed an accessible flight search interface with a clean, visually engaging layout that highlights popular destinations and authentic traveller experiences to inspire bookings.",
    results: "The platform achieves a 40% lower bounce rate than industry average and a 25% higher conversion rate for flight bookings with excellent accessibility ratings."
  }
];

// Our methodology steps
const methodology = [
  {
    icon: <Lightbulb className="h-10 w-10 text-blue-500" />,
    title: "Discovery & Strategy",
    description: "We begin by understanding your business goals, target audience, and market position. This research forms the foundation of our strategic approach to your project."
  },
  {
    icon: <PenTool className="h-10 w-10 text-blue-500" />,
    title: "Design & Prototype",
    description: "Our designers create beautiful, functional interfaces that align with your brand and meet user needs. We prototype and iterate until the design perfectly balances aesthetics and usability."
  },
  {
    icon: <Code className="h-10 w-10 text-blue-500" />,
    title: "Development & Testing",
    description: "Our development team brings designs to life with clean, efficient code. We rigorously test across devices and browsers to ensure flawless performance."
  },
  {
    icon: <Rocket className="h-10 w-10 text-blue-500" />,
    title: "Launch & Growth",
    description: "After launching your website or application, we provide ongoing support and optimisation to help you grow and adapt to changing business needs."
  }
];

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-slate-900 to-black text-white pt-20 md:pt-24 pb-12 md:pb-24 relative overflow-hidden">
        {/* Enhanced Creative background elements */}
        <div className="absolute inset-0">
          {/* Multi-layered animated grids */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] animate-pulse"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.02)_1px,transparent_1px)] bg-[size:90px_90px] md:bg-[size:130px_130px] animate-pulse delay-600"></div>
          
          {/* Floating portfolio-themed elements */}
          <div className="hidden md:block absolute top-20 left-10 w-6 h-6 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
          <div className="hidden md:block absolute top-40 right-20 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce"></div>
          <div className="hidden md:block absolute bottom-40 left-20 w-8 h-8 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
          
          {/* Additional floating elements */}
          <div className="hidden md:block absolute top-28 right-1/4 w-3 h-3 bg-pink-400/40 rotate-45 animate-ping"></div>
          <div className="hidden md:block absolute bottom-28 right-12 w-5 h-5 border border-indigo-400/30 rounded-full animate-spin-slow"></div>
          <div className="hidden md:block absolute top-1/2 left-12 w-2 h-2 bg-emerald-400/50 rounded-full animate-bounce delay-400"></div>
          
          {/* Design symbols floating animation */}
          <div className="hidden lg:block absolute top-20 left-1/4 text-pink-400/20 text-3xl font-bold animate-float delay-300">✦</div>
          <div className="hidden lg:block absolute bottom-20 right-1/4 text-blue-400/20 text-2xl font-bold animate-float delay-800">◆</div>
          <div className="hidden lg:block absolute top-1/3 right-16 text-purple-400/20 text-xl font-bold animate-bounce delay-1200">●</div>
          <div className="hidden lg:block absolute bottom-1/3 left-20 text-cyan-400/20 text-2xl font-bold animate-pulse delay-400">▲</div>
          
          {/* Portfolio/design icons */}
          <div className="hidden lg:block absolute top-16 right-1/3 opacity-10 animate-float">
            <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
            </svg>
          </div>
          <div className="hidden lg:block absolute bottom-16 left-1/3 opacity-10 animate-float delay-1000">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/>
            </svg>
          </div>
          <div className="hidden lg:block absolute top-1/3 left-1/2 opacity-10 animate-float delay-500">
            <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
            </svg>
          </div>
          <div className="hidden lg:block absolute bottom-1/4 right-1/3 opacity-10 animate-float delay-800">
            <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
            </svg>
          </div>
          
          {/* Enhanced gradient orbs with portfolio theme colors */}
          <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-l from-blue-600/10 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-pink-500/8 to-rose-500/4 rounded-full blur-2xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/4 right-0 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-tl from-purple-500/8 to-indigo-500/4 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            {/* Enhanced badge - Added more top margin on mobile */}
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-6 md:mb-8 shadow-lg mt-4 md:mt-0">
              <Award className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
              <span className="font-medium">Portfolio Showcase</span>
              <div className="ml-2 md:ml-3 flex space-x-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
            </h1>
            <p className="text-blue-100 text-base md:text-lg lg:text-xl">
              Explore our portfolio of successful projects and see how we help businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Creative background elements */}
        <div className="absolute inset-0">
          {/* Animated grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-10 right-10 w-8 h-8 border border-blue-400/40 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-10 left-10 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 border-2 border-cyan-400/50 rounded-full animate-pulse"></div>
          
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-600/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="space-y-12 md:space-y-24">
            {projects.map((project, index) => (
              <div key={project.title} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="relative group">
                  {/* Floating accent */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border border-blue-200/50 group-hover:border-blue-400/60 transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                    
                    {/* Live indicator */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-400/30">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-slate-700 text-xs font-medium">Live</span>
                      </div>
                    </div>

                    {/* Case Study Button Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <Link href={`/work/${project.id}`} className="flex-1">
                        <Button
                          variant="secondary"
                          className="w-full bg-white/90 hover:bg-white text-gray-900 font-medium shadow-lg text-sm py-2"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Case Study
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 md:px-3 py-1 md:py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white rounded-full text-xs md:text-sm font-medium shadow-lg backdrop-blur-sm border border-blue-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">{project.title}</h2>
                  <p className="text-slate-600 text-base md:text-lg">{project.description}</p>
                  
                  <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200/50 shadow-lg">
                      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2 md:mb-3 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2 md:mr-3"></div>
                        Challenge
                      </h3>
                      <p className="text-sm md:text-base text-slate-600">{project.challenge}</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200/50 shadow-lg">
                      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2 md:mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3"></div>
                        Solution
                      </h3>
                      <p className="text-sm md:text-base text-slate-600">{project.solution}</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200/50 shadow-lg">
                      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2 md:mb-3 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></div>
                        Results
                      </h3>
                      <p className="text-sm md:text-base text-slate-600">{project.results}</p>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden text-white">
        {/* Creative background elements */}
        <div className="absolute inset-0">
          {/* Animated grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:120px_120px] animate-pulse"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-16 right-16 w-10 h-10 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-16 left-16 w-8 h-8 bg-cyan-500/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-6 h-6 border-2 border-blue-500/40 rounded-full animate-pulse"></div>
          
          {/* Gradient orbs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/8 to-cyan-500/4 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-600/8 to-indigo-500/4 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
                      <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
              {/* Enhanced badge - Smaller on mobile */}
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-6 md:mb-8 shadow-lg">
                <Rocket className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
                <span className="font-medium">Our Process</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Methodology</span>
              </h2>
              <p className="text-blue-100 text-base md:text-lg">
                Our structured approach ensures we deliver exceptional results for every project.
              </p>
            </div>
          
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {methodology.map((step, index) => (
                <div key={index} className="group relative">
                  {/* Floating accent - Smaller on mobile */}
                  <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-3 md:w-4 h-3 md:h-4 bg-blue-400/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group-hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 relative">
                    <div className="mb-4 md:mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white group-hover:text-blue-200 transition-colors">{step.title}</h3>
                    <p className="text-sm md:text-base text-blue-100 group-hover:text-slate-200 transition-colors leading-relaxed">{step.description}</p>
                  
                  <div className="mt-6 flex items-center">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 font-semibold border border-blue-400/30">
                      {index + 1}
                    </span>
                    {index < methodology.length - 1 && (
                      <div className="hidden lg:block w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent ml-4"></div>
                    )}
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden text-white">
        {/* Creative background elements */}
        <div className="absolute inset-0">
          {/* Animated grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-10 left-10 w-8 h-8 border-2 border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-white/10 rotate-45 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-10 h-10 border border-white/30 rotate-12 animate-pulse"></div>
          
          {/* Gradient orbs */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-white/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Enhanced badge */}
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm text-white mb-8 shadow-lg">
              <Star className="w-4 h-4 mr-2 text-cyan-300 animate-pulse" />
              <span className="font-medium">Ready to Start?</span>
              <div className="ml-3 flex space-x-1">
                <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Work{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Together?</span>
            </h2>
            <p className="text-blue-100 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 rounded-xl px-8 py-4 text-lg font-semibold shadow-2xl shadow-black/20 transition-all duration-300">
                  Enquire
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 hover:scale-105 rounded-xl px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 