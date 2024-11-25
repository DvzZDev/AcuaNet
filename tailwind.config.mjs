// tailwind.config.mjs
import animations from "@midudev/tailwind-animations"

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(modal|button|image|input|spinner|dropdown|accordion).js",
  ],
  plugins: ["prettier-plugin-tailwindcss", animations],
  variants: {
    extend: {
      backdropFilter: ["responsive"],
      backdropBlur: ["responsive"],
    },
  },
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  experimental: {
    optimizeUniversalDefaults: false,
  },
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
