import { cn } from "@/app/lib/utils"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: 'none' | 'sm' | 'md' | 'lg'
  as?: 'div' | 'section' | 'article'
  responsive?: boolean
}

const colsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
}

const responsiveColsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  12: 'grid-cols-3 md:grid-cols-6 lg:grid-cols-12',
}

const gapMap = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
}

export function Grid({
  children,
  cols = 1,
  gap = 'md',
  as: Component = 'div',
  responsive = true,
  className,
  ...props
}: GridProps) {
  return (
    <Component
      className={cn(
        'grid',
        responsive ? responsiveColsMap[cols] : colsMap[cols],
        gapMap[gap],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
} 