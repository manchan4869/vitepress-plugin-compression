# vitepress-plugin-compression

[![npm](https://img.shields.io/npm/v/vitepress-plugin-compression)](https://www.npmjs.com/package/vitepress-plugin-compression)

VitePress plugin for packing build folder.

## Install

```bash
npm i -D vitepress-plugin-compression
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
   * @default `7z`
   */
  type?: "7z" | "zip" | "lzma" | "cab" | "gzip" | "bzip2" | "tar";
}
```

## License

MIT, see [the license file](./LICENSE)
