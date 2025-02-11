import { motion } from "framer-motion"
import { FADE_IN_VARIANTS } from "@/app/lib/utils/animations"

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: "default" | "gradient-up" | "gradient-down" | "transparent"
  pattern?: boolean
}

export function Section({
  children,
  className = "",
  background = "default",
  pattern = false,
}: SectionProps) {
  const getBgClass = () => {
    switch (background) {
      case "gradient-up":
        return "bg-gradient-to-t from-background to-primary/5"
      case "gradient-down":
        return "bg-gradient-to-b from-background to-primary/5"
      case "transparent":
        return "bg-transparent"
      default:
        return "bg-background"
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={FADE_IN_VARIANTS}
      transition={{ duration: 0.5 }}
      className={`relative py-20 overflow-hidden ${getBgClass()} ${className}`}
    >
      {pattern && (
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/pattern.png')",
              backgroundSize: "30px 30px",
              backgroundRepeat: "repeat",
            }}
          />
        </div>
      )}
      <div className="container mx-auto px-4 relative">
        {children}
      </div>
    </motion.section>
  )
} 