/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            ssm: "0px",
            sm: "480px",
            md: "1114px",
            lg: "1536px",
        },

        fontFamily: {
            headerLinks: ['M PLUS 1p', 'sans-serif'],
        },
        extend: {
            colors: {
                "green-dark-storyset": "#92E3A9",
                "gray-dark": "#273444",
                "gray-light": "#040D12",
                "theme-black": "#040D12",
                "theme-dark-green": "#183D3D",
                "theme-mid-green": "#5C8374",
                "theme-light-green": "#93B1A6",
            },
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
    plugins: [],
};
