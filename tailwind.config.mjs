/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      background: "var(--background)", // Uses CSS variable
      foreground: "var(--foreground)",
      primary: '#9e0000', 
    },
    fontFamily: {
      sans: "var(--font-sans)",
      mono: "var(--font-mono)",
    },
  },
};
export const plugins = [];
