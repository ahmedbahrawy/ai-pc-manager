"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/app/lib/utils"
import { Button } from "@/app/components/ui/button"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_CHILD_VARIANTS, STAGGER_CONTAINER_VARIANTS } from "@/app/lib/animations"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "AI Solutions", href: "/ai-micro-apps" },
  { name: "Services", href: "/services" },
  { name: "Consultation", href: "/consultation" },
  { name: "Certifications", href: "/certifications" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.header
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      initial="hidden"
      animate="show"
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="container flex h-14 items-center">
        <div className="mr-4 flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>AI Solutions</SheetTitle>
              </SheetHeader>
              <motion.div
                variants={STAGGER_CONTAINER_VARIANTS}
                initial="hidden"
                animate="show"
                className="flex flex-col space-y-4 py-4"
              >
                {navigation.map((item) => (
                  <motion.div key={item.href} variants={STAGGER_CHILD_VARIANTS}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-2 py-1 text-lg transition-colors hover:text-primary",
                        pathname === item.href
                          ? "font-medium text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>

        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          initial="hidden"
          animate="show"
          className="mr-4 hidden md:flex"
        >
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              AI Solutions
            </span>
          </Link>
          <motion.div
            variants={STAGGER_CONTAINER_VARIANTS}
            initial="hidden"
            animate="show"
            className="flex gap-6"
          >
            {navigation.map((item) => (
              <motion.div key={item.href} variants={STAGGER_CHILD_VARIANTS}>
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          initial="hidden"
          animate="show"
          className="flex flex-1 items-center justify-between space-x-2 md:justify-end"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </nav>
    </motion.header>
  )
} 