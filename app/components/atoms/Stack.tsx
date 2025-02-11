import { cn } from "@/app/lib/utils"

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  wrap?: boolean
  gap?: 'none' | 'sm' | 'md' | 'lg'
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav'
}

const gapMap = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
}

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
}

export function Stack({
  children,
  direction = 'column',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  gap = 'md',
  as: Component = 'div',
  className,
  ...props
}: StackProps) {
  return (
    <Component
      className={cn(
        'flex',
        direction === 'row' ? 'flex-row' : 'flex-col',
        wrap && 'flex-wrap',
        alignMap[align],
        justifyMap[justify],
        gapMap[gap],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
} 