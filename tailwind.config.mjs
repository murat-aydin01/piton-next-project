/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "oklch(84.13% 0.1712 84.76)",
        heroBg: "oklch(85.94% 0.1746 90.06)"
      },
    },
  },
  plugins: [],
};
