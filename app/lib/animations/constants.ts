export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const

export const ANIMATION_EASE = {
  default: [0.25, 0.1, 0.25, 1],
  linear: "linear",
  easeIn: "easeIn",
  easeOut: "easeOut",
  easeInOut: "easeInOut",
} as const

export const TRANSITION_DEFAULTS = {
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1],
} as const

export const STAGGER_DEFAULTS = {
  parent: {
    staggerChildren: 0.1,
    delayChildren: 0.1,
  },
  child: {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
  },
} as const

export const TRANSITION_DURATION = 0.3
export const TRANSITION_TIMING = [0.25, 0.1, 0.25, 1]

export const TRANSITION_DURATION_CLASS = {
  fast: "150ms",
  normal: "250ms",
  slow: "400ms",
} as const

export const TRANSITION_TIMING_CLASS = {
  default: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
} as const 