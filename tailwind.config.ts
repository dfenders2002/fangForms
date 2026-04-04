import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#9D7CEC",
        "accent-dark": "#7B5CC4",
      },
      fontFamily: {
        heading: ["var(--font-bebas-neue)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-up": "fade-up 0.4s ease-out both",
        "fade-up-delay-1": "fade-up 0.4s ease-out 0.1s both",
        "fade-up-delay-2": "fade-up 0.4s ease-out 0.15s both",
        "slide-down": "slide-down 0.3s ease-out both",
        "fade-up-slow": "fade-up-slow 0.5s ease-out both",
        "fade-up-slow-1": "fade-up-slow 0.5s ease-out 0.1s both",
        "fade-up-slow-2": "fade-up-slow 0.5s ease-out 0.15s both",
        "fade-up-slow-3": "fade-up-slow 0.5s ease-out 0.2s both",
        "fade-up-slow-4": "fade-up-slow 0.5s ease-out 0.25s both",
      },
    },
  },
  plugins: [],
};

export default config;
