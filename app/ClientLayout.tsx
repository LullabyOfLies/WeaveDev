"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import { usePathname } from "next/navigation"
import { AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <body className={`${inter.className} bg-black text-white`}>
      <AnimatePresence mode="wait">
        <div key={pathname}>{children}</div>
      </AnimatePresence>
    </body>
  )
}
