import { describe, it, expect } from "vitest";
import { greet } from "../greet";

describe(greet, () => {
  it("can greet.", () => {
    expect(greet("foo")).toBe("Hello, foo.");
    expect(greet("bar")).toBe("Hello, bar.");
  });
});
