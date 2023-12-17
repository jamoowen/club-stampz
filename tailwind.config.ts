// import '@radix-ui/themes/styles.css';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        underlineColor: '#FFD700',
      },
      fontFamily: {
        'playfair': ["var(--font-playfair)"],
        'pt-serif': ["var(--font-pt-serif)"],
        'heading': ["var(--font-playfair)"],
        'robot-slab': ["var(--font-roboto-slab)"],

      }

    },
  },
  plugins: [],
}
export default config
