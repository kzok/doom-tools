import { describe, it, expect } from "vitest";
import { Lump } from "../lump";

describe(Lump, () => {
  it("can be initialized.", () => {
    const buffer = Uint8Array.from([1, 2, 3, 4]);
    const lump = new Lump("LUMPNAME", buffer);
    expect(lump.name).toBe("LUMPNAME");
    expect(lump.buffer).toEqual(Uint8Array.from([1, 2, 3, 4]));
  });

  it("accepts name shorter than 8 chars.", () => {
    const lump = new Lump("NAME", Uint8Array.from([]));
    expect(lump.name).toBe("NAME");
  });

  it("rejects too long lump name.", () => {
    const buffer = Uint8Array.from([]);
    expect(() => new Lump("TOO_LONG_LUMP_NAME", buffer)).toThrowError(
      "lump.name must be ASCII chars less than 8. actual: TOO_LONG_LUMP_NAME",
    );
  });
});
