import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0e1a",
        foreground: "#ffffff",
        primary: "#00d9ff",
        "primary-dark": "#00a8cc",
        secondary: "#ff6b35",
        accent: "#00d9ff",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
