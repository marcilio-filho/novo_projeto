module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this line
    // Add any other paths that may use Tailwind CSS classes
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-color' : '#9e6a37',
        'secondary-color': '#c39367',
        'primary-gray': '#25282a',
        'secondary-gray': '#545859',
        'tertiary-gray': '#d7d2cb',
        'light-gray': '#f5f5f5',
        'ubique-blue': '#161fff',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
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
