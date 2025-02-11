import { TRANSITION_DEFAULTS, STAGGER_DEFAULTS } from "./constants"

// Basic Variants
export const FADE_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: TRANSITION_DEFAULTS,
  },
}

export const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_DEFAULTS,
  },
}

export const FADE_DOWN_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_DEFAULTS,
  },
}

export const FADE_LEFT_VARIANTS = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_DEFAULTS,
  },
}

export const FADE_RIGHT_VARIANTS = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_DEFAULTS,
  },
}

export const SCALE_VARIANTS = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITION_DEFAULTS,
  },
}

// Stagger Variants
export const STAGGER_CONTAINER_VARIANTS = {
  hidden: {},
  visible: {
    transition: STAGGER_DEFAULTS.parent,
  },
}

export const STAGGER_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: STAGGER_DEFAULTS.child,
  },
}

// Interactive Variants
export const HOVER_SCALE_VARIANTS = {
  hover: { 
    scale: 1.02,
    transition: { duration: TRANSITION_DEFAULTS.duration, ease: "easeOut" }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: TRANSITION_DEFAULTS.duration, ease: "easeOut" }
  },
}

// Combined Variants
export const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_DEFAULTS,
  },
  hover: HOVER_SCALE_VARIANTS.hover,
  tap: HOVER_SCALE_VARIANTS.tap,
}

// Hero Section Variants
export const HERO_CONTAINER_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export const HERO_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} 