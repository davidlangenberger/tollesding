import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f6f1e8",
        cream: "#fffaf2",
        ink: "#1f2937",
        sage: "#94a88a",
        sun: "#d6a34f",
        mist: "#dce9e2",
        clay: "#b86c4f"
      },
      boxShadow: {
        soft: "0 24px 60px rgba(31, 41, 55, 0.08)",
        float: "0 16px 35px rgba(31, 41, 55, 0.1)"
      },
      backgroundImage: {
        "paper-grid":
          "linear-gradient(rgba(31,41,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(31,41,55,0.04) 1px, transparent 1px)"
      },
      animation: {
        drift: "drift 16s ease-in-out infinite",
        glow: "glow 6s ease-in-out infinite"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        glow: {
          "0%, 100%": { opacity: "0.65" },
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
