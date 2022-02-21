module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'fontfamily':['Dosis'] ,
        'shizru':['Shizuru']
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
