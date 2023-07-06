/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./components/**/*.{html,js}",
        "./pages/**/*.{html,js}"
    ],
    theme: {
        extend: {
            colors: {
                msRed600: '#dc2626',
                msRed500: '#ff4842',
                msRed100: '#FFE7D9',
                msCyan500: '#1890FF',
                msCyan50: '#D0F2FF',
                msTeal800: '#01534A',
                msGreen800: '#166534',
                msGreen600: '#00AB55',
                msGreen500: '#22C55E',
                msGreen100: '#C8FACD',
                msOrange500: '#F97316',
                msGray300: '#9CA3AF',
                msGray200: '#B9B9B9',
                msGray40: '#F9FAFB',
            },
            screens: {
                'device': { 'min': '340px' },
                // 'md': { 'min': '768px', 'max': '1023px' },
                // 'lg': { 'min': '1024px', 'max': '1279px' },
                // 'xl': { 'min': '1280px', 'max': '1535px' },
                // '2xl': { 'min': '1536px' },
            },
        },
    },
    plugins: [],
}

