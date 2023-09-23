import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        p: {
          "1": "#502301",
          "2": "#ac4b04",
          "3": "#f26600",
          "4": "#f5ae7b",
          "5": "#f8d3b8",

        },
        s: {
          "1": "#001f35",
          "2": "#006dbd",
          "3": "#0d99ff",
          "4": "#8ccfff",
          "5": "#d1ecff",
        },

      },
      fontFamily: {
        heading: ["var(--font-audiowide)"],
        body: ['var(--font-nerko-one)'],
      },
    },
  },
  plugins: [],
}
export default config
