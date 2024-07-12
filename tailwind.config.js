/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/theme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(modal|button|image|input|spinner|dropdown).js',
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      animationDelay: {
        400: '400ms',
      },
      animationDuration: {
        2000: '2000ms',
      },
      fontFamily: {
        telmaBold: ['TelmaBold'],
        telmaMedium: ['TelmaMedium'],
        telmaRegular: ['TelmaRegular'],
        telmaBlack: ['TelmaBlack'],
      },
      colors: {
        textprimary: '#e9ead6',
        textfooter: '#717887',
        textsecondary: '#ffd700',
        bgcolor: '#070922',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    require('tailwindcss-animated'),
    nextui({
      defaultTheme: 'dark',
      defaultExtendTheme: 'dark',
    }),
  ],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  darkMode: 'class',
}
