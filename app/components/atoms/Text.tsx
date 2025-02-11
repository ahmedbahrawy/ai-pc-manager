import { cn } from "@/app/lib/utils"
import { tokens } from "@/app/styles/design-tokens"

type TextSize = keyof typeof tokens.typography.sizes
type TextWeight = keyof typeof tokens.typography.weights

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize
  weight?: TextWeight
  as?: 'p' | 'span' | 'div'
  variant?: 'default' | 'muted' | 'primary'
}

export function Text({
  children,
  size = 'base',
  weight = 'normal',
  as: Component = 'p',
  variant = 'default',
  className,
  ...props
}: TextProps) {
  const variantStyles = {
    default: 'text-foreground',
    muted: 'text-muted-foreground',
    primary: 'text-primary',
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        `text-[${tokens.typography.sizes[size]}]`,
        `font-[${tokens.typography.weights[weight]}]`,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
} 