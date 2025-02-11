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

        //pink
        pinkPastel: "#fbb3dc",

        //blue
        bluePastel: "#3dbac2",

        //yellow
        yellowPastel: "#e6c900",

        //purple
        lightPurple: "#efdbfc",
        darkPurple: "#9e83b0",
      },
      fontFamily: {
        playwrite_AU_SA: ["Playwrite AU SA", "Young_Serif"],
        delius: ["Roboto Condensed", "Young_Serif"],
        montserrat: ["Montserrat", "Young_Serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
