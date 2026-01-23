import { notFound } from 'next/navigation';
import { MapPin, Phone, Mail, Clock, Code, Palette, Smartphone, Megaphone, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

// Location data with SEO-optimized content
const locationsData = {
  sheffield: {
    name: "Sheffield",
    title: "Website Development Sheffield | Web Design Agency Sheffield | Devora",
    description: "Professional web development and design services in Sheffield. Expert website development for Sheffield businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving South Yorkshire.",
    keywords: [
      "web development Sheffield",
      "web design Sheffield",
      "website development Sheffield",
      "web agency Sheffield",
      "Sheffield web developers",
      "web design South Yorkshire",
      "Sheffield website design",
      "custom website Sheffield",
      "ecommerce Sheffield",
      "digital agency Sheffield",
      "Sheffield web design company"
    ],
    heroTitle: "Website Development Sheffield",
    heroDescription: "Expert web design and development services for Sheffield businesses. We create stunning, high-performance websites that drive results for local companies across South Yorkshire.",
    services: [
      "Custom website design Sheffield",
      "E-commerce development Sheffield",
      "Web application development Sheffield",
      "SEO services Sheffield",
      "Digital marketing Sheffield"
    ],
    area: "South Yorkshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Sheffield",
      "addressRegion": "South Yorkshire",
      "addressCountry": "GB"
    }
  },
  leeds: {
    name: "Leeds",
    title: "Website Development Leeds | Web Design Agency Leeds | Devora",
    description: "Professional web development and design services in Leeds. Expert website development for Leeds businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving West Yorkshire.",
    keywords: [
      "web development Leeds",
      "web design Leeds",
      "website development Leeds",
      "web agency Leeds",
      "Leeds web developers",
      "web design West Yorkshire",
      "Leeds website design",
      "custom website Leeds",
      "ecommerce Leeds",
      "digital agency Leeds"
    ],
    heroTitle: "Website Development Leeds",
    heroDescription: "Professional web design and development services for Leeds businesses. We create stunning, high-performance websites that drive results for companies in West Yorkshire.",
    services: [
      "Custom website design Leeds",
      "E-commerce development Leeds",
      "Web application development Leeds",
      "SEO services Leeds",
      "Digital marketing Leeds"
    ],
    area: "West Yorkshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Leeds",
      "addressRegion": "West Yorkshire",
      "addressCountry": "GB"
    }
  },
  manchester: {
    name: "Manchester",
    title: "Website Development Manchester | Web Design Agency Manchester | Devora",
    description: "Professional web development and design services in Manchester. Expert website development for Manchester businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving Greater Manchester.",
    keywords: [
      "web development Manchester",
      "web design Manchester",
      "website development Manchester",
      "web agency Manchester",
      "Manchester web developers",
      "web design Greater Manchester",
      "Manchester website design",
      "custom website Manchester",
      "ecommerce Manchester",
      "digital agency Manchester"
    ],
    heroTitle: "Website Development Manchester",
    heroDescription: "Expert web design and development services for Manchester businesses. We create stunning, high-performance websites that drive results for companies in Greater Manchester.",
    services: [
      "Custom website design Manchester",
      "E-commerce development Manchester",
      "Web application development Manchester",
      "SEO services Manchester",
      "Digital marketing Manchester"
    ],
    area: "Greater Manchester",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressRegion": "Greater Manchester",
      "addressCountry": "GB"
    }
  },
  birmingham: {
    name: "Birmingham",
    title: "Website Development Birmingham | Web Design Agency Birmingham | Devora",
    description: "Professional web development and design services in Birmingham. Expert website development for Birmingham businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving the Midlands.",
    keywords: [
      "web development Birmingham",
      "web design Birmingham",
      "website development Birmingham",
      "web agency Birmingham",
      "Birmingham web developers",
      "web design Midlands",
      "Birmingham website design",
      "custom website Birmingham",
      "ecommerce Birmingham",
      "digital agency Birmingham"
    ],
    heroTitle: "Website Development Birmingham",
    heroDescription: "Professional web design and development services for Birmingham businesses. We create stunning, high-performance websites that drive results for companies in the Midlands.",
    services: [
      "Custom website design Birmingham",
      "E-commerce development Birmingham",
      "Web application development Birmingham",
      "SEO services Birmingham",
      "Digital marketing Birmingham"
    ],
    area: "West Midlands",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "GB"
    }
  },
  nottingham: {
    name: "Nottingham",
    title: "Website Development Nottingham | Web Design Agency Nottingham | Devora",
    description: "Professional web development and design services in Nottingham. Expert website development for Nottingham businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving Nottinghamshire.",
    keywords: [
      "web development Nottingham",
      "web design Nottingham",
      "website development Nottingham",
      "web agency Nottingham",
      "Nottingham web developers",
      "web design Nottinghamshire",
      "Nottingham website design",
      "custom website Nottingham",
      "ecommerce Nottingham",
      "digital agency Nottingham"
    ],
    heroTitle: "Website Development Nottingham",
    heroDescription: "Expert web design and development services for Nottingham businesses. We create stunning, high-performance websites that drive results for companies in Nottinghamshire.",
    services: [
      "Custom website design Nottingham",
      "E-commerce development Nottingham",
      "Web application development Nottingham",
      "SEO services Nottingham",
      "Digital marketing Nottingham"
    ],
    area: "Nottinghamshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Nottingham",
      "addressRegion": "Nottinghamshire",
      "addressCountry": "GB"
    }
  },
  derby: {
    name: "Derby",
    title: "Website Development Derby | Web Design Agency Derby | Devora",
    description: "Professional web development and design services in Derby. Expert website development for Derby businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving Derbyshire.",
    keywords: [
      "web development Derby",
      "web design Derby",
      "website development Derby",
      "web agency Derby",
      "Derby web developers",
      "web design Derbyshire",
      "Derby website design",
      "custom website Derby",
      "ecommerce Derby",
      "digital agency Derby"
    ],
    heroTitle: "Website Development Derby",
    heroDescription: "Professional web design and development services for Derby businesses. We create stunning, high-performance websites that drive results for companies in Derbyshire.",
    services: [
      "Custom website design Derby",
      "E-commerce development Derby",
      "Web application development Derby",
      "SEO services Derby",
      "Digital marketing Derby"
    ],
    area: "Derbyshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Derby",
      "addressRegion": "Derbyshire",
      "addressCountry": "GB"
    }
  },
  hull: {
    name: "Hull",
    title: "Website Development Hull | Web Design Agency Hull | Devora",
    description: "Professional web development and design services in Hull. Expert website development for Hull businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving East Yorkshire.",
    keywords: [
      "web development Hull",
      "web design Hull",
      "website development Hull",
      "web agency Hull",
      "Hull web developers",
      "web design East Yorkshire",
      "Hull website design",
      "custom website Hull",
      "ecommerce Hull",
      "digital agency Hull"
    ],
    heroTitle: "Website Development Hull",
    heroDescription: "Expert web design and development services for Hull businesses. We create stunning, high-performance websites that drive results for companies in East Yorkshire.",
    services: [
      "Custom website design Hull",
      "E-commerce development Hull",
      "Web application development Hull",
      "SEO services Hull",
      "Digital marketing Hull"
    ],
    area: "East Yorkshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Hull",
      "addressRegion": "East Yorkshire",
      "addressCountry": "GB"
    }
  },
  newcastle: {
    name: "Newcastle",
    title: "Website Development Newcastle | Web Design Agency Newcastle | Devora",
    description: "Professional web development and design services in Newcastle. Expert website development for Newcastle businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving Tyne and Wear.",
    keywords: [
      "web development Newcastle",
      "web design Newcastle",
      "website development Newcastle",
      "web agency Newcastle",
      "Newcastle web developers",
      "web design Tyne and Wear",
      "Newcastle website design",
      "custom website Newcastle",
      "ecommerce Newcastle",
      "digital agency Newcastle"
    ],
    heroTitle: "Website Development Newcastle",
    heroDescription: "Professional web design and development services for Newcastle businesses. We create stunning, high-performance websites that drive results for companies in Tyne and Wear.",
    services: [
      "Custom website design Newcastle",
      "E-commerce development Newcastle",
      "Web application development Newcastle",
      "SEO services Newcastle",
      "Digital marketing Newcastle"
    ],
    area: "Tyne and Wear",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Newcastle",
      "addressRegion": "Tyne and Wear",
      "addressCountry": "GB"
    }
  },
  liverpool: {
    name: "Liverpool",
    title: "Website Development Liverpool | Web Design Agency Liverpool | Devora",
    description: "Professional web development and design services in Liverpool. Expert website development for Liverpool businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving Merseyside.",
    keywords: [
      "web development Liverpool",
      "web design Liverpool",
      "website development Liverpool",
      "web agency Liverpool",
      "Liverpool web developers",
      "web design Merseyside",
      "Liverpool website design",
      "custom website Liverpool",
      "ecommerce Liverpool",
      "digital agency Liverpool"
    ],
    heroTitle: "Website Development Liverpool",
    heroDescription: "Expert web design and development services for Liverpool businesses. We create stunning, high-performance websites that drive results for companies in Merseyside.",
    services: [
      "Custom website design Liverpool",
      "E-commerce development Liverpool",
      "Web application development Liverpool",
      "SEO services Liverpool",
      "Digital marketing Liverpool"
    ],
    area: "Merseyside",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Liverpool",
      "addressRegion": "Merseyside",
      "addressCountry": "GB"
    }
  },
  bradford: {
    name: "Bradford",
    title: "Website Development Bradford | Web Design Agency Bradford | Devora",
    description: "Professional web development and design services in Bradford. Expert website development for Bradford businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving West Yorkshire.",
    keywords: [
      "web development Bradford",
      "web design Bradford",
      "website development Bradford",
      "web agency Bradford",
      "Bradford web developers",
      "web design West Yorkshire",
      "Bradford website design",
      "custom website Bradford",
      "ecommerce Bradford",
      "digital agency Bradford"
    ],
    heroTitle: "Website Development Bradford",
    heroDescription: "Professional web design and development services for Bradford businesses. We create stunning, high-performance websites that drive results for companies in West Yorkshire.",
    services: [
      "Custom website design Bradford",
      "E-commerce development Bradford",
      "Web application development Bradford",
      "SEO services Bradford",
      "Digital marketing Bradford"
    ],
    area: "West Yorkshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Bradford",
      "addressRegion": "West Yorkshire",
      "addressCountry": "GB"
    }
  },
  chesterfield: {
    name: "Chesterfield",
    title: "Website Development Chesterfield | Web Design Agency Chesterfield | Devora",
    description: "Professional web development and design services in Chesterfield. Expert website development for Chesterfield businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving Derbyshire.",
    keywords: [
      "web development Chesterfield",
      "web design Chesterfield",
      "website development Chesterfield",
      "web agency Chesterfield",
      "Chesterfield web developers",
      "web design Derbyshire",
      "Chesterfield website design",
      "custom website Chesterfield",
      "ecommerce Chesterfield",
      "digital agency Chesterfield"
    ],
    heroTitle: "Website Development Chesterfield",
    heroDescription: "Expert web design and development services for Chesterfield businesses. We create stunning, high-performance websites that drive results for companies in Derbyshire.",
    services: [
      "Custom website design Chesterfield",
      "E-commerce development Chesterfield",
      "Web application development Chesterfield",
      "SEO services Chesterfield",
      "Digital marketing Chesterfield"
    ],
    area: "Derbyshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Chesterfield",
      "addressRegion": "Derbyshire",
      "addressCountry": "GB"
    }
  },
  doncaster: {
    name: "Doncaster",
    title: "Website Development Doncaster | Web Design Agency Doncaster | Devora",
    description: "Professional web development and design services in Doncaster. Expert website development for Doncaster businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving South Yorkshire.",
    keywords: [
      "web development Doncaster",
      "web design Doncaster",
      "website development Doncaster",
      "web agency Doncaster",
      "Doncaster web developers",
      "web design South Yorkshire",
      "Doncaster website design",
      "custom website Doncaster",
      "ecommerce Doncaster",
      "digital agency Doncaster"
    ],
    heroTitle: "Website Development Doncaster",
    heroDescription: "Professional web design and development services for Doncaster businesses. We create stunning, high-performance websites that drive results for companies in South Yorkshire.",
    services: [
      "Custom website design Doncaster",
      "E-commerce development Doncaster",
      "Web application development Doncaster",
      "SEO services Doncaster",
      "Digital marketing Doncaster"
    ],
    area: "South Yorkshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Doncaster",
      "addressRegion": "South Yorkshire",
      "addressCountry": "GB"
    }
  },
  rotherham: {
    name: "Rotherham",
    title: "Website Development Rotherham | Web Design Agency Rotherham | Devora",
    description: "Professional web development and design services in Rotherham. Expert website development for Rotherham businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving South Yorkshire.",
    keywords: [
      "web development Rotherham",
      "web design Rotherham",
      "website development Rotherham",
      "web agency Rotherham",
      "Rotherham web developers",
      "web design South Yorkshire",
      "Rotherham website design",
      "custom website Rotherham",
      "ecommerce Rotherham",
      "digital agency Rotherham"
    ],
    heroTitle: "Website Development Rotherham",
    heroDescription: "Expert web design and development services for Rotherham businesses. We create stunning, high-performance websites that drive results for companies in South Yorkshire.",
    services: [
      "Custom website design Rotherham",
      "E-commerce development Rotherham",
      "Web application development Rotherham",
      "SEO services Rotherham",
      "Digital marketing Rotherham"
    ],
    area: "South Yorkshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Rotherham",
      "addressRegion": "South Yorkshire",
      "addressCountry": "GB"
    }
  },
  barnsley: {
    name: "Barnsley",
    title: "Website Development Barnsley | Web Design Agency Barnsley | Devora",
    description: "Professional web development and design services in Barnsley. Expert website development for Barnsley businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving South Yorkshire.",
    keywords: [
      "web development Barnsley",
      "web design Barnsley",
      "website development Barnsley",
      "web agency Barnsley",
      "Barnsley web developers",
      "web design South Yorkshire",
      "Barnsley website design",
      "custom website Barnsley",
      "ecommerce Barnsley",
      "digital agency Barnsley"
    ],
    heroTitle: "Website Development Barnsley",
    heroDescription: "Professional web design and development services for Barnsley businesses. We create stunning, high-performance websites that drive results for companies in South Yorkshire.",
    services: [
      "Custom website design Barnsley",
      "E-commerce development Barnsley",
      "Web application development Barnsley",
      "SEO services Barnsley",
      "Digital marketing Barnsley"
    ],
    area: "South Yorkshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Barnsley",
      "addressRegion": "South Yorkshire",
      "addressCountry": "GB"
    }
  },
  wakefield: {
    name: "Wakefield",
    title: "Website Development Wakefield | Web Design Agency Wakefield | Devora",
    description: "Professional web development and design services in Wakefield. Expert website development for Wakefield businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving West Yorkshire.",
    keywords: [
      "web development Wakefield",
      "web design Wakefield",
      "website development Wakefield",
      "web agency Wakefield",
      "Wakefield web developers",
      "web design West Yorkshire",
      "Wakefield website design",
      "custom website Wakefield",
      "ecommerce Wakefield",
      "digital agency Wakefield"
    ],
    heroTitle: "Website Development Wakefield",
    heroDescription: "Expert web design and development services for Wakefield businesses. We create stunning, high-performance websites that drive results for companies in West Yorkshire.",
    services: [
      "Custom website design Wakefield",
      "E-commerce development Wakefield",
      "Web application development Wakefield",
      "SEO services Wakefield",
      "Digital marketing Wakefield"
    ],
    area: "West Yorkshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Wakefield",
      "addressRegion": "West Yorkshire",
      "addressCountry": "GB"
    }
  },
  huddersfield: {
    name: "Huddersfield",
    title: "Website Development Huddersfield | Web Design Agency Huddersfield | Devora",
    description: "Professional web development and design services in Huddersfield. Expert website development for Huddersfield businesses. Custom web design, e-commerce solutions, and digital marketing. Based in Sheffield, serving West Yorkshire.",
    keywords: [
      "web development Huddersfield",
      "web design Huddersfield",
      "website development Huddersfield",
      "web agency Huddersfield",
      "Huddersfield web developers",
      "web design West Yorkshire",
      "Huddersfield website design",
      "custom website Huddersfield",
      "ecommerce Huddersfield",
      "digital agency Huddersfield"
    ],
    heroTitle: "Website Development Huddersfield",
    heroDescription: "Professional web design and development services for Huddersfield businesses. We create stunning, high-performance websites that drive results for companies in West Yorkshire.",
    services: [
      "Custom website design Huddersfield",
      "E-commerce development Huddersfield",
      "Web application development Huddersfield",
      "SEO services Huddersfield",
      "Digital marketing Huddersfield"
    ],
    area: "West Yorkshire",
    schemaLocation: {
      "@type": "PostalAddress",
      "addressLocality": "Huddersfield",
      "addressRegion": "West Yorkshire",
      "addressCountry": "GB"
    }
  }
};

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = locationsData[resolvedParams.slug as keyof typeof locationsData];

  if (!location) {
    return {
      title: 'Location Not Found',
      description: 'The requested location could not be found.'
    };
  }

  return {
    title: location.title,
    description: location.description,
    keywords: location.keywords,
    alternates: {
      canonical: `https://www.devora.co.uk/locations/${resolvedParams.slug}`,
    },
    openGraph: {
      title: location.title,
      description: location.description,
      url: `https://www.devora.co.uk/locations/${resolvedParams.slug}`,
      type: 'website',
      locale: 'en_GB',
      images: [
        {
          url: "/devora-office.png",
          width: 1200,
          height: 630,
          alt: `Devora - Web Design & Development Agency serving ${location.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: location.title,
      description: location.description,
      images: ["/devora-office.png"],
      creator: "@devora",
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((slug) => ({
    slug,
  }));
}

export default async function LocationPage({ params }: LocationPageProps) {
  const resolvedParams = await params;
  const location = locationsData[resolvedParams.slug as keyof typeof locationsData];

  if (!location) {
    notFound();
  }

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: `Custom-built websites and web applications for ${location.name} businesses.`,
      features: ["Responsive Design", "Performance Optimization", "Modern Technologies", "Scalable Architecture"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: `Beautiful, intuitive interfaces that engage users and drive conversions in ${location.name}.`,
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Smartphone,
      title: "Web Applications",
      description: `Progressive web applications and responsive platforms that work across all devices.`,
      features: ["Cross-Platform", "Offline Support", "Push Notifications", "App-like Experience"]
    },
    {
      icon: Palette,
      title: "Branding",
      description: `Strategic brand identity and design that reflects your ${location.name} business vision.`,
      features: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: `Growth-focused marketing strategies to get your ${location.name} business online.`,
      features: ["SEO Optimization", "Content Marketing", "Social Media", "PPC Advertising"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: `Keep your website running smoothly with regular maintenance and support.`,
      features: ["Security Updates", "Performance Monitoring", "Content Updates", "Technical Support"]
    },
  ];

  // Structured Data for Local SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.devora.co.uk/#organization",
        "name": "Devora",
        "url": "https://www.devora.co.uk",
        "logo": "https://www.devora.co.uk/devora-bw.png",
        "description": "Award-winning web design and development agency specialising in custom digital solutions for start-ups.",
        "address": location.schemaLocation,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+44-1234-567890",
          "contactType": "Customer Support",
          "email": "hello@devora.co.uk"
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://www.devora.co.uk/locations/${resolvedParams.slug}#webpage`,
        "url": `https://www.devora.co.uk/locations/${resolvedParams.slug}`,
        "name": location.title,
        "description": location.description,
        "isPartOf": {
          "@id": "https://www.devora.co.uk/#website"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.devora.co.uk/devora-office.png"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": `Devora - ${location.name} Web Development`,
        "description": location.description,
        "address": location.schemaLocation,
        "url": `https://www.devora.co.uk/locations/${resolvedParams.slug}`,
        "telephone": "+44-1234-567890",
        "email": "hello@devora.co.uk",
        "areaServed": location.area,
        "serviceType": ["Web Development", "Web Design", "Digital Marketing"]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] bg-primary text-primary-foreground py-12 md:py-16 px-6 mt-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"></div>

          {/* Content Container */}
          <div className="relative z-10 container mx-auto">
            <div className="max-w-6xl mx-auto">
              {/* Breadcrumb */}
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-light mb-8 group"
                aria-label="Back to locations"
              >
                <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                <span>Back to locations</span>
              </Link>

              {/* Main headline */}
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary-foreground/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-foreground/10 flex items-center justify-center rounded-xl">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-primary-foreground/70 text-sm font-light uppercase tracking-wider">
                    {location.area}
                  </div>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tighter mb-4 text-primary-foreground">
                  {location.heroTitle}
                </h1>

                <p className="text-base md:text-lg text-primary-foreground/90 max-w-3xl font-light leading-relaxed mb-8">
                  {location.heroDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/#contact">
                    <Button size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 font-light gap-2">
                      Get in touch
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/locations">
                    <Button size="lg" variant="outline" className="rounded-full border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-light">
                      View all locations
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background px-4 md:px-6">
          <div className="container mx-auto">
            <div className="mb-12 md:mb-16">
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-light mb-6">Our services in {location.name}</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight mb-6">
                What We Offer
              </h2>
              <p className="text-lg text-muted-foreground font-light max-w-2xl">
                Professional web development and design services tailored specifically for businesses in {location.name} and the surrounding {location.area} area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-card border border-border hover:border-primary/50 transition-all duration-300 p-6 rounded-2xl group">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-light mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-secondary/5 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight mb-6">
                Why Choose Devora in {location.name}?
              </h2>
              <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                We're based in Sheffield but serve businesses across the UK with local knowledge of the {location.name} area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Local Expertise</h3>
                <p className="text-muted-foreground font-light">
                  Understanding of the local {location.name} market and business landscape.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fast Turnaround</h3>
                <p className="text-muted-foreground font-light">
                  Quick project delivery without compromising on quality or attention to detail.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Ongoing Support</h3>
                <p className="text-muted-foreground font-light">
                  Continuous support and maintenance to keep your website performing optimally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-primary-foreground mb-6 leading-tight tracking-tight">
              Ready to grow your {location.name} business online?
            </h2>
            <p className="text-lg text-primary-foreground/90 font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business with web design and development solutions in {location.name}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 font-light gap-2">
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/locations">
                <Button size="lg" className="rounded-full border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-light">
                  View all locations
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Footer />
    </div>
  );
}