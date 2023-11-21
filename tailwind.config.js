/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
        "edu-sa": ["Edu SA Beginner", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
