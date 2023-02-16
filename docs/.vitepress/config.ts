import { defineConfig } from "vitepress";
import pkg from "../../package.json";
const repository = pkg.repository.url.substring(4);
export default defineConfig({
  // title: "VitePress-Plugin-Compression",
  titleTemplate: "VitePress-Plugin-Compression",
  description: "VitePress plugin for packing build folder.",
  cleanUrls: true,
  lastUpdated: true,
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    "zh-cn": {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh-cn/",
      // title: "VitePress打包插件",
      themeConfig: {
        siteTitle: "VitePress打包插件",
        nav: [
          { text: "主页", link: "/zh-cn/" },
          { text: "指南", link: "/zh-cn/guide" },
          { text: "选项", link: "/zh-cn/options" },
          // { text: "演示", link: "/zh-cn/demo" },
          {
            text: "v" + pkg.version,
            link: repository + "/releases/tag/v" + pkg.version,
          },
        ],
        outlineTitle: "目录",
        editLink: {
          pattern: repository + "/edit/main/docs/:path",
          text: "在 GitHub 上编辑",
        },
        lastUpdatedText: "最近更新",
        darkModeSwitchLabel: "主题模式",
        sidebarMenuLabel: "目录",
        returnToTopLabel: "返回顶部",
      },
    },
  },
  themeConfig: {
    // logo: "https://rollupjs.org/rollup-logo.svg",
    siteTitle: "VitePress-Plugin-Compression",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide" },
      { text: "Options", link: "/options" },
      // { text: "Demo", link: "/demo" },
      {
        text: "v" + pkg.version,
        link: repository + "/releases/tag/v" + pkg.version,
      },
    ],
    socialLinks: [{ icon: "github", link: pkg.repository.url.substring(4) }],
    editLink: {
      pattern: repository + "/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: `Released under the <a href="${repository}/blob/main/LICENSE">MIT License</a>.`,
      copyright: `Copyright © 2023-present <a href="https://github.com/${pkg.author}">Manchan4869</a>`,
    },
  },
});
