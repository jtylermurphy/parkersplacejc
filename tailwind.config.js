module.exports = {
  content: ["./**/*.{html,js}"],
  media: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'helvetica', 'arial', 'sans-serif'],
      serif: ['Prata', 'serif'],
    },

    extend: {
      colors: {
        gold: {
            50: '#F6F3EB',
            100: '#F0EADD',
            200: '#E4D8C0',
            300: '#D8C6A4',
            400: '#CBB587',
            500: '#BFA36B',
            600: '#A98949',
            700: '#826938',
            800: '#5B4927',
            900: '#332A16'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
},
}