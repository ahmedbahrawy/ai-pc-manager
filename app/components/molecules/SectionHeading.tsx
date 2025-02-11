import { motion } from "framer-motion"
import Image from "next/image"
import { FADE_UP_VARIANTS, SCALE_IN_VARIANTS } from "@/app/lib/utils/animations"

interface SectionHeadingProps {
  title: string
  description?: string
  icon?: {
    src: string
    alt: string
    size?: number
  }
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({
  title,
  description,
  icon,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {icon && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={SCALE_IN_VARIANTS}
          transition={{ duration: 0.5 }}
          className={`inline-block mb-6 ${align === "center" ? "mx-auto" : ""}`}
        >
          <div className="relative" style={{ width: icon.size || 120, height: icon.size || 120 }}>
            <Image
              src={icon.src}
              alt={icon.alt}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FADE_UP_VARIANTS}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP_VARIANTS}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
} 