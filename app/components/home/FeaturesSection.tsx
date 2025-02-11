"use client"

import { motion } from "framer-motion"
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { TextGroup } from "@/app/components/atoms/TextGroup"
import { Text } from "@/app/components/atoms/Text"
import { Card } from "@/app/components/ui/card"
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS } from "@/app/lib/animations"

export function FeaturesSection() {
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
            title="Features that empower your development"
            description="Our platform provides powerful features to help you build better software, faster."
            align="center"
          />

          <motion.div variants={STAGGER_CHILD_VARIANTS}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="p-6">
                  <Stack gap="md">
                    <feature.icon className="h-8 w-8 text-primary" />
                    <Stack gap="sm">
                      <Text as="h3" size="lg" weight="semibold">
                        {feature.title}
                      </Text>
                      <Text color="muted">
                        {feature.description}
                      </Text>
                    </Stack>
                  </Stack>
                </Card>
              ))}
            </div>
          </motion.div>
        </Stack>
      </motion.div>
    </Section>
  )
}

const features = [
  {
    title: "AI-Powered Development",
    description: "Leverage the power of AI to write better code, faster and with fewer bugs.",
    icon: CodeIcon,
  },
  {
    title: "Real-time Collaboration",
    description: "Work together seamlessly with your team in real-time, no matter where you are.",
    icon: UsersIcon,
  },
  {
    title: "Smart Code Analysis",
    description: "Get instant feedback on your code quality and potential improvements.",
    icon: SearchCodeIcon,
  },
  {
    title: "Version Control",
    description: "Keep track of your code changes with built-in Git integration.",
    icon: GitBranchIcon,
  },
  {
    title: "Automated Testing",
    description: "Run tests automatically and get instant feedback on your changes.",
    icon: TestTubeIcon,
  },
  {
    title: "Cloud Deployment",
    description: "Deploy your applications to the cloud with just a few clicks.",
    icon: CloudIcon,
  },
]

// Icons (you'll need to import these from your icon library)
function CodeIcon(props: React.ComponentProps<"svg">) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function UsersIcon(props: React.ComponentProps<"svg">) {
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

function SearchCodeIcon(props: React.ComponentProps<"svg">) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="m11 8 2 2" />
      <path d="m8 11 2 2" />
      <path d="m14 14-2-2" />
    </svg>
  )
}

function GitBranchIcon(props: React.ComponentProps<"svg">) {
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
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  )
}

function TestTubeIcon(props: React.ComponentProps<"svg">) {
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
      <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" />
      <path d="M8.5 2h7" />
      <path d="M14.5 16h-5" />
    </svg>
  )
}

function CloudIcon(props: React.ComponentProps<"svg">) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
} 