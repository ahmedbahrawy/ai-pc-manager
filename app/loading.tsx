import { Loader2 } from "lucide-react"
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { Text } from "@/app/components/atoms/Text"

export default function Loading() {
  return (
    <Section spacing="xl" center className="min-h-[calc(100vh-4rem)]">
      <Stack gap="md" align="center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <Text color="muted">Loading...</Text>
      </Stack>
    </Section>
  )
} 