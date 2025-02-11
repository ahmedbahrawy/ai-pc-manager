# Animation System Documentation

This document outlines the animation system used in the application, including available animations, constants, and usage examples.

## Available Animations

### Basic Variants
- `FADE_VARIANTS`: Simple fade in/out animation
- `FADE_UP_VARIANTS`: Fade in while moving up
- `FADE_DOWN_VARIANTS`: Fade in while moving down
- `SCALE_VARIANTS`: Scale in/out animation

### Stagger Animations
- `STAGGER_CONTAINER_VARIANTS`: Container for staggered children
- `STAGGER_ITEM_VARIANTS`: Individual items in a stagger animation
- `STAGGER_ANIMATION_PROPS`: Props for stagger container

### Hero Section Animations
- `HERO_ANIMATION_PROPS`: Props for hero section container
- `HERO_ITEM_VARIANTS`: Variants for hero section items

### Card Animations
- `CARD_VARIANTS`: Variants for interactive cards with hover/tap states

## Usage Examples

### Basic Fade Animation
```tsx
import { motion } from "framer-motion"
import { FADE_VARIANTS } from "@/app/lib/animations"

function MyComponent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={FADE_VARIANTS}
    >
      Content
    </motion.div>
  )
}
```

### Stagger Animation
```tsx
import { motion } from "framer-motion"
import { STAGGER_ANIMATION_PROPS, STAGGER_ITEM_VARIANTS } from "@/app/lib/animations"

function MyList() {
  return (
    <motion.div {...STAGGER_ANIMATION_PROPS}>
      {items.map(item => (
        <motion.div key={item.id} variants={STAGGER_ITEM_VARIANTS}>
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  )
}
```

### Interactive Card
```tsx
import { motion } from "framer-motion"
import { CARD_VARIANTS } from "@/app/lib/animations"

function Card() {
  return (
    <motion.div
      variants={CARD_VARIANTS}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      Card Content
    </motion.div>
  )
}
```

## Animation Constants

### Timing
- `TRANSITION_DURATION`: Default duration values
- `TRANSITION_TIMING`: Default easing functions
- `ANIMATION_DURATION`: Preset durations (fast, normal, slow)
- `ANIMATION_EASE`: Preset easing functions

### Viewport Options
- `VIEWPORT_MARGIN`: Viewport margin for scroll animations
- `VIEWPORT_ONCE`: Only animate once when entering viewport

## Best Practices

1. Use `STAGGER_ANIMATION_PROPS` for lists and grids
2. Use `CARD_VARIANTS` for interactive elements
3. Use `VIEWPORT_MARGIN` for scroll-triggered animations
4. Keep animations subtle and purposeful
5. Test animations across different screen sizes
6. Consider reduced motion preferences

## Performance Tips

1. Use `whileInView` for scroll animations
2. Set `viewport={{ once: true }}` to prevent re-animation
3. Use `LazyMotion` with `domAnimation` for code splitting
4. Keep animation durations between 200-500ms
5. Use hardware-accelerated properties (transform, opacity) 