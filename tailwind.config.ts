import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   container:{
      center:true,
      padding:{
        DEFAULT: '1rem',
        sm:"1rem",
        md:"1.2rem",
        lg:"1.4rem"
      }
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'gray-white': '#DEDFE2',
      'black': '#000000',
      'gray-black': '#0F1629',
      'heading': '#0F1629',
      'sub-heading': '#0B1426',
      'normal': '#3E424A',
      'red': '#E96975',
      'green': '#0AB27D0F',
      'blue': '#0052FE',

    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
