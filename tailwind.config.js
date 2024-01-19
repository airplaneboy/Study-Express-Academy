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
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        growAndShrink: 'growAndShrink 700ms ease-in-out forwards',
        spin: 'spin 1000ms linear',
        shine: 'shine 12s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        sparkle: {
          '0%': { transform: 'scale(0) rotate(0deg) ' },
          '50%': { transform: 'scale(1) rotate(90deg)' },
          '100%': { transform: 'scale(0) rotate(180deg)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg) ' },
          '100%': { transform: 'rotate(180deg)' },
        },
        growAndShrink: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        shine: {
          '10%': {
            backgroundPosition: '-100% 0',
          },
          '50%': {
            backgroundPosition: '200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
      },
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

        md: '769px',
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
