"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useTheme } from "next-themes"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiVuedotjs,
  SiAngular,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiTailwindcss,
  SiSass,
  SiRedux,
  SiGraphql,
  SiGit,
  SiJest,
  SiGithub,
} from "react-icons/si"

export function TechStackMarquee() {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false })
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [controls, isInView])

  // Removed cloud platform icons (AWS, Google Cloud) and replaced with other tech icons
  const techIcons = [
    { icon: SiReact, name: "React", color: "#61DAFB", lightColor: "#fff" },
    { icon: SiNextdotjs, name: "Next.js", color: "#fff", lightColor: "#fff" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6", lightColor: "#fff" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", lightColor: "#fff" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933", lightColor: "#fff" },
    { icon: SiPython, name: "Python", color: "#3776AB", lightColor: "#fff" },
    { icon: SiVuedotjs, name: "Vue.js", color: "#42B883", lightColor: "#fff" },
    { icon: SiAngular, name: "Angular", color: "#DD0031", lightColor: "#fff" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248", lightColor: "#fff" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791", lightColor: "#fff" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1", lightColor: "#fff" },
    { icon: SiDocker, name: "Docker", color: "#2496ED", lightColor: "#fff" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5", lightColor: "#fff" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", lightColor: "#fff" },
    { icon: SiSass, name: "Sass", color: "#CC6699", lightColor: "#fff" },
    { icon: SiRedux, name: "Redux", color: "#764ABC", lightColor: "#fff" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098", lightColor: "#fff" },
    { icon: SiGit, name: "Git", color: "#F05032", lightColor: "#fff" },
    { icon: SiJest, name: "Jest", color: "#C21325", lightColor: "#fff" },
    { icon: SiGithub, name: "GitHub", color: "#fff", lightColor: "#fff" },
  ]

  // Keep sizing and other classes, but remove color from iconClassName
  const iconClassName = "w-full h-full"

  return (
    <div ref={ref} className="w-full overflow-hidden bg-muted/30">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl font-bold mb-2">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">Tech Stack</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We leverage cutting-edge technologies to deliver exceptional software solutions
        </p>
      </motion.div>

      <div className="relative">
        {/* Gradient fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent dark:from-background light:from-white/90"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent dark:from-background light:from-white/90"></div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex space-x-6 md:space-x-12 pt-4 py-16" // Reduced spacing on mobile
            animate={controls}
            ref={ref}
          >
            {/* Duplicate the icons to create a seamless loop */}
            {[...techIcons, ...techIcons].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-card rounded-xl border border-border p-2 md:p-3 shadow-sm">
                  <tech.icon className={iconClassName} style={{ color: theme === 'dark' ? tech.lightColor : tech.color }} />
                </div>
                <span className="mt-2 text-xs md:text-sm text-foreground/70">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
