---
layout: home
title: 主页
hero:
  name: VitePress-Plugin-Compression
  text: 打包 build 文件夹的 VitePress 插件。
  tagline: 支持 Zip, 7Zip, Tar 等格式...
  # image:
  #   src: https://rollupjs.org/rollup-logo.svg
  #   alt: VitePress
  actions:
    - theme: brand
      text: 快速上手
      link: /guide
    - theme: alt
      text: 在GitHub查看
      link: https://github.com/manchan4869/vitepress-plugin-compression
---

<div class="vp-doc homeContent">

## 安装

::: code-group

```bash [npm]
npm i -D vitepress-plugin-compression
```

```bash [yarn]
yarn add -D vitepress-plugin-compression
```

```bash [pnpm]
pnpm add -D vitepress-plugin-compression
```

:::

## 使用

```ts
// .vitepress/config.js
import { defineConfig } from "vitepress";
import compression from "vitepress-plugin-compression";

export default defineConfig({
  async buildEnd() {
    compression();
  },
});
```

</div>
