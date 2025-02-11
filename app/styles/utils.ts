import { tokens } from './design-tokens'

export const utils = {
  px: (value: keyof typeof tokens.spacing | number) => {
    if (typeof value === 'number') return `${value}px`
    return tokens.spacing[value]
  },

  // Fluid typography scaling
  fluidType: (minSize: number, maxSize: number) => {
    const minWidth = 320
    const maxWidth = 1200
    const slope = (maxSize - minSize) / (maxWidth - minWidth)
    const yAxisIntersection = -minWidth * slope + minSize

    return `clamp(${minSize}px, ${yAxisIntersection}px + ${slope * 100}vw, ${maxSize}px)`
  },

  // Gradient generator
  gradient: (direction: string, ...colors: string[]) => {
    return `linear-gradient(${direction}, ${colors.join(', ')})`
  },

  // Responsive values
  responsive: (mobile: string, tablet: string, desktop: string) => {
    return {
      '@media (min-width: 320px)': { value: mobile },
      '@media (min-width: 768px)': { value: tablet },
      '@media (min-width: 1024px)': { value: desktop },
    }
  },

  // Focus ring style
  focusRing: (color = tokens.colors.primary[500]) => ({
    outline: 'none',
    boxShadow: `0 0 0 2px ${color}`,
  }),

  // Container style
  container: (maxWidth = '1200px') => ({
    width: '100%',
    maxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: tokens.spacing[4],
    paddingRight: tokens.spacing[4],
  }),
} as const

export type Utils = typeof utils 