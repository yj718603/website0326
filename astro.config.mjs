// @ts-check
//import { defineConfig } from 'astro/config';
//
// https://astro.build/config
//export default defineConfig({});
import { defineConfig } from 'astro/config';
//import node from '@astrojs/node';

export default defineConfig({
  output: 'server',             // 重要：启用 SSR 模式
  adapter: node({ mode: 'standalone' })  // 'standalone' 模式更适合 Azure Web App
});
