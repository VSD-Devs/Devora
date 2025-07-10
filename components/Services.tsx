"use client"

import { Button } from "./ui/button"
import { ArrowRight, Code2, Paintbrush2, Rocket, LineChart, Users, Globe, Layout } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Digital Strategy",
    description: "Data-driven strategies that align with your startup's goals and drive measurable growth.",
    features: [
      "Market Analysis",
      "Competitor Research",
      "Growth Planning",
      "KPI Definition"
    ],
    colorClass: "from-blue-500 to-blue-600"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Web Design",
    description: "Beautiful, conversion-focused designs that engage your users and drive results.",
    features: [
      "UI/UX Design",
      "Responsive Design",
      "Brand Integration",
      "User Testing"
    ],
    colorClass: "from-teal-500 to-teal-600"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Development",
    description: "Modern web development using cutting-edge technologies for optimal performance.",
    features: [
      "Full-Stack Development",
      "API Integration",
      "Cloud Deployment",
      "Performance Optimization"
    ],
    colorClass: "from-indigo-500 to-indigo-600"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Digital Marketing",
    description: "Result-driven marketing strategies to boost your online presence and conversions.",
    features: [
      "SEO Optimization",
      "Content Strategy",
      "Analytics & Tracking",
      "Conversion Optimization"
    ],
    colorClass: "from-purple-500 to-purple-600"
  }
]

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business goals, target audience, and unique challenges.",
    icon: <Users className="w-5 h-5" />
  },
  {
    number: "02",
    title: "Strategy",
    description: "Develop a comprehensive plan tailored to your startup's needs and budget.",
    icon: <Rocket className="w-5 h-5" />
  },
  {
    number: "03",
    title: "Execution",
    description: "Implement solutions using modern technologies and best practices.",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    number: "04",
    title: "Growth",
    description: "Continuous optimization and support to ensure sustainable growth.",
    icon: <LineChart className="w-5 h-5" />
  }
]

export default function Services() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Subtle background elements - Adjusted for light theme */}
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.03] z-[1]" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] z-0" />
      <div className="absolute top-40 -left-20 w-60 h-60 bg-teal-500/5 rounded-full blur-[80px] z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-[3]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600 mb-4">
            <span className="mr-1 h-2 w-2 rounded-full bg-blue-500"></span>
            <span>Our services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Web Development Solutions for 
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Startups</span>
          </h2>
          
          <p className="text-slate-600 text-lg leading-relaxed">
            Affordable, high-impact web development and digital services tailored for ambitious startups. Launch faster, grow smarter, spend less.
          </p>
        </div>

        {/* Services Cards - Fluid Grid - Updated for light theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100 overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${service.colorClass}`}></div>
              
              <div className="mb-4 relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.colorClass} text-white`}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-slate-800">{service.title}</h3>
              <p className="text-slate-600 mb-5 text-sm">{service.description}</p>
              
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-700">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section - Fluid Timeline - Light theme colors */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-800">Our Process</h3>
            <p className="text-slate-600">A streamlined approach to delivering exceptional results</p>
          </div>
          
          {/* Desktop Process - Flowing Cards */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative pt-16">
                  <div className="absolute -left-2 top-[4.5rem] w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center z-10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 h-full hover:shadow-md transition-all mt-8">
                    <div className="text-sm font-medium text-slate-400 mb-2">{step.number}</div>
                    <h4 className="text-xl font-semibold mb-3 text-slate-800">{step.title}</h4>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Process - Vertical Timeline */}
          <div className="md:hidden relative max-w-md mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative pl-16">
                  <div className="absolute left-6 top-12 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center z-10">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 mt-4">
                    <div className="flex items-center mb-2">
                      <div className="text-sm font-medium text-slate-400 mr-2">{step.number}</div>
                      <h4 className="text-lg font-semibold text-slate-800">{step.title}</h4>
                    </div>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/services">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3"
            >
              Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 