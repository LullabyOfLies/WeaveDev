"use client"

import type React from "react"

import { useEffect } from "react"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add smooth scrolling behavior to the html element
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth"
    }

    // Handle anchor links for smoother navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return

      const anchor = target.closest("a")
      if (!anchor) return

      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith("#") &&
        anchor.origin + anchor.pathname === window.location.origin + window.location.pathname
      ) {
        e.preventDefault()

        const targetElement = document.querySelector(anchor.hash)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })

          // Update URL without reload
          window.history.pushState(null, "", anchor.hash)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.scrollBehavior = ""
        document.removeEventListener("click", handleAnchorClick)
      }
    }
  }, [])

  return <>{children}</>
}
