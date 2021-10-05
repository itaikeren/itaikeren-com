module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "roboto": ['"Roboto"'], // Ensure fonts with spaces have " " surrounding it.
        "roboto-mono": ['"Roboto Mono"'], // Ensure fonts with spaces have " " surrounding it.
        "noto": ['"Noto Sans JP"'], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
