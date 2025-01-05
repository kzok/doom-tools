import type { WadIdentification } from "./types";
import { Lump } from "./lump";

/**
 * an immutable WAD Archive data-container.
 * @see https://github.com/id-Software/DOOM/blob/4eb368a/linuxdoom-1.10/w_wad.h
 */
export class WadArchive {
  /**
   * initialize from data source
   * @param source data source
   */
  static from(source: ArrayBuffer): WadArchive {
    const ident = readAsciiString(source, 0, 4);
    if (ident !== "IWAD" && ident !== "PWAD") {
      throw new RangeError(
        `wad identification must be either of "IWAD" or "PWAD". actual: ${ident}`,
      );
    }

    const dataView = new DataView(source);
    const numlumps = dataView.getInt32(4, true);
    if (numlumps < 0) {
      throw new RangeError(`numlumps must not be negative value. actual: ${numlumps}`);
    }
    const infotableofs = dataView.getInt32(8, true);
    if (infotableofs < 0) {
      throw new RangeError(`infotableofs must not be negative value. actual: ${infotableofs}`);
    }

    const lumps: Lump[] = [];
    for (let i = 0; i < numlumps; i += 1) {
      const offset = infotableofs + i * 16;
      const filepos = dataView.getInt32(offset, true);
      if (filepos < 0) {
        throw new RangeError(`lump[${i}].filepos must not be negative value. actual: ${filepos}`);
      }
      const size = dataView.getInt32(offset + 4, true);
      if (size < 0) {
        throw new RangeError(`lump[${i}].size must not be negative value. actual: ${size}`);
      }
      const name = readAsciiString(source, offset + 8, 8);
      lumps.push(new Lump(name, source.slice(filepos, filepos + size)));
    }
    return new WadArchive(ident, lumps);
  }
  /**
   * @param ident "IWAD" or "PWAD"
   * @param lumps lumps in WAD Archive
   */
  constructor(
    public readonly ident: WadIdentification,
    public readonly lumps: readonly Lump[],
  ) {}
}

/**
 * read ascii string from data source
 * @param source
 * @param offset
 * @param size
 * @returns
 */
const readAsciiString = (source: ArrayBuffer, offset: number, size: number): string => {
  const array = new Uint8Array(source).slice(offset, offset + size);
  let len = 0;
  // ensure char codes are within ascii codes.
  for (; len < array.length; len += 1) {
    const c = array[len];
    if (c == null || c < 32 || 126 < c) {
      break; // skip after unprintable char is found.
    }
  }
  return String.fromCharCode(...array.slice(0, len));
};
