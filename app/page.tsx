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
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Devora',
            url: 'https://devora.dev',
            description: 'Professional web development services for startups and growing businesses',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://devora.dev/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            },
            mainEntity: {
              '@type': 'ProfessionalService',
              name: 'Devora',
              image: 'https://devora.dev/DEVORA.png',
              '@id': 'https://devora.dev',
              url: 'https://devora.dev',
              telephone: 'YOUR-PHONE-NUMBER',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'UK'
              },
              priceRange: '£££',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday'
                ],
                opens: '09:00',
                closes: '17:00'
              },
              sameAs: [
                'https://twitter.com/devoradev',
                'https://linkedin.com/company/devora',
                'https://github.com/devora'
              ]
            }
          })
        }}
      />
      
      <div className="min-h-screen">
        <div className="space-y-6 pb-8 md:pb-12 lg:pb-24 pt-10 md:pt-0 lg:pt-0">
          {/* Hero Section */}
          <DynamicHero />
          
          {/* Services Section */}
          <DynamicServices />
          
          {/* Portfolio Section */}
          <DynamicPortfolio />
          
          {/* Testimonials Section */}
          <DynamicTestimonials />
          
          {/* FAQ Section */}
          <DynamicFAQ />
          
          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                    Ready to Transform Your Web Presence?
                  </h2>
                  <p className="text-slate-300 mb-6">
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
                      <Button variant="outline" className="w-full sm:w-auto bg-transparent border-slate-700 text-white hover:bg-slate-800">
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