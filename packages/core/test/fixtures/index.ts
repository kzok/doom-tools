import fs from "node:fs/promises";
import path from "node:path";

/**
 * read Wad file for test
 * @param wadname file name of Wad
 * @returns ArrayBuffer
 */
export const readWadFile = async (wadname: "empty.wad" | "example1.wad"): Promise<ArrayBuffer> => {
  const file = await fs.readFile(path.resolve(__dirname, wadname));
  return file.buffer;
};
