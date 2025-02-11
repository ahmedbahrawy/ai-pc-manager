import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/app/lib/animations"
import { HOME_CTA } from "@/app/lib/constants/home"

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {HOME_CTA.title.main}
            <br />
            {HOME_CTA.title.sub}
          </motion.h2>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
          >
            {HOME_CTA.description}
          </motion.p>
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button size="lg" className="h-12 px-8" asChild>
              <Link href={HOME_CTA.cta.primary.href}>
                {HOME_CTA.cta.primary.text}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8" asChild>
              <Link href={HOME_CTA.cta.secondary.href}>
                {HOME_CTA.cta.secondary.text}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div
        className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-primary/50 to-secondary/50 opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
    </section>
  )
} 