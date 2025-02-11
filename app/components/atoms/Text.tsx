import { type HTMLAttributes } from "react"
import { cn } from "@/app/lib/utils"

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl"
  weight?: "normal" | "medium" | "semibold" | "bold"
  align?: "left" | "center" | "right"
  color?: "default" | "muted" | "primary"
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
}

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
}

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
}

const colorClasses = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
}

export function Text({
  as: Component = "p",
  size = "base",
  weight = "normal",
  align = "left",
  color = "default",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        alignClasses[align],
        colorClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
} 