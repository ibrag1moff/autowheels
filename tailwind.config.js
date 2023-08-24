/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                hero: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("/hero.jpg");',
                model: "linear-gradient(19deg, rgba(17,103,177,1) 18%, rgba(22,55,84,1) 84%)",
            },
            screens: {
                xs: "450px",
                xlg: "930px",
            },
            colors: {
                main: "#1167b1",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
