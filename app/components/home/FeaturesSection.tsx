"use client"

import { motion } from "framer-motion"
import { HOME_FEATURES } from "@/app/lib/constants/home"
import {
  STAGGER_ANIMATION_PROPS,
  STAGGER_ITEM_VARIANTS,
} from "@/app/lib/animations"
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"

export function FeaturesSection() {
  return (
    <Section spacing="lg" center>
      <motion.div {...STAGGER_ANIMATION_PROPS}>
        <motion.h2
          variants={STAGGER_ITEM_VARIANTS}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {HOME_FEATURES.title}
        </motion.h2>
        <motion.p
          variants={STAGGER_ITEM_VARIANTS}
          className="mt-4 text-lg text-muted-foreground"
        >
          {HOME_FEATURES.description}
        </motion.p>
      </motion.div>

      <motion.div
        {...STAGGER_ANIMATION_PROPS}
        className="mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        {HOME_FEATURES.items.map((feature) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              variants={STAGGER_ITEM_VARIANTS}
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
    </Section>
  )
} 