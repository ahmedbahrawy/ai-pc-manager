import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Container } from "@/app/components/atoms/Container"
import { Stack } from "@/app/components/atoms/Stack"
import { Text } from "@/app/components/atoms/Text"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <Container>
        <Stack
          direction="row"
          align="center"
          justify="between"
          className="min-h-[4rem]"
        >
          <Text size="sm" color="muted">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Text>
          <Stack direction="row" gap="sm">
            <Text size="sm" color="muted">
              <a
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </a>
            </Text>
            <Text size="sm" color="muted">
              <a
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms
              </a>
            </Text>
          </Stack>
        </Stack>
      </Container>
    </footer>
  )
} 