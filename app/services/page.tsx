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
      icon: <Code className="h-10 w-10 text-purple-500" aria-hidden="true" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to address your specific business challenges and requirements.",
      link: "#custom-software",
    },
    {
      icon: <Globe className="h-10 w-10 text-cyan-500" aria-hidden="true" />,
      title: "Web Applications",
      description: "Responsive, scalable web applications built with modern technologies for optimal performance.",
      link: "#web-apps",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-purple-500" aria-hidden="true" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      link: "#mobile-apps",
    },
    {
      icon: <Database className="h-10 w-10 text-cyan-500" aria-hidden="true" />,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services to optimize your operations.",
      link: "#cloud-solutions",
    },
    {
      icon: <Layers className="h-10 w-10 text-purple-500" aria-hidden="true" />,
      title: "IT Consulting",
      description: "Strategic technology guidance to help you make informed decisions for your business.",
      link: "#consulting",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-cyan-500" aria-hidden="true" />,
      title: "UI/UX Design",
      description: "Intuitive, engaging user interfaces that enhance user satisfaction and retention.",
      link: "#ui-ux-design",
    },
    {
      icon: <BarChart className="h-10 w-10 text-purple-500" aria-hidden="true" />,
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with custom analytics solutions.",
      link: "#data-analytics",
    },
    {
      icon: <Shield className="h-10 w-10 text-cyan-500" aria-hidden="true" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security assessments and solutions.",
      link: "#cybersecurity",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-500" aria-hidden="true" />,
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes for greater efficiency.",
      link: "#devops",
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
          <CardGrid columns={{ mobile: 3, tablet: 3, desktop: 3 }} gap="gap-8" scrollable={true} className="px-2.5">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors overflow-hidden group h-full card-hover-effect md:min-h-[332px] w-[100vw]">
                  <CardContent className="p-6 h-full">
                    <div className="mb-4 p-3 bg-gray-900 rounded-lg w-fit group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90">
                  Request a Consultation
                </Button>
              </AnimatedButton>
            </SlideInLeft>

            <SlideInRight>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-700">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Custom Software Development"
                    width={800}
                    height={600}
                    className="object-cover"
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
      <section id="web-apps" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-700">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Web Applications"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-lg shadow-xl">
                  <Globe className="h-8 w-8 text-white" />
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">
                Web <AnimatedGradientText>Applications</AnimatedGradientText>
              </h2>
              <p className="text-gray-300 mb-6">
                We build responsive, scalable web applications that deliver exceptional user experiences across all
                devices. Our web development team leverages modern technologies and frameworks to create
                high-performance applications that meet your business objectives.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you need a customer-facing application, an internal tool, or a complex web platform, we have the
                expertise to deliver solutions that are both technically excellent and user-friendly.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Progressive Web Apps (PWAs)</h4>
                    <p className="text-gray-400">
                      Fast, reliable applications that work offline and provide a native app-like experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Single Page Applications (SPAs)</h4>
                    <p className="text-gray-400">
                      Dynamic applications that provide a smooth, seamless user experience without page reloads.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">E-commerce Solutions</h4>
                    <p className="text-gray-400">
                      Secure, scalable online stores with seamless payment processing and inventory management.
                    </p>
                  </div>
                </div>
              </div>

              <AnimatedButton>
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90">
                  Explore Web Solutions
                </Button>
              </AnimatedButton>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Mobile Applications */}
      <section id="mobile-apps" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <h2 className="text-3xl font-bold mb-6">
                Mobile <AnimatedGradientText>Applications</AnimatedGradientText>
              </h2>
              <p className="text-gray-300 mb-6">
                We develop native and cross-platform mobile applications that engage users and drive business growth.
                Our mobile development team creates intuitive, feature-rich apps that deliver exceptional experiences on
                iOS and Android devices.
              </p>
              <p className="text-gray-300 mb-6">
                From concept to deployment, we focus on creating mobile solutions that align with your business
                objectives while meeting the highest standards of performance, security, and user experience.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Native iOS & Android Apps</h4>
                    <p className="text-gray-400">
                      Platform-specific applications that leverage the full capabilities of each operating system.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Cross-Platform Development</h4>
                    <p className="text-gray-400">
                      Efficient solutions that work seamlessly across multiple platforms with a single codebase.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Mobile App Modernization</h4>
                    <p className="text-gray-400">
                      Update and enhance existing mobile applications to improve performance and user experience.
                    </p>
                  </div>
                </div>
              </div>

              <AnimatedButton>
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90">
                  Discuss Your Mobile App
                </Button>
              </AnimatedButton>
            </SlideInLeft>

            <SlideInRight>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-700">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Mobile Applications"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-lg shadow-xl">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
              </div>
            </SlideInRight>
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
