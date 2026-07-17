import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#080808",
        gold: "#C9A227",
        emerald: "#064E3B",
        premiumWhite: "#F8F7F2",
        warmGray: "#A8A29E"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serifjp: ["Noto Serif JP", "ui-serif", "Georgia", "serif"]
      },
      boxShadow: {
        gold: "0 24px 80px rgba(201, 162, 39, 0.14)",
        emerald: "0 24px 80px rgba(6, 78, 59, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
