"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { 
  STAGGER_ANIMATION_PROPS, 
  STAGGER_ITEM_VARIANTS,
  VIEWPORT_MARGIN 
} from "@/app/lib/animations"
import { HOME_CTA } from "@/app/lib/constants/home"
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { TextGroup } from "@/app/components/atoms/TextGroup"

export function CTASection() {
  return (
    <Section spacing="xl" center className="relative isolate overflow-hidden">
      <Stack gap="lg">
        <motion.div
          {...STAGGER_ANIMATION_PROPS}
          viewport={VIEWPORT_MARGIN}
        >
          <TextGroup
            as={motion.div}
            variants={STAGGER_ITEM_VARIANTS}
            title={`${HOME_CTA.title.main} ${HOME_CTA.title.sub}`}
            description={HOME_CTA.description}
            align="center"
          />
        </motion.div>

        <motion.div
          variants={STAGGER_ITEM_VARIANTS}
        >
          <Stack direction="row" gap="md" justify="center">
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
          </Stack>
        </motion.div>
      </Stack>

      {/* Background Gradient */}
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
    </Section>
  )
} 