import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: 'calc(var(--length)*0.8)',
      base: 'calc(var(--length)*1)',
      lg: 'calc(var(--length)*1.125)',
      xl: 'calc(var(--length)*1.25)',
      '2xl': 'calc(var(--length)*1.563)',
      '3xl': 'calc(var(--length)*1.953)',
      '4xl': 'calc(var(--length)*2.441)',
      '5xl': 'calc(var(--length)*3.052)',
      '6xl': 'calc(var(--length)*5)',
    },
    extend: {
      colors:{
        'fg':'#fff',
        'bg':'#1D0027',
        'accent':'#F8E6D0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
