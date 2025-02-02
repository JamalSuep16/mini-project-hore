import type { Config } from "tailwindcss";

export default {
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

        //merah
        primeJamal: "#a52422",

        //biru
        lightAnas: "#6b9ac4",
        darkAnas: "#034078",

        //hijau
        lightSena: "#b9f18c",
        darkSena: "#04724D",
      },
    },
  },
  plugins: [],
} satisfies Config;
