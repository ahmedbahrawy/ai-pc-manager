import { type HTMLAttributes } from "react"
import { cn } from "@/app/lib/utils"
import { Stack } from "./Stack"
import { Text } from "./Text"

export interface TextGroupProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  titleSize?: "lg" | "xl" | "2xl" | "3xl" | "4xl"
  align?: "left" | "center" | "right"
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const titleSizeClasses = {
  lg: "text-lg font-semibold",
  xl: "text-xl font-semibold",
  "2xl": "text-2xl font-bold",
  "3xl": "text-3xl font-bold tracking-tight sm:text-4xl",
  "4xl": "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl",
}

export function TextGroup({
  title,
  description,
  titleSize = "3xl",
  align = "left",
  titleAs = "h2",
  className,
  ...props
}: TextGroupProps) {
  const Heading = titleAs

  return (
    <Stack
      gap="sm"
      align={align === "center" ? "center" : "start"}
      className={cn("max-w-2xl", align === "center" && "mx-auto", className)}
      {...props}
    >
      <Heading className={cn(titleSizeClasses[titleSize])}>
        {title}
      </Heading>
      {description && (
        <Text
          size="lg"
          color="muted"
          align={align}
          className="max-w-xl"
        >
          {description}
        </Text>
      )}
    </Stack>
  )
} 