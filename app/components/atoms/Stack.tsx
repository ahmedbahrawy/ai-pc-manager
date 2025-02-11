import { type HTMLAttributes } from "react"
import { cn } from "@/app/lib/utils"

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article"
  direction?: "row" | "column"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around"
  gap?: "none" | "sm" | "md" | "lg" | "xl"
  wrap?: boolean
}

const directionClasses = {
  row: "flex-row",
  column: "flex-col",
}

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
}

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
}

const gapClasses = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
}

export function Stack({
  as: Component = "div",
  direction = "column",
  align = "stretch",
  justify = "start",
  gap = "md",
  wrap = false,
  className,
  children,
  ...props
}: StackProps) {
  return (
    <Component
      className={cn(
        "flex",
        directionClasses[direction],
        alignClasses[align],
        justifyClasses[justify],
        gapClasses[gap],
        wrap && "flex-wrap",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
} 