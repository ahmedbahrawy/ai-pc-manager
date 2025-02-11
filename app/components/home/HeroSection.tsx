"use client"

import { motion, LazyMotion, domAnimation } from "framer-motion"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { 
  HERO_ANIMATION_PROPS,
  HERO_ITEM_VARIANTS
} from "@/app/lib/animations"
import { HOME_HERO } from "@/app/lib/constants/home"

export function HeroSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative isolate overflow-hidden">
        <motion.div
          {...HERO_ANIMATION_PROPS}
          className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 px-4 py-8 text-center sm:px-6 md:gap-8 md:py-16 lg:px-8"
        >
          <motion.div
            variants={HERO_ITEM_VARIANTS}
            className="relative z-10 mx-auto max-w-4xl"
          >
            <h1 className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl dark:from-gray-100 dark:to-gray-400">
              {HOME_HERO.title.main}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                {HOME_HERO.title.highlight}
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              {HOME_HERO.description}
            </p>
          </motion.div>

          <motion.div
            variants={HERO_ITEM_VARIANTS}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="h-12 px-8" asChild>
              <Link href={HOME_HERO.cta.primary.href} prefetch={false}>
                {HOME_HERO.cta.primary.text}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8" asChild>
              <Link href={HOME_HERO.cta.secondary.href} prefetch={false}>
                {HOME_HERO.cta.secondary.text}
              </Link>
            </Button>
          </motion.div>

          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid-gray-900/10 dark:bg-grid-gray-100/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
          </div>

          {/* Background Gradient */}
          <motion.div 
            variants={HERO_ITEM_VARIANTS}
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </motion.div>
        </motion.div>
      </section>
    </LazyMotion>
  )
} 