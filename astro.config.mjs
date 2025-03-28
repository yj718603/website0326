import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  server: {
    port: 8080,  // 设置开发服务器端口为 8080
  },
  output: 'server',   // 启用 SSR
  adapter: node({ mode: 'standalone' })  // Node 适配器，独立模式
});
