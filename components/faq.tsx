"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does your design and development process work?",
    answer: "We follow a collaborative, iterative approach. It starts with discovery: understanding your business, goals, and target audience. We then create wireframes and design mockups for your approval before development begins. Throughout the project, we maintain regular communication, provide progress updates, and welcome your feedback. Our development is agile, allowing us to adapt as needed. We conduct thorough testing across devices and browsers before launch, and provide training and documentation so you understand how to maintain your site."
  },
  {
    question: "What's the typical timeline for a project?",
    answer: "Most of our projects are completed within 3-4 weeks, depending on complexity and scope. Simple websites might take 2-3 weeks, whilst more complex platforms with custom features may take 4-6 weeks. We provide a detailed timeline during the discovery phase so you know exactly what to expect. We maintain regular communication throughout, and once launched, we're here for ongoing support and updates."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Absolutely! We provide ongoing support packages tailored to your needs. This includes security updates, performance monitoring, bug fixes, and content updates. We can also help with feature additions, design refreshes, and scaling as your business grows. Many clients opt for a retainer-based support model, which gives them priority access to our team for updates and enhancements whenever needed."
  },
  {
    question: "What technologies do you use?",
    answer: "We specialise in modern, scalable technologies including Next.js, React, Node.js, TypeScript, Tailwind CSS, and PostgreSQL. We choose technologies based on your specific needs, whether that's a fast marketing website, a complex web application, or a real-time platform. We prioritise performance, security, and maintainability in every project. We also ensure your site is SEO-optimised and follows best practices for accessibility."
  },
  {
    question: "Can I update the website myself?",
    answer: "It depends on the technology stack. For ground-up business website builds, we can include a custom backend panel giving you the ability to manage content, update text, add blog posts, and modify imagery without touching code. For simpler websites, we can integrate headless CMS solutions like Contentful or Strapi. For more complex changes, our team is always available. During the handover process, we'll provide comprehensive training and documentation so you're confident maintaining your site."
  },
  {
    question: "How do you approach mobile responsiveness?",
    answer: "Mobile-first design is at the core of our process. We design for mobile devices first, then enhance the experience for larger screens. Every project we build is fully responsive and tested on multiple devices: phones, tablets, and desktops. We ensure fast loading times, intuitive navigation, and touch-friendly interfaces on all devices. We also optimise images and use modern performance techniques so your site works beautifully regardless of device or connection speed."
  },
  {
    question: "What's included in your pricing?",
    answer: "Our pricing is transparent and tailored to your project. Typically included are: initial consultation and discovery, design and wireframing, development and testing, deployment, training, and handover documentation. We don't charge hidden fees. During our initial conversation, we'll provide a detailed quote outlining exactly what's included. If you'd like additional services like ongoing SEO optimisation or a dedicated support retainer, we can add those to your package."
  },
  {
    question: "How do you ensure the website is secure?",
    answer: "Security is built into every project from day one. We follow industry best practices including SSL encryption, secure authentication, data protection, and regular security updates. We conduct thorough testing to identify and fix vulnerabilities before launch. For e-commerce or platforms handling sensitive data, we implement additional measures like PCI compliance, two-factor authentication, and automated backups. Our ongoing support includes security monitoring and updates to keep your site protected."
  },
  {
    question: "What happens after the website launches?",
    answer: "After launch, we monitor performance, gather analytics, and stay in touch. We're available to address any issues, make minor adjustments, or discuss future enhancements. Most clients sign up for our ongoing support package, which includes regular updates, performance optimisation, and priority access to our team. We also help with SEO improvements, marketing integration, and scaling features as your business grows. You're not just getting a website, you're getting a long-term partner."
  },
  {
    question: "Do you build websites from the ground up?",
    answer: "Yes. Our preference is to plan, design, and develop business websites from the ground up rather than forcing your goals into a generic template. That means we can shape the site around your services, customers, locations, SEO priorities, content, integrations, and future growth plans from day one."
  }
]

export function FAQ() {
  return (
    <section className="bg-background px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">FAQ</p>
          <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">Questions worth asking before you rebuild.</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to know about our process, services, and how we work with businesses to build websites that matter.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-px overflow-hidden border border-black/10 bg-black/10">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-0 bg-white px-5 data-[state=open]:bg-muted/45 md:px-7">
              <AccordionTrigger className="py-5 hover:no-underline">
                <span className="text-left text-base font-black tracking-[-0.01em]">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="leading-7 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
