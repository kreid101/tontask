import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const konstaConfig = require('konsta/config');

/** @type {import('tailwindcss').Config} */


module.exports = konstaConfig({
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors:{
                t:{
                    black:"#212121",
                    blue:"#2990FF",
                    hint:"#AAAAAA"
                }
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
})
