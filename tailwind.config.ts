import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        textColor: "rgb(255, 255, 255)",
        secoundDarkBg: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
export default config;
