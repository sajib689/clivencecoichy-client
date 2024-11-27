import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        "gray-light": "#86A0B0",
        "blue-primary": "#0F4262",
        "green-primary": "#9BC234",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "540px",
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
  darkMode: "class",
  plugins: [nextui()]
} satisfies Config;
