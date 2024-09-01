/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#004B87", // Example primary color
        "custom-secondary": "#0074D9", // Example secondary color
        "custom-accent": "#FF851B", // Example accent color
        "custom-accent-dark": "#FF6314", // Darker shade for hover
        "custom-light": "#F5F5F5", // Light background color
        "custom-dark": "#333333", // Dark text color
        "custom-hero": "#2C3E50", // Hero section background color
      },
    },
  },
  variants: {},
  plugins: [],
};
