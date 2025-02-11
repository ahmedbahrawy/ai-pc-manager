import { ANIMATION_DURATION, ANIMATION_EASE } from "./constants"

export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASE.default,
    }
  },
}

export const FADE_DOWN_VARIANTS = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASE.default,
    }
  },
}

export const STAGGER_CHILDREN_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const SCALE_IN_VARIANTS = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASE.default,
    }
  },
}

export const SLIDE_IN_VARIANTS = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASE.default,
    }
  },
} 