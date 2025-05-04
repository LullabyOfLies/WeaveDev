"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Filter, Search, Code, Globe, Smartphone, Database, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInView, AnimatedGradientText, AnimatedButton } from "@/components/animated-elements"
import { CardGrid } from "@/components/card-grid"
import { useState } from "react"

// Project data
const projects = [
  {
    id: "banking-platform",
    title: "Modern Banking Platform",
    category: "FINTECH",
    description:
      "A comprehensive digital banking solution with advanced security features and intuitive user experience.",
    image: "/placeholder.svg?height=600&width=800",
    color: "cyan",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    link: "/projects/banking-platform",
  },
  {
    id: "healthcare-system",
    title: "Patient Management System",
    category: "HEALTHCARE",
    description: "A secure, HIPAA-compliant platform that streamlines patient care and administrative workflows.",
    image: "/placeholder.svg?height=600&width=800",
    color: "purple",
    technologies: ["React", "Python", "Django", "MongoDB"],
    link: "/projects/healthcare-system",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Transformation",
    category: "RETAIL",
    description: "A scalable e-commerce platform that increased online sales by 200% and improved customer engagement.",
    image: "/placeholder.svg?height=600&width=800",
    color: "cyan",
    technologies: ["Next.js", "Node.js", "Stripe", "Redis"],
    link: "/projects/ecommerce-platform",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Management",
    category: "LOGISTICS",
    description: "An integrated solution that optimized inventory management and reduced operational costs by 30%.",
    image: "/placeholder.svg?height=600&width=800",
    color: "purple",
    technologies: ["Vue.js", "Java", "Spring Boot", "PostgreSQL"],
    link: "/projects/supply-chain",
  },
  {
    id: "real-estate",
    title: "Real Estate Platform",
    category: "REAL ESTATE",
    description: "A custom property management system that streamlined operations and enhanced client satisfaction.",
    image: "/placeholder.svg?height=600&width=800",
    color: "cyan",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB"],
    link: "/projects/real-estate",
  },
  {
    id: "education-platform",
    title: "Educational Learning System",
    category: "EDUCATION",
    description: "An interactive learning platform that improved student engagement and academic performance.",
    image: "/placeholder.svg?height=600&width=800",
    color: "purple",
    technologies: ["React", "Python", "Django", "PostgreSQL"],
    link: "/projects/education-platform",
  },
  {
    id: "manufacturing-automation",
    title: "Manufacturing Automation",
    category: "MANUFACTURING",
    description: "An IoT-based system that automated production processes and increased manufacturing efficiency.",
    image: "/placeholder.svg?height=600&width=800",
    color: "cyan",
    technologies: ["Angular", "Node.js", "MQTT", "MongoDB"],
    link: "/projects/manufacturing-automation",
  },
  {
    id: "travel-booking",
    title: "Travel Booking Platform",
    category: "TRAVEL",
    description:
      "A comprehensive travel booking system with personalized recommendations and seamless booking experience.",
    image: "/placeholder.svg?height=600&width=800",
    color: "purple",
    technologies: ["React", "Node.js", "Redis", "PostgreSQL"],
    link: "/projects/travel-booking",
  },
]

// Available categories for filtering
const categories = [
  "ALL",
  "FINTECH",
  "HEALTHCARE",
  "RETAIL",
  "LOGISTICS",
  "REAL ESTATE",
  "EDUCATION",
  "MANUFACTURING",
  "TRAVEL",
]

// Project card component
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <Link href={project.link} className="block h-full">
    <Card className="overflow-hidden border border-border group h-full hover:border-purple-500/50 transition-colors card-hover-effect">
      <div className="aspect-[4/3] relative">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} project`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
          <span
            className={`text-xs ${project.color === "purple" ? "text-purple-400" : "text-cyan-400"} font-medium mb-2`}
          >
            {project.category}
          </span>
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-4 text-sm line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-xs bg-background/20 backdrop-blur-sm px-2 py-0.5 rounded">
                {tech}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center text-white font-medium">
            View Project
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </div>
        </div>
      </div>
    </Card>
  </Link>
)

// Featured project types
const featuredProjectTypes = [
  {
    icon: <Code className="h-10 w-10 text-purple-500" />,
    title: "Web Applications",
    description: "Custom web applications built with modern frameworks and technologies.",
    count: 12,
  },
  {
    icon: <Smartphone className="h-10 w-10 text-cyan-500" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    count: 8,
  },
  {
    icon: <Database className="h-10 w-10 text-purple-500" />,
    title: "Data Solutions",
    description: "Big data processing, analytics, and visualization solutions.",
    count: 6,
  },
  {
    icon: <Globe className="h-10 w-10 text-cyan-500" />,
    title: "E-commerce",
    description: "Online stores and marketplaces with secure payment processing.",
    count: 9,
  },
  {
    icon: <Layers className="h-10 w-10 text-purple-500" />,
    title: "Enterprise Systems",
    description: "Large-scale business systems for enterprise clients.",
    count: 7,
  },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("ALL")

  // Filter projects based on search term and category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "ALL" || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

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
              Our <AnimatedGradientText>Projects</AnimatedGradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Explore our portfolio of successful projects across various industries and technologies. From web
              applications to mobile apps, we've delivered solutions that drive business growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <AnimatedGradientText>Expertise</AnimatedGradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We specialize in a wide range of project types, delivering tailored solutions for businesses of all sizes.
            </p>
          </FadeInView>

          <CardGrid columns={{ mobile: 1, tablet: 2, desktop: 5 }} gap="gap-6">
            {featuredProjectTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors h-full"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{type.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-gray-400 mb-4">{type.description}</p>
                  <div className="text-sm text-gray-500">
                    <span className="text-purple-400 font-bold">{type.count}</span> projects completed
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-10 bg-background border-border"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search projects"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto" role="radiogroup" aria-label="Filter by category">
              <div className="flex items-center mr-2">
                <Filter className="h-4 w-4 mr-2 text-muted-foreground" aria-hidden="true" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-0"
                      : "border-border"
                  }
                  aria-pressed={selectedCategory === category}
                  role="radio"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No projects found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("ALL")
                }}
                className="btn-primary"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <CardGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </CardGrid>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project <AnimatedGradientText>Success</AnimatedGradientText> Metrics
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our projects deliver measurable results and tangible business outcomes.
            </p>
          </FadeInView>

          <CardGrid columns={{ mobile: 3, tablet: 3, desktop: 3 }} gap="gap-8" scrollable={true} className="px-2.5">
            <Card className="bg-gray-800/50 border-gray-700 p-6 text-center h-full card-hover-effect min-h-[268px] md:min-h-[332px] w-[100vw]">
              <CardContent className="p-0 h-full">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                  98%
                </div>
                <p className="text-gray-300">Client Satisfaction Rate</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 p-6 text-center h-full card-hover-effect min-h-[268px] md:min-h-[332px] w-[100vw]">
              <CardContent className="p-0 h-full">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                  42
                </div>
                <p className="text-gray-300">Projects Completed Last Year</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 p-6 text-center h-full card-hover-effect min-h-[268px] md:min-h-[332px] w-[100vw]">
              <CardContent className="p-0 h-full">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                  15+
                </div>
                <p className="text-gray-300">Industries Served</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 p-6 text-center h-full card-hover-effect min-h-[268px] md:min-h-[332px] w-[100vw]">
              <CardContent className="p-0 h-full">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                  94%
                </div>
                <p className="text-gray-300">On-time Delivery</p>
              </CardContent>
            </Card>
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
              Ready to <AnimatedGradientText>Start</AnimatedGradientText> Your Project?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss how we can help bring your vision to life with a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90"
                  >
                    Start a Project
                  </Button>
                </Link>
              </AnimatedButton>
              <AnimatedButton>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                    Explore Our Services
                  </Button>
                </Link>
              </AnimatedButton>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  )
}
