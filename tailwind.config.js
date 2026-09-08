/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      // Twoje kolory
      primary: {
        DEFAULT: '#173643',
        light: '#2C4854',
        dark: '#0E232C',
      },
      secondary: {
        DEFAULT: '#FAF6EE',
        dark: '#F0EADC',
      },
      accent: {
        DEFAULT: '#B3862C',
        light: '#C9A24D',
        dark: '#8F6B22',
      },
      background: '#FFFFFF',
      text: {
        DEFAULT: '#2C2F33',
        muted: '#5C6066',
      },
      // Kolory domyślne (żeby nie zgubić białego/czarnego)
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      heading: ['"Playfair Display"', 'serif'],
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};