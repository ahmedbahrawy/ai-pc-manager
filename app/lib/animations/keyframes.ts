import { ANIMATION_DURATION, ANIMATION_EASE } from "./constants"

// CSS Keyframe Definitions
export const KEYFRAMES = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  fadeUp: `
    @keyframes fadeUp {
      from { 
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  fadeDown: `
    @keyframes fadeDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  scale: `
    @keyframes scale {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
  slideLeft: `
    @keyframes slideLeft {
      from {
        opacity: 0;
        transform: translateX(-10px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
  slideRight: `
    @keyframes slideRight {
      from {
        opacity: 0;
        transform: translateX(10px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
}

// Tailwind Animation Classes
export const ANIMATION_CLASSES = {
  fadeIn: {
    className: "animate-fade-in",
    css: `
      .animate-fade-in {
        animation: fadeIn ${ANIMATION_DURATION.normal}s ${ANIMATION_EASE.default.join(", ")};
      }
    `,
  },
  fadeUp: {
    className: "animate-fade-up",
    css: `
      .animate-fade-up {
        animation: fadeUp ${ANIMATION_DURATION.normal}s ${ANIMATION_EASE.default.join(", ")};
      }
    `,
  },
  fadeDown: {
    className: "animate-fade-down",
    css: `
      .animate-fade-down {
        animation: fadeDown ${ANIMATION_DURATION.normal}s ${ANIMATION_EASE.default.join(", ")};
      }
    `,
  },
  scale: {
    className: "animate-scale",
    css: `
      .animate-scale {
        animation: scale ${ANIMATION_DURATION.normal}s ${ANIMATION_EASE.default.join(", ")};
      }
    `,
  },
  slideLeft: {
    className: "animate-slide-left",
    css: `
      .animate-slide-left {
        animation: slideLeft ${ANIMATION_DURATION.normal}s ${ANIMATION_EASE.default.join(", ")};
      }
    `,
  },
  slideRight: {
    className: "animate-slide-right",
    css: `
      .animate-slide-right {
        animation: slideRight ${ANIMATION_DURATION.normal}s ${ANIMATION_EASE.default.join(", ")};
      }
    `,
  },
} 