import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button } from "../button";

describe("Button component", () => {
  it("calls onClick when clicked.", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Example</Button>);

    const button = screen.getByRole("button", { name: "Example" });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("doesnt call onClick when disabled even if clicked.", async () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        Example
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Example" });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  describe("color", () => {
    it("primary", () => {
      render(<Button color="primary">Example</Button>);

      const button = screen.getByRole("button", { name: "Example" });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("data-color", "primary");
    });

    it("danger", () => {
      render(<Button color="danger">Example</Button>);

      const button = screen.getByRole("button", { name: "Example" });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("data-color", "danger");
    });
  });

  describe("size", () => {
    it("small", () => {
      render(<Button size="small">Example</Button>);

      const button = screen.getByRole("button", { name: "Example" });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("data-size", "small");
    });

    it("large", () => {
      render(<Button size="large">Example</Button>);

      const button = screen.getByRole("button", { name: "Example" });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("data-size", "large");
    });
  });
});
