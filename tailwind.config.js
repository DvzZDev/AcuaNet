/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/theme"

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/components/(modal|button|image|input|spinner|dropdown|accordion).js",
]

export const theme = {
  screens: {
    sm: "600px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  extend: {
    animationDelay: {
      400: "400ms",
    },
    animationDuration: {
      2000: "2000ms",
    },
    fontFamily: {
      NecoBold: ["Neco-Bold"],
    },
    colors: {
      textprimary: "#e9ead6",
      textfooter: "#717887",
      textsecondary: "#ffd700",
      bgcolor: "#070922",
    },
    backdropBlur: {
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "12px",
      xl: "16px",
      "2xl": "20px",
    },
  },
}

export const plugins = [
  "prettier-plugin-tailwindcss",
  "tailwindcss-animated",
  nextui({
    defaultTheme: "dark",
    defaultExtendTheme: "dark",
  }),
]

export const experimental = {
  optimizeUniversalDefaults: true,
}

export const darkMode = "class"

// Añadir la configuración de purge
export const purge = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(modal|button|image|input|spinner|dropdown|accordion).js",
  ],
  safelist: [
    "text-blue-900",
    "text-green-900",
    "text-yellow-900",
    "text-orange-950",
    "text-red-900",
  ],
}
