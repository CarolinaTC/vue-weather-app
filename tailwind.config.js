module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    // use these breakpoints to apply responsive classes to your HTML elements (lg: 1024px /xl: 1280px)
    screens: {
      sm: "640px", // small breakpoint
      md: "768px", // medium breakpoint
    },
  },
  plugins: [],
};