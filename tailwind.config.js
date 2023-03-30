/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            ...defaultTheme.fontFamily,
            raleway: "Raleway , sans-serif"
        },
        colors: {
            bgcolor: "#F7F7F9",
            black: "#101010;",
            blue: "#0322C2",
            grey: "#A8AEC1;",
            "purple-100": "#7C84CB;",
            "purple-30": "rgba(158, 103, 232, 0.3);",
            "green-100": "#7CCB7F;",
            "green-65": "rgba(129, 232, 127, 0.65);",
            white: "#FFFFFF;",
            red: "#FB3C3C;",
            yelow: "#F1FF9C;"
        }
    },
    plugins: []
};
