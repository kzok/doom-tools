import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "./button";

const meta: Meta = {
  component: Button,
  parameters: {},
};

export default meta;

type ButtonProps = React.ComponentProps<typeof Button>;

const colors: readonly ButtonProps["color"][] = [undefined, "primary", "danger"];
const sizes: readonly ButtonProps["size"][] = ["small", undefined, "large"];

const ExampleButton: React.FC<ButtonProps> = (props) => <Button {...props}>Example</Button>;

export const Basic: StoryFn = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, auto)",
      placeItems: "center",
      placeContent: "start",
      gap: "8px",
    }}
  >
    {sizes.map((size) =>
      colors.map((color) => {
        const key = `${size}-${color}`;
        return (
          <>
            <ExampleButton key={key} color={color} size={size} />
            <ExampleButton key={`${key}-disabled`} size={size} disabled />
          </>
        );
      }),
    )}
  </div>
);
