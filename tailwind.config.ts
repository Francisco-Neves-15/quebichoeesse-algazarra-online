import { type Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/contexts/**/*.{ts,tsx}",
    "./src/utils/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "secondary-100": "var(--secondary-100)",
        "secondary-200": "var(--secondary-200)",
        "secondary-300": "var(--secondary-300)",
      },
      backgroundColor: {
        "th-bg": "var(--background)",
        "th-mutedbg": "var(--mutedbackground)",
        "th-fg": "var(--foreground)",
        "th-mutedfg": "var(--mutedforeground)",
      },
      textColor: {
        "th-text": "var(--text)",
        "th-inverted-text": "var(--text-inverted)",
      },
    },
  },
  plugins: [],
}

export default config
