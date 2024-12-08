/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#1f2937", // Sidebar Background
        header: "#111827",  // Header Background
        main: "#111827",    // Main Section Background
        card: "#1f2937",    // Card Background
        textPrimary: "#f9fafb", // Primary Text
        textSecondary: "#9ca3af", // Secondary Text
        highlight: "#3b82f6", // Highlight/Accent (Blue)
      },
    },
  },
  plugins: [],
}

