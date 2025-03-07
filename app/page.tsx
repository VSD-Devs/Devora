import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Globe, 
  Code, 
  Layout, 
  LineChart, 
  MessageSquare, 
  Rocket, 
  Star, 
  Users, 
  Plus,
  Briefcase,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from "next/image";

// Simple loading component
const Loading = () => (
  <div className="min-h-[300px] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Optimized dynamic imports with reduced loading states
const DynamicHero = dynamic(() => import('@/components/Hero'), {
  loading: () => <Loading />,
  ssr: false // Disable SSR for faster initial load
});

const DynamicServices = dynamic(() => import('@/components/Services'), {
  loading: () => <Loading />,
  ssr: false
});

const DynamicPortfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <Loading />,
  ssr: false
});

const DynamicTestimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <Loading />,
  ssr: false
});

const DynamicFAQ = dynamic(() => import('../components/FAQ'), {
  loading: () => <Loading />,
  ssr: false
});

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <DynamicHero />
      
      {/* Services Section */}
      <DynamicServices />
      
      {/* Stats Section - Fluid Design */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.03] z-[1]" />
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px] z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-[3]">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 backdrop-blur-sm mb-4">
              <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
              <span>Our impact</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Delivering <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">measurable results</span>
            </h2>
            
            <p className="text-white/70 text-lg">
              We've helped startups across various industries achieve their digital goals
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <DynamicPortfolio />
      
      {/* Features Section - Fluid Design */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-[3]">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm text-slate-600 backdrop-blur-sm mb-4">
              <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
              <span>Why choose us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              The <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Devora</span> difference
            </h2>
            
            <p className="text-slate-600 text-lg">
              What sets us apart from other web development agencies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {detailedServices.slice(0, 4).map((service, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-2xl transform group-hover:scale-[1.03] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 overflow-hidden group-hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-teal-600">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 text-sm">{service.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center text-teal-600 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2"></div>
                      {getFeatureFromTitle(service.title)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/about">
              <Button 
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6 py-6"
              >
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <DynamicTestimonials />
      
      {/* FAQ Section */}
      <DynamicFAQ />
      
      {/* CTA Section - Fluid Design */}
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
                    Let's work together to create something extraordinary for your business.
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
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
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

const getFeatureFromTitle = (title: string) => {
  switch (title) {
    case 'Brand Strategy':
      return 'Cohesive brand identity development';
    case 'Web Development':
      return 'Performance-optimized codebases';
    case 'Social Media Management':
      return 'Engagement-focused content strategy';
    case 'SEO Optimization':
      return 'Data-driven search ranking improvements';
    default:
      return 'Industry-leading expertise';
  }
};