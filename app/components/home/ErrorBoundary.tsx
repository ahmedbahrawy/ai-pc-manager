import { ErrorBoundary as BaseErrorBoundary } from "@/app/components/features/error"
import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { TextGroup } from "@/app/components/atoms/TextGroup"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"

interface Props {
  children: React.ReactNode
}

export function HomeErrorBoundary({ children }: Props) {
  return (
    <BaseErrorBoundary>
      {({ error, reset }) => {
        if (error) {
          return (
            <Section spacing="xl" center>
              <Stack gap="lg">
                <TextGroup
                  title="Something went wrong!"
                  description="We apologize for the inconvenience. Please try again or contact support if the problem persists."
                  titleSize="3xl"
                  align="center"
                />

                <Stack direction="row" gap="md" justify="center">
                  <Button onClick={reset} size="lg">
                    Try again
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact support</Link>
                  </Button>
                </Stack>

                {process.env.NODE_ENV === "development" && (
                  <Stack gap="sm" className="w-full max-w-2xl rounded-lg border bg-muted/50 p-4">
                    <TextGroup
                      title="Error Details"
                      titleSize="lg"
                      description={error.message}
                      align="left"
                    />
                    <pre className="overflow-auto rounded-md bg-muted p-4 text-sm">
                      <code>{error.stack}</code>
                    </pre>
                  </Stack>
                )}
              </Stack>
            </Section>
          )
        }

        return children
      }}
    </BaseErrorBoundary>
  )
} 