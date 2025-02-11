import { Variants } from "framer-motion"
import { TRANSITION_DEFAULTS, STAGGER_DEFAULTS } from "./constants"

// Basic Variants
export const FADE_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: TRANSITION_DEFAULTS,
  },
}

export const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_DEFAULTS,
  },
}

export const FADE_DOWN_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_DEFAULTS,
  },
}

// Stagger Variants
export const STAGGER_CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: STAGGER_DEFAULTS.parent,
  },
}

export const STAGGER_CHILD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: STAGGER_DEFAULTS.child,
  },
}

// Hero Section Variants
export const HERO_ANIMATION_PROPS = {
  initial: "hidden",
  animate: "visible",
  variants: STAGGER_CONTAINER_VARIANTS,
}

export const HERO_ITEM_VARIANTS: Variants = {
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

// Card Variants
export const CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_DEFAULTS,
  },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeOut" }
  },
}

// Scale Variants
export const SCALE_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITION_DEFAULTS,
  },
}

// Common Animation Props
export const VIEWPORT_MARGIN = { once: true, margin: "100px" }

export const STAGGER_ANIMATION_PROPS = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: STAGGER_CONTAINER_VARIANTS,
}

// Re-export constants
export {
  ANIMATION_DURATION,
  ANIMATION_EASE,
  TRANSITION_DEFAULTS,
  STAGGER_DEFAULTS,
  TRANSITION_DURATION,
  TRANSITION_TIMING,
  TRANSITION_DURATION_CLASS,
  TRANSITION_TIMING_CLASS,
} from "./constants"

// Re-export keyframes
export {
  KEYFRAMES,
  ANIMATION_CLASSES,
} from "./keyframes"

// Common Animation Props
export const VIEWPORT_ONCE = { once: true }

export const SCROLL_ANIMATION_PROPS = {
  initial: "hidden",
  whileInView: "visible",
  viewport: VIEWPORT_ONCE,
}

// Utility Types
export type AnimationVariants = "hidden" | "visible" | "hover" | "tap" | "exit" 