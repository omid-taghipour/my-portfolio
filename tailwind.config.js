/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    theme: {
        screens: {
            ssm: "0px",
            sm: "480px",
            md: "1114px",
            lg: "1536px"
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
                "theme-bright2-white": "#ccd6f6",
                "theme-bright1-white": "#8892b0"
            },
            spacing: {
                128: "32rem",
                144: "36rem"
            },
            borderRadius: {
                "4xl": "2rem"
            },
            boxShadow: {
                glow: "0px 1px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 8px rgba(82, 168, 236, 0.6)"
            }
        }
    },
    plugins: []
};
