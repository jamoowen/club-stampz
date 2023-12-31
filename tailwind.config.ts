// import '@radix-ui/themes/styles.css';
import type { Config } from 'tailwindcss'
import { blackA, violet, mauve } from '@radix-ui/colors'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      cursor: {
        golf: 'url(/images/logo.png), golf',
      },
      colors: {
        brightGold: '#FFD700',
        gold: '#D4AF37',
        underlineColor: '#D4AF37',
        ...blackA,
        ...violet,
        ...mauve,
      },
      fontFamily: {
        'playfair': ["var(--font-playfair)"],
        'pt-serif': ["var(--font-pt-serif)"],
        'heading': ["var(--font-playfair)"],
        'robot-slab': ["var(--font-roboto-slab)"],

      },
      keyframes: {
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },


    },
  },
  plugins: [],
}
export default config
