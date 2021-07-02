module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './content/**/*.md',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Sora', 'sans-serif'],
      body: ['Sora', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
      textColor: ['last'],
      fontWeight: ['last']
    },
  },
  plugins: [],
}
