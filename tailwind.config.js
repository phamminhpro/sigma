/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/flowbite/**/*.js',
        './node_modules/tw-elements/dist/js/**/*.js',
    ],
    darkMode: 'class', // false or 'media'
    theme: {
        extend: {
            keyframes: {
                slide: {
                    from: {
                        opacity: '0',
                        right: '-212px',
                    },
                    to: {
                        opacity: '1',
                        right: '0px',
                    },
                },
            },
            keyframes: {
                spin: {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: 'rotate(360deg)',
                    },
                },
            },
        },

        animation: {
            slide: 'slide 0.3s linear',
            spin: 'spin 1s linear infinite',
        },
        screens: {
            '2xl': { max: '1800px' },
            // => @media (max-width: 1535px) { ... }

            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '800px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '600px' },
            // => @media (max-width: 550px) { ... }
        },
    },
    plugins: [require('flowbite/plugin'), require('tw-elements/dist/plugin')],
};
