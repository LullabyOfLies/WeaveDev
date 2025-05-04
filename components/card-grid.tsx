"use client"

import React, { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CardGridProps {
  children: React.ReactNode
  className?: string
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  gap?: string
  scrollable?: boolean
}

/**
 * CardGrid component that handles both grid and scrollable layouts
 * Uses CSS Grid for desktop and CSS Flexbox with overflow for mobile/tablet
 */
export function CardGrid({
  children,
  className = "",
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "gap-6",
  scrollable = true,
}: CardGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check scroll capability
  const checkScrollability = () => {
    const container = scrollContainerRef.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
  }

  // Check if we're on mobile/tablet
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Set up scroll event listeners
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || !scrollable || !isMobile) return

    checkScrollability()
    container.addEventListener("scroll", checkScrollability)
    window.addEventListener("resize", checkScrollability)

    return () => {
      container.removeEventListener("scroll", checkScrollability)
      window.removeEventListener("resize", checkScrollability)
    }
  }, [scrollable, isMobile])

  // Handle scroll button clicks
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = container.clientWidth * 0.8
    const newScrollPosition =
      direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    })
  }

  // Determine grid columns based on screen size
  const gridCols = `grid-cols-1 md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop}`

  // If not mobile or scrollable is disabled, render a standard grid
  if (!isMobile || !scrollable) {
    return <div className={cn(`grid ${gridCols} ${gap}`, className)}>{children}</div>
  }

  // Otherwise, render a scrollable container
  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className={cn("flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4", className)}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child

          return React.cloneElement(child, {
            ...child.props,
            className: cn(child.props.className || "", "snap-start flex-shrink-0 min-w-[350px] w-[85%] sm:w-[45%]"),
          })
        })}
      </div>

      {scrollable && (canScrollLeft || canScrollRight) && (
        <>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background/80 backdrop-blur-sm border-border z-10 shadow-md transition-opacity duration-200",
              !canScrollLeft && "opacity-0 pointer-events-none",
            )}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background/80 backdrop-blur-sm border-border z-10 shadow-md transition-opacity duration-200",
              !canScrollRight && "opacity-0 pointer-events-none",
            )}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </>
      )}

      {/* Add scroll indicator dots for mobile */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
