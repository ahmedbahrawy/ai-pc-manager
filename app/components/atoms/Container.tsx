import { type HTMLAttributes } from "react"
import { cn } from "@/app/lib/utils"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full"
  padding?: "none" | "sm" | "md" | "lg"
  center?: boolean
}

const sizeClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  full: "max-w-full",
}

const paddingClasses = {
  none: "px-0",
  sm: "px-4 sm:px-6 lg:px-8",
  md: "px-6 sm:px-8 lg:px-12",
  lg: "px-8 sm:px-12 lg:px-16",
}

export function Container({
  size = "lg",
  padding = "sm",
  center = true,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        sizeClasses[size],
        paddingClasses[padding],
        center && "mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} 