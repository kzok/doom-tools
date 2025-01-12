import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useUUID } from "../use-uuid";

describe(useUUID, () => {
  const Example: React.FC = () => <div data-testid="example">{useUUID()}</div>;

  let spy: ReturnType<typeof vi.spyOn> | null = null;
  beforeEach(() => {
    spy = vi
      .spyOn(crypto, "randomUUID")
      .mockImplementationOnce(() => "12345678-1234-1234-1234-123456789012");
  });
  afterEach(() => {
    vi.restoreAllMocks();
    spy = null;
  });

  it("returns UUID as string.", () => {
    render(<Example />);
    const el = screen.getByTestId("example");
    expect(el.textContent).toBe("12345678-1234-1234-1234-123456789012");
    expect(spy).toHaveBeenCalledOnce();
  });

  it("returns same UUID during rendering.", () => {
    const { rerender } = render(<Example />);
    rerender(<Example />);

    const el = screen.getByTestId("example");
    expect(el.textContent).toBe("12345678-1234-1234-1234-123456789012");
    expect(spy).toHaveBeenCalledOnce();
  });
});
