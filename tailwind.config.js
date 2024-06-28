/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
      fontFamily: {
        telma: ['TelmaLight'],
        telmaBold: ['TelmaBold'],
        telmaMedium: ['TelmaMedium'],
        telmaRegular: ['TelmaRegular'],
        telmaBlack: ['TelmaBlack'],
      },
      colors: {
        textprimary: '#e9ead6',
        textfooter: '#6b7280',
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
  plugins: ['prettier-plugin-tailwindcss', require('tailwindcss-animated')],
  experimental: {
    optimizeUniversalDefaults: true,
  },
}
