"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SlideInLeft, SlideInRight, AnimatedGradientText, AnimatedButton } from "@/components/animated-elements"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Get in <AnimatedGradientText>Touch</AnimatedGradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <SlideInLeft>
              <Card className="border-border">
                <CardContent className="p-4 md:p-6">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <div className="bg-green-500/20 dark:bg-green-500/10 light:bg-green-500/20 rounded-full p-3 mb-4">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground text-center mb-6">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-0"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="bg-background border-border"
                            aria-required="true"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Your Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="bg-background border-border"
                            aria-required="true"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          rows={6}
                          required
                          className="bg-background border-border resize-none"
                        />
                      </div>
                      <AnimatedButton>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-0"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              Send Message
                              <Send className="ml-2 h-4 w-4" />
                            </span>
                          )}
                        </Button>
                      </AnimatedButton>
                    </form>
                  )}
                </CardContent>
              </Card>
            </SlideInLeft>

            <SlideInRight>
              <div className="space-y-6 md:space-y-8">
                <div className="bg-card border border-border rounded-xl p-4 md:p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Email Us Directly</h3>
                      <p className="text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <a
                    href="mailto:hello@weavedev.co"
                    className="text-lg font-medium text-foreground hover:text-purple-500 transition-colors"
                  >
                    hello@weavedev.co
                  </a>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 md:p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-12 h-12 rounded-full flex items-center justify-center">
                      <HelpCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
                      <p className="text-muted-foreground">Quick answers to common questions</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="mt-4 space-y-2">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is your typical project timeline?</AccordionTrigger>
                      <AccordionContent>
                        Project timelines vary based on scope and complexity. A simple web application might take 4-8
                        weeks, while more complex enterprise solutions can take 3-6 months. We'll provide a detailed
                        timeline during our initial consultation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do you handle project pricing?</AccordionTrigger>
                      <AccordionContent>
                        We offer flexible pricing models including fixed-price quotes for well-defined projects and time
                        and materials billing for more dynamic engagements. We'll recommend the best approach based on
                        your specific needs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Do you provide ongoing support?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer various support and maintenance packages to ensure your software continues to
                        perform optimally after launch. Our team can provide regular updates, bug fixes, and feature
                        enhancements as needed.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>What technologies do you specialize in?</AccordionTrigger>
                      <AccordionContent>
                        Our team is proficient in a wide range of technologies including React, Angular, Vue, Node.js,
                        Python, .NET, PostgreSQL, MongoDB, and more. We select the best technology stack based on your
                        project requirements.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>How do you ensure project quality?</AccordionTrigger>
                      <AccordionContent>
                        We follow industry best practices including agile methodologies, code reviews, automated
                        testing, and continuous integration. Our quality assurance team thoroughly tests all
                        deliverables before they reach you to ensure they meet our high standards.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>
    </div>
  )
}
