"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Layers,
  Smartphone,
  Sparkles,
  Zap,
  BarChart,
  Shield,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  FadeInView,
  SlideInLeft,
  SlideInRight,
  AnimatedGradientText,
  AnimatedButton,
} from "@/components/animated-elements"
import { CardGrid } from "@/components/card-grid"

export default function ServicesPage() {
  // Services data
  const services = [
    {
      icon: <Code className="h-10 w-10" aria-hidden="true" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to address your specific business challenges and requirements.",
      link: "#custom-software",
    },
    {
      icon: <Globe className="h-10 w-10" aria-hidden="true" />,
      title: "Web Applications",
      description: "Responsive, scalable web applications built with modern technologies for optimal performance.",
      link: "#web-applications",
    },
    {
      icon: <Sparkles className="h-10 w-10" aria-hidden="true" />,
      title: "Branding Research",
      description: "In-depth research and analysis to help you build a strong, memorable brand that resonates with your audience.",
      link: "#branding-research",
    },
    {
      icon: <Zap className="h-10 w-10" aria-hidden="true" />,
      title: "Low/No Code Applications",
      description: "Rapidly build and deploy business solutions with low-code and no-code platforms, empowering your team to innovate without deep technical expertise.",
      link: "#low-no-code-apps",
    },
    {
      icon: <Sparkles className="h-10 w-10" aria-hidden="true" />,
      title: "UI/UX Design",
      description: "Intuitive, engaging user interfaces that enhance user satisfaction and retention.",
      link: "#ui-ux-design",
    },
    {
      icon: <Sparkles className="h-10 w-10" aria-hidden="true" />,
      title: "AI Integration",
      description: "Empower your business with AI. We help you identify, integrate, and optimize the best AI tools for your unique needs.",
      link: "#ai-integration",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our <AnimatedGradientText>Services</AnimatedGradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              We offer a comprehensive range of software development services tailored to meet the unique needs of your
              business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <CardGrid columns={{ mobile: 3, tablet: 3, desktop: 3 }} gap="gap-6" scrollable={true} className="px-2.5">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <Card
                  className="bg-card/50 border-border hover:border-purple-500/50 transition-colors overflow-hidden group h-full card-hover-effect min-h-[268px] md:min-h-[332px]"
                >
                  <CardContent className="p-4 md:p-6 card-content h-full">
                    <div className="mb-4 p-2 md:p-3 rounded-lg w-fit group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500 transition-colors duration-300">
                      <span className="transition-colors duration-300 group-hover:text-white text-purple-500 text-cyan-500">{service.icon}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base flex-grow">{service.description}</p>
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
        </div>
      </section>

      {/* Custom Software Development */}
      <section id="custom-software" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <h2 className="text-3xl font-bold mb-6">
                Custom Software <AnimatedGradientText>Development</AnimatedGradientText>
              </h2>
              <p className="text-gray-300 mb-6">
                We specialize in creating bespoke software solutions that address your unique business challenges and
                requirements. Our custom software development services are designed to provide you with a competitive
                edge in your industry.
              </p>
              <p className="text-gray-300 mb-6">
                Our experienced team works closely with you to understand your business processes, identify pain points,
                and develop tailored solutions that streamline operations, enhance productivity, and drive growth.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-purple-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Enterprise Applications</h4>
                    <p className="text-gray-400">
                      Scalable, secure, and robust applications designed for complex enterprise environments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-cyan-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Workflow Automation</h4>
                    <p className="text-gray-400">
                      Custom solutions that automate repetitive tasks and streamline business processes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-purple-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Integration Solutions</h4>
                    <p className="text-gray-400">
                      Seamlessly connect your existing systems and applications for improved data flow.
                    </p>
                  </div>
                </div>
              </div>

              <AnimatedButton>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90">
                    Request a Consultation
                  </Button>
                </Link>
              </AnimatedButton>
            </SlideInLeft>

            <SlideInRight>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-700 bg-white flex items-center justify-center">
                  <Image
                    src="/projects/custom-soft.jpg"
                    alt="Custom Software Development"
                    width={800}
                    height={600}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-lg shadow-xl">
                  <Code className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Web Applications */}
      <section id="web-applications" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-700 bg-white flex items-center justify-center">
                  <Image
                    src="/projects/web-app.png"
                    alt="Web Applications"
                    width={800}
                    height={600}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-lg shadow-xl">
                  <Globe className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
              </div>
            </SlideInLeft>
            <SlideInRight>
            <h2 className="text-3xl font-bold mb-6">
                Web <AnimatedGradientText>Applications</AnimatedGradientText>
              </h2>
              <p className="text-gray-300 mb-6">
                We build responsive, scalable web applications using the latest technologies to ensure optimal performance, security, and user experience. Our team delivers solutions tailored to your business needs, from customer portals to complex SaaS platforms.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you need a new web app or want to modernize an existing one, we guide you from concept to deployment, ensuring seamless integration and future scalability.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                    <Globe className="h-5 w-5 text-cyan-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Modern Tech Stack</h4>
                    <p className="text-gray-400">React, Next.js, Node.js, and more for robust, maintainable apps.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <Globe className="h-5 w-5 text-purple-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Responsive Design</h4>
                    <p className="text-gray-400">Optimized for all devices and screen sizes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                    <Globe className="h-5 w-5 text-cyan-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Custom Integrations</h4>
                    <p className="text-gray-400">Seamlessly connect with APIs, databases, and third-party services.</p>
                  </div>
                </div>
              </div>
              <AnimatedButton>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90">
                    Start Your Web Project
                  </Button>
                </Link>
              </AnimatedButton>
        
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Branding Research */}
      <section id="branding-research" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
           <h2 className="text-3xl font-bold mb-6">
                Branding <AnimatedGradientText>Research</AnimatedGradientText>
              </h2>
              <p className="text-gray-300 mb-6">
                Our branding research service provides in-depth analysis and insights to help you build a strong, memorable brand that resonates with your target audience. We combine qualitative and quantitative research methods to uncover what makes your brand unique and how you can stand out in the market.
              </p>
              <p className="text-gray-300 mb-6">
                From competitor analysis to audience perception studies, we deliver actionable recommendations that empower your business to make informed branding decisions and foster lasting connections with your customers.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                    <Sparkles className="h-5 w-5 text-cyan-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Competitor Analysis</h4>
                    <p className="text-gray-400">
                      Understand your market landscape and identify opportunities to differentiate your brand.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <Sparkles className="h-5 w-5 text-purple-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Audience Insights</h4>
                    <p className="text-gray-400">
                      Discover what your audience values and how they perceive your brand.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                    <Sparkles className="h-5 w-5 text-cyan-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Brand Positioning</h4>
                    <p className="text-gray-400">
                      Get actionable recommendations to position your brand for long-term success.
                    </p>
                  </div>
                </div>
              </div>
              <AnimatedButton>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90">
                    Start Your Brand Research
                  </Button>
                </Link>
              </AnimatedButton>
            </SlideInLeft>
            <SlideInRight>
             <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-700 bg-white flex items-center justify-center">
                  <Image
                    src="/projects/branding.png"
                    alt="Branding Research"
                    width={800}
                    height={600}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-lg shadow-xl">
                  <Sparkles className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
              </div>   
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Low/No code Applications */}
      <section id="low-no-code-apps" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
             <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-700 bg-white flex items-center justify-center">
                  <Image
                    src="/projects/no-code.jpeg"
                    alt="Low/No Code Applications"
                    width={800}
                    height={600}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-lg shadow-xl">
                  <Zap className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
              </div>
            </SlideInLeft>
            <SlideInRight>
 <h2 className="text-3xl font-bold mb-6">
                Low/No code <AnimatedGradientText>Applications</AnimatedGradientText>
              </h2>
              <p className="text-gray-300 mb-6">
                Accelerate your digital transformation with our low-code and no-code application development services. We empower your team to build, customize, and deploy business solutions quickly—without the need for deep technical expertise.
              </p>
              <p className="text-gray-300 mb-6">
                From automating workflows to creating custom dashboards and internal tools, our experts help you leverage leading platforms to solve business challenges, reduce costs, and innovate faster.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <Zap className="h-5 w-5 text-purple-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Rapid Prototyping</h4>
                    <p className="text-gray-400">
                      Quickly turn ideas into working applications with visual development tools and pre-built components.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                    <Zap className="h-5 w-5 text-cyan-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Workflow Automation</h4>
                    <p className="text-gray-400">
                      Streamline repetitive tasks and processes with easy-to-configure automation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <Zap className="h-5 w-5 text-purple-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Custom Business Apps</h4>
                    <p className="text-gray-400">
                      Build tailored solutions for your unique business needs—without writing code.
                    </p>
                  </div>
                </div>
              </div>
              <AnimatedButton>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90">
                    Explore Low/No code Solutions
                  </Button>
                </Link>
              </AnimatedButton>
            {/*  */}
              
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* UI/UX Design */}
      <section id="ui-ux-design" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <SlideInRight className="order-2 lg:order-2">
               <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-700 bg-white flex items-center justify-center">
                  <Image
                    src="/projects/ui-ux.jpg"
                    alt="UI/UX Design"
                    width={800}
                    height={600}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-lg shadow-xl">
                  <Sparkles className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
              </div>
            </SlideInRight>
            <SlideInLeft className="order-1 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">
                UI/UX <AnimatedGradientText>Design</AnimatedGradientText>
              </h2>
              <p className="text-gray-300 mb-6">
                Our UI/UX design services focus on creating intuitive, engaging, and visually appealing interfaces that delight users and drive business results. We blend creativity with usability to ensure every interaction is meaningful and memorable.
              </p>
              <p className="text-gray-300 mb-6">
                From wireframes to high-fidelity prototypes, our team collaborates closely with you to understand your brand, users, and goals—delivering designs that are both beautiful and functional.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <Sparkles className="h-5 w-5 text-purple-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">User-Centered Design</h4>
                    <p className="text-gray-400">We prioritize user needs and behaviors to craft seamless, enjoyable experiences.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                    <Sparkles className="h-5 w-5 text-cyan-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Prototyping & Testing</h4>
                    <p className="text-gray-400">Interactive prototypes and user testing ensure your product is intuitive and effective.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <Sparkles className="h-5 w-5 text-purple-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Brand Consistency</h4>
                    <p className="text-gray-400">We maintain your brand identity across all touchpoints for a cohesive experience.</p>
                  </div>
                </div>
              </div>
              <AnimatedButton>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90">
                    Start Your Design Project
                  </Button>
                </Link>
              </AnimatedButton>
            {/*  */}
           
            </SlideInLeft>
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section id="ai-integration" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <SlideInRight className="order-2 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">
                <AnimatedGradientText>AI Integration</AnimatedGradientText>
              </h2>
              <p className="text-gray-300 mb-6">
                Empower your business with AI. We help you identify, integrate, and optimize the best AI tools for your unique needs, driving innovation and efficiency across your operations.
              </p>
              <p className="text-gray-300 mb-6">
                Our experts guide you through the rapidly evolving AI landscape, ensuring seamless adoption and maximum value from artificial intelligence solutions tailored to your goals.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <Sparkles className="h-5 w-5 text-purple-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">AI Tool Selection</h4>
                    <p className="text-gray-400">We evaluate your needs and recommend the most effective AI tools and platforms for your business.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                    <Sparkles className="h-5 w-5 text-cyan-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Seamless Integration</h4>
                    <p className="text-gray-400">We ensure smooth integration of AI solutions into your existing workflows and systems.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <Sparkles className="h-5 w-5 text-purple-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Ongoing Optimization</h4>
                    <p className="text-gray-400">We monitor and refine your AI integrations to maximize performance and ROI.</p>
                  </div>
                </div>
              </div>
              <AnimatedButton>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90">
                    Start Your AI Journey
                  </Button>
                </Link>
              </AnimatedButton>
            </SlideInRight>
            <SlideInLeft className="order-1 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-700 bg-white flex items-center justify-center">
                  <Image
                    src="/projects/ai.jpg"
                    alt="AI Integration"
                    width={800}
                    height={600}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-lg shadow-xl">
                  <Sparkles className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
              </div>
            {/*  */}
            </SlideInLeft>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInView className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <AnimatedGradientText>Transform</AnimatedGradientText> Your Business?
            </h2>
            <p className="text-gray-300 text-lg">
              Ready to elevate your business with cutting-edge software solutions?
            </p>
          </FadeInView>
        </div>
      </section>
    </div>
  )
}
