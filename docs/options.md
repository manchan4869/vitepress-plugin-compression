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
