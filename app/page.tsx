"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, Code, Globe, Layout, LineChart, MessageSquare, Rocket, Star, Users, Plus } from "lucide-react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does a typical project cost?",
      answer: "Our projects start from £500, with pricing dependent on project scope and requirements. We believe in transparent pricing and offer flexible payment plans tailored for startups. Whether you need a simple landing page or a complex web application, we'll provide a clear, detailed quote with no hidden fees."
    },
    {
      question: "What is your development process?",
      answer: "We follow a collaborative, agile approach with 4 key phases: Discovery (understanding your goals and requirements), Design (creating user-friendly interfaces), Development (building with cutting-edge tech), and Deployment (thorough testing and launch). You'll receive regular updates and have full visibility throughout the process."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on complexity. Simple websites can be completed in 1-2 weeks, while more complex applications might take 4-8 weeks. We'll provide a detailed timeline during our initial consultation and keep you updated on progress throughout the project."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We understand that your digital presence needs continuous attention. We offer flexible maintenance packages that include updates, security monitoring, performance optimization, and technical support. Our goal is to be your long-term technology partner."
    },
    {
      question: "What technologies do you use?",
      answer: "We specialize in modern web technologies including React, Next.js, TypeScript, and Node.js. Our tech stack is carefully chosen to ensure your project is fast, secure, and scalable. We stay up-to-date with the latest developments to provide you with the best solutions."
    },
    {
      question: "Do you help with marketing and SEO?",
      answer: "Absolutely! Every website we build includes essential SEO optimization. We also offer comprehensive digital marketing services including keyword research, content strategy, analytics setup, and performance tracking. We'll help you attract and convert your target audience."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] 
        opacity-10" 
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-gray-200">
              Everything you need to know about our services and process
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 border border-white/10"
                >
                  <span className="text-base md:text-lg font-semibold text-left text-white">{faq.question}</span>
                  <Plus
                    className={`w-5 h-5 text-white transition-transform duration-200 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ 
                      height: { duration: 0.15, ease: "easeOut" },
                      opacity: { duration: 0.1, ease: "linear" }
                    }}
                    className="p-4 md:p-6 bg-white/10 rounded-b-lg text-gray-100 border-x border-b border-white/10"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.015]" />
        {/* Gradient orbs */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-blue-100/30" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-base md:text-xl mb-8 text-gray-600">
              Let's work together to create something extraordinary.
            </p>
            <Link href="/project-inquiry">
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 px-8 py-6 text-lg"
              >
                Start Your Project <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Digital Strategy",
    description:
      "We craft comprehensive digital strategies that align with your business goals and drive measurable results.",
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Web Design",
    description:
      "Beautiful, responsive websites that engage your audience and deliver exceptional user experiences.",
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Digital Marketing",
    description:
      "Data-driven marketing campaigns that increase visibility and drive conversions.",
  },
];

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "100+", label: "Active Clients" },
];

const detailedServices = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Brand Strategy",
    description:
      "We help define your brand's voice, vision, and values to create a strong market presence.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description:
      "Custom web solutions built with the latest technologies for optimal performance.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Social Media Management",
    description:
      "Strategic social media campaigns that engage your audience and build community.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that improve your visibility and drive organic traffic.",
  },
];

const testimonials = [
  {
    content:
      "Working with Devora has transformed our digital presence. Their innovative approach and attention to detail exceeded our expectations.",
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    content:
      "The team's creativity and strategic thinking helped us achieve our marketing goals. They're truly partners in our success.",
    name: "Michael Chen",
    position: "Marketing Director, InnovateCo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    content:
      "Their expertise in digital marketing has helped us reach new audiences and grow our business significantly.",
    name: "Emily Rodriguez",
    position: "Founder, GrowthLabs",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
];