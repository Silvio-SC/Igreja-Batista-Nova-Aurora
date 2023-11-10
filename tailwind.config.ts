import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto Slab', 'cursive'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'aparecer': 'aparecer 3s linear',
      },
      keyframes: {
        aparecer: {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
      },
      dropShadow: {
        'yellow': '2px 2px 0px rgba(244, 171, 12,1)',
      }
    },
  },
  plugins: [],
}
export default config
