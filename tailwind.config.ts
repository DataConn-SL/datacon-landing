import { heroui } from "@heroui/theme"
import type { Config } from "tailwindcss"

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        black: {
          100: "#000000",
          200: "#0A0A0A",
          300: "#1A1A1A",
          400: "#2F2F2F",
          500: "#434343",
          600: "#5A5A5A",
          700: "#6F6F6F",
          800: "#828282",
          900: "#979797",
        },
        default: {
          100: "#FFFFFF",
          200: "#E6E6E6",
          300: "#C8C8C8",
          400: "#B2B2B2",
          500: "#99A2AD",
          600: "#7E828E",
          700: "#6C7E8C",
          800: "#5C6B7B",
          900: "#4A535C",
        },
        background: {
          100: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    heroui(),
    require("tailwindcss-animate"),
    ({ addBase, theme }: any) => {
      // Alternative approach to flatten color palette
      const colors = theme("colors")
      const newVars: Record<string, string> = {}

      // Function to recursively flatten the color object
      function flattenColors(obj: Record<string, any>, prefix = "") {
        Object.entries(obj).forEach(([key, value]) => {
          const newKey = prefix ? `${prefix}-${key}` : key
          if (typeof value === "string") {
            newVars[`--${newKey}`] = value
          } else if (typeof value === "object") {
            flattenColors(value, newKey)
          }
        })
      }

      flattenColors(colors)

      addBase({
        ":root": newVars,
      })
    },
  ],
}

export default config