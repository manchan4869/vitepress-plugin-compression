import _7z from "7zip-min";

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

export default function compression(options?: Options) {
  const inDir = options?.inDir || "dist";
  const outDir = options?.outDir || "dist";
  const outFileName = options?.outFileName || "dist";
  const type = options?.type || "zip";
  console.log("\x1b[32m%s\x1b[0m", `creating ${type} archive.`);
  _7z.pack(inDir, `${outDir}/${outFileName}.${type}`, (err) => {
    err === null
      ? console.log("\x1b[32m%s\x1b[0m", type + " archive packaging completed")
      : console.error(err);
  });
}
