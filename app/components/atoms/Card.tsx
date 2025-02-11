import { motion } from "framer-motion"
import { Card as UICard, CardContent } from "@/app/components/ui/card"
import { FADE_UP_VARIANTS } from "@/app/lib/utils/animations"

interface CardProps {
  children: React.ReactNode
  className?: string
  gradient?: boolean
  hover?: boolean
  delay?: number
}

export function Card({
  children,
  className = "",
  gradient = false,
  hover = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={FADE_UP_VARIANTS}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5 } : undefined}
    >
      <UICard
        className={`
          h-full transition-all duration-300 relative overflow-hidden
          ${hover ? "hover:shadow-lg" : ""}
          ${gradient ? "bg-gradient-to-br from-primary/5 to-transparent" : ""}
          ${className}
        `}
      >
        {gradient && (
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary" />
        )}
        <CardContent className="p-6 space-y-4 relative">
          {children}
        </CardContent>
      </UICard>
    </motion.div>
  )
} 