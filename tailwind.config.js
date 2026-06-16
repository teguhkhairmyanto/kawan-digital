/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Metode class-based v3 yang stabil mandatori PRD[cite: 1]
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38BDF8',    // Sky Blue Cerah[cite: 1]
        secondary: '#0284C7',  // Deep Light Blue[cite: 1]
        baseWhite: '#FFFFFF',  // Base White[cite: 1]
        offWhite: '#F8FAFC',   // Slate 50[cite: 1]
        darkBg: '#0F172A',     // Slate 900[cite: 1]
        darkCard: '#1E293B',   // Slate 800[cite: 1]
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}