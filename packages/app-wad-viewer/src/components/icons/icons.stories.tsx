import type { Meta, StoryFn } from "@storybook/react";
import { Close, ArrowDropdown, Add, MoreHr, MoreVt, Setting } from "./icons";

const meta: Meta = {
  parameters: {},
};

export default meta;

type IconComponent = typeof Close;

const icons: readonly IconComponent[] = [Close, ArrowDropdown, Add, MoreHr, MoreVt, Setting];

export const Basic: StoryFn = () => (
  <div
    style={{
      display: "flex",
      placeItems: "center",
      placeContent: "start",
      gap: "8px",
    }}
  >
    {icons.map((Icon) => (
      // biome-ignore lint/correctness/useJsxKeyInIterable: storybook
      <Icon style={{ fontSize: "24px", color: "#0f6cbd" }} />
    ))}
  </div>
);
