import { cn } from "@/app/lib/utils"

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article' | 'aside' | 'main'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  border?: boolean
  shadow?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingMap = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const roundedMap = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

const shadowMap = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow',
  lg: 'shadow-lg',
}

export function Box({
  children,
  as: Component = 'div',
  padding = 'none',
  rounded = 'none',
  border = false,
  shadow = 'none',
  className,
  ...props
}: BoxProps) {
  return (
    <Component
      className={cn(
        paddingMap[padding],
        roundedMap[rounded],
        shadowMap[shadow],
        border && 'border border-border',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
} 