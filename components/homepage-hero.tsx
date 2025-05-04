"use client"

import Link from "next/link"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedGradientText, AnimatedButton, FloatingAnimation } from "@/components/animated-elements"

export function HomepageHero() {
  // Add these lines after the existing imports
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  // Keep the rest of the component as is, but update the return statement
  // to use the new animation controls
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 dark:bg-black/80 light:bg-gray-100/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      {/* Animated background elements with reduced intensity for better readability */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-purple-500/5 dark:bg-purple-500/10 light:bg-purple-500/5 blur-3xl"
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -30, 0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        style={{
          top: "20%",
          left: "15%",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 light:bg-cyan-500/5 blur-3xl"
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 40, 0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 1,
        }}
        style={{
          bottom: "10%",
          right: "10%",
        }}
      />

      <div className="container mx-auto px-4 z-10 py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <FloatingAnimation>
              <div className="inline-flex items-center bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-border/50">
                <span className="text-sm text-foreground/80 dark:text-white/80 light:text-gray-800">
                  Innovative Software Solutions
                </span>
              </div>
            </FloatingAnimation>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground dark:text-white light:text-gray-900"
          >
            We <AnimatedGradientText>Weave</AnimatedGradientText> Your Digital Vision Into Reality
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 light:text-gray-700 mb-10 max-w-3xl"
          >
            WeaveDev Co. crafts bespoke software solutions tailored to address the unique challenges of your business.
            From concept to deployment, we're with you every step of the way.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <AnimatedButton>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 border-0 text-white hover:opacity-90 w-full sm:w-auto"
                >
                  Get Started
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                    className="ml-2"
                  >
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </motion.span>
                </Button>
              </Link>
            </AnimatedButton>

            <AnimatedButton>
              <Link href="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-accent w-full sm:w-auto dark:text-white light:text-gray-800"
                >
                  View Our Work
                </Button>
              </Link>
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
