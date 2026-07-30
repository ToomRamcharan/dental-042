import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./pages/**/*{js,ts,jsx,tsx,mdx}', './components/**/*{js,ts,jsx,tsx,mdx}', './app/**/*{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { primary: { DEFAULT: '#0ea5e9', rgb: '14,165,233' }, accent: { DEFAULT: '#0284c7', rgb: '2,132,199' } }, fontFamily: { heading: ['Inter', 'serif'], body: ['Inter', 'sans-serif'] } } },
  plugins: [],
};
export default config;