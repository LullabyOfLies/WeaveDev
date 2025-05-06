import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WeaveDev Co. | Custom Software Solutions",
  description: "Crafting bespoke software solutions tailored to address the unique challenges of your business.",
  generator: 'v0.dev',
  metadataBase: new URL('https://weavedev.co/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WeaveDev Co. | Custom Software Solutions',
    description: 'Crafting bespoke software solutions tailored to address the unique challenges of your business.',
    url: 'https://weavedev.co/',
    siteName: 'WeaveDev Co.',
    images: [
      {
        url: '/projects/weave-icon-ico.ico',
        width: 1200,
        height: 630,
        alt: 'WeaveDev Co. Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeaveDev Co. | Custom Software Solutions',
    description: 'Crafting bespoke software solutions tailored to address the unique challenges of your business.',
    images: ['/projects/weave-icon-ico.ico'],
    creator: '@weavedevco',
  },
  themeColor: '#09090b',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/projects/weave-icon-ico.ico',
    shortcut: '/projects/weave-icon-ico.ico',
    apple: '/projects/weave-icon-ico.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/projects/weave-icon-ico.ico" type="image/x-icon" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#09090b" />
        <link rel="canonical" href="https://weavedev.co/" />
        <meta property="og:site_name" content="WeaveDev Co." />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <SmoothScroll>
          <ScrollIndicator />
          <Navbar />
          <main className="min-h-screen pt-20 relative px-2.5 md:px-2.5 lg:px-0 overflow-x-hidden">
            {/* Add animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-float animation-delay-2000"></div>
            </div>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
