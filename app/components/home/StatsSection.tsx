"use client"

import { motion } from "framer-motion"
import { 
  STAGGER_ANIMATION_PROPS, 
  STAGGER_ITEM_VARIANTS,
  SCALE_VARIANTS 
} from "@/app/lib/animations"
import { HOME_STATS } from "@/app/lib/constants/home"
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { TextGroup } from "@/app/components/atoms/TextGroup"
import { Text } from "@/app/components/atoms/Text"

export function StatsSection() {
  return (
    <Section spacing="lg" center>
      <Stack gap="xl">
        <motion.div {...STAGGER_ANIMATION_PROPS}>
          <TextGroup
            as={motion.div}
            variants={STAGGER_ITEM_VARIANTS}
            title={HOME_STATS.title}
            description={HOME_STATS.description}
            align="center"
          />
        </motion.div>

        <motion.dl
          {...STAGGER_ANIMATION_PROPS}
          className="grid max-w-4xl grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {HOME_STATS.items.map((stat) => (
            <motion.div
              key={stat.label}
              variants={SCALE_VARIANTS}
            >
              <Stack align="center" gap="sm" className="max-w-xs mx-auto">
                <Text
                  as="dd"
                  size="2xl"
                  weight="semibold"
                  className="tracking-tight sm:text-4xl"
                >
                  {stat.value}
                </Text>
                <Text
                  as="dt"
                  color="muted"
                >
                  {stat.label}
                </Text>
              </Stack>
            </motion.div>
          ))}
        </motion.dl>
      </Stack>
    </Section>
  )
} 