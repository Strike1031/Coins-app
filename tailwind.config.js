/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`;
//     }
//     return `rgb(var(${variableName}))`;
//   };
// }

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        dropdown: '0px 16px 50px rgba(0, 42, 124, 0.06)',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        'space-grostek': ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '1.5'],
        sm: ['14px', '1.5'],
        base: ['16px', '1.5'],
        md: ['18px', '1.5'],
        lg: ['24px', '1.2'],
        xl: ['32px', '1.2'],
        '2xl': ['40px', '1.2'],
        '3xl': ['48px', '1.2'],
        '4xl': ['56px', '1.2'],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          200: '#AAC6FD',
          500: '#0054F8',
          600: '#0046CF',
        },
        neutral: {
          10: '#E5ECF2',
          20: '#F3F6FA',
          30: '#E5ECF2',
          40: '#CFD8E1',
          50: '#98A2AE',
          60: '#868FA0',
          80: '#364461',
          70: '#5E6A81',
          100: '#0A0A0A',
        },
        dark: {
          DEFAULT: '#222222',
          100: '#0F172A',
          200: '#1E293B',
        },
        red: {
          500: '#EA3943',
          semantic: '#F15B5B',
        },
        green: {
          500: '#5BC08E',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
