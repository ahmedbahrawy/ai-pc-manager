import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { TextGroup } from "@/app/components/atoms/TextGroup"

export default function NotFound() {
  return (
    <Section spacing="xl" center className="min-h-[calc(100vh-4rem)]">
      <Stack gap="lg">
        <TextGroup
          title="404 - Page Not Found"
          description="Sorry, we couldn't find the page you're looking for. Please check the URL or navigate back to our homepage."
          titleSize="3xl"
          align="center"
        />

        <Stack direction="row" gap="md" justify="center">
          <Button size="lg" asChild>
            <Link href="/">Return home</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact support</Link>
          </Button>
        </Stack>
      </Stack>
    </Section>
  )
} 