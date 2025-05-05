"use client"

import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Code, Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const footerControls = useAnimation()

  useEffect(() => {
    if (footerInView) {
      footerControls.start("visible")
    }
  }, [footerControls, footerInView])

  return (
    <motion.footer
      ref={footerRef}
      variants={footerVariants}
      initial="hidden"
      animate={footerControls}
      className="bg-muted/30 pt-12 md:pt-16 pb-8 border-t border-border"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info - Full width on mobile */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-2 rounded-lg">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">WeaveDev Co.</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Crafting bespoke software solutions tailored to address the unique challenges of your business.
            </p>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-foreground/80 text-wrap-pretty">Quezon City, Philippines 1126</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-foreground/80">(+63) 976-300-7638</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-foreground/80">weavedevsolutions@gmail.com</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quick Links - Better spacing on mobile */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            {/* Quick links content with improved spacing */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <motion.li variants={itemVariants} className="mb-2">
                <Link href="/" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </motion.li>
              <motion.li variants={itemVariants} className="mb-2">
                <Link href="/about" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </motion.li>
              <motion.li variants={itemVariants} className="mb-2">
                <Link href="/services" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </motion.li>
              <motion.li variants={itemVariants} className="mb-2">
                <Link href="/projects" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Projects
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/contact" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Services - Better spacing on mobile */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            {/* Services content with improved spacing */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <motion.li variants={itemVariants} className="mb-2">
                <Link href="/services#custom-software" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Custom Software Development
                </Link>
              </motion.li>
              <motion.li variants={itemVariants} className="mb-2">
                <Link href="/services#web-applications" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Web Applications
                </Link>
              </motion.li>
              <motion.li variants={itemVariants} className="mb-2">
                <Link href="/services#branding-research" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Branding Research
                </Link>
              </motion.li>
              <motion.li variants={itemVariants} className="mb-2">
                <Link href="/services#low-no-code-apps" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Low/No Code Applications
                </Link>
              </motion.li>
              <motion.li variants={itemVariants} className="mb-2">
                <Link href="/services#ui-ux-design" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  UI/UX Design
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/services#ai-integration" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  AI Integration
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Newsletter - Full width on mobile */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Stay Updated</h3>
            {/* Newsletter content */}
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 mt-6">
              {/* <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} WeaveDev Co. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
