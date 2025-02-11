"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { TextGroup } from "@/app/components/atoms/TextGroup"
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS } from "@/app/lib/animations"

export function CTASection() {
  return (
    <Section spacing="2xl" center>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "100px" }}
        variants={STAGGER_CONTAINER_VARIANTS}
      >
        <Stack gap="lg" align="center">
          <TextGroup
            as={motion.div}
            variants={STAGGER_CHILD_VARIANTS}
            title="Ready to get started?"
            description="Join us today and experience the future of AI-powered development."
            align="center"
          />

          <motion.div variants={STAGGER_CHILD_VARIANTS}>
            <Stack direction="row" gap="md">
              <Button size="lg" asChild>
                <Link href="/signup">Get started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact sales</Link>
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </motion.div>

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