import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          DEFAULT: "1140px",
        },
      },
      backgroundImage: {
        "banner-gradient":
          "linear-gradient(270deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.60) 40%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
