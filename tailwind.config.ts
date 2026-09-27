import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FFFFFF",
          soft: "#F6F7F9",
          muted: "#EEF0F3",
          border: "#E6E8EC",
          card: "#FFFFFF",
          light: "#FFFFFF",
        },
        brand: {
          50: "#FFF4F1",
          100: "#FFE6E0",
          200: "#FFC9BD",
          300: "#FFA492",
          400: "#FF7B60",
          500: "#FF5733",
          600: "#E64522",
          700: "#C43315",
        },
        cash: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
        pastel: {
          sand: "#FFF3DF",
          mist: "#FFE8E0",
          peach: "#FFE6DC",
          mint: "#E3F7EF",
        },
        ink: {
          950: "#0A0A0B",
          900: "#141416",
          700: "#3A3A42",
          500: "#6B6B76",
          400: "#9191A0",
          300: "#B8B8C4",
        },
        // Legacy aliases for compliance pages
        charcoal: {
          900: "#141416",
          800: "#1E1E22",
          700: "#3A3A42",
          600: "#6B6B76",
          500: "#6B6B76",
          400: "#9191A0",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        urdu: [
          "var(--font-urdu)",
          "'Noto Nastaliq Urdu'",
          "Tahoma",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(10, 10, 11, 0.12)",
        lift: "0 18px 40px -16px rgba(10, 10, 11, 0.18)",
        phone:
          "0 28px 60px -20px rgba(10, 10, 11, 0.35), 0 0 0 1px rgba(255,255,255,0.08)",
        "card-ambient": "0 8px 30px -12px rgba(10, 10, 11, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "dash-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 5s ease-in-out infinite",
        "dash-spin": "dash-spin 48s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
