"use client"

import { Button } from "./ui/button"
import { ArrowRight, Code2, Paintbrush2, Rocket, LineChart, Users, Globe, Layout } from "lucide-react"

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
    colorClass: "bg-blue-500"
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
    colorClass: "bg-red-500"
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
    colorClass: "bg-orange-500"
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
    colorClass: "bg-yellow-500"
  }
]

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business goals, target audience, and unique challenges.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Develop a comprehensive plan tailored to your startup's needs and budget.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Implement solutions using modern technologies and best practices.",
  },
  {
    number: "04",
    title: "Growth",
    description: "Continuous optimization and support to ensure sustainable growth.",
  }
]

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 relative overflow-hidden">
      {/* Background gradients - Static */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/30 z-[1]" />

      {/* Grid pattern overlay - Static */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 z-[2]" />

      <div className="container mx-auto px-4 relative z-[30] py-20 mt-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Web Development Solutions for Startups and Small Businesses
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Affordable, high-impact web development and digital services tailored for ambitious startups. Launch faster, grow smarter, spend less.
          </p>
        </div>

        {/* Services Grid - Static */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 mb-12 md:mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group"
            >
              <div className="h-full p-2.5 sm:p-4 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl bg-white/95 border border-gray-200 shadow-sm bg-gradient-to-br from-white to-gray-50">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl ${service.colorClass}/15 flex items-center justify-center mb-2 sm:mb-4 md:mb-6 border border-gray-100`}>
                  <div className={`${service.colorClass.replace('bg-', 'text-')} w-5 h-5 sm:w-6 sm:h-6`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1.5 sm:mb-3 md:mb-4 text-gray-800 line-clamp-1 sm:line-clamp-none">{service.title}</h3>
                <p className="text-sm sm:text-sm md:text-base mb-2 sm:mb-4 md:mb-6 leading-relaxed line-clamp-2 sm:line-clamp-none">{service.description}</p>
                <ul className="hidden sm:block space-y-1.5 sm:space-y-2 md:space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-sm sm:text-sm md:text-base text-gray-700"
                    >
                      <div className={`w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full ${service.colorClass}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Mobile features as tags */}
                <div className="flex flex-wrap gap-1.5 sm:hidden mt-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center text-xs px-2 py-0.5 bg-gray-50 text-gray-600 rounded gap-1"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${service.colorClass}`} />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section - Simplified */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">How We Work</h3>
            <p className="text-gray-600 text-lg md:text-xl">
              A proven approach that turns your vision into reality, without breaking the bank
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 h-full">
                  <div className="text-3xl md:text-4xl font-bold text-gray-300 mb-3 md:mb-4">{step.number}</div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">{step.title}</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Simplified */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-black text-white text-lg px-8"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
} 