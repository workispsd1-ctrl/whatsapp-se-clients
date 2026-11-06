import type { Config } from "tailwindcss";

// Visual system per the landing-page-design skill: one typeface (Poppins), flat backgrounds,
// Tailwind type/radius scale only, spacing from the 2/4/8/12/16/24/32/40/48/64/80/96 table,
// motion on a weighted curve.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F3EA",
        sand: "#EFE9DC",
        line: "#D9D2C3",
        ink: "#181818",
        ink2: "#1F1F1F",
        ink3: "#272727",
        mute: "#5A6670",
        green: "#25D366",
        deep: "#128C5E",
        haldi: "#FFC43D",
        bubble: "#DCF8C6",
        tick: "#53BDEB",
        warn: "#E5484D",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        base: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
