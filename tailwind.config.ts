import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './app.vue',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Noto Sans KR', 'sans-serif'],
        serif: ['Droid Serif', 'serif'],
        slab: ['Roboto Slab', 'serif'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
      },
      maxWidth: {
        container: '1140px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
