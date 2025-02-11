"use client"

import { memo } from "react"
import { motion, LazyMotion, domAnimation } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/app/components/ui/card"
import { FADE_DOWN_ANIMATION_VARIANTS, CARD_HOVER_MOTION_PROPS } from "@/app/lib/animations"
import { HOME_SOLUTIONS } from "@/app/lib/constants/home"

const SolutionCard = memo(({ solution }: { solution: typeof HOME_SOLUTIONS.items[0] }) => {
  const Icon = solution.icon
  return (
    <Link href={solution.href} prefetch={false}>
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} {...CARD_HOVER_MOTION_PROPS}>
        <Card className="h-full transition-colors hover:border-primary/50">
          <CardHeader className="pb-4">
            <div className="mb-2 inline-block rounded-lg bg-primary/10 p-2.5">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">{solution.title}</h3>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{solution.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
})

SolutionCard.displayName = "SolutionCard"

export function SolutionsSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="container py-16 sm:py-24 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {HOME_SOLUTIONS.title}
          </motion.h2>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-4 text-lg text-muted-foreground"
          >
            {HOME_SOLUTIONS.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mx-auto mt-16 grid max-w-lg gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:max-w-none xl:grid-cols-4"
        >
          {HOME_SOLUTIONS.items.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </motion.div>
      </section>
    </LazyMotion>
  )
} 