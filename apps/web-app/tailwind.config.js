/** @type {import('tailwindcss').Config} */
import { theme } from "@kudyniuk/theme"

module.exports = {
  content: ["./node_modules/shared-ui/src/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      inter: "var(--font-inter)",
    },
    extend: theme,
  },
  plugins: [],
}
