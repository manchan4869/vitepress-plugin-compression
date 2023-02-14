# vitepress-plugin-compression

[![npm](https://img.shields.io/npm/v/vitepress-plugin-compression.svg?style=flat-square)](https://www.npmjs.com/package/vitepress-plugin-compression)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/vitepress-plugin-compression?style=flat-square)](https://bundlephobia.com/package/vitepress-plugin-compression@latest)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/manchan4869/vitepress-plugin-compression?style=flat-square)](https://github.com/manchan4869/vitepress-plugin-compression/blob/main/package.json)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/vitepress-plugin-compression/peer/vitepress?style=flat-square)](https://github.com/vuejs/vitepress)
[![npm download](https://img.shields.io/npm/dm/vitepress-plugin-compression?style=flat-square)](https://www.npmjs.com/package/vitepress-plugin-compression)
[![license](https://img.shields.io/npm/l/vitepress-plugin-compression?style=flat-square)](https://github.com/manchan4869/vitepress-plugin-compression/blob/main/LICENSE)

打包 `build` 文件夹的 [VitePress](https://github.com/vuejs/vitepress) 插件。

[English](https://github.com/manchan4869/vitepress-plugin-compression#readme) | 简体中文

## 安装

```bash
# npm
npm i -D vitepress-plugin-compression

# yarn
yarn add -D vitepress-plugin-compression

# pnpm
pnpm add -D vitepress-plugin-compression
```

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

## 选项

```ts
export interface Options {
  /**
   * 输入目录
   * @default `dist`
   */
  inDir?: string;
  /**
   * 输出目录
   * @default `dist`
   */
  outDir?: string;
  /**
   * 打包名称
   * @default `dist`
   */
  outFileName?: string;
  /**
   * 打包类型
   * @default `zip`
   */
  type?: "7z" | "zip" | "lzma" | "cab" | "gzip" | "bzip2" | "tar";
}
```

## 许可

MIT, 查看[许可文件](./LICENSE)
