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
        sans: ['Roboto', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-out': 'fadeOut 1s ease-out'
      },
    }, 
  },
  plugins: [],
}
