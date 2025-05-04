"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import {
  FadeInView,
  SlideInLeft,
  SlideInRight,
  AnimatedGradientText,
  AnimatedButton,
} from "@/components/animated-elements"

export default function BankingPlatformCaseStudy() {
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
          <Link
            href="/case-studies"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-cyan-400 font-medium mb-4"
            >
              FINTECH CASE STUDY
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Modern Banking <AnimatedGradientText>Platform</AnimatedGradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              A comprehensive digital banking solution with advanced security features and intuitive user experience for
              a leading financial institution.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div className="relative rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Banking Platform Dashboard"
                  width={1200}
                  height={800}
                  className="object-cover"
                />
              </div>
            </SlideInLeft>

            <SlideInRight>
              <h2 className="text-3xl font-bold mb-6">
                Project <AnimatedGradientText>Overview</AnimatedGradientText>
              </h2>
              <p className="text-gray-300 mb-6">
                Our client, a leading financial institution, needed to modernize their digital banking platform to meet
                evolving customer expectations and stay competitive in the rapidly changing fintech landscape.
              </p>
              <p className="text-gray-300 mb-8">
                They approached WeaveDev Co. to develop a comprehensive solution that would provide a seamless, secure,
                and feature-rich banking experience for their customers while streamlining internal operations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Industry</h3>
                  <p className="text-gray-300">Financial Services</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Timeline</h3>
                  <p className="text-gray-300">8 Months</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Services</h3>
                  <p className="text-gray-300">Custom Software Development, UX/UI Design</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Technologies</h3>
                  <p className="text-gray-300">React, Node.js, AWS, PostgreSQL</p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeInView className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              The <AnimatedGradientText>Challenges</AnimatedGradientText>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                  <CheckCircle className="h-5 w-5 text-cyan-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold mb-2">Legacy System Integration</h3>
                  <p className="text-gray-300">
                    The client's existing infrastructure included multiple legacy systems that needed to be integrated
                    with the new platform without disrupting ongoing operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold mb-2">Security and Compliance</h3>
                  <p className="text-gray-300">
                    The solution needed to meet stringent financial industry regulations and security standards,
                    including PCI DSS, GDPR, and local banking regulations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                  <CheckCircle className="h-5 w-5 text-cyan-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold mb-2">User Experience</h3>
                  <p className="text-gray-300">
                    The platform needed to cater to a diverse customer base with varying levels of technical proficiency
                    while providing a seamless experience across all devices.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold mb-2">Scalability</h3>
                  <p className="text-gray-300">
                    The solution needed to handle millions of transactions daily with the ability to scale during peak
                    usage periods without performance degradation.
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Our <AnimatedGradientText>Solution</AnimatedGradientText>
              </h2>
              <p className="text-gray-300 mb-6">
                We developed a comprehensive digital banking platform that seamlessly integrated with the client's
                existing systems while providing a modern, secure, and user-friendly experience for their customers.
              </p>

              <div className="space-y-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Microservices Architecture</h3>
                  <p className="text-gray-400">
                    We implemented a microservices architecture to ensure scalability, resilience, and easier
                    maintenance, allowing for independent scaling of different components.
                  </p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Secure API Gateway</h3>
                  <p className="text-gray-400">
                    We built a robust API gateway with advanced authentication and authorization mechanisms to ensure
                    secure communication between services and third-party integrations.
                  </p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Responsive Web and Mobile Apps</h3>
                  <p className="text-gray-400">
                    We created a responsive web application and native mobile apps for iOS and Android, providing a
                    consistent and intuitive user experience across all devices.
                  </p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Real-time Analytics Dashboard</h3>
                  <p className="text-gray-400">
                    We implemented a comprehensive analytics dashboard for administrators to monitor system performance,
                    user behavior, and transaction patterns in real-time.
                  </p>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Banking Platform Mobile App"
                  width={1200}
                  height={800}
                  className="object-cover"
                />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <AnimatedGradientText>Results</AnimatedGradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our solution delivered significant improvements in customer satisfaction, operational efficiency, and
              business growth.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInView delay={0.1} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                35%
              </div>
              <p className="text-gray-300">Increase in Digital Banking Adoption</p>
            </FadeInView>
            <FadeInView delay={0.2} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                42%
              </div>
              <p className="text-gray-300">Reduction in Customer Support Inquiries</p>
            </FadeInView>
            <FadeInView delay={0.3} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                28%
              </div>
              <p className="text-gray-300">Increase in Transaction Volume</p>
            </FadeInView>
            <FadeInView delay={0.4} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                99.9%
              </div>
              <p className="text-gray-300">System Uptime</p>
            </FadeInView>
          </div>

          <FadeInView delay={0.5} className="mt-12 text-center">
            <blockquote className="max-w-3xl mx-auto italic text-xl text-gray-300 mb-6">
              "WeaveDev Co. delivered a transformative digital banking platform that exceeded our expectations. Their
              technical expertise, attention to detail, and collaborative approach made them the ideal partner for this
              critical project."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                J
              </div>
              <div className="ml-3 text-left">
                <p className="font-semibold">James Wilson</p>
                <p className="text-gray-400">CTO, Global Financial Services</p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Next Case Study</h2>
              <p className="text-gray-400">Explore more of our successful projects</p>
            </div>
            <AnimatedButton className="mt-4 md:mt-0">
              <Link
                href="/case-studies/healthcare-system"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium"
              >
                Patient Management System
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  )
}
