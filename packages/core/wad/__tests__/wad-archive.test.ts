import { describe, it, expect } from "vitest";
import { WadArchive } from "../wad-archive";
import { readWadFile } from "../../test/fixtures";

describe(WadArchive, () => {
  it("can load empty.wad.", async () => {
    const wad = WadArchive.from(await readWadFile("empty.wad"));

    expect(wad.ident).toBe("PWAD");
    expect(wad.lumps.length).toBe(0);
  });

  it("can load example1.wad.", async () => {
    const wad = WadArchive.from(await readWadFile("example1.wad"));

    expect(wad.ident).toBe("PWAD");
    expect(wad.lumps.length).toBe(3);
    expect(wad.lumps[0]!.name).toBe("COLORMAP");
    expect(wad.lumps[0]!.buffer.byteLength).toBe(8704);
    expect(wad.lumps[1]!.name).toBe("CAKE");
    expect(wad.lumps[1]!.buffer.byteLength).toBe(89808);
    expect(wad.lumps[2]!.name).toBe("CREDIT");
    expect(wad.lumps[2]!.buffer.byteLength).toBe(63);
  });
});
