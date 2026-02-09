import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#0E0E0E",
          light: "#121212",
          dark: "#0A0A0A",
          muted: "#1A1A1A",
        },
        cream: {
          DEFAULT: "#F5F5F5",
          dark: "#EFEFEF",
          muted: "#E5E5E5",
          soft: "#FAFAFA",
        },
        smoke: {
          DEFAULT: "#9A9A9A",
          light: "#B0B0B0",
          dark: "#6A6A6A",
          muted: "#7A7A7A",
        },
        silver: {
          DEFAULT: "#C0C0C0",
          muted: "#A8A8A8",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-cinematic":
          "linear-gradient(180deg, rgba(14,14,14,0.8) 0%, rgba(18,18,18,0.95) 50%, #0E0E0E 100%)",
        "gradient-overlay":
          "linear-gradient(0deg, rgba(14,14,14,0.9) 0%, rgba(14,14,14,0.4) 50%, rgba(14,14,14,0.8) 100%)",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "luxury-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "luxury-in": "cubic-bezier(0.7, 0, 0.84, 0)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "700": "700ms",
        "800": "800ms",
        "900": "900ms",
        "1000": "1000ms",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        float: "float 6s ease-in-out infinite",
        grain: "grain 8s steps(10) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "subtle-bounce": "subtleBounce 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(3%, -15%)" },
          "50%": { transform: "translate(12%, 9%)" },
          "70%": { transform: "translate(9%, 4%)" },
          "90%": { transform: "translate(-1%, 7%)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        subtleBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
