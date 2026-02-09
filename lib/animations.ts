import { Variants } from "framer-motion";

// Fade In Animation
export const fadeIn: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Fade Up Animation
export const fadeUp: Variants = {
    initial: {
        opacity: 0,
        y: 40,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Fade Down Animation
export const fadeDown: Variants = {
    initial: {
        opacity: 0,
        y: -40,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Scale In Animation
export const scaleIn: Variants = {
    initial: {
        opacity: 0,
        scale: 0.9,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Stagger Container
export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// Stagger Item
export const staggerItem: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Slide In from Left
export const slideInLeft: Variants = {
    initial: {
        opacity: 0,
        x: -60,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Slide In from Right
export const slideInRight: Variants = {
    initial: {
        opacity: 0,
        x: 60,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Image Reveal Animation
export const imageReveal: Variants = {
    initial: {
        clipPath: "inset(100% 0 0 0)",
        opacity: 0,
    },
    animate: {
        clipPath: "inset(0% 0 0 0)",
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Hover Scale
export const hoverScale = {
    scale: 1.02,
    transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
    },
};

// Viewport settings for scroll animations
export const viewportConfig = {
    once: true,
    margin: "-100px",
};

// Easing curves
export const easing = {
    smooth: [0.25, 0.1, 0.25, 1],
    snappy: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
};
