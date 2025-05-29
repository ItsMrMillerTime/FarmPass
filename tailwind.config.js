// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}',       // in case you add pages/
    './components/**/*.{js,ts,jsx,tsx}'   // ← ADD THIS LINE
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
