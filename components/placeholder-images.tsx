"use client"

import { useEffect, useRef } from "react"

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
  bgColor?: string
  textColor?: string
}

export function PlaceholderImage({
  width,
  height,
  text = "WeaveDev Co.",
  className = "",
  bgColor = "linear-gradient(135deg, #7c3aed, #06b6d4)",
  textColor = "#ffffff",
}: PlaceholderImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    if (bgColor === "linear-gradient(135deg, #7c3aed, #06b6d4)") {
      gradient.addColorStop(0, "#7c3aed")
      gradient.addColorStop(1, "#06b6d4")
      ctx.fillStyle = gradient
    } else {
      ctx.fillStyle = bgColor
    }
    ctx.fillRect(0, 0, width, height)

    // Add some geometric shapes for visual interest
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
    ctx.beginPath()
    ctx.arc(width * 0.8, height * 0.2, width * 0.3, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
    ctx.beginPath()
    ctx.arc(width * 0.2, height * 0.8, width * 0.25, 0, Math.PI * 2)
    ctx.fill()

    // Add text
    ctx.fillStyle = textColor
    ctx.font = `bold ${Math.min(width, height) * 0.08}px Arial, sans-serif`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(text, width / 2, height / 2)

    // Add dimensions text
    ctx.font = `${Math.min(width, height) * 0.04}px Arial, sans-serif`
    ctx.fillText(`${width}x${height}`, width / 2, height / 2 + Math.min(width, height) * 0.1)
  }, [width, height, text, bgColor, textColor])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      aria-label={`Placeholder image: ${text}`}
      role="img"
    />
  )
}

export function ProjectPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <PlaceholderImage width={800} height={600} text="Project Screenshot" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <span className="text-xs text-cyan-400 font-medium mb-2">PROJECT</span>
        <h3 className="text-xl font-bold text-white mb-2">Project Title</h3>
        <p className="text-gray-300 text-sm">Brief description of the project and its key features.</p>
      </div>
    </div>
  )
}

export function TeamMemberPlaceholder({
  name = "Team Member",
  role = "Position",
  className = "",
}: { name?: string; role?: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <PlaceholderImage width={400} height={400} text={name.charAt(0)} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-gray-300">{role}</p>
        </div>
      </div>
    </div>
  )
}
