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
import Script from 'next/script';

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
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Devora - Web Design & Development for Startups",
            "url": "https://www.devora.co.uk/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.devora.co.uk/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "sameAs": [
              "https://twitter.com/devora",
              "https://www.linkedin.com/company/devora/",
              "https://www.instagram.com/devora/"
            ]
          })
        }}
      />
      
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Devora",
            "url": "https://www.devora.co.uk/",
            "logo": "https://www.devora.co.uk/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+44-XXX-XXXX-XXX",
              "contactType": "customer service"
            }
          })
        }}
      />
      
      <div className="min-h-screen">
        <div className="pb-8 md:pb-12 lg:pb-24 pt-10 md:pt-0 lg:pt-0">
          {/* Hero Section - Dark */}
          <DynamicHero />
          
          {/* Services Section - White */}
          <div className="bg-white">
            <DynamicServices />
          </div>
          
          {/* Portfolio Section - Dark */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950">
            <DynamicPortfolio />
          </div>
          
          {/* Testimonials Section - White */}
          <div className="bg-white">
            <DynamicTestimonials />
          </div>
          
          {/* FAQ Section - Dark */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950">
            <DynamicFAQ />
          </div>
          
          {/* CTA Section - White with accent */}
          <section className="py-16 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                    Ready to Transform Your Web Presence?
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Let's discuss your project and create a tailored solution that helps your business grow.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/project-inquiry">
                      <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full sm:w-auto bg-transparent border-slate-300 text-slate-800 hover:bg-slate-100">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/office-meeting1.jpg"
                    alt="Team meeting discussing web development project"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
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