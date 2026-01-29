module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: 'hsl(var(--neon-cyan-hue, 190), 100%, 60%)',
      }
    }
  },
  plugins: []
};