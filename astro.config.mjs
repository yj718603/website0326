import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',   // 启用 SSR
  adapter: node({ mode: 'standalone' })  // Node 适配器，独立模式
});
