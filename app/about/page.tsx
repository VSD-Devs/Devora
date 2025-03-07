"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Rocket, Users, Star, Shield, Sparkles, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] z-0" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-[3]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm mb-6">
              <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
              <span>Web Development Experts</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Meet</span>
              <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent"> Devora</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
              Empowering startups with affordable, high-impact web solutions that drive growth and success.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {[
                { label: "Projects Completed", value: "12+" },
                { label: "Happy Clients", value: "12+" },
                { label: "Years Experience", value: "3+" },
                { label: "Team Members", value: "2" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
        <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-[3]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm text-slate-600 backdrop-blur-sm">
                <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
                <span>Our story</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our Story & <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Mission</span>
              </h2>
              
              <div className="space-y-4 text-slate-600">
                <p className="text-lg leading-relaxed">
                  Born from years of freelance experience, Devora unites passionate developers who understand startup challenges in the digital landscape.
                </p>
                <p className="text-lg leading-relaxed">
                  We're committed to making professional web development accessible to ambitious startups, delivering enterprise-quality websites at startup-friendly prices.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/project-inquiry">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white border-0 rounded-xl px-6 py-6 font-medium text-base"
                  >
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300 rounded-xl px-6 py-6 font-medium text-base transition-colors"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white rounded-xl p-8 border border-slate-100 shadow-sm">
                <div className="space-y-5">
                  <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-teal-500/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Enterprise Quality</h3>
                      <p className="text-sm text-slate-600">Professional grade development</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-teal-500/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Innovation First</h3>
                      <p className="text-sm text-slate-600">Modern tech solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-teal-500/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Client-Focused</h3>
                      <p className="text-sm text-slate-600">Your success is our priority</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-[3]">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm text-slate-600 backdrop-blur-sm mb-4">
              <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
              <span>What drives us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Values</span>
            </h2>
            
            <p className="text-slate-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Star className="w-6 h-6 text-amber-500" />,
                title: "Excellence",
                desc: "Committed to delivering outstanding results that exceed expectations."
              },
              {
                icon: <Users className="w-6 h-6 text-blue-500" />,
                title: "Collaboration",
                desc: "Working closely with clients to bring their vision to life."
              },
              {
                icon: <Rocket className="w-6 h-6 text-purple-500" />,
                title: "Innovation",
                desc: "Staying ahead with cutting-edge technologies and approaches."
              }
            ].map((value, i) => (
              <div key={i} className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100 overflow-hidden">
                {/* Subtle gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/30 to-teal-500/30"></div>
                
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-slate-900">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-500 to-teal-400 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.05] z-[1]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-[100px] z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-[3]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Ready to transform your digital presence?
                  </h2>
                  <p className="text-white/80 text-lg mb-6">
                    Let's discuss how our team can help bring your startup's vision to life with a website that drives growth.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-white/90 group">
                      <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-center text-white/90 group">
                      <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span>Tailored solutions for your budget</span>
                    </li>
                    <li className="flex items-center text-white/90 group">
                      <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span>Ongoing support and maintenance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex-shrink-0 flex flex-col gap-4">
                  <Link href="/project-inquiry" className="w-full">
                    <Button 
                      size="lg" 
                      className="w-full bg-white text-blue-600 hover:bg-white/90 rounded-xl px-6 py-6 font-medium text-base shadow-lg hover:shadow-xl transition-all"
                    >
                      Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-white text-white hover:bg-white/10 hover:border-white/60 rounded-xl px-6 py-6 font-medium text-base transition-colors"
                    >
                      Schedule a Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 