# Guide

This guide will help you get started with this plugin quickly.

## Features

After a VitePress project has been built, the plugin will automatically package the build output folder for easy distribution of the build product. The type and path of the package can be configured by yourself.

## Using the plugin

::: tip tips
This plugin relies on VitePress build hooks, so please make sure VitePress version should be `>=1.0.0-alpha.5`.
:::

If you already have a complete VitePress project, use the command to add this plugin to your project.

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

Go to the configuration file of the VitePress project, usually `.vitepress/config.js`. Import this plugin and call the functions exported by this plugin under the `buildEnd` hook. The usage example is as follows.

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

## Archive format

This plugin depends on 7za.exe, which only supports 7z, xz, lzma, cab, zip, gzip, bzip2 and tar, for compatibility, this plugin is packaged as zip by default.

## Default Configuration

This plugin works out of the box, if VitePress does not change `outDir` option, this plugin can achieve the effect without any configuration. If VitePress changes the `outDir` option, please change the `inDir` option of this plugin.

By default, the plugin will pack the `dist` folder into `dist.zip` and place it inside the `dist` folder after the build is finished.

For a more personalized configuration, you can refer to [configuration options](./options.md).

## Contributions

This plugin is based on the MIT license and you can [contribute](https://github.com/manchan4869/vitepress-plugin-compression) to it.
