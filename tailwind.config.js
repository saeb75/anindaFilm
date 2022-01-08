module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1180px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        body: "#191A1F",
        primary: "#D22F27",
        secondary: "#2D2D35",
        lightColor: "#696972",
        lightGray: "#9696A3",
        yellow: "#F9D729",
        white: "#fff",
        borderColor: "#707070",
      },
    },
  },
  plugins: [],
};
