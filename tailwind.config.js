module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#67839C",
        secondary: "#7790A7",
        accent: "#AABAC8",
        terciary: "#EDF1F3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
