"use client"

import { motion } from "framer-motion"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/app/lib/animations"
import { HOME_FEATURES } from "@/app/lib/constants/home"

export function FeaturesSection() {
  return (
    <section className="container py-16 sm:py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.h2
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {HOME_FEATURES.title}
        </motion.h2>
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="mt-4 text-lg text-muted-foreground"
        >
          {HOME_FEATURES.description}
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        {HOME_FEATURES.items.map((feature) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="relative pl-14 sm:pl-16"
            >
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-semibold tracking-tight">{feature.title}</h3>
              </div>
              <p className="mt-2 text-base text-muted-foreground">{feature.description}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
} 