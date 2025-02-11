"use client"

import { motion } from "framer-motion"
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { TextGroup } from "@/app/components/atoms/TextGroup"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS } from "@/app/lib/animations"

export function HeroSection() {
  return (
    <Section spacing="2xl" center>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={STAGGER_CONTAINER_VARIANTS}
        className="w-full"
      >
        <Stack gap="xl" align="center" className="w-full">
          <TextGroup
            as={motion.div}
            variants={STAGGER_CHILD_VARIANTS}
            title="Build better software with AI-powered development"
            description="Experience the future of software development with our AI-powered platform. Write better code, faster and with fewer bugs."
            titleSize="4xl"
            align="center"
          />

          <motion.div variants={STAGGER_CHILD_VARIANTS}>
            <Stack direction="row" gap="md">
              <Button size="lg" asChild>
                <Link href="/signup">Get started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/docs">Documentation</Link>
              </Button>
            </Stack>
          </motion.div>

          <motion.div
            variants={STAGGER_CHILD_VARIANTS}
            className="relative aspect-[16/9] w-full max-w-6xl overflow-hidden rounded-lg bg-muted shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </motion.div>
        </Stack>
      </motion.div>
    </Section>
  )
} 