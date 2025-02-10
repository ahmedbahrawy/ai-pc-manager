"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/app/lib/animations'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="absolute inset-0 bg-grid-slate-200/[0.04] bg-[size:20px_20px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.7))]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Empowering Business Growth Through{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              AI-Driven Innovation
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Unlock unprecedented growth with our AI-Persona driven strategic enhancement solutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/consultation"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-full border border-input bg-background px-8 font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 