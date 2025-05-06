"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Database, Globe, Layers, Smartphone, Sparkles, BarChart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TechStackMarquee } from "@/components/tech-stack-marquee"
import { HomepageHero } from "@/components/homepage-hero"
import { CardGrid } from "@/components/card-grid"
import {
  FadeInView,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
  AnimatedGradientText,
  AnimatedButton,
} from "@/components/animated-elements"
import { StaggerContainer, StaggerItem, RotateIn } from "@/components/scroll-animation"

export default function Home() {
  // Services data
  const services = [
    {
      icon: <Code className="h-10 w-10" aria-hidden="true" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to address your specific business challenges and requirements.",
      link: "/services#custom-software",
    },
    {
      icon: <Globe className="h-10 w-10" aria-hidden="true" />,
      title: "Web Applications",
      description: "Responsive, scalable web applications built with modern technologies for optimal performance.",
      link: "/services#web-applications",
    },
    {
      icon: <BarChart className="h-10 w-10" aria-hidden="true" />,
      title: "Branding Research",
      description: "In-depth research and analysis to help you build a strong, memorable brand that resonates with your audience.",
      link: "/services#branding-research",
    },
    {
      icon: <Zap className="h-10 w-10" aria-hidden="true" />,
      title: "Low/No Code Applications",
      description: "Rapidly build and deploy business solutions with low-code and no-code platforms, empowering your team to innovate without deep technical expertise.",
      link: "/services#low-no-code-apps",
    },
    {
      icon: <Layers className="h-10 w-10" aria-hidden="true" />,
      title: "UI/UX Design",
      description: "Intuitive, engaging user interfaces that enhance user satisfaction and retention.",
      link: "/services#ui-ux-design",
    },
    {
      icon: <Sparkles className="h-10 w-10" aria-hidden="true" />,
      title: "AI Integration",
      description: "Empower your business with AI. We help you identify, integrate, and optimize the best AI tools for your unique needs.",
      link: "/services#ai-integration",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      quote:
        "WeaveDev Co. transformed our business with a custom software solution that perfectly addressed our unique challenges. Their team was professional, responsive, and delivered beyond our expectations.",
      author: "Sarah Johnson",
      role: "CTO, FinTech Innovations",
    },
    {
      quote:
        "The mobile application developed by WeaveDev Co. has significantly improved our customer engagement and streamlined our operations. Their attention to detail and commitment to quality is unmatched.",
      author: "Michael Chen",
      role: "Director of Digital, RetailPlus",
    },
    {
      quote:
        "Working with WeaveDev Co. was a game-changer for our healthcare practice. Their patient management system has improved efficiency by 40% and enhanced our patient experience tremendously.",
      author: "Dr. Emily Rodriguez",
      role: "Medical Director, HealthFirst Clinic",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HomepageHero />

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-muted/30" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12 md:mb-16">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our <AnimatedGradientText>Services</AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of software development services to help your business thrive in the
              digital landscape.
            </p>
          </FadeInView>

          <CardGrid columns={{ mobile: 3, tablet: 3, desktop: 3 }} gap="gap-6" scrollable={true} className="px-2.5">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <Card
                  className="bg-card/50 border-border hover:border-purple-500/50 transition-colors overflow-hidden group h-full card-hover-effect min-h-[360px] md:min-h-[332px] max-w-[400px] mx-[10px] w-full"
                >
                  <CardContent className="p-4 md:p-6 card-content h-full">
                    <div className="mb-4 p-2 md:p-3 rounded-lg w-fit group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500 transition-colors duration-300">
                      <span className="transition-colors duration-300 group-hover:text-white text-purple-500 text-cyan-500">{service.icon}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 break-words whitespace-normal">{service.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base flex-grow break-words whitespace-normal">{service.description}</p>
                    <div className="mt-4 flex items-center text-purple-400 group-hover:text-cyan-400 transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight
                        className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </CardGrid>

          <div className="text-center mt-12">
            <AnimatedButton>
              <Link href="/services">
                <Button size="lg" className="btn-gradient">
                  View All Services
                </Button>
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Projects Preview */}
      <section className="py-16 md:py-20" aria-labelledby="projects-heading">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12 md:mb-16">
            <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Featured <AnimatedGradientText>Projects</AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore how we've helped businesses transform their operations and achieve their goals through custom
              software solutions.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <SlideInLeft>
              <Link href="/projects/dms" className="block h-full">
                <div className="relative rounded-xl overflow-hidden border border-border group h-full hover:border-purple-500/50 transition-colors card-hover-effect min-h-[268px] md:min-h-[332px]  sm:max-w-[350px] lg:max-w-full w-[100%]">
                  <div className="aspect-[4/3]">
                    <Image
                      src="/projects/DMS-Mockup.png"
                      alt="Document Management System mockup"
                      width={800}
                      height={600}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 md:p-6 sm:h-[100%]">
                    <span className="text-xs text-cyan-400 font-medium mb-2">ENTERPRISE</span>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Document Management System</h3>
                    <p className="text-gray-300 mb-4 text-sm md:text-base">
                      Secure, collaborative platform for enterprise document management and easy retrieval.
                    </p>
                    <div className="inline-flex items-center text-white font-medium">
                      View Project
                      <ArrowRight
                        className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </SlideInLeft>

            <SlideInRight>
              <Link href="/projects/ordraft" className="block h-full">
                <div className="relative rounded-xl overflow-hidden border border-border group h-full hover:border-purple-500/50 transition-colors card-hover-effect min-h-[268px] md:min-h-[332px]  sm:max-w-[350px] lg:max-w-full w-[100%]">
                  <div className="aspect-[4/3]">
                    <Image
                      src="/projects/ordraft-mockup.png"
                      alt="OrDraft legal document processing app mockup"
                      width={800}
                      height={600}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 md:p-6 sm:h-[100%]">
                    <span className="text-xs text-purple-400 font-medium mb-2">GOVERNMENT / LEGAL TECH</span>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">OrDraft Legal App</h3>
                    <p className="text-gray-300 mb-4 text-sm md:text-base">
                      Fast, compliant legal document processing for government and legal teams.
                    </p>
                    <div className="inline-flex items-center text-white font-medium">
                      View Project
                      <ArrowRight
                        className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </SlideInRight>
          </div>

          <div className="text-center mt-12">
            <AnimatedButton>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-border hover:bg-accent">
                  View All Projects
                </Button>
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-muted/30" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12 md:mb-16">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Our <AnimatedGradientText>Clients Say</AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with WeaveDev Co.
            </p>
          </FadeInView>

          {/* Desktop grid - hidden on screens less than 1024px */}
          <StaggerContainer className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card className="bg-card/50 border-border h-full card-hover-effect">
                  <CardContent className="card-content">
                    <div className="mb-4 text-4xl text-purple-500" aria-hidden="true">
                      "
                    </div>
                    <p className="text-foreground/80 flex-grow">{testimonial.quote}</p>
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center">
                        <RotateIn>
                          <div
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold"
                            aria-hidden="true"
                          >
                            {testimonial.author.charAt(0)}
                          </div>
                        </RotateIn>
                        <div className="ml-3">
                          <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Scrollable cards for screens less than 1024px */}
          <div className="lg:hidden">
            <CardGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card/50 border-border h-full card-hover-effect">
                  <CardContent className="card-content">
                    <div className="mb-4 text-4xl text-purple-500" aria-hidden="true">
                      "
                    </div>
                    <p className="text-foreground/80 flex-grow">{testimonial.quote}</p>
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center">
                        <div
                          className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold"
                          aria-hidden="true"
                        >
                          {testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardGrid>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScaleIn className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to <AnimatedGradientText>Transform</AnimatedGradientText> Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss how our custom software solutions can address your unique challenges and drive your business
              forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton>
                <Link href="/contact">
                  <Button size="lg" className="btn-gradient w-full sm:w-auto">
                    Schedule a Consultation
                  </Button>
                </Link>
              </AnimatedButton>
              <AnimatedButton>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-accent w-full sm:w-auto text-white"
                  >
                    View Our Services
                  </Button>
                </Link>
              </AnimatedButton>
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  )
}
