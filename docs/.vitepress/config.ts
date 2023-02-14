import { defineConfig } from "vitepress";

export default defineConfig({
  // title: "vitepress-plugin-compression",
  titleTemplate: "vitepress-plugin-compression",
  description: "VitePress plugin for packing build folder.",
  cleanUrls: true,
  lastUpdated: true,
  locales: {},
  themeConfig: {
    logo: "https://rollupjs.org/rollup-logo.svg",
    // siteTitle: "Hello World",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide" },
      { text: "Options", link: "/options" },
      { text: "Demo", link: "/" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/manchan4869/vitepress-plugin-compression/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2019-present <a href="https://github.com/manchan4869">Manchan4869</a>',
    },
  },
});
