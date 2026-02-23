import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0909",
        themeOrange: "#ff5400",
      },
      screens: {
        ipadMini: { min: "1024px", max: "1180px" },
        "max-md": { min: "100px", max: "1024px" },
        "ipadMini-To-ipadAir": { min: "1024px", max: "1365px" },
        "ipad-air": { min: "1180px", max: "1365px" },
        "ipad-pro": { min: "1366px", max: "1400px" },
        afterIpad: { min: "1400px" },
        "ipad-air-portrait": { min: "768px", max: "1020px" },
      },
    },
  },
  plugins: [],
};
export default config;
