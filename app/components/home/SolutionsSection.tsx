"use client"

import { memo } from "react"
import { motion, LazyMotion, domAnimation } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/app/components/ui/card"
import { 
  STAGGER_ANIMATION_PROPS,
  CARD_VARIANTS,
  VIEWPORT_MARGIN
} from "@/app/lib/animations"
import { HOME_SOLUTIONS } from "@/app/lib/constants/home"
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { TextGroup } from "@/app/components/atoms/TextGroup"
import { Text } from "@/app/components/atoms/Text"

const SolutionCard = memo(({ solution }: { solution: typeof HOME_SOLUTIONS.items[0] }) => {
  const Icon = solution.icon
  return (
    <Link href={solution.href} prefetch={false}>
      <motion.div 
        variants={CARD_VARIANTS}
        whileHover="hover"
        whileTap="tap"
      >
        <Card className="h-full transition-colors hover:border-primary/50">
          <CardHeader className="pb-4">
            <Stack gap="sm">
              <div className="inline-block rounded-lg bg-primary/10 p-2.5">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <Text as="h3" size="lg" weight="semibold">
                {solution.title}
              </Text>
            </Stack>
          </CardHeader>
          <CardContent>
            <Text size="sm" color="muted">
              {solution.description}
            </Text>
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
      <Section spacing="lg" center>
        <Stack gap="xl">
          <motion.div
            {...STAGGER_ANIMATION_PROPS}
            viewport={VIEWPORT_MARGIN}
          >
            <TextGroup
              as={motion.div}
              variants={CARD_VARIANTS}
              title={HOME_SOLUTIONS.title}
              description={HOME_SOLUTIONS.description}
              align="center"
            />
          </motion.div>

          <motion.div
            {...STAGGER_ANIMATION_PROPS}
            viewport={VIEWPORT_MARGIN}
            className="grid max-w-lg gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:max-w-none xl:grid-cols-4"
          >
            {HOME_SOLUTIONS.items.map((solution) => (
              <SolutionCard key={solution.title} solution={solution} />
            ))}
          </motion.div>
        </Stack>
      </Section>
    </LazyMotion>
  )
} 