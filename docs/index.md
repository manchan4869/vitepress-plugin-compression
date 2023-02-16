---
layout: home
title: Home
hero:
  name: VitePress-Plugin-Compression
  text: VitePress plugin for packing build folder.
  tagline: Zip, 7Zip, Tar, and more ...
  # image:
  #   src: https://rollupjs.org/rollup-logo.svg
  #   alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /guide
    - theme: alt
      text: View on GitHub
      link: https://github.com/manchan4869/vitepress-plugin-compression
---

<div class="vp-doc homeContent">

## Install

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

## Usage

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
