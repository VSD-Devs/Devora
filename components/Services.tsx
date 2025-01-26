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

      <div className="container mx-auto px-4 relative z-[30] py-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Web Development Solutions for Startups and Small Businesses
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Affordable, high-impact web development and digital services tailored for ambitious startups. Launch faster, grow smarter, spend less.
          </p>
        </div>

        {/* Services Grid - Static */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-white/95 border border-gray-200 shadow-sm bg-gradient-to-br from-white to-gray-50">
                <div className={`w-14 h-14 rounded-xl ${service.colorClass}/15 flex items-center justify-center mb-6 border border-gray-100`}>
                  <div className={`${service.colorClass.replace('bg-', 'text-')}`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-700 text-base mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-base text-gray-700"
                    >
                      <div className={`w-2 h-2 rounded-full ${service.colorClass}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section - Simplified */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">How We Work</h3>
            <p className="text-gray-600 text-xl">
              A proven approach that turns your vision into reality, without breaking the bank
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="p-8 rounded-2xl bg-white border border-gray-100 h-full">
                  <div className="text-4xl font-bold text-gray-300 mb-4">{step.number}</div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h4>
                  <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
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