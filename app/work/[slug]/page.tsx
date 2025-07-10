"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, Target, Lightbulb, Code, Rocket, TrendingUp, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { useEffect } from "react";

// Project data with detailed case study information
const projects = {
  "envirotech-plumbing": {
    title: "EnviroTech Emergency Plumbing",
    description: "24/7 Emergency Plumbing Service Platform with real-time booking and instant quote functionality",
    image: "/Enviro.png",
    tags: ["Web Development", "UI/UX", "Branding"],
    link: "https://envirotech-plumbing.co.uk",
    year: "2024",
    duration: "3 months",
    category: "Service Platform",
    client: "EnviroTech Plumbing Services",
    overview: "EnviroTech needed a robust digital platform to handle emergency plumbing requests 24/7 while providing instant quotes to customers in distress situations. The challenge was creating a system that could efficiently manage emergency bookings whilst maintaining a calm, professional user experience.",
    challenge: {
      title: "The Challenge",
      description: "Emergency plumbing services require immediate response and clear communication. Customers in distress need quick access to help, whilst the business needs efficient booking management and quote generation.",
      points: [
        "24/7 emergency booking system with real-time availability",
        "Instant quote calculator for various plumbing services",
        "Mobile-first design for customers in emergency situations",
        "Integration with existing business management systems",
        "Clear service area mapping and technician dispatch"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We developed a comprehensive emergency service platform with intuitive booking flows and automated quote generation.",
      approach: [
        {
          phase: "Discovery & Research",
          description: "Conducted user interviews with customers who had experienced plumbing emergencies to understand pain points and expectations.",
          deliverables: ["User journey mapping", "Competitive analysis", "Technical requirements"]
        },
        {
          phase: "Design & Prototyping", 
          description: "Created a calming, professional interface that guides stressed customers through the booking process efficiently.",
          deliverables: ["Wireframes", "UI design system", "Interactive prototypes"]
        },
        {
          phase: "Development & Integration",
          description: "Built a robust booking system with real-time availability, quote calculator, and business management integration.",
          deliverables: ["Responsive web application", "Admin dashboard", "API integrations"]
        },
        {
          phase: "Testing & Launch",
          description: "Comprehensive testing across devices and scenarios, including emergency booking simulations.",
          deliverables: ["Quality assurance", "Performance optimisation", "Launch strategy"]
        }
      ]
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "Increase in Emergency Bookings", value: "180%", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Average Response Time", value: "2 mins", icon: <Clock className="w-6 h-6" /> },
        { label: "Quote Completion Rate", value: "85%", icon: <Target className="w-6 h-6" /> },
        { label: "Customer Satisfaction", value: "4.8/5", icon: <Star className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "The new platform has revolutionised how we handle emergency calls. Customers can book instantly, and our dispatch system is incredibly efficient. We've seen a massive increase in bookings.",
        author: "James Mitchell",
        role: "Operations Director, EnviroTech"
      }
    },
    features: [
      "Emergency Booking System",
      "Real-time Quote Calculator", 
      "Service Area Mapping",
      "Technician Dispatch Portal",
      "Customer Communication Hub",
      "Performance Analytics"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Google Maps API", "Vercel"]
  },
  
  "sandalwood-memorials": {
    title: "Sandalwood Memorials",
    description: "Premium memorial & headstone design service featuring an elegant product showcase and seamless quote system",
    image: "/Sandalwood-Memorials.png",
    tags: ["E-commerce", "Web Design", "SEO"],
    link: "https://sandalwoodmemorials.co.uk",
    year: "2024",
    duration: "4 months",
    category: "E-commerce",
    client: "Sandalwood Memorial Services",
    overview: "Sandalwood Memorials required a delicate balance between showcasing their premium memorial products whilst remaining sensitive to their clients' emotional needs during difficult times. The platform needed to guide families through memorial options with dignity and respect.",
    challenge: {
      title: "The Challenge",
      description: "Creating an e-commerce experience for memorial services requires exceptional sensitivity and thoughtful design to support families during their most difficult moments.",
      points: [
        "Sensitive product presentation for memorial services",
        "Intuitive quote system for custom memorial designs",
        "Respectful user experience during emotional decision-making",
        "Comprehensive product catalogue with detailed customisation options",
        "SEO optimisation for local memorial service searches"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We crafted an elegant, respectful platform that guides families through memorial options with care and dignity.",
      approach: [
        {
          phase: "Empathy Research",
          description: "Conducted sensitive research with bereaved families to understand their needs and emotional journey when selecting memorials.",
          deliverables: ["Empathy mapping", "Sensitive user journeys", "Content strategy"]
        },
        {
          phase: "Respectful Design",
          description: "Created a calming, elegant design system that honours the memory of loved ones whilst providing clear navigation.",
          deliverables: ["Design system", "Product showcase layouts", "Quote system wireframes"]
        },
        {
          phase: "E-commerce Development",
          description: "Built a sophisticated product catalogue with customisation options and a discreet quote system.",
          deliverables: ["Product management system", "Quote calculator", "Content management"]
        },
        {
          phase: "SEO & Launch",
          description: "Implemented local SEO strategies and launched with comprehensive testing and family feedback integration.",
          deliverables: ["SEO optimisation", "Local search strategy", "Launch support"]
        }
      ]
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "Increase in Online Enquiries", value: "145%", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Average Session Duration", value: "5+ mins", icon: <Clock className="w-6 h-6" /> },
        { label: "Quote Completion Rate", value: "78%", icon: <Target className="w-6 h-6" /> },
        { label: "Customer Satisfaction", value: "4.9/5", icon: <Star className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "The website beautifully represents our services whilst being incredibly sensitive to our clients' needs. We've seen a significant increase in enquiries and the feedback from families has been overwhelmingly positive.",
        author: "David Sandalwood",
        role: "Director, Sandalwood Memorials"
      }
    },
    features: [
      "Elegant Product Showcase",
      "Custom Memorial Designer",
      "Sensitive Quote System",
      "Memorial Gallery",
      "Local SEO Optimisation",
      "Family Testimonials"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel", "Google Analytics"]
  },

  "sandalwood-memories": {
    title: "Sandalwood Memories",
    description: "Innovative digital memorial platform helping families preserve and share precious memories of loved ones",
    image: "/Sandalwood-Memories.png",
    tags: ["Web App", "Digital Platform", "Family Sharing"],
    link: "https://sandalwoodmemories.com",
    year: "2023",
    duration: "5 months",
    category: "Digital Platform",
    client: "Sandalwood Memorial Services",
    overview: "A groundbreaking digital memorial platform that allows families to create, share, and preserve memories of their loved ones. The platform needed to handle sensitive content whilst enabling meaningful family collaboration and memory preservation.",
    challenge: {
      title: "The Challenge",
      description: "Creating a dignified digital space where multiple family members could contribute to and preserve digital memorials for their loved ones required careful consideration of privacy, sharing permissions, and emotional design.",
      points: [
        "Collaborative memory sharing with appropriate privacy controls",
        "Intuitive photo and story upload system",
        "Respectful notification system for family updates",
        "Long-term digital preservation of precious memories",
        "Cross-generational usability for all family members"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We developed a thoughtful collaborative platform with elegant sharing permissions and intuitive memory preservation tools.",
      approach: [
        {
          phase: "Family Research",
          description: "Conducted research with bereaved families to understand how they naturally share and preserve memories together.",
          deliverables: ["Family collaboration patterns", "Privacy requirement analysis", "Memory sharing workflows"]
        },
        {
          phase: "Platform Design",
          description: "Designed an intuitive interface that respects the emotional nature of the content whilst encouraging family participation.",
          deliverables: ["User experience design", "Privacy control system", "Memory timeline interface"]
        },
        {
          phase: "Collaborative Development",
          description: "Built a robust platform with sophisticated sharing permissions, memory organisation, and family notification systems.",
          deliverables: ["Memory management system", "Family collaboration tools", "Digital preservation features"]
        },
        {
          phase: "Community Launch",
          description: "Launched with careful onboarding support and ongoing family feedback integration.",
          deliverables: ["Family onboarding", "Support documentation", "Community guidelines"]
        }
      ]
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "Memories Preserved", value: "10,000+", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Active Family Groups", value: "500+", icon: <Users className="w-6 h-6" /> },
        { label: "Average Memories per Memorial", value: "25", icon: <Target className="w-6 h-6" /> },
        { label: "Family Satisfaction", value: "4.9/5", icon: <Star className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "This platform has brought our family closer together during a difficult time. Being able to share memories and photos of Mum has been incredibly healing, and knowing they're preserved forever gives us great comfort.",
        author: "Jennifer Thompson",
        role: "Family Member"
      }
    },
    features: [
      "Collaborative Memory Sharing",
      "Photo & Story Galleries",
      "Family Permission System",
      "Memory Timeline",
      "Digital Preservation",
      "Cross-Device Synchronisation"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Cloudinary", "Vercel"]
  },

  "slush-dating": {
    title: "Slush Dating",
    description: "Revolutionary video dating platform connecting singles through meaningful video conversations",
    image: "/Slush.png",
    tags: ["Web App", "Mobile App", "UX Design"],
    link: "https://www.slushdating.com",
    year: "2023",
    duration: "6 months",
    category: "Social Platform",
    client: "Slush Dating Ltd",
    overview: "Slush Dating wanted to revolutionise online dating by moving beyond swipe-based interactions to foster genuine connections through video conversations. The platform required complex real-time capabilities whilst maintaining user safety and authentic matching.",
    challenge: {
      title: "The Challenge",
      description: "Creating a video-first dating platform that differentiates from swipe-based apps whilst ensuring user safety and authentic connections required innovative UX design and robust technical implementation.",
      points: [
        "Real-time video chat capabilities with high performance",
        "Authentic matching algorithms beyond superficial swiping",
        "User safety features and content moderation",
        "Intuitive video profile creation and discovery",
        "Cross-platform compatibility for web and mobile"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We built a WebRTC-based platform with custom matching algorithms and an intuitive interface that guides users through creating engaging video profiles.",
      approach: [
        {
          phase: "Dating Behaviour Research",
          description: "Analysed modern dating patterns and conducted user interviews to understand what creates meaningful connections.",
          deliverables: ["User behaviour analysis", "Matching algorithm design", "Safety requirement specification"]
        },
        {
          phase: "Video-First UX Design",
          description: "Designed an interface that puts video conversations at the centre whilst maintaining user comfort and safety.",
          deliverables: ["Video interaction design", "Profile creation flow", "Safety feature integration"]
        },
        {
          phase: "Real-time Development",
          description: "Built a sophisticated platform with WebRTC video capabilities, custom matching algorithms, and comprehensive safety features.",
          deliverables: ["Video chat system", "Matching algorithm", "Safety & moderation tools"]
        },
        {
          phase: "Community Building",
          description: "Launched with community guidelines, safety education, and ongoing user feedback integration.",
          deliverables: ["Community guidelines", "Safety education", "User feedback systems"]
        }
      ]
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "User Engagement Rate", value: "3x higher", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Average Session Duration", value: "18 mins", icon: <Clock className="w-6 h-6" /> },
        { label: "Successful Match Rate", value: "65%", icon: <Target className="w-6 h-6" /> },
        { label: "User Safety Rating", value: "4.8/5", icon: <Star className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "Slush has completely changed how I approach online dating. Being able to see and talk to people before meeting creates such genuine connections. It's refreshing compared to traditional apps.",
        author: "Emma Richardson",
        role: "Platform User"
      }
    },
    features: [
      "Video Profile Creation",
      "Real-time Video Chat",
      "Smart Matching Algorithm",
      "Safety & Moderation Tools",
      "Cross-Platform Compatibility",
      "Community Guidelines"
    ],
    technologies: ["React Native", "WebRTC", "Node.js", "MongoDB", "Socket.io", "AWS"]
  },

  "sky-limit-travels": {
    title: "Sky Limit Travels",
    description: "Comprehensive travel booking platform with flight search, popular destinations, and personalised recommendations",
    image: "/skylimittravels-web.png",
    tags: ["Travel Platform", "Flight Search", "User Experience"],
    link: "https://skylimittravels.com",
    year: "2023",
    duration: "4 months",
    category: "Travel Platform",
    client: "Sky Limit Travel Agency",
    overview: "Sky Limit Travels needed a comprehensive booking platform that simplifies the flight search process whilst offering competitive prices and inspiring travel content. The platform required integration with multiple airline APIs whilst maintaining excellent performance and accessibility.",
    challenge: {
      title: "The Challenge",
      description: "Creating an intuitive travel booking platform that stands out in a competitive market required innovative UX design, complex API integrations, and inspiring content strategy.",
      points: [
        "Complex flight search with multiple airline API integrations",
        "Inspiring destination discovery and travel content",
        "Competitive pricing display and comparison tools",
        "Personalised travel recommendations",
        "Excellent accessibility and mobile performance"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We designed an accessible flight search interface with clean, visually engaging layouts that highlight popular destinations and authentic traveller experiences.",
      approach: [
        {
          phase: "Travel Behaviour Analysis",
          description: "Researched how modern travellers search for and book flights, identifying pain points in existing platforms.",
          deliverables: ["User journey mapping", "Competitive analysis", "API integration strategy"]
        },
        {
          phase: "Inspiring Design",
          description: "Created a visually engaging interface that balances functional flight search with inspiring travel content.",
          deliverables: ["Visual design system", "Flight search interface", "Destination showcase design"]
        },
        {
          phase: "Platform Development",
          description: "Built a high-performance platform with multiple airline integrations, personalisation features, and excellent accessibility.",
          deliverables: ["Flight search engine", "API integrations", "Personalisation system"]
        },
        {
          phase: "Performance Optimisation",
          description: "Optimised for speed, accessibility, and conversion with comprehensive testing and user feedback integration.",
          deliverables: ["Performance optimisation", "Accessibility compliance", "Conversion optimisation"]
        }
      ]
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "Lower Bounce Rate vs Industry", value: "40%", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Higher Conversion Rate", value: "25%", icon: <Target className="w-6 h-6" /> },
        { label: "Accessibility Score", value: "98/100", icon: <CheckCircle className="w-6 h-6" /> },
        { label: "User Satisfaction", value: "4.6/5", icon: <Star className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "The new platform has transformed our business. Customers love how easy it is to find and book flights, and the inspiring destination content has increased our average booking value significantly.",
        author: "Maria Rodriguez",
        role: "Managing Director, Sky Limit Travels"
      }
    },
    features: [
      "Advanced Flight Search",
      "Destination Discovery",
      "Price Comparison Tools",
      "Personalised Recommendations",
      "Travel Inspiration Content",
      "Mobile-Optimised Booking"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Amadeus API", "Stripe", "Vercel"]
  }
};

type Props = {
  params: { slug: string }
}

export default function ProjectPage({ params }: Props) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  // Set document title dynamically
  useEffect(() => {
    document.title = `${project.title} Case Study | Devora`;
  }, [project.title]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Ultra Minimalist with Noise Texture */}
      <section 
        className="relative min-h-screen bg-black text-white"
        style={{ backgroundImage: "url(/noise.png)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-5xl mx-auto">
            {/* Back Navigation */}
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all font-light mb-16 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="tracking-wide">Back to work</span>
            </Link>

            {/* Project Tags - More Refined */}
            <div className="flex gap-4 mb-16">
              {project.tags.map((tag, index) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider font-light px-4 py-2 text-white/60 border border-white/20 hover:border-white/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Main headline - Ultra dramatic like landing page */}
            <div className="mb-20 mt-12">
              <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-extralight leading-[0.8] tracking-tighter mb-12">
                <span className="block text-white font-extralight">{project.title.split(' ')[0]}</span>
                <span className="block text-gray-300 font-extralight italic">{project.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed tracking-wide mb-16">
                {project.description}
              </p>
              
              {/* Action Button - Matching landing page style */}
              <div className="flex items-center gap-8">
                <button
                  onClick={() => window.open(project.link, '_blank')}
                  className="text-white hover:text-gray-300 p-0 h-auto font-light text-lg tracking-wide border-b border-white border-opacity-30 rounded-none pb-1 transition-colors group"
                >
                  Visit live site →
                </button>
                <div className="text-gray-500 font-light text-lg">
                  Case study below
                </div>
              </div>
            </div>

            {/* Project Meta - Minimal grid like landing page */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 border-t border-gray-800 border-opacity-30">
              <div>
                <div className="text-3xl md:text-4xl font-light text-white mb-1 tracking-wide">{project.year}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-light">Year</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-white mb-1 tracking-wide">{project.duration}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-light">Duration</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-white mb-1 tracking-wide">{project.category}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-light">Category</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-white mb-1 tracking-wide">{project.client.split(' ')[0]}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-light">Client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image - Elegant Full Bleed */}
      <section className="bg-white">
        <div className="relative h-[90vh]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain bg-gray-50"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      {/* Overview Section - Ultra Clean */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-12">Overview</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-black leading-[0.85] tracking-tighter mb-16">
              Project<br />
              <span className="text-gray-600 italic">Story</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed tracking-wide max-w-4xl">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section - Dramatic */}
      <section className="py-40 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs text-orange-400 uppercase tracking-wider font-light mb-12">Challenge</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white leading-[0.85] tracking-tighter mb-16">
              The<br />
              <span className="text-gray-400 italic">Problem</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed tracking-wide mb-24 max-w-4xl">
              {project.challenge.description}
            </p>
            
            {/* Challenge Points - More Elegant */}
            <div className="space-y-12">
              {project.challenge.points.map((point, index) => (
                <div key={index} className="flex items-start gap-12 group border-b border-gray-800/30 pb-12 last:border-b-0">
                  <div className="text-sm text-orange-300 font-light tracking-wider mt-2 group-hover:text-orange-400 transition-colors min-w-[3rem]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-xl text-gray-300 font-light leading-relaxed flex-1 tracking-wide">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Flowing */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs text-green-500 uppercase tracking-wider font-light mb-12">Solution</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-black leading-[0.85] tracking-tighter mb-16">
              Our<br />
              <span className="text-gray-600 italic">Approach</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed tracking-wide mb-32 max-w-4xl">
              {project.solution.description}
            </p>
            
            {/* Approach Phases - More Elegant Flow */}
            <div className="space-y-32">
              {project.solution.approach.map((phase, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-16 mb-12">
                    <div className="text-sm text-green-400 font-light tracking-wider mt-4 group-hover:text-green-500 transition-colors min-w-[4rem]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-4xl md:text-5xl font-extralight text-black mb-8 tracking-wide leading-tight">
                        {phase.phase}
                      </h3>
                      <p className="text-xl text-gray-600 font-light leading-relaxed mb-16 max-w-3xl tracking-wide">
                        {phase.description}
                      </p>
                      
                      {/* Deliverables - More Refined */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div
                            key={idx}
                            className="text-sm text-gray-500 font-light hover:text-green-600 transition-colors cursor-default border-b border-gray-200 pb-2"
                          >
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - Dramatic Black */}
      <section 
        className="py-40 bg-black text-white"
        style={{ backgroundImage: "url(/noise.png)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs text-purple-400 uppercase tracking-wider font-light mb-12">Results</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white leading-[0.85] tracking-tighter mb-32">
              Impact &<br />
              <span className="text-gray-400 italic">Metrics</span>
            </h2>
            
            {/* Metrics - Clean Grid Like Landing Page */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-32">
              {project.results.metrics.map((metric, index) => (
                <div key={index} className="group">
                  <div className="text-4xl md:text-5xl font-extralight text-white mb-2 tracking-wide group-hover:text-purple-400 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-light">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial - Like Landing Page */}
            <div className="border-t border-gray-800/30 pt-24">
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-300 leading-relaxed mb-16 tracking-wide max-w-4xl">
                "{project.results.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-light text-lg">
                    {project.results.testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-light">{project.results.testimonial.author}</div>
                  <div className="text-sm text-gray-500 font-light">{project.results.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Features - Refined */}
      <section className="py-40 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-32">
              <div>
                <div className="text-xs text-blue-500 uppercase tracking-wider font-light mb-12">Features</div>
                <h3 className="text-5xl md:text-6xl font-extralight text-black mb-20 tracking-wide leading-tight">
                  Key<br />
                  <span className="text-gray-600 italic">Capabilities</span>
                </h3>
                <div className="space-y-8">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-8 group border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="text-sm text-blue-400 font-light tracking-wider mt-2 group-hover:text-blue-500 transition-colors min-w-[3rem]">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <span className="text-lg text-gray-600 font-light leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-xs text-purple-500 uppercase tracking-wider font-light mb-12">Stack</div>
                <h3 className="text-5xl md:text-6xl font-extralight text-black mb-20 tracking-wide leading-tight">
                  Tech<br />
                  <span className="text-gray-600 italic">Stack</span>
                </h3>
                <div className="space-y-6">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="text-lg text-gray-600 font-light hover:text-purple-600 transition-colors cursor-default border-b border-gray-200 pb-4">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching Landing Page */}
      <section className="py-40 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white leading-[0.85] tracking-tighter mb-12">
              Let's work<br />
              <span className="text-gray-400 italic">together</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl mx-auto mb-16 tracking-wide">
              Ready to transform your digital presence?
            </p>
            
            <div className="flex items-center justify-center gap-12">
              <Link href="/contact" className="text-white hover:text-gray-300 transition-colors font-light text-lg tracking-wide border-b border-white/30 hover:border-gray-300/50 pb-1">
                Start your project →
              </Link>
              <Link href="/work" className="text-gray-400 hover:text-white transition-colors font-light text-lg tracking-wide">
                More case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 