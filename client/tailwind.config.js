const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        colorGold: {
          800: "#AE9667"
        },
        colorBlack:{
          400: "#0B090A"
        },
        colorWhite:{
          100: "#ffffff"
        },
        colorGray:{
          100: "#CECECE"
        }
      },
      boxShadow:{
        "3xl" : "5px 4px 10px 0 rgba(0, 0, 0, 0.25);",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
