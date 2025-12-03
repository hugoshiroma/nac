
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "azul-principal": "var(--azul-principal)",
        "azul-secundario": "var(--azul-secundario)",
        claro: "var(--claro)",
        "claro-preencher": "var(--claro-preencher)",
        escuro: "var(--escuro)",
        "escuro-bg": "var(--escuro-bg)",
        "subtom-bg": "var(--subtom-bg)",
      },
      fontFamily: {
        button: "var(--button-font-family)",
        "button-2": "var(--button-2-font-family)",
        "h2-POPPINS": "var(--h2-POPPINS-font-family)",
        "h3-POPPINS": "var(--h3-POPPINS-font-family)",
        "h4-POPPINS": "var(--h4-POPPINS-font-family)",
        "h5-poppins": "var(--h5-poppins-font-family)",
        "h6-poppins": "var(--h6-poppins-font-family)",
        "text-courant-poppins": "var(--text-courant-poppins-font-family)",
        "titulo-poppins-h1": "var(--titulo-poppins-h1-font-family)",
      },
    },
  },
  plugins: [],
}
export default config
