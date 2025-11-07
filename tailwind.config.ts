import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme:{ extend:{ colors:{ brand:'#6D28D9', gold:'#E0AA3E'}, boxShadow:{ soft:'0 10px 30px rgba(0,0,0,.08)'} } }, plugins:[]};
export default config;
