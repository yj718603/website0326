// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: process.env.PORT || 4321,  // 设置开发服务器端口为 8080
    host: '0.0.0.0'
  },
  output: 'server',   // 启用 SSR
  adapter: node({ mode: 'standalone' })  // Node 适配器，独立模式
});
