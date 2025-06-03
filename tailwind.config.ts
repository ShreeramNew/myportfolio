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
            "ipad-air": { min: "1025px", max: "1400px" }, // Custom breakpoint for iPad Air
            "ipad-pro": { min: "1366px", max: "1400px" }, // Custom breakpoint for iPad Air
            "ipad-air-portrait": { min: "768px", max: "1020px" }, // Custom breakpoint for iPad Air
         },
      },
   },
   plugins: [],
};
export default config;
