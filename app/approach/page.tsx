import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightbulb, PenTool, Code, Rocket, Users, Target, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach & Methodology | Devora - Web Design & Development",
  description: "Discover Devora's proven methodology for creating successful digital solutions. From discovery to launch, we guide you through every step of the process.",
};

const methodology = [
  {
    icon: <Lightbulb className="h-12 w-12 text-blue-500" />,
    title: "Discovery & Strategy",
    description: "We begin by understanding your business goals, target audience, and market position. This research forms the foundation of our strategic approach to your project.",
    duration: "1-2 weeks",
    deliverables: [
      "Business requirements analysis",
      "User research & personas",
      "Competitive analysis",
      "Technical architecture planning",
      "Project roadmap & timeline"
    ],
    process: "Through workshops, interviews, and research, we gain deep insights into your business needs and user expectations. This phase ensures we're building the right solution for your specific challenges."
  },
  {
    icon: <PenTool className="h-12 w-12 text-blue-500" />,
    title: "Design & Prototype",
    description: "Our designers create beautiful, functional interfaces that align with your brand and meet user needs. We prototype and iterate until the design perfectly balances aesthetics and usability.",
    duration: "2-3 weeks",
    deliverables: [
      "Wireframes & user flows",
      "Visual design system",
      "Interactive prototypes",
      "Brand integration",
      "Accessibility compliance"
    ],
    process: "We create designs that not only look stunning but also provide exceptional user experiences. Every element is carefully considered to ensure your users can achieve their goals efficiently and enjoyably."
  },
  {
    icon: <Code className="h-12 w-12 text-blue-500" />,
    title: "Development & Testing",
    description: "Our development team brings designs to life with clean, efficient code. We rigorously test across devices and browsers to ensure flawless performance.",
    duration: "4-8 weeks",
    deliverables: [
      "Responsive web application",
      "Content management system",
      "Performance optimisation",
      "Cross-browser testing",
      "Security implementation"
    ],
    process: "Using modern technologies and best practices, we build robust, scalable solutions. Our code is clean, well-documented, and designed for long-term maintainability and growth."
  },
  {
    icon: <Rocket className="h-12 w-12 text-blue-500" />,
    title: "Launch & Growth",
    description: "After launching your website or application, we provide ongoing support and optimisation to help you grow and adapt to changing business needs.",
    duration: "Ongoing",
    deliverables: [
      "Deployment & launch",
      "Performance monitoring",
      "Analytics setup",
      "Training & documentation",
      "Ongoing support & maintenance"
    ],
    process: "Launch is just the beginning. We monitor performance, gather user feedback, and continuously optimise your solution to ensure it continues to meet your evolving business needs."
  }
];

const principles = [
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "User-Centred Design",
    description: "Every decision we make is guided by user needs and behaviours. We create solutions that people love to use."
  },
  {
    icon: <Target className="h-8 w-8 text-blue-500" />,
    title: "Goal-Oriented Approach",
    description: "We focus on achieving your business objectives through strategic design and development decisions."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
    title: "Quality Assurance",
    description: "Rigorous testing and attention to detail ensure your solution works flawlessly across all devices and browsers."
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-500" />,
    title: "Timely Delivery",
    description: "We respect your timeline and deliver projects on schedule without compromising on quality."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    title: "Scalable Solutions",
    description: "We build with the future in mind, creating solutions that can grow and adapt with your business."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
    title: "Innovation Focus",
    description: "We stay ahead of industry trends and incorporate cutting-edge technologies to give you a competitive advantage."
  }
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "3-6", label: "Month Avg Timeline" }
];

export default function ApproachPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-slate-900 to-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
        <div className="absolute -left-40 top-40 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] animate-pulse" />
        <div className="absolute -right-40 bottom-40 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-6 py-3 text-sm text-white mb-8 shadow-lg">
              <Lightbulb className="w-4 h-4 mr-2 text-blue-400" />
              <span className="font-medium">Our Methodology</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Our Proven{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Approach
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              From initial concept to successful launch, we guide you through every step of creating exceptional digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 font-medium">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" className="border-gray-400 text-white hover:bg-gray-800 px-8 py-3 font-medium">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Four-Phase Methodology
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We've refined our process over dozens of successful projects to ensure consistent, high-quality results that exceed expectations.
              </p>
            </div>

            <div className="space-y-16">
              {methodology.map((phase, index) => (
                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                          {phase.icon}
                        </div>
                        <div>
                          <div className="text-sm text-blue-600 font-medium mb-1">Phase {index + 1}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{phase.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-sm font-medium text-gray-900 mb-2">Duration: {phase.duration}</div>
                        <div className="text-sm text-gray-600 mb-4">{phase.process}</div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-3">Key Deliverables:</h4>
                        <div className="space-y-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <div className="relative">
                      <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center border border-blue-200">
                        <div className="text-6xl opacity-20">{phase.icon}</div>
                      </div>
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Principles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide every decision we make and ensure we deliver exceptional results for every client.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">{principle.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our proven methodology can help transform your business with a bespoke digital solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-medium">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 font-medium">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 