"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="relative overflow-hidden border-t bg-secondary/10 py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-200/[0.04] bg-[size:20px_20px]" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-[46rem] text-muted-foreground sm:text-lg sm:leading-7">
            Join the growing number of businesses leveraging our AI-powered solutions for unprecedented growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/consultation"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex h-11 items-center justify-center rounded-full border border-input bg-background px-8 font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
} 