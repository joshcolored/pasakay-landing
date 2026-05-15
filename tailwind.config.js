/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1b2224",
        mist: "#eef9f8",
        cream: "#f5eccb",
        "cream-light": "#fff8df",
        teal: {
          950: "#172a2e",
          900: "#22373c",
          800: "#2d4449",
          700: "#3d585d",
        },
        pasakay: {
          green: "#45b750",
          amber: "#ffa313",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 42, 46, 0.14)",
        button: "0 14px 28px rgba(34, 55, 60, 0.22)",
      },
    },
  },
  plugins: [],
};
