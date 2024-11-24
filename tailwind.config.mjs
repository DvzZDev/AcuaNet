// tailwind.config.mjs
import { nextui } from "@nextui-org/theme"
import animations from "@midudev/tailwind-animations"

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(modal|button|image|input|spinner|dropdown|accordion).js",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animationDelay: { 400: "400ms" },
      animationDuration: { 2000: "2000ms" },
      fontFamily: { Inter: ["Inter"] },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    animations,
    nextui({
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
    }),
  ],
  variants: {
    extend: {
      backdropFilter: ["responsive"],
      backdropBlur: ["responsive"],
    },
  },
  experimental: {
    optimizeUniversalDefaults: false,
  },
  darkMode: "class",
  safelist: [
    "bg-blue-200",
    "text-blue-900",
    "bg-green-200",
    "text-green-900",
    "bg-yellow-200",
    "text-yellow-900",
    "bg-orange-200",
    "text-orange-950",
    "bg-red-200",
    "text-red-900",
    "font-bold",
    "text-[18px]",
    "backdrop-blur",
    "backdrop-blur-md",
    "backdrop-blur-lg",
  ],
}

export default tailwindConfig
