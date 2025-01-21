"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Code2, Paintbrush2, Rocket, LineChart, Users, Globe, Layout } from "lucide-react"
import { useState } from "react"

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
    color: "blue"
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
    color: "gray"
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
    color: "emerald"
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
    color: "amber"
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
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] 
        opacity-10" 
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-4 relative z-10 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Transform Your Startup with Innovative Web Solutions
          </h2>
          <p className="text-gray-200 text-xl leading-relaxed">
            Affordable, high-impact web development and digital services tailored for ambitious startups. Launch faster, grow smarter, spend less.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`h-full p-8 rounded-2xl bg-white/5 border border-${service.color}-500/10 hover:bg-white/10 transition-all duration-300`}>
                <div className={`w-14 h-14 rounded-xl bg-${service.color}-500/10 flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-200 text-base mb-6 leading-relaxed">{service.description}</p>
                <motion.ul 
                  className="space-y-3"
                  initial="hidden"
                  animate={hoveredService === index ? "visible" : "hidden"}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="flex items-center gap-3 text-base text-gray-200"
                    >
                      <div className={`w-2 h-2 rounded-full bg-${service.color}-500`} />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold mb-4">How We Work</h3>
            <p className="text-gray-200 text-xl">
              A proven approach that turns your vision into reality, without breaking the bank
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 h-full">
                  <div className="text-4xl font-bold text-white/30 mb-4">{step.number}</div>
                  <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                  <p className="text-base text-gray-200 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-lg px-8"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 