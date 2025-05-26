"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, Target, Lightbulb, Code, Rocket, TrendingUp, CheckCircle, Star } from "lucide-react";
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
        { label: "Increase in Emergency Call Conversions", value: "50%", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Reduction in Administrative Workload", value: "35%", icon: <Clock className="w-6 h-6" /> },
        { label: "Average Response Time", value: "< 2 mins", icon: <Target className="w-6 h-6" /> },
        { label: "Customer Satisfaction Score", value: "4.8/5", icon: <Star className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "The new platform has transformed how we handle emergency calls. Customers can now get instant quotes and book services even outside office hours, which has significantly increased our conversion rates.",
        author: "Sarah Mitchell",
        role: "Operations Manager, EnviroTech Plumbing"
      }
    },
    features: [
      "24/7 Emergency Booking System",
      "Instant Quote Calculator",
      "Real-time Technician Availability",
      "Service Area Mapping",
      "Mobile-Optimised Interface",
      "Admin Dashboard & Analytics"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel"]
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
        { label: "Match-to-Conversation Rate", value: "78%", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Average Conversation Length", value: "12 mins", icon: <Clock className="w-6 h-6" /> },
        { label: "User Retention Rate", value: "65%", icon: <Target className="w-6 h-6" /> },
        { label: "Authenticity Rating", value: "4.7/5", icon: <Star className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "Slush has completely changed how I approach online dating. The video conversations feel so much more natural and authentic than endless text messaging. I've had more meaningful connections in a month than I had in years on other apps.",
        author: "Alex Chen",
        role: "Platform User"
      }
    },
    features: [
      "Video Profile Creation",
      "Real-time Video Chat",
      "AI-Powered Matching",
      "Safety & Moderation Tools",
      "Cross-Platform Compatibility",
      "Authentic Connection Metrics"
    ],
    technologies: ["React", "Node.js", "WebRTC", "Socket.io", "MongoDB", "AWS", "React Native"]
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
        <div className="absolute -left-40 top-40 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] animate-pulse" />
        <div className="absolute -right-40 bottom-40 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <Link 
              href="/work" 
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            {/* Project Header */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Project Meta */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Client</div>
                  <div className="text-white font-medium">{project.client}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Year</div>
                  <div className="text-white font-medium">{project.year}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Duration</div>
                  <div className="text-white font-medium">{project.duration}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Category</div>
                  <div className="text-white font-medium">{project.category}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 font-medium"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit Live Site
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-400 text-white hover:bg-gray-800 px-8 py-3 font-medium"
                  onClick={() => document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Read Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section id="case-study" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.overview}</p>
            </div>

            {/* Challenge */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{project.challenge.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{project.challenge.description}</p>
              <div className="grid gap-4">
                {project.challenge.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{project.solution.title}</h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">{project.solution.description}</p>
              
              <div className="grid gap-8">
                {project.solution.approach.map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{project.results.title}</h2>
              
              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {project.results.metrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="text-blue-500">{metric.icon}</div>
                      <div className="text-3xl font-bold text-gray-900">{metric.value}</div>
                    </div>
                    <p className="text-gray-600 font-medium">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "{project.results.testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {project.results.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{project.results.testimonial.author}</div>
                    <div className="text-gray-600">{project.results.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features & Technologies */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can help transform your business with a bespoke digital solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-medium">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 font-medium">
                    View More Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 