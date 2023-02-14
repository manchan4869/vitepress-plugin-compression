import { defineConfig } from "vitepress";

import compression from "../../../dist/esm/index.mjs";

export default defineConfig({
  async buildEnd() {
    compression({ inDir: "./docs/.vitepress/dist" });
  },
});
