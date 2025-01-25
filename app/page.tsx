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
  Briefcase 
} from "lucide-react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Simple loading component
const Loading = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
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
    <div className="bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Static grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

      {/* Static gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="relative z-10">
        <DynamicHero />
        <DynamicServices />
        <DynamicPortfolio />
        <DynamicTestimonials />
        <DynamicFAQ />
      </div>

      {/* Static CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.015]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-blue-100/30" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-base md:text-xl mb-8 text-gray-600">
              Let's work together to create something extraordinary.
            </p>
            <Link href="/project-inquiry">
              <Button
                size="lg"
                className="bg-gray-900 text-white px-8 py-6 text-lg"
              >
                Start Your Project <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
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