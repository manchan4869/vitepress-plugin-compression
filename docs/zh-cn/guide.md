# 指南

本指南将帮助您快速上手本插件。

## 功能

在 VitePress 构建完成后，本插件会自动打包构建输出文件夹，方便将构建产品进行分发。打包的类型、路径等均可以自行配置。

## 使用插件

::: tip 提示
本插件依赖于 VitePress 的构建钩子，所以请确保 VitePress 的版本应`>=1.0.0-alpha.5`。
:::

如果已经有一个完整的 VitePress 项目，请使用以下命令将本插件添加进你的项目。

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

进入 VitePress 项目的配置文件，通常是`.vitepress/config.js`。引入本插件，并在 `buildEnd` 钩子下调用本插件导出的函数。使用实例如下。

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

## 打包格式

本插件依赖于 7za.exe，其只支持 7z, xz, lzma, cab, zip, gzip, bzip2 和 tar，为考虑兼容性，本插件默认情况下打包为 zip。

## 默认配置

本插件开箱即用，若 VitePress 未改变`outDir`选项，本插件可以在无需任何配置的情况下达到效果。如 VitePress 改变`outDir`选项，请修改本插件的`inDir`选项。

默认情况下，插件会在构建结束后将 `dist` 文件夹打包成 `dist.zip` 并放在 `dist` 文件夹内。

如果需要更加个性化的配置，可以参考[配置选项](./options.md)。

## 贡献

本插件基于 MIT 许可证，你可以在对此进行[贡献](https://github.com/manchan4869/vitepress-plugin-compression)。
