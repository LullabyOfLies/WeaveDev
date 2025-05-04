"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 z-50 origin-left"
        style={{ scaleX }}
      />
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-card border border-border shadow-lg z-50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </>
  )
}
