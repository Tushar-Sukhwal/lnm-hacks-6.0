import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      publicSans: ["Public Sans", "sans-serif"],
      lexendMega: ["Lexend Mega", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "section-6": "url('/section-6-background.png')",
        "section-7": "url('/topic-7-bg.png')",
      },
      cursor: {
        'fancy': 'url(/Vector.cur), default',
      }
    },
  },
  plugins: [],
};
export default config;

