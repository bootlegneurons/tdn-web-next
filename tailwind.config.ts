import type { Config } from 'tailwindcss';
import type { PluginUtils } from 'tailwindcss/types/config';

const widthExtensions = ({ theme }: PluginUtils) => ({
  section: `calc(100% - ${theme('spacing.8')})`,
});

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tdn-primary': '#102766',
        'tdn-secondary': '#405bb2',
        'tdn-highlight': '#ffd3da',
        'tdn-highlight-pale': '#fff3f5',
        'tdn-highlight-dark': '#ecadb7',
      },
      fontFamily: {
        heading: ['var(--font-jost)', 'Arial', 'Helvetica', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        hbd: ['var(--font-pacifico)', 'Arial', 'Helvetica', 'sans-serif']
      },
      maxWidth: widthExtensions,
      width: widthExtensions,
      flexGrow: {
        2: '2',
      },
      keyframes: {
        float: {
          '0%,33%': {
            filter: 'drop-shadow(0 0px 0px rgba(102, 123, 193, 0))',
            transform: 'translatey(0)',
          },
          '66%': {
            filter: 'drop-shadow(0 8px 4px rgba(102, 123, 193, 1))',
            transform: 'translatey(-0.8rem)',
          },
          '100%': {
            filter: 'drop-shadow(0 0px 0px rgba(102, 123, 193, 0))',
            transform: 'translatey(0)',
          },
        }
      },
      animation: {
        float: 'float 3.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
