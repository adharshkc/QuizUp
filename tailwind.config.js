/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        custom:
          "4px 4px 6px 0 rgba(255,255,255,.5), -4px -4px 6px 0 rgba(116,125,136,.5), inset -4px -4px 6px 0 rgba(255,255,255,.2), inset 4px 4px 6px 0 rgba(0,0,0,.4)",
      },
    },
  },
  plugins: [],
};
