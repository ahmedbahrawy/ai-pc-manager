"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
  const pathname = usePathname()

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
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
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Text size="sm" weight="medium">{item.label}</Text>
                </Link>
              )
            })}
            <Button asChild>
              <Link href="/consultation">Get Started</Link>
            </Button>
          </Stack>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
            onClick={toggleMobileMenu}
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
        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-sm"
            >
              <Stack as="nav" gap="md" className="p-4" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`-mx-3 rounded-lg px-3 py-2 transition-colors ${
                        isActive
                          ? "bg-muted text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Text size="sm" weight="medium">
                        {item.label}
                      </Text>
                    </Link>
                  )
                })}
                <Button asChild className="w-full mt-2">
                  <Link href="/consultation" onClick={closeMobileMenu}>
                    Get Started
                  </Link>
                </Button>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
} 