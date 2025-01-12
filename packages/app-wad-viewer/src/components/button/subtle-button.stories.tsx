import type { Meta, StoryFn } from "@storybook/react";
import { SubtleButton } from "./subtle-button";
import { icons } from "../icons";

const meta: Meta = {
  component: SubtleButton,
  parameters: {},
};

export default meta;

export const Basic: StoryFn = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, auto)",
      placeItems: "center",
      placeContent: "start",
      gap: "8px",
    }}
  >
    <SubtleButton>
      <icons.MoreHr />
    </SubtleButton>
    <SubtleButton>
      <icons.Setting />
    </SubtleButton>
    <SubtleButton disabled>
      <icons.Close />
    </SubtleButton>
  </div>
);
