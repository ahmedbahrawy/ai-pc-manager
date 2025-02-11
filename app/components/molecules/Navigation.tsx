import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { NAV_ITEMS } from "@/app/lib/constants/site"
import { FADE_IN_VARIANTS, STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS } from "@/app/lib/utils/animations"

interface NavigationProps {
  isMobile?: boolean
  isOpen?: boolean
  onItemClick?: () => void
}

export function Navigation({ isMobile = false, isOpen = false, onItemClick }: NavigationProps) {
  const content = (
    <motion.nav
      variants={STAGGER_CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
      className={`
        ${isMobile ? "flex flex-col space-y-4" : "hidden md:flex items-center space-x-8"}
      `}
    >
      {NAV_ITEMS.map((item) => (
        <motion.div key={item.label} variants={STAGGER_CHILD_VARIANTS}>
          <Link
            href={item.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={onItemClick}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
      <motion.div variants={STAGGER_CHILD_VARIANTS}>
        <Button onClick={onItemClick}>Get Started</Button>
      </motion.div>
    </motion.nav>
  )

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={FADE_IN_VARIANTS}
            className="md:hidden py-4"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return content
} 