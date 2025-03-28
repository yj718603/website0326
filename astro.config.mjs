// @ts-check
import { defineConfig } from 'astro/config';
//
// https://astro.build/config
export default defineConfig({
  output: 'server'
});
//import { defineConfig } from 'astro/config';
//import node from '@astrojs/node';
//export default defineConfig({
  //output: 'server',             // 重要：启用 SSR 模式
  //adapter: node({ mode: 'standalone' })  // 'standalone' 模式更适合 Azure Web App
//});
//import { defineConfig } from 'astro/config';
//import netlify from '@astrojs/netlify'; // <-- 确保这一行存
//export default defineConfig({
//  output: 'server',   // Astro SSR 必须加上 `output: 'server'`
//  adapter: netlify() // 使用 Netlify 适配器
//});
