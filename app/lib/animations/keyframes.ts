import { TRANSITION_DURATION, TRANSITION_TIMING } from "./constants"

export const KEYFRAME_ANIMATIONS = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  fadeInDown: `
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  scaleIn: `
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
  slideIn: `
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
}

export const ANIMATION_CLASSES = {
  fadeIn: {
    className: "animate-fade-in",
    css: `
      .animate-fade-in {
        animation: fadeIn ${TRANSITION_DURATION.normal} ${TRANSITION_TIMING.default};
      }
    `,
  },
  fadeInDown: {
    className: "animate-fade-in-down",
    css: `
      .animate-fade-in-down {
        animation: fadeInDown ${TRANSITION_DURATION.normal} ${TRANSITION_TIMING.default};
      }
    `,
  },
  scaleIn: {
    className: "animate-scale-in",
    css: `
      .animate-scale-in {
        animation: scaleIn ${TRANSITION_DURATION.normal} ${TRANSITION_TIMING.default};
      }
    `,
  },
  slideIn: {
    className: "animate-slide-in",
    css: `
      .animate-slide-in {
        animation: slideIn ${TRANSITION_DURATION.normal} ${TRANSITION_TIMING.default};
      }
    `,
  },
} 