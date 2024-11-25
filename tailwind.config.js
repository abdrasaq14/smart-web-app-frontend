/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    xs: "300px", 
    sm: "500px", 
    md: "600px", 
    lg: "1000px",
  },
  extend: {
    colors: {
      primary: {
        yellowLight: "#fddb76",
        yellowMain: "#FFC000",
        blackLight: "#6E7883",
        blackMain: "#161616",
        placeholder:"#757575",
        border: "#D4D4D4",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0px 0px 21px 0px rgba(0, 0, 0, 0.08)',
      },
    }
  },
};
export const plugins = [];

