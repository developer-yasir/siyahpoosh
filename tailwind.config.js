/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            colors: {
                background: '#f5f5f7', // Light gray background
                surface: '#ffffff',    // White surface
                primary: '#1d1d1f',    // Almost black text
                secondary: '#86868b',  // Gray text
                accent: '#000000',     // Stark black for CTAs
            },
        },
    },
    plugins: [],
}
