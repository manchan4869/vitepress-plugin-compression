import fs from "fs";
fs.mkdirSync("docs/.vitepress", { recursive: true });
fs.copyFileSync("config.js", "docs/.vitepress/config.js");
