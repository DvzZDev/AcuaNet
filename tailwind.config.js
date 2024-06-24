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
      fontFamily: {
        telma: ['Telma-Light'],
        telmaBold: ['Telma-Bold'],
        telmaMedium: ['Telma-Medium'],
        telmaRegular: ['Telma-Regular'],
      },
      colors: {
        textprimary: '#e9ead6',
        textfooter: '#6b7280',
        textsecondary: '#ffd700',
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
