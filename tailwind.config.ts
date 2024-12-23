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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'light-violet': 'rgba(157, 144, 250, 0.25)',
        'gray-overlay': 'rgba(108, 108, 108, 0.3)'
      },
      fontFamily: {
        satoshiLight: ["var(--font-satoshi-light)"],
        satoshiRegular: ["var(--font-satoshi-regular)"],
      },
    },
  },
  plugins: [],
};
export default config;
