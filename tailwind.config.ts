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
        navy: {
          DEFAULT: "#0A1A35",
          900: "#08142A",
          800: "#0F254A",
        },
        electric: "#2A7FFF",
        blaze: "#FF6B35",
      },
      backgroundImage: {
        "grid-overlay":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
      boxShadow: {
        glow: "0 18px 45px -18px rgba(42, 127, 255, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
