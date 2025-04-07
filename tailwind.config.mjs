/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        style: ["Microsoft Sans Serif", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1900px",
        "4xl": "2500px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scroll: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-66.666%)" }, // Adjusted to loop smoothly
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        scroll: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [],
};
