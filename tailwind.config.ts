import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05060a",
        neonBlue: "#00f0ff",
        neonPink: "#ff2fd3",
        neonLime: "#b6ff00",
        card: "#0b0e15",
      },
      boxShadow: {
        neon: "0 0 10px rgba(0,240,255,.7), 0 0 30px rgba(255,47,211,.35)",
      },
    },
  },
  plugins: [],
} satisfies Config
