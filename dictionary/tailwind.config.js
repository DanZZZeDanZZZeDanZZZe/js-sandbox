module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        'no-xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'no-lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'no-md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'no-sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  variants: {},
  plugins: [],
}