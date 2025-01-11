/**
 * an immutable lump data-container.
 * @see https://github.com/id-Software/DOOM/blob/4eb368a/linuxdoom-1.10/w_wad.h
 */
export class Lump {
  /**
   * @param name lump name
   * @param data binary data
   */
  constructor(
    public readonly name: string,
    public readonly buffer: ArrayBuffer,
  ) {
    if (!name.match(/^[ -~]{0,8}$/)) {
      throw new RangeError(`lump.name must be ASCII chars less than 8. actual: ${name}`);
    }
  }
}
