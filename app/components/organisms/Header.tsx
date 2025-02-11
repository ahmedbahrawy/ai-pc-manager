import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/app/components/atoms/Logo"
import { Navigation } from "@/app/components/molecules/Navigation"
import { useScroll } from "@/app/lib/hooks/useScroll"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled } = useScroll(20)

  return (
    <header
      className={`
        fixed top-0 z-50 w-full transition-all duration-300
        ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <Navigation />

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
        <Navigation
          isMobile
          isOpen={isMobileMenuOpen}
          onItemClick={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  )
} 