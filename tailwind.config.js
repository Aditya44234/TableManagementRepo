/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    safelist: [
        'dark:bg-slate-900',
        'dark:text-white',
        'dark:bg-slate-800',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
