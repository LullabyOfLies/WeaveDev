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

export function FadeIn({ children, delay = 0, className = "" }: AnimatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Update the FadeInView component to use the useInView hook more effectively
// and only animate when in view

// Find the FadeInView component and replace it with this implementation:
export function FadeInView({ children, delay = 0, className = "" }: AnimatedProps) {
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
        y: 0,
        transition: {
          delay,
          duration: 0.5,
          ease: "easeOut",
        },
      })
    }
  }, [controls, inView, delay])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={controls} className={className}>
      {children}
    </motion.div>
  )
}

// Update SlideInLeft component
export function SlideInLeft({ children, delay = 0, className = "" }: AnimatedProps) {
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
        x: 0,
        transition: {
          delay,
          duration: 0.5,
          ease: "easeOut",
        },
      })
    }
  }, [controls, inView, delay])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={controls} className={className}>
      {children}
    </motion.div>
  )
}

// Update SlideInRight component
export function SlideInRight({ children, delay = 0, className = "" }: AnimatedProps) {
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
        x: 0,
        transition: {
          delay,
          duration: 0.5,
          ease: "easeOut",
        },
      })
    }
  }, [controls, inView, delay])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: 50 }} animate={controls} className={className}>
      {children}
    </motion.div>
  )
}

// Update ScaleIn component
export function ScaleIn({ children, delay = 0, className = "" }: AnimatedProps) {
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
        scale: 1,
        transition: {
          delay,
          duration: 0.5,
          ease: "easeOut",
        },
      })
    }
  }, [controls, inView, delay])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, scale: 0.8 }} animate={controls} className={className}>
      {children}
    </motion.div>
  )
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

export function AnimatedGradientText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className={`custom-gradient-text bg-300% ${className}`}
      style={{
        backgroundImage: "linear-gradient(to right, #7c3aed, #06b6d4, #7c3aed)",
        backgroundSize: "300% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </motion.span>
  )
}

export function AnimatedButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={className}>
      {children}
    </motion.div>
  )
}

export function FloatingAnimation({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Add a new component for animated background elements
export function AnimatedBackgroundElement({
  className = "",
  size = "md",
  color = "purple",
  delay = 0,
}: {
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "purple" | "cyan"
  delay?: number
}) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-96 h-96",
  }

  const colorClasses = {
    purple: "bg-purple-500/5 dark:bg-purple-500/10",
    cyan: "bg-cyan-500/5 dark:bg-cyan-500/10",
  }

  return (
    <motion.div
      className={`rounded-full absolute blur-3xl ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={{
        x: [0, 10, 0, -10, 0],
        y: [0, -10, 0, 10, 0],
      }}
      transition={{
        duration: 20,
        ease: "easeInOut",
        delay,
        repeat: Number.POSITIVE_INFINITY,
      }}
    />
  )
}

// Add a new scroll-triggered component for revealing content from bottom
export function RevealFromBottom({ children, delay = 0, className = "" }: AnimatedProps) {
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
        y: 0,
        transition: {
          delay,
          duration: 0.6,
          ease: "easeOut",
        },
      })
    }
  }, [controls, inView, delay])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 100 }} animate={controls} className={className}>
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
