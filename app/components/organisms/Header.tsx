import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Brain, Menu, X } from "lucide-react"
import { Container } from "@/app/components/atoms/Container"
import { Stack } from "@/app/components/atoms/Stack"
import { Text } from "@/app/components/atoms/Text"
import { Button } from "@/app/components/ui/button"
import { NAV_ITEMS, SITE_CONFIG } from "@/app/lib/constants/site"
import { useScroll } from "@/app/lib/hooks/useScroll"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled } = useScroll(20)

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" aria-hidden="true" />
            <Text as="span" size="xl" weight="bold">{SITE_CONFIG.name}</Text>
          </Link>

          {/* Desktop Navigation */}
          <Stack
            as="nav"
            direction="row"
            align="center"
            gap="lg"
            className="hidden md:flex"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Text size="sm" weight="medium">{item.label}</Text>
              </Link>
            ))}
            <Button>Get Started</Button>
          </Stack>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4"
            >
              <Stack as="nav" gap="md">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Text
                      size="sm"
                      weight="medium"
                      variant="muted"
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Text>
                  </Link>
                ))}
                <Button className="w-full">Get Started</Button>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
} 