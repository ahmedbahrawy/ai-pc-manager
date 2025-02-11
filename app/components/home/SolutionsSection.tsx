"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/app/components/ui/card"
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS } from "@/app/lib/animations"
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { TextGroup } from "@/app/components/atoms/TextGroup"
import { Text } from "@/app/components/atoms/Text"

const SolutionCard = memo(({ solution }: { solution: typeof solutions[0] }) => {
  const Icon = solution.icon
  return (
    <Link href={solution.href} prefetch={false}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
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

const solutions = [
  {
    title: "Personal",
    description: "Perfect for individual developers and small projects.",
    icon: PersonIcon,
    href: "/solutions/personal",
  },
  {
    title: "Team",
    description: "Collaborate effectively with your team and scale as you grow.",
    icon: TeamIcon,
    href: "/solutions/team",
  },
  {
    title: "Enterprise",
    description: "Enterprise-grade solutions for large organizations.",
    icon: BuildingIcon,
    href: "/solutions/enterprise",
  },
  {
    title: "Custom",
    description: "Custom solutions tailored to your specific needs.",
    icon: CustomIcon,
    href: "/solutions/custom",
  },
]

function PersonIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function TeamIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function BuildingIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}

function CustomIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

export function SolutionsSection() {
  return (
    <Section spacing="2xl">
      <Stack gap="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={STAGGER_CONTAINER_VARIANTS}
        >
          <TextGroup
            as={motion.div}
            variants={STAGGER_CHILD_VARIANTS}
            title="Solutions for every need"
            description="Whether you're a solo developer or part of a large team, we have the right solution for you."
            align="center"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={STAGGER_CONTAINER_VARIANTS}
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {solutions.map((solution) => (
            <motion.div key={solution.title} variants={STAGGER_CHILD_VARIANTS}>
              <SolutionCard solution={solution} />
            </motion.div>
          ))}
        </motion.div>
      </Stack>
    </Section>
  )
} 