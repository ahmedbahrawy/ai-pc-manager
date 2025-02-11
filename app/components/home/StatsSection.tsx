"use client"

import { motion } from "framer-motion"
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { TextGroup } from "@/app/components/atoms/TextGroup"
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS } from "@/app/lib/animations"

export function StatsSection() {
  return (
    <Section spacing="2xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={STAGGER_CONTAINER_VARIANTS}
      >
        <Stack gap="xl">
          <TextGroup
            as={motion.div}
            variants={STAGGER_CHILD_VARIANTS}
            title="Trusted by developers worldwide"
            description="Join thousands of developers who are already using our platform to build better software."
            align="center"
          />

          <motion.div variants={STAGGER_CHILD_VARIANTS}>
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col gap-2"
                >
                  <dt className="text-base text-muted-foreground">{stat.name}</dt>
                  <dd className="text-3xl font-semibold tracking-tight">{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </Stack>
      </motion.div>
    </Section>
  )
}

const stats = [
  { name: "Active Users", value: "100,000+" },
  { name: "Lines of Code", value: "1M+" },
  { name: "Pull Requests", value: "500K+" },
  { name: "Code Reviews", value: "250K+" },
] 