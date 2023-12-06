/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // fontFamily: {
      //   // inter: ['var(--font-inter)', 'sans-serif'],
      //   // nunito: ['var(--font-nunito)', 'san-serif'],
      //   // plusJakartaSans: ['var(--font-PlusJakartaSans)'],
      // },
      screens: {
        // sm: '640px',
        sm: '480px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
        stats_shadow:
          'rgb(171 171 171 / 40%) 0px 2px 4px, rgb(115 115 115 / 30%) 0px 7px 13px -3px, rgb(67 67 67 / 20%) 0px -3px 0px inset',
      },
    },
  },
  corePlugins: {
    aspectRatio: true,
  },
  plugins: [require('@tailwindcss/forms')],
  // corePlugins: {
  //   aspectRatio: false,
  // },
  // plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
