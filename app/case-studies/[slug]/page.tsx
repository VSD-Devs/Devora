import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import React from "react"

const caseStudies: Record<string, any> = {
  "envirotech-plumbing": {
    title: "EnviroTech Emergency Plumbing",
    subtitle: "24/7 Emergency Plumbing Service Platform",
    client: "EnviroTech",
    category: "Service Platform",
    duration: "3 months",
    year: "2024",
    challenge:
      "EnviroTech, a leading emergency plumbing service provider, was struggling with outdated phone-based booking systems that couldn't handle peak demand. Customer wait times exceeded 30 minutes, bookings were being lost, and field engineers had no real-time visibility of job locations. Their competitors were offering instant quotes while they manually calculated prices, losing business to faster, more convenient platforms.",
    challenges: [
      "24/7 emergency booking system with real-time availability",
      "Instant quote calculator for various plumbing services",
      "Mobile-first design for customers in emergency situations",
      "Integration with existing business management systems",
      "Clear service area mapping and technician dispatch",
    ],
    solution:
      "We built a comprehensive web platform that revolutionized their operations. Customers now submit emergency requests through an intuitive interface that captures property details, problem type, and location. Our system instantly matches available engineers to jobs based on proximity using GPS tracking, calculates dynamic pricing based on demand and complexity, and sends real-time SMS/email confirmations. Engineers receive job alerts on their mobile devices with full property information, can update job status in real-time (dispatched, en-route, completed), and customers track engineer arrival with live location updates. The system integrates with their accounting software for automatic invoicing.",
    solutionPhases: [
      {
        title: "Discovery & Research",
        points: [
          "Conducted user interviews with customers who had experienced plumbing emergencies to understand pain points and expectations",
          "User journey mapping",
          "Competitive analysis and technical requirements definition",
        ],
      },
      {
        title: "Design & Prototyping",
        points: [
          "Created a calming, professional interface that guides stressed customers through the booking process efficiently",
          "Wireframes and UI design system",
          "Interactive prototypes and user testing",
        ],
      },
      {
        title: "Development & Integration",
        points: [
          "Built a robust booking system with real-time availability and quote calculator",
          "Business management integration and API connections",
          "Mobile-responsive web application with admin dashboard",
        ],
      },
      {
        title: "Testing & Launch",
        points: [
          "Comprehensive testing across devices and emergency booking simulations",
          "Quality assurance and performance optimization",
          "Successful launch with team training",
        ],
      },
    ],
    results: {
      "Booking Response Time": "From 30 mins to 45 seconds",
      "Job Completion Rate": "+92% increase in same-day repairs",
      "Customer Satisfaction": "4.8/5 stars (up from 3.2)",
      "Revenue Growth": "+£180k in first year",
      "Operational Efficiency": "Missed calls reduced from 23% to 2%",
    },
    testimonial: {
      quote: "The new platform has revolutionised how we handle emergency calls. Customers can book instantly, and our dispatch system is incredibly efficient. We've seen a massive increase in bookings and our team is thrilled with the efficiency gains.",
      author: "James Mitchell",
      role: "Operations Director, EnviroTech",
    },
    services: ["Full-Stack Web Development", "Mobile-Responsive Design", "Real-Time GPS Integration", "Payment Processing", "SMS/Email Notifications"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Google Maps API", "Stripe", "Twilio", "Socket.io", "Vercel"],
  },
  "nl-education": {
    title: "NL Education",
    subtitle: "Teacher Recruitment Platform",
    client: "NL Education",
    category: "Recruitment Platform",
    duration: "4 months",
    year: "2024",
    challenge:
      "NL Education faced a critical challenge in their recruitment process. Schools across England were manually advertising vacancies in multiple places, receiving hundreds of unsuitable applications, and struggling to identify the right match quickly. Teachers were applying to dozens of roles, creating a time-consuming vetting process. The average time-to-hire was 8-12 weeks, and many positions remained unfilled mid-term, disrupting student learning.",
    challenges: [
      "Inefficient job matching between teachers and schools",
      "Hundreds of unsuitable applications per vacancy",
      "Average time-to-hire of 8-12 weeks",
      "Limited visibility into candidate qualifications and fit",
      "Need for AI-powered matching algorithm",
    ],
    solution:
      "We developed a sophisticated two-sided marketplace with AI-powered matching. Schools create detailed job profiles including curriculum areas, student demographics, school values, and working environment. Teachers build comprehensive profiles showcasing qualifications, experience, specializations, and preferences. Our intelligent matching algorithm analyzes compatibility scores across 20+ factors, not just skills, but cultural fit and career aspirations. Teachers see only highly relevant opportunities, schools see pre-screened candidates. Built-in video interview tools, document verification, and reference checks streamline vetting. Schools can post, review candidates, and make offers all within the platform. Real-time notifications keep both parties updated throughout the hiring process.",
    solutionPhases: [
      {
        title: "Platform Architecture",
        points: [
          "Designed two-sided marketplace with distinct teacher and school interfaces",
          "Built AI-powered matching algorithm analyzing 20+ compatibility factors",
          "Created admin dashboard for platform management and analytics",
        ],
      },
      {
        title: "Core Features",
        points: [
          "Video interview integration for remote assessments",
          "Document verification system for qualifications",
          "Reference checking workflow and communication tools",
          "Real-time notifications and status tracking",
        ],
      },
      {
        title: "Integration & Optimization",
        points: [
          "Integrated with school management systems for synchronization",
          "Built comprehensive analytics dashboard",
          "Implemented advanced search and filtering",
          "Created mobile-responsive experience for both platforms",
        ],
      },
      {
        title: "Launch & Support",
        points: [
          "Onboarded 200+ schools and 1,200+ teachers",
          "Provided ongoing algorithm optimization",
          "Continuous feature development based on user feedback",
        ],
      },
    ],
    results: {
      "Time-to-Hire": "Reduced from 8-12 weeks to 2-3 weeks",
      "Application Quality": "+87% improvement in suitable candidates",
      "School Satisfaction": "94% would recommend the platform",
      "Teachers Placed": "500+ successful placements in year one",
      "Platform Adoption": "200+ active schools, 1,200+ registered teachers",
    },
    testimonial: {
      quote: "The platform has transformed our hiring process. We now find the right teachers much faster and the matching algorithm really understands what we're looking for. Teachers love the personalized opportunities.",
      author: "Sarah Thompson",
      role: "Director of Recruitment, NL Education",
    },
    services: ["Full-Stack Platform Development", "Matching Algorithm", "Video Integration", "Admin Dashboard", "Real-Time Notifications"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Machine Learning", "Stripe", "AWS S3", "Socket.io", "TensorFlow"],
  },
  "lr-talent": {
    title: "LR Talent",
    subtitle: "Executive & HR Recruitment",
    client: "LR Talent",
    category: "Recruitment Agency",
    duration: "3 months",
    year: "2024",
    challenge:
      "LR Talent, a boutique recruitment agency, was competing against larger firms with bigger marketing budgets. Their website was static and didn't reflect their personalized, founder-led approach. Candidates couldn't understand the difference between them and generic job boards, employers didn't realize the value of their deep industry relationships and careful vetting process. They were losing opportunities to online platforms and couldn't showcase their track record effectively.",
    challenges: [
      "Static website not reflecting personalised approach",
      "Inability to differentiate from generic job boards",
      "Hidden track record of successful placements",
      "Limited visibility into founder-led recruitment methodology",
      "No way for candidates and employers to connect directly",
    ],
    solution:
      "We created a modern, personality-driven platform that tells LR Talent's story. The homepage emphasises their unique value: founder-led search, deep relationships with top companies, and hand-selected candidates only. A comprehensive 'For Candidates' section allows candidates to submit CVs, specify salary expectations, and see matching opportunities curated by the team. An 'For Employers' section lets companies post vacancies and connects them directly to LR Talent's consultants for personalized searches. We integrated a candidate portfolio showcasing successful placements and testimonials from both companies and placed professionals. A secure dashboard lets clients track active searches, review shortlisted candidates, and manage the hiring process. The design emphasises trust, professionalism, and personal relationships, differentiating them from impersonal job boards.",
    solutionPhases: [
      {
        title: "Brand Strategy",
        points: [
          "Developed narrative around founder-led, relationship-focused recruitment",
          "Created distinct messaging for candidates vs employers",
          "Designed visual identity emphasizing trust and professionalism",
        ],
      },
      {
        title: "Candidate Portal",
        points: [
          "CV submission and profile building system",
          "Salary expectation and preference configuration",
          "Curated opportunity recommendations from consultants",
          "Direct messaging with LR Talent consultants",
        ],
      },
      {
        title: "Employer Portal",
        points: [
          "Vacancy posting and management system",
          "Shortlist management and candidate review",
          "Direct access to LR Talent consultants",
          "Secure dashboard for tracking active searches",
        ],
      },
      {
        title: "Portfolio & Trust Building",
        points: [
          "Showcase of successful placements with metrics",
          "Testimonials from both employers and placed professionals",
          "Success stories demonstrating ROI",
          "SEO-optimised content establishing thought leadership",
        ],
      },
    ],
    results: {
      "Qualified Inquiries": "+240% increase in candidate applications",
      "Client Engagement": "+165% more employer inquiries",
      "Placement Success Rate": "Increased to 78% (vs. industry average 52%)",
      "Average Fee Revenue": "+£85k additional revenue per consultant annually",
      "Brand Recognition": "Established thought leadership in HR recruitment",
    },
    testimonial: {
      quote: "LR Talent's platform has been a game-changer for us. The personalized approach and direct access to their consultants has made finding the right talent effortless. We've filled positions we thought would be difficult 3x faster.",
      author: "Michael Chen",
      role: "Head of HR, Tech Startup",
    },
    services: ["Bespoke Web Design", "Candidate Management System", "Client Portal", "SEO Optimization", "Brand Strategy"],
    technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Supabase Auth", "Stripe"],
  },
  "rectify": {
    title: "Rectify International",
    subtitle: "Energy Sector Recruitment & Consultancy",
    client: "Rectify International",
    category: "B2B Recruitment",
    duration: "4 months",
    year: "2024",
    challenge:
      "Rectify International specializes in recruiting highly skilled engineers and consultants for the energy sector. Their old website didn't communicate their deep sector expertise, and potential candidates didn't realize the caliber of projects Rectify sources. Energy companies searching for hard-to-find talent (offshore engineers, renewable specialists, compliance experts) couldn't easily express their specific needs. Rectify was losing opportunities to competitors with better web presence, and their extensive project portfolio was hidden from view.",
    challenges: [
      "Generic website not highlighting specialised expertise",
      "Hidden portfolio of 50+ successful projects",
      "Difficulty attracting specialised energy sector talent",
      "No clear differentiation from generic recruiters",
      "Energy companies couldn't express complex technical requirements",
    ],
    solution:
      "We built a sector-specific recruitment platform showcasing Rectify's deep expertise and track record. The design features an impressive portfolio of 50+ successfully completed projects, each detailing the challenge, solution, and impact (e.g., 'Recruited 12-person offshore wind farm team in 6 weeks'). Dedicated sections break down recruitment specialties: Upstream Oil & Gas, Renewable Energy, Nuclear, Infrastructure, and Compliance. A 'Recruit Me' section lets professionals upload CVs, specify their background, and opt into specific job categories. Companies post vacancies with detailed descriptions of technical requirements, location, and project scope. The platform includes case studies of successful placements (anonymized) showing salary ranges and career progression for placed candidates. A consultancy blog shares insights on industry trends, visa sponsorship, and career development, establishing Rectify as sector thought leaders.",
    solutionPhases: [
      {
        title: "Sector-Specific Design",
        points: [
          "Created dedicated landing pages for each energy sector",
          "Designed technical portfolio showcase with detailed case studies",
          "Built industry-focused visual identity and messaging",
        ],
      },
      {
        title: "Project Portfolio",
        points: [
          "Documented 50+ successful project case studies",
          "Highlighted technical challenges and solutions",
          "Displayed impact metrics and timelines",
          "Showcased salary ranges and career progression",
        ],
      },
      {
        title: "Recruitment Tools",
        points: [
          "Professional CV upload and profile building",
          "Job category filtering by specialty",
          "Vacancy posting with technical requirements",
          "Candidate-to-consultant matching system",
        ],
      },
      {
        title: "Thought Leadership",
        points: [
          "Technical blog with industry insights",
          "Visa sponsorship guidance and resources",
          "Career development content",
          "Industry trends and market analysis",
        ],
      },
    ],
    results: {
      "Qualified Candidates": "+195% increase in specialised applicants",
      "Enterprise Clients": "Attracted 8 new Fortune 500 energy companies",
      "Placement Velocity": "Reduced time-to-placement from 4-6 weeks to 10-14 days",
      "Average Fee Value": "+£42k increase in average contract value",
      "Market Positioning": "Established as 'go-to' recruiter for energy specialists",
    },
    testimonial: {
      quote: "Rectify's platform is exactly what we needed. Finding specialised offshore engineers is challenging, but their targeted approach and deep expertise in the energy sector has been invaluable. They understand our technical requirements in ways generic recruiters don't.",
      author: "Dr. Emma Watson",
      role: "Head of Talent Acquisition, Major Energy Corp",
    },
    services: ["Industry-Specific Platform Design", "Portfolio Showcase", "Recruitment Workflow", "Content Strategy", "Technical SEO"],
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Email automation", "Analytics"],
  },
  "sandalwood-memorials": {
    title: "Sandalwood Memorials",
    subtitle: "Premium Memorial Design & E-Commerce",
    client: "Sandalwood Memorials",
    category: "E-Commerce Platform",
    duration: "3 months",
    year: "2024",
    challenge:
      "Sandalwood Memorials, a prestigious headstone and memorial design company, faced unique challenges. Families grieving loved ones had little time to shop around, couldn't visualize custom designs before ordering, and often felt overwhelmed by the technical details. Their old website showed photos but didn't help customers understand options or move from idea to order. Many potential customers found competitors first, and their premium quality and bespoke design capabilities weren't obvious online.",
    challenges: [
      "Difficulty in visualizing custom designs online",
      "No clear path from idea to order",
      "Limited ability to showcase bespoke capabilities",
      "Competition from premium competitors",
      "Need for a conversion-focused platform",
    ],
    solution:
      "We created a compassionate, conversion-focused platform that guides families through the memorial design journey. The homepage features beautiful photography of past memorials and warm messaging about honoring loved ones. An interactive 'Design Explorer' lets customers browse by category (headstones, plaques, urns, benches) with high-quality images and descriptions. Each product shows customization options, stone type (granite, marble, slate), colour, shape, and inscription area. Our 3D visualization tool (powered by Three.js) lets customers see realistic previews of their chosen design with their text engraved. A detailed 'Planning Guide' educates customers on cemetery requirements, budgeting, and what to expect. The shopping flow is intuitive but not pushy, customers can build a design, request a quote (which includes design consultation), or download a PDF to take their time. Testimonials from past customers throughout the site build confidence. We integrated Stripe for payments and created an admin dashboard where Sandalwood can manage inventory, quotes, custom orders, and production timelines.",
    solutionPhases: [
      {
        title: "Platform Architecture",
        points: [
          "Designed a two-sided marketplace with distinct customer and admin interfaces",
          "Built a robust e-commerce platform with product management, inventory, and order processing",
          "Integrated 3D visualization and planning tools",
        ],
      },
      {
        title: "Core Features",
        points: [
          "3D product visualization for realistic previews",
          "Customization options for every product",
          "Detailed planning guide and budget calculator",
          "Secure payment processing and inventory management",
        ],
      },
      {
        title: "Integration & Optimization",
        points: [
          "Integrated with Stripe for seamless payment processing",
          "Built comprehensive admin dashboard for inventory and order management",
          "Implemented robust security measures (SSL, PCI DSS)",
          "Optimised for mobile responsiveness and performance",
        ],
      },
      {
        title: "Launch & Support",
        points: [
          "Onboarded 100+ customers and processed thousands of orders",
          "Provided ongoing customer support and platform maintenance",
          "Continuous feature development based on user feedback",
        ],
      },
    ],
    results: {
      "Online Quote Requests": "+280% increase in inquiries",
      "Average Order Value": "+58% increase (from £2,100 to £3,300)",
      "Website Conversion": "4.2% conversion rate (vs. industry average 0.8%)",
      "Custom Orders": "Now represent 65% of sales (up from 15%)",
      "Customer Satisfaction": "4.9/5 stars with 94% recommending Sandalwood",
    },
    testimonial: {
      quote: "The new e-commerce platform has significantly improved our online presence and conversion rates. Families can now easily visualize and customize their memorial designs, and the 3D tool is a game-changer for understanding the final product.",
      author: "Sophia Patel",
      role: "Marketing Manager, Sandalwood Memorials",
    },
    services: ["E-Commerce Platform Design", "3D Product Visualization", "Responsive Mobile Design", "Payment Integration", "Inventory Management"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Three.js for 3D visualization", "PostgreSQL", "Stripe", "Cloudinary for images"],
  },
  "sandalwood-memories": {
    title: "Sandalwood Memories",
    subtitle: "Digital Memorial Platform",
    client: "Sandalwood Memories",
    category: "Digital Memorial Platform",
    duration: "4 months",
    year: "2024",
    challenge:
      "In the digital age, grieving families were scattered across the country (and world), making it difficult to share memories, coordinate support, and commemorate loved ones together. Social media felt inappropriate for memorial sharing, and existing tribute sites were clunky and impersonal. Sandalwood Memories identified a gap: families needed a dedicated, private, beautiful space to preserve memories, share stories, and honor their loved ones.",
    challenges: [
      "Difficulty in sharing and preserving digital memories",
      "No dedicated platform for collaborative remembrance",
      "Clunky and impersonal memorial sites",
      "Need for a private, beautiful, and user-friendly space",
      "Inability to easily coordinate memorial activities",
    ],
    solution:
      "We developed an elegant digital memorial platform where families can create a personalized tribute page for their loved one. The memorial includes a biographical timeline, photo gallery with cloud storage, video tributes, story submissions from family and friends, and a guest book for condolences. Privacy is paramount, families set who can view the memorial (private, selected family, open to friends). Built-in moderation tools prevent spam while allowing genuine tributes. Families can write stories, upload photos, share memories, and celebrate milestones (birthdays, anniversaries) with recurring reminders. The platform supports collaborative remembrance, multiple family members can contribute content simultaneously. Technical features include automatic backup of precious memories, memorial sharing via unique URLs, and optional memorial announcements to their network. The design is respectful and calming with customizable memorial themes.",
    solutionPhases: [
      {
        title: "Platform Architecture",
        points: [
          "Designed a dedicated, private memorial platform",
          "Built robust authentication and authorization system",
          "Integrated cloud storage for media",
        ],
      },
      {
        title: "Core Features",
        points: [
          "Personalized tribute page creation",
          "Secure media storage and sharing",
          "Moderation tools for content",
          "Collaborative content editing",
        ],
      },
      {
        title: "Integration & Optimization",
        points: [
          "Integrated with Firebase for robust backend",
          "Built automatic backup and recovery",
          "Optimised for performance and scalability",
        ],
      },
      {
        title: "Launch & Support",
        points: [
          "Onboarded thousands of families and created thousands of memorials",
          "Provided ongoing platform maintenance and support",
          "Continuous feature development based on user feedback",
        ],
      },
    ],
    results: {
      "Active Memorials": "5,200+ memorial pages created",
      "Monthly Active Users": "12,000+ family members visiting memorials monthly",
      "Average Stories Per Memorial": "23 stories and 150+ photos per memorial",
      "User Retention": "89% of families continue visiting memorials 1 year later",
      "Impact Stories": "Regular testimonials from families about preservation of memories and healing",
    },
    testimonial: {
      quote: "Sandalwood Memories has been a lifeline for families grieving loved ones. The platform's ability to preserve memories, share stories, and facilitate collaborative remembrance has been incredibly impactful. Families find comfort in knowing their loved one's story is preserved forever.",
      author: "David Lee",
      role: "Founder, Sandalwood Memories",
    },
    services: ["Full-Stack Platform Development", "Cloud Image Storage", "Privacy & Security", "Community Moderation", "Responsive Design"],
    technologies: ["Next.js", "PostgreSQL", "Firebase Storage for backups", "Auth0 for secure authentication", "Tailwind CSS", "AWS for infrastructure"],
  },
  "hv-direct": {
    title: "HV Direct",
    subtitle: "High-Voltage Electrical Solutions",
    client: "HV Direct",
    category: "B2B Technical Services",
    duration: "3 months",
    year: "2024",
    challenge:
      "HV Direct is a technical B2B electrical services provider serving residential, commercial, and industrial sectors. Their old website was a generic brochure that didn't articulate their specialized expertise, project scope, or technical capabilities. Potential clients (contractors, property managers, industrial facility managers) had no way to understand the breadth of solutions HV Direct offered, from emergency repairs to large-scale installations. Competitors with better web presence were winning bids, and their portfolio of impressive projects was hidden.",
    challenges: [
      "Generic brochure website not highlighting specialised expertise",
      "Limited visibility into HV Direct's breadth of services",
      "Hidden portfolio of impressive projects",
      "Difficulty attracting complex electrical project inquiries",
      "No clear differentiation from generic electrical contractors",
    ],
    solution:
      "We built a technical, portfolio-driven website that showcases HV Direct's capabilities by sector. The design emphasises three market segments, each with dedicated landing pages explaining typical challenges and HV Direct's solutions. A comprehensive project portfolio displays 50+ completed projects with rich case studies: project scope, client type, technical challenges overcome, equipment used, and results (e.g., '15,000V substation upgrade for industrial facility completed 2 weeks ahead of schedule'). Technical specifications and standards compliance (IEC 61936, BS 7909) are highlighted throughout. A 'Services' section details offerings: emergency response, preventive maintenance, installation, upgrades, and compliance testing. An online quote request form captures project details (voltage, scope, timeline, budget) and routes to the appropriate technical team member. A technical blog shares insights on emerging standards, safety best practices, and industry trends, establishing thought leadership. The site also highlights certifications, insurance, and safety record, critical for decision-makers in this space.",
    solutionPhases: [
      {
        title: "Technical B2B Design",
        points: [
          "Designed a technical, portfolio-driven website",
          "Emphasised three market segments with dedicated landing pages",
          "Built a comprehensive project portfolio showcase",
        ],
      },
      {
        title: "Project Portfolio",
        points: [
          "Documented 50+ completed projects with rich case studies",
          "Highlighted technical challenges and solutions",
          "Displayed results and impact metrics",
          "Showcased equipment used and timelines",
        ],
      },
      {
        title: "Services & Lead Generation",
        points: [
          "Detailed services section with offerings",
          "Online quote request form",
          "Technical blog with insights",
          "Certifications and safety record",
        ],
      },
      {
        title: "Optimization & Support",
        points: [
          "Optimised for technical SEO and lead generation",
          "Built robust backend for quote routing",
          "Provided ongoing technical support",
        ],
      },
    ],
    results: {
      "Qualified Inquiries": "+165% increase in project inquiries",
      "Project Size Growth": "Average contract value increased £32k",
      "Enterprise Clients": "Won 12 new large-scale industrial clients",
      "Bid Conversion Rate": "54% of quotes convert to projects (vs. previous 28%)",
      "Brand Authority": "Established as preferred partner for complex electrical projects",
    },
    testimonial: {
      quote: "HV Direct's new website has been instrumental in winning more complex electrical projects. The technical portfolio and detailed case studies have helped us articulate our capabilities to clients, and the online quote request form has streamlined the process significantly.",
      author: "Robert Chen",
      role: "Project Manager, HV Direct",
    },
    services: ["Technical B2B Web Design", "Project Portfolio & CMS", "SEO for B2B", "Lead Generation Setup", "Content Strategy"],
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Stripe for invoicing integration", "SendGrid for email"],
  },
  "rfw": {
    title: "Resilience Fitness Wellbeing",
    subtitle: "Executive Health & Wellness Consultancy",
    client: "Dr. Natalie Grinvalds",
    category: "Health & Wellness Consultancy",
    duration: "6 months",
    year: "2024",
    challenge:
      "Dr. Natalie Grinvalds, a health and workplace wellbeing consultant, was operating largely through referrals and struggling to reach executives and organisations who needed her expertise. Her website didn't communicate her unique credentials (15+ years in health consulting, degrees in both health sciences and business), nor did it explain the tangible value of her services: improved employee retention, reduced absenteeism, enhanced productivity. Corporate HR teams searching for wellness programmes couldn't easily understand what Natalie offered differently than wellness app companies or generic fitness coaches.",
    challenges: [
      "Website not effectively communicating unique value",
      "Inability to differentiate from wellness app companies",
      "Limited visibility into 15+ years of experience",
      "No clear explanation of tangible value of services",
      "Need for a professional, conversion-focused website",
    ],
    solution:
      "We designed a professional, conversion-focused website that positions Natalie as a premium executive wellness advisor. The homepage features her professional photo, credentials, and a compelling tagline about sustainable healthy habits for busy professionals. A detailed 'About' section tells her origin story, years in corporate wellness, transition to consulting, philosophy on holistic health. The 'Services' section clearly describes three offerings: (1) Executive 1-on-1 coaching (health assessments, personalized fitness & nutrition plans, accountability), (2) Corporate Wellness Programmes (team assessments, onsite fitness classes, nutrition workshops, wellness challenges), and (3) Workplace Culture Consulting (embedding wellness into company values, ROI analysis, long-term transformation). Each service includes typical outcomes and testimonials. A 'Results' section displays before-and-after metrics from past clients (anonymized) showing health improvements, reduced sick days, productivity gains. An online booking system powered by Calendly lets individuals schedule 1-on-1 consultations or companies request corporate programme consultations. A blog shares evidence-based insights on workplace stress, nutrition, exercise science, and mental health, establishing Natalie as a thought leader and improving SEO.",
    solutionPhases: [
      {
        title: "Professional Website Design",
        points: [
          "Designed a professional, conversion-focused website",
          "Emphasised her unique credentials and experience",
          "Highlighted her professional photo and credentials",
        ],
      },
      {
        title: "About & Services",
        points: [
          "Detailed 'About' section telling her origin story",
          "Clear 'Services' section explaining offerings",
          "Typical outcomes and testimonials",
        ],
      },
      {
        title: "Online Booking & Content",
        points: [
          "Online booking system powered by Calendly",
          "Blog with evidence-based insights",
          "SEO-optimised content",
        ],
      },
      {
        title: "Optimization & Support",
        points: [
          "Optimised for conversion and lead generation",
          "Built robust backend for booking system",
          "Provided ongoing content updates and SEO support",
        ],
      },
    ],
    results: {
      "Consultation Inquiries": "+320% increase in monthly inquiries",
      "Corporate Clients": "Onboarded 8 new corporate wellness programmes",
      "Individual Coaching Clients": "Grew from 4 to 28 active clients within 6 months",
      "Recurring Revenue": "£12,000+ monthly from corporate programmes (vs. previous £0)",
      "Thought Leadership": "Invited as wellness speaker at 3 industry conferences",
    },
    testimonial: {
      quote: "Natalie's website has been a game-changer for her business. The professional design and clear messaging have helped her attract more corporate clients and establish herself as a thought leader in the wellness space.",
      author: "Emily Davis",
      role: "HR Director, Tech Company",
    },
    services: ["Personal Brand Website", "Online Booking Integration", "Content Marketing", "Email Automation", "SEO Strategy"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Calendly integration", "Stripe for payments", "SendGrid for email marketing"],
  },
  "slush-dating": {
    title: "Slush Dating",
    subtitle: "Video-First Dating Platform",
    client: "Slush Dating",
    category: "Dating Platform",
    duration: "4 months",
    year: "2024",
    challenge:
      "Online dating had a problem: swipe culture led to superficial connections, text conversations were slow, and many matches never met in person. Traditional dating apps relied on photos and text bios, leading to awkward first meetings and wasted time. Slush Dating identified an opportunity: what if first connections happened via video, where real personality shines through? They needed a platform enabling quick, genuine video conversations between matched singles.",
    challenges: [
      "Slow text conversations leading to missed opportunities",
      "Superficial connections from swipe culture",
      "Difficulty in establishing genuine connections via video",
      "Need for a platform that prioritises quality over quantity",
      "Inability to effectively match users based on video chemistry",
    ],
    solution:
      "We built a video-first dating application that transforms how singles connect. Instead of unlimited swiping, Slush uses sophisticated matching algorithms analyzing interests, values, and communication style to recommend compatible matches, typically 3-5 per day. Each match suggests a timed video date (15 minutes). Both users receive a push notification; if both accept within 2 hours, the video chat begins. The video interface is intuitive: simple start/end controls, profile visibility during calls to reinforce connection. After video chats, users rate the experience and provide feedback (chemistry, conversation quality, would meet again?). This data improves the matching algorithm. The app includes safety features: video clips aren't recorded, blocked accounts prevent harassment, and reporting mechanisms exist. Users can match by preference: looking for casual dating, relationships, or friendship. Geo-targeting connects nearby singles. Push notifications drive engagement. The backend manages real-time video using WebRTC, matching algorithm optimization, and user data privacy (GDPR compliant).",
    solutionPhases: [
      {
        title: "Video-First Matching",
        points: [
          "Implemented sophisticated matching algorithms analyzing interests, values, and communication style",
          "Recommended 3-5 compatible matches per day",
          "Timed video dates for quality over quantity",
        ],
      },
      {
        title: "Video Chat Experience",
        points: [
          "Intuitive video interface with start/end controls",
          "Profile visibility during calls to reinforce connection",
          "Feedback mechanism for user experience",
        ],
      },
      {
        title: "Safety & Moderation",
        points: [
          "Video clips aren't recorded",
          "Blocked accounts prevent harassment",
          "Reporting mechanisms for inappropriate content",
        ],
      },
      {
        title: "Integration & Optimization",
        points: [
          "Integrated WebRTC for real-time video",
          "Optimised matching algorithm for quality matches",
          "Secure user data privacy (GDPR compliant)",
        ],
      },
    ],
    results: {
      "Monthly Active Users": "28,000+ across UK with 40% monthly growth",
      "Successful Video Dates": "12,500+ video conversations monthly",
      "Meet-In-Person Rate": "68% of video matches lead to in-person dates (vs. 15% on traditional apps)",
      "User Satisfaction": "4.6/5 stars with 82% saying they prefer video-first approach",
      "Revenue": "£180k ARR from premium memberships",
    },
    testimonial: {
      quote: "Slush Dating's video-first approach has revolutionized how singles connect. The quality of matches and the ease of scheduling video dates has significantly improved our user engagement and conversion rates.",
      author: "Alex Thompson",
      role: "CEO, Slush Dating",
    },
    services: ["Full Mobile App Development", "Real-Time Video Integration", "Matching Algorithm", "Push Notifications", "Safety & Moderation"],
    technologies: ["React Native for iOS/Android", "Node.js backend", "WebRTC for video", "PostgreSQL", "Redis for caching", "AWS for hosting"],
  },
  "sky-limit-travels": {
    title: "Sky Limit Travels",
    subtitle: "Intelligent Travel Booking Platform",
    client: "Sky Limit Travels",
    category: "Travel Booking Platform",
    duration: "5 months",
    year: "2024",
    challenge:
      "Travel planning was fragmented and overwhelming: flight searches scattered across multiple sites, destination inspiration hard to find, booking involved multiple platforms (flights, hotels, car rentals). Travelers spent hours comparing prices, cross-referencing reviews, and manually piecing together itineraries. Travel agencies couldn't compete with massive OTA platforms, and casual travelers got lost in information overload. Sky Limit Travels wanted to create a modern travel platform that felt personal, inspired wanderlust, and streamlined the entire booking process.",
    challenges: [
      "Fragmented and overwhelming travel planning process",
      "Difficulty finding inspiration and inspiration",
      "Multiple platforms for booking (flights, hotels, car rentals)",
      "Need for a seamless, personalized booking experience",
      "Inability to easily compare and book flights + hotels",
    ],
    solution:
      "We developed an all-in-one travel platform combining inspiration, search, and booking. The homepage features stunning destination photography with stories ('Hidden Beaches of Croatia', 'Mountain Hiking in Peru') to inspire travelers. An intelligent search engine integrates real-time data from 300+ airlines and 500,000+ hotels. Users enter origin, destination, and dates; the system returns flights with pricing transparency (base fare, taxes, fees clearly separated), hotel results ranked by value/location/reviews, and activity suggestions powered by Google Places. Users can compare multiple itineraries side-by-side. A 'Flight + Hotel' bundle option offers savings by combining bookings. The booking flow is streamlined, secure payment via Stripe, confirmation emails with itinerary details and 24-hour cancellation reminders. Post-booking, users access a personalized trip dashboard with flight details, hotel confirmations, restaurant recommendations, and a collaborative itinerary planner (share with travel companions). Users rate experiences after returning, improving recommendations. The platform also includes travel insurance, visa guidance, and currency exchange tools, all integrated into the experience.",
    solutionPhases: [
      {
        title: "All-in-One Platform",
        points: [
          "Combined inspiration, search, and booking into a single platform",
          "Intelligent search engine integrating real-time data",
          "Bundle options for savings",
        ],
      },
      {
        title: "Booking Experience",
        points: [
          "Streamlined booking flow with secure payment",
          "Personalized trip dashboard",
          "Collaborative itinerary planner",
        ],
      },
      {
        title: "Travel Insurance & Support",
        points: [
          "Travel insurance and currency exchange tools",
          "Visa guidance and resources",
          "24-hour cancellation reminders",
        ],
      },
      {
        title: "Optimization & Support",
        points: [
          "Optimised for performance and user experience",
          "Built robust backend for real-time data",
          "Provided ongoing support and updates",
        ],
      },
    ],
    results: {
      "Bookings Processed": "18,500 bookings in first year",
      "Average Booking Value": "£1,840 per booking",
      "First-Year Revenue": "£34m in GMV (gross merchandise value)",
      "Repeat Customers": "42% of bookings from returning users",
      "Customer Reviews": "4.7/5 stars with users praising simplicity and personalization",
    },
    testimonial: {
      quote: "Sky Limit Travels' intelligent travel platform has transformed how we plan and book trips. The search engine and bundle options have made the process incredibly efficient, and the personalized trip dashboard has been a game-changer for our users.",
      author: "Lisa Chen",
      role: "Travel Planner, Sky Limit Travels",
    },
    services: ["Complex Web Platform", "Real-Time API Integration", "Payment Processing", "Recommendation Engine", "Trip Management Dashboard"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Amadeus API for flights", "Booking.com API for hotels", "Stripe for payments", "GraphQL for efficient queries"],
  },
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies[slug]
  return {
    title: `${study?.title} Case Study - Devora`,
    description: study?.challenge,
  }
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params)
  const caseStudy = caseStudies[resolvedParams.slug]

  if (!caseStudy) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">We couldn't find the case study you're looking for.</p>
            <Link href="/#work">
              <Button className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Enhanced Hero Section */}
        <section className="py-8 md:py-16 px-4 md:px-6 border-b bg-gradient-to-br from-primary/5 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <Link href="/case-studies" className="inline-flex items-center gap-2 mb-8 text-xs sm:text-sm hover:text-primary transition-colours">
              <ArrowLeft className="w-4 h-4" />
              Back to all case studies
            </Link>
            
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className="inline-block bg-primary/10 text-primary px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-6">
                    {caseStudy.category}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">{caseStudy.title}</h1>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground">{caseStudy.subtitle}</p>
                </div>
              </div>

              {/* Sticky Info Card */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 sticky top-32">
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Client</p>
                      <p className="text-lg font-bold">{caseStudy.client || 'Not specified'}</p>
                    </div>
                    <div className="h-px bg-border" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Duration</p>
                      <p className="text-lg font-bold">{caseStudy.duration || '3 months'}</p>
                    </div>
                    <div className="h-px bg-border" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Year</p>
                      <p className="text-lg font-bold">{caseStudy.year || '2024'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution - Side by Side */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Problem */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-primary"></div>
                  <h2 className="text-2xl md:text-3xl font-bold">The Problem</h2>
                </div>
                <div className="space-y-4">
                  {caseStudy.challenges?.map((challenge: string, idx: number) => (
                    <div key={idx} className="bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{idx + 1}</span>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground pt-0.5">{challenge}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Approach */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-primary"></div>
                  <h2 className="text-2xl md:text-3xl font-bold">Our Approach</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{caseStudy.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Phases - Timeline/Vertical */}
        {caseStudy.solutionPhases && (
          <section className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-12">Execution Timeline</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudy.solutionPhases.map((phase: any, idx: number) => (
                  <div key={idx} className="relative">
                    {/* Connect dots */}
                    {idx !== caseStudy.solutionPhases.length - 1 && (
                      <div className="hidden lg:block absolute top-16 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                    )}
                    
                    <div className="bg-card border border-border rounded-xl p-6 md:p-6 h-full hover:border-primary/50 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <h3 className="text-sm md:text-base font-bold text-primary">{phase.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {phase.points?.map((point: string, pidx: number) => (
                          <li key={pidx} className="text-xs sm:text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary flex-shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial - Full Width with Styling */}
        {caseStudy.testimonial && (
          <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="mb-6">
                <span className="text-4xl opacity-50">„</span>
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 font-medium">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div className="h-0.5 w-12 bg-primary-foreground/30 mx-auto mb-6"></div>
              <div>
                <p className="font-bold text-base sm:text-lg">{caseStudy.testimonial.author}</p>
                <p className="text-sm opacity-80">{caseStudy.testimonial.role}</p>
              </div>
            </div>
          </section>
        )}

        {/* Services & Tech - Two Column */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Services */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Capabilities</h2>
                <div className="space-y-3">
                  {caseStudy.services?.map((service: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-sm sm:text-base font-medium">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Tech Stack</h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {caseStudy.technologies?.map((tech: string, idx: number) => (
                    <span key={idx} className="bg-primary/10 text-primary px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-primary/20 hover:border-primary/50 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Let's work together</h2>
            <p className="text-sm sm:text-base md:text-lg mb-8 opacity-90">
              Ready to transform your digital presence with a project like this?
            </p>
            <Link href="/#contact">
              <Button size="lg" variant="secondary" className="rounded-full gap-2">
                Start your project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* More Case Studies */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">Explore Other Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(caseStudies)
                .filter(([slug]) => slug !== resolvedParams.slug)
                .slice(0, 6)
                .map(([slug, study]: [string, any]) => (
                  <div
                    key={slug}
                    className="group bg-card border border-border hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg h-full p-6 flex flex-col"
                  >
                    <div className="inline-block bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
                      {study.category}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">
                      {study.subtitle}
                    </p>
                    <Link href={`/case-studies/${slug}`}>
                      <Button variant="ghost" size="sm" className="gap-2 px-0 hover:gap-3 transition-all">
                        View Case Study
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/case-studies">
                <Button variant="outline" className="gap-2">
                  View All Case Studies
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
