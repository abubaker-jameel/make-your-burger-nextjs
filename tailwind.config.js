const { withTV } = require("tailwind-variants/transformer");

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary-colors
        "primary-indigo": "#5243c2",
        "primary-danger": "#ff4d4f",
        "primary-black": "#1f2939",
        "primary-muted": "#949ba6",
        "primary-titan-white": "#f5f5ff",
        "primary-black-squeeze": "#f0f7fa",
        "primary-white": "#ffffff",
      },
      fontSize: {
        // primary-fonts sizes
        "primary-xlg": "4.5rem",
        "primary-lg": "3rem",
        "primary-md": "2.25rem",
        "primary-sm": "1.5rem",
        "primary-xsm": "1.25rem",
        "primary-xxsm": "1rem",
        "primary-14": "0.875rem",
        "primary-12": "0.75rem",
      },
    },
  },
  plugins: [],
});
