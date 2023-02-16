# VitePress-Plugin-Compression

[![npm](https://img.shields.io/npm/v/vitepress-plugin-compression.svg?style=flat-square)](https://www.npmjs.com/package/vitepress-plugin-compression)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/vitepress-plugin-compression?style=flat-square)](https://bundlephobia.com/package/vitepress-plugin-compression@latest)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/manchan4869/vitepress-plugin-compression?style=flat-square)](https://github.com/manchan4869/vitepress-plugin-compression/blob/main/package.json)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/vitepress-plugin-compression/peer/vitepress?style=flat-square)](https://github.com/vuejs/vitepress)
[![npm download](https://img.shields.io/npm/dm/vitepress-plugin-compression?style=flat-square)](https://www.npmjs.com/package/vitepress-plugin-compression)
[![license](https://img.shields.io/npm/l/vitepress-plugin-compression?style=flat-square)](https://github.com/manchan4869/vitepress-plugin-compression/blob/main/LICENSE)

VitePress plugin for packing build folder.[Official Docs](https://vitepress-plugin-compression.manchan.top/).

English | [简体中文](./README.zh-CN.md)

## Install

```bash
# npm
npm i -D vitepress-plugin-compression

# yarn
yarn add -D vitepress-plugin-compression

# pnpm
pnpm add -D vitepress-plugin-compression
```

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

## Options

```ts
export interface Options {
  /**
   * Input Directory
   * @default `dist`
   */
  inDir?: string;
  /**
   * Output Directory
   * @default `dist`
   */
  outDir?: string;
  /**
   * Archive Name
   * @default `dist`
   */
  outFileName?: string;
  /**
   * Archive Type
   * @default `zip`
   */
  type?: "7z" | "zip" | "lzma" | "cab" | "gzip" | "bzip2" | "tar";
}
```

## License

MIT, see [the license file](./LICENSE)
