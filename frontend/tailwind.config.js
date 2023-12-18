module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this line
    // Add any other paths that may use Tailwind CSS classes
  ],
  theme: {
    extend: {
      colors: {
        'primary-color' : '#9e6a37',
        'secondary-color': '#c39367',
        'primary-gray': '#25282a',
        'secondary-gray': '#545859',
        'tertiary-gray': '#d7d2cb',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      },
    }, // Remove the extra semicolon here
  },
  plugins: [],
}
