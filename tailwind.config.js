/** @type {import('tailwindcss').Config} */

// Claymorphism design tokens. Surface colours are CSS variables (see
// src/index.css) so light/dark themes swap in one place; vibrant "tones"
// (violet, pink, amber, mint, sky, coral) are applied with `.tone-*` classes.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: v("canvas"),
        surface: v("surface"),
        sunken: v("sunken"),
        ink: v("ink"),
        muted: v("muted"),
        line: v("line"),
        brand: v("brand"),
        "brand-2": v("brand-2"),
        // legacy palette, kept so nothing un-migrated breaks
        primary: "#7C3AED",
        accent: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        display: ["Nunito", "ui-rounded", "system-ui", "sans-serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'Fira Code'", "ui-monospace", "monospace"],
      },
      borderRadius: {
        clay: "32px",
        "clay-sm": "20px",
        "clay-lg": "44px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
