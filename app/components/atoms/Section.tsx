import { type HTMLAttributes } from "react"
import { cn } from "@/app/lib/utils"
import { Container, type ContainerProps } from "./Container"
import { Stack } from "./Stack"

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article" | "aside"
  containerSize?: ContainerProps["size"]
  containerPadding?: ContainerProps["padding"]
  spacing?: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
  center?: boolean
}

const spacingClasses = {
  none: "py-0",
  sm: "py-8 sm:py-12 lg:py-16",
  md: "py-12 sm:py-16 lg:py-24",
  lg: "py-16 sm:py-24 lg:py-32",
  xl: "py-24 sm:py-32 lg:py-40",
  "2xl": "py-32 sm:py-40 lg:py-48",
}

export function Section({
  as: Component = "section",
  containerSize = "lg",
  containerPadding = "sm",
  spacing = "md",
  center = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "relative w-full",
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      <Container size={containerSize} padding={containerPadding}>
        {center ? (
          <Stack align="center" justify="center" className="w-full text-center">
            {children}
          </Stack>
        ) : (
          children
        )}
      </Container>
    </Component>
  )
} 