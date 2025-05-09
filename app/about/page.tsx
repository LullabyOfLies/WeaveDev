"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Code, Users, Zap, Award, Heart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  FadeInView,
  SlideInLeft,
  SlideInRight,
  AnimatedGradientText,
  AnimatedButton,
} from "@/components/animated-elements"
import { CardGrid } from "@/components/card-grid"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  // Core values data
  const coreValues = [
    {
      icon: <Code className="h-8 w-8 text-purple-500" aria-hidden="true" />,
      title: "Technical Excellence",
      description:
        "We're committed to the highest standards of code quality, performance, and security in everything we build.",
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-500" aria-hidden="true" />,
      title: "Collaborative Partnership",
      description:
        "We work closely with our clients, fostering transparent communication and shared ownership of outcomes.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-500" aria-hidden="true" />,
      title: "Innovation",
      description:
        "We continuously explore new technologies and approaches to solve complex problems in creative ways.",
    },
    {
      icon: <Award className="h-8 w-8 text-cyan-500" aria-hidden="true" />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical principles in all our business relationships.",
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-500" aria-hidden="true" />,
      title: "Client Success",
      description: "We measure our success by the positive impact our solutions have on our clients' businesses.",
    },
    {
      icon: <Zap className="h-8 w-8 text-cyan-500" aria-hidden="true" />,
      title: "Continuous Improvement",
      description: "We're dedicated to learning, growing, and refining our processes to deliver ever-better results.",
    },
  ]

  // Team members data
  const teamMembers = [
    {
      name: "Omar A. Gerardo",
      role: "Co-founder",
      image: "/projects/Omar-G.jpg",
    },
    {
      name: "Jean Lorenz R. Recato",
      role: "Co-founder",
      image: "/projects/Jean-R.JPG",
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
              About <AnimatedGradientText>WeaveDev Co.</AnimatedGradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              We're a team of passionate developers, designers, and strategists dedicated to crafting innovative
              software solutions that drive business success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-800">
                  <Image
                    src="/projects/about-img.jpg"
                    alt="WeaveDev Co. team collaborating in the office"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold">2+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <h2 className="text-3xl font-bold mb-6">
                Our <AnimatedGradientText>Story</AnimatedGradientText>
              </h2>
              <p className="text-gray-300 mb-6">
                Founded in 2024, WeaveDev Co. is a passionate startup dedicated to helping businesses harness technology for real-world impact. Our journey began with a small, driven team eager to deliver innovative, high-quality software solutions.
              </p>
              <p className="text-gray-300 mb-6">
                As a new player in the industry, we focus on building strong partnerships and delivering tailored solutions that empower our clients to grow and succeed in a digital world.
              </p>
              <p className="text-gray-300 mb-8">
                We are committed to continuous learning, creative problem-solving, and making a difference as a modern tech startup.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2" aria-hidden="true" />
                  <span>3+ Successful Projects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-2" aria-hidden="true" />
                  <span>3+ Enterprise Clients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2" aria-hidden="true" />
                  <span>Global Presence</span>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Mission & <AnimatedGradientText>Vision</AnimatedGradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Guided by our core principles, we're committed to delivering exceptional value through innovative software
              solutions.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInView className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                Empower businesses with innovative software that solves real problems and drives growth.
              </p>
              <p className="text-gray-300">
                We listen, learn, and deliver solutions that make a difference.
              </p>
            </FadeInView>

            <FadeInView delay={0.2} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                Be the go-to partner for startups and businesses seeking creative, impactful technology.
              </p>
              <p className="text-gray-300">
                We see a future where every business can thrive with the right digital tools.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core <AnimatedGradientText>Values</AnimatedGradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do, from how we develop software to how we interact with our clients
              and each other.
            </p>
          </FadeInView>

          <CardGrid columns={{ mobile: 3, tablet: 3, desktop: 3 }} gap="gap-6" scrollable={true} className="px-2.5">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border hover:border-purple-500/50 transition-colors overflow-hidden group h-full card-hover-effect min-h-[360px] md:min-h-[332px] max-w-[400px] mx-[10px] w-full"
              >
                <CardContent className="p-4 md:p-6 card-content h-full flex flex-col items-center justify-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-center">{value.title}</h3>
                  <p className="text-gray-400 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <AnimatedGradientText>Team</AnimatedGradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our diverse team of experts brings together a wealth of experience across various technologies and
              industries.
            </p>
          </FadeInView>

          {/* Desktop grid - hidden on mobile and tablet */}
          <div className="hidden lg:flex lg:justify-center lg:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden w-[320px] max-w-xs">
                <div className="aspect-square relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover max-h-[318px] object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile and tablet: flex wrap, no overflow-x */}
          <div className="lg:hidden flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800/50 border-gray-700 rounded-xl overflow-hidden w-[320px] max-w-xs mb-6">
                <div className="aspect-square relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover max-h-[318px] object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Our team extends beyond these key members to include talented developers, designers, project managers, and
              quality assurance specialists who work together to deliver exceptional results.
            </p>
            <AnimatedButton>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90"
                >
                  Join Our Team
                </Button>
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <AnimatedGradientText>Impact</AnimatedGradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We measure our success by the impact we have on our clients' businesses.
            </p>
          </FadeInView>

          <CardGrid columns={{ mobile: 1, tablet: 2, desktop: 4 }} gap="gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                200%
              </div>
              <p className="text-foreground/80">Average ROI</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                40%
              </div>
              <p className="text-foreground/80">Operational Efficiency Increase</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                30%
              </div>
              <p className="text-foreground/80">Cost Reduction</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                95%
              </div>
              <p className="text-foreground/80">Client Satisfaction Rate</p>
            </div>
          </CardGrid>
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
              Ready to <AnimatedGradientText>Collaborate</AnimatedGradientText> With Us?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss how our team can help bring your vision to life with custom software solutions tailored to
              your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </AnimatedButton>
              <AnimatedButton>
                <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  View Our Work
                </Button>
              </AnimatedButton>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  )
}
