module.exports = {
  prefix:'t-',
  purge: [],
  mode:'jit',
  content:['./components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.{js,ts}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'button-custom': '7.5px',
        'container-lg':'10px',
      },
      colors:{
        'primary':'#AFE614',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
