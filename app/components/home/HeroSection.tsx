import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/app/lib/animations"
import { HOME_HERO } from "@/app/lib/constants/home"

export function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 py-12 text-center md:py-16"
    >
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="relative z-10 max-w-4xl px-6 md:px-8"
      >
        <h1 className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
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
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <Button size="lg" className="h-12 px-8" asChild>
          <Link href={HOME_HERO.cta.primary.href}>
            {HOME_HERO.cta.primary.text}
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="h-12 px-8" asChild>
          <Link href={HOME_HERO.cta.secondary.href}>
            {HOME_HERO.cta.secondary.text}
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-gray-900/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80" />
      </motion.div>
    </motion.section>
  )
} 