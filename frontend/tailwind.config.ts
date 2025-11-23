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
        marian: {
          blue: "#0f265c",   // Azul Profundo (Manto) - Mais escuro e nobre
          light: "#f8fafc",  // Gelo
          gold: "#d4af37",   // Ouro Envelhecido (Sacro)
          red: "#8a1c1c",    // Vermelho Sangue/Coração (Sóbrio)
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "sacred-pattern": "url('https://www.transparenttextures.com/patterns/cubes.png')", // Textura sutil opcional
      },
      borderRadius: {
        'church': '100px 100px 0 0', // Formato de Arco
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;