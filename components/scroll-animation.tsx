"use client"

import type { ReactNode } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

interface AnimatedProps {
  children: ReactNode
  delay?: number
  className?: string
}

// Update StaggerContainer component
export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    margin: "-50px 0px",
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Add a new component for scroll-triggered rotating elements
export function RotateIn({ children, delay = 0, className = "" }: AnimatedProps) {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    margin: "-50px 0px",
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
          delay,
          duration: 0.6,
          ease: "easeOut",
        },
      })
    }
  }, [controls, inView, delay])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, rotate: -10, scale: 0.9 }} animate={controls} className={className}>
      {children}
    </motion.div>
  )
}
