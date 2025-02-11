import { cn } from "@/app/lib/utils"
import { tokens } from "@/app/styles/design-tokens"

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingSize = keyof typeof tokens.typography.sizes
type HeadingWeight = keyof typeof tokens.typography.weights

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel
  size?: HeadingSize
  weight?: HeadingWeight
  variant?: 'default' | 'muted' | 'primary'
}

const defaultSizes: Record<HeadingLevel, HeadingSize> = {
  1: '4xl',
  2: '3xl',
  3: '2xl',
  4: 'xl',
  5: 'lg',
  6: 'base',
}

export function Heading({
  children,
  level = 2,
  size,
  weight = 'bold',
  variant = 'default',
  className,
  ...props
}: HeadingProps) {
  const Component = `h${level}` as const
  const defaultSize = defaultSizes[level]
  const finalSize = size || defaultSize

  const variantStyles = {
    default: 'text-foreground',
    muted: 'text-muted-foreground',
    primary: 'text-primary',
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        `text-[${tokens.typography.sizes[finalSize]}]`,
        `font-[${tokens.typography.weights[weight]}]`,
        'leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
} 